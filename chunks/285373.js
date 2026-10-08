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
    o = n(660183);
let h = {
    type: "image",
    src: "https://cdn.discordapp.com/assets/content/e6a95b370154817e3cec977345baf14c7643d3dacb99c3034005b10be99a36c7.svg",
};
function p(t) {
    let { className: e, disabled: n, size: p, variant: A, location: f, forceDarkTheme: g, ref: R } = t,
        m = d.pe.TIER_2,
        y = o.intl.string(o.t.lG6a5x),
        I = (0, i.bG)([u.default], () => u.default.getId());
    (0, c.pE)();
    let {
        isWishlisted: E,
        isBusy: P,
        isFirstTimeWishlister: T,
        handleToggle: v,
    } = (0, s.c)({ userId: I, location: f, skuId: m, nuxGraphic: h, onNuxShow: l.D });
    return (0, a.jsx)("div", {
        ref: R,
        className: g ? "theme-dark" : void 0,
        children: (0, a.jsx)(r._, {
            skuId: m,
            productName: y,
            className: e,
            disabled: n,
            size: p,
            variant: A,
            isWishlisted: E,
            isBusy: P,
            isFirstTimeWishlister: T,
            onClick: v,
            tooltipConfig: { add: o.intl.string(o.t.cjmnm6) },
        }),
    });
}
