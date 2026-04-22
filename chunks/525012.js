i.d(t, { A: () => o });
var n = i(402256),
    r = i(177487);
let o = {
    read: function (e, t, i) {
        try {
            if (Array.isArray(e)) return a(new DataView(Uint8Array.from(e).buffer), { size: e.length }, 0, i);
            let { naaBlock: n, dataOffset: r } = (function (e, t) {
                for (; t + 12 <= e.byteLength; ) {
                    var i, n;
                    let r = (function (e, t) {
                        if (0x3842494d !== e.getUint32(t, !1)) throw Error("Not an IPTC resource block.");
                        let i = e.getUint8(t + 4 + 2),
                            n = (i % 2 == 0 ? i + 1 : i) + 1;
                        return { headerSize: 6 + n + 4, type: e.getUint16(t + 4), size: e.getUint32(t + 4 + 2 + n) };
                    })(e, t);
                    if (((i = r), 1028 === i.type)) return { naaBlock: r, dataOffset: t + r.headerSize };
                    t += r.headerSize + r.size + ((n = r), +(n.size % 2 != 0));
                }
                throw Error("No IPTC NAA resource block.");
            })(e, t);
            return a(e, n, r, i);
        } catch (e) {
            return {};
        }
    },
};
function a(e, t, i, o) {
    let a,
        s = {},
        l = i + t.size;
    for (; i < l && i < e.byteLength; ) {
        let { tag: t, tagSize: l } = (function (e, t, i, o, a) {
            var s, l, u, c;
            if (((s = e), (l = t), 28 !== s.getUint8(l))) return { tag: null, tagSize: 0 };
            let d = e.getUint16(t + 1),
                f = e.getUint16(t + 3);
            if (!a && !n.A.iptc[d]) return { tag: void 0, tagSize: f };
            let p = (function (e, t, i) {
                    let n = [];
                    for (let r = 0; r < i; r++) n.push(e.getUint8(t + r));
                    return n;
                })(e, t + 5, f),
                m = {
                    id: d,
                    name: (function (e, t, i) {
                        return e
                            ? "string" == typeof e
                                ? e
                                : "function" == typeof e.name
                                  ? e.name(i)
                                  : e.name
                            : `undefined-${t}`;
                    })(n.A.iptc[d], d, p),
                    value: p,
                    description: (function (e, t, i, n) {
                        var o, a, s;
                        if ((o = e) && void 0 !== o.description)
                            try {
                                return e.description(t, i);
                            } catch (e) {}
                        return ((a = e), (s = t), a && s instanceof Array) ? r.A.decode(n, t) : t;
                    })(n.A.iptc[d], p, i, o),
                };
            return (
                (u = d),
                n.A.iptc[u] && n.A.iptc[u].repeatable && (m.repeatable = !0),
                (c = d),
                n.A.iptc[c] && void 0 !== n.A.iptc[c].encoding_name && (m.encoding = n.A.iptc[d].encoding_name(p)),
                { tag: m, tagSize: f }
            );
        })(e, i, s, a, o);
        if (null === t) break;
        t &&
            ("encoding" in t && (a = t.encoding),
            void 0 === s[t.name] || void 0 === t.repeatable
                ? (s[t.name] = { id: t.id, value: t.value, description: t.description })
                : (s[t.name] instanceof Array ||
                      (s[t.name] = [{ id: s[t.name].id, value: s[t.name].value, description: s[t.name].description }]),
                  s[t.name].push({ id: t.id, value: t.value, description: t.description }))),
            (i += 5 + l);
    }
    return s;
}
