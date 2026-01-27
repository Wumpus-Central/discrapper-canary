n.d(t, {
    A: () => E,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(397927),
    o = n(793574),
    c = n(688810),
    d = n(607470),
    u = n(676279),
    _ = n(526292),
    p = n(753894),
    m = n(693591),
    g = n(985018),
    A = n(942916),
    f = n(635736),
    h = n(917025),
    b = n(707621);
let E = i.forwardRef((e, t) => {
    let { className: n, isFooterVisible: l, isDarkMode: E, isReducedMotion: x, subscriptionTier: O } = e,
        { analyticsLocations: C } = (0, c.Ay)(o.A.PREMIUM_MARKETING_FOOTER_CTA),
        I = (0, _.ar)(),
        T = (0, u.TM)(),
        S = i.useRef(null),
        [j, v] = i.useState(!1);
    return (
        i.useEffect(() => {
            !l || x || j || null == S.current || S.current.play();
        }, [l, x, j]),
        (0, r.jsx)(c.f5, {
            value: C,
            children: (0, r.jsxs)("div", {
                ref: t,
                className: s()(A.kL, n),
                children: [
                    (0, r.jsx)(a.Heading, {
                        className: A.RH,
                        variant: "display-md",
                        color: "text-strong",
                        children: g.intl.string(g.t.lEw32m),
                    }),
                    (0, r.jsx)(p.KN, {
                        subscriptionTier: O,
                        inOfferExperience: I,
                        containerClassName: A.Z5,
                        isApplicationHome: !0,
                        isDarkMode: E,
                    }),
                    (0, r.jsx)("div", {
                        className: A.av,
                        children: (0, r.jsx)(d.A, {
                            playsInline: !0,
                            muted: !0,
                            preload: "auto",
                            poster: h.A,
                            className: A.dV,
                            onEnded: () => {
                                v(!0);
                            },
                            ref: S,
                            children: (0, r.jsx)("source", {
                                src: T ? f.A : b.A,
                                type: T ? m.a.MP4 : m.a.WEBM,
                            }),
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: A.es,
                    }),
                    (0, r.jsx)("div", {
                        className: A.fF,
                    }),
                ],
            }),
        })
    );
});
