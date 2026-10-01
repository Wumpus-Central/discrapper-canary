n.d(t, { g: () => f, l: () => m });
var a = n(477900),
    i = n(582128),
    l = n(17928),
    s = n(139146),
    r = n(895360),
    d = n(152472),
    c = n(594832),
    u = n(280450),
    o = n(202541),
    h = n(375708);
let f = {
        type: "image",
        src: "https://cdn.discordapp.com/assets/content/e6a95b370154817e3cec977345baf14c7643d3dacb99c3034005b10be99a36c7.svg",
    },
    m = i.forwardRef(function (e, t) {
        let { className: n, disabled: i, size: m, variant: p, location: A, forceDarkTheme: g } = e,
            y = o.pe.TIER_2,
            I = h.intl.string(h.t.lG6a5x),
            T = (0, l.bG)([u.default], () => u.default.getId());
        (0, c.pE)();
        let {
            isWishlisted: v,
            isBusy: b,
            isFirstTimeWishlister: R,
            handleToggle: E,
        } = (0, d.c)({ userId: T, location: A, skuId: y, nuxGraphic: f, onNuxShow: r.D });
        return (0, a.jsx)("div", {
            ref: t,
            className: g ? "theme-dark" : void 0,
            children: (0, a.jsx)(s._, {
                skuId: y,
                productName: I,
                className: n,
                disabled: i,
                size: m,
                variant: p,
                isWishlisted: v,
                isBusy: b,
                isFirstTimeWishlister: R,
                onClick: E,
                tooltipConfig: { add: h.intl.string(h.t.cjmnm6) },
            }),
        });
    });
