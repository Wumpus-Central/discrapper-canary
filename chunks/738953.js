n.d(t, { Z: () => F }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(236726),
    o = n(442837),
    s = n(481060),
    l = n(616780),
    c = n(100527),
    u = n(906732),
    d = n(313201),
    f = n(104505),
    p = n(368326),
    _ = n(429467),
    m = n(680295),
    h = n(430824),
    g = n(5192),
    E = n(785717),
    b = n(221292),
    y = n(687158),
    O = n(510659),
    v = n(892001),
    S = n(899007),
    I = n(867176),
    T = n(451834),
    C = n(502762),
    A = n(544989),
    N = n(481932),
    P = n(195387),
    R = n(664794),
    w = n(4517),
    D = n(978395),
    x = n(161572),
    L = n(671955),
    j = n(388032),
    M = n(155493);
function k(e, t, n) {
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
                k(e, t, n[t]);
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
function Z(e, t) {
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
    var t;
    let {
            user: n,
            currentUser: k,
            guildId: G,
            channelId: F,
            messageId: B,
            roleId: V,
            openedAt: H,
            closePopout: Y,
            setPopoutRef: W,
            disableUserProfileLink: K = __OVERLAY__,
            newAnalyticsLocations: z = [],
            appContext: q,
            disableAutoFocus: Q = !1,
            onClickContainer: X,
        } = e,
        { analyticsLocations: J } = (0, u.ZP)([...z, c.Z.USER_PROFILE_POPOUT]),
        $ = (0, E.ZB)({
            layout: "POPOUT",
            userId: n.id,
            guildId: G,
            channelId: F,
            messageId: B,
            roleId: V,
        }),
        ee = (0, o.e7)([h.Z], () => (null != G ? h.Z.getGuild(G) : null)),
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
        ec = n.id === k.id,
        eu = (0, p.p)({ location: "UserProfilePopout" }),
        ed = i.useMemo(() => (0, _.Z)(), []),
        ef = (e) => {
            null == Y || Y(),
                (0, v.openUserProfileModal)(
                    Z(
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
        ep = () =>
            K
                ? null
                : (0, r.jsx)(s.sNh, {
                      id: "view-profile",
                      label: j.intl.string(j.t["+Xp3hq"]),
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
        e_ = Q ? "div" : s.VqE,
        em = (0, d.Dt)(),
        eh = g.ZP.useName(null == ee ? void 0 : ee.id, F, n);
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
                children: (0, r.jsxs)(e_, {
                    ref: en,
                    "aria-labelledby": em,
                    onClick: X,
                    children: [
                        (0, r.jsx)(s.nn4, {
                            children: (0, r.jsx)(s.H, {
                                id: em,
                                children: j.intl.format(j.t.KRe1Fk, { name: eh }),
                            }),
                        }),
                        (0, r.jsxs)(C.Z, {
                            user: n,
                            displayProfile: er,
                            themeType: L.l.POPOUT,
                            children: [
                                null != eo.interactionType &&
                                    (0, r.jsx)(a.animated.div, {
                                        style: es,
                                        className: M.backdrop,
                                    }),
                                (0, r.jsxs)(A.Z, {
                                    children: [
                                        (0, r.jsx)(P.Z, {
                                            shouldShowTooltip: null === eo.interactionType,
                                            user: n,
                                            guildId: G,
                                            channelId: F,
                                            onClose: Y,
                                            appContext: q,
                                        }),
                                        (0, r.jsx)(N.Z, {
                                            themeType: L.l.POPOUT,
                                            user: n,
                                        }),
                                        !ec &&
                                            (0, r.jsx)(R.Cn, {
                                                user: n,
                                                guildId: G,
                                                viewProfileItem: ep(),
                                                appContext: q,
                                            }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: M.header,
                                    children: [
                                        (0, r.jsx)(I.Z, {
                                            user: n,
                                            displayProfile: er,
                                            guildId: G,
                                            themeType: L.l.POPOUT,
                                        }),
                                        (0, r.jsx)(T.Z, {
                                            userId: n.id,
                                            className: M.toast,
                                            onClose: Y,
                                        }),
                                        (0, r.jsx)(S.Z, {
                                            user: n,
                                            displayProfile: er,
                                            guildId: G,
                                            channelId: F,
                                            themeType: L.l.POPOUT,
                                            onOpenProfile: K ? void 0 : ef,
                                        }),
                                        (0, r.jsx)(w.Z, {
                                            ref: el,
                                            user: n,
                                            guildId: G,
                                            channelId: F,
                                            themeType: L.l.POPOUT,
                                            onCloseProfile: Y,
                                            prompt: eu ? ed : null,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(D.Z, {
                                    user: n,
                                    currentUser: k,
                                    displayProfile: er,
                                    guild: ee,
                                    isHoveringOrFocusing: null == eo.interactionType && ei,
                                    onOpenProfile: K ? void 0 : ef,
                                    channelId: F,
                                    onClose: Y,
                                }),
                                (0, r.jsx)(x.Z, {
                                    user: n,
                                    guildId: G,
                                    channelId: F,
                                    onClose: Y,
                                    appContext: q,
                                    disableAutoFocus: Q,
                                }),
                                (null == er ? void 0 : er.profileEffect) != null &&
                                    (0, r.jsx)(m.Z, {
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
