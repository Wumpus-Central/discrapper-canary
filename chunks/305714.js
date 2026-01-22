n.d(t, { A: () => O }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(793574),
    c = n(688810),
    u = n(607470),
    d = n(676279),
    f = n(526292),
    p = n(753894),
    _ = n(693591),
    h = n(985018),
    m = n(942916),
    g = n(635736),
    E = n(917025),
    b = n(707621);
let y = (e, t) => {
        let { className: n, isFooterVisible: a, isDarkMode: y, isReducedMotion: O, subscriptionTier: A } = e,
            { analyticsLocations: v } = (0, c.Ay)(l.A.PREMIUM_MARKETING_FOOTER_CTA),
            S = (0, f.ar)(),
            I = (0, d.TM)(),
            T = i.useRef(null),
            [C, N] = i.useState(!1);
        return (
            i.useEffect(() => {
                !a || O || C || null == T.current || T.current.play();
            }, [a, O, C]),
            (0, r.jsx)(c.f5, {
                value: v,
                children: (0, r.jsxs)("div", {
                    ref: t,
                    className: s()(m.kL, n),
                    children: [
                        (0, r.jsx)(o.Heading, {
                            className: m.RH,
                            variant: "display-md",
                            color: "text-strong",
                            children: h.intl.string(h.t.lEw32m),
                        }),
                        (0, r.jsx)(p.KN, {
                            subscriptionTier: A,
                            inOfferExperience: S,
                            containerClassName: m.Z5,
                            isApplicationHome: !0,
                            isDarkMode: y,
                        }),
                        (0, r.jsx)("div", {
                            className: m.av,
                            children: (0, r.jsx)(u.A, {
                                playsInline: !0,
                                muted: !0,
                                preload: "auto",
                                poster: E.A,
                                className: m.dV,
                                onEnded: () => {
                                    N(!0);
                                },
                                ref: T,
                                children: (0, r.jsx)("source", {
                                    src: I ? g.A : b.A,
                                    type: I ? _.a.MP4 : _.a.WEBM,
                                }),
                            }),
                        }),
                        (0, r.jsx)("div", { className: m.es }),
                        (0, r.jsx)("div", { className: m.fF }),
                    ],
                }),
            })
        );
    },
    O = i.forwardRef(y);
