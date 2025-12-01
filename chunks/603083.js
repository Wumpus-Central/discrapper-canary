n.d(t, { Z: () => c });
var r = n(822632),
    i = n(633971),
    a = n(649793),
    o = n(150629),
    s = n(638900),
    l = n(791473);
let c = { read: E },
    u = "STATE_KEYWORD",
    d = "STATE_COMPRESSION",
    f = "STATE_LANG",
    p = "STATE_TRANSLATED_KEYWORD",
    _ = "STATE_TEXT",
    m = 1,
    h = 1,
    g = 6;
function E(e, t, n, r) {
    let i = {},
        a = [];
    for (let c = 0; c < t.length; c++) {
        let { offset: u, length: d, type: f } = t[c],
            p = b(e, u, d, f, n);
        if (p instanceof Promise)
            a.push(
                p.then(({ name: e, value: t, description: n }) => {
                    try {
                        if (l.Z.USE_EXIF && C(e, t)) return { __exif: o.Z.read(P(t), g, r).tags };
                        if (l.Z.USE_IPTC && N(e, t)) return { __iptc: s.Z.read(P(t), 0, r) };
                        if (e && !C(e, t) && !N(e, t))
                            return {
                                [e]: {
                                    value: t,
                                    description: n,
                                },
                            };
                    } catch (e) {}
                    return {};
                }),
            );
        else {
            let { name: e, value: t, description: n } = p;
            e &&
                (i[e] = {
                    value: t,
                    description: n,
                });
        }
    }
    return {
        readTags: i,
        readTagsPromise: a.length > 0 ? Promise.all(a) : void 0,
    };
}
function b(e, t, n, i, o) {
    let s,
        l = [],
        c = [],
        h = [],
        g = u,
        E = r.p4;
    for (let r = 0; r < n && t + r < e.byteLength; r++) {
        if (g === d) {
            (E = y({
                type: i,
                dataView: e,
                offset: t + r,
            })),
                i === a.Jn && (r += m),
                (g = O(i, g));
            continue;
        }
        if (g === _) {
            s = new DataView(e.buffer.slice(t + r, t + n));
            break;
        }
        let o = e.getUint8(t + r);
        0 === o ? (g = O(i, g)) : g === u ? l.push(o) : g === f ? c.push(o) : g === p && h.push(o);
    }
    if (E !== r.p4 && !o) return {};
    let b = (0, r.Lj)(s, E, v(i));
    return b instanceof Promise
        ? b.then((e) => S(e, i, c, l)).catch(() => S("<text using unknown compression>".split(""), i, c, l))
        : S(b, i, c, l);
}
function y({ type: e, dataView: t, offset: n }) {
    if (e === a.Jn) {
        if (t.getUint8(n) === h) return t.getUint8(n + 1);
    } else if (e === a.z_) return t.getUint8(n);
    return r.p4;
}
function O(e, t) {
    return t === u && [a.Jn, a.z_].includes(e) ? d : t === d ? (e === a.Jn ? f : _) : t === f ? p : _;
}
function v(e) {
    return e === a.a0 || e === a.z_ ? "latin1" : "utf-8";
}
function S(e, t, n, r) {
    let i = T(e);
    return {
        name: I(t, n, r),
        value: i,
        description: t === a.Jn ? A(e) : i,
    };
}
function I(e, t, n) {
    let i = (0, r.nZ)(n);
    if (e === a.a0 || 0 === t.length) return i;
    let o = (0, r.nZ)(t);
    return `${i} (${o})`;
}
function T(e) {
    return e instanceof DataView ? (0, r.oH)(e, 0, e.byteLength) : e;
}
function A(e) {
    return i.Z.decode("UTF-8", e);
}
function C(e, t) {
    return "raw profile type exif" === e.toLowerCase() && "exif" === t.substring(1, 5);
}
function N(e, t) {
    return "raw profile type iptc" === e.toLowerCase() && "iptc" === t.substring(1, 5);
}
function P(e) {
    return R(e.match(/\n(exif|iptc)\n\s*\d+\n([\s\S]*)$/)[2].replace(/\n/g, ""));
}
function R(e) {
    let t = new DataView(new ArrayBuffer(e.length / 2));
    for (let n = 0; n < e.length; n += 2) t.setUint8(n / 2, parseInt(e.substring(n, n + 2), 16));
    return t;
}
