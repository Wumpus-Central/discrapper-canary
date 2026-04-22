i.d(t, { A: () => u });
var n = i(643479),
    r = i(177487),
    o = i(234291),
    a = i(664741),
    s = i(525012),
    l = i(761799);
let u = {
        read: function (e, t, i, r) {
            let u = {},
                T = [];
            for (let b = 0; b < t.length; b++) {
                let { offset: P, length: S, type: F } = t[b],
                    I = (function (e, t, i, r, a) {
                        var s;
                        let l,
                            u = [],
                            y = [],
                            A = [],
                            v = c,
                            T = n.Gl;
                        for (let a = 0; a < i && t + a < e.byteLength; a++) {
                            if (v === d) {
                                (T = (function ({ type: e, dataView: t, offset: i }) {
                                    if (e === o.Xo) {
                                        if (1 === t.getUint8(i)) return t.getUint8(i + 1);
                                    } else if (e === o.aA) return t.getUint8(i);
                                    return n.Gl;
                                })({ type: r, dataView: e, offset: t + a })),
                                    r === o.Xo && (a += 1),
                                    (v = g(r, v));
                                continue;
                            }
                            if (v === m) {
                                l = new DataView(e.buffer.slice(t + a, t + i));
                                break;
                            }
                            let s = e.getUint8(t + a);
                            0 === s ? (v = g(r, v)) : v === c ? u.push(s) : v === f ? y.push(s) : v === p && A.push(s);
                        }
                        if (T !== n.Gl && !a) return {};
                        let b = (0, n.mF)(l, T, (s = r) === o.HL || s === o.aA ? "latin1" : "utf-8");
                        return b instanceof Promise
                            ? b
                                  .then((e) => h(e, r, y, u))
                                  .catch(() => h("<text using unknown compression>".split(""), r, y, u))
                            : h(b, r, y, u);
                    })(e, P, S, F, i);
                if (I instanceof Promise)
                    T.push(
                        I.then(({ name: e, value: t, description: i }) => {
                            try {
                                if (l.A.USE_EXIF && y(e, t)) return { __exif: a.A.read(v(t), 6, r).tags };
                                if (l.A.USE_IPTC && A(e, t)) return { __iptc: s.A.read(v(t), 0, r) };
                                if (e && !y(e, t) && !A(e, t)) return { [e]: { value: t, description: i } };
                            } catch (e) {}
                            return {};
                        }),
                    );
                else {
                    let { name: e, value: t, description: i } = I;
                    e && (u[e] = { value: t, description: i });
                }
            }
            return { readTags: u, readTagsPromise: T.length > 0 ? Promise.all(T) : void 0 };
        },
    },
    c = "STATE_KEYWORD",
    d = "STATE_COMPRESSION",
    f = "STATE_LANG",
    p = "STATE_TRANSLATED_KEYWORD",
    m = "STATE_TEXT";
function g(e, t) {
    return t === c && [o.Xo, o.aA].includes(e) ? d : t === d ? (e === o.Xo ? f : m) : t === f ? p : m;
}
function h(e, t, i, a) {
    var s, l;
    let u = (s = e) instanceof DataView ? (0, n.hT)(s, 0, s.byteLength) : s;
    return {
        name: (function (e, t, i) {
            let r = (0, n.YF)(i);
            if (e === o.HL || 0 === t.length) return r;
            let a = (0, n.YF)(t);
            return `${r} (${a})`;
        })(t, i, a),
        value: u,
        description: t === o.Xo ? ((l = e), r.A.decode("UTF-8", l)) : u,
    };
}
function y(e, t) {
    return "raw profile type exif" === e.toLowerCase() && "exif" === t.substring(1, 5);
}
function A(e, t) {
    return "raw profile type iptc" === e.toLowerCase() && "iptc" === t.substring(1, 5);
}
function v(e) {
    var t = e.match(/\n(exif|iptc)\n\s*\d+\n([\s\S]*)$/)[2].replace(/\n/g, "");
    let i = new DataView(new ArrayBuffer(t.length / 2));
    for (let e = 0; e < t.length; e += 2) i.setUint8(e / 2, parseInt(t.substring(e, e + 2), 16));
    return i;
}
