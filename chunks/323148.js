a.d(s, { default: () => T });
var t = a(627968),
    l = a(64700),
    c = a(503698),
    i = a.n(c),
    r = a(892227),
    d = a(224640),
    n = a(20742),
    o = a(17928),
    m = a(661531),
    x = a(534514),
    u = a(834730),
    f = a(43990),
    h = a(111159),
    p = a(318254),
    j = a(577473),
    b = a(278416),
    N = a(688810),
    g = a(859040),
    v = a(792656),
    A = a(914410),
    _ = a(961250),
    k = a(532309),
    w = a(440005),
    C = a(49132),
    O = a(555837),
    S = a(975571),
    y = a(652215),
    R = a(788868),
    z = a(594387),
    E = a(375708),
    I = a(465388);
function M(e) {
    let { icon: s, title: a, description: l, footer: c, thumbnailSrc: r, thumbnailImageClassName: d } = e;
    return (0, t.jsxs)("div", {
        className: I.nK,
        children: [
            (0, t.jsxs)("div", {
                className: I.Yc,
                children: [
                    (0, t.jsxs)("div", {
                        className: I.Jp,
                        children: [
                            (0, t.jsx)("div", { className: I.kf, children: s }),
                            (0, t.jsx)(x.D, { variant: "heading-lg/semibold", color: "text-strong", children: a }),
                        ],
                    }),
                    (0, t.jsx)("div", {
                        className: I.jV,
                        children: (0, t.jsx)(u.E, { variant: "text-sm/medium", color: "text-subtle", children: l }),
                    }),
                    c,
                ],
            }),
            null != r &&
                (0, t.jsx)("div", {
                    className: I.t$,
                    children: (0, t.jsx)("img", { className: i()(I.Q7, d), src: r, alt: "" }),
                }),
        ],
    });
}
function T(e) {
    let { transitionState: s, onClose: a } = e,
        { analyticsLocations: c } = (0, N.Ay)(),
        { programReward: x, totalDays: T } = (0, o.cf)([k.A], () => ({
            programReward: k.A.getRewardForProgram(w.W.XBOX),
            totalDays: k.A.getTotalDaysInDuration(w.W.XBOX),
        })),
        D = (0, C.J8)(x),
        G = (0, O.G)({ location: "xboxPerksModal" });
    l.useEffect(() => {
        G && (D ? (0, _.uM)() : (0, _.Ay)());
    }, [D, G]);
    let P = x?.reward_amount ?? 250,
        X = T ?? 30,
        K =
            x?.next_reward_date != null
                ? Math.min(X, Math.max(0, (0, r.default)(new Date(x.next_reward_date), new Date())))
                : X;
    return (0, t.jsx)(d.d, {
        transitionState: s,
        onClose: a,
        size: "md",
        "aria-label": E.intl.string(z.default.cRLw2a),
        children: (0, t.jsx)(f.N, {
            theme: "dark",
            children: (e) =>
                (0, t.jsxs)("div", {
                    className: i()(e, I.yl),
                    children: [
                        (0, t.jsxs)("div", {
                            className: I.wx,
                            children: [
                                (0, t.jsxs)("div", {
                                    className: I.yp,
                                    children: [
                                        (0, t.jsx)("img", {
                                            src: "https://cdn.discordapp.com/assets/content/be9c8221486fa97b56c4cb1c1392cb39d07ebd5836fe23f068f39cccef49c16f.png",
                                            className: I.Fn,
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, t.jsx)(u.E, {
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            className: I.NO,
                                            children: "x",
                                        }),
                                        (0, t.jsx)(h.p, { size: "sm", color: m.A.colors.ICON_STRONG }),
                                    ],
                                }),
                                (0, t.jsx)(n.s_, {}),
                            ],
                        }),
                        (0, t.jsx)("div", {
                            className: I.VA,
                            children: (0, t.jsx)(u.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: E.intl.format(z.default["70kyQr"], {
                                    learnMoreLink: S.A.getArticleURL(y.MVz.XBOX_GAME_PASS_PERKS),
                                }),
                            }),
                        }),
                        (0, t.jsxs)("div", {
                            className: I.rN,
                            children: [
                                (0, t.jsx)(M, {
                                    icon: (0, t.jsx)(p.C, { size: "sm", color: m.A.colors.ICON_STRONG }),
                                    title: E.intl.string(z.default["+tdDeK"]),
                                    description: E.intl.format(z.default.ZYc6Hv, { orbAmount: P, days: K }),
                                    footer:
                                        null != x
                                            ? (0, t.jsx)("div", {
                                                  className: I.hr,
                                                  children: (0, t.jsx)(A.Ay, {
                                                      variant: A.qP.BLUE,
                                                      weight: A.fh.MEDIUM,
                                                      progress: X - K,
                                                      maximum: X,
                                                      glowing: !1,
                                                  }),
                                              })
                                            : null,
                                    thumbnailSrc:
                                        "https://cdn.discordapp.com/assets/content/2733509d1c8c361c1a0125888c4a8c32d63471b71a304fe6aa37619f137d6d1a.png",
                                }),
                                (0, t.jsx)(M, {
                                    icon: (0, t.jsx)(j.r, { size: "sm", color: m.A.colors.ICON_STRONG }),
                                    title: E.intl.string(z.default["++kzl5"]),
                                    description: E.intl.format(z.default.kc3Kvs, { multiplier: "1.2" }),
                                    thumbnailSrc:
                                        "https://cdn.discordapp.com/assets/content/023eccf9a31b5e91537568fd5cf492e2e86beb668c90ffd86b013a674ae61f99.png",
                                    thumbnailImageClassName: I.$T,
                                }),
                                (0, t.jsx)(M, {
                                    icon: (0, t.jsx)(b.g, { size: "sm", color: m.A.colors.ICON_STRONG }),
                                    title: E.intl.string(z.default["a+PtZt"]),
                                    description: E.intl.format(z.default.WgkpKK, {
                                        onClick: () => {
                                            (0, g.Cz)({ analyticsLocations: c, analyticsSource: "crepe glaze modal" }),
                                                a();
                                        },
                                    }),
                                    thumbnailSrc:
                                        "https://cdn.discordapp.com/assets/content/07b1bde7c3e4eab64c7d3419dd73ad737ab1f0730a1fa186d746e7880edd6209.png",
                                    thumbnailImageClassName: I.Ly,
                                }),
                            ],
                        }),
                        (0, t.jsx)("div", {
                            className: I.qr,
                            children: (0, t.jsx)(v.A, {
                                fullWidth: !0,
                                defaultTextOverride: E.intl.string(z.default["4CdlUW"]),
                                subscriptionTier: R.pe.TIER_2,
                            }),
                        }),
                    ],
                }),
        }),
    });
}
