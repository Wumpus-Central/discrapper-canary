n.d(t, { Z: () => B }), n(388685);
var r = n(200651),
    i = n(192379),
    a = n(272573),
    o = n(442837),
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
    v = n(113557),
    O = n(867176),
    I = n(451834),
    S = n(502762),
    T = n(544989),
    A = n(481932),
    N = n(195387),
    C = n(272510),
    R = n(4517),
    P = n(978395),
    w = n(161572),
    D = n(228168),
    L = n(981631),
    x = n(388032),
    M = n(200669);
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
function j(e) {
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
function U(e, t) {
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
function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : U(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function B(e) {
    let { user: t, currentUser: n, guildId: k, channelId: U, messageId: B, roleId: V, openedAt: F, closePopout: Z, setPopoutRef: H, disableUserProfileLink: Y = __OVERLAY__, newAnalyticsLocations: W = [], appContext: K = L.IlC.APP } = e,
        { analyticsLocations: z } = (0, d.ZP)([...W, u.Z.USER_PROFILE_POPOUT]),
        q = (0, m.ZB)({
            layout: 'POPOUT',
            userId: t.id,
            guildId: k,
            channelId: U,
            messageId: B,
            roleId: V
        }),
        Q = (0, o.e7)([h.Z], () => (null != k ? h.Z.getGuild(k) : null)),
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
        null == H || H(null == J ? void 0 : J.current);
    }, [J, H]);
    let er = (0, f.p)({ location: 'UserProfilePopout' }),
        ei = i.useMemo(() => (0, _.Z)(), []),
        ea = (e) => {
            null == Z || Z(),
                (0, y.openUserProfileModal)(
                    G(
                        j(
                            {
                                sourceAnalyticsLocations: z,
                                hideRestrictedProfile: !0,
                                customStatusPrompt: ei
                            },
                            q,
                            e
                        ),
                        { appContext: K }
                    )
                );
        },
        eo = () =>
            Y
                ? null
                : (0, r.jsx)(s.sNh, {
                      id: 'view-profile',
                      label: x.intl.string(x.t['+Xp3ho']),
                      action: () => {
                          ea(),
                              (0, g.pQ)(
                                  j(
                                      {
                                          action: 'PRESS_VIEW_PROFILE',
                                          analyticsLocations: z
                                      },
                                      q
                                  )
                              );
                      }
                  });
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
                children: (0, r.jsxs)(s.VqE, {
                    ref: J,
                    'aria-label': t.username,
                    children: [
                        (0, r.jsxs)(S.Z, {
                            user: t,
                            displayProfile: $,
                            themeType: D.lY.POPOUT,
                            children: [
                                null != et.interactionType &&
                                    (0, r.jsx)(a.animated.div, {
                                        style: en,
                                        className: M.backdrop
                                    }),
                                (0, r.jsxs)(T.Z, {
                                    children: [
                                        (0, r.jsx)(N.Z, {
                                            shouldShowTooltip: null === et.interactionType,
                                            user: t,
                                            guildId: k,
                                            channelId: U,
                                            onClose: Z,
                                            appContext: K
                                        }),
                                        (0, r.jsx)(A.Z, {
                                            shouldShowTooltip: null === et.interactionType,
                                            themeType: D.lY.POPOUT,
                                            user: t
                                        }),
                                        t.id !== n.id &&
                                            (0, r.jsx)(C.Z, {
                                                user: t,
                                                guildId: k,
                                                viewProfileItem: eo(),
                                                appContext: K
                                            })
                                    ]
                                }),
                                (0, r.jsxs)('header', {
                                    className: M.header,
                                    children: [
                                        (0, r.jsx)(O.Z, {
                                            user: t,
                                            displayProfile: $,
                                            guildId: k,
                                            themeType: D.lY.POPOUT
                                        }),
                                        (0, r.jsx)(I.Z, {
                                            userId: t.id,
                                            className: M.toast,
                                            onClose: Z
                                        }),
                                        (0, r.jsx)(v.Z, {
                                            location: 'UserProfilePopout',
                                            user: t,
                                            displayProfile: $,
                                            guildId: k,
                                            channelId: U,
                                            themeType: D.lY.POPOUT,
                                            onOpenProfile: Y ? void 0 : ea
                                        }),
                                        (0, r.jsx)(R.Z, {
                                            location: 'UserProfilePopout',
                                            user: t,
                                            guildId: k,
                                            channelId: U,
                                            themeType: D.lY.POPOUT,
                                            onCloseProfile: Z,
                                            prompt: er ? ei : null
                                        })
                                    ]
                                }),
                                (0, r.jsx)(P.Z, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: $,
                                    guild: Q,
                                    isHovering: null == et.interactionType && ee,
                                    onOpenProfile: Y ? void 0 : ea,
                                    channelId: U,
                                    onClose: Z
                                }),
                                (0, r.jsx)(w.Z, {
                                    user: t,
                                    guildId: k,
                                    channelId: U,
                                    onClose: Z,
                                    appContext: K
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
