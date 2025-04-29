n.d(t, { Z: () => P }), n(388685);
var r = n(200651),
    i = n(192379),
    o = n(481060),
    a = n(727637),
    s = n(100527),
    l = n(906732),
    c = n(580552),
    u = n(688465),
    d = n(680295),
    f = n(5192),
    _ = n(785717),
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
    S = n(544989),
    T = n(228168),
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                C(e, t, n[t]);
            });
    }
    return e;
}
function P(e) {
    let { user: t, guildId: n, channelId: C, messageId: P, roleId: w, openedAt: D, setPopoutRef: L, closePopout: x, disableUserProfileLink: M = __OVERLAY__, newAnalyticsLocations: k = [] } = e,
        j = (0, h.ZP)(t.id, n),
        { analyticsLocations: U } = (0, l.ZP)([...k, s.Z.USER_PROFILE_POPOUT]),
        G = (0, _.ZB)({
            layout: 'POPOUT',
            userId: t.id,
            guildId: n,
            channelId: C,
            messageId: P,
            roleId: w
        }),
        B = i.useRef(null),
        V = (0, a.Z)(B);
    i.useEffect(() => {
        null == L || L(null == B ? void 0 : B.current);
    }, [B, L]);
    let F = () => {
            null == x || x(),
                (0, m.openUserProfileModal)(
                    R(
                        {
                            sourceAnalyticsLocations: U,
                            hideRestrictedProfile: !0
                        },
                        G
                    )
                );
        },
        Z = !M && (0, c.Z)(t.id),
        H = () =>
            Z
                ? (0, r.jsx)(o.sNh, {
                      id: 'view-profile',
                      label: A.intl.string(A.t['+Xp3ho']),
                      action: () => {
                          F(),
                              (0, p.pQ)(
                                  R(
                                      {
                                          action: 'PRESS_VIEW_PROFILE',
                                          analyticsLocations: U
                                      },
                                      G
                                  )
                              );
                      }
                  })
                : null;
    return (0, r.jsx)(l.Gt, {
        value: U,
        children: (0, r.jsx)(_.Mt, {
            value: G,
            openedAt: D,
            fetchStartedAt: null == j ? void 0 : j.fetchStartedAt,
            fetchEndedAt: null == j ? void 0 : j.fetchEndedAt,
            isLoaded: null == j ? void 0 : j.isLoaded,
            children: (0, r.jsxs)(o.VqE, {
                ref: B,
                'aria-label': t.username,
                children: [
                    (0, r.jsxs)(O.Z, {
                        user: t,
                        displayProfile: j,
                        themeType: T.lY.POPOUT,
                        children: [
                            (0, r.jsx)(S.Z, {
                                children: (0, r.jsx)(I.Z, {
                                    user: t,
                                    viewProfileItem: H()
                                })
                            }),
                            (0, r.jsxs)('header', {
                                className: N.header,
                                children: [
                                    (0, r.jsx)(b.Z, {
                                        user: t,
                                        displayProfile: j,
                                        guildId: n,
                                        themeType: T.lY.POPOUT
                                    }),
                                    (0, r.jsx)(g.Z, {
                                        user: t,
                                        displayProfile: j,
                                        guildId: n,
                                        channelId: C,
                                        themeType: T.lY.POPOUT,
                                        onOpenProfile: Z ? F : void 0
                                    }),
                                    t.isClyde() && (0, r.jsx)(u.Z, { className: N.headerTag })
                                ]
                            }),
                            (0, r.jsxs)(o.Ttm, {
                                fade: !0,
                                className: N.body,
                                children: [
                                    (0, r.jsx)(v.Z, {
                                        user: t,
                                        nickname: f.ZP.getName(n, C, t),
                                        onOpenProfile: Z ? F : void 0,
                                        tags: (0, r.jsx)(E.Z, {
                                            displayProfile: j,
                                            themeType: T.lY.POPOUT,
                                            onClose: x
                                        })
                                    }),
                                    (0, r.jsx)(y.Z, {
                                        userId: t.id,
                                        userBio: null == j ? void 0 : j.bio,
                                        setLineClamp: !1,
                                        textColor: 'header-primary'
                                    })
                                ]
                            }),
                            (0, r.jsx)('footer', { className: N.footer })
                        ]
                    }),
                    (null == j ? void 0 : j.profileEffectId) != null &&
                        (0, r.jsx)(d.Z, {
                            profileEffectId: null == j ? void 0 : j.profileEffectId,
                            isHovering: V
                        })
                ]
            })
        })
    });
}
