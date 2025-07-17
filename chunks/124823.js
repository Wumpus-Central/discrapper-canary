n.d(t, { Z: () => w });
var r = n(255367),
    i = n(73800),
    l = n(597312),
    a = n(755721),
    o = n(727637),
    s = n(410030),
    c = n(100527),
    u = n(906732),
    d = n(580552),
    p = n(680295),
    h = n(5192),
    f = n(785717),
    m = n(221292),
    g = n(687158),
    b = n(892001),
    _ = n(899007),
    y = n(648052),
    C = n(867176),
    x = n(280885),
    v = n(900927),
    O = n(678738),
    j = n(502762),
    E = n(530),
    S = n(679332),
    P = n(544989),
    I = n(228168),
    Z = n(388032),
    T = n(638414),
    N = n(283189);
function A(e) {
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
        R = (0, g.ZP)(t.id),
        M = (0, s.ZP)(),
        D = i.useRef(Date.now()),
        { analyticsLocations: L } = (0, u.ZP)(c.Z.USER_PROFILE_SIDEBAR),
        k = (0, f.ZB)({
            layout: 'SIDEBAR',
            userId: t.id,
            channelId: n.id
        }),
        U = i.useRef(null),
        B = (0, o.Z)(U),
        F = (e) => {
            (0, b.openUserProfileModal)(
                A(
                    {
                        sourceAnalyticsLocations: L,
                        hideRestrictedProfile: !0
                    },
                    k,
                    e
                )
            );
        };
    return (0, r.jsx)(u.Gt, {
        value: L,
        children: (0, r.jsx)(f.Mt, {
            value: k,
            openedAt: D.current,
            fetchStartedAt: null == R ? void 0 : R.fetchStartedAt,
            fetchEndedAt: null == R ? void 0 : R.fetchEndedAt,
            isLoaded: null == R ? void 0 : R.isLoaded,
            children: (0, r.jsxs)(j.Z, {
                ref: U,
                user: t,
                displayProfile: R,
                themeType: I.lY.SIDEBAR,
                themeOverride: M,
                children: [
                    (0, r.jsxs)(l.u2, {
                        children: [
                            (0, r.jsx)(P.Z, { children: (0, r.jsx)(S.Z, { user: t }) }),
                            (0, r.jsxs)('header', {
                                className: T.header,
                                children: [
                                    (0, r.jsx)(C.Z, {
                                        user: t,
                                        displayProfile: R,
                                        themeType: I.lY.SIDEBAR,
                                        animateOnHover: !B
                                    }),
                                    (0, r.jsx)(_.Z, {
                                        user: t,
                                        displayProfile: R,
                                        channelId: n.id,
                                        themeType: I.lY.SIDEBAR,
                                        onOpenProfile: w ? void 0 : F
                                    })
                                ]
                            }),
                            (0, r.jsxs)('div', {
                                className: N.body,
                                children: [
                                    (0, r.jsx)(E.Z, {
                                        user: t,
                                        nickname: h.ZP.getName(null, n.id, t),
                                        pronouns: null == R ? void 0 : R.pronouns,
                                        onOpenProfile: w ? void 0 : F,
                                        tags: (0, r.jsx)(y.Z, {
                                            displayProfile: R,
                                            themeType: I.lY.SIDEBAR
                                        })
                                    }),
                                    (0, r.jsxs)(j.Z.Overlay, {
                                        className: N.overlay,
                                        children: [
                                            (0, r.jsx)(O.Z, {
                                                heading: Z.intl.string(Z.t['61W33d']),
                                                headingColor: 'header-primary',
                                                children: (0, r.jsx)(x.Z, {
                                                    userBio: null == R ? void 0 : R.bio,
                                                    userId: t.id,
                                                    animateOnHover: !0,
                                                    isHovering: B
                                                })
                                            }),
                                            (0, r.jsx)(O.Z, {
                                                heading: Z.intl.string(Z.t['A//N4u']),
                                                headingColor: 'header-primary',
                                                children: (0, r.jsx)(v.Z, { userId: t.id })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    !w &&
                        (0, r.jsx)('footer', {
                            className: T.footer,
                            children: (0, r.jsx)(a.zx, {
                                fullWidth: !0,
                                size: a.zx.Sizes.LARGE,
                                look: a.zx.Looks.BLANK,
                                color: T.footerButtonColor,
                                onClick: () => {
                                    (F(),
                                        (0, m.pQ)(
                                            A(
                                                {
                                                    action: 'PRESS_VIEW_PROFILE',
                                                    analyticsLocations: L
                                                },
                                                k
                                            )
                                        ));
                                },
                                children: Z.intl.string(Z.t['+Xp3ho'])
                            })
                        }),
                    (null == R ? void 0 : R.profileEffectId) != null &&
                        (0, r.jsx)(p.Z, {
                            profileEffectId: null == R ? void 0 : R.profileEffectId,
                            isHovering: B
                        })
                ]
            })
        })
    });
}
