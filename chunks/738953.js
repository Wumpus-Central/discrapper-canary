n.d(t, { Z: () => F }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(642128),
    a = n(442837),
    s = n(481060),
    l = n(727637),
    c = n(616780),
    u = n(100527),
    d = n(906732),
    f = n(368326),
    _ = n(429467),
    p = n(680295),
    h = n(271383),
    m = n(430824),
    g = n(785717),
    E = n(221292),
    b = n(687158),
    y = n(510659),
    v = n(113557),
    O = n(867176),
    I = n(451834),
    S = n(502762),
    T = n(544989),
    N = n(481932),
    A = n(195387),
    C = n(272510),
    R = n(4517),
    P = n(171368),
    w = n(978395),
    D = n(161572),
    L = n(228168),
    x = n(981631),
    M = n(388032),
    k = n(200669);
function j(e, t, n) {
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
function U(e) {
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
                j(e, t, n[t]);
            });
    }
    return e;
}
function G(e, t) {
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
function B(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : G(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function F(e) {
    let { user: t, currentUser: n, guildId: j, channelId: G, messageId: F, roleId: V, closePopout: Z, setPopoutRef: H, disableUserProfileLink: W = __OVERLAY__, newAnalyticsLocations: Y = [], appContext: K = x.IlC.APP } = e,
        { analyticsLocations: z } = (0, d.ZP)([...Y, u.Z.BITE_SIZE_PROFILE_POPOUT]),
        q = (0, g.ZB)({
            layout: 'BITE_SIZE_POPOUT',
            userId: t.id,
            guildId: j,
            channelId: G,
            messageId: F,
            roleId: V
        }),
        Q = (0, a.e7)([m.Z], () => (null != j ? m.Z.getGuild(j) : null)),
        X = (0, a.e7)([h.ZP], () => (null != j ? h.ZP.getMember(j, t.id) : null)),
        J = i.useMemo(() => (null != j ? { [j]: [t.id] } : {}), [j, t.id]);
    (0, c.$)(J);
    let $ = i.useRef(null),
        ee = (0, b.ZP)(t.id, j),
        et = (0, l.Z)($),
        en = (0, y.$m)(),
        er = (0, s.q_F)({
            opacity: +(null != en.interactionType),
            config: { duration: 150 }
        });
    i.useEffect(() => {
        null == H || H(null == $ ? void 0 : $.current);
    }, [$, H]);
    let ei = (0, f.p)({ location: 'UserProfilePopout' }),
        eo = i.useMemo(() => (0, _.Z)(), []),
        ea = (e) => {
            null == Z || Z(),
                (0, P.openUserProfileModal)(
                    B(
                        U(
                            {
                                customStatusPrompt: eo,
                                sourceAnalyticsLocations: z
                            },
                            q,
                            e
                        ),
                        { appContext: K }
                    )
                );
        },
        es = () =>
            W
                ? null
                : (0, r.jsx)(s.sNh, {
                      id: 'view-profile',
                      label: M.NW.string(M.t['+Xp3ho']),
                      action: () => {
                          ea(),
                              (0, E.pQ)(
                                  U(
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
        children: (0, r.jsx)(g.Mt, {
            value: q,
            shouldTrackViewOnMount: null == X || null != X.fullProfileLoadedTimestamp,
            children: (0, r.jsx)(y.NJ, {
                value: en,
                children: (0, r.jsxs)(s.VqE, {
                    ref: $,
                    'aria-label': t.username,
                    children: [
                        (0, r.jsxs)(S.Z, {
                            user: t,
                            displayProfile: ee,
                            profileType: L.y0.BITE_SIZE,
                            children: [
                                null != en.interactionType &&
                                    (0, r.jsx)(o.animated.div, {
                                        style: er,
                                        className: k.backdrop
                                    }),
                                (0, r.jsxs)(T.Z, {
                                    profileType: L.y0.BITE_SIZE,
                                    children: [
                                        (0, r.jsx)(A.Z, {
                                            shouldShowTooltip: null === en.interactionType,
                                            user: t,
                                            guildId: j,
                                            channelId: G,
                                            onClose: Z,
                                            appContext: K
                                        }),
                                        (0, r.jsx)(N.Z, {
                                            shouldShowTooltip: null === en.interactionType,
                                            profileType: L.y0.BITE_SIZE,
                                            user: t
                                        }),
                                        t.id !== n.id &&
                                            (0, r.jsx)(C.Z, {
                                                user: t,
                                                guildId: j,
                                                viewProfileItem: es(),
                                                appContext: K
                                            })
                                    ]
                                }),
                                (0, r.jsxs)('header', {
                                    className: k.header,
                                    children: [
                                        (0, r.jsx)(O.Z, {
                                            user: t,
                                            displayProfile: ee,
                                            guildId: j,
                                            profileType: L.y0.BITE_SIZE
                                        }),
                                        (0, r.jsx)(I.Z, {
                                            userId: t.id,
                                            className: k.toast,
                                            onClose: Z
                                        }),
                                        (0, r.jsx)(v.Z, {
                                            location: 'UserProfilePopout',
                                            user: t,
                                            displayProfile: ee,
                                            guildId: j,
                                            channelId: G,
                                            profileType: L.y0.BITE_SIZE,
                                            onOpenProfile: W ? void 0 : ea
                                        }),
                                        (0, r.jsx)(R.Z, {
                                            location: 'UserProfilePopout',
                                            user: t,
                                            guildId: j,
                                            channelId: G,
                                            profileType: L.y0.BITE_SIZE,
                                            onCloseProfile: Z,
                                            prompt: ei ? eo : null
                                        })
                                    ]
                                }),
                                (0, r.jsx)(w.Z, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: ee,
                                    guild: Q,
                                    isHovering: null == en.interactionType && et,
                                    onOpenProfile: W ? void 0 : ea,
                                    channelId: G,
                                    onClose: Z
                                }),
                                (0, r.jsx)(D.Z, {
                                    user: t,
                                    guildId: j,
                                    channelId: G,
                                    onClose: Z,
                                    appContext: K
                                })
                            ]
                        }),
                        (null == ee ? void 0 : ee.profileEffectId) != null &&
                            (0, r.jsx)(p.Z, {
                                profileEffectId: null == ee ? void 0 : ee.profileEffectId,
                                isHovering: et
                            })
                    ]
                })
            })
        })
    });
}
