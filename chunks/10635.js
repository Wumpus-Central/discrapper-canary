n.d(t, { A: () => L });
var i = n(627968),
    l = n(64700),
    s = n(158954),
    a = n(397927),
    r = n(736653),
    o = n(793574),
    d = n(688810),
    c = n(311016),
    u = n(713517),
    h = n(182592),
    A = n(562153),
    g = n(183555),
    m = n(672385),
    p = n(950191),
    _ = n(657331),
    x = n(718019),
    f = n(31432),
    E = n(915614),
    C = n(389996),
    I = n(743987),
    S = n(900179),
    b = n(946356),
    N = n(810396),
    T = n(35241),
    j = n(587168),
    v = n(996988),
    y = n(985018),
    R = n(743789),
    O = n(673721);
function L(e) {
    let { user: t, channel: n } = e,
        L = __OVERLAY__ || !(0, c.A)(t.id),
        D = (0, p.Ay)(t.id),
        M = (0, r.Ay)(),
        G = l.useRef(Date.now()),
        { analyticsLocations: U } = (0, d.Ay)(o.A.USER_PROFILE_SIDEBAR),
        P = (0, g.pb)({ layout: "SIDEBAR", userId: t.id, channelId: n.id }),
        k = l.useRef(null),
        { isHoveringOrFocusing: w, isHovering: V } = (0, u.A)(k),
        B = () => {
            (0, _.openUserProfileModal)({ sourceAnalyticsLocations: U, hideRestrictedProfile: !0, ...P });
        };
    return (0, i.jsx)(d.f5, {
        value: U,
        children: (0, i.jsx)(g.of, {
            value: P,
            openedAt: G.current,
            fetchStartedAt: D?.fetchStartedAt,
            fetchEndedAt: D?.fetchEndedAt,
            isLoaded: D?.isLoaded,
            children: (0, i.jsxs)(b.A, {
                ref: k,
                user: t,
                displayProfile: D,
                themeType: v.d.SIDEBAR,
                themeOverride: M,
                children: [
                    (0, i.jsxs)(s.d_W, {
                        children: [
                            (0, i.jsx)(j.A, { children: (0, i.jsx)(T.A, { user: t }) }),
                            (0, i.jsxs)("div", {
                                className: R.wx,
                                children: [
                                    (0, i.jsx)(E.A, {
                                        user: t,
                                        displayProfile: D,
                                        themeType: v.d.SIDEBAR,
                                        animateOnHoverOrFocusOnly: !w,
                                    }),
                                    (0, i.jsx)(x.A, {
                                        user: t,
                                        displayProfile: D,
                                        channelId: n.id,
                                        themeType: v.d.SIDEBAR,
                                        onOpenProfile: L ? void 0 : B,
                                    }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: O.rf,
                                children: [
                                    (0, i.jsx)(N.A, {
                                        user: t,
                                        guildId: n.guild_id,
                                        nickname: A.Ay.getName(null, n.id, t),
                                        pronouns: D?.pronouns,
                                        onOpenProfile: L ? void 0 : B,
                                        tags: (0, i.jsx)(f.A, { displayProfile: D, themeType: v.d.SIDEBAR }),
                                    }),
                                    (0, i.jsxs)(b.A.Overlay, {
                                        className: O.Lw,
                                        children: [
                                            (0, i.jsx)(S.A, {
                                                heading: y.intl.string(y.t["61W33d"]),
                                                headingColor: "text-strong",
                                                children: (0, i.jsx)(C.A, {
                                                    userBio: D?.bio,
                                                    userId: t.id,
                                                    animateOnHoverOrFocusOnly: !0,
                                                    isHoveringOrFocusing: w,
                                                }),
                                            }),
                                            (0, i.jsx)(S.A, {
                                                heading: y.intl.string(y.t["A//N4k"]),
                                                headingColor: "text-strong",
                                                children: (0, i.jsx)(I.A, { userId: t.id }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    !L &&
                        (0, i.jsx)("div", {
                            className: R.qr,
                            children: (0, i.jsx)(a.DUT, {
                                onClick: () => {
                                    B(), (0, m.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: U, ...P });
                                },
                                className: R.wC,
                                children: y.intl.string(y.t["+Xp3hq"]),
                            }),
                        }),
                    D?.profileEffect != null && (0, i.jsx)(h.A, { skuId: D?.profileEffect?.skuId, isHovering: V }),
                ],
            }),
        }),
    });
}
