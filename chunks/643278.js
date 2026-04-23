i.d(t, { A: () => o });
var n = i(668459),
    r = i(643479);
let o = {
        2e3: {
            name: "PathInformation",
            description: function (e) {
                let t = {},
                    i = [];
                for (let r = 0; r < e.byteLength; r += 26) {
                    let o = n.A.getShortAt(e, r);
                    a[o] && (t[o] || (t[o] = a[o].description), i.push({ type: o, path: a[o].path(e, r + 2) }));
                }
                return JSON.stringify({ types: t, paths: i });
            },
        },
        2999: {
            name: "ClippingPathName",
            description(e) {
                let [, t] = (0, r.z6)(e, 0);
                return t;
            },
        },
    },
    a = {
        0: { description: "Closed subpath length", path: (e, t) => [n.A.getShortAt(e, t)] },
        1: { description: "Closed subpath Bezier knot, linked", path: s },
        2: { description: "Closed subpath Bezier knot, unlinked", path: s },
        3: { description: "Open subpath length", path: (e, t) => [n.A.getShortAt(e, t)] },
        4: { description: "Open subpath Bezier knot, linked", path: s },
        5: { description: "Open subpath Bezier knot, unlinked", path: s },
        6: { description: "Path fill rule", path: () => [] },
        8: { description: "Initial fill rule", path: (e, t) => [n.A.getShortAt(e, t)] },
        7: {
            description: "Clipboard",
            path: function (e, t) {
                return [[l(e, t, 8), l(e, t + 4, 8), l(e, t + 8, 8), l(e, t + 12, 8)], l(e, t + 16, 8)];
            },
        },
    };
function s(e, t) {
    let i = [];
    for (let n = 0; n < 24; n += 8)
        i.push(
            (function (e, t) {
                let i = l(e, t, 8);
                return [l(e, t + 4, 8), i];
            })(e, t + n),
        );
    return i;
}
function l(e, t, i) {
    let o = n.A.getLongAt(e, t),
        a = o & parseInt((0, r.tp)("1", 32 - i), 2);
    return (
        (o >>> 31 == 0 ? 1 : -1) *
        (0, r.Aj)(((0x7f000000 & o) >>> (32 - i)).toString(2) + "." + (0, r.CF)(a.toString(2), 32 - i, "0"), 2)
    );
}
