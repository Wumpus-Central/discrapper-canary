n.d(t, { Z: () => C }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(481060),
    s = n(727637),
    l = n(100527),
    c = n(906732),
    u = n(430824),
    d = n(785717),
    f = n(221292),
    _ = n(687158),
    p = n(892001),
    h = n(899007),
    m = n(867176),
    g = n(502762),
    E = n(952124),
    b = n(544989),
    y = n(4517),
    O = n(895697),
    v = n(161572),
    I = n(228168),
    S = n(388032),
    T = n(200669);
function A(e, t, n) {
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
function N(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
function C(e) {
    let { user: t, currentUser: n, guildId: A, channelId: C, messageId: R, roleId: P, openedAt: w, closePopout: D, setPopoutRef: L, disableUserProfileLink: x = __OVERLAY__, newAnalyticsLocations: M = [], disableAutoFocus: k = !1 } = e,
        { analyticsLocations: j } = (0, c.ZP)([...M, l.Z.USER_PROFILE_POPOUT]),
        U = (0, d.ZB)({
            layout: 'POPOUT',
            userId: t.id,
            guildId: A,
            channelId: C,
            messageId: R,
            roleId: P
        }),
        G = (0, _.ZP)(t.id, A),
        B = (0, o.e7)([u.Z], () => (null != A ? u.Z.getGuild(A) : null)),
        V = i.useRef(null),
        F = (0, s.Z)(V);
    i.useEffect(() => {
        null == L || L(null == V ? void 0 : V.current);
    }, [V, L]);
    let Z = (e) => {
            null == D || D(),
                (0, p.openUserProfileModal)(
                    N(
                        {
                            sourceAnalyticsLocations: j,
                            hideRestrictedProfile: !0
                        },
                        U,
                        e
                    )
                );
        },
        H = () =>
            x
                ? null
                : (0, r.jsx)(a.sNh, {
                      id: 'view-profile',
                      label: S.intl.string(S.t['+Xp3ho']),
                      action: () => {
                          Z(),
                              (0, f.pQ)(
                                  N(
                                      {
                                          action: 'PRESS_VIEW_PROFILE',
                                          analyticsLocations: j
                                      },
                                      U
                                  )
                              );
                      }
                  }),
        Y = k ? 'div' : a.VqE;
    return (0, r.jsx)(c.Gt, {
        value: j,
        children: (0, r.jsx)(d.Mt, {
            value: U,
            openedAt: w,
            fetchStartedAt: null == G ? void 0 : G.fetchStartedAt,
            fetchEndedAt: null == G ? void 0 : G.fetchEndedAt,
            isLoaded: null == G ? void 0 : G.isLoaded,
            children: (0, r.jsx)(Y, {
                ref: V,
                'aria-label': t.username,
                children: (0, r.jsxs)(g.Z, {
                    user: t,
                    displayProfile: G,
                    themeType: I.lY.POPOUT,
                    children: [
                        (0, r.jsx)(b.Z, {
                            children: (0, r.jsx)(E.Z, {
                                user: t,
                                guildId: A,
                                viewProfileItem: H(),
                                onCloseProfile: D
                            })
                        }),
                        (0, r.jsxs)('header', {
                            className: T.header,
                            children: [
                                (0, r.jsx)(m.Z, {
                                    user: t,
                                    displayProfile: G,
                                    guildId: A,
                                    themeType: I.lY.POPOUT
                                }),
                                (0, r.jsx)(h.Z, {
                                    user: t,
                                    displayProfile: G,
                                    guildId: A,
                                    channelId: C,
                                    themeType: I.lY.POPOUT,
                                    onOpenProfile: x ? void 0 : Z
                                }),
                                (0, r.jsx)(y.Z, {
                                    location: 'BotUserProfilePopout',
                                    user: t,
                                    themeType: I.lY.POPOUT,
                                    onCloseProfile: D
                                })
                            ]
                        }),
                        (0, r.jsx)(O.Z, {
                            user: t,
                            currentUser: n,
                            displayProfile: G,
                            guild: B,
                            isHovering: F,
                            onOpenProfile: x ? void 0 : Z,
                            channelId: C,
                            onClose: D
                        }),
                        (0, r.jsx)(v.Z, {
                            user: t,
                            guildId: A,
                            channelId: C,
                            onClose: D,
                            disableAutoFocus: k
                        })
                    ]
                })
            })
        })
    });
}
