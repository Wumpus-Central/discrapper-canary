n.d(t, { Z: () => G }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(714673),
    a = n(442837),
    s = n(481060),
    l = n(727637),
    c = n(616780),
    u = n(100527),
    d = n(906732),
    f = n(368326),
    _ = n(429467),
    p = n(680295),
    h = n(430824),
    m = n(785717),
    g = n(221292),
    E = n(687158),
    b = n(510659),
    y = n(892001),
    O = n(113557),
    v = n(867176),
    I = n(451834),
    S = n(502762),
    T = n(544989),
    A = n(481932),
    N = n(195387),
    C = n(664794),
    P = n(4517),
    R = n(978395),
    w = n(161572),
    D = n(228168),
    L = n(388032),
    x = n(200669);
function k(e, t, n) {
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
function M(e) {
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
                k(e, t, n[t]);
            });
    }
    return e;
}
function j(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function U(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : j(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function G(e) {
    let { user: t, currentUser: n, guildId: k, channelId: j, messageId: G, roleId: B, openedAt: F, closePopout: V, setPopoutRef: Z, disableUserProfileLink: H = __OVERLAY__, newAnalyticsLocations: Y = [], appContext: W, disableAutoFocus: K = !1 } = e,
        { analyticsLocations: z } = (0, d.ZP)([...Y, u.Z.USER_PROFILE_POPOUT]),
        q = (0, m.ZB)({
            layout: 'POPOUT',
            userId: t.id,
            guildId: k,
            channelId: j,
            messageId: G,
            roleId: B
        }),
        Q = (0, a.e7)([h.Z], () => (null != k ? h.Z.getGuild(k) : null)),
        X = i.useMemo(() => (null != k ? { [k]: [t.id] } : {}), [k, t.id]);
    (0, c.$)(X);
    let J = i.useRef(null),
        $ = (0, E.ZP)(t.id, k),
        ee = (0, l.Z)(J),
        et = (0, b.$m)(),
        en = (0, s.q_F)({
            opacity: +(null != et.interactionType),
            config: { duration: 150 }
        });
    i.useEffect(() => {
        null == Z || Z(null == J ? void 0 : J.current);
    }, [J, Z]);
    let er = (0, f.p)({ location: 'UserProfilePopout' }),
        ei = i.useMemo(() => (0, _.Z)(), []),
        eo = (e) => {
            null == V || V(),
                (0, y.openUserProfileModal)(
                    U(
                        M(
                            {
                                sourceAnalyticsLocations: z,
                                hideRestrictedProfile: !0,
                                customStatusPrompt: ei
                            },
                            q,
                            e
                        ),
                        { appContext: W }
                    )
                );
        },
        ea = () =>
            H
                ? null
                : (0, r.jsx)(s.sNh, {
                      id: 'view-profile',
                      label: L.intl.string(L.t['+Xp3ho']),
                      action: () => {
                          eo(),
                              (0, g.pQ)(
                                  M(
                                      {
                                          action: 'PRESS_VIEW_PROFILE',
                                          analyticsLocations: z
                                      },
                                      q
                                  )
                              );
                      }
                  }),
        es = K ? 'div' : s.VqE;
    return (0, r.jsx)(d.Gt, {
        value: z,
        children: (0, r.jsx)(m.Mt, {
            value: q,
            openedAt: F,
            fetchStartedAt: null == $ ? void 0 : $.fetchStartedAt,
            fetchEndedAt: null == $ ? void 0 : $.fetchEndedAt,
            isLoaded: null == $ ? void 0 : $.isLoaded,
            children: (0, r.jsx)(b.NJ, {
                value: et,
                children: (0, r.jsxs)(es, {
                    ref: J,
                    'aria-label': t.username,
                    children: [
                        (0, r.jsxs)(S.Z, {
                            user: t,
                            displayProfile: $,
                            themeType: D.lY.POPOUT,
                            children: [
                                null != et.interactionType &&
                                    (0, r.jsx)(o.animated.div, {
                                        style: en,
                                        className: x.backdrop
                                    }),
                                (0, r.jsxs)(T.Z, {
                                    children: [
                                        (0, r.jsx)(N.Z, {
                                            shouldShowTooltip: null === et.interactionType,
                                            user: t,
                                            guildId: k,
                                            channelId: j,
                                            onClose: V,
                                            appContext: W
                                        }),
                                        (0, r.jsx)(A.Z, {
                                            shouldShowTooltip: null === et.interactionType,
                                            themeType: D.lY.POPOUT,
                                            user: t
                                        }),
                                        t.id !== n.id &&
                                            (0, r.jsx)(C.Z, {
                                                type: 'banner',
                                                user: t,
                                                guildId: k,
                                                viewProfileItem: ea(),
                                                appContext: W
                                            })
                                    ]
                                }),
                                (0, r.jsxs)('header', {
                                    className: x.header,
                                    children: [
                                        (0, r.jsx)(v.Z, {
                                            user: t,
                                            displayProfile: $,
                                            guildId: k,
                                            themeType: D.lY.POPOUT
                                        }),
                                        (0, r.jsx)(I.Z, {
                                            userId: t.id,
                                            className: x.toast,
                                            onClose: V
                                        }),
                                        (0, r.jsx)(O.Z, {
                                            location: 'UserProfilePopout',
                                            user: t,
                                            displayProfile: $,
                                            guildId: k,
                                            channelId: j,
                                            themeType: D.lY.POPOUT,
                                            onOpenProfile: H ? void 0 : eo
                                        }),
                                        (0, r.jsx)(P.Z, {
                                            location: 'UserProfilePopout',
                                            user: t,
                                            guildId: k,
                                            channelId: j,
                                            themeType: D.lY.POPOUT,
                                            onCloseProfile: V,
                                            prompt: er ? ei : null
                                        })
                                    ]
                                }),
                                (0, r.jsx)(R.Z, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: $,
                                    guild: Q,
                                    isHovering: null == et.interactionType && ee,
                                    onOpenProfile: H ? void 0 : eo,
                                    channelId: j,
                                    onClose: V
                                }),
                                (0, r.jsx)(w.Z, {
                                    user: t,
                                    guildId: k,
                                    channelId: j,
                                    onClose: V,
                                    appContext: W,
                                    disableAutoFocus: K
                                })
                            ]
                        }),
                        (null == $ ? void 0 : $.profileEffectId) != null &&
                            (0, r.jsx)(p.Z, {
                                profileEffectId: null == $ ? void 0 : $.profileEffectId,
                                isHovering: ee
                            })
                    ]
                })
            })
        })
    });
}
