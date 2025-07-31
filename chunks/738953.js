(n.d(t, { Z: () => z }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(855659),
    o = n(442837),
    s = n(704215),
    l = n(481060),
    c = n(727637),
    u = n(980591),
    d = n(616780),
    f = n(100527),
    _ = n(906732),
    p = n(313201),
    h = n(359588),
    m = n(368326),
    g = n(429467),
    E = n(526031),
    b = n(243778),
    y = n(680295),
    O = n(622562),
    v = n(430824),
    I = n(5192),
    T = n(785717),
    S = n(221292),
    A = n(687158),
    N = n(510659),
    C = n(892001),
    R = n(113557),
    P = n(867176),
    w = n(451834),
    D = n(502762),
    L = n(544989),
    x = n(481932),
    M = n(195387),
    k = n(664794),
    j = n(4517),
    U = n(978395),
    G = n(161572),
    B = n(228168),
    V = n(388032),
    F = n(200669);
function Z(e, t, n) {
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
function H(e) {
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
                Z(e, t, n[t]);
            }));
    }
    return e;
}
function Y(e, t) {
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
function W(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let K = 200;
function z(e) {
    let { user: t, currentUser: n, guildId: Z, channelId: Y, messageId: z, roleId: q, openedAt: X, closePopout: Q, setPopoutRef: J, disableUserProfileLink: $ = __OVERLAY__, newAnalyticsLocations: ee = [], appContext: et, disableAutoFocus: en = !1 } = e,
        { analyticsLocations: er } = (0, _.ZP)([...ee, f.Z.USER_PROFILE_POPOUT]),
        ei = (0, T.ZB)({
            layout: 'POPOUT',
            userId: t.id,
            guildId: Z,
            channelId: Y,
            messageId: z,
            roleId: q
        }),
        ea = (0, o.e7)([v.Z], () => (null != Z ? v.Z.getGuild(Z) : null)),
        eo = i.useMemo(() => (null != Z ? { [Z]: [t.id] } : {}), [Z, t.id]);
    (0, d.$)(eo);
    let es = i.useRef(null),
        el = (0, A.ZP)(t.id, Z),
        ec = (0, c.Z)(es),
        eu = (0, N.$m)(),
        ed = (0, l.q_F)({
            opacity: +(null != eu.interactionType),
            config: { duration: 150 }
        });
    i.useEffect(() => {
        null == J || J(null == es ? void 0 : es.current);
    }, [es, J]);
    let ef = i.useRef(null),
        [e_, ep] = i.useState(String(Date.now())),
        [eh, em] = i.useState(!1);
    ((0, u.Z)(() => {
        em(!0);
    }, K),
        (0, O.fu)({
            targetElementRef: ef,
            onGetElementDimensionsAndBoundingRect: (e) => {
                let { hasElementPositionChanged: t } = e;
                t && ep(String(Date.now()));
            }
        }));
    let eg = (0, h.Z)({ location: 'UserProfilePopout' }),
        eE = t.id === n.id,
        [eb, ey] = (0, b.US)(eg && eE ? [s.z.CUSTOM_STATUS_PROMPTS_COACHMARK] : []),
        eO = eb === s.z.CUSTOM_STATUS_PROMPTS_COACHMARK,
        ev = (0, m.p)({ location: 'UserProfilePopout' }),
        eI = i.useMemo(() => (0, g.Z)(), []),
        eT = (e) => {
            (null == Q || Q(),
                (0, C.openUserProfileModal)(
                    W(
                        H(
                            {
                                sourceAnalyticsLocations: er,
                                hideRestrictedProfile: !0,
                                customStatusPrompt: eI
                            },
                            ei,
                            e
                        ),
                        { appContext: et }
                    )
                ));
        },
        eS = () =>
            $
                ? null
                : (0, r.jsx)(l.sNh, {
                      id: 'view-profile',
                      label: V.intl.string(V.t['+Xp3ho']),
                      action: () => {
                          (eT(),
                              (0, S.pQ)(
                                  H(
                                      {
                                          action: 'PRESS_VIEW_PROFILE',
                                          analyticsLocations: er
                                      },
                                      ei
                                  )
                              ));
                      }
                  }),
        eA = en ? 'div' : l.VqE,
        eN = (0, p.Dt)(),
        eC = I.ZP.useName(null == ea ? void 0 : ea.id, Y, t);
    return (0, r.jsx)(_.Gt, {
        value: er,
        children: (0, r.jsx)(T.Mt, {
            value: ei,
            openedAt: X,
            fetchStartedAt: null == el ? void 0 : el.fetchStartedAt,
            fetchEndedAt: null == el ? void 0 : el.fetchEndedAt,
            isLoaded: null == el ? void 0 : el.isLoaded,
            children: (0, r.jsx)(N.NJ, {
                value: eu,
                children: (0, r.jsxs)(eA, {
                    ref: es,
                    'aria-labelledby': eN,
                    children: [
                        (0, r.jsx)(l.nn4, {
                            children: (0, r.jsx)(l.H, {
                                id: eN,
                                children: V.intl.format(V.t.KRe1Fh, { name: eC })
                            })
                        }),
                        (0, r.jsxs)(D.Z, {
                            user: t,
                            displayProfile: el,
                            themeType: B.lY.POPOUT,
                            children: [
                                null != eu.interactionType &&
                                    (0, r.jsx)(a.animated.div, {
                                        style: ed,
                                        className: F.backdrop
                                    }),
                                (0, r.jsxs)(L.Z, {
                                    children: [
                                        (0, r.jsx)(M.Z, {
                                            shouldShowTooltip: null === eu.interactionType,
                                            user: t,
                                            guildId: Z,
                                            channelId: Y,
                                            onClose: Q,
                                            appContext: et
                                        }),
                                        (0, r.jsx)(x.Z, {
                                            shouldShowTooltip: null === eu.interactionType,
                                            themeType: B.lY.POPOUT,
                                            user: t
                                        }),
                                        !eE &&
                                            (0, r.jsx)(k.Z, {
                                                type: 'banner',
                                                user: t,
                                                guildId: Z,
                                                viewProfileItem: eS(),
                                                appContext: et
                                            })
                                    ]
                                }),
                                (0, r.jsxs)('div', {
                                    className: F.header,
                                    children: [
                                        (0, r.jsx)(P.Z, {
                                            user: t,
                                            displayProfile: el,
                                            guildId: Z,
                                            themeType: B.lY.POPOUT
                                        }),
                                        (0, r.jsx)(w.Z, {
                                            userId: t.id,
                                            className: F.toast,
                                            onClose: Q
                                        }),
                                        (0, r.jsx)(R.Z, {
                                            location: 'UserProfilePopout',
                                            user: t,
                                            displayProfile: el,
                                            guildId: Z,
                                            channelId: Y,
                                            themeType: B.lY.POPOUT,
                                            onOpenProfile: $ ? void 0 : eT
                                        }),
                                        eO && eh
                                            ? (0, r.jsx)(E.Z, {
                                                  positionKey: e_,
                                                  markAsDismissed: ey,
                                                  targetElementRef: ef,
                                                  onTryFeature: Q,
                                                  children: () =>
                                                      (0, r.jsx)(j.Z, {
                                                          ref: ef,
                                                          location: 'UserProfilePopout',
                                                          user: t,
                                                          guildId: Z,
                                                          channelId: Y,
                                                          themeType: B.lY.POPOUT,
                                                          onCloseProfile: Q,
                                                          prompt: eI
                                                      })
                                              })
                                            : (0, r.jsx)(j.Z, {
                                                  ref: eO ? ef : void 0,
                                                  location: 'UserProfilePopout',
                                                  user: t,
                                                  guildId: Z,
                                                  channelId: Y,
                                                  themeType: B.lY.POPOUT,
                                                  onCloseProfile: Q,
                                                  prompt: ev ? eI : null
                                              })
                                    ]
                                }),
                                (0, r.jsx)(U.Z, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: el,
                                    guild: ea,
                                    isHovering: null == eu.interactionType && ec,
                                    onOpenProfile: $ ? void 0 : eT,
                                    channelId: Y,
                                    onClose: Q
                                }),
                                (0, r.jsx)(G.Z, {
                                    user: t,
                                    guildId: Z,
                                    channelId: Y,
                                    onClose: Q,
                                    appContext: et,
                                    disableAutoFocus: en
                                })
                            ]
                        }),
                        (null == el ? void 0 : el.profileEffectId) != null &&
                            (0, r.jsx)(y.Z, {
                                profileEffectId: null == el ? void 0 : el.profileEffectId,
                                isHovering: ec
                            })
                    ]
                })
            })
        })
    });
}
