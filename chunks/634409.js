n.d(t, { A: () => D }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(793574),
    o = n(688810),
    l = n(311016),
    c = n(915089),
    u = n(713517),
    d = n(267102),
    f = n(182592),
    p = n(562153),
    _ = n(183555),
    h = n(672385),
    m = n(950191),
    g = n(657331),
    E = n(718019),
    b = n(31432),
    y = n(915614),
    O = n(389996),
    A = n(946356),
    v = n(810396),
    S = n(35241),
    I = n(587168),
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
    var t;
    let {
            user: n,
            guildId: w,
            channelId: D,
            messageId: x,
            roleId: L,
            openedAt: j,
            setPopoutRef: M,
            closePopout: k,
            disableUserProfileLink: U = __OVERLAY__,
            newAnalyticsLocations: G = [],
            disableAutoFocus: V = !1,
            onClickContainer: F,
        } = e,
        B = (0, m.Ay)(n.id, w),
        H = (0, d.aL)(),
        { analyticsLocations: Y } = (0, o.Ay)([...G, s.A.USER_PROFILE_POPOUT]),
        W = (0, _.pb)({
            layout: "POPOUT",
            userId: n.id,
            guildId: w,
            channelId: D,
            messageId: x,
            roleId: L,
        }),
        K = i.useRef(null),
        z = (0, u.M)(K);
    i.useEffect(() => {
        null == M || M(null == K ? void 0 : K.current);
    }, [K, M]);
    let q = () => {
            null == k || k(),
                H.dispatch(T.jej.POPOUT_CLOSE),
                (0, g.openUserProfileModal)(
                    P(
                        {
                            sourceAnalyticsLocations: Y,
                            hideRestrictedProfile: !0,
                        },
                        W,
                    ),
                );
        },
        X = !U && (0, l.A)(n.id),
        Z = () =>
            X
                ? (0, r.jsx)(a.Drp, {
                      id: "view-profile",
                      label: N.intl.string(N.t["+Xp3hq"]),
                      action: () => {
                          q(),
                              (0, h.Wn)(
                                  P(
                                      {
                                          action: "PRESS_VIEW_PROFILE",
                                          analyticsLocations: Y,
                                      },
                                      W,
                                  ),
                              );
                      },
                  })
                : null,
        Q = V ? "div" : a.lGe,
        $ = (0, c.GV)(),
        J = p.Ay.useName(w, D, n);
    return (0, r.jsx)(o.f5, {
        value: Y,
        children: (0, r.jsx)(_.of, {
            value: W,
            openedAt: j,
            fetchStartedAt: null == B ? void 0 : B.fetchStartedAt,
            fetchEndedAt: null == B ? void 0 : B.fetchEndedAt,
            isLoaded: null == B ? void 0 : B.isLoaded,
            children: (0, r.jsxs)(Q, {
                ref: K,
                "aria-labelledby": $,
                onClick: F,
                children: [
                    (0, r.jsx)(a.AC4, {
                        children: (0, r.jsx)(a.H, {
                            id: $,
                            children: N.intl.format(N.t.KRe1Fk, { name: J }),
                        }),
                    }),
                    (0, r.jsxs)(A.A, {
                        user: n,
                        displayProfile: B,
                        themeType: C.d.POPOUT,
                        children: [
                            (0, r.jsx)(I.A, {
                                children: (0, r.jsx)(S.A, {
                                    user: n,
                                    viewProfileItem: Z(),
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: R.wx,
                                children: [
                                    (0, r.jsx)(y.A, {
                                        user: n,
                                        displayProfile: B,
                                        guildId: w,
                                        themeType: C.d.POPOUT,
                                    }),
                                    (0, r.jsx)(E.A, {
                                        user: n,
                                        displayProfile: B,
                                        guildId: w,
                                        channelId: D,
                                        themeType: C.d.POPOUT,
                                        onOpenProfile: X ? q : void 0,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(a.HOs, {
                                fade: !0,
                                className: R.rf,
                                children: [
                                    (0, r.jsx)(v.A, {
                                        user: n,
                                        guildId: w,
                                        nickname: p.Ay.getName(w, D, n),
                                        onOpenProfile: X ? q : void 0,
                                        tags: (0, r.jsx)(b.A, {
                                            displayProfile: B,
                                            themeType: C.d.POPOUT,
                                            onClose: k,
                                        }),
                                    }),
                                    (0, r.jsx)(O.A, {
                                        userId: n.id,
                                        userBio: null == B ? void 0 : B.bio,
                                        setLineClamp: !1,
                                        textColor: "text-strong",
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", { className: R.qr }),
                        ],
                    }),
                    (null == B ? void 0 : B.profileEffect) != null &&
                        (0, r.jsx)(f.A, {
                            skuId: null == B || null == (t = B.profileEffect) ? void 0 : t.skuId,
                            isHovering: z,
                        }),
                ],
            }),
        }),
    });
}
