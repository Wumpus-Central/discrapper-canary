n.d(t, { Z: () => C }), n(388685);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    o = n(481060),
    s = n(727637),
    l = n(100527),
    c = n(906732),
    u = n(430824),
    d = n(785717),
    f = n(221292),
    _ = n(687158),
    p = n(899007),
    h = n(867176),
    m = n(502762),
    g = n(952124),
    E = n(544989),
    b = n(4517),
    y = n(171368),
    v = n(895697),
    O = n(161572),
    I = n(228168),
    S = n(388032),
    T = n(200669);
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
function A(e) {
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
                N(e, t, n[t]);
            });
    }
    return e;
}
function C(e) {
    let { user: t, currentUser: n, guildId: N, channelId: C, messageId: R, roleId: P, openedAt: w, closePopout: D, setPopoutRef: L, disableUserProfileLink: x = __OVERLAY__, newAnalyticsLocations: M = [] } = e,
        { analyticsLocations: k } = (0, c.ZP)([...M, l.Z.BITE_SIZE_PROFILE_POPOUT]),
        j = (0, d.ZB)({
            layout: 'POPOUT',
            userId: t.id,
            guildId: N,
            channelId: C,
            messageId: R,
            roleId: P
        }),
        U = (0, _.ZP)(t.id, N),
        G = (0, a.e7)([u.Z], () => (null != N ? u.Z.getGuild(N) : null)),
        B = i.useRef(null),
        F = (0, s.Z)(B);
    i.useEffect(() => {
        null == L || L(null == B ? void 0 : B.current);
    }, [B, L]);
    let V = (e) => {
            null == D || D(),
                (0, y.openUserProfileModal)(
                    A(
                        {
                            sourceAnalyticsLocations: k,
                            hideRestrictedProfile: !0
                        },
                        j,
                        e
                    )
                );
        },
        Z = () =>
            x
                ? null
                : (0, r.jsx)(o.sNh, {
                      id: 'view-profile',
                      label: S.NW.string(S.t['+Xp3ho']),
                      action: () => {
                          V(),
                              (0, f.pQ)(
                                  A(
                                      {
                                          action: 'PRESS_VIEW_PROFILE',
                                          analyticsLocations: k
                                      },
                                      j
                                  )
                              );
                      }
                  });
    return (0, r.jsx)(c.Gt, {
        value: k,
        children: (0, r.jsx)(d.Mt, {
            value: j,
            openedAt: w,
            fetchStartedAt: null == U ? void 0 : U.fetchStartedAt,
            fetchEndedAt: null == U ? void 0 : U.fetchEndedAt,
            isLoaded: null == U ? void 0 : U.isLoaded,
            children: (0, r.jsx)(o.VqE, {
                ref: B,
                'aria-label': t.username,
                children: (0, r.jsxs)(m.Z, {
                    user: t,
                    displayProfile: U,
                    profileType: I.y0.BITE_SIZE,
                    children: [
                        (0, r.jsx)(E.Z, {
                            profileType: I.y0.BITE_SIZE,
                            children: (0, r.jsx)(g.Z, {
                                user: t,
                                guildId: N,
                                viewProfileItem: Z(),
                                onCloseProfile: D
                            })
                        }),
                        (0, r.jsxs)('header', {
                            className: T.header,
                            children: [
                                (0, r.jsx)(h.Z, {
                                    user: t,
                                    displayProfile: U,
                                    guildId: N,
                                    profileType: I.y0.BITE_SIZE
                                }),
                                (0, r.jsx)(p.Z, {
                                    user: t,
                                    displayProfile: U,
                                    guildId: N,
                                    channelId: C,
                                    profileType: I.y0.BITE_SIZE,
                                    onOpenProfile: x ? void 0 : V
                                }),
                                (0, r.jsx)(b.Z, {
                                    location: 'BotUserProfilePopout',
                                    user: t,
                                    profileType: I.y0.BITE_SIZE,
                                    onCloseProfile: D
                                })
                            ]
                        }),
                        (0, r.jsx)(v.Z, {
                            user: t,
                            currentUser: n,
                            displayProfile: U,
                            guild: G,
                            isHovering: F,
                            onOpenProfile: x ? void 0 : V,
                            channelId: C,
                            onClose: D
                        }),
                        (0, r.jsx)(O.Z, {
                            user: t,
                            guildId: N,
                            channelId: C,
                            onClose: D
                        })
                    ]
                })
            })
        })
    });
}
