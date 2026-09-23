r.d(e, { g: () => I, l: () => h });
var i = r(477900),
    n = r(582128),
    s = r(17928),
    l = r(139146),
    a = r(895360),
    u = r(152472),
    o = r(594832),
    d = r(280450),
    c = r(202541),
    S = r(375708);
let I = {
        type: "image",
        src: "https://cdn.discordapp.com/assets/content/e6a95b370154817e3cec977345baf14c7643d3dacb99c3034005b10be99a36c7.svg",
    },
    h = n.forwardRef(function (t, e) {
        let { className: r, disabled: n, size: h, variant: p, location: _, forceDarkTheme: f } = t,
            A = c.pe.TIER_2,
            E = S.intl.string(S.t.lG6a5x),
            m = (0, s.bG)([d.default], () => d.default.getId());
        (0, o.pE)();
        let {
            isWishlisted: y,
            isBusy: T,
            isFirstTimeWishlister: R,
            handleToggle: L,
        } = (0, u.c)({ userId: m, location: _, skuId: A, nuxGraphic: I, onNuxShow: a.D });
        return (0, i.jsx)("div", {
            ref: e,
            className: f ? "theme-dark" : void 0,
            children: (0, i.jsx)(l._, {
                skuId: A,
                productName: E,
                className: r,
                disabled: n,
                size: h,
                variant: p,
                isWishlisted: y,
                isBusy: T,
                isFirstTimeWishlister: R,
                onClick: L,
                tooltipConfig: { add: S.intl.string(S.t.cjmnm6) },
            }),
        });
    });
