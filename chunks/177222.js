n.d(t, { Z: () => k });
var i = n(200651),
    l = n(192379),
    a = n(642128),
    r = n(597312),
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
    _ = n(326094),
    C = n(510659),
    x = n(113557),
    v = n(867176),
    E = n(451834),
    I = n(502762),
    b = n(952124),
    Z = n(544989),
    N = n(481932),
    T = n(272510),
    S = n(4517),
    j = n(171368),
    A = n(348540),
    y = n(179142),
    P = n(228168),
    R = n(981631),
    M = n(388032),
    L = n(747918);
function k(e) {
    let { user: t, currentUser: n, channel: k } = e,
        O = __OVERLAY__,
        D = (0, g.ZP)(t.id),
        w = (0, c.ZP)(),
        U = (0, _.Z)({
            user: t,
            currentUser: n,
            location: R.Sbl.PROFILE_PANEL
        }),
        B = (0, m.ZB)({
            layout: U ? 'SIMPLIFIED_DM_PANEL' : 'SIMPLIFIED_DM_PANEL_RESTRICTED_BLOCKER_PROFILE',
            userId: t.id,
            channelId: k.id
        }),
        { analyticsLocations: F } = (0, u.ZP)(d.Z.PROFILE_PANEL),
        H = l.useRef(null),
        G = (0, o.Z)(H),
        V = (0, C.$m)(),
        z = (0, s.q_F)({
            opacity: null != V.interactionType ? 1 : 0,
            config: { duration: 150 }
        }),
        W = (e) => {
            (0, j.openUserProfileModal)({
                sourceAnalyticsLocations: F,
                ...B,
                ...e
            });
        };
    return (0, i.jsx)(u.Gt, {
        value: F,
        children: (0, i.jsx)(m.Mt, {
            value: B,
            children: (0, i.jsx)(C.NJ, {
                value: V,
                children: (0, i.jsxs)(I.Z, {
                    ref: H,
                    user: t,
                    displayProfile: D,
                    profileType: P.y0.PANEL,
                    themeOverride: w,
                    children: [
                        null != V.interactionType &&
                            (0, i.jsx)(a.animated.div, {
                                style: z,
                                className: L.backdrop
                            }),
                        (0, i.jsxs)(r.u2, {
                            children: [
                                (0, i.jsxs)(Z.Z, {
                                    profileType: P.y0.PANEL,
                                    children: [
                                        (0, i.jsx)(N.Z, {
                                            user: t,
                                            profileType: P.y0.PANEL
                                        }),
                                        t.bot ? (0, i.jsx)(b.Z, { user: t }) : (0, i.jsx)(T.Z, { user: t })
                                    ]
                                }),
                                (0, i.jsxs)('header', {
                                    className: L.header,
                                    children: [
                                        (0, i.jsx)(v.Z, {
                                            user: t,
                                            displayProfile: D,
                                            profileType: P.y0.PANEL,
                                            animateOnHover: !G,
                                            className: L.banner
                                        }),
                                        (0, i.jsx)(E.Z, {
                                            userId: t.id,
                                            className: L.toast
                                        }),
                                        (0, i.jsx)(x.Z, {
                                            location: 'UserProfilePanel',
                                            user: t,
                                            displayProfile: D,
                                            channelId: k.id,
                                            profileType: P.y0.PANEL,
                                            onOpenProfile: O ? void 0 : W
                                        }),
                                        (0, i.jsx)(S.Z, {
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
                                    isHovering: null == V.interactionType && G,
                                    onOpenProfile: O ? void 0 : W
                                }),
                                (0, i.jsx)(y.Z, { user: t })
                            ]
                        }),
                        !O &&
                            (0, i.jsx)('footer', {
                                className: L.footer,
                                children: (0, i.jsx)(s.zxk, {
                                    fullWidth: !0,
                                    size: s.zxk.Sizes.LARGE,
                                    look: s.zxk.Looks.BLANK,
                                    color: L.footerButtonColor,
                                    onClick: () => {
                                        W(),
                                            (0, f.pQ)({
                                                action: 'PRESS_VIEW_PROFILE',
                                                analyticsLocations: F,
                                                ...B
                                            });
                                    },
                                    children: M.intl.string(M.t['+Xp3ho'])
                                })
                            }),
                        (null == D ? void 0 : D.profileEffectId) != null &&
                            (0, i.jsx)(p.Z, {
                                profileEffectId: null == D ? void 0 : D.profileEffectId,
                                isHovering: G
                            })
                    ]
                })
            })
        })
    });
}
