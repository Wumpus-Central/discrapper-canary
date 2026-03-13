"use strict";
n.d(t, { A: () => L });
var i = n(627968),
    s = n(64700),
    l = n(158954),
    r = n(397927),
    a = n(736653),
    o = n(793574),
    c = n(688810),
    d = n(311016),
    u = n(713517),
    h = n(182592),
    A = n(562153),
    m = n(183555),
    p = n(672385),
    g = n(950191),
    _ = n(657331),
    f = n(718019),
    x = n(31432),
    C = n(915614),
    E = n(389996),
    I = n(743987),
    N = n(900179),
    b = n(946356),
    S = n(810396),
    T = n(35241),
    v = n(587168),
    y = n(996988),
    j = n(985018),
    R = n(750623),
    O = n(627699);
function L(e) {
    let { user: t, channel: n } = e,
        L = __OVERLAY__ || !(0, d.A)(t.id),
        M = (0, g.Ay)(t.id),
        D = (0, a.Ay)(),
        { analyticsLocations: G } = (0, c.Ay)(o.A.USER_PROFILE_SIDEBAR),
        U = (0, m.pb)({ layout: "SIDEBAR", userId: t.id, channelId: n.id }),
        P = s.useRef(null),
        { isHoveringOrFocusing: w, isHovering: k } = (0, u.A)(P),
        V = () => {
            (0, _.openUserProfileModal)({ sourceAnalyticsLocations: G, hideRestrictedProfile: !0, ...U });
        };
    return (0, i.jsx)(c.f5, {
        value: G,
        children: (0, i.jsx)(m.of, {
            value: U,
            isLoaded: M?.isLoaded,
            children: (0, i.jsxs)(b.A, {
                ref: P,
                user: t,
                displayProfile: M,
                themeType: y.d.SIDEBAR,
                themeOverride: D,
                children: [
                    (0, i.jsxs)(l.d_W, {
                        children: [
                            (0, i.jsx)(v.A, { children: (0, i.jsx)(T.A, { user: t }) }),
                            (0, i.jsxs)("div", {
                                className: R.wx,
                                children: [
                                    (0, i.jsx)(C.A, {
                                        user: t,
                                        displayProfile: M,
                                        themeType: y.d.SIDEBAR,
                                        animateOnHoverOrFocusOnly: !w,
                                    }),
                                    (0, i.jsx)(f.A, {
                                        user: t,
                                        displayProfile: M,
                                        channelId: n.id,
                                        themeType: y.d.SIDEBAR,
                                        onOpenProfile: L ? void 0 : V,
                                    }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: O.rf,
                                children: [
                                    (0, i.jsx)(S.A, {
                                        user: t,
                                        guildId: n.guild_id,
                                        nickname: A.Ay.getName(null, n.id, t),
                                        pronouns: M?.pronouns,
                                        onOpenProfile: L ? void 0 : V,
                                        tags: (0, i.jsx)(x.A, { displayProfile: M, themeType: y.d.SIDEBAR }),
                                    }),
                                    (0, i.jsxs)(b.A.Overlay, {
                                        className: O.Lw,
                                        children: [
                                            (0, i.jsx)(N.A, {
                                                heading: j.intl.string(j.t.ZzAR2Y),
                                                headingColor: "text-strong",
                                                children: (0, i.jsx)(E.A, {
                                                    userBio: M?.bio,
                                                    userId: t.id,
                                                    animateOnHoverOrFocusOnly: !0,
                                                    isHoveringOrFocusing: w,
                                                }),
                                            }),
                                            (0, i.jsx)(N.A, {
                                                heading: j.intl.string(j.t["A//N4k"]),
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
                            children: (0, i.jsx)(r.DUT, {
                                onClick: () => {
                                    V(), (0, p.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: G, ...U });
                                },
                                className: R.wC,
                                children: j.intl.string(j.t["+Xp3hq"]),
                            }),
                        }),
                    M?.profileEffect != null && (0, i.jsx)(h.A, { skuId: M?.profileEffect?.skuId, isHovering: k }),
                ],
            }),
        }),
    });
}
