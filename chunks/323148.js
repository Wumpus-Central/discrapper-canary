a.d(s, { default: () => D });
var t = a(627968),
    l = a(64700),
    c = a(503698),
    i = a.n(c),
    d = a(892227),
    r = a(224640),
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
    k = a(914410),
    w = a(961250),
    A = a(532309),
    C = a(440005),
    _ = a(49132),
    O = a(555837),
    y = a(788868),
    I = a(594387),
    S = a(375708),
    T = a(465388);
function z(e) {
    let { icon: s, title: a, description: l, footer: c, thumbnailSrc: d, thumbnailImageClassName: r } = e;
    return (0, t.jsxs)("div", {
        className: T.nK,
        children: [
            (0, t.jsxs)("div", {
                className: T.Yc,
                children: [
                    (0, t.jsxs)("div", {
                        className: T.Jp,
                        children: [
                            (0, t.jsx)("div", { className: T.kf, children: s }),
                            (0, t.jsx)(x.D, { variant: "heading-lg/semibold", color: "text-strong", children: a }),
                        ],
                    }),
                    (0, t.jsx)("div", {
                        className: T.jV,
                        children: (0, t.jsx)(u.E, { variant: "text-sm/medium", color: "text-subtle", children: l }),
                    }),
                    c,
                ],
            }),
            null != d &&
                (0, t.jsx)("div", {
                    className: T.t$,
                    children: (0, t.jsx)("img", { className: i()(T.Q7, r), src: d, alt: "" }),
                }),
        ],
    });
}
function D(e) {
    let { transitionState: s, onClose: a } = e,
        { analyticsLocations: c } = (0, N.Ay)(),
        { programReward: x, totalDays: D } = (0, o.cf)([A.A], () => ({
            programReward: A.A.getRewardForProgram(C.W.XBOX),
            totalDays: A.A.getTotalDaysInDuration(C.W.XBOX),
        })),
        R = (0, _.J8)(x),
        E = (0, O.G)({ location: "xboxPerksModal" });
    l.useEffect(() => {
        E && (R ? (0, w.uM)() : (0, w.Ay)());
    }, [R, E]);
    let M = x?.reward_amount ?? 250,
        G = D ?? 30,
        K =
            x?.next_reward_date != null
                ? Math.min(G, Math.max(0, (0, d.default)(new Date(x.next_reward_date), new Date())))
                : G;
    return (0, t.jsx)(r.d, {
        transitionState: s,
        onClose: a,
        size: "md",
        "aria-label": S.intl.string(I.default.cRLw2a),
        children: (0, t.jsx)(f.N, {
            theme: "dark",
            children: (e) =>
                (0, t.jsxs)("div", {
                    className: i()(e, T.yl),
                    children: [
                        (0, t.jsxs)("div", {
                            className: T.wx,
                            children: [
                                (0, t.jsxs)("div", {
                                    className: T.yp,
                                    children: [
                                        (0, t.jsx)("img", {
                                            src: "https://cdn.discordapp.com/assets/content/be9c8221486fa97b56c4cb1c1392cb39d07ebd5836fe23f068f39cccef49c16f.png",
                                            className: T.Fn,
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, t.jsx)(u.E, {
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            className: T.NO,
                                            children: "x",
                                        }),
                                        (0, t.jsx)(h.p, { size: "sm", color: m.A.colors.ICON_STRONG }),
                                    ],
                                }),
                                (0, t.jsx)(n.s_, {}),
                            ],
                        }),
                        (0, t.jsx)("div", {
                            className: T.VA,
                            children: (0, t.jsx)(u.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: S.intl.format(I.default["70kyQr"], { learnMoreLink: "#" }),
                            }),
                        }),
                        (0, t.jsxs)("div", {
                            className: T.rN,
                            children: [
                                (0, t.jsx)(z, {
                                    icon: (0, t.jsx)(p.C, { size: "sm", color: m.A.colors.ICON_STRONG }),
                                    title: S.intl.string(I.default["+tdDeK"]),
                                    description: S.intl.format(I.default.ZYc6Hv, { orbAmount: M, days: K }),
                                    footer:
                                        null != x
                                            ? (0, t.jsx)("div", {
                                                  className: T.hr,
                                                  children: (0, t.jsx)(k.Ay, {
                                                      variant: k.qP.BLUE,
                                                      weight: k.fh.MEDIUM,
                                                      progress: G - K,
                                                      maximum: G,
                                                      glowing: !1,
                                                  }),
                                              })
                                            : null,
                                    thumbnailSrc:
                                        "https://cdn.discordapp.com/assets/content/2733509d1c8c361c1a0125888c4a8c32d63471b71a304fe6aa37619f137d6d1a.png",
                                }),
                                (0, t.jsx)(z, {
                                    icon: (0, t.jsx)(j.r, { size: "sm", color: m.A.colors.ICON_STRONG }),
                                    title: S.intl.string(I.default["++kzl5"]),
                                    description: S.intl.format(I.default.kc3Kvs, { multiplier: "1.2" }),
                                    thumbnailSrc:
                                        "https://cdn.discordapp.com/assets/content/023eccf9a31b5e91537568fd5cf492e2e86beb668c90ffd86b013a674ae61f99.png",
                                    thumbnailImageClassName: T.$T,
                                }),
                                (0, t.jsx)(z, {
                                    icon: (0, t.jsx)(b.g, { size: "sm", color: m.A.colors.ICON_STRONG }),
                                    title: S.intl.string(I.default["a+PtZt"]),
                                    description: S.intl.format(I.default.WgkpKK, {
                                        onClick: () => {
                                            (0, g.Cz)({ analyticsLocations: c, analyticsSource: "crepe glaze modal" }),
                                                a();
                                        },
                                    }),
                                    thumbnailSrc:
                                        "https://cdn.discordapp.com/assets/content/07b1bde7c3e4eab64c7d3419dd73ad737ab1f0730a1fa186d746e7880edd6209.png",
                                    thumbnailImageClassName: T.Ly,
                                }),
                            ],
                        }),
                        (0, t.jsx)("div", {
                            className: T.qr,
                            children: (0, t.jsx)(v.A, {
                                fullWidth: !0,
                                defaultTextOverride: S.intl.string(I.default["4CdlUW"]),
                                subscriptionTier: y.pe.TIER_2,
                            }),
                        }),
                    ],
                }),
        }),
    });
}
