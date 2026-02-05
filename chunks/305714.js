n.d(t, { A: () => x });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(397927),
    o = n(793574),
    c = n(688810),
    d = n(607470),
    u = n(676279),
    _ = n(526292),
    m = n(753894),
    A = n(693591),
    g = n(985018),
    E = n(942916),
    h = n(635736),
    p = n(917025),
    C = n(707621);
let x = s.forwardRef((e, t) => {
    let { className: n, isFooterVisible: r, isDarkMode: x, isReducedMotion: T, subscriptionTier: I } = e,
        { analyticsLocations: S } = (0, c.Ay)(o.A.PREMIUM_MARKETING_FOOTER_CTA),
        f = (0, _.ar)(),
        N = (0, u.TM)(),
        b = s.useRef(null),
        [R, v] = s.useState(!1);
    return (
        s.useEffect(() => {
            !r || T || R || null == b.current || b.current.play();
        }, [r, T, R]),
        (0, i.jsx)(c.f5, {
            value: S,
            children: (0, i.jsxs)("div", {
                ref: t,
                className: a()(E.kL, n),
                children: [
                    (0, i.jsx)(l.Heading, {
                        className: E.RH,
                        variant: "display-md",
                        color: "text-strong",
                        children: g.intl.string(g.t.lEw32m),
                    }),
                    (0, i.jsx)(m.KN, {
                        subscriptionTier: I,
                        inOfferExperience: f,
                        containerClassName: E.Z5,
                        isApplicationHome: !0,
                        isDarkMode: x,
                    }),
                    (0, i.jsx)("div", {
                        className: E.av,
                        children: (0, i.jsx)(d.A, {
                            playsInline: !0,
                            muted: !0,
                            preload: "auto",
                            poster: p.A,
                            className: E.dV,
                            onEnded: () => {
                                v(!0);
                            },
                            ref: b,
                            children: (0, i.jsx)("source", { src: N ? h.A : C.A, type: N ? A.a.MP4 : A.a.WEBM }),
                        }),
                    }),
                    (0, i.jsx)("div", { className: E.es }),
                    (0, i.jsx)("div", { className: E.fF }),
                ],
            }),
        })
    );
});
