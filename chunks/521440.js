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
        R = d.pe.TIER_2,
        y = o.intl.string(o.t.lG6a5x),
        I = (0, i.bG)([u.default], () => u.default.getId());
    (0, c.pE)();
    let {
        isWishlisted: P,
        isBusy: T,
        isFirstTimeWishlister: v,
        handleToggle: E,
    } = (0, s.c)({ userId: I, location: A, skuId: R, nuxGraphic: h, onNuxShow: l.D });
    return (0, a.jsx)("div", {
        ref: m,
        className: g ? "theme-dark" : void 0,
        children: (0, a.jsx)(r._, {
            skuId: R,
            productName: y,
            className: e,
            disabled: n,
            size: p,
            variant: f,
            isWishlisted: P,
            isBusy: T,
            isFirstTimeWishlister: v,
            onClick: E,
            tooltipConfig: { add: o.intl.string(o.t.cjmnm6) },
        }),
    });
}
