n.d(t, { Z: () => R }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(100527),
    s = n(906732),
    l = n(580552),
    c = n(313201),
    u = n(104505),
    d = n(680295),
    f = n(5192),
    p = n(785717),
    _ = n(221292),
    m = n(687158),
    h = n(892001),
    g = n(899007),
    E = n(648052),
    b = n(867176),
    y = n(280885),
    O = n(502762),
    v = n(530),
    S = n(679332),
    I = n(544989),
    T = n(671955),
    A = n(388032),
    C = n(116649);
function N(e, t, n) {
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
                N(e, t, n[t]);
            });
    }
    return e;
}
function R(e) {
    var t;
    let {
            user: n,
            guildId: N,
            channelId: R,
            messageId: D,
            roleId: w,
            openedAt: x,
            setPopoutRef: L,
            closePopout: j,
            disableUserProfileLink: M = __OVERLAY__,
            newAnalyticsLocations: k = [],
            disableAutoFocus: U = !1,
        } = e,
        G = (0, m.ZP)(n.id, N),
        { analyticsLocations: Z } = (0, s.ZP)([...k, o.Z.USER_PROFILE_POPOUT]),
        B = (0, p.ZB)({
            layout: "POPOUT",
            userId: n.id,
            guildId: N,
            channelId: R,
            messageId: D,
            roleId: w,
        }),
        F = i.useRef(null),
        V = (0, u.X)(F);
    i.useEffect(() => {
        null == L || L(null == F ? void 0 : F.current);
    }, [F, L]);
    let H = () => {
            null == j || j(),
                (0, h.openUserProfileModal)(
                    P(
                        {
                            sourceAnalyticsLocations: Z,
                            hideRestrictedProfile: !0,
                        },
                        B,
                    ),
                );
        },
        Y = !M && (0, l.Z)(n.id),
        W = () =>
            Y
                ? (0, r.jsx)(a.sNh, {
                      id: "view-profile",
                      label: A.intl.string(A.t["+Xp3hq"]),
                      action: () => {
                          H(),
                              (0, _.pQ)(
                                  P(
                                      {
                                          action: "PRESS_VIEW_PROFILE",
                                          analyticsLocations: Z,
                                      },
                                      B,
                                  ),
                              );
                      },
                  })
                : null,
        K = U ? "div" : a.VqE,
        z = (0, c.Dt)(),
        q = f.ZP.useName(N, R, n);
    return (0, r.jsx)(s.Gt, {
        value: Z,
        children: (0, r.jsx)(p.Mt, {
            value: B,
            openedAt: x,
            fetchStartedAt: null == G ? void 0 : G.fetchStartedAt,
            fetchEndedAt: null == G ? void 0 : G.fetchEndedAt,
            isLoaded: null == G ? void 0 : G.isLoaded,
            children: (0, r.jsxs)(K, {
                ref: F,
                "aria-labelledby": z,
                children: [
                    (0, r.jsx)(a.nn4, {
                        children: (0, r.jsx)(a.H, {
                            id: z,
                            children: A.intl.format(A.t.KRe1Fk, { name: q }),
                        }),
                    }),
                    (0, r.jsxs)(O.Z, {
                        user: n,
                        displayProfile: G,
                        themeType: T.l.POPOUT,
                        children: [
                            (0, r.jsx)(I.Z, {
                                children: (0, r.jsx)(S.Z, {
                                    user: n,
                                    viewProfileItem: W(),
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: C.header,
                                children: [
                                    (0, r.jsx)(b.Z, {
                                        user: n,
                                        displayProfile: G,
                                        guildId: N,
                                        themeType: T.l.POPOUT,
                                    }),
                                    (0, r.jsx)(g.Z, {
                                        user: n,
                                        displayProfile: G,
                                        guildId: N,
                                        channelId: R,
                                        themeType: T.l.POPOUT,
                                        onOpenProfile: Y ? H : void 0,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(a.Ttm, {
                                fade: !0,
                                className: C.body,
                                children: [
                                    (0, r.jsx)(v.Z, {
                                        user: n,
                                        guildId: N,
                                        nickname: f.ZP.getName(N, R, n),
                                        onOpenProfile: Y ? H : void 0,
                                        tags: (0, r.jsx)(E.Z, {
                                            displayProfile: G,
                                            themeType: T.l.POPOUT,
                                            onClose: j,
                                        }),
                                    }),
                                    (0, r.jsx)(y.Z, {
                                        userId: n.id,
                                        userBio: null == G ? void 0 : G.bio,
                                        setLineClamp: !1,
                                        textColor: "header-primary",
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", { className: C.footer }),
                        ],
                    }),
                    (null == G ? void 0 : G.profileEffect) != null &&
                        (0, r.jsx)(d.Z, {
                            skuId: null == G || null == (t = G.profileEffect) ? void 0 : t.skuId,
                            isHovering: V,
                        }),
                ],
            }),
        }),
    });
}
