n.d(t, {
    A: () => _,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(524007),
    l = n(844222),
    c = n(786558),
    u = n(799226),
    d = n(397927),
    f = n(289440);
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
            { status: A, buffer: v } = (0, u.CE)(o.A),
            S = i.useContext(l.C),
            I = null != b ? b : S.reducedMotion.enabled,
            T = {
                "--custom-glow-amount": "".concat(g, "px"),
                "--custom-blur-amount": "".concat(E, "px"),
            };
        return (0, r.jsxs)("div", {
            ref: y,
            className: s()(f.kL, n),
            style: T,
            children: [
                A !== u.BW.Loading &&
                    (0, r.jsx)(c.w, {
                        buffer: v,
                        artboard: h,
                        artboardProperties: p,
                        eventTargetRef: y,
                        className: f.Q_,
                        ref: O,
                        fit: m,
                        withReducedMotion: I ? "halt" : "play",
                    }),
                (0, r.jsx)(d.ZpM, {
                    type: null != _ ? _ : d.sl2.CUSTOM,
                    className: s()(f.Nr, a),
                    children: t,
                }),
            ],
        });
    };
