n.d(t, { Z: () => V }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(620389),
    o = n(442837),
    s = n(481060),
    l = n(616780),
    c = n(100527),
    u = n(906732),
    d = n(313201),
    f = n(104505),
    p = n(368326),
    _ = n(429467),
    m = n(728285),
    h = n(680295),
    g = n(430824),
    E = n(5192),
    b = n(785717),
    y = n(221292),
    O = n(687158),
    v = n(510659),
    S = n(892001),
    I = n(899007),
    T = n(867176),
    C = n(451834),
    A = n(502762),
    N = n(544989),
    P = n(481932),
    R = n(195387),
    w = n(664794),
    D = n(4517),
    x = n(978395),
    L = n(161572),
    j = n(981631),
    M = n(671955),
    k = n(388032),
    U = n(155493);
function G(e, t, n) {
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
function Z(e) {
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
                G(e, t, n[t]);
            });
    }
    return e;
}
function F(e, t) {
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
            : F(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function V(e) {
    var t;
    let {
            user: n,
            currentUser: G,
            guildId: F,
            channelId: V,
            messageId: H,
            roleId: Y,
            openedAt: W,
            closePopout: K,
            setPopoutRef: z,
            disableUserProfileLink: q = __OVERLAY__,
            newAnalyticsLocations: Q = [],
            appContext: X,
            disableAutoFocus: J = !1,
            onClickContainer: $,
        } = e,
        { analyticsLocations: ee } = (0, u.ZP)([...Q, c.Z.USER_PROFILE_POPOUT]),
        et = (0, m.Aq)(),
        en = (0, b.ZB)({
            layout: "POPOUT",
            userId: n.id,
            guildId: F,
            channelId: V,
            messageId: H,
            roleId: Y,
        }),
        er = (0, o.e7)([g.Z], () => (null != F ? g.Z.getGuild(F) : null)),
        ei = i.useMemo(() => (null != F ? { [F]: [n.id] } : {}), [F, n.id]);
    (0, l.$)(ei, "UserProfilePopout");
    let ea = i.useRef(null),
        eo = (0, O.ZP)(n.id, F),
        { isHoveringOrFocusing: es, isHovering: el } = (0, f.Z)(ea),
        ec = (0, v.$m)(),
        eu = (0, s.q_F)({
            opacity: +(null != ec.interactionType),
            config: { duration: 150 },
        });
    i.useEffect(() => {
        null == z || z(null == ea ? void 0 : ea.current);
    }, [ea, z]);
    let ed = i.useRef(null),
        ef = n.id === G.id,
        ep = (0, p.p)({ location: "UserProfilePopout" }),
        e_ = i.useMemo(() => (0, _.Z)(), []),
        em = (e) => {
            null == K || K(),
                et.dispatch(j.CkL.POPOUT_CLOSE),
                (0, S.openUserProfileModal)(
                    B(
                        Z(
                            {
                                sourceAnalyticsLocations: ee,
                                hideRestrictedProfile: !0,
                                customStatusPrompt: e_,
                            },
                            en,
                            e,
                        ),
                        { appContext: X },
                    ),
                );
        },
        eh = () =>
            q
                ? null
                : (0, r.jsx)(s.sNh, {
                      id: "view-profile",
                      label: k.intl.string(k.t["+Xp3hq"]),
                      action: () => {
                          em(),
                              (0, y.pQ)(
                                  Z(
                                      {
                                          action: "PRESS_VIEW_PROFILE",
                                          analyticsLocations: ee,
                                      },
                                      en,
                                  ),
                              );
                      },
                  }),
        eg = J ? "div" : s.VqE,
        eE = (0, d.Dt)(),
        eb = E.ZP.useName(null == er ? void 0 : er.id, V, n);
    return (0, r.jsx)(u.Gt, {
        value: ee,
        children: (0, r.jsx)(b.Mt, {
            value: en,
            openedAt: W,
            fetchStartedAt: null == eo ? void 0 : eo.fetchStartedAt,
            fetchEndedAt: null == eo ? void 0 : eo.fetchEndedAt,
            isLoaded: null == eo ? void 0 : eo.isLoaded,
            children: (0, r.jsx)(v.NJ, {
                value: ec,
                children: (0, r.jsxs)(eg, {
                    ref: ea,
                    "aria-labelledby": eE,
                    onClick: $,
                    children: [
                        (0, r.jsx)(s.nn4, {
                            children: (0, r.jsx)(s.H, {
                                id: eE,
                                children: k.intl.format(k.t.KRe1Fk, { name: eb }),
                            }),
                        }),
                        (0, r.jsxs)(A.Z, {
                            user: n,
                            displayProfile: eo,
                            themeType: M.l.POPOUT,
                            children: [
                                null != ec.interactionType &&
                                    (0, r.jsx)(a.animated.div, {
                                        style: eu,
                                        className: U.backdrop,
                                    }),
                                (0, r.jsxs)(N.Z, {
                                    children: [
                                        (0, r.jsx)(R.Z, {
                                            shouldShowTooltip: null === ec.interactionType,
                                            user: n,
                                            guildId: F,
                                            channelId: V,
                                            onClose: K,
                                            appContext: X,
                                        }),
                                        (0, r.jsx)(P.Z, {
                                            themeType: M.l.POPOUT,
                                            user: n,
                                        }),
                                        !ef &&
                                            (0, r.jsx)(w.Cn, {
                                                user: n,
                                                guildId: F,
                                                viewProfileItem: eh(),
                                                appContext: X,
                                            }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: U.header,
                                    children: [
                                        (0, r.jsx)(T.Z, {
                                            user: n,
                                            displayProfile: eo,
                                            guildId: F,
                                            themeType: M.l.POPOUT,
                                        }),
                                        (0, r.jsx)(C.Z, {
                                            userId: n.id,
                                            className: U.toast,
                                            onClose: K,
                                        }),
                                        (0, r.jsx)(I.Z, {
                                            user: n,
                                            displayProfile: eo,
                                            guildId: F,
                                            channelId: V,
                                            themeType: M.l.POPOUT,
                                            onOpenProfile: q ? void 0 : em,
                                        }),
                                        (0, r.jsx)(D.Z, {
                                            ref: ed,
                                            user: n,
                                            guildId: F,
                                            channelId: V,
                                            themeType: M.l.POPOUT,
                                            onCloseProfile: K,
                                            prompt: ep ? e_ : null,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(x.Z, {
                                    user: n,
                                    currentUser: G,
                                    displayProfile: eo,
                                    guild: er,
                                    isHoveringOrFocusing: null == ec.interactionType && es,
                                    onOpenProfile: q ? void 0 : em,
                                    channelId: V,
                                    onClose: K,
                                }),
                                (0, r.jsx)(L.Z, {
                                    user: n,
                                    guildId: F,
                                    channelId: V,
                                    onClose: K,
                                    appContext: X,
                                    disableAutoFocus: J,
                                }),
                                (null == eo ? void 0 : eo.profileEffect) != null &&
                                    (0, r.jsx)(h.Z, {
                                        skuId: null == eo || null == (t = eo.profileEffect) ? void 0 : t.skuId,
                                        isHovering: el,
                                    }),
                            ],
                        }),
                    ],
                }),
            }),
        }),
    });
}
