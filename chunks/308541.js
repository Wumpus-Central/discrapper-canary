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
    _ = n(331405);
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
                blurAmount: b = 30,
                hueRotate: h = 0,
                isReducedMotion: E,
            } = e,
            O = i.useRef(null),
            x = i.useRef(null),
            { status: C, buffer: S } = (0, d.CE)(a.A),
            T = i.useContext(o.C),
            I = null != E ? E : T.reducedMotion.enabled;
        return (0, r.jsxs)("div", {
            ref: O,
            className: s()(_.kL, n),
            style: {
                "--custom-glow-amount": "".concat(f, "px"),
                "--custom-blur-amount": "".concat(b, "px"),
                "--custom-hue-rotate": "".concat(h, "deg"),
            },
            children: [
                C !== d.BW.Loading &&
                    (0, r.jsx)(c.w, {
                        buffer: S,
                        artboard: g,
                        artboardProperties: p,
                        eventTargetRef: O,
                        className: _.Q_,
                        ref: x,
                        fit: A,
                        withReducedMotion: I ? "halt" : "play",
                    }),
                (0, r.jsx)(u.ZpM, {
                    type: null != m ? m : u.sl2.CUSTOM,
                    className: s()(_.Nr, l),
                    children: t,
                }),
            ],
        });
    };
