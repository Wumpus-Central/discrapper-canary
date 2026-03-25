"use strict";
n.d(t, { A: () => O });
var i = n(627968),
    s = n(64700),
    l = n(158954),
    r = n(736653),
    a = n(793574),
    o = n(688810),
    c = n(311016),
    d = n(713517),
    u = n(182592),
    h = n(562153),
    A = n(183555),
    m = n(950191),
    p = n(657331),
    _ = n(718019),
    g = n(31432),
    f = n(915614),
    x = n(389996),
    C = n(743987),
    E = n(900179),
    I = n(946356),
    N = n(810396),
    b = n(35241),
    S = n(587168),
    T = n(747524),
    v = n(996988),
    y = n(985018),
    j = n(743789),
    R = n(673721);
function O(e) {
    let { user: t, channel: n } = e,
        O = __OVERLAY__ || !(0, c.A)(t.id),
        L = (0, m.Ay)(t.id),
        M = (0, r.Ay)(),
        { analyticsLocations: D } = (0, o.Ay)(a.A.USER_PROFILE_SIDEBAR),
        G = (0, A.pb)({ layout: "SIDEBAR", userId: t.id, channelId: n.id }),
        U = s.useRef(null),
        { isHoveringOrFocusing: P, isHovering: k } = (0, d.A)(U),
        w = () => {
            (0, p.openUserProfileModal)({ sourceAnalyticsLocations: D, hideRestrictedProfile: !0, ...G });
        };
    return (0, i.jsx)(o.f5, {
        value: D,
        children: (0, i.jsx)(A.of, {
            value: G,
            isLoaded: L?.isLoaded,
            children: (0, i.jsxs)(I.A, {
                ref: U,
                user: t,
                displayProfile: L,
                themeType: v.d.SIDEBAR,
                themeOverride: M,
                children: [
                    (0, i.jsxs)(l.d_W, {
                        children: [
                            (0, i.jsx)(S.A, { children: (0, i.jsx)(b.A, { user: t }) }),
                            (0, i.jsxs)("div", {
                                className: j.wx,
                                children: [
                                    (0, i.jsx)(f.A, {
                                        user: t,
                                        displayProfile: L,
                                        themeType: v.d.SIDEBAR,
                                        animateOnHoverOrFocusOnly: !P,
                                    }),
                                    (0, i.jsx)(_.A, {
                                        user: t,
                                        displayProfile: L,
                                        channelId: n.id,
                                        themeType: v.d.SIDEBAR,
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
                                        tags: (0, i.jsx)(g.A, { displayProfile: L, themeType: v.d.SIDEBAR }),
                                    }),
                                    (0, i.jsxs)(I.A.Overlay, {
                                        className: R.Lw,
                                        children: [
                                            (0, i.jsx)(E.A, {
                                                heading: y.intl.string(y.t.ZzAR2Y),
                                                headingColor: "text-strong",
                                                children: (0, i.jsx)(x.A, {
                                                    userBio: L?.bio,
                                                    userId: t.id,
                                                    animateOnHoverOrFocusOnly: !0,
                                                    isHoveringOrFocusing: P,
                                                }),
                                            }),
                                            (0, i.jsx)(E.A, {
                                                heading: y.intl.string(y.t["A//N4k"]),
                                                headingColor: "text-strong",
                                                children: (0, i.jsx)(C.A, { userId: t.id }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    !O && (0, i.jsx)(T.A, { handleOpenProfile: w, analyticsLocations: D, context: G }),
                    L?.profileEffect != null && (0, i.jsx)(u.A, { skuId: L?.profileEffect?.skuId, isHovering: k }),
                ],
            }),
        }),
    });
}
