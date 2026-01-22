n.d(t, {
    A: () => H,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(108531),
    s = n(311907),
    o = n(397927),
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
    b = n(183555),
    y = n(672385),
    O = n(950191),
    A = n(679492),
    v = n(657331),
    S = n(718019),
    I = n(915614),
    T = n(439053),
    C = n(946356),
    N = n(587168),
    R = n(193738),
    w = n(613457),
    P = n(853397),
    D = n(159218),
    x = n(320819),
    L = n(848674),
    j = n(652215),
    M = n(996988),
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
            disableUserProfileLink: X = __OVERLAY__,
            newAnalyticsLocations: Z = [],
            appContext: Q,
            disableAutoFocus: $ = !1,
            onClickContainer: J,
        } = e,
        { analyticsLocations: ee } = (0, u.Ay)([...Z, c.A.USER_PROFILE_POPOUT]),
        et = (0, h.aL)(),
        en = (0, b.pb)({
            layout: "POPOUT",
            userId: n.id,
            guildId: F,
            channelId: H,
            messageId: Y,
            roleId: W,
        }),
        er = (0, s.bG)([g.A], () => (null != F ? g.A.getGuild(F) : null)),
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
        es = (0, O.Ay)(n.id, F),
        { isHoveringOrFocusing: eo, isHovering: el } = (0, f.A)(ea),
        ec = (0, A.fC)(),
        eu = (0, o.zhh)({
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
                et.dispatch(j.jej.POPOUT_CLOSE),
                (0, v.openUserProfileModal)(
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
                            appContext: Q,
                        },
                    ),
                );
        },
        em = () =>
            X
                ? null
                : (0, r.jsx)(o.Drp, {
                      id: "view-profile",
                      label: k.intl.string(k.t["+Xp3hq"]),
                      action: () => {
                          eh(),
                              (0, y.Wn)(
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
        eg = $ ? "div" : o.lGe,
        eE = (0, d.GV)(),
        eb = E.Ay.useName(null == er ? void 0 : er.id, H, n);
    return (0, r.jsx)(u.f5, {
        value: ee,
        children: (0, r.jsx)(b.of, {
            value: en,
            openedAt: K,
            fetchStartedAt: null == es ? void 0 : es.fetchStartedAt,
            fetchEndedAt: null == es ? void 0 : es.fetchEndedAt,
            isLoaded: null == es ? void 0 : es.isLoaded,
            children: (0, r.jsx)(A.Hl, {
                value: ec,
                children: (0, r.jsxs)(eg, {
                    ref: ea,
                    "aria-labelledby": eE,
                    onClick: J,
                    children: [
                        (0, r.jsx)(o.AC4, {
                            children: (0, r.jsx)(o.H, {
                                id: eE,
                                children: k.intl.format(k.t.KRe1Fk, {
                                    name: eb,
                                }),
                            }),
                        }),
                        (0, r.jsxs)(C.A, {
                            user: n,
                            displayProfile: es,
                            themeType: M.d.POPOUT,
                            children: [
                                null != ec.interactionType &&
                                    (0, r.jsx)(a.animated.div, {
                                        style: eu,
                                        className: U.tB,
                                    }),
                                (0, r.jsxs)(N.A, {
                                    children: [
                                        (0, r.jsx)(w.A, {
                                            shouldShowTooltip: null === ec.interactionType,
                                            user: n,
                                            guildId: F,
                                            channelId: H,
                                            onClose: z,
                                            appContext: Q,
                                        }),
                                        (0, r.jsx)(R.A, {
                                            themeType: M.d.POPOUT,
                                            user: n,
                                        }),
                                        !ef &&
                                            (0, r.jsx)(P.yo, {
                                                user: n,
                                                guildId: F,
                                                viewProfileItem: em(),
                                                appContext: Q,
                                            }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: U.wx,
                                    children: [
                                        (0, r.jsx)(I.A, {
                                            user: n,
                                            displayProfile: es,
                                            guildId: F,
                                            themeType: M.d.POPOUT,
                                        }),
                                        (0, r.jsx)(T.A, {
                                            userId: n.id,
                                            className: U.oR,
                                            onClose: z,
                                        }),
                                        (0, r.jsx)(S.A, {
                                            user: n,
                                            displayProfile: es,
                                            guildId: F,
                                            channelId: H,
                                            themeType: M.d.POPOUT,
                                            onOpenProfile: X ? void 0 : eh,
                                        }),
                                        (0, r.jsx)(D.A, {
                                            ref: ed,
                                            user: n,
                                            guildId: F,
                                            channelId: H,
                                            themeType: M.d.POPOUT,
                                            onCloseProfile: z,
                                            prompt: ep ? e_ : null,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(x.A, {
                                    user: n,
                                    currentUser: G,
                                    displayProfile: es,
                                    guild: er,
                                    isHoveringOrFocusing: null == ec.interactionType && eo,
                                    onOpenProfile: X ? void 0 : eh,
                                    channelId: H,
                                    onClose: z,
                                }),
                                (0, r.jsx)(L.A, {
                                    user: n,
                                    guildId: F,
                                    channelId: H,
                                    onClose: z,
                                    appContext: Q,
                                    disableAutoFocus: $,
                                }),
                                (null == es ? void 0 : es.profileEffect) != null &&
                                    (0, r.jsx)(m.A, {
                                        skuId: null == es || null == (t = es.profileEffect) ? void 0 : t.skuId,
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
