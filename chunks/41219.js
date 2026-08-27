r.d(e, { g: () => I, l: () => p });
var i = r(477900),
    n = r(582128),
    s = r(17928),
    l = r(139146),
    u = r(895360),
    a = r(152472),
    o = r(594832),
    c = r(280450),
    d = r(202541),
    S = r(375708);
let I = {
        type: "image",
        src: "https://cdn.discordapp.com/assets/content/e6a95b370154817e3cec977345baf14c7643d3dacb99c3034005b10be99a36c7.svg",
    },
    p = n.forwardRef(function (t, e) {
        let { className: r, disabled: n, size: p, variant: _, location: h, forceDarkTheme: A } = t,
            f = d.pe.TIER_2,
            E = S.intl.string(S.t.lG6a5x),
            m = (0, s.bG)([c.default], () => c.default.getId());
        (0, o.pE)();
        let {
            isWishlisted: y,
            isBusy: T,
            isFirstTimeWishlister: R,
            handleToggle: L,
        } = (0, a.c)({ userId: m, location: h, skuId: f, nuxGraphic: I, onNuxShow: u.D });
        return (0, i.jsx)("div", {
            ref: e,
            className: A ? "theme-dark" : void 0,
            children: (0, i.jsx)(l._, {
                skuId: f,
                productName: E,
                className: r,
                disabled: n,
                size: p,
                variant: _,
                isWishlisted: y,
                isBusy: T,
                isFirstTimeWishlister: R,
                onClick: L,
                tooltipConfig: { add: S.intl.string(S.t.cjmnm6) },
            }),
        });
    });
