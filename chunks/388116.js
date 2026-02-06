n.d(t, { A: () => C });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(397927),
    o = n(793574),
    c = n(688810),
    d = n(607470),
    u = n(676279),
    _ = n(526292),
    m = n(320908),
    A = n(693591),
    g = n(985018),
    h = n(983182),
    x = n(635736),
    p = n(917025),
    E = n(707621);
let C = s.forwardRef((e, t) => {
    let { className: n, isFooterVisible: a, isDarkMode: C, isReducedMotion: T, subscriptionTier: S } = e,
        { analyticsLocations: I } = (0, c.Ay)(o.A.PREMIUM_MARKETING_FOOTER_CTA),
        f = (0, _.ar)(),
        N = (0, u.TM)(),
        b = s.useRef(null),
        [j, v] = s.useState(!1);
    return (
        s.useEffect(() => {
            !a || T || j || null == b.current || b.current.play();
        }, [a, T, j]),
        (0, i.jsx)(c.f5, {
            value: I,
            children: (0, i.jsxs)("div", {
                ref: t,
                className: l()(h.kL, n),
                children: [
                    (0, i.jsx)(r.Heading, {
                        className: h.RH,
                        variant: "display-md",
                        color: "text-strong",
                        children: g.intl.string(g.t.lEw32m),
                    }),
                    (0, i.jsx)(m.KN, {
                        subscriptionTier: S,
                        inOfferExperience: f,
                        containerClassName: h.Z5,
                        isApplicationHome: !0,
                        isDarkMode: C,
                    }),
                    (0, i.jsx)("div", {
                        className: h.av,
                        children: (0, i.jsx)(d.A, {
                            playsInline: !0,
                            muted: !0,
                            preload: "auto",
                            poster: p.A,
                            className: h.dV,
                            onEnded: () => {
                                v(!0);
                            },
                            ref: b,
                            children: (0, i.jsx)("source", { src: N ? x.A : E.A, type: N ? A.a.MP4 : A.a.WEBM }),
                        }),
                    }),
                    (0, i.jsx)("div", { className: h.es }),
                    (0, i.jsx)("div", { className: h.fF }),
                ],
            }),
        })
    );
});
