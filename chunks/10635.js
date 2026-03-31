n.d(t, { A: () => O });
var i = n(627968),
    l = n(64700),
    s = n(158954),
    a = n(736653),
    r = n(793574),
    o = n(688810),
    c = n(311016),
    d = n(351966),
    u = n(713517),
    h = n(562153),
    A = n(183555),
    _ = n(950191),
    m = n(657331),
    g = n(718019),
    p = n(31432),
    f = n(915614),
    x = n(389996),
    E = n(743987),
    I = n(900179),
    C = n(946356),
    N = n(810396),
    T = n(35241),
    S = n(587168),
    b = n(747524),
    y = n(996988),
    v = n(985018),
    j = n(374146),
    R = n(733866);
function O(e) {
    let { user: t, channel: n } = e,
        O = __OVERLAY__ || !(0, c.A)(t.id),
        L = (0, _.Ay)(t.id),
        M = (0, a.Ay)(),
        { analyticsLocations: D } = (0, o.Ay)(r.A.USER_PROFILE_SIDEBAR),
        U = (0, A.pb)({ layout: "SIDEBAR", userId: t.id, channelId: n.id }),
        G = l.useRef(null),
        { isHoveringOrFocusing: P, isHovering: k } = (0, u.A)(G),
        w = () => {
            (0, m.openUserProfileModal)({ sourceAnalyticsLocations: D, hideRestrictedProfile: !0, ...U });
        };
    return (0, i.jsx)(o.f5, {
        value: D,
        children: (0, i.jsx)(A.of, {
            value: U,
            isLoaded: L?.isLoaded,
            children: (0, i.jsxs)(C.A, {
                ref: G,
                user: t,
                displayProfile: L,
                themeType: y.d.SIDEBAR,
                themeOverride: M,
                children: [
                    (0, i.jsxs)(s.d_W, {
                        children: [
                            (0, i.jsx)(S.A, { children: (0, i.jsx)(T.A, { user: t }) }),
                            (0, i.jsxs)("div", {
                                className: j.wx,
                                children: [
                                    (0, i.jsx)(f.A, {
                                        user: t,
                                        displayProfile: L,
                                        themeType: y.d.SIDEBAR,
                                        animateOnHoverOrFocusOnly: !P,
                                    }),
                                    (0, i.jsx)(g.A, {
                                        user: t,
                                        displayProfile: L,
                                        channelId: n.id,
                                        themeType: y.d.SIDEBAR,
                                        onOpenProfile: O ? void 0 : w,
                                    }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: R.rf,
                                children: [
                                    (0, i.jsx)(N.A, {
                                        user: t,
                                        guildId: n.guild_id,
                                        nickname: h.Ay.getName(null, n.id, t),
                                        pronouns: L?.pronouns,
                                        onOpenProfile: O ? void 0 : w,
                                        tags: (0, i.jsx)(p.A, { displayProfile: L, themeType: y.d.SIDEBAR }),
                                    }),
                                    (0, i.jsxs)(C.A.Overlay, {
                                        className: R.Lw,
                                        children: [
                                            (0, i.jsx)(I.A, {
                                                heading: v.intl.string(v.t.ZzAR2Y),
                                                headingColor: "text-strong",
                                                children: (0, i.jsx)(x.A, {
                                                    userBio: L?.bio,
                                                    userId: t.id,
                                                    animateOnHoverOrFocusOnly: !0,
                                                    isHoveringOrFocusing: P,
                                                }),
                                            }),
                                            (0, i.jsx)(I.A, {
                                                heading: v.intl.string(v.t["A//N4k"]),
                                                headingColor: "text-strong",
                                                children: (0, i.jsx)(E.A, { userId: t.id }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    !O && (0, i.jsx)(b.A, { handleOpenProfile: w, analyticsLocations: D, context: U }),
                    L?.profileEffect != null && (0, i.jsx)(d.A, { skuId: L?.profileEffect?.skuId, isHovering: k }),
                ],
            }),
        }),
    });
}
