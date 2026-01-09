n.d(t, { Z: () => D }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(100527),
    s = n(906732),
    l = n(580552),
    c = n(313201),
    u = n(104505),
    d = n(728285),
    f = n(680295),
    p = n(5192),
    _ = n(785717),
    m = n(221292),
    h = n(687158),
    g = n(892001),
    E = n(899007),
    b = n(648052),
    y = n(867176),
    O = n(280885),
    v = n(502762),
    S = n(530),
    I = n(679332),
    T = n(544989),
    C = n(981631),
    A = n(671955),
    N = n(388032),
    P = n(155493);
function R(e, t, n) {
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
function w(e) {
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
                R(e, t, n[t]);
            });
    }
    return e;
}
function D(e) {
    var t;
    let {
            user: n,
            guildId: R,
            channelId: D,
            messageId: x,
            roleId: L,
            openedAt: j,
            setPopoutRef: M,
            closePopout: k,
            disableUserProfileLink: U = __OVERLAY__,
            newAnalyticsLocations: G = [],
            disableAutoFocus: Z = !1,
            onClickContainer: F,
        } = e,
        B = (0, h.ZP)(n.id, R),
        V = (0, d.Aq)(),
        { analyticsLocations: H } = (0, s.ZP)([...G, o.Z.USER_PROFILE_POPOUT]),
        Y = (0, _.ZB)({
            layout: "POPOUT",
            userId: n.id,
            guildId: R,
            channelId: D,
            messageId: x,
            roleId: L,
        }),
        W = i.useRef(null),
        K = (0, u.X)(W);
    i.useEffect(() => {
        null == M || M(null == W ? void 0 : W.current);
    }, [W, M]);
    let z = () => {
            null == k || k(),
                V.dispatch(C.CkL.POPOUT_CLOSE),
                (0, g.openUserProfileModal)(
                    w(
                        {
                            sourceAnalyticsLocations: H,
                            hideRestrictedProfile: !0,
                        },
                        Y,
                    ),
                );
        },
        q = !U && (0, l.Z)(n.id),
        Q = () =>
            q
                ? (0, r.jsx)(a.sNh, {
                      id: "view-profile",
                      label: N.intl.string(N.t["+Xp3hq"]),
                      action: () => {
                          z(),
                              (0, m.pQ)(
                                  w(
                                      {
                                          action: "PRESS_VIEW_PROFILE",
                                          analyticsLocations: H,
                                      },
                                      Y,
                                  ),
                              );
                      },
                  })
                : null,
        X = Z ? "div" : a.VqE,
        J = (0, c.Dt)(),
        $ = p.ZP.useName(R, D, n);
    return (0, r.jsx)(s.Gt, {
        value: H,
        children: (0, r.jsx)(_.Mt, {
            value: Y,
            openedAt: j,
            fetchStartedAt: null == B ? void 0 : B.fetchStartedAt,
            fetchEndedAt: null == B ? void 0 : B.fetchEndedAt,
            isLoaded: null == B ? void 0 : B.isLoaded,
            children: (0, r.jsxs)(X, {
                ref: W,
                "aria-labelledby": J,
                onClick: F,
                children: [
                    (0, r.jsx)(a.nn4, {
                        children: (0, r.jsx)(a.H, {
                            id: J,
                            children: N.intl.format(N.t.KRe1Fk, { name: $ }),
                        }),
                    }),
                    (0, r.jsxs)(v.Z, {
                        user: n,
                        displayProfile: B,
                        themeType: A.l.POPOUT,
                        children: [
                            (0, r.jsx)(T.Z, {
                                children: (0, r.jsx)(I.Z, {
                                    user: n,
                                    viewProfileItem: Q(),
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: P.header,
                                children: [
                                    (0, r.jsx)(y.Z, {
                                        user: n,
                                        displayProfile: B,
                                        guildId: R,
                                        themeType: A.l.POPOUT,
                                    }),
                                    (0, r.jsx)(E.Z, {
                                        user: n,
                                        displayProfile: B,
                                        guildId: R,
                                        channelId: D,
                                        themeType: A.l.POPOUT,
                                        onOpenProfile: q ? z : void 0,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(a.Ttm, {
                                fade: !0,
                                className: P.body,
                                children: [
                                    (0, r.jsx)(S.Z, {
                                        user: n,
                                        guildId: R,
                                        nickname: p.ZP.getName(R, D, n),
                                        onOpenProfile: q ? z : void 0,
                                        tags: (0, r.jsx)(b.Z, {
                                            displayProfile: B,
                                            themeType: A.l.POPOUT,
                                            onClose: k,
                                        }),
                                    }),
                                    (0, r.jsx)(O.Z, {
                                        userId: n.id,
                                        userBio: null == B ? void 0 : B.bio,
                                        setLineClamp: !1,
                                        textColor: "text-strong",
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", { className: P.footer }),
                        ],
                    }),
                    (null == B ? void 0 : B.profileEffect) != null &&
                        (0, r.jsx)(f.Z, {
                            skuId: null == B || null == (t = B.profileEffect) ? void 0 : t.skuId,
                            isHovering: K,
                        }),
                ],
            }),
        }),
    });
}
