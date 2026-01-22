n.d(t, {
    A: () => D,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(793574),
    l = n(688810),
    c = n(915089),
    u = n(713517),
    d = n(267102),
    f = n(71393),
    p = n(562153),
    _ = n(183555),
    h = n(672385),
    m = n(950191),
    g = n(657331),
    E = n(718019),
    b = n(915614),
    y = n(946356),
    O = n(490752),
    A = n(587168),
    v = n(159218),
    S = n(666388),
    I = n(848674),
    T = n(652215),
    C = n(996988),
    N = n(985018),
    R = n(183959);

function w(e, t, n) {
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

function P(e) {
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
                w(e, t, n[t]);
            });
    }
    return e;
}

function D(e) {
    let {
            user: t,
            currentUser: n,
            guildId: w,
            channelId: D,
            messageId: x,
            roleId: L,
            openedAt: j,
            closePopout: M,
            setPopoutRef: k,
            disableUserProfileLink: U = __OVERLAY__,
            newAnalyticsLocations: G = [],
            disableAutoFocus: V = !1,
            onClickContainer: F,
        } = e,
        { analyticsLocations: B } = (0, l.Ay)([...G, o.A.USER_PROFILE_POPOUT]),
        H = (0, d.aL)(),
        Y = (0, _.pb)({
            layout: "POPOUT",
            userId: t.id,
            guildId: w,
            channelId: D,
            messageId: x,
            roleId: L,
        }),
        W = (0, m.Ay)(t.id, w),
        K = (0, a.bG)([f.A], () => (null != w ? f.A.getGuild(w) : null)),
        z = i.useRef(null),
        { isHoveringOrFocusing: q } = (0, u.A)(z);
    i.useEffect(() => {
        null == k || k(null == z ? void 0 : z.current);
    }, [z, k]);
    let X = (e) => {
            null == M || M(),
                H.dispatch(T.jej.POPOUT_CLOSE),
                (0, g.openUserProfileModal)(
                    P(
                        {
                            sourceAnalyticsLocations: B,
                            hideRestrictedProfile: !0,
                        },
                        Y,
                        e,
                    ),
                );
        },
        Z = () =>
            U
                ? null
                : (0, r.jsx)(s.Drp, {
                      id: "view-profile",
                      label: N.intl.string(N.t["+Xp3hq"]),
                      action: () => {
                          X(),
                              (0, h.Wn)(
                                  P(
                                      {
                                          action: "PRESS_VIEW_PROFILE",
                                          analyticsLocations: B,
                                      },
                                      Y,
                                  ),
                              );
                      },
                  }),
        Q = V ? "div" : s.lGe,
        $ = (0, c.GV)(),
        J = p.Ay.useName(w, D, t);
    return (0, r.jsx)(l.f5, {
        value: B,
        children: (0, r.jsx)(_.of, {
            value: Y,
            openedAt: j,
            fetchStartedAt: null == W ? void 0 : W.fetchStartedAt,
            fetchEndedAt: null == W ? void 0 : W.fetchEndedAt,
            isLoaded: null == W ? void 0 : W.isLoaded,
            children: (0, r.jsxs)(Q, {
                ref: z,
                "aria-labelledby": $,
                onClick: F,
                children: [
                    (0, r.jsx)(s.AC4, {
                        children: (0, r.jsx)(s.H, {
                            id: $,
                            children: N.intl.format(N.t.KRe1Fk, {
                                name: J,
                            }),
                        }),
                    }),
                    (0, r.jsxs)(y.A, {
                        user: t,
                        displayProfile: W,
                        themeType: C.d.POPOUT,
                        children: [
                            (0, r.jsx)(A.A, {
                                children: (0, r.jsx)(O.A, {
                                    user: t,
                                    guildId: w,
                                    viewProfileItem: Z(),
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: R.wx,
                                children: [
                                    (0, r.jsx)(b.A, {
                                        user: t,
                                        displayProfile: W,
                                        guildId: w,
                                        themeType: C.d.POPOUT,
                                    }),
                                    (0, r.jsx)(E.A, {
                                        user: t,
                                        displayProfile: W,
                                        guildId: w,
                                        channelId: D,
                                        themeType: C.d.POPOUT,
                                        onOpenProfile: U ? void 0 : X,
                                    }),
                                    (0, r.jsx)(v.A, {
                                        user: t,
                                        themeType: C.d.POPOUT,
                                        onCloseProfile: M,
                                        disableToolbar: !0,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(S.A, {
                                user: t,
                                currentUser: n,
                                displayProfile: W,
                                guild: K,
                                isHoveringOrFocusing: q,
                                onOpenProfile: U ? void 0 : X,
                                channelId: D,
                                onClose: M,
                            }),
                            (0, r.jsx)(I.A, {
                                user: t,
                                guildId: w,
                                channelId: D,
                                onClose: M,
                                disableAutoFocus: V,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
