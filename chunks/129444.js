a.d(s, { default: () => z });
var t = a(477900),
    c = a(582128),
    l = a(503698),
    i = a.n(l),
    n = a(892227),
    r = a(855986),
    d = a(646514),
    o = a(534514),
    m = a(834730),
    u = a(224640),
    f = a(43990),
    x = a(111159),
    h = a(20742),
    p = a(95362),
    j = a(318254),
    b = a(577473),
    N = a(278416),
    g = a(793574),
    A = a(688810),
    v = a(969935),
    _ = a(792656),
    O = a(914410),
    y = a(961250),
    w = a(895944),
    R = a(921894),
    S = a(26508),
    k = a(555837),
    C = a(129230),
    E = a(975571),
    I = a(377368),
    D = a(652215),
    X = a(682901),
    M = a(337091),
    T = a(792996),
    K = a(521857);
function P(e) {
    let { icon: s, title: a, description: c, footer: l, thumbnailSrc: n, thumbnailImageClassName: r } = e;
    return (0, t.jsxs)("div", {
        className: K.nK,
        children: [
            (0, t.jsxs)("div", {
                className: K.Yc,
                children: [
                    (0, t.jsxs)("div", {
                        className: K.Jp,
                        children: [
                            (0, t.jsx)("div", { className: K.kf, children: s }),
                            (0, t.jsx)(o.D, { variant: "heading-lg/semibold", color: "text-strong", children: a }),
                        ],
                    }),
                    (0, t.jsx)("div", {
                        className: K.jV,
                        children: (0, t.jsx)(m.E, { variant: "body-sm/medium", color: "text-subtle", children: c }),
                    }),
                    l,
                ],
            }),
            null != n &&
                (0, t.jsx)("div", {
                    className: K.t$,
                    children: (0, t.jsx)("img", { className: i()(K.Q7, r), src: n, alt: "" }),
                }),
        ],
    });
}
function z(e) {
    let { transitionState: s, onClose: a } = e,
        { analyticsLocations: l } = (0, A.Ay)(g.A.XBOX_PERKS_MODAL),
        { programReward: o, totalDays: z } = (0, r.cf)([w.A], () => ({
            programReward: w.A.getRewardForProgram(R.W.XBOX),
            totalDays: w.A.getTotalDaysInDuration(R.W.XBOX),
        })),
        L = (0, S.J8)(o),
        G = (0, k.G)();
    c.useEffect(() => {
        G && (L ? (0, y.uM)() : (0, y.Ay)());
    }, [L, G]);
    let B = c.useRef(!1);
    c.useEffect(() => {
        B.current || ((B.current = !0), C.default.track(D.HAw.OPEN_MODAL, { type: I.Xj, location_stack: l }));
    }, [l]);
    let W = o?.reward_amount ?? 250,
        U = z ?? 30,
        J = o?.next_reward_date != null ? Math.max(0, (0, n.default)(new Date(o.next_reward_date), new Date())) : U,
        Q = J > U ? 0 : U - J;
    return (0, t.jsx)(A.f5, {
        value: l,
        children: (0, t.jsx)(u.d, {
            transitionState: s,
            onClose: a,
            size: "md",
            "aria-label": T.intl.string(M.default.cRLw2a),
            children: (0, t.jsx)(f.N, {
                theme: D.NJ8.DARK,
                children: (e) =>
                    (0, t.jsxs)("div", {
                        className: i()(e, K.yl),
                        children: [
                            (0, t.jsxs)("div", {
                                className: K.wx,
                                children: [
                                    (0, t.jsxs)("div", {
                                        className: K.yp,
                                        children: [
                                            (0, t.jsx)("img", {
                                                src: "https://cdn.discordapp.com/assets/content/be9c8221486fa97b56c4cb1c1392cb39d07ebd5836fe23f068f39cccef49c16f.png",
                                                className: K.Fn,
                                                alt: "Xbox Game Pass",
                                            }),
                                            (0, t.jsx)(m.E, {
                                                variant: "body-sm/medium",
                                                color: "text-subtle",
                                                className: K.NO,
                                                children: "x",
                                            }),
                                            (0, t.jsx)(x.ClydeIcon, { size: "sm", color: d.A.colors.ICON_STRONG }),
                                        ],
                                    }),
                                    (0, t.jsx)(h.s_, {}),
                                ],
                            }),
                            (0, t.jsx)("div", {
                                className: K.VA,
                                children: (0, t.jsx)(m.E, {
                                    variant: "body-sm/medium",
                                    color: "text-subtle",
                                    children: T.intl.format(M.default["70kyQr"], {
                                        learnMoreLink: E.A.getArticleURL(D.MVz.XBOX_GAME_PASS_PERKS),
                                    }),
                                }),
                            }),
                            (0, t.jsxs)(p.Ar, {
                                className: K.rN,
                                children: [
                                    (0, t.jsx)(P, {
                                        icon: (0, t.jsx)(j.OrbsIcon, { size: "sm", color: d.A.colors.ICON_STRONG }),
                                        title: T.intl.string(M.default["+tdDeK"]),
                                        description: T.intl.format(M.default.ZYc6Hv, { orbAmount: W, days: J }),
                                        footer:
                                            null != o
                                                ? (0, t.jsx)("div", {
                                                      className: K.hr,
                                                      children: (0, t.jsx)(O.Ay, {
                                                          variant: O.qP.BLUE,
                                                          weight: O.fh.MEDIUM,
                                                          progress: Q,
                                                          maximum: U,
                                                          glowing: !1,
                                                      }),
                                                  })
                                                : null,
                                        thumbnailSrc:
                                            "https://cdn.discordapp.com/assets/content/2733509d1c8c361c1a0125888c4a8c32d63471b71a304fe6aa37619f137d6d1a.png",
                                    }),
                                    (0, t.jsx)(P, {
                                        icon: (0, t.jsx)(b.QuestsIcon, { size: "sm", color: d.A.colors.ICON_STRONG }),
                                        title: T.intl.string(M.default["++kzl5"]),
                                        description: T.intl.format(M.default.kc3Kvs, { multiplier: "1.2" }),
                                        thumbnailSrc:
                                            "https://cdn.discordapp.com/assets/content/023eccf9a31b5e91537568fd5cf492e2e86beb668c90ffd86b013a674ae61f99.png",
                                        thumbnailImageClassName: K.$T,
                                    }),
                                    (0, t.jsx)(P, {
                                        icon: (0, t.jsx)(N.TagIcon, { size: "sm", color: d.A.colors.ICON_STRONG }),
                                        title: T.intl.string(M.default["a+PtZt"]),
                                        description: T.intl.format(M.default.WgkpKK, {
                                            onClick: () => {
                                                ((0, v.Cz)({
                                                    analyticsLocations: l,
                                                    analyticsSource: g.A.XBOX_PERKS_MODAL,
                                                }),
                                                    a());
                                            },
                                        }),
                                        thumbnailSrc:
                                            "https://cdn.discordapp.com/assets/content/07b1bde7c3e4eab64c7d3419dd73ad737ab1f0730a1fa186d746e7880edd6209.png",
                                        thumbnailImageClassName: K.Ly,
                                    }),
                                ],
                            }),
                            (0, t.jsx)("div", {
                                className: K.qr,
                                children: (0, t.jsx)(_.A, {
                                    fullWidth: !0,
                                    defaultTextOverride: T.intl.string(M.default["4CdlUW"]),
                                    subscriptionTier: X.pe.TIER_2,
                                }),
                            }),
                        ],
                    }),
            }),
        }),
    });
}
