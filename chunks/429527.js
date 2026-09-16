t.d(s, { default: () => z });
var a = t(477900),
    c = t(582128),
    l = t(503698),
    i = t.n(l),
    r = t(892227),
    n = t(224640),
    d = t(20742),
    o = t(17928),
    m = t(661531),
    u = t(297264),
    x = t(834730),
    f = t(43990),
    h = t(111159),
    p = t(364522),
    j = t(318254),
    N = t(577473),
    b = t(278416),
    g = t(793574),
    A = t(688810),
    v = t(839534),
    _ = t(792656),
    O = t(914410),
    k = t(961250),
    w = t(532309),
    R = t(440005),
    S = t(26508),
    C = t(555837),
    E = t(174459),
    y = t(975571),
    D = t(377368),
    X = t(652215),
    M = t(202541),
    I = t(181666),
    P = t(375708),
    T = t(521857);
function K(e) {
    let { icon: s, title: t, description: c, footer: l, thumbnailSrc: r, thumbnailImageClassName: n } = e;
    return (0, a.jsxs)("div", {
        className: T.nK,
        children: [
            (0, a.jsxs)("div", {
                className: T.Yc,
                children: [
                    (0, a.jsxs)("div", {
                        className: T.Jp,
                        children: [
                            (0, a.jsx)("div", { className: T.kf, children: s }),
                            (0, a.jsx)(u.D, { variant: "heading-lg/semibold", color: "text-strong", children: t }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: T.jV,
                        children: (0, a.jsx)(x.E, { variant: "text-sm/medium", color: "text-subtle", children: c }),
                    }),
                    l,
                ],
            }),
            null != r &&
                (0, a.jsx)("div", {
                    className: T.t$,
                    children: (0, a.jsx)("img", { className: i()(T.Q7, n), src: r, alt: "" }),
                }),
        ],
    });
}
function z(e) {
    let { transitionState: s, onClose: t } = e,
        { analyticsLocations: l } = (0, A.Ay)(g.A.XBOX_PERKS_MODAL),
        { programReward: u, totalDays: z } = (0, o.cf)([w.A], () => ({
            programReward: w.A.getRewardForProgram(R.W.XBOX),
            totalDays: w.A.getTotalDaysInDuration(R.W.XBOX),
        })),
        L = (0, S.J8)(u),
        G = (0, C.G)({ location: "xboxPerksModal" });
    c.useEffect(() => {
        G && (L ? (0, k.uM)() : (0, k.Ay)());
    }, [L, G]);
    let B = c.useRef(!1);
    c.useEffect(() => {
        B.current || ((B.current = !0), E.default.track(X.HAw.OPEN_MODAL, { type: D.Xj, location_stack: l }));
    }, [l]);
    let W = u?.reward_amount ?? 250,
        U = z ?? 30,
        J = u?.next_reward_date != null ? Math.max(0, (0, r.default)(new Date(u.next_reward_date), new Date())) : U,
        V = J > U ? 0 : U - J;
    return (0, a.jsx)(A.f5, {
        value: l,
        children: (0, a.jsx)(n.d, {
            transitionState: s,
            onClose: t,
            size: "md",
            "aria-label": P.intl.string(I.default.cRLw2a),
            children: (0, a.jsx)(f.N, {
                theme: X.NJ8.DARK,
                children: (e) =>
                    (0, a.jsxs)("div", {
                        className: i()(e, T.yl),
                        children: [
                            (0, a.jsxs)("div", {
                                className: T.wx,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: T.yp,
                                        children: [
                                            (0, a.jsx)("img", {
                                                src: "https://cdn.discordapp.com/assets/content/be9c8221486fa97b56c4cb1c1392cb39d07ebd5836fe23f068f39cccef49c16f.png",
                                                className: T.Fn,
                                                alt: "Xbox Game Pass",
                                            }),
                                            (0, a.jsx)(x.E, {
                                                variant: "text-sm/medium",
                                                color: "text-subtle",
                                                className: T.NO,
                                                children: "x",
                                            }),
                                            (0, a.jsx)(h.p, { size: "sm", color: m.A.colors.ICON_STRONG }),
                                        ],
                                    }),
                                    (0, a.jsx)(d.s_, {}),
                                ],
                            }),
                            (0, a.jsx)("div", {
                                className: T.VA,
                                children: (0, a.jsx)(x.E, {
                                    variant: "text-sm/medium",
                                    color: "text-subtle",
                                    children: P.intl.format(I.default["70kyQr"], {
                                        learnMoreLink: y.A.getArticleURL(X.MVz.XBOX_GAME_PASS_PERKS),
                                    }),
                                }),
                            }),
                            (0, a.jsxs)(p.Ar, {
                                className: T.rN,
                                children: [
                                    (0, a.jsx)(K, {
                                        icon: (0, a.jsx)(j.C, { size: "sm", color: m.A.colors.ICON_STRONG }),
                                        title: P.intl.string(I.default["+tdDeK"]),
                                        description: P.intl.format(I.default.ZYc6Hv, { orbAmount: W, days: J }),
                                        footer:
                                            null != u
                                                ? (0, a.jsx)("div", {
                                                      className: T.hr,
                                                      children: (0, a.jsx)(O.Ay, {
                                                          variant: O.qP.BLUE,
                                                          weight: O.fh.MEDIUM,
                                                          progress: V,
                                                          maximum: U,
                                                          glowing: !1,
                                                      }),
                                                  })
                                                : null,
                                        thumbnailSrc:
                                            "https://cdn.discordapp.com/assets/content/2733509d1c8c361c1a0125888c4a8c32d63471b71a304fe6aa37619f137d6d1a.png",
                                    }),
                                    (0, a.jsx)(K, {
                                        icon: (0, a.jsx)(N.r, { size: "sm", color: m.A.colors.ICON_STRONG }),
                                        title: P.intl.string(I.default["++kzl5"]),
                                        description: P.intl.format(I.default.kc3Kvs, { multiplier: "1.2" }),
                                        thumbnailSrc:
                                            "https://cdn.discordapp.com/assets/content/023eccf9a31b5e91537568fd5cf492e2e86beb668c90ffd86b013a674ae61f99.png",
                                        thumbnailImageClassName: T.$T,
                                    }),
                                    (0, a.jsx)(K, {
                                        icon: (0, a.jsx)(b.TagIcon, { size: "sm", color: m.A.colors.ICON_STRONG }),
                                        title: P.intl.string(I.default["a+PtZt"]),
                                        description: P.intl.format(I.default.WgkpKK, {
                                            onClick: () => {
                                                ((0, v.Cz)({
                                                    analyticsLocations: l,
                                                    analyticsSource: g.A.XBOX_PERKS_MODAL,
                                                }),
                                                    t());
                                            },
                                        }),
                                        thumbnailSrc:
                                            "https://cdn.discordapp.com/assets/content/07b1bde7c3e4eab64c7d3419dd73ad737ab1f0730a1fa186d746e7880edd6209.png",
                                        thumbnailImageClassName: T.Ly,
                                    }),
                                ],
                            }),
                            (0, a.jsx)("div", {
                                className: T.qr,
                                children: (0, a.jsx)(_.A, {
                                    fullWidth: !0,
                                    defaultTextOverride: P.intl.string(I.default["4CdlUW"]),
                                    subscriptionTier: M.pe.TIER_2,
                                }),
                            }),
                        ],
                    }),
            }),
        }),
    });
}
