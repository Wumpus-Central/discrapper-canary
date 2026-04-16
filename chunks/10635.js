n.d(t, { A: () => O });
var i = n(627968),
    l = n(64700),
    s = n(158954),
    a = n(736653),
    r = n(793574),
    o = n(688810),
    d = n(311016),
    c = n(351966),
    u = n(713517),
    h = n(562153),
    A = n(183555),
    _ = n(950191),
    m = n(657331),
    p = n(718019),
    g = n(31432),
    f = n(915614),
    E = n(389996),
    x = n(743987),
    I = n(900179),
    C = n(946356),
    N = n(810396),
    T = n(35241),
    S = n(587168),
    b = n(747524),
    y = n(996988),
    v = n(985018),
    R = n(374146),
    j = n(733866);
function O(e) {
    let { user: t, channel: n } = e,
        O = __OVERLAY__ || !(0, d.A)(t.id),
        L = (0, _.Ay)(t.id),
        M = (0, a.Ay)(),
        D = l.useRef(Date.now()),
        { analyticsLocations: U } = (0, o.Ay)(r.A.USER_PROFILE_SIDEBAR),
        G = (0, A.pb)({ layout: "SIDEBAR", userId: t.id, channelId: n.id }),
        P = l.useRef(null),
        { isHoveringOrFocusing: k, isHovering: w } = (0, u.A)(P),
        B = () => {
            (0, m.openUserProfileModal)({ sourceAnalyticsLocations: U, hideRestrictedProfile: !0, ...G });
        };
    return (0, i.jsx)(o.f5, {
        value: U,
        children: (0, i.jsx)(A.of, {
            value: G,
            openedAt: D.current,
            fetchStartedAt: L?.fetchStartedAt,
            fetchEndedAt: L?.fetchEndedAt,
            isLoaded: L?.isLoaded,
            children: (0, i.jsxs)(C.A, {
                ref: P,
                user: t,
                displayProfile: L,
                themeType: y.d.SIDEBAR,
                themeOverride: M,
                children: [
                    (0, i.jsxs)(s.d_W, {
                        children: [
                            (0, i.jsx)(S.A, { children: (0, i.jsx)(T.A, { user: t }) }),
                            (0, i.jsxs)("div", {
                                className: R.wx,
                                children: [
                                    (0, i.jsx)(f.A, {
                                        user: t,
                                        displayProfile: L,
                                        themeType: y.d.SIDEBAR,
                                        animateOnHoverOrFocusOnly: !k,
                                    }),
                                    (0, i.jsx)(p.A, {
                                        user: t,
                                        displayProfile: L,
                                        channelId: n.id,
                                        themeType: y.d.SIDEBAR,
                                        onOpenProfile: O ? void 0 : B,
                                    }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: j.rf,
                                children: [
                                    (0, i.jsx)(N.A, {
                                        user: t,
                                        guildId: n.guild_id,
                                        nickname: h.Ay.getName(null, n.id, t),
                                        pronouns: L?.pronouns,
                                        onOpenProfile: O ? void 0 : B,
                                        tags: (0, i.jsx)(g.A, { displayProfile: L, themeType: y.d.SIDEBAR }),
                                    }),
                                    (0, i.jsxs)(C.A.Overlay, {
                                        className: j.Lw,
                                        children: [
                                            (0, i.jsx)(I.A, {
                                                heading: v.intl.string(v.t.ZzAR2Y),
                                                headingColor: "text-strong",
                                                children: (0, i.jsx)(E.A, {
                                                    userBio: L?.bio,
                                                    userId: t.id,
                                                    animateOnHoverOrFocusOnly: !0,
                                                    isHoveringOrFocusing: k,
                                                }),
                                            }),
                                            (0, i.jsx)(I.A, {
                                                heading: v.intl.string(v.t["A//N4k"]),
                                                headingColor: "text-strong",
                                                children: (0, i.jsx)(x.A, { userId: t.id }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    !O && (0, i.jsx)(b.A, { handleOpenProfile: B, analyticsLocations: U, context: G }),
                    L?.profileEffect != null && (0, i.jsx)(c.A, { skuId: L?.profileEffect?.skuId, isHovering: w }),
                ],
            }),
        }),
    });
}
