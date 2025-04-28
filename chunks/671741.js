n.d(t, { Z: () => R });
var r = n(200651),
    i = n(192379),
    l = n(272573),
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
    b = n(510659),
    _ = n(892001),
    y = n(113557),
    x = n(867176),
    C = n(451834),
    v = n(502762),
    j = n(952124),
    O = n(544989),
    E = n(481932),
    I = n(272510),
    P = n(4517),
    S = n(854935),
    Z = n(397110),
    N = n(228168),
    T = n(388032),
    A = n(149385);
function w(e) {
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
function R(e) {
    let { user: t, currentUser: n, channel: R } = e,
        k = __OVERLAY__,
        M = (0, g.ZP)(t.id),
        L = (0, c.ZP)(),
        D = i.useRef(Date.now()),
        { analyticsLocations: U } = (0, d.ZP)(u.Z.USER_PROFILE_SIDEBAR),
        B = (0, f.ZB)({
            layout: 'SIDEBAR',
            userId: t.id,
            channelId: R.id
        }),
        G = i.useRef(null),
        F = (0, s.Z)(G),
        H = (0, b.$m)(),
        V = (0, a.q_F)({
            opacity: +(null != H.interactionType),
            config: { duration: 150 }
        }),
        z = (e) => {
            (0, _.openUserProfileModal)(
                w(
                    {
                        sourceAnalyticsLocations: U,
                        hideRestrictedProfile: !0
                    },
                    B,
                    e
                )
            );
        };
    return (0, r.jsx)(d.Gt, {
        value: U,
        children: (0, r.jsx)(f.Mt, {
            value: B,
            openedAt: D.current,
            fetchStartedAt: null == M ? void 0 : M.fetchStartedAt,
            fetchEndedAt: null == M ? void 0 : M.fetchEndedAt,
            isLoaded: null == M ? void 0 : M.isLoaded,
            children: (0, r.jsx)(b.NJ, {
                value: H,
                children: (0, r.jsxs)(v.Z, {
                    ref: G,
                    user: t,
                    displayProfile: M,
                    themeType: N.lY.SIDEBAR,
                    themeOverride: L,
                    children: [
                        null != H.interactionType &&
                            (0, r.jsx)(l.animated.div, {
                                style: V,
                                className: A.backdrop
                            }),
                        (0, r.jsxs)(o.u2, {
                            children: [
                                (0, r.jsxs)(O.Z, {
                                    children: [
                                        (0, r.jsx)(E.Z, {
                                            user: t,
                                            themeType: N.lY.SIDEBAR,
                                            shouldShowTooltip: null === H.interactionType
                                        }),
                                        t.bot ? (0, r.jsx)(j.Z, { user: t }) : (0, r.jsx)(I.Z, { user: t })
                                    ]
                                }),
                                (0, r.jsxs)('header', {
                                    className: A.header,
                                    children: [
                                        (0, r.jsx)(x.Z, {
                                            user: t,
                                            displayProfile: M,
                                            themeType: N.lY.SIDEBAR,
                                            animateOnHover: !F,
                                            className: A.banner
                                        }),
                                        (0, r.jsx)(C.Z, {
                                            userId: t.id,
                                            className: A.toast
                                        }),
                                        (0, r.jsx)(y.Z, {
                                            location: 'UserProfileSiebar',
                                            user: t,
                                            displayProfile: M,
                                            channelId: R.id,
                                            themeType: N.lY.SIDEBAR,
                                            onOpenProfile: k ? void 0 : z
                                        }),
                                        (0, r.jsx)(P.Z, {
                                            location: 'UserProfileSiebar',
                                            user: t,
                                            channelId: R.id,
                                            themeType: N.lY.SIDEBAR
                                        }),
                                        t.isClyde() && (0, r.jsx)(p.Z, { className: A.headerTag })
                                    ]
                                }),
                                (0, r.jsx)(S.Z, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: M,
                                    channel: R,
                                    isHovering: null == H.interactionType && F,
                                    onOpenProfile: k ? void 0 : z
                                }),
                                (0, r.jsx)(Z.Z, { user: t })
                            ]
                        }),
                        !k &&
                            (0, r.jsx)('footer', {
                                className: A.footer,
                                children: (0, r.jsx)(a.zxk, {
                                    fullWidth: !0,
                                    size: a.zxk.Sizes.LARGE,
                                    look: a.zxk.Looks.BLANK,
                                    color: A.footerButtonColor,
                                    onClick: () => {
                                        z(),
                                            (0, m.pQ)(
                                                w(
                                                    {
                                                        action: 'PRESS_VIEW_PROFILE',
                                                        analyticsLocations: U
                                                    },
                                                    B
                                                )
                                            );
                                    },
                                    children: T.intl.string(T.t['+Xp3ho'])
                                })
                            }),
                        (null == M ? void 0 : M.profileEffectId) != null &&
                            (0, r.jsx)(h.Z, {
                                profileEffectId: null == M ? void 0 : M.profileEffectId,
                                isHovering: F
                            })
                    ]
                })
            })
        })
    });
}
