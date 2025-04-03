n.d(t, { Z: () => R });
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
    b = n(510659),
    _ = n(113557),
    C = n(867176),
    y = n(451834),
    x = n(502762),
    v = n(952124),
    j = n(544989),
    O = n(481932),
    E = n(272510),
    N = n(4517),
    I = n(171368),
    P = n(348540),
    S = n(179142),
    Z = n(228168),
    T = n(388032),
    A = n(204340);
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
        M = __OVERLAY__,
        k = (0, g.ZP)(t.id),
        L = (0, c.ZP)(),
        D = (0, f.ZB)({
            layout: 'SIMPLIFIED_DM_PANEL',
            userId: t.id,
            channelId: R.id
        }),
        { analyticsLocations: W } = (0, d.ZP)(u.Z.PROFILE_PANEL),
        U = i.useRef(null),
        B = (0, s.Z)(U),
        H = (0, b.$m)(),
        F = (0, a.q_F)({
            opacity: +(null != H.interactionType),
            config: { duration: 150 }
        }),
        G = (e) => {
            (0, I.openUserProfileModal)(w({ sourceAnalyticsLocations: W }, D, e));
        };
    return (0, r.jsx)(d.Gt, {
        value: W,
        children: (0, r.jsx)(f.Mt, {
            value: D,
            children: (0, r.jsx)(b.NJ, {
                value: H,
                children: (0, r.jsxs)(x.Z, {
                    ref: U,
                    user: t,
                    displayProfile: k,
                    profileType: Z.y0.PANEL,
                    themeOverride: L,
                    children: [
                        null != H.interactionType &&
                            (0, r.jsx)(l.animated.div, {
                                style: F,
                                className: A.backdrop
                            }),
                        (0, r.jsxs)(o.u2, {
                            children: [
                                (0, r.jsxs)(j.Z, {
                                    profileType: Z.y0.PANEL,
                                    children: [
                                        (0, r.jsx)(O.Z, {
                                            user: t,
                                            profileType: Z.y0.PANEL,
                                            shouldShowTooltip: null === H.interactionType
                                        }),
                                        t.bot ? (0, r.jsx)(v.Z, { user: t }) : (0, r.jsx)(E.Z, { user: t })
                                    ]
                                }),
                                (0, r.jsxs)('header', {
                                    className: A.header,
                                    children: [
                                        (0, r.jsx)(C.Z, {
                                            user: t,
                                            displayProfile: k,
                                            profileType: Z.y0.PANEL,
                                            animateOnHover: !B,
                                            className: A.banner
                                        }),
                                        (0, r.jsx)(y.Z, {
                                            userId: t.id,
                                            className: A.toast
                                        }),
                                        (0, r.jsx)(_.Z, {
                                            location: 'UserProfilePanel',
                                            user: t,
                                            displayProfile: k,
                                            channelId: R.id,
                                            profileType: Z.y0.PANEL,
                                            onOpenProfile: M ? void 0 : G
                                        }),
                                        (0, r.jsx)(N.Z, {
                                            location: 'UserProfilePanel',
                                            user: t,
                                            channelId: R.id,
                                            profileType: Z.y0.PANEL
                                        }),
                                        t.isClyde() && (0, r.jsx)(p.Z, { className: A.headerTag })
                                    ]
                                }),
                                (0, r.jsx)(P.Z, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: k,
                                    channel: R,
                                    isHovering: null == H.interactionType && B,
                                    onOpenProfile: M ? void 0 : G
                                }),
                                (0, r.jsx)(S.Z, { user: t })
                            ]
                        }),
                        !M &&
                            (0, r.jsx)('footer', {
                                className: A.footer,
                                children: (0, r.jsx)(a.zxk, {
                                    fullWidth: !0,
                                    size: a.zxk.Sizes.LARGE,
                                    look: a.zxk.Looks.BLANK,
                                    color: A.footerButtonColor,
                                    onClick: () => {
                                        G(),
                                            (0, m.pQ)(
                                                w(
                                                    {
                                                        action: 'PRESS_VIEW_PROFILE',
                                                        analyticsLocations: W
                                                    },
                                                    D
                                                )
                                            );
                                    },
                                    children: T.NW.string(T.t['+Xp3ho'])
                                })
                            }),
                        (null == k ? void 0 : k.profileEffectId) != null &&
                            (0, r.jsx)(h.Z, {
                                profileEffectId: null == k ? void 0 : k.profileEffectId,
                                isHovering: B
                            })
                    ]
                })
            })
        })
    });
}
