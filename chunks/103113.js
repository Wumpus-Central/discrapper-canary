(n.d(t, { Z: () => P }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(481060),
    o = n(727637),
    s = n(100527),
    l = n(906732),
    c = n(580552),
    u = n(313201),
    d = n(680295),
    _ = n(5192),
    f = n(785717),
    p = n(221292),
    h = n(687158),
    m = n(892001),
    g = n(899007),
    E = n(648052),
    b = n(867176),
    y = n(280885),
    O = n(502762),
    v = n(530),
    I = n(679332),
    T = n(544989),
    S = n(228168),
    A = n(388032),
    N = n(200669);
function C(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
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
                C(e, t, n[t]);
            }));
    }
    return e;
}
function P(e) {
    let { user: t, guildId: n, channelId: C, messageId: P, roleId: w, openedAt: D, setPopoutRef: L, closePopout: x, disableUserProfileLink: M = __OVERLAY__, newAnalyticsLocations: k = [], disableAutoFocus: j = !1 } = e,
        U = (0, h.ZP)(t.id, n),
        { analyticsLocations: G } = (0, l.ZP)([...k, s.Z.USER_PROFILE_POPOUT]),
        B = (0, f.ZB)({
            layout: 'POPOUT',
            userId: t.id,
            guildId: n,
            channelId: C,
            messageId: P,
            roleId: w
        }),
        V = i.useRef(null),
        F = (0, o.Z)(V);
    i.useEffect(() => {
        null == L || L(null == V ? void 0 : V.current);
    }, [V, L]);
    let Z = () => {
            (null == x || x(),
                (0, m.openUserProfileModal)(
                    R(
                        {
                            sourceAnalyticsLocations: G,
                            hideRestrictedProfile: !0
                        },
                        B
                    )
                ));
        },
        H = !M && (0, c.Z)(t.id),
        Y = () =>
            H
                ? (0, r.jsx)(a.sNh, {
                      id: 'view-profile',
                      label: A.intl.string(A.t['+Xp3ho']),
                      action: () => {
                          (Z(),
                              (0, p.pQ)(
                                  R(
                                      {
                                          action: 'PRESS_VIEW_PROFILE',
                                          analyticsLocations: G
                                      },
                                      B
                                  )
                              ));
                      }
                  })
                : null,
        W = j ? 'div' : a.VqE,
        K = (0, u.Dt)(),
        z = _.ZP.useName(n, C, t);
    return (0, r.jsx)(l.Gt, {
        value: G,
        children: (0, r.jsx)(f.Mt, {
            value: B,
            openedAt: D,
            fetchStartedAt: null == U ? void 0 : U.fetchStartedAt,
            fetchEndedAt: null == U ? void 0 : U.fetchEndedAt,
            isLoaded: null == U ? void 0 : U.isLoaded,
            children: (0, r.jsxs)(W, {
                ref: V,
                'aria-labelledby': K,
                children: [
                    (0, r.jsx)(a.nn4, {
                        children: (0, r.jsx)(a.H, {
                            id: K,
                            children: A.intl.format(A.t.KRe1Fh, { name: z })
                        })
                    }),
                    (0, r.jsxs)(O.Z, {
                        user: t,
                        displayProfile: U,
                        themeType: S.lY.POPOUT,
                        children: [
                            (0, r.jsx)(T.Z, {
                                children: (0, r.jsx)(I.Z, {
                                    user: t,
                                    viewProfileItem: Y()
                                })
                            }),
                            (0, r.jsxs)('div', {
                                className: N.header,
                                children: [
                                    (0, r.jsx)(b.Z, {
                                        user: t,
                                        displayProfile: U,
                                        guildId: n,
                                        themeType: S.lY.POPOUT
                                    }),
                                    (0, r.jsx)(g.Z, {
                                        user: t,
                                        displayProfile: U,
                                        guildId: n,
                                        channelId: C,
                                        themeType: S.lY.POPOUT,
                                        onOpenProfile: H ? Z : void 0
                                    })
                                ]
                            }),
                            (0, r.jsxs)(a.Ttm, {
                                fade: !0,
                                className: N.body,
                                children: [
                                    (0, r.jsx)(v.Z, {
                                        user: t,
                                        nickname: _.ZP.getName(n, C, t),
                                        onOpenProfile: H ? Z : void 0,
                                        tags: (0, r.jsx)(E.Z, {
                                            displayProfile: U,
                                            themeType: S.lY.POPOUT,
                                            onClose: x
                                        })
                                    }),
                                    (0, r.jsx)(y.Z, {
                                        userId: t.id,
                                        userBio: null == U ? void 0 : U.bio,
                                        setLineClamp: !1,
                                        textColor: 'header-primary'
                                    })
                                ]
                            }),
                            (0, r.jsx)('div', { className: N.footer })
                        ]
                    }),
                    (null == U ? void 0 : U.profileEffectId) != null &&
                        (0, r.jsx)(d.Z, {
                            profileEffectId: null == U ? void 0 : U.profileEffectId,
                            isHovering: F
                        })
                ]
            })
        })
    });
}
