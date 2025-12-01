n.d(t, { Z: () => R }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(100527),
    l = n(906732),
    c = n(313201),
    u = n(104505),
    d = n(430824),
    f = n(5192),
    p = n(785717),
    _ = n(221292),
    m = n(687158),
    h = n(892001),
    g = n(899007),
    E = n(867176),
    b = n(502762),
    y = n(952124),
    O = n(544989),
    v = n(4517),
    S = n(895697),
    I = n(161572),
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
    let {
            user: t,
            currentUser: n,
            guildId: N,
            channelId: R,
            messageId: w,
            roleId: D,
            openedAt: x,
            closePopout: L,
            setPopoutRef: j,
            disableUserProfileLink: M = __OVERLAY__,
            newAnalyticsLocations: k = [],
            disableAutoFocus: U = !1,
        } = e,
        { analyticsLocations: G } = (0, l.ZP)([...k, s.Z.USER_PROFILE_POPOUT]),
        Z = (0, p.ZB)({
            layout: "POPOUT",
            userId: t.id,
            guildId: N,
            channelId: R,
            messageId: w,
            roleId: D,
        }),
        B = (0, m.ZP)(t.id, N),
        F = (0, a.e7)([d.Z], () => (null != N ? d.Z.getGuild(N) : null)),
        V = i.useRef(null),
        { isHoveringOrFocusing: H } = (0, u.Z)(V);
    i.useEffect(() => {
        null == j || j(null == V ? void 0 : V.current);
    }, [V, j]);
    let Y = (e) => {
            null == L || L(),
                (0, h.openUserProfileModal)(
                    P(
                        {
                            sourceAnalyticsLocations: G,
                            hideRestrictedProfile: !0,
                        },
                        Z,
                        e,
                    ),
                );
        },
        W = () =>
            M
                ? null
                : (0, r.jsx)(o.sNh, {
                      id: "view-profile",
                      label: A.intl.string(A.t["+Xp3hq"]),
                      action: () => {
                          Y(),
                              (0, _.pQ)(
                                  P(
                                      {
                                          action: "PRESS_VIEW_PROFILE",
                                          analyticsLocations: G,
                                      },
                                      Z,
                                  ),
                              );
                      },
                  }),
        K = U ? "div" : o.VqE,
        z = (0, c.Dt)(),
        q = f.ZP.useName(N, R, t);
    return (0, r.jsx)(l.Gt, {
        value: G,
        children: (0, r.jsx)(p.Mt, {
            value: Z,
            openedAt: x,
            fetchStartedAt: null == B ? void 0 : B.fetchStartedAt,
            fetchEndedAt: null == B ? void 0 : B.fetchEndedAt,
            isLoaded: null == B ? void 0 : B.isLoaded,
            children: (0, r.jsxs)(K, {
                ref: V,
                "aria-labelledby": z,
                children: [
                    (0, r.jsx)(o.nn4, {
                        children: (0, r.jsx)(o.H, {
                            id: z,
                            children: A.intl.format(A.t.KRe1Fk, { name: q }),
                        }),
                    }),
                    (0, r.jsxs)(b.Z, {
                        user: t,
                        displayProfile: B,
                        themeType: T.l.POPOUT,
                        children: [
                            (0, r.jsx)(O.Z, {
                                children: (0, r.jsx)(y.Z, {
                                    user: t,
                                    guildId: N,
                                    viewProfileItem: W(),
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: C.header,
                                children: [
                                    (0, r.jsx)(E.Z, {
                                        user: t,
                                        displayProfile: B,
                                        guildId: N,
                                        themeType: T.l.POPOUT,
                                    }),
                                    (0, r.jsx)(g.Z, {
                                        user: t,
                                        displayProfile: B,
                                        guildId: N,
                                        channelId: R,
                                        themeType: T.l.POPOUT,
                                        onOpenProfile: M ? void 0 : Y,
                                    }),
                                    (0, r.jsx)(v.Z, {
                                        user: t,
                                        themeType: T.l.POPOUT,
                                        onCloseProfile: L,
                                        disableToolbar: !0,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(S.Z, {
                                user: t,
                                currentUser: n,
                                displayProfile: B,
                                guild: F,
                                isHoveringOrFocusing: H,
                                onOpenProfile: M ? void 0 : Y,
                                channelId: R,
                                onClose: L,
                            }),
                            (0, r.jsx)(I.Z, {
                                user: t,
                                guildId: N,
                                channelId: R,
                                onClose: L,
                                disableAutoFocus: U,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
