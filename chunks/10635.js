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
    p = n(183555),
    g = n(672385),
    m = n(950191),
    _ = n(657331),
    f = n(718019),
    x = n(31432),
    C = n(915614),
    E = n(389996),
    I = n(743987),
    b = n(900179),
    N = n(946356),
    S = n(810396),
    T = n(35241),
    v = n(587168),
    y = n(996988),
    j = n(985018),
    R = n(743789),
    O = n(673721);
function L(e) {
    let { user: t, channel: n } = e,
        L = __OVERLAY__ || !(0, d.A)(t.id),
        M = (0, m.Ay)(t.id),
        D = (0, a.Ay)(),
        G = s.useRef(Date.now()),
        { analyticsLocations: U } = (0, c.Ay)(o.A.USER_PROFILE_SIDEBAR),
        P = (0, p.pb)({ layout: "SIDEBAR", userId: t.id, channelId: n.id }),
        w = s.useRef(null),
        { isHoveringOrFocusing: k, isHovering: V } = (0, u.A)(w),
        B = () => {
            (0, _.openUserProfileModal)({ sourceAnalyticsLocations: U, hideRestrictedProfile: !0, ...P });
        };
    return (0, i.jsx)(c.f5, {
        value: U,
        children: (0, i.jsx)(p.of, {
            value: P,
            openedAt: G.current,
            fetchStartedAt: M?.fetchStartedAt,
            fetchEndedAt: M?.fetchEndedAt,
            isLoaded: M?.isLoaded,
            children: (0, i.jsxs)(N.A, {
                ref: w,
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
                                        animateOnHoverOrFocusOnly: !k,
                                    }),
                                    (0, i.jsx)(f.A, {
                                        user: t,
                                        displayProfile: M,
                                        channelId: n.id,
                                        themeType: y.d.SIDEBAR,
                                        onOpenProfile: L ? void 0 : B,
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
                                        onOpenProfile: L ? void 0 : B,
                                        tags: (0, i.jsx)(x.A, { displayProfile: M, themeType: y.d.SIDEBAR }),
                                    }),
                                    (0, i.jsxs)(N.A.Overlay, {
                                        className: O.Lw,
                                        children: [
                                            (0, i.jsx)(b.A, {
                                                heading: j.intl.string(j.t.ZzAR2Y),
                                                headingColor: "text-strong",
                                                children: (0, i.jsx)(E.A, {
                                                    userBio: M?.bio,
                                                    userId: t.id,
                                                    animateOnHoverOrFocusOnly: !0,
                                                    isHoveringOrFocusing: k,
                                                }),
                                            }),
                                            (0, i.jsx)(b.A, {
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
                                    B(), (0, g.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: U, ...P });
                                },
                                className: R.wC,
                                children: j.intl.string(j.t["+Xp3hq"]),
                            }),
                        }),
                    M?.profileEffect != null && (0, i.jsx)(h.A, { skuId: M?.profileEffect?.skuId, isHovering: V }),
                ],
            }),
        }),
    });
}
