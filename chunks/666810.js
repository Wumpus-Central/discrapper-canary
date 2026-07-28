o.d(i, { X: () => a, h: () => d });
var n = o(477900),
    e = o(582128),
    u = o(945810);
let r = { clickRoutesToGift: !1, showGiftButton: !0 },
    c = (0, u.mj)({
        name: "2026-07-wishlist-direct-to-gifting",
        kind: "user",
        defaultConfig: r,
        variations: {
            1: { clickRoutesToGift: !0, showGiftButton: !0 },
            2: { clickRoutesToGift: !0, showGiftButton: !1 },
        },
    }),
    s = e.createContext(r);
function a() {
    return e.useContext(s);
}
function l(t) {
    let { location: i, children: o } = t,
        e = c.useConfig({ location: i });
    return (0, n.jsx)(s.Provider, { value: e, children: o });
}
function d(t) {
    let { isGifting: i, location: o, children: e } = t;
    return i ? (0, n.jsx)(l, { location: o, children: e }) : e;
}
