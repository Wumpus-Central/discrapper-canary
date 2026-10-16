n.d(e, { g: () => h, l: () => p });
var a = n(477900);
n(582128);
var i = n(17928),
    r = n(753704),
    l = n(895360),
    s = n(152472),
    c = n(594832),
    u = n(280450),
    d = n(202541),
    o = n(105292);
let h = {
    type: "image",
    src: "https://cdn.discordapp.com/assets/content/fcbf9bc0369f1e5b7bdccc5f756c1bd2fa95bb2d2fc05886daaba07c1ca3bb27.svg",
};
function p(t) {
    let { className: e, disabled: n, size: p, variant: f, location: A, forceDarkTheme: g, ref: m } = t,
        y = d.pe.TIER_2,
        R = o.intl.string(o.t.lG6a5x),
        I = (0, i.bG)([u.default], () => u.default.getId());
    (0, c.pE)();
    let {
        isWishlisted: P,
        isBusy: T,
        isFirstTimeWishlister: v,
        handleToggle: E,
    } = (0, s.c)({ userId: I, location: A, skuId: y, nuxGraphic: h, onNuxShow: l.D });
    return (0, a.jsx)("div", {
        ref: m,
        className: g ? "theme-dark" : void 0,
        children: (0, a.jsx)(r._, {
            skuId: y,
            productName: R,
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
