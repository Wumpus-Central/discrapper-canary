n.d(t, {
    Z: function () {
        return k;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(666912),
    a = n(597312),
    s = n(481060),
    o = n(727637),
    c = n(410030),
    d = n(100527),
    u = n(906732),
    h = n(688465),
    p = n(680295),
    m = n(785717),
    f = n(221292),
    g = n(687158),
    C = n(326094),
    x = n(510659),
    v = n(113557),
    _ = n(867176),
    I = n(451834),
    E = n(502762),
    b = n(952124),
    Z = n(544989),
    N = n(481932),
    S = n(272510),
    T = n(495804),
    j = n(171368),
    A = n(348540),
    y = n(179142),
    P = n(228168),
    M = n(981631),
    R = n(388032),
    L = n(747918);
function k(e) {
    let { user: t, currentUser: n, channel: k } = e,
        O = __OVERLAY__,
        D = (0, g.ZP)(t.id),
        w = (0, c.ZP)(),
        B = (0, C.Z)({
            user: t,
            currentUser: n,
            location: M.Sbl.PROFILE_PANEL
        }),
        U = (0, m.ZB)({
            layout: B ? 'SIMPLIFIED_DM_PANEL' : 'SIMPLIFIED_DM_PANEL_RESTRICTED_BLOCKER_PROFILE',
            userId: t.id,
            channelId: k.id
        }),
        { analyticsLocations: H } = (0, u.ZP)(d.Z.PROFILE_PANEL),
        G = l.useRef(null),
        F = (0, o.Z)(G),
        V = (0, x.$m)(),
        z = (0, s.useSpring)({
            opacity: null != V.interactionType ? 1 : 0,
            config: { duration: 150 }
        }),
        W = (e) => {
            (0, j.openUserProfileModal)({
                sourceAnalyticsLocations: H,
                ...U,
                ...e
            });
        };
    return (0, i.jsx)(u.Gt, {
        value: H,
        children: (0, i.jsx)(m.Mt, {
            value: U,
            children: (0, i.jsx)(x.NJ, {
                value: V,
                children: (0, i.jsxs)(E.Z, {
                    ref: G,
                    user: t,
                    displayProfile: D,
                    profileType: P.y0.PANEL,
                    themeOverride: w,
                    children: [
                        null != V.interactionType &&
                            (0, i.jsx)(r.animated.div, {
                                style: z,
                                className: L.backdrop
                            }),
                        (0, i.jsxs)(a.u2, {
                            children: [
                                (0, i.jsxs)(Z.Z, {
                                    profileType: P.y0.PANEL,
                                    children: [
                                        (0, i.jsx)(N.Z, {
                                            user: t,
                                            profileType: P.y0.PANEL
                                        }),
                                        t.bot ? (0, i.jsx)(b.Z, { user: t }) : (0, i.jsx)(S.Z, { user: t })
                                    ]
                                }),
                                (0, i.jsxs)('header', {
                                    className: L.header,
                                    children: [
                                        (0, i.jsx)(_.Z, {
                                            user: t,
                                            displayProfile: D,
                                            profileType: P.y0.PANEL,
                                            animateOnHover: !F,
                                            className: L.banner
                                        }),
                                        (0, i.jsx)(I.Z, {
                                            userId: t.id,
                                            className: L.toast
                                        }),
                                        (0, i.jsx)(v.Z, {
                                            location: 'UserProfilePanel',
                                            user: t,
                                            displayProfile: D,
                                            channelId: k.id,
                                            profileType: P.y0.PANEL,
                                            onOpenProfile: O ? void 0 : W
                                        }),
                                        (0, i.jsx)(T.Z, {
                                            location: 'UserProfilePanel',
                                            user: t,
                                            channelId: k.id,
                                            profileType: P.y0.PANEL
                                        }),
                                        t.isClyde() && (0, i.jsx)(h.Z, { className: L.headerTag })
                                    ]
                                }),
                                (0, i.jsx)(A.Z, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: D,
                                    channel: k,
                                    isHovering: null == V.interactionType && F,
                                    onOpenProfile: O ? void 0 : W
                                }),
                                (0, i.jsx)(y.Z, { user: t })
                            ]
                        }),
                        !O &&
                            (0, i.jsx)('footer', {
                                className: L.footer,
                                children: (0, i.jsx)(s.Button, {
                                    fullWidth: !0,
                                    size: s.Button.Sizes.LARGE,
                                    look: s.Button.Looks.BLANK,
                                    color: L.footerButtonColor,
                                    onClick: () => {
                                        W(),
                                            (0, f.pQ)({
                                                action: 'PRESS_VIEW_PROFILE',
                                                analyticsLocations: H,
                                                ...U
                                            });
                                    },
                                    children: R.intl.string(R.t['+Xp3ho'])
                                })
                            }),
                        (null == D ? void 0 : D.profileEffectId) != null &&
                            (0, i.jsx)(p.Z, {
                                profileEffectId: null == D ? void 0 : D.profileEffectId,
                                isHovering: F
                            })
                    ]
                })
            })
        })
    });
}
