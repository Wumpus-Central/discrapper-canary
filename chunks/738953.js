n.d(t, { Z: () => B }), n(388685);
var r = n(200651),
    i = n(192379),
    o = n(200100),
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
    y = n(113557),
    v = n(867176),
    O = n(451834),
    I = n(502762),
    S = n(544989),
    T = n(481932),
    N = n(195387),
    A = n(272510),
    C = n(4517),
    P = n(171368),
    R = n(978395),
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
    let { user: t, currentUser: n, guildId: k, channelId: U, messageId: B, roleId: V, openedAt: F, closePopout: Z, setPopoutRef: H, disableUserProfileLink: W = __OVERLAY__, newAnalyticsLocations: Y = [], appContext: K = L.IlC.APP } = e,
        { analyticsLocations: z } = (0, d.ZP)([...Y, u.Z.BITE_SIZE_PROFILE_POPOUT]),
        q = (0, m.ZB)({
            layout: 'BITE_SIZE_POPOUT',
            userId: t.id,
            guildId: k,
            channelId: U,
            messageId: B,
            roleId: V
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
        null == H || H(null == J ? void 0 : J.current);
    }, [J, H]);
    let er = (0, f.p)({ location: 'UserProfilePopout' }),
        ei = i.useMemo(() => (0, _.Z)(), []),
        eo = (e) => {
            null == Z || Z(),
                (0, P.openUserProfileModal)(
                    G(
                        j(
                            {
                                customStatusPrompt: ei,
                                sourceAnalyticsLocations: z
                            },
                            q,
                            e
                        ),
                        { appContext: K }
                    )
                );
        },
        ea = () =>
            W
                ? null
                : (0, r.jsx)(s.sNh, {
                      id: 'view-profile',
                      label: x.NW.string(x.t['+Xp3ho']),
                      action: () => {
                          eo(),
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
                        (0, r.jsxs)(I.Z, {
                            user: t,
                            displayProfile: $,
                            profileType: D.y0.BITE_SIZE,
                            children: [
                                null != et.interactionType &&
                                    (0, r.jsx)(o.animated.div, {
                                        style: en,
                                        className: M.backdrop
                                    }),
                                (0, r.jsxs)(S.Z, {
                                    profileType: D.y0.BITE_SIZE,
                                    children: [
                                        (0, r.jsx)(N.Z, {
                                            shouldShowTooltip: null === et.interactionType,
                                            user: t,
                                            guildId: k,
                                            channelId: U,
                                            onClose: Z,
                                            appContext: K
                                        }),
                                        (0, r.jsx)(T.Z, {
                                            shouldShowTooltip: null === et.interactionType,
                                            profileType: D.y0.BITE_SIZE,
                                            user: t
                                        }),
                                        t.id !== n.id &&
                                            (0, r.jsx)(A.Z, {
                                                user: t,
                                                guildId: k,
                                                viewProfileItem: ea(),
                                                appContext: K
                                            })
                                    ]
                                }),
                                (0, r.jsxs)('header', {
                                    className: M.header,
                                    children: [
                                        (0, r.jsx)(v.Z, {
                                            user: t,
                                            displayProfile: $,
                                            guildId: k,
                                            profileType: D.y0.BITE_SIZE
                                        }),
                                        (0, r.jsx)(O.Z, {
                                            userId: t.id,
                                            className: M.toast,
                                            onClose: Z
                                        }),
                                        (0, r.jsx)(y.Z, {
                                            location: 'UserProfilePopout',
                                            user: t,
                                            displayProfile: $,
                                            guildId: k,
                                            channelId: U,
                                            profileType: D.y0.BITE_SIZE,
                                            onOpenProfile: W ? void 0 : eo
                                        }),
                                        (0, r.jsx)(C.Z, {
                                            location: 'UserProfilePopout',
                                            user: t,
                                            guildId: k,
                                            channelId: U,
                                            profileType: D.y0.BITE_SIZE,
                                            onCloseProfile: Z,
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
                                    onOpenProfile: W ? void 0 : eo,
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
