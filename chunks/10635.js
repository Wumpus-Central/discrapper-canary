n.d(t, { A: () => L });
var i = n(627968),
    l = n(64700),
    s = n(573613),
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
    g = n(718019),
    p = n(31432),
    f = n(915614),
    E = n(389996),
    x = n(743987),
    I = n(900179),
    C = n(946356),
    b = n(810396),
    N = n(35241),
    S = n(587168),
    v = n(747524),
    T = n(996988),
    y = n(985018),
    R = n(556818),
    j = n(523802);
function L(e) {
    let { user: t, channel: n } = e,
        L = __OVERLAY__ || !(0, d.A)(t.id),
        O = (0, _.Ay)(t.id),
        G = (0, a.Ay)(),
        D = l.useRef(Date.now()),
        { analyticsLocations: M } = (0, o.Ay)(r.A.USER_PROFILE_SIDEBAR),
        U = (0, A.pb)({ layout: "SIDEBAR", userId: t.id, channelId: n.id }),
        P = l.useRef(null),
        { isHoveringOrFocusing: w, isHovering: k } = (0, u.A)(P),
        V = () => {
            (0, m.openUserProfileModal)({ sourceAnalyticsLocations: M, hideRestrictedProfile: !0, ...U });
        };
    return (0, i.jsx)(o.f5, {
        value: M,
        children: (0, i.jsx)(A.of, {
            value: U,
            openedAt: D.current,
            fetchStartedAt: O?.fetchStartedAt,
            fetchEndedAt: O?.fetchEndedAt,
            isLoaded: O?.isLoaded,
            children: (0, i.jsxs)(C.A, {
                ref: P,
                user: t,
                displayProfile: O,
                themeType: T.d.SIDEBAR,
                themeOverride: G,
                children: [
                    (0, i.jsxs)(s.d_, {
                        children: [
                            (0, i.jsx)(S.A, { children: (0, i.jsx)(N.A, { user: t }) }),
                            (0, i.jsxs)("div", {
                                className: R.wx,
                                children: [
                                    (0, i.jsx)(f.A, {
                                        user: t,
                                        displayProfile: O,
                                        themeType: T.d.SIDEBAR,
                                        animateOnHoverOrFocusOnly: !w,
                                    }),
                                    (0, i.jsx)(g.A, {
                                        user: t,
                                        displayProfile: O,
                                        channelId: n.id,
                                        themeType: T.d.SIDEBAR,
                                        onOpenProfile: L ? void 0 : V,
                                    }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: j.rf,
                                children: [
                                    (0, i.jsx)(b.A, {
                                        user: t,
                                        guildId: n.guild_id,
                                        nickname: h.Ay.getName(null, n.id, t),
                                        pronouns: O?.pronouns,
                                        onOpenProfile: L ? void 0 : V,
                                        tags: (0, i.jsx)(p.A, { displayProfile: O, themeType: T.d.SIDEBAR }),
                                    }),
                                    (0, i.jsxs)(C.A.Overlay, {
                                        className: j.Lw,
                                        children: [
                                            (0, i.jsx)(I.A, {
                                                heading: y.intl.string(y.t.ZzAR2Y),
                                                headingColor: "text-strong",
                                                children: (0, i.jsx)(E.A, {
                                                    userBio: O?.bio,
                                                    userId: t.id,
                                                    animateOnHoverOrFocusOnly: !0,
                                                    isHoveringOrFocusing: w,
                                                }),
                                            }),
                                            (0, i.jsx)(I.A, {
                                                heading: y.intl.string(y.t["A//N4k"]),
                                                headingColor: "text-strong",
                                                children: (0, i.jsx)(x.A, { userId: t.id }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    !L && (0, i.jsx)(v.A, { handleOpenProfile: V, analyticsLocations: M, context: U }),
                    O?.profileEffect != null && (0, i.jsx)(c.A, { skuId: O?.profileEffect?.skuId, isHovering: k }),
                ],
            }),
        }),
    });
}
