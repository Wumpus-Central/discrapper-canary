e.d(t, { $: () => l, q: () => c });
var r = e(627968),
    n = e(64700),
    o = e(945810);
let s = { prioritizeGifting: !1, removeOrbsClaim: !1 },
    a = (0, o.mj)({
        name: "2026-06-wishlist-pdp-gift-button-priority",
        kind: "user",
        defaultConfig: s,
        variations: {
            1: { prioritizeGifting: !0, removeOrbsClaim: !1 },
            2: { prioritizeGifting: !0, removeOrbsClaim: !0 },
        },
    }),
    u = n.createContext(s);
function c() {
    return n.useContext(u);
}
function l(i) {
    let { isGifting: t, location: e, children: n } = i;
    return t ? (0, r.jsx)(p, { location: e, children: n }) : n;
}
function p(i) {
    let { location: t, children: e } = i,
        n = a.useConfig({ location: t });
    return (0, r.jsx)(u.Provider, { value: n, children: e });
}
