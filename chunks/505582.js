n.d(t, { Z: () => R });
var r = n(200651),
    i = n(192379),
    l = n(597312),
    o = n(481060),
    a = n(727637),
    s = n(410030),
    c = n(100527),
    u = n(906732),
    d = n(580552),
    p = n(688465),
    h = n(680295),
    f = n(5192),
    m = n(785717),
    g = n(221292),
    b = n(687158),
    _ = n(892001),
    y = n(899007),
    x = n(648052),
    C = n(867176),
    v = n(280885),
    j = n(900927),
    O = n(678738),
    E = n(502762),
    I = n(530),
    P = n(679332),
    S = n(544989),
    Z = n(228168),
    N = n(388032),
    T = n(149385),
    A = n(420890);
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
    let { user: t, channel: n } = e,
        R = __OVERLAY__ || !(0, d.Z)(t.id),
        k = (0, b.ZP)(t.id),
        M = (0, s.ZP)(),
        L = i.useRef(Date.now()),
        { analyticsLocations: D } = (0, u.ZP)(c.Z.USER_PROFILE_SIDEBAR),
        U = (0, m.ZB)({
            layout: 'SIDEBAR',
            userId: t.id,
            channelId: n.id
        }),
        B = i.useRef(null),
        G = (0, a.Z)(B),
        F = (e) => {
            (0, _.openUserProfileModal)(
                w(
                    {
                        sourceAnalyticsLocations: D,
                        hideRestrictedProfile: !0
                    },
                    U,
                    e
                )
            );
        };
    return (0, r.jsx)(u.Gt, {
        value: D,
        children: (0, r.jsx)(m.Mt, {
            value: U,
            openedAt: L.current,
            fetchStartedAt: null == k ? void 0 : k.fetchStartedAt,
            fetchEndedAt: null == k ? void 0 : k.fetchEndedAt,
            isLoaded: null == k ? void 0 : k.isLoaded,
            children: (0, r.jsxs)(E.Z, {
                ref: B,
                user: t,
                displayProfile: k,
                themeType: Z.lY.SIDEBAR,
                themeOverride: M,
                children: [
                    (0, r.jsxs)(l.u2, {
                        children: [
                            (0, r.jsx)(S.Z, { children: (0, r.jsx)(P.Z, { user: t }) }),
                            (0, r.jsxs)('header', {
                                className: T.header,
                                children: [
                                    (0, r.jsx)(C.Z, {
                                        user: t,
                                        displayProfile: k,
                                        themeType: Z.lY.SIDEBAR,
                                        animateOnHover: !G
                                    }),
                                    (0, r.jsx)(y.Z, {
                                        user: t,
                                        displayProfile: k,
                                        channelId: n.id,
                                        themeType: Z.lY.SIDEBAR,
                                        onOpenProfile: R ? void 0 : F
                                    }),
                                    t.isClyde() && (0, r.jsx)(p.Z, { className: T.headerTag })
                                ]
                            }),
                            (0, r.jsxs)('div', {
                                className: A.body,
                                children: [
                                    (0, r.jsx)(I.Z, {
                                        user: t,
                                        nickname: f.ZP.getName(null, n.id, t),
                                        pronouns: null == k ? void 0 : k.pronouns,
                                        onOpenProfile: R ? void 0 : F,
                                        tags: (0, r.jsx)(x.Z, {
                                            displayProfile: k,
                                            themeType: Z.lY.SIDEBAR
                                        })
                                    }),
                                    (0, r.jsxs)(E.Z.Overlay, {
                                        className: A.overlay,
                                        children: [
                                            (0, r.jsx)(O.Z, {
                                                heading: N.intl.string(N.t['61W33d']),
                                                headingColor: 'header-primary',
                                                children: (0, r.jsx)(v.Z, {
                                                    userBio: null == k ? void 0 : k.bio,
                                                    userId: t.id,
                                                    animateOnHover: !0,
                                                    isHovering: G
                                                })
                                            }),
                                            (0, r.jsx)(O.Z, {
                                                heading: N.intl.string(N.t['A//N4u']),
                                                headingColor: 'header-primary',
                                                children: (0, r.jsx)(j.Z, { userId: t.id })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    !R &&
                        (0, r.jsx)('footer', {
                            className: T.footer,
                            children: (0, r.jsx)(o.zxk, {
                                fullWidth: !0,
                                size: o.zxk.Sizes.LARGE,
                                look: o.zxk.Looks.BLANK,
                                color: T.footerButtonColor,
                                onClick: () => {
                                    F(),
                                        (0, g.pQ)(
                                            w(
                                                {
                                                    action: 'PRESS_VIEW_PROFILE',
                                                    analyticsLocations: D
                                                },
                                                U
                                            )
                                        );
                                },
                                children: N.intl.string(N.t['+Xp3ho'])
                            })
                        }),
                    (null == k ? void 0 : k.profileEffectId) != null &&
                        (0, r.jsx)(h.Z, {
                            profileEffectId: null == k ? void 0 : k.profileEffectId,
                            isHovering: G
                        })
                ]
            })
        })
    });
}
