n.d(t, { Z: () => z }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(803948),
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
    C = n(510659),
    N = n(892001),
    R = n(113557),
    P = n(867176),
    w = n(451834),
    D = n(502762),
    x = n(544989),
    L = n(481932),
    j = n(195387),
    M = n(664794),
    k = n(4517),
    U = n(978395),
    G = n(161572),
    B = n(671955),
    Z = n(388032),
    V = n(116649);
function F(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function H(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                F(e, t, n[t]);
            });
    }
    return e;
}
function Y(e, t) {
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
    let {
            user: t,
            currentUser: n,
            guildId: F,
            channelId: Y,
            messageId: z,
            roleId: q,
            openedAt: X,
            closePopout: Q,
            setPopoutRef: J,
            disableUserProfileLink: $ = __OVERLAY__,
            newAnalyticsLocations: ee = [],
            appContext: et,
            disableAutoFocus: en = !1,
        } = e,
        { analyticsLocations: er } = (0, _.ZP)([...ee, f.Z.USER_PROFILE_POPOUT]),
        ei = (0, T.ZB)({
            layout: "POPOUT",
            userId: t.id,
            guildId: F,
            channelId: Y,
            messageId: z,
            roleId: q,
        }),
        ea = (0, o.e7)([v.Z], () => (null != F ? v.Z.getGuild(F) : null)),
        eo = i.useMemo(() => (null != F ? { [F]: [t.id] } : {}), [F, t.id]);
    (0, d.$)(eo);
    let es = i.useRef(null),
        el = (0, A.ZP)(t.id, F),
        ec = (0, c.Z)(es),
        eu = (0, C.$m)(),
        ed = (0, l.q_F)({
            opacity: +(null != eu.interactionType),
            config: { duration: 150 },
        });
    i.useEffect(() => {
        null == J || J(null == es ? void 0 : es.current);
    }, [es, J]);
    let ef = i.useRef(null),
        [e_, ep] = i.useState(String(Date.now())),
        [eh, em] = i.useState(!1);
    (0, u.Z)(() => {
        em(!0);
    }, K),
        (0, O.fu)({
            targetElementRef: ef,
            onGetElementDimensionsAndBoundingRect: (e) => {
                let { hasElementPositionChanged: t } = e;
                t && ep(String(Date.now()));
            },
        });
    let eg = (0, h.Z)({ location: "UserProfilePopout" }),
        eE = t.id === n.id,
        [eb, ey] = (0, b.US)(eg && eE ? [s.z.CUSTOM_STATUS_PROMPTS_COACHMARK] : []),
        eO = eb === s.z.CUSTOM_STATUS_PROMPTS_COACHMARK,
        ev = (0, m.p)({ location: "UserProfilePopout" }),
        eI = i.useMemo(() => (0, g.Z)(), []),
        eT = (e) => {
            null == Q || Q(),
                (0, N.openUserProfileModal)(
                    W(
                        H(
                            {
                                sourceAnalyticsLocations: er,
                                hideRestrictedProfile: !0,
                                customStatusPrompt: eI,
                            },
                            ei,
                            e,
                        ),
                        { appContext: et },
                    ),
                );
        },
        eS = () =>
            $
                ? null
                : (0, r.jsx)(l.sNh, {
                      id: "view-profile",
                      label: Z.intl.string(Z.t["+Xp3ho"]),
                      action: () => {
                          eT(),
                              (0, S.pQ)(
                                  H(
                                      {
                                          action: "PRESS_VIEW_PROFILE",
                                          analyticsLocations: er,
                                      },
                                      ei,
                                  ),
                              );
                      },
                  }),
        eA = en ? "div" : l.VqE,
        eC = (0, p.Dt)(),
        eN = I.ZP.useName(null == ea ? void 0 : ea.id, Y, t);
    return (0, r.jsx)(_.Gt, {
        value: er,
        children: (0, r.jsx)(T.Mt, {
            value: ei,
            openedAt: X,
            fetchStartedAt: null == el ? void 0 : el.fetchStartedAt,
            fetchEndedAt: null == el ? void 0 : el.fetchEndedAt,
            isLoaded: null == el ? void 0 : el.isLoaded,
            children: (0, r.jsx)(C.NJ, {
                value: eu,
                children: (0, r.jsxs)(eA, {
                    ref: es,
                    "aria-labelledby": eC,
                    children: [
                        (0, r.jsx)(l.nn4, {
                            children: (0, r.jsx)(l.H, {
                                id: eC,
                                children: Z.intl.format(Z.t.KRe1Fh, { name: eN }),
                            }),
                        }),
                        (0, r.jsxs)(D.Z, {
                            user: t,
                            displayProfile: el,
                            themeType: B.l.POPOUT,
                            children: [
                                null != eu.interactionType &&
                                    (0, r.jsx)(a.animated.div, {
                                        style: ed,
                                        className: V.backdrop,
                                    }),
                                (0, r.jsxs)(x.Z, {
                                    children: [
                                        (0, r.jsx)(j.Z, {
                                            shouldShowTooltip: null === eu.interactionType,
                                            user: t,
                                            guildId: F,
                                            channelId: Y,
                                            onClose: Q,
                                            appContext: et,
                                        }),
                                        (0, r.jsx)(L.Z, {
                                            shouldShowTooltip: null === eu.interactionType,
                                            themeType: B.l.POPOUT,
                                            user: t,
                                        }),
                                        !eE &&
                                            (0, r.jsx)(M.Z, {
                                                type: "banner",
                                                user: t,
                                                guildId: F,
                                                viewProfileItem: eS(),
                                                appContext: et,
                                            }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: V.header,
                                    children: [
                                        (0, r.jsx)(P.Z, {
                                            user: t,
                                            displayProfile: el,
                                            guildId: F,
                                            themeType: B.l.POPOUT,
                                        }),
                                        (0, r.jsx)(w.Z, {
                                            userId: t.id,
                                            className: V.toast,
                                            onClose: Q,
                                        }),
                                        (0, r.jsx)(R.Z, {
                                            location: "UserProfilePopout",
                                            user: t,
                                            displayProfile: el,
                                            guildId: F,
                                            channelId: Y,
                                            themeType: B.l.POPOUT,
                                            onOpenProfile: $ ? void 0 : eT,
                                        }),
                                        eO && eh
                                            ? (0, r.jsx)(E.Z, {
                                                  positionKey: e_,
                                                  markAsDismissed: ey,
                                                  targetElementRef: ef,
                                                  onTryFeature: Q,
                                                  children: () =>
                                                      (0, r.jsx)(k.Z, {
                                                          ref: ef,
                                                          location: "UserProfilePopout",
                                                          user: t,
                                                          guildId: F,
                                                          channelId: Y,
                                                          themeType: B.l.POPOUT,
                                                          onCloseProfile: Q,
                                                          prompt: eI,
                                                      }),
                                              })
                                            : (0, r.jsx)(k.Z, {
                                                  ref: eO ? ef : void 0,
                                                  location: "UserProfilePopout",
                                                  user: t,
                                                  guildId: F,
                                                  channelId: Y,
                                                  themeType: B.l.POPOUT,
                                                  onCloseProfile: Q,
                                                  prompt: ev ? eI : null,
                                              }),
                                    ],
                                }),
                                (0, r.jsx)(U.Z, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: el,
                                    guild: ea,
                                    isHovering: null == eu.interactionType && ec,
                                    onOpenProfile: $ ? void 0 : eT,
                                    channelId: Y,
                                    onClose: Q,
                                }),
                                (0, r.jsx)(G.Z, {
                                    user: t,
                                    guildId: F,
                                    channelId: Y,
                                    onClose: Q,
                                    appContext: et,
                                    disableAutoFocus: en,
                                }),
                                (null == el ? void 0 : el.profileEffectId) != null &&
                                    (0, r.jsx)(y.Z, {
                                        profileEffectId: null == el ? void 0 : el.profileEffectId,
                                        isHovering: ec,
                                    }),
                            ],
                        }),
                    ],
                }),
            }),
        }),
    });
}
