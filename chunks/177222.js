n.d(t, { Z: () => M });
var r = n(200651),
    i = n(192379),
    l = n(642128),
    o = n(597312),
    a = n(481060),
    s = n(727637),
    c = n(410030),
    u = n(100527),
    d = n(906732),
    p = n(688465),
    h = n(680295),
    f = n(785717),
    m = n(221292),
    g = n(687158),
    b = n(326094),
    _ = n(510659),
    C = n(113557),
    v = n(867176),
    y = n(451834),
    x = n(502762),
    j = n(952124),
    O = n(544989),
    N = n(481932),
    E = n(272510),
    P = n(4517),
    I = n(171368),
    S = n(348540),
    Z = n(179142),
    T = n(228168),
    A = n(981631),
    w = n(388032),
    R = n(666820);
function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function M(e) {
    let { user: t, currentUser: n, channel: M } = e,
        L = __OVERLAY__,
        D = (0, g.ZP)(t.id),
        W = (0, c.ZP)(),
        U = (0, b.Z)({
            user: t,
            currentUser: n,
            location: A.Sbl.PROFILE_PANEL
        }),
        B = (0, f.ZB)({
            layout: U ? 'SIMPLIFIED_DM_PANEL' : 'SIMPLIFIED_DM_PANEL_RESTRICTED_BLOCKER_PROFILE',
            userId: t.id,
            channelId: M.id
        }),
        { analyticsLocations: F } = (0, d.ZP)(u.Z.PROFILE_PANEL),
        H = i.useRef(null),
        G = (0, s.Z)(H),
        V = (0, _.$m)(),
        z = (0, a.q_F)({
            opacity: +(null != V.interactionType),
            config: { duration: 150 }
        }),
        q = (e) => {
            (0, I.openUserProfileModal)(k({ sourceAnalyticsLocations: F }, B, e));
        };
    return (0, r.jsx)(d.Gt, {
        value: F,
        children: (0, r.jsx)(f.Mt, {
            value: B,
            children: (0, r.jsx)(_.NJ, {
                value: V,
                children: (0, r.jsxs)(x.Z, {
                    ref: H,
                    user: t,
                    displayProfile: D,
                    profileType: T.y0.PANEL,
                    themeOverride: W,
                    children: [
                        null != V.interactionType &&
                            (0, r.jsx)(l.animated.div, {
                                style: z,
                                className: R.backdrop
                            }),
                        (0, r.jsxs)(o.u2, {
                            children: [
                                (0, r.jsxs)(O.Z, {
                                    profileType: T.y0.PANEL,
                                    children: [
                                        (0, r.jsx)(N.Z, {
                                            user: t,
                                            profileType: T.y0.PANEL,
                                            shouldShowTooltip: null === V.interactionType
                                        }),
                                        t.bot ? (0, r.jsx)(j.Z, { user: t }) : (0, r.jsx)(E.Z, { user: t })
                                    ]
                                }),
                                (0, r.jsxs)('header', {
                                    className: R.header,
                                    children: [
                                        (0, r.jsx)(v.Z, {
                                            user: t,
                                            displayProfile: D,
                                            profileType: T.y0.PANEL,
                                            animateOnHover: !G,
                                            className: R.banner
                                        }),
                                        (0, r.jsx)(y.Z, {
                                            userId: t.id,
                                            className: R.toast
                                        }),
                                        (0, r.jsx)(C.Z, {
                                            location: 'UserProfilePanel',
                                            user: t,
                                            displayProfile: D,
                                            channelId: M.id,
                                            profileType: T.y0.PANEL,
                                            onOpenProfile: L ? void 0 : q
                                        }),
                                        (0, r.jsx)(P.Z, {
                                            location: 'UserProfilePanel',
                                            user: t,
                                            channelId: M.id,
                                            profileType: T.y0.PANEL
                                        }),
                                        t.isClyde() && (0, r.jsx)(p.Z, { className: R.headerTag })
                                    ]
                                }),
                                (0, r.jsx)(S.Z, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: D,
                                    channel: M,
                                    isHovering: null == V.interactionType && G,
                                    onOpenProfile: L ? void 0 : q
                                }),
                                (0, r.jsx)(Z.Z, { user: t })
                            ]
                        }),
                        !L &&
                            (0, r.jsx)('footer', {
                                className: R.footer,
                                children: (0, r.jsx)(a.zxk, {
                                    fullWidth: !0,
                                    size: a.zxk.Sizes.LARGE,
                                    look: a.zxk.Looks.BLANK,
                                    color: R.footerButtonColor,
                                    onClick: () => {
                                        q(),
                                            (0, m.pQ)(
                                                k(
                                                    {
                                                        action: 'PRESS_VIEW_PROFILE',
                                                        analyticsLocations: F
                                                    },
                                                    B
                                                )
                                            );
                                    },
                                    children: w.NW.string(w.t['+Xp3ho'])
                                })
                            }),
                        (null == D ? void 0 : D.profileEffectId) != null &&
                            (0, r.jsx)(h.Z, {
                                profileEffectId: null == D ? void 0 : D.profileEffectId,
                                isHovering: G
                            })
                    ]
                })
            })
        })
    });
}
