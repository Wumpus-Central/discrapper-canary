(n.d(t, { Z: () => P }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(481060),
    s = n(727637),
    l = n(100527),
    c = n(906732),
    u = n(313201),
    d = n(430824),
    f = n(5192),
    _ = n(785717),
    p = n(221292),
    h = n(687158),
    m = n(892001),
    g = n(899007),
    E = n(867176),
    b = n(502762),
    y = n(952124),
    O = n(544989),
    v = n(4517),
    I = n(895697),
    T = n(161572),
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
    let { user: t, currentUser: n, guildId: C, channelId: P, messageId: w, roleId: D, openedAt: L, closePopout: x, setPopoutRef: k, disableUserProfileLink: M = __OVERLAY__, newAnalyticsLocations: j = [], disableAutoFocus: U = !1 } = e,
        { analyticsLocations: G } = (0, c.ZP)([...j, l.Z.USER_PROFILE_POPOUT]),
        B = (0, _.ZB)({
            layout: 'POPOUT',
            userId: t.id,
            guildId: C,
            channelId: P,
            messageId: w,
            roleId: D
        }),
        V = (0, h.ZP)(t.id, C),
        F = (0, a.e7)([d.Z], () => (null != C ? d.Z.getGuild(C) : null)),
        Z = i.useRef(null),
        H = (0, s.Z)(Z);
    i.useEffect(() => {
        null == k || k(null == Z ? void 0 : Z.current);
    }, [Z, k]);
    let Y = (e) => {
            (null == x || x(),
                (0, m.openUserProfileModal)(
                    R(
                        {
                            sourceAnalyticsLocations: G,
                            hideRestrictedProfile: !0
                        },
                        B,
                        e
                    )
                ));
        },
        W = () =>
            M
                ? null
                : (0, r.jsx)(o.sNh, {
                      id: 'view-profile',
                      label: A.intl.string(A.t['+Xp3ho']),
                      action: () => {
                          (Y(),
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
                  }),
        K = U ? 'div' : o.VqE,
        z = (0, u.Dt)(),
        q = f.ZP.useName(C, P, t);
    return (0, r.jsx)(c.Gt, {
        value: G,
        children: (0, r.jsx)(_.Mt, {
            value: B,
            openedAt: L,
            fetchStartedAt: null == V ? void 0 : V.fetchStartedAt,
            fetchEndedAt: null == V ? void 0 : V.fetchEndedAt,
            isLoaded: null == V ? void 0 : V.isLoaded,
            children: (0, r.jsxs)(K, {
                ref: Z,
                'aria-labelledby': z,
                children: [
                    (0, r.jsx)(o.nn4, {
                        children: (0, r.jsx)(o.H, {
                            id: z,
                            children: A.intl.format(A.t.KRe1Fh, { name: q })
                        })
                    }),
                    (0, r.jsxs)(b.Z, {
                        user: t,
                        displayProfile: V,
                        themeType: S.lY.POPOUT,
                        children: [
                            (0, r.jsx)(O.Z, {
                                children: (0, r.jsx)(y.Z, {
                                    user: t,
                                    guildId: C,
                                    viewProfileItem: W(),
                                    onCloseProfile: x
                                })
                            }),
                            (0, r.jsxs)('div', {
                                className: N.header,
                                children: [
                                    (0, r.jsx)(E.Z, {
                                        user: t,
                                        displayProfile: V,
                                        guildId: C,
                                        themeType: S.lY.POPOUT
                                    }),
                                    (0, r.jsx)(g.Z, {
                                        user: t,
                                        displayProfile: V,
                                        guildId: C,
                                        channelId: P,
                                        themeType: S.lY.POPOUT,
                                        onOpenProfile: M ? void 0 : Y
                                    }),
                                    (0, r.jsx)(v.Z, {
                                        location: 'BotUserProfilePopout',
                                        user: t,
                                        themeType: S.lY.POPOUT,
                                        onCloseProfile: x,
                                        disableToolbar: !0
                                    })
                                ]
                            }),
                            (0, r.jsx)(I.Z, {
                                user: t,
                                currentUser: n,
                                displayProfile: V,
                                guild: F,
                                isHovering: H,
                                onOpenProfile: M ? void 0 : Y,
                                channelId: P,
                                onClose: x
                            }),
                            (0, r.jsx)(T.Z, {
                                user: t,
                                guildId: C,
                                channelId: P,
                                onClose: x,
                                disableAutoFocus: U
                            })
                        ]
                    })
                ]
            })
        })
    });
}
