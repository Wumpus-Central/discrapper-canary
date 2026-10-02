t.d(s, { default: () => z });
var a = t(477900),
    c = t(582128),
    l = t(503698),
    i = t.n(l),
    r = t(892227),
    n = t(17928),
    d = t(661531),
    o = t(297264),
    m = t(834730),
    u = t(224640),
    x = t(43990),
    f = t(111159),
    h = t(20742),
    p = t(364522),
    j = t(318254),
    N = t(577473),
    b = t(278416),
    g = t(793574),
    A = t(688810),
    v = t(815996),
    _ = t(792656),
    O = t(914410),
    w = t(961250),
    R = t(532309),
    S = t(636592),
    k = t(17843),
    C = t(555837),
    E = t(174459),
    y = t(975571),
    D = t(377368),
    X = t(652215),
    I = t(202541),
    M = t(181666),
    T = t(375708),
    K = t(521857);
function P(e) {
    let { icon: s, title: t, description: c, footer: l, thumbnailSrc: r, thumbnailImageClassName: n } = e;
    return (0, a.jsxs)("div", {
        className: K.nK,
        children: [
            (0, a.jsxs)("div", {
                className: K.Yc,
                children: [
                    (0, a.jsxs)("div", {
                        className: K.Jp,
                        children: [
                            (0, a.jsx)("div", { className: K.kf, children: s }),
                            (0, a.jsx)(o.D, { variant: "heading-lg/semibold", color: "text-strong", children: t }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: K.jV,
                        children: (0, a.jsx)(m.E, { variant: "text-sm/medium", color: "text-subtle", children: c }),
                    }),
                    l,
                ],
            }),
            null != r &&
                (0, a.jsx)("div", {
                    className: K.t$,
                    children: (0, a.jsx)("img", { className: i()(K.Q7, n), src: r, alt: "" }),
                }),
        ],
    });
}
function z(e) {
    let { transitionState: s, onClose: t } = e,
        { analyticsLocations: l } = (0, A.Ay)(g.A.XBOX_PERKS_MODAL),
        { programReward: o, totalDays: z } = (0, n.cf)([R.A], () => ({
            programReward: R.A.getRewardForProgram(S.W.XBOX),
            totalDays: R.A.getTotalDaysInDuration(S.W.XBOX),
        })),
        L = (0, k.J8)(o),
        G = (0, C.G)();
    c.useEffect(() => {
        G && (L ? (0, w.uM)() : (0, w.Ay)());
    }, [L, G]);
    let B = c.useRef(!1);
    c.useEffect(() => {
        B.current || ((B.current = !0), E.default.track(X.HAw.OPEN_MODAL, { type: D.Xj, location_stack: l }));
    }, [l]);
    let W = o?.reward_amount ?? 250,
        U = z ?? 30,
        J = o?.next_reward_date != null ? Math.max(0, (0, r.default)(new Date(o.next_reward_date), new Date())) : U,
        V = J > U ? 0 : U - J;
    return (0, a.jsx)(A.f5, {
        value: l,
        children: (0, a.jsx)(u.d, {
            transitionState: s,
            onClose: t,
            size: "md",
            "aria-label": T.intl.string(M.default.cRLw2a),
            children: (0, a.jsx)(x.N, {
                theme: X.NJ8.DARK,
                children: (e) =>
                    (0, a.jsxs)("div", {
                        className: i()(e, K.yl),
                        children: [
                            (0, a.jsxs)("div", {
                                className: K.wx,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: K.yp,
                                        children: [
                                            (0, a.jsx)("img", {
                                                src: "https://cdn.discordapp.com/assets/content/be9c8221486fa97b56c4cb1c1392cb39d07ebd5836fe23f068f39cccef49c16f.png",
                                                className: K.Fn,
                                                alt: "Xbox Game Pass",
                                            }),
                                            (0, a.jsx)(m.E, {
                                                variant: "text-sm/medium",
                                                color: "text-subtle",
                                                className: K.NO,
                                                children: "x",
                                            }),
                                            (0, a.jsx)(f.p, { size: "sm", color: d.A.colors.ICON_STRONG }),
                                        ],
                                    }),
                                    (0, a.jsx)(h.s_, {}),
                                ],
                            }),
                            (0, a.jsx)("div", {
                                className: K.VA,
                                children: (0, a.jsx)(m.E, {
                                    variant: "text-sm/medium",
                                    color: "text-subtle",
                                    children: T.intl.format(M.default["70kyQr"], {
                                        learnMoreLink: y.A.getArticleURL(X.MVz.XBOX_GAME_PASS_PERKS),
                                    }),
                                }),
                            }),
                            (0, a.jsxs)(p.Ar, {
                                className: K.rN,
                                children: [
                                    (0, a.jsx)(P, {
                                        icon: (0, a.jsx)(j.C, { size: "sm", color: d.A.colors.ICON_STRONG }),
                                        title: T.intl.string(M.default["+tdDeK"]),
                                        description: T.intl.format(M.default.ZYc6Hv, { orbAmount: W, days: J }),
                                        footer:
                                            null != o
                                                ? (0, a.jsx)("div", {
                                                      className: K.hr,
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
                                    (0, a.jsx)(P, {
                                        icon: (0, a.jsx)(N.r, { size: "sm", color: d.A.colors.ICON_STRONG }),
                                        title: T.intl.string(M.default["++kzl5"]),
                                        description: T.intl.format(M.default.kc3Kvs, { multiplier: "1.2" }),
                                        thumbnailSrc:
                                            "https://cdn.discordapp.com/assets/content/023eccf9a31b5e91537568fd5cf492e2e86beb668c90ffd86b013a674ae61f99.png",
                                        thumbnailImageClassName: K.$T,
                                    }),
                                    (0, a.jsx)(P, {
                                        icon: (0, a.jsx)(b.TagIcon, { size: "sm", color: d.A.colors.ICON_STRONG }),
                                        title: T.intl.string(M.default["a+PtZt"]),
                                        description: T.intl.format(M.default.WgkpKK, {
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
                                        thumbnailImageClassName: K.Ly,
                                    }),
                                ],
                            }),
                            (0, a.jsx)("div", {
                                className: K.qr,
                                children: (0, a.jsx)(_.A, {
                                    fullWidth: !0,
                                    defaultTextOverride: T.intl.string(M.default["4CdlUW"]),
                                    subscriptionTier: I.pe.TIER_2,
                                }),
                            }),
                        ],
                    }),
            }),
        }),
    });
}
