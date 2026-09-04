r.d(e, { g: () => A, l: () => h });
var i = r(477900),
    n = r(582128),
    l = r(17928),
    s = r(139146),
    u = r(895360),
    a = r(152472),
    o = r(561794),
    d = r(280450),
    c = r(202541),
    S = r(375708);
let A = {
        type: "image",
        src: "https://cdn.discordapp.com/assets/content/e6a95b370154817e3cec977345baf14c7643d3dacb99c3034005b10be99a36c7.svg",
    },
    h = n.forwardRef(function (t, e) {
        let { className: r, disabled: n, size: h, variant: I, location: p, forceDarkTheme: f } = t,
            _ = c.pe.TIER_2,
            E = S.intl.string(S.t.lG6a5x),
            m = (0, l.bG)([d.default], () => d.default.getId());
        (0, o.pE)();
        let {
            isWishlisted: y,
            isBusy: g,
            isFirstTimeWishlister: T,
            handleToggle: R,
        } = (0, a.c)({ userId: m, location: p, skuId: _, nuxGraphic: A, onNuxShow: u.D });
        return (0, i.jsx)("div", {
            ref: e,
            className: f ? "theme-dark" : void 0,
            children: (0, i.jsx)(s._, {
                skuId: _,
                productName: E,
                className: r,
                disabled: n,
                size: h,
                variant: I,
                isWishlisted: y,
                isBusy: g,
                isFirstTimeWishlister: T,
                onClick: R,
                tooltipConfig: { add: S.intl.string(S.t.cjmnm6) },
            }),
        });
    });
