n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(524007),
    o = n(844222),
    c = n(786558),
    d = n(799226),
    u = n(397927),
    _ = n(331405);
let m = {
        HoverLightmode: { posy: "number", posx: "number" },
        BaseGlow: {},
        ButtonFillLightmode: {},
        HoverDarkmode: { posy: "number", posx: "number" },
        BaseGlowRemapped: {},
        ButtonFillDarkmode: {},
    },
    A = (e) => {
        let {
                children: t,
                className: n,
                cardClassName: r,
                cardType: A,
                artboard: g = "BaseGlowRemapped",
                fit: E = "layout",
                glowAmount: h = 8,
                blurAmount: p = 30,
                hueRotate: C = 0,
                isReducedMotion: x,
            } = e,
            T = s.useRef(null),
            I = s.useRef(null),
            { status: S, buffer: f } = (0, d.CE)(l.A),
            N = s.useContext(o.C),
            b = x ?? N.reducedMotion.enabled,
            R = {
                "--custom-glow-amount": `${h}px`,
                "--custom-blur-amount": `${p}px`,
                "--custom-hue-rotate": `${C}deg`,
            };
        return (0, i.jsxs)("div", {
            ref: T,
            className: a()(_.kL, n),
            style: R,
            children: [
                S !== d.BW.Loading &&
                    (0, i.jsx)(c.w, {
                        buffer: f,
                        artboard: g,
                        artboardProperties: m,
                        eventTargetRef: T,
                        className: _.Q_,
                        ref: I,
                        fit: E,
                        withReducedMotion: b ? "halt" : "play",
                    }),
                (0, i.jsx)(u.ZpM, { type: A ?? u.sl2.CUSTOM, className: a()(_.Nr, r), children: t }),
            ],
        });
    };
