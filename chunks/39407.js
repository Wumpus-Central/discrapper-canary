n.d(t, {
    A: () => H,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(92674),
    o = n(311907),
    s = n(397927),
    l = n(80682),
    c = n(793574),
    u = n(688810),
    d = n(915089),
    f = n(713517),
    p = n(576241),
    _ = n(645507),
    h = n(267102),
    m = n(182592),
    g = n(71393),
    E = n(562153),
    y = n(183555),
    b = n(672385),
    O = n(950191),
    v = n(679492),
    A = n(657331),
    I = n(718019),
    S = n(915614),
    T = n(439053),
    C = n(946356),
    N = n(587168),
    w = n(193738),
    R = n(613457),
    P = n(853397),
    D = n(159218),
    L = n(320819),
    x = n(848674),
    M = n(652215),
    j = n(996988),
    k = n(985018),
    U = n(183959);

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

function V(e) {
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

function H(e) {
    var t;
    let {
            user: n,
            currentUser: G,
            guildId: F,
            channelId: H,
            messageId: Y,
            roleId: W,
            openedAt: K,
            closePopout: z,
            setPopoutRef: q,
            disableUserProfileLink: Z = __OVERLAY__,
            newAnalyticsLocations: Q = [],
            appContext: X,
            disableAutoFocus: J = !1,
            onClickContainer: $,
        } = e,
        { analyticsLocations: ee } = (0, u.Ay)([...Q, c.A.USER_PROFILE_POPOUT]),
        et = (0, h.aL)(),
        en = (0, y.pb)({
            layout: "POPOUT",
            userId: n.id,
            guildId: F,
            channelId: H,
            messageId: Y,
            roleId: W,
        }),
        er = (0, o.bG)([g.A], () => (null != F ? g.A.getGuild(F) : null)),
        ei = i.useMemo(
            () =>
                null != F
                    ? {
                          [F]: [n.id],
                      }
                    : {},
            [F, n.id],
        );
    (0, l.E)(ei, "UserProfilePopout");
    let ea = i.useRef(null),
        eo = (0, O.Ay)(n.id, F),
        { isHoveringOrFocusing: es, isHovering: el } = (0, f.A)(ea),
        ec = (0, v.fC)(),
        eu = (0, s.zhh)({
            opacity: +(null != ec.interactionType),
            config: {
                duration: 150,
            },
        });
    i.useEffect(() => {
        null == q || q(null == ea ? void 0 : ea.current);
    }, [ea, q]);
    let ed = i.useRef(null),
        ef = n.id === G.id,
        ep = (0, p.h)({
            location: "UserProfilePopout",
        }),
        e_ = i.useMemo(() => (0, _.A)(), []),
        eh = (e) => {
            null == z || z(),
                et.dispatch(M.jej.POPOUT_CLOSE),
                (0, A.openUserProfileModal)(
                    B(
                        V(
                            {
                                sourceAnalyticsLocations: ee,
                                hideRestrictedProfile: !0,
                                customStatusPrompt: e_,
                            },
                            en,
                            e,
                        ),
                        {
                            appContext: X,
                        },
                    ),
                );
        },
        em = () =>
            Z
                ? null
                : (0, r.jsx)(s.Drp, {
                      id: "view-profile",
                      label: k.intl.string(k.t["+Xp3hq"]),
                      action: () => {
                          eh(),
                              (0, b.Wn)(
                                  V(
                                      {
                                          action: "PRESS_VIEW_PROFILE",
                                          analyticsLocations: ee,
                                      },
                                      en,
                                  ),
                              );
                      },
                  }),
        eg = J ? "div" : s.lGe,
        eE = (0, d.GV)(),
        ey = E.Ay.useName(null == er ? void 0 : er.id, H, n);
    return (0, r.jsx)(u.f5, {
        value: ee,
        children: (0, r.jsx)(y.of, {
            value: en,
            openedAt: K,
            fetchStartedAt: null == eo ? void 0 : eo.fetchStartedAt,
            fetchEndedAt: null == eo ? void 0 : eo.fetchEndedAt,
            isLoaded: null == eo ? void 0 : eo.isLoaded,
            children: (0, r.jsx)(v.Hl, {
                value: ec,
                children: (0, r.jsxs)(eg, {
                    ref: ea,
                    "aria-labelledby": eE,
                    onClick: $,
                    children: [
                        (0, r.jsx)(s.AC4, {
                            children: (0, r.jsx)(s.H, {
                                id: eE,
                                children: k.intl.format(k.t.KRe1Fk, {
                                    name: ey,
                                }),
                            }),
                        }),
                        (0, r.jsxs)(C.A, {
                            user: n,
                            displayProfile: eo,
                            themeType: j.d.POPOUT,
                            children: [
                                null != ec.interactionType &&
                                    (0, r.jsx)(a.animated.div, {
                                        style: eu,
                                        className: U.tB,
                                    }),
                                (0, r.jsxs)(N.A, {
                                    children: [
                                        (0, r.jsx)(R.A, {
                                            shouldShowTooltip: null === ec.interactionType,
                                            user: n,
                                            guildId: F,
                                            channelId: H,
                                            onClose: z,
                                            appContext: X,
                                        }),
                                        (0, r.jsx)(w.A, {
                                            themeType: j.d.POPOUT,
                                            user: n,
                                        }),
                                        !ef &&
                                            (0, r.jsx)(P.yo, {
                                                user: n,
                                                guildId: F,
                                                viewProfileItem: em(),
                                                appContext: X,
                                            }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: U.wx,
                                    children: [
                                        (0, r.jsx)(S.A, {
                                            user: n,
                                            displayProfile: eo,
                                            guildId: F,
                                            themeType: j.d.POPOUT,
                                        }),
                                        (0, r.jsx)(T.A, {
                                            userId: n.id,
                                            className: U.oR,
                                            onClose: z,
                                        }),
                                        (0, r.jsx)(I.A, {
                                            user: n,
                                            displayProfile: eo,
                                            guildId: F,
                                            channelId: H,
                                            themeType: j.d.POPOUT,
                                            onOpenProfile: Z ? void 0 : eh,
                                        }),
                                        (0, r.jsx)(D.A, {
                                            ref: ed,
                                            user: n,
                                            guildId: F,
                                            channelId: H,
                                            themeType: j.d.POPOUT,
                                            onCloseProfile: z,
                                            prompt: ep ? e_ : null,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(L.A, {
                                    user: n,
                                    currentUser: G,
                                    displayProfile: eo,
                                    guild: er,
                                    isHoveringOrFocusing: null == ec.interactionType && es,
                                    onOpenProfile: Z ? void 0 : eh,
                                    channelId: H,
                                    onClose: z,
                                }),
                                (0, r.jsx)(x.A, {
                                    user: n,
                                    guildId: F,
                                    channelId: H,
                                    onClose: z,
                                    appContext: X,
                                    disableAutoFocus: J,
                                }),
                                (null == eo ? void 0 : eo.profileEffect) != null &&
                                    (0, r.jsx)(m.A, {
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
