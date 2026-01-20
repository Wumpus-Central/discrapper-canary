n.d(t, { Z: () => _ });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(633130),
    l = n(213305),
    c = n(404726),
    u = n(98123),
    d = n(481060),
    f = n(46826);
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
    _ = (e) => {
        let {
                children: t,
                className: n,
                cardClassName: a,
                cardType: _,
                artboard: h = "BaseGlowRemapped",
                fit: m = "layout",
                glowAmount: g = 8,
                blurAmount: E = 30,
                isReducedMotion: b,
            } = e,
            y = i.useRef(null),
            O = i.useRef(null),
            { status: v, buffer: S } = (0, u.VG)(s.Z),
            I = i.useContext(l.S),
            T = null != b ? b : I.reducedMotion.enabled,
            C = {
                "--custom-glow-amount": "".concat(g, "px"),
                "--custom-blur-amount": "".concat(E, "px"),
            };
        return (0, r.jsxs)("div", {
            ref: y,
            className: o()(f.container, n),
            style: C,
            children: [
                v !== u.Jt.Loading &&
                    (0, r.jsx)(c.v, {
                        buffer: S,
                        artboard: h,
                        artboardProperties: p,
                        eventTargetRef: y,
                        className: f.glowAnimation,
                        ref: O,
                        fit: m,
                        withReducedMotion: T ? "halt" : "play",
                    }),
                (0, r.jsx)(d.Zbd, {
                    type: null != _ ? _ : d.sje.CUSTOM,
                    className: o()(f.card, a),
                    children: t,
                }),
            ],
        });
    };
