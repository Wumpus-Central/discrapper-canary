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
        I = d.pe.TIER_2,
        m = o.intl.string(o.t.lG6a5x),
        y = (0, i.bG)([u.default], () => u.default.getId());
    (0, c.pE)();
    let {
        isWishlisted: E,
        isBusy: P,
        isFirstTimeWishlister: T,
        handleToggle: v,
    } = (0, s.c)({ userId: y, location: f, skuId: I, nuxGraphic: h, onNuxShow: l.D });
    return (0, a.jsx)("div", {
        ref: R,
        className: g ? "theme-dark" : void 0,
        children: (0, a.jsx)(r._, {
            skuId: I,
            productName: m,
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
