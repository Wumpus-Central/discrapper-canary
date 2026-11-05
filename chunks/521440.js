n.d(e, { g: () => h, l: () => p });
var a = n(477900);
n(582128);
var i = n(855986),
    r = n(301198),
    l = n(895360),
    s = n(124557),
    c = n(634110),
    u = n(46653),
    d = n(682901),
    o = n(792996);
let h = {
    type: "image",
    src: "https://cdn.discordapp.com/assets/content/fcbf9bc0369f1e5b7bdccc5f756c1bd2fa95bb2d2fc05886daaba07c1ca3bb27.svg",
};
function p(t) {
    let { className: e, disabled: n, size: p, variant: f, location: A, forceDarkTheme: g, ref: m } = t,
        I = d.pe.TIER_2,
        R = o.intl.string(o.t.lG6a5x),
        P = (0, i.bG)([u.default], () => u.default.getId());
    (0, c.pE)();
    let {
        isWishlisted: T,
        isBusy: v,
        isFirstTimeWishlister: y,
        handleToggle: E,
    } = (0, s.c)({ userId: P, location: A, skuId: I, nuxGraphic: h, onNuxShow: l.D });
    return (0, a.jsx)("div", {
        ref: m,
        className: g ? "theme-dark" : void 0,
        children: (0, a.jsx)(r._, {
            skuId: I,
            productName: R,
            className: e,
            disabled: n,
            size: p,
            variant: f,
            isWishlisted: T,
            isBusy: v,
            isFirstTimeWishlister: y,
            onClick: E,
            tooltipConfig: { add: o.intl.string(o.t.cjmnm6) },
        }),
    });
}
