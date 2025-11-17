n.d(t, { Z: () => P }), n(388685);
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
    _ = n(785717),
    p = n(221292),
    h = n(687158),
    m = n(892001),
    g = n(899007),
    E = n(867176),
    b = n(502762),
    y = n(952124),
    O = n(544989),
    v = n(4517),
    I = n(895697),
    T = n(161572),
    S = n(671955),
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
function R(e) {
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
function P(e) {
    let {
            user: t,
            currentUser: n,
            guildId: N,
            channelId: P,
            messageId: D,
            roleId: w,
            openedAt: x,
            closePopout: L,
            setPopoutRef: M,
            disableUserProfileLink: k = __OVERLAY__,
            newAnalyticsLocations: j = [],
            disableAutoFocus: U = !1,
            onRoleClick: G,
        } = e,
        { analyticsLocations: B } = (0, l.ZP)([...j, s.Z.USER_PROFILE_POPOUT]),
        Z = (0, _.ZB)({
            layout: "POPOUT",
            userId: t.id,
            guildId: N,
            channelId: P,
            messageId: D,
            roleId: w,
        }),
        F = (0, h.ZP)(t.id, N),
        V = (0, a.e7)([d.Z], () => (null != N ? d.Z.getGuild(N) : null)),
        H = i.useRef(null),
        { isHoveringOrFocusing: Y } = (0, u.Z)(H);
    i.useEffect(() => {
        null == M || M(null == H ? void 0 : H.current);
    }, [H, M]);
    let W = (e) => {
            null == L || L(),
                (0, m.openUserProfileModal)(
                    R(
                        {
                            sourceAnalyticsLocations: B,
                            hideRestrictedProfile: !0,
                        },
                        Z,
                        e,
                    ),
                );
        },
        K = () =>
            k
                ? null
                : (0, r.jsx)(o.sNh, {
                      id: "view-profile",
                      label: A.intl.string(A.t["+Xp3hq"]),
                      action: () => {
                          W(),
                              (0, p.pQ)(
                                  R(
                                      {
                                          action: "PRESS_VIEW_PROFILE",
                                          analyticsLocations: B,
                                      },
                                      Z,
                                  ),
                              );
                      },
                  }),
        z = U ? "div" : o.VqE,
        q = (0, c.Dt)(),
        X = f.ZP.useName(N, P, t);
    return (0, r.jsx)(l.Gt, {
        value: B,
        children: (0, r.jsx)(_.Mt, {
            value: Z,
            openedAt: x,
            fetchStartedAt: null == F ? void 0 : F.fetchStartedAt,
            fetchEndedAt: null == F ? void 0 : F.fetchEndedAt,
            isLoaded: null == F ? void 0 : F.isLoaded,
            children: (0, r.jsxs)(z, {
                ref: H,
                "aria-labelledby": q,
                children: [
                    (0, r.jsx)(o.nn4, {
                        children: (0, r.jsx)(o.H, {
                            id: q,
                            children: A.intl.format(A.t.KRe1Fk, { name: X }),
                        }),
                    }),
                    (0, r.jsxs)(b.Z, {
                        user: t,
                        displayProfile: F,
                        themeType: S.l.POPOUT,
                        children: [
                            (0, r.jsx)(O.Z, {
                                children: (0, r.jsx)(y.Z, {
                                    user: t,
                                    guildId: N,
                                    viewProfileItem: K(),
                                    onCloseProfile: L,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: C.header,
                                children: [
                                    (0, r.jsx)(E.Z, {
                                        user: t,
                                        displayProfile: F,
                                        guildId: N,
                                        themeType: S.l.POPOUT,
                                    }),
                                    (0, r.jsx)(g.Z, {
                                        user: t,
                                        displayProfile: F,
                                        guildId: N,
                                        channelId: P,
                                        themeType: S.l.POPOUT,
                                        onOpenProfile: k ? void 0 : W,
                                    }),
                                    (0, r.jsx)(v.Z, {
                                        user: t,
                                        themeType: S.l.POPOUT,
                                        onCloseProfile: L,
                                        disableToolbar: !0,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(I.Z, {
                                user: t,
                                currentUser: n,
                                displayProfile: F,
                                guild: V,
                                isHoveringOrFocusing: Y,
                                onOpenProfile: k ? void 0 : W,
                                channelId: P,
                                onClose: L,
                                onRoleClick: G,
                            }),
                            (0, r.jsx)(T.Z, {
                                user: t,
                                guildId: N,
                                channelId: P,
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
