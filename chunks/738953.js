(n.d(t, { Z: () => W }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(695469),
    o = n(442837),
    s = n(704215),
    l = n(481060),
    c = n(727637),
    u = n(980591),
    d = n(616780),
    f = n(100527),
    _ = n(906732),
    p = n(359588),
    h = n(368326),
    m = n(429467),
    g = n(526031),
    E = n(243778),
    b = n(680295),
    y = n(622562),
    O = n(430824),
    v = n(785717),
    I = n(221292),
    T = n(687158),
    S = n(510659),
    A = n(892001),
    N = n(113557),
    C = n(867176),
    R = n(451834),
    P = n(502762),
    w = n(544989),
    D = n(481932),
    L = n(195387),
    x = n(664794),
    k = n(4517),
    M = n(978395),
    j = n(161572),
    U = n(228168),
    G = n(388032),
    B = n(200669);
function V(e, t, n) {
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
function F(e) {
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
                V(e, t, n[t]);
            }));
    }
    return e;
}
function Z(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function H(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Z(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let Y = 200;
function W(e) {
    let { user: t, currentUser: n, guildId: V, channelId: Z, messageId: W, roleId: K, openedAt: z, closePopout: q, setPopoutRef: X, disableUserProfileLink: Q = __OVERLAY__, newAnalyticsLocations: J = [], appContext: $, disableAutoFocus: ee = !1 } = e,
        { analyticsLocations: et } = (0, _.ZP)([...J, f.Z.USER_PROFILE_POPOUT]),
        en = (0, v.ZB)({
            layout: 'POPOUT',
            userId: t.id,
            guildId: V,
            channelId: Z,
            messageId: W,
            roleId: K
        }),
        er = (0, o.e7)([O.Z], () => (null != V ? O.Z.getGuild(V) : null)),
        ei = i.useMemo(() => (null != V ? { [V]: [t.id] } : {}), [V, t.id]);
    (0, d.$)(ei);
    let ea = i.useRef(null),
        eo = (0, T.ZP)(t.id, V),
        es = (0, c.Z)(ea),
        el = (0, S.$m)(),
        ec = (0, l.q_F)({
            opacity: +(null != el.interactionType),
            config: { duration: 150 }
        });
    i.useEffect(() => {
        null == X || X(null == ea ? void 0 : ea.current);
    }, [ea, X]);
    let eu = i.useRef(null),
        [ed, ef] = i.useState(String(Date.now())),
        [e_, ep] = i.useState(!1);
    ((0, u.Z)(() => {
        ep(!0);
    }, Y),
        (0, y.fu)({
            targetElementRef: eu,
            onGetElementDimensionsAndBoundingRect: (e) => {
                let { hasElementPositionChanged: t } = e;
                t && ef(String(Date.now()));
            }
        }));
    let eh = (0, p.Z)({ location: 'UserProfilePopout' }),
        em = t.id === n.id,
        [eg, eE] = (0, E.US)(eh && em ? [s.z.CUSTOM_STATUS_PROMPTS_COACHMARK] : []),
        eb = eg === s.z.CUSTOM_STATUS_PROMPTS_COACHMARK,
        ey = (0, h.p)({ location: 'UserProfilePopout' }),
        eO = i.useMemo(() => (0, m.Z)(), []),
        ev = (e) => {
            (null == q || q(),
                (0, A.openUserProfileModal)(
                    H(
                        F(
                            {
                                sourceAnalyticsLocations: et,
                                hideRestrictedProfile: !0,
                                customStatusPrompt: eO
                            },
                            en,
                            e
                        ),
                        { appContext: $ }
                    )
                ));
        },
        eI = () =>
            Q
                ? null
                : (0, r.jsx)(l.sNh, {
                      id: 'view-profile',
                      label: G.intl.string(G.t['+Xp3ho']),
                      action: () => {
                          (ev(),
                              (0, I.pQ)(
                                  F(
                                      {
                                          action: 'PRESS_VIEW_PROFILE',
                                          analyticsLocations: et
                                      },
                                      en
                                  )
                              ));
                      }
                  }),
        eT = ee ? 'div' : l.VqE;
    return (0, r.jsx)(_.Gt, {
        value: et,
        children: (0, r.jsx)(v.Mt, {
            value: en,
            openedAt: z,
            fetchStartedAt: null == eo ? void 0 : eo.fetchStartedAt,
            fetchEndedAt: null == eo ? void 0 : eo.fetchEndedAt,
            isLoaded: null == eo ? void 0 : eo.isLoaded,
            children: (0, r.jsx)(S.NJ, {
                value: el,
                children: (0, r.jsxs)(eT, {
                    ref: ea,
                    'aria-label': t.username,
                    children: [
                        (0, r.jsxs)(P.Z, {
                            user: t,
                            displayProfile: eo,
                            themeType: U.lY.POPOUT,
                            children: [
                                null != el.interactionType &&
                                    (0, r.jsx)(a.animated.div, {
                                        style: ec,
                                        className: B.backdrop
                                    }),
                                (0, r.jsxs)(w.Z, {
                                    children: [
                                        (0, r.jsx)(L.Z, {
                                            shouldShowTooltip: null === el.interactionType,
                                            user: t,
                                            guildId: V,
                                            channelId: Z,
                                            onClose: q,
                                            appContext: $
                                        }),
                                        (0, r.jsx)(D.Z, {
                                            shouldShowTooltip: null === el.interactionType,
                                            themeType: U.lY.POPOUT,
                                            user: t
                                        }),
                                        !em &&
                                            (0, r.jsx)(x.Z, {
                                                type: 'banner',
                                                user: t,
                                                guildId: V,
                                                viewProfileItem: eI(),
                                                appContext: $
                                            })
                                    ]
                                }),
                                (0, r.jsxs)('header', {
                                    className: B.header,
                                    children: [
                                        (0, r.jsx)(C.Z, {
                                            user: t,
                                            displayProfile: eo,
                                            guildId: V,
                                            themeType: U.lY.POPOUT
                                        }),
                                        (0, r.jsx)(R.Z, {
                                            userId: t.id,
                                            className: B.toast,
                                            onClose: q
                                        }),
                                        (0, r.jsx)(N.Z, {
                                            location: 'UserProfilePopout',
                                            user: t,
                                            displayProfile: eo,
                                            guildId: V,
                                            channelId: Z,
                                            themeType: U.lY.POPOUT,
                                            onOpenProfile: Q ? void 0 : ev
                                        }),
                                        eb && e_
                                            ? (0, r.jsx)(g.Z, {
                                                  positionKey: ed,
                                                  markAsDismissed: eE,
                                                  targetElementRef: eu,
                                                  onTryFeature: q,
                                                  children: () =>
                                                      (0, r.jsx)(k.Z, {
                                                          ref: eu,
                                                          location: 'UserProfilePopout',
                                                          user: t,
                                                          guildId: V,
                                                          channelId: Z,
                                                          themeType: U.lY.POPOUT,
                                                          onCloseProfile: q,
                                                          prompt: eO
                                                      })
                                              })
                                            : (0, r.jsx)(k.Z, {
                                                  ref: eb ? eu : void 0,
                                                  location: 'UserProfilePopout',
                                                  user: t,
                                                  guildId: V,
                                                  channelId: Z,
                                                  themeType: U.lY.POPOUT,
                                                  onCloseProfile: q,
                                                  prompt: ey ? eO : null
                                              })
                                    ]
                                }),
                                (0, r.jsx)(M.Z, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: eo,
                                    guild: er,
                                    isHovering: null == el.interactionType && es,
                                    onOpenProfile: Q ? void 0 : ev,
                                    channelId: Z,
                                    onClose: q
                                }),
                                (0, r.jsx)(j.Z, {
                                    user: t,
                                    guildId: V,
                                    channelId: Z,
                                    onClose: q,
                                    appContext: $,
                                    disableAutoFocus: ee
                                })
                            ]
                        }),
                        (null == eo ? void 0 : eo.profileEffectId) != null &&
                            (0, r.jsx)(b.Z, {
                                profileEffectId: null == eo ? void 0 : eo.profileEffectId,
                                isHovering: es
                            })
                    ]
                })
            })
        })
    });
}
