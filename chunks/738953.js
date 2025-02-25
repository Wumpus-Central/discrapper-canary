n.d(t, { Z: () => G }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(642128),
    a = n(442837),
    s = n(481060),
    l = n(727637),
    c = n(616780),
    u = n(100527),
    d = n(906732),
    f = n(680295),
    p = n(271383),
    _ = n(430824),
    h = n(785717),
    m = n(221292),
    g = n(687158),
    E = n(510659),
    v = n(113557),
    b = n(867176),
    y = n(451834),
    O = n(502762),
    S = n(544989),
    I = n(481932),
    T = n(195387),
    N = n(272510),
    A = n(4517),
    C = n(171368),
    R = n(978395),
    P = n(161572),
    D = n(228168),
    w = n(981631),
    L = n(388032),
    x = n(913340);
function M(e, t, n) {
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
                M(e, t, n[t]);
            });
    }
    return e;
}
function k(e, t) {
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
            : k(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function G(e) {
    let { user: t, currentUser: n, guildId: M, channelId: k, messageId: G, roleId: B, closePopout: F, setPopoutRef: V, disableUserProfileLink: Z = __OVERLAY__, newAnalyticsLocations: H = [], appContext: W = w.IlC.APP } = e,
        { analyticsLocations: Y } = (0, d.ZP)([...H, u.Z.BITE_SIZE_PROFILE_POPOUT]),
        K = (0, h.ZB)({
            layout: 'BITE_SIZE_POPOUT',
            userId: t.id,
            guildId: M,
            channelId: k,
            messageId: G,
            roleId: B
        }),
        z = (0, a.e7)([_.Z], () => (null != M ? _.Z.getGuild(M) : null)),
        q = (0, a.e7)([p.ZP], () => (null != M ? p.ZP.getMember(M, t.id) : null)),
        Q = i.useMemo(() => (null != M ? { [M]: [t.id] } : {}), [M, t.id]);
    (0, c.$)(Q);
    let X = i.useRef(null),
        J = (0, g.ZP)(t.id, M),
        $ = (0, l.Z)(X),
        ee = (0, E.$m)(),
        et = (0, s.q_F)({
            opacity: +(null != ee.interactionType),
            config: { duration: 150 }
        });
    i.useEffect(() => {
        null == V || V(null == X ? void 0 : X.current);
    }, [X, V]);
    let en = (e) => {
            null == F || F(), (0, C.openUserProfileModal)(U(j({ sourceAnalyticsLocations: Y }, K, e), { appContext: W }));
        },
        er = () =>
            Z
                ? null
                : (0, r.jsx)(s.sNh, {
                      id: 'view-profile',
                      label: L.NW.string(L.t['+Xp3ho']),
                      action: () => {
                          en(),
                              (0, m.pQ)(
                                  j(
                                      {
                                          action: 'PRESS_VIEW_PROFILE',
                                          analyticsLocations: Y
                                      },
                                      K
                                  )
                              );
                      }
                  });
    return (0, r.jsx)(d.Gt, {
        value: Y,
        children: (0, r.jsx)(h.Mt, {
            value: K,
            shouldTrackViewOnMount: null == q || null != q.fullProfileLoadedTimestamp,
            children: (0, r.jsx)(E.NJ, {
                value: ee,
                children: (0, r.jsxs)(s.VqE, {
                    ref: X,
                    'aria-label': t.username,
                    children: [
                        (0, r.jsxs)(O.Z, {
                            user: t,
                            displayProfile: J,
                            profileType: D.y0.BITE_SIZE,
                            children: [
                                null != ee.interactionType &&
                                    (0, r.jsx)(o.animated.div, {
                                        style: et,
                                        className: x.backdrop
                                    }),
                                (0, r.jsxs)(S.Z, {
                                    profileType: D.y0.BITE_SIZE,
                                    children: [
                                        (0, r.jsx)(T.Z, {
                                            shouldShowTooltip: null === ee.interactionType,
                                            user: t,
                                            guildId: M,
                                            channelId: k,
                                            onClose: F,
                                            appContext: W
                                        }),
                                        (0, r.jsx)(I.Z, {
                                            shouldShowTooltip: null === ee.interactionType,
                                            profileType: D.y0.BITE_SIZE,
                                            user: t
                                        }),
                                        t.id !== n.id &&
                                            (0, r.jsx)(N.Z, {
                                                user: t,
                                                guildId: M,
                                                viewProfileItem: er(),
                                                appContext: W
                                            })
                                    ]
                                }),
                                (0, r.jsxs)('header', {
                                    className: x.header,
                                    children: [
                                        (0, r.jsx)(b.Z, {
                                            user: t,
                                            displayProfile: J,
                                            guildId: M,
                                            profileType: D.y0.BITE_SIZE
                                        }),
                                        (0, r.jsx)(y.Z, {
                                            userId: t.id,
                                            className: x.toast,
                                            onClose: F
                                        }),
                                        (0, r.jsx)(v.Z, {
                                            location: 'UserProfilePopout',
                                            user: t,
                                            displayProfile: J,
                                            guildId: M,
                                            channelId: k,
                                            profileType: D.y0.BITE_SIZE,
                                            onOpenProfile: Z ? void 0 : en
                                        }),
                                        (0, r.jsx)(A.Z, {
                                            location: 'UserProfilePopout',
                                            user: t,
                                            guildId: M,
                                            channelId: k,
                                            profileType: D.y0.BITE_SIZE,
                                            onCloseProfile: F
                                        })
                                    ]
                                }),
                                (0, r.jsx)(R.Z, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: J,
                                    guild: z,
                                    isHovering: null == ee.interactionType && $,
                                    onOpenProfile: Z ? void 0 : en,
                                    channelId: k,
                                    onClose: F
                                }),
                                (0, r.jsx)(P.Z, {
                                    user: t,
                                    guildId: M,
                                    channelId: k,
                                    onClose: F,
                                    appContext: W
                                })
                            ]
                        }),
                        (null == J ? void 0 : J.profileEffectId) != null &&
                            (0, r.jsx)(f.Z, {
                                profileEffectId: null == J ? void 0 : J.profileEffectId,
                                isHovering: $
                            })
                    ]
                })
            })
        })
    });
}
