(n.d(t, { Z: () => R }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(481060),
    o = n(727637),
    s = n(100527),
    l = n(906732),
    c = n(580552),
    u = n(680295),
    d = n(5192),
    f = n(785717),
    _ = n(221292),
    p = n(687158),
    h = n(892001),
    m = n(899007),
    g = n(648052),
    E = n(867176),
    b = n(280885),
    y = n(502762),
    O = n(530),
    v = n(679332),
    I = n(544989),
    T = n(228168),
    S = n(388032),
    A = n(200669);
function N(e, t, n) {
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
function C(e) {
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
                N(e, t, n[t]);
            }));
    }
    return e;
}
function R(e) {
    let { user: t, guildId: n, channelId: N, messageId: R, roleId: P, openedAt: w, setPopoutRef: D, closePopout: L, disableUserProfileLink: x = __OVERLAY__, newAnalyticsLocations: k = [], disableAutoFocus: M = !1 } = e,
        j = (0, p.ZP)(t.id, n),
        { analyticsLocations: U } = (0, l.ZP)([...k, s.Z.USER_PROFILE_POPOUT]),
        G = (0, f.ZB)({
            layout: 'POPOUT',
            userId: t.id,
            guildId: n,
            channelId: N,
            messageId: R,
            roleId: P
        }),
        B = i.useRef(null),
        V = (0, o.Z)(B);
    i.useEffect(() => {
        null == D || D(null == B ? void 0 : B.current);
    }, [B, D]);
    let F = () => {
            (null == L || L(),
                (0, h.openUserProfileModal)(
                    C(
                        {
                            sourceAnalyticsLocations: U,
                            hideRestrictedProfile: !0
                        },
                        G
                    )
                ));
        },
        Z = !x && (0, c.Z)(t.id),
        H = () =>
            Z
                ? (0, r.jsx)(a.sNh, {
                      id: 'view-profile',
                      label: S.intl.string(S.t['+Xp3ho']),
                      action: () => {
                          (F(),
                              (0, _.pQ)(
                                  C(
                                      {
                                          action: 'PRESS_VIEW_PROFILE',
                                          analyticsLocations: U
                                      },
                                      G
                                  )
                              ));
                      }
                  })
                : null,
        Y = M ? 'div' : a.VqE;
    return (0, r.jsx)(l.Gt, {
        value: U,
        children: (0, r.jsx)(f.Mt, {
            value: G,
            openedAt: w,
            fetchStartedAt: null == j ? void 0 : j.fetchStartedAt,
            fetchEndedAt: null == j ? void 0 : j.fetchEndedAt,
            isLoaded: null == j ? void 0 : j.isLoaded,
            children: (0, r.jsxs)(Y, {
                ref: B,
                'aria-label': t.username,
                children: [
                    (0, r.jsxs)(y.Z, {
                        user: t,
                        displayProfile: j,
                        themeType: T.lY.POPOUT,
                        children: [
                            (0, r.jsx)(I.Z, {
                                children: (0, r.jsx)(v.Z, {
                                    user: t,
                                    viewProfileItem: H()
                                })
                            }),
                            (0, r.jsxs)('header', {
                                className: A.header,
                                children: [
                                    (0, r.jsx)(E.Z, {
                                        user: t,
                                        displayProfile: j,
                                        guildId: n,
                                        themeType: T.lY.POPOUT
                                    }),
                                    (0, r.jsx)(m.Z, {
                                        user: t,
                                        displayProfile: j,
                                        guildId: n,
                                        channelId: N,
                                        themeType: T.lY.POPOUT,
                                        onOpenProfile: Z ? F : void 0
                                    })
                                ]
                            }),
                            (0, r.jsxs)(a.Ttm, {
                                fade: !0,
                                className: A.body,
                                children: [
                                    (0, r.jsx)(O.Z, {
                                        user: t,
                                        nickname: d.ZP.getName(n, N, t),
                                        onOpenProfile: Z ? F : void 0,
                                        tags: (0, r.jsx)(g.Z, {
                                            displayProfile: j,
                                            themeType: T.lY.POPOUT,
                                            onClose: L
                                        })
                                    }),
                                    (0, r.jsx)(b.Z, {
                                        userId: t.id,
                                        userBio: null == j ? void 0 : j.bio,
                                        setLineClamp: !1,
                                        textColor: 'header-primary'
                                    })
                                ]
                            }),
                            (0, r.jsx)('footer', { className: A.footer })
                        ]
                    }),
                    (null == j ? void 0 : j.profileEffectId) != null &&
                        (0, r.jsx)(u.Z, {
                            profileEffectId: null == j ? void 0 : j.profileEffectId,
                            isHovering: V
                        })
                ]
            })
        })
    });
}
