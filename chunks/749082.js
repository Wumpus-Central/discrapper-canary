n.d(t, {
    A: () => m,
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(524007),
    o = n(844222),
    c = n(786558),
    d = n(799226),
    u = n(397927),
    _ = n(289440);
let p = {
        HoverLightmode: {
            posy: "number",
            posx: "number",
        },
        BaseGlow: {},
        ButtonFillLightmode: {},
        HoverDarkmode: {
            posy: "number",
            posx: "number",
        },
        BaseGlowRemapped: {},
        ButtonFillDarkmode: {},
    },
    m = (e) => {
        let {
                children: t,
                className: n,
                cardClassName: l,
                cardType: m,
                artboard: g = "BaseGlowRemapped",
                fit: A = "layout",
                glowAmount: f = 8,
                blurAmount: h = 30,
                hueRotate: b = 0,
                isReducedMotion: E,
            } = e,
            x = i.useRef(null),
            O = i.useRef(null),
            { status: C, buffer: I } = (0, d.CE)(a.A),
            T = i.useContext(o.C),
            S = null != E ? E : T.reducedMotion.enabled;
        return (0, r.jsxs)("div", {
            ref: x,
            className: s()(_.kL, n),
            style: {
                "--custom-glow-amount": "".concat(f, "px"),
                "--custom-blur-amount": "".concat(h, "px"),
                "--custom-hue-rotate": "".concat(b, "deg"),
            },
            children: [
                C !== d.BW.Loading &&
                    (0, r.jsx)(c.w, {
                        buffer: I,
                        artboard: g,
                        artboardProperties: p,
                        eventTargetRef: x,
                        className: _.Q_,
                        ref: O,
                        fit: A,
                        withReducedMotion: S ? "halt" : "play",
                    }),
                (0, r.jsx)(u.ZpM, {
                    type: null != m ? m : u.sl2.CUSTOM,
                    className: s()(_.Nr, l),
                    children: t,
                }),
            ],
        });
    };
