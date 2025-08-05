n.d(t, { Z: () => R });
var r = n(255367),
    i = n(73800),
    l = n(597312),
    a = n(755721),
    s = n(727637),
    o = n(410030),
    c = n(100527),
    d = n(906732),
    u = n(580552),
    h = n(680295),
    p = n(5192),
    f = n(785717),
    g = n(221292),
    m = n(687158),
    b = n(892001),
    _ = n(899007),
    y = n(648052),
    j = n(867176),
    O = n(280885),
    x = n(900927),
    v = n(678738),
    C = n(502762),
    E = n(530),
    Z = n(679332),
    I = n(544989),
    S = n(228168),
    P = n(388032),
    T = n(638414),
    N = n(283189);
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function R(e) {
    let { user: t, channel: n } = e,
        R = __OVERLAY__ || !(0, u.Z)(t.id),
        A = (0, m.ZP)(t.id),
        D = (0, o.ZP)(),
        L = i.useRef(Date.now()),
        { analyticsLocations: M } = (0, d.ZP)(c.Z.USER_PROFILE_SIDEBAR),
        k = (0, f.ZB)({
            layout: 'SIDEBAR',
            userId: t.id,
            channelId: n.id
        }),
        U = i.useRef(null),
        G = (0, s.Z)(U),
        F = (e) => {
            (0, b.openUserProfileModal)(
                w(
                    {
                        sourceAnalyticsLocations: M,
                        hideRestrictedProfile: !0
                    },
                    k,
                    e
                )
            );
        };
    return (0, r.jsx)(d.Gt, {
        value: M,
        children: (0, r.jsx)(f.Mt, {
            value: k,
            openedAt: L.current,
            fetchStartedAt: null == A ? void 0 : A.fetchStartedAt,
            fetchEndedAt: null == A ? void 0 : A.fetchEndedAt,
            isLoaded: null == A ? void 0 : A.isLoaded,
            children: (0, r.jsxs)(C.Z, {
                ref: U,
                user: t,
                displayProfile: A,
                themeType: S.lY.SIDEBAR,
                themeOverride: D,
                children: [
                    (0, r.jsxs)(l.u2, {
                        children: [
                            (0, r.jsx)(I.Z, { children: (0, r.jsx)(Z.Z, { user: t }) }),
                            (0, r.jsxs)('div', {
                                className: T.header,
                                children: [
                                    (0, r.jsx)(j.Z, {
                                        user: t,
                                        displayProfile: A,
                                        themeType: S.lY.SIDEBAR,
                                        animateOnHover: !G
                                    }),
                                    (0, r.jsx)(_.Z, {
                                        user: t,
                                        displayProfile: A,
                                        channelId: n.id,
                                        themeType: S.lY.SIDEBAR,
                                        onOpenProfile: R ? void 0 : F
                                    })
                                ]
                            }),
                            (0, r.jsxs)('div', {
                                className: N.body,
                                children: [
                                    (0, r.jsx)(E.Z, {
                                        user: t,
                                        nickname: p.ZP.getName(null, n.id, t),
                                        pronouns: null == A ? void 0 : A.pronouns,
                                        onOpenProfile: R ? void 0 : F,
                                        tags: (0, r.jsx)(y.Z, {
                                            displayProfile: A,
                                            themeType: S.lY.SIDEBAR
                                        })
                                    }),
                                    (0, r.jsxs)(C.Z.Overlay, {
                                        className: N.overlay,
                                        children: [
                                            (0, r.jsx)(v.Z, {
                                                heading: P.intl.string(P.t['61W33d']),
                                                headingColor: 'header-primary',
                                                children: (0, r.jsx)(O.Z, {
                                                    userBio: null == A ? void 0 : A.bio,
                                                    userId: t.id,
                                                    animateOnHover: !0,
                                                    isHovering: G
                                                })
                                            }),
                                            (0, r.jsx)(v.Z, {
                                                heading: P.intl.string(P.t['A//N4u']),
                                                headingColor: 'header-primary',
                                                children: (0, r.jsx)(x.Z, { userId: t.id })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    !R &&
                        (0, r.jsx)('div', {
                            className: T.footer,
                            children: (0, r.jsx)(a.zx, {
                                fullWidth: !0,
                                size: a.zx.Sizes.LARGE,
                                look: a.zx.Looks.BLANK,
                                color: T.footerButtonColor,
                                onClick: () => {
                                    (F(),
                                        (0, g.pQ)(
                                            w(
                                                {
                                                    action: 'PRESS_VIEW_PROFILE',
                                                    analyticsLocations: M
                                                },
                                                k
                                            )
                                        ));
                                },
                                children: P.intl.string(P.t['+Xp3ho'])
                            })
                        }),
                    (null == A ? void 0 : A.profileEffectId) != null &&
                        (0, r.jsx)(h.Z, {
                            profileEffectId: null == A ? void 0 : A.profileEffectId,
                            isHovering: G
                        })
                ]
            })
        })
    });
}
