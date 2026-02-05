n.d(t, { A: () => d });
var i = n(627968),
    s = n(64700),
    r = n(582754),
    a = n(736653),
    l = n(344904),
    o = n(584878);
let c = "url(#gradient)",
    d = (e) => {
        let {
                percentage: t = 0,
                children: n,
                animationClassName: d,
                initialPercentage: u = 0,
                progressCircleStrokeSize: _ = 2,
                progressCircleVariation: m,
                progressCircleStroke: A,
            } = e,
            g = 43 + _ / 2,
            E = 2 * Math.PI * g,
            [h, p] = s.useState(u);
        s.useEffect(() => {
            let e = setTimeout(() => {
                p(t);
            }, 200);
            return () => clearTimeout(e);
        }, [t]);
        let C = (0, a.Ay)(),
            x = (0, r.qB)(C),
            T = ((e) => {
                switch (e) {
                    case l.BN.NITRO_GEM:
                    case l.BN.AVATAR_DECO:
                        return "var(--background-base-low)";
                    case l.BN.NITRO_LOGO:
                        return "var(--premium-tier-2-purple)";
                    default:
                        return;
                }
            })(m),
            I = ((e, t) => {
                switch (e) {
                    case l.BN.NITRO_LOGO:
                        return t ? "0.3" : "0.2";
                    case l.BN.NITRO_GEM:
                    case l.BN.AVATAR_DECO:
                    default:
                        return;
                }
            })(m, x),
            S =
                A ??
                ((e, t) => {
                    switch (t) {
                        case l.BN.NITRO_GEM:
                        case l.BN.AVATAR_DECO:
                            return c;
                        case l.BN.NITRO_LOGO:
                            return e ? "url(#gradient_nitro_logo)" : c;
                        default:
                            return;
                    }
                })(x, m);
        return (0, i.jsxs)("div", {
            className: o.Ap,
            children: [
                (0, i.jsxs)("svg", {
                    viewBox: "0 0 100 100",
                    className: o.fB,
                    children: [
                        (0, i.jsx)("circle", {
                            className: m === l.BN.NITRO_GEM || m === l.BN.AVATAR_DECO ? o.F3 : void 0,
                            fill: "transparent",
                            strokeWidth: _,
                            r: `${g}`,
                            cx: "50%",
                            cy: "50%",
                            stroke: T,
                            strokeOpacity: I,
                        }),
                        (0, i.jsx)("circle", {
                            stroke: S,
                            strokeWidth: _,
                            strokeLinecap: "round",
                            strokeDasharray: `${E} ${E}`,
                            className: d,
                            style: { strokeDashoffset: (1 - h / 100) * E },
                            r: `${g}`,
                            cx: "50%",
                            cy: "50%",
                        }),
                    ],
                }),
                (0, i.jsxs)("svg", {
                    width: "0",
                    height: "0",
                    children: [
                        (0, i.jsxs)("linearGradient", {
                            id: "gradient",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "100%",
                            children: [
                                (0, i.jsx)("stop", { offset: "0%", style: { stopColor: "#FFBDF2" } }),
                                (0, i.jsx)("stop", { offset: "100%", style: { stopColor: "#E742E1" } }),
                            ],
                        }),
                        (0, i.jsxs)("linearGradient", {
                            id: "gradient_nitro_logo",
                            x1: "2.99995",
                            y1: "67.6298",
                            x2: "132.55",
                            y2: "67.6298",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, i.jsx)("stop", { stopColor: "#F9A0E8" }),
                                (0, i.jsx)("stop", { offset: "1", stopColor: "#E742E1" }),
                            ],
                        }),
                        (0, i.jsxs)("linearGradient", {
                            id: "dark-purple-gradient",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "0%",
                            children: [
                                (0, i.jsx)("stop", { offset: "0%", style: { stopColor: "#241731", stopOpacity: 1 } }),
                                (0, i.jsx)("stop", { offset: "100%", style: { stopColor: "#241731", stopOpacity: 1 } }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)("div", { className: o.Vw, children: n }),
            ],
        });
    };
