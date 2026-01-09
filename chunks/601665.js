n.d(t, { Z: () => D }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(100527),
    l = n(906732),
    c = n(313201),
    u = n(104505),
    d = n(728285),
    f = n(430824),
    p = n(5192),
    _ = n(785717),
    m = n(221292),
    h = n(687158),
    g = n(892001),
    E = n(899007),
    b = n(867176),
    y = n(502762),
    O = n(952124),
    v = n(544989),
    S = n(4517),
    I = n(895697),
    T = n(161572),
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
    let {
            user: t,
            currentUser: n,
            guildId: R,
            channelId: D,
            messageId: x,
            roleId: L,
            openedAt: j,
            closePopout: M,
            setPopoutRef: k,
            disableUserProfileLink: U = __OVERLAY__,
            newAnalyticsLocations: G = [],
            disableAutoFocus: Z = !1,
            onClickContainer: F,
        } = e,
        { analyticsLocations: B } = (0, l.ZP)([...G, s.Z.USER_PROFILE_POPOUT]),
        V = (0, d.Aq)(),
        H = (0, _.ZB)({
            layout: "POPOUT",
            userId: t.id,
            guildId: R,
            channelId: D,
            messageId: x,
            roleId: L,
        }),
        Y = (0, h.ZP)(t.id, R),
        W = (0, a.e7)([f.Z], () => (null != R ? f.Z.getGuild(R) : null)),
        K = i.useRef(null),
        { isHoveringOrFocusing: z } = (0, u.Z)(K);
    i.useEffect(() => {
        null == k || k(null == K ? void 0 : K.current);
    }, [K, k]);
    let q = (e) => {
            null == M || M(),
                V.dispatch(C.CkL.POPOUT_CLOSE),
                (0, g.openUserProfileModal)(
                    w(
                        {
                            sourceAnalyticsLocations: B,
                            hideRestrictedProfile: !0,
                        },
                        H,
                        e,
                    ),
                );
        },
        Q = () =>
            U
                ? null
                : (0, r.jsx)(o.sNh, {
                      id: "view-profile",
                      label: N.intl.string(N.t["+Xp3hq"]),
                      action: () => {
                          q(),
                              (0, m.pQ)(
                                  w(
                                      {
                                          action: "PRESS_VIEW_PROFILE",
                                          analyticsLocations: B,
                                      },
                                      H,
                                  ),
                              );
                      },
                  }),
        X = Z ? "div" : o.VqE,
        J = (0, c.Dt)(),
        $ = p.ZP.useName(R, D, t);
    return (0, r.jsx)(l.Gt, {
        value: B,
        children: (0, r.jsx)(_.Mt, {
            value: H,
            openedAt: j,
            fetchStartedAt: null == Y ? void 0 : Y.fetchStartedAt,
            fetchEndedAt: null == Y ? void 0 : Y.fetchEndedAt,
            isLoaded: null == Y ? void 0 : Y.isLoaded,
            children: (0, r.jsxs)(X, {
                ref: K,
                "aria-labelledby": J,
                onClick: F,
                children: [
                    (0, r.jsx)(o.nn4, {
                        children: (0, r.jsx)(o.H, {
                            id: J,
                            children: N.intl.format(N.t.KRe1Fk, { name: $ }),
                        }),
                    }),
                    (0, r.jsxs)(y.Z, {
                        user: t,
                        displayProfile: Y,
                        themeType: A.l.POPOUT,
                        children: [
                            (0, r.jsx)(v.Z, {
                                children: (0, r.jsx)(O.Z, {
                                    user: t,
                                    guildId: R,
                                    viewProfileItem: Q(),
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: P.header,
                                children: [
                                    (0, r.jsx)(b.Z, {
                                        user: t,
                                        displayProfile: Y,
                                        guildId: R,
                                        themeType: A.l.POPOUT,
                                    }),
                                    (0, r.jsx)(E.Z, {
                                        user: t,
                                        displayProfile: Y,
                                        guildId: R,
                                        channelId: D,
                                        themeType: A.l.POPOUT,
                                        onOpenProfile: U ? void 0 : q,
                                    }),
                                    (0, r.jsx)(S.Z, {
                                        user: t,
                                        themeType: A.l.POPOUT,
                                        onCloseProfile: M,
                                        disableToolbar: !0,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(I.Z, {
                                user: t,
                                currentUser: n,
                                displayProfile: Y,
                                guild: W,
                                isHoveringOrFocusing: z,
                                onOpenProfile: U ? void 0 : q,
                                channelId: D,
                                onClose: M,
                            }),
                            (0, r.jsx)(T.Z, {
                                user: t,
                                guildId: R,
                                channelId: D,
                                onClose: M,
                                disableAutoFocus: Z,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
