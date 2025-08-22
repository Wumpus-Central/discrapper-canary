n.d(t, { Z: () => z }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(202841),
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
    var t;
    let {
            user: n,
            currentUser: F,
            guildId: Y,
            channelId: z,
            messageId: q,
            roleId: X,
            openedAt: Q,
            closePopout: J,
            setPopoutRef: $,
            disableUserProfileLink: ee = __OVERLAY__,
            newAnalyticsLocations: et = [],
            appContext: en,
            disableAutoFocus: er = !1,
        } = e,
        { analyticsLocations: ei } = (0, _.ZP)([...et, f.Z.USER_PROFILE_POPOUT]),
        ea = (0, T.ZB)({
            layout: "POPOUT",
            userId: n.id,
            guildId: Y,
            channelId: z,
            messageId: q,
            roleId: X,
        }),
        eo = (0, o.e7)([v.Z], () => (null != Y ? v.Z.getGuild(Y) : null)),
        es = i.useMemo(() => (null != Y ? { [Y]: [n.id] } : {}), [Y, n.id]);
    (0, d.$)(es);
    let el = i.useRef(null),
        ec = (0, A.ZP)(n.id, Y),
        eu = (0, c.Z)(el),
        ed = (0, C.$m)(),
        ef = (0, l.q_F)({
            opacity: +(null != ed.interactionType),
            config: { duration: 150 },
        });
    i.useEffect(() => {
        null == $ || $(null == el ? void 0 : el.current);
    }, [el, $]);
    let e_ = i.useRef(null),
        [ep, eh] = i.useState(String(Date.now())),
        [em, eg] = i.useState(!1);
    (0, u.Z)(() => {
        eg(!0);
    }, K),
        (0, O.fu)({
            targetElementRef: e_,
            onGetElementDimensionsAndBoundingRect: (e) => {
                let { hasElementPositionChanged: t } = e;
                t && eh(String(Date.now()));
            },
        });
    let eE = (0, h.Z)({ location: "UserProfilePopout" }),
        eb = n.id === F.id,
        [ey, eO] = (0, b.US)(eE && eb ? [s.z.CUSTOM_STATUS_PROMPTS_COACHMARK] : []),
        ev = ey === s.z.CUSTOM_STATUS_PROMPTS_COACHMARK,
        eI = (0, m.p)({ location: "UserProfilePopout" }),
        eT = i.useMemo(() => (0, g.Z)(), []),
        eS = (e) => {
            null == J || J(),
                (0, N.openUserProfileModal)(
                    W(
                        H(
                            {
                                sourceAnalyticsLocations: ei,
                                hideRestrictedProfile: !0,
                                customStatusPrompt: eT,
                            },
                            ea,
                            e,
                        ),
                        { appContext: en },
                    ),
                );
        },
        eA = () =>
            ee
                ? null
                : (0, r.jsx)(l.sNh, {
                      id: "view-profile",
                      label: Z.intl.string(Z.t["+Xp3ho"]),
                      action: () => {
                          eS(),
                              (0, S.pQ)(
                                  H(
                                      {
                                          action: "PRESS_VIEW_PROFILE",
                                          analyticsLocations: ei,
                                      },
                                      ea,
                                  ),
                              );
                      },
                  }),
        eC = er ? "div" : l.VqE,
        eN = (0, p.Dt)(),
        eR = I.ZP.useName(null == eo ? void 0 : eo.id, z, n);
    return (0, r.jsx)(_.Gt, {
        value: ei,
        children: (0, r.jsx)(T.Mt, {
            value: ea,
            openedAt: Q,
            fetchStartedAt: null == ec ? void 0 : ec.fetchStartedAt,
            fetchEndedAt: null == ec ? void 0 : ec.fetchEndedAt,
            isLoaded: null == ec ? void 0 : ec.isLoaded,
            children: (0, r.jsx)(C.NJ, {
                value: ed,
                children: (0, r.jsxs)(eC, {
                    ref: el,
                    "aria-labelledby": eN,
                    children: [
                        (0, r.jsx)(l.nn4, {
                            children: (0, r.jsx)(l.H, {
                                id: eN,
                                children: Z.intl.format(Z.t.KRe1Fh, { name: eR }),
                            }),
                        }),
                        (0, r.jsxs)(D.Z, {
                            user: n,
                            displayProfile: ec,
                            themeType: B.l.POPOUT,
                            children: [
                                null != ed.interactionType &&
                                    (0, r.jsx)(a.animated.div, {
                                        style: ef,
                                        className: V.backdrop,
                                    }),
                                (0, r.jsxs)(x.Z, {
                                    children: [
                                        (0, r.jsx)(j.Z, {
                                            shouldShowTooltip: null === ed.interactionType,
                                            user: n,
                                            guildId: Y,
                                            channelId: z,
                                            onClose: J,
                                            appContext: en,
                                        }),
                                        (0, r.jsx)(L.Z, {
                                            shouldShowTooltip: null === ed.interactionType,
                                            themeType: B.l.POPOUT,
                                            user: n,
                                        }),
                                        !eb &&
                                            (0, r.jsx)(M.Z, {
                                                type: "banner",
                                                user: n,
                                                guildId: Y,
                                                viewProfileItem: eA(),
                                                appContext: en,
                                            }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: V.header,
                                    children: [
                                        (0, r.jsx)(P.Z, {
                                            user: n,
                                            displayProfile: ec,
                                            guildId: Y,
                                            themeType: B.l.POPOUT,
                                        }),
                                        (0, r.jsx)(w.Z, {
                                            userId: n.id,
                                            className: V.toast,
                                            onClose: J,
                                        }),
                                        (0, r.jsx)(R.Z, {
                                            location: "UserProfilePopout",
                                            user: n,
                                            displayProfile: ec,
                                            guildId: Y,
                                            channelId: z,
                                            themeType: B.l.POPOUT,
                                            onOpenProfile: ee ? void 0 : eS,
                                        }),
                                        ev && em
                                            ? (0, r.jsx)(E.Z, {
                                                  positionKey: ep,
                                                  markAsDismissed: eO,
                                                  targetElementRef: e_,
                                                  onTryFeature: J,
                                                  children: () =>
                                                      (0, r.jsx)(k.Z, {
                                                          ref: e_,
                                                          location: "UserProfilePopout",
                                                          user: n,
                                                          guildId: Y,
                                                          channelId: z,
                                                          themeType: B.l.POPOUT,
                                                          onCloseProfile: J,
                                                          prompt: eT,
                                                      }),
                                              })
                                            : (0, r.jsx)(k.Z, {
                                                  ref: ev ? e_ : void 0,
                                                  location: "UserProfilePopout",
                                                  user: n,
                                                  guildId: Y,
                                                  channelId: z,
                                                  themeType: B.l.POPOUT,
                                                  onCloseProfile: J,
                                                  prompt: eI ? eT : null,
                                              }),
                                    ],
                                }),
                                (0, r.jsx)(U.Z, {
                                    user: n,
                                    currentUser: F,
                                    displayProfile: ec,
                                    guild: eo,
                                    isHovering: null == ed.interactionType && eu,
                                    onOpenProfile: ee ? void 0 : eS,
                                    channelId: z,
                                    onClose: J,
                                }),
                                (0, r.jsx)(G.Z, {
                                    user: n,
                                    guildId: Y,
                                    channelId: z,
                                    onClose: J,
                                    appContext: en,
                                    disableAutoFocus: er,
                                }),
                                (null == ec ? void 0 : ec.profileEffect) != null &&
                                    (0, r.jsx)(y.Z, {
                                        profileEffectId: null == ec || null == (t = ec.profileEffect) ? void 0 : t.id,
                                        isHovering: eu,
                                    }),
                            ],
                        }),
                    ],
                }),
            }),
        }),
    });
}
