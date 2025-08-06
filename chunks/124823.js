n.d(t, { Z: () => w });
var r = n(255367),
    i = n(73800),
    l = n(597312),
    a = n(755721),
    s = n(727637),
    o = n(410030),
    c = n(100527),
    u = n(906732),
    d = n(580552),
    h = n(680295),
    p = n(5192),
    f = n(785717),
    g = n(221292),
    m = n(687158),
    b = n(892001),
    y = n(899007),
    x = n(648052),
    j = n(867176),
    _ = n(280885),
    O = n(900927),
    v = n(678738),
    C = n(502762),
    E = n(530),
    S = n(679332),
    Z = n(544989),
    I = n(228168),
    P = n(388032),
    T = n(638414),
    N = n(283189);
function R(e) {
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
function w(e) {
    let { user: t, channel: n } = e,
        w = __OVERLAY__ || !(0, d.Z)(t.id),
        A = (0, m.ZP)(t.id),
        D = (0, o.ZP)(),
        L = i.useRef(Date.now()),
        { analyticsLocations: k } = (0, u.ZP)(c.Z.USER_PROFILE_SIDEBAR),
        M = (0, f.ZB)({
            layout: 'SIDEBAR',
            userId: t.id,
            channelId: n.id
        }),
        U = i.useRef(null),
        H = (0, s.Z)(U),
        G = (e) => {
            (0, b.openUserProfileModal)(
                R(
                    {
                        sourceAnalyticsLocations: k,
                        hideRestrictedProfile: !0
                    },
                    M,
                    e
                )
            );
        };
    return (0, r.jsx)(u.Gt, {
        value: k,
        children: (0, r.jsx)(f.Mt, {
            value: M,
            openedAt: L.current,
            fetchStartedAt: null == A ? void 0 : A.fetchStartedAt,
            fetchEndedAt: null == A ? void 0 : A.fetchEndedAt,
            isLoaded: null == A ? void 0 : A.isLoaded,
            children: (0, r.jsxs)(C.Z, {
                ref: U,
                user: t,
                displayProfile: A,
                themeType: I.lY.SIDEBAR,
                themeOverride: D,
                children: [
                    (0, r.jsxs)(l.u2, {
                        children: [
                            (0, r.jsx)(Z.Z, { children: (0, r.jsx)(S.Z, { user: t }) }),
                            (0, r.jsxs)('div', {
                                className: T.header,
                                children: [
                                    (0, r.jsx)(j.Z, {
                                        user: t,
                                        displayProfile: A,
                                        themeType: I.lY.SIDEBAR,
                                        animateOnHover: !H
                                    }),
                                    (0, r.jsx)(y.Z, {
                                        user: t,
                                        displayProfile: A,
                                        channelId: n.id,
                                        themeType: I.lY.SIDEBAR,
                                        onOpenProfile: w ? void 0 : G
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
                                        onOpenProfile: w ? void 0 : G,
                                        tags: (0, r.jsx)(x.Z, {
                                            displayProfile: A,
                                            themeType: I.lY.SIDEBAR
                                        })
                                    }),
                                    (0, r.jsxs)(C.Z.Overlay, {
                                        className: N.overlay,
                                        children: [
                                            (0, r.jsx)(v.Z, {
                                                heading: P.intl.string(P.t['61W33d']),
                                                headingColor: 'header-primary',
                                                children: (0, r.jsx)(_.Z, {
                                                    userBio: null == A ? void 0 : A.bio,
                                                    userId: t.id,
                                                    animateOnHover: !0,
                                                    isHovering: H
                                                })
                                            }),
                                            (0, r.jsx)(v.Z, {
                                                heading: P.intl.string(P.t['A//N4u']),
                                                headingColor: 'header-primary',
                                                children: (0, r.jsx)(O.Z, { userId: t.id })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    !w &&
                        (0, r.jsx)('div', {
                            className: T.footer,
                            children: (0, r.jsx)(a.zx, {
                                fullWidth: !0,
                                size: a.zx.Sizes.LARGE,
                                look: a.zx.Looks.BLANK,
                                color: T.footerButtonColor,
                                onClick: () => {
                                    (G(),
                                        (0, g.pQ)(
                                            R(
                                                {
                                                    action: 'PRESS_VIEW_PROFILE',
                                                    analyticsLocations: k
                                                },
                                                M
                                            )
                                        ));
                                },
                                children: P.intl.string(P.t['+Xp3ho'])
                            })
                        }),
                    (null == A ? void 0 : A.profileEffectId) != null &&
                        (0, r.jsx)(h.Z, {
                            profileEffectId: null == A ? void 0 : A.profileEffectId,
                            isHovering: H
                        })
                ]
            })
        })
    });
}
