n.d(t, { Z: () => B }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(205120),
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
    A = n(502762),
    C = n(544989),
    N = n(481932),
    P = n(195387),
    R = n(664794),
    D = n(4517),
    w = n(978395),
    x = n(161572),
    L = n(671955),
    j = n(388032),
    M = n(116649);
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
function B(e) {
    var t;
    let {
            user: n,
            currentUser: k,
            guildId: G,
            channelId: B,
            messageId: F,
            roleId: V,
            openedAt: H,
            closePopout: Y,
            setPopoutRef: W,
            disableUserProfileLink: K = __OVERLAY__,
            newAnalyticsLocations: z = [],
            appContext: q,
            disableAutoFocus: Q = !1,
        } = e,
        { analyticsLocations: X } = (0, u.ZP)([...z, c.Z.USER_PROFILE_POPOUT]),
        J = (0, E.ZB)({
            layout: "POPOUT",
            userId: n.id,
            guildId: G,
            channelId: B,
            messageId: F,
            roleId: V,
        }),
        $ = (0, o.e7)([h.Z], () => (null != G ? h.Z.getGuild(G) : null)),
        ee = i.useMemo(() => (null != G ? { [G]: [n.id] } : {}), [G, n.id]);
    (0, l.$)(ee, "UserProfilePopout");
    let et = i.useRef(null),
        en = (0, y.ZP)(n.id, G),
        { isHoveringOrFocusing: er, isHovering: ei } = (0, f.Z)(et),
        ea = (0, O.$m)(),
        eo = (0, s.q_F)({
            opacity: +(null != ea.interactionType),
            config: { duration: 150 },
        });
    i.useEffect(() => {
        null == W || W(null == et ? void 0 : et.current);
    }, [et, W]);
    let es = i.useRef(null),
        el = n.id === k.id,
        ec = (0, p.p)({ location: "UserProfilePopout" }),
        eu = i.useMemo(() => (0, _.Z)(), []),
        ed = (e) => {
            null == Y || Y(),
                (0, v.openUserProfileModal)(
                    Z(
                        U(
                            {
                                sourceAnalyticsLocations: X,
                                hideRestrictedProfile: !0,
                                customStatusPrompt: eu,
                            },
                            J,
                            e,
                        ),
                        { appContext: q },
                    ),
                );
        },
        ef = () =>
            K
                ? null
                : (0, r.jsx)(s.sNh, {
                      id: "view-profile",
                      label: j.intl.string(j.t["+Xp3hq"]),
                      action: () => {
                          ed(),
                              (0, b.pQ)(
                                  U(
                                      {
                                          action: "PRESS_VIEW_PROFILE",
                                          analyticsLocations: X,
                                      },
                                      J,
                                  ),
                              );
                      },
                  }),
        ep = Q ? "div" : s.VqE,
        e_ = (0, d.Dt)(),
        em = g.ZP.useName(null == $ ? void 0 : $.id, B, n);
    return (0, r.jsx)(u.Gt, {
        value: X,
        children: (0, r.jsx)(E.Mt, {
            value: J,
            openedAt: H,
            fetchStartedAt: null == en ? void 0 : en.fetchStartedAt,
            fetchEndedAt: null == en ? void 0 : en.fetchEndedAt,
            isLoaded: null == en ? void 0 : en.isLoaded,
            children: (0, r.jsx)(O.NJ, {
                value: ea,
                children: (0, r.jsxs)(ep, {
                    ref: et,
                    "aria-labelledby": e_,
                    children: [
                        (0, r.jsx)(s.nn4, {
                            children: (0, r.jsx)(s.H, {
                                id: e_,
                                children: j.intl.format(j.t.KRe1Fk, { name: em }),
                            }),
                        }),
                        (0, r.jsxs)(A.Z, {
                            user: n,
                            displayProfile: en,
                            themeType: L.l.POPOUT,
                            children: [
                                null != ea.interactionType &&
                                    (0, r.jsx)(a.animated.div, {
                                        style: eo,
                                        className: M.backdrop,
                                    }),
                                (0, r.jsxs)(C.Z, {
                                    children: [
                                        (0, r.jsx)(P.Z, {
                                            shouldShowTooltip: null === ea.interactionType,
                                            user: n,
                                            guildId: G,
                                            channelId: B,
                                            onClose: Y,
                                            appContext: q,
                                        }),
                                        (0, r.jsx)(N.Z, {
                                            themeType: L.l.POPOUT,
                                            user: n,
                                        }),
                                        !el &&
                                            (0, r.jsx)(R.Cn, {
                                                user: n,
                                                guildId: G,
                                                viewProfileItem: ef(),
                                                appContext: q,
                                            }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: M.header,
                                    children: [
                                        (0, r.jsx)(I.Z, {
                                            user: n,
                                            displayProfile: en,
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
                                            displayProfile: en,
                                            guildId: G,
                                            channelId: B,
                                            themeType: L.l.POPOUT,
                                            onOpenProfile: K ? void 0 : ed,
                                        }),
                                        (0, r.jsx)(D.Z, {
                                            ref: es,
                                            user: n,
                                            guildId: G,
                                            channelId: B,
                                            themeType: L.l.POPOUT,
                                            onCloseProfile: Y,
                                            prompt: ec ? eu : null,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(w.Z, {
                                    user: n,
                                    currentUser: k,
                                    displayProfile: en,
                                    guild: $,
                                    isHoveringOrFocusing: null == ea.interactionType && er,
                                    onOpenProfile: K ? void 0 : ed,
                                    channelId: B,
                                    onClose: Y,
                                }),
                                (0, r.jsx)(x.Z, {
                                    user: n,
                                    guildId: G,
                                    channelId: B,
                                    onClose: Y,
                                    appContext: q,
                                    disableAutoFocus: Q,
                                }),
                                (null == en ? void 0 : en.profileEffect) != null &&
                                    (0, r.jsx)(m.Z, {
                                        skuId: null == en || null == (t = en.profileEffect) ? void 0 : t.skuId,
                                        isHovering: ei,
                                    }),
                            ],
                        }),
                    ],
                }),
            }),
        }),
    });
}
