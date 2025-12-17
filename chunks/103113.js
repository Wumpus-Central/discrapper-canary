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
    C = n(388032),
    A = n(155493);
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
            messageId: w,
            roleId: D,
            openedAt: x,
            setPopoutRef: L,
            closePopout: j,
            disableUserProfileLink: M = __OVERLAY__,
            newAnalyticsLocations: k = [],
            disableAutoFocus: U = !1,
            onClickContainer: G,
        } = e,
        Z = (0, m.ZP)(n.id, N),
        { analyticsLocations: F } = (0, s.ZP)([...k, o.Z.USER_PROFILE_POPOUT]),
        B = (0, p.ZB)({
            layout: "POPOUT",
            userId: n.id,
            guildId: N,
            channelId: R,
            messageId: w,
            roleId: D,
        }),
        V = i.useRef(null),
        H = (0, u.X)(V);
    i.useEffect(() => {
        null == L || L(null == V ? void 0 : V.current);
    }, [V, L]);
    let Y = () => {
            null == j || j(),
                (0, h.openUserProfileModal)(
                    P(
                        {
                            sourceAnalyticsLocations: F,
                            hideRestrictedProfile: !0,
                        },
                        B,
                    ),
                );
        },
        W = !M && (0, l.Z)(n.id),
        K = () =>
            W
                ? (0, r.jsx)(a.sNh, {
                      id: "view-profile",
                      label: C.intl.string(C.t["+Xp3hq"]),
                      action: () => {
                          Y(),
                              (0, _.pQ)(
                                  P(
                                      {
                                          action: "PRESS_VIEW_PROFILE",
                                          analyticsLocations: F,
                                      },
                                      B,
                                  ),
                              );
                      },
                  })
                : null,
        z = U ? "div" : a.VqE,
        q = (0, c.Dt)(),
        Q = f.ZP.useName(N, R, n);
    return (0, r.jsx)(s.Gt, {
        value: F,
        children: (0, r.jsx)(p.Mt, {
            value: B,
            openedAt: x,
            fetchStartedAt: null == Z ? void 0 : Z.fetchStartedAt,
            fetchEndedAt: null == Z ? void 0 : Z.fetchEndedAt,
            isLoaded: null == Z ? void 0 : Z.isLoaded,
            children: (0, r.jsxs)(z, {
                ref: V,
                "aria-labelledby": q,
                onClick: G,
                children: [
                    (0, r.jsx)(a.nn4, {
                        children: (0, r.jsx)(a.H, {
                            id: q,
                            children: C.intl.format(C.t.KRe1Fk, { name: Q }),
                        }),
                    }),
                    (0, r.jsxs)(O.Z, {
                        user: n,
                        displayProfile: Z,
                        themeType: T.l.POPOUT,
                        children: [
                            (0, r.jsx)(I.Z, {
                                children: (0, r.jsx)(S.Z, {
                                    user: n,
                                    viewProfileItem: K(),
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: A.header,
                                children: [
                                    (0, r.jsx)(b.Z, {
                                        user: n,
                                        displayProfile: Z,
                                        guildId: N,
                                        themeType: T.l.POPOUT,
                                    }),
                                    (0, r.jsx)(g.Z, {
                                        user: n,
                                        displayProfile: Z,
                                        guildId: N,
                                        channelId: R,
                                        themeType: T.l.POPOUT,
                                        onOpenProfile: W ? Y : void 0,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(a.Ttm, {
                                fade: !0,
                                className: A.body,
                                children: [
                                    (0, r.jsx)(v.Z, {
                                        user: n,
                                        guildId: N,
                                        nickname: f.ZP.getName(N, R, n),
                                        onOpenProfile: W ? Y : void 0,
                                        tags: (0, r.jsx)(E.Z, {
                                            displayProfile: Z,
                                            themeType: T.l.POPOUT,
                                            onClose: j,
                                        }),
                                    }),
                                    (0, r.jsx)(y.Z, {
                                        userId: n.id,
                                        userBio: null == Z ? void 0 : Z.bio,
                                        setLineClamp: !1,
                                        textColor: "text-strong",
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", { className: A.footer }),
                        ],
                    }),
                    (null == Z ? void 0 : Z.profileEffect) != null &&
                        (0, r.jsx)(d.Z, {
                            skuId: null == Z || null == (t = Z.profileEffect) ? void 0 : t.skuId,
                            isHovering: H,
                        }),
                ],
            }),
        }),
    });
}
