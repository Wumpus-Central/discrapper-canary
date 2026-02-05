"use strict";
n.d(t, { A: () => h });
var r = n(668459),
    i = n(643479);
let a = 0,
    s = 1,
    o = 2,
    l = 3,
    u = 4,
    c = 5,
    d = 6,
    _ = 7,
    f = 8,
    p = 24,
    h = {
        2e3: { name: "PathInformation", description: m },
        2999: {
            name: "ClippingPathName",
            description(e) {
                let [, t] = (0, i.z6)(e, 0);
                return t;
            },
        },
    };
function m(e) {
    let t = 2,
        n = {},
        i = [];
    for (let a = 0; a < e.byteLength; a += t + p) {
        let s = r.A.getShortAt(e, a);
        g[s] && (n[s] || (n[s] = g[s].description), i.push({ type: s, path: g[s].path(e, a + t) }));
    }
    return JSON.stringify({ types: n, paths: i });
}
let g = {
    [a]: { description: "Closed subpath length", path: (e, t) => [r.A.getShortAt(e, t)] },
    [s]: { description: "Closed subpath Bezier knot, linked", path: E },
    [o]: { description: "Closed subpath Bezier knot, unlinked", path: E },
    [l]: { description: "Open subpath length", path: (e, t) => [r.A.getShortAt(e, t)] },
    [u]: { description: "Open subpath Bezier knot, linked", path: E },
    [c]: { description: "Open subpath Bezier knot, unlinked", path: E },
    [d]: { description: "Path fill rule", path: () => [] },
    [f]: { description: "Initial fill rule", path: (e, t) => [r.A.getShortAt(e, t)] },
    [_]: { description: "Clipboard", path: I },
};
function E(e, t) {
    let n = 8,
        r = [];
    for (let i = 0; i < p; i += n) r.push(A(e, t + i));
    return r;
}
function A(e, t) {
    let n = T(e, t, 8);
    return [T(e, t + 4, 8), n];
}
function I(e, t) {
    return [[T(e, t, 8), T(e, t + 4, 8), T(e, t + 8, 8), T(e, t + 12, 8)], T(e, t + 16, 8)];
}
function T(e, t, n) {
    let a = r.A.getLongAt(e, t),
        s = a >>> 31 == 0 ? 1 : -1,
        o = (0x7f000000 & a) >>> (32 - n),
        l = a & parseInt((0, i.tp)("1", 32 - n), 2);
    return s * (0, i.Aj)(o.toString(2) + "." + (0, i.CF)(l.toString(2), 32 - n, "0"), 2);
}
