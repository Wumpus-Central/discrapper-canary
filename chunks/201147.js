"use strict";
n.d(t, { A: () => u });
var r = n(643479),
    i = n(177487),
    a = n(234291),
    s = n(664741),
    o = n(525012),
    l = n(761799);
let u = { read: E },
    c = "STATE_KEYWORD",
    d = "STATE_COMPRESSION",
    _ = "STATE_LANG",
    f = "STATE_TRANSLATED_KEYWORD",
    p = "STATE_TEXT",
    h = 1,
    m = 1,
    g = 6;
function E(e, t, n, r) {
    let i = {},
        a = [];
    for (let u = 0; u < t.length; u++) {
        let { offset: c, length: d, type: _ } = t[u],
            f = A(e, c, d, _, n);
        if (f instanceof Promise)
            a.push(
                f.then(({ name: e, value: t, description: n }) => {
                    try {
                        if (l.A.USE_EXIF && N(e, t)) return { __exif: s.A.read(O(t), g, r).tags };
                        if (l.A.USE_IPTC && R(e, t)) return { __iptc: o.A.read(O(t), 0, r) };
                        if (e && !N(e, t) && !R(e, t)) return { [e]: { value: t, description: n } };
                    } catch (e) {}
                    return {};
                }),
            );
        else {
            let { name: e, value: t, description: n } = f;
            e && (i[e] = { value: t, description: n });
        }
    }
    return { readTags: i, readTagsPromise: a.length > 0 ? Promise.all(a) : void 0 };
}
function A(e, t, n, i, s) {
    let o,
        l = [],
        u = [],
        m = [],
        g = c,
        E = r.Gl;
    for (let r = 0; r < n && t + r < e.byteLength; r++) {
        if (g === d) {
            (E = I({ type: i, dataView: e, offset: t + r })), i === a.Xo && (r += h), (g = T(i, g));
            continue;
        }
        if (g === p) {
            o = new DataView(e.buffer.slice(t + r, t + n));
            break;
        }
        let s = e.getUint8(t + r);
        0 === s ? (g = T(i, g)) : g === c ? l.push(s) : g === _ ? u.push(s) : g === f && m.push(s);
    }
    if (E !== r.Gl && !s) return {};
    let A = (0, r.mF)(o, E, y(i));
    return A instanceof Promise
        ? A.then((e) => S(e, i, u, l)).catch(() => S("<text using unknown compression>".split(""), i, u, l))
        : S(A, i, u, l);
}
function I({ type: e, dataView: t, offset: n }) {
    if (e === a.Xo) {
        if (t.getUint8(n) === m) return t.getUint8(n + 1);
    } else if (e === a.aA) return t.getUint8(n);
    return r.Gl;
}
function T(e, t) {
    return t === c && [a.Xo, a.aA].includes(e) ? d : t === d ? (e === a.Xo ? _ : p) : t === _ ? f : p;
}
function y(e) {
    return e === a.HL || e === a.aA ? "latin1" : "utf-8";
}
function S(e, t, n, r) {
    let i = C(e);
    return { name: v(t, n, r), value: i, description: t === a.Xo ? b(e) : i };
}
function v(e, t, n) {
    let i = (0, r.YF)(n);
    if (e === a.HL || 0 === t.length) return i;
    let s = (0, r.YF)(t);
    return `${i} (${s})`;
}
function C(e) {
    return e instanceof DataView ? (0, r.hT)(e, 0, e.byteLength) : e;
}
function b(e) {
    return i.A.decode("UTF-8", e);
}
function N(e, t) {
    return "raw profile type exif" === e.toLowerCase() && "exif" === t.substring(1, 5);
}
function R(e, t) {
    return "raw profile type iptc" === e.toLowerCase() && "iptc" === t.substring(1, 5);
}
function O(e) {
    return D(e.match(/\n(exif|iptc)\n\s*\d+\n([\s\S]*)$/)[2].replace(/\n/g, ""));
}
function D(e) {
    let t = new DataView(new ArrayBuffer(e.length / 2));
    for (let n = 0; n < e.length; n += 2) t.setUint8(n / 2, parseInt(e.substring(n, n + 2), 16));
    return t;
}
