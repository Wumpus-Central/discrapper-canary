n.d(e, { g: () => p, l: () => A });
var a = n(477900),
    r = n(582128),
    i = n(17928),
    l = n(753704),
    s = n(895360),
    c = n(152472),
    u = n(594832),
    d = n(280450),
    o = n(202541),
    h = n(375708);
let p = {
        type: "image",
        src: "https://cdn.discordapp.com/assets/content/e6a95b370154817e3cec977345baf14c7643d3dacb99c3034005b10be99a36c7.svg",
    },
    A = r.forwardRef(function (t, e) {
        let { className: n, disabled: r, size: A, variant: f, location: g, forceDarkTheme: R } = t,
            I = o.pe.TIER_2,
            m = h.intl.string(h.t.lG6a5x),
            y = (0, i.bG)([d.default], () => d.default.getId());
        (0, u.pE)();
        let {
            isWishlisted: E,
            isBusy: P,
            isFirstTimeWishlister: T,
            handleToggle: v,
        } = (0, c.c)({ userId: y, location: g, skuId: I, nuxGraphic: p, onNuxShow: s.D });
        return (0, a.jsx)("div", {
            ref: e,
            className: R ? "theme-dark" : void 0,
            children: (0, a.jsx)(l._, {
                skuId: I,
                productName: m,
                className: n,
                disabled: r,
                size: A,
                variant: f,
                isWishlisted: E,
                isBusy: P,
                isFirstTimeWishlister: T,
                onClick: v,
                tooltipConfig: { add: h.intl.string(h.t.cjmnm6) },
            }),
        });
    });
