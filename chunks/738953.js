n.d(t, { Z: () => Z }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(636606),
    o = n(442837),
    s = n(481060),
    l = n(616780),
    c = n(100527),
    u = n(906732),
    d = n(313201),
    f = n(104505),
    _ = n(368326),
    p = n(429467),
    h = n(680295),
    m = n(430824),
    g = n(5192),
    E = n(785717),
    b = n(221292),
    y = n(687158),
    O = n(510659),
    v = n(892001),
    I = n(899007),
    T = n(867176),
    S = n(451834),
    A = n(502762),
    C = n(544989),
    N = n(481932),
    R = n(195387),
    P = n(664794),
    D = n(4517),
    w = n(978395),
    x = n(161572),
    L = n(671955),
    M = n(388032),
    k = n(116649);
function j(e, t, n) {
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
function U(e) {
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
function Z(e) {
    var t;
    let {
            user: n,
            currentUser: j,
            guildId: G,
            channelId: Z,
            messageId: F,
            roleId: V,
            openedAt: H,
            closePopout: Y,
            setPopoutRef: W,
            disableUserProfileLink: K = __OVERLAY__,
            newAnalyticsLocations: z = [],
            appContext: q,
            disableAutoFocus: X = !1,
            onRoleClick: Q,
        } = e,
        { analyticsLocations: J } = (0, u.ZP)([...z, c.Z.USER_PROFILE_POPOUT]),
        $ = (0, E.ZB)({
            layout: "POPOUT",
            userId: n.id,
            guildId: G,
            channelId: Z,
            messageId: F,
            roleId: V,
        }),
        ee = (0, o.e7)([m.Z], () => (null != G ? m.Z.getGuild(G) : null)),
        et = i.useMemo(() => (null != G ? { [G]: [n.id] } : {}), [G, n.id]);
    (0, l.$)(et, "UserProfilePopout");
    let en = i.useRef(null),
        er = (0, y.ZP)(n.id, G),
        { isHoveringOrFocusing: ei, isHovering: ea } = (0, f.Z)(en),
        eo = (0, O.$m)(),
        es = (0, s.q_F)({
            opacity: +(null != eo.interactionType),
            config: { duration: 150 },
        });
    i.useEffect(() => {
        null == W || W(null == en ? void 0 : en.current);
    }, [en, W]);
    let el = i.useRef(null),
        ec = n.id === j.id,
        eu = (0, _.p)({ location: "UserProfilePopout" }),
        ed = i.useMemo(() => (0, p.Z)(), []),
        ef = (e) => {
            null == Y || Y(),
                (0, v.openUserProfileModal)(
                    B(
                        U(
                            {
                                sourceAnalyticsLocations: J,
                                hideRestrictedProfile: !0,
                                customStatusPrompt: ed,
                            },
                            $,
                            e,
                        ),
                        { appContext: q },
                    ),
                );
        },
        e_ = () =>
            K
                ? null
                : (0, r.jsx)(s.sNh, {
                      id: "view-profile",
                      label: M.intl.string(M.t["+Xp3hq"]),
                      action: () => {
                          ef(),
                              (0, b.pQ)(
                                  U(
                                      {
                                          action: "PRESS_VIEW_PROFILE",
                                          analyticsLocations: J,
                                      },
                                      $,
                                  ),
                              );
                      },
                  }),
        ep = X ? "div" : s.VqE,
        eh = (0, d.Dt)(),
        em = g.ZP.useName(null == ee ? void 0 : ee.id, Z, n);
    return (0, r.jsx)(u.Gt, {
        value: J,
        children: (0, r.jsx)(E.Mt, {
            value: $,
            openedAt: H,
            fetchStartedAt: null == er ? void 0 : er.fetchStartedAt,
            fetchEndedAt: null == er ? void 0 : er.fetchEndedAt,
            isLoaded: null == er ? void 0 : er.isLoaded,
            children: (0, r.jsx)(O.NJ, {
                value: eo,
                children: (0, r.jsxs)(ep, {
                    ref: en,
                    "aria-labelledby": eh,
                    children: [
                        (0, r.jsx)(s.nn4, {
                            children: (0, r.jsx)(s.H, {
                                id: eh,
                                children: M.intl.format(M.t.KRe1Fk, { name: em }),
                            }),
                        }),
                        (0, r.jsxs)(A.Z, {
                            user: n,
                            displayProfile: er,
                            themeType: L.l.POPOUT,
                            children: [
                                null != eo.interactionType &&
                                    (0, r.jsx)(a.animated.div, {
                                        style: es,
                                        className: k.backdrop,
                                    }),
                                (0, r.jsxs)(C.Z, {
                                    children: [
                                        (0, r.jsx)(R.Z, {
                                            shouldShowTooltip: null === eo.interactionType,
                                            user: n,
                                            guildId: G,
                                            channelId: Z,
                                            onClose: Y,
                                            appContext: q,
                                        }),
                                        (0, r.jsx)(N.Z, {
                                            themeType: L.l.POPOUT,
                                            user: n,
                                        }),
                                        !ec &&
                                            (0, r.jsx)(P.Cn, {
                                                user: n,
                                                guildId: G,
                                                viewProfileItem: e_(),
                                                appContext: q,
                                            }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: k.header,
                                    children: [
                                        (0, r.jsx)(T.Z, {
                                            user: n,
                                            displayProfile: er,
                                            guildId: G,
                                            themeType: L.l.POPOUT,
                                        }),
                                        (0, r.jsx)(S.Z, {
                                            userId: n.id,
                                            className: k.toast,
                                            onClose: Y,
                                        }),
                                        (0, r.jsx)(I.Z, {
                                            user: n,
                                            displayProfile: er,
                                            guildId: G,
                                            channelId: Z,
                                            themeType: L.l.POPOUT,
                                            onOpenProfile: K ? void 0 : ef,
                                        }),
                                        (0, r.jsx)(D.Z, {
                                            ref: el,
                                            user: n,
                                            guildId: G,
                                            channelId: Z,
                                            themeType: L.l.POPOUT,
                                            onCloseProfile: Y,
                                            prompt: eu ? ed : null,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(w.Z, {
                                    user: n,
                                    currentUser: j,
                                    displayProfile: er,
                                    guild: ee,
                                    isHoveringOrFocusing: null == eo.interactionType && ei,
                                    onOpenProfile: K ? void 0 : ef,
                                    channelId: Z,
                                    onClose: Y,
                                    onRoleClick: Q,
                                }),
                                (0, r.jsx)(x.Z, {
                                    user: n,
                                    guildId: G,
                                    channelId: Z,
                                    onClose: Y,
                                    appContext: q,
                                    disableAutoFocus: X,
                                }),
                                (null == er ? void 0 : er.profileEffect) != null &&
                                    (0, r.jsx)(h.Z, {
                                        skuId: null == er || null == (t = er.profileEffect) ? void 0 : t.skuId,
                                        isHovering: ea,
                                    }),
                            ],
                        }),
                    ],
                }),
            }),
        }),
    });
}
