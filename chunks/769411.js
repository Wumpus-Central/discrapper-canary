s.d(t, { A: () => d });
var r = s(627968),
    a = s(64700),
    i = s(462887),
    n = s(736653),
    l = s(344904),
    o = s(446077);
let c = "url(#gradient)",
    d = (e) => {
        let {
                percentage: t = 0,
                children: s,
                animationClassName: d,
                initialPercentage: m = 0,
                progressCircleStrokeSize: u = 2,
                progressCircleVariation: _,
                progressCircleStroke: x,
            } = e,
            p = 43 + u / 2,
            g = 2 * Math.PI * p,
            [h, f] = a.useState(m);
        a.useEffect(() => {
            let e = setTimeout(() => {
                f(t);
            }, 200);
            return () => clearTimeout(e);
        }, [t]);
        let C = (0, n.Ay)(),
            b = (0, i.q)(C),
            j = ((e) => {
                switch (e) {
                    case l.BN.NITRO_GEM:
                    case l.BN.AVATAR_DECO:
                        return "var(--background-base-low)";
                    case l.BN.NITRO_LOGO:
                        return "var(--premium-tier-2-purple)";
                    default:
                        return;
                }
            })(_),
            A = ((e, t) => {
                switch (e) {
                    case l.BN.NITRO_LOGO:
                        return t ? "0.3" : "0.2";
                    case l.BN.NITRO_GEM:
                    case l.BN.AVATAR_DECO:
                    default:
                        return;
                }
            })(_, b),
            N =
                x ??
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
                })(b, _);
        return (0, r.jsxs)("div", {
            className: o.Ap,
            children: [
                (0, r.jsxs)("svg", {
                    viewBox: "0 0 100 100",
                    className: o.fB,
                    children: [
                        (0, r.jsx)("circle", {
                            className: _ === l.BN.NITRO_GEM || _ === l.BN.AVATAR_DECO ? o.F3 : void 0,
                            fill: "transparent",
                            strokeWidth: u,
                            r: `${p}`,
                            cx: "50%",
                            cy: "50%",
                            stroke: j,
                            strokeOpacity: A,
                        }),
                        (0, r.jsx)("circle", {
                            stroke: N,
                            strokeWidth: u,
                            strokeLinecap: "round",
                            strokeDasharray: `${g} ${g}`,
                            className: d,
                            style: { strokeDashoffset: (1 - h / 100) * g },
                            r: `${p}`,
                            cx: "50%",
                            cy: "50%",
                        }),
                    ],
                }),
                (0, r.jsxs)("svg", {
                    width: "0",
                    height: "0",
                    children: [
                        (0, r.jsxs)("linearGradient", {
                            id: "gradient",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "100%",
                            children: [
                                (0, r.jsx)("stop", { offset: "0%", style: { stopColor: "#FFBDF2" } }),
                                (0, r.jsx)("stop", { offset: "100%", style: { stopColor: "#E742E1" } }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "gradient_nitro_logo",
                            x1: "2.99995",
                            y1: "67.6298",
                            x2: "132.55",
                            y2: "67.6298",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#F9A0E8" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E742E1" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "dark-purple-gradient",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "0%",
                            children: [
                                (0, r.jsx)("stop", { offset: "0%", style: { stopColor: "#241731", stopOpacity: 1 } }),
                                (0, r.jsx)("stop", { offset: "100%", style: { stopColor: "#241731", stopOpacity: 1 } }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)("div", { className: o.Vw, children: s }),
            ],
        });
    };
