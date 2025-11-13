n.d(t, { Z: () => Z }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(509442),
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
    j = n(116649);
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
            currentUser: k,
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
        } = e,
        { analyticsLocations: Q } = (0, u.ZP)([...z, c.Z.USER_PROFILE_POPOUT]),
        J = (0, E.ZB)({
            layout: "POPOUT",
            userId: n.id,
            guildId: G,
            channelId: Z,
            messageId: F,
            roleId: V,
        }),
        $ = (0, o.e7)([m.Z], () => (null != G ? m.Z.getGuild(G) : null)),
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
        ec = (0, _.p)({ location: "UserProfilePopout" }),
        eu = i.useMemo(() => (0, p.Z)(), []),
        ed = (e) => {
            null == Y || Y(),
                (0, v.openUserProfileModal)(
                    B(
                        U(
                            {
                                sourceAnalyticsLocations: Q,
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
                      label: M.intl.string(M.t["+Xp3hq"]),
                      action: () => {
                          ed(),
                              (0, b.pQ)(
                                  U(
                                      {
                                          action: "PRESS_VIEW_PROFILE",
                                          analyticsLocations: Q,
                                      },
                                      J,
                                  ),
                              );
                      },
                  }),
        e_ = X ? "div" : s.VqE,
        ep = (0, d.Dt)(),
        eh = g.ZP.useName(null == $ ? void 0 : $.id, Z, n);
    return (0, r.jsx)(u.Gt, {
        value: Q,
        children: (0, r.jsx)(E.Mt, {
            value: J,
            openedAt: H,
            fetchStartedAt: null == en ? void 0 : en.fetchStartedAt,
            fetchEndedAt: null == en ? void 0 : en.fetchEndedAt,
            isLoaded: null == en ? void 0 : en.isLoaded,
            children: (0, r.jsx)(O.NJ, {
                value: ea,
                children: (0, r.jsxs)(e_, {
                    ref: et,
                    "aria-labelledby": ep,
                    children: [
                        (0, r.jsx)(s.nn4, {
                            children: (0, r.jsx)(s.H, {
                                id: ep,
                                children: M.intl.format(M.t.KRe1Fk, { name: eh }),
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
                                        className: j.backdrop,
                                    }),
                                (0, r.jsxs)(C.Z, {
                                    children: [
                                        (0, r.jsx)(R.Z, {
                                            shouldShowTooltip: null === ea.interactionType,
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
                                        !el &&
                                            (0, r.jsx)(P.Cn, {
                                                user: n,
                                                guildId: G,
                                                viewProfileItem: ef(),
                                                appContext: q,
                                            }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: j.header,
                                    children: [
                                        (0, r.jsx)(T.Z, {
                                            user: n,
                                            displayProfile: en,
                                            guildId: G,
                                            themeType: L.l.POPOUT,
                                        }),
                                        (0, r.jsx)(S.Z, {
                                            userId: n.id,
                                            className: j.toast,
                                            onClose: Y,
                                        }),
                                        (0, r.jsx)(I.Z, {
                                            user: n,
                                            displayProfile: en,
                                            guildId: G,
                                            channelId: Z,
                                            themeType: L.l.POPOUT,
                                            onOpenProfile: K ? void 0 : ed,
                                        }),
                                        (0, r.jsx)(D.Z, {
                                            ref: es,
                                            user: n,
                                            guildId: G,
                                            channelId: Z,
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
                                    channelId: Z,
                                    onClose: Y,
                                }),
                                (0, r.jsx)(x.Z, {
                                    user: n,
                                    guildId: G,
                                    channelId: Z,
                                    onClose: Y,
                                    appContext: q,
                                    disableAutoFocus: X,
                                }),
                                (null == en ? void 0 : en.profileEffect) != null &&
                                    (0, r.jsx)(h.Z, {
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
