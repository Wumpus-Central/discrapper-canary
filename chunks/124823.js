n.d(t, { Z: () => w });
var r = n(951288),
    i = n(647438),
    l = n(597312),
    a = n(481060),
    o = n(727637),
    s = n(410030),
    c = n(100527),
    u = n(906732),
    d = n(580552),
    p = n(680295),
    h = n(5192),
    f = n(785717),
    m = n(221292),
    g = n(687158),
    b = n(892001),
    _ = n(899007),
    y = n(648052),
    C = n(867176),
    x = n(280885),
    v = n(900927),
    O = n(678738),
    j = n(502762),
    E = n(530),
    S = n(679332),
    I = n(544989),
    P = n(671955),
    Z = n(388032),
    T = n(231688),
    N = n(892273);
function A(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function w(e) {
    var t;
    let { user: n, channel: w } = e,
        R = __OVERLAY__ || !(0, d.Z)(n.id),
        M = (0, g.ZP)(n.id),
        D = (0, s.ZP)(),
        L = i.useRef(Date.now()),
        { analyticsLocations: k } = (0, u.ZP)(c.Z.USER_PROFILE_SIDEBAR),
        U = (0, f.ZB)({
            layout: "SIDEBAR",
            userId: n.id,
            channelId: w.id,
        }),
        B = i.useRef(null),
        F = (0, o.Z)(B),
        G = (e) => {
            (0, b.openUserProfileModal)(
                A(
                    {
                        sourceAnalyticsLocations: k,
                        hideRestrictedProfile: !0,
                    },
                    U,
                    e,
                ),
            );
        };
    return (0, r.jsx)(u.Gt, {
        value: k,
        children: (0, r.jsx)(f.Mt, {
            value: U,
            openedAt: L.current,
            fetchStartedAt: null == M ? void 0 : M.fetchStartedAt,
            fetchEndedAt: null == M ? void 0 : M.fetchEndedAt,
            isLoaded: null == M ? void 0 : M.isLoaded,
            children: (0, r.jsxs)(j.Z, {
                ref: B,
                user: n,
                displayProfile: M,
                themeType: P.l.SIDEBAR,
                themeOverride: D,
                children: [
                    (0, r.jsxs)(l.u2, {
                        children: [
                            (0, r.jsx)(I.Z, { children: (0, r.jsx)(S.Z, { user: n }) }),
                            (0, r.jsxs)("div", {
                                className: T.header,
                                children: [
                                    (0, r.jsx)(C.Z, {
                                        user: n,
                                        displayProfile: M,
                                        themeType: P.l.SIDEBAR,
                                        animateOnHover: !F,
                                    }),
                                    (0, r.jsx)(_.Z, {
                                        user: n,
                                        displayProfile: M,
                                        channelId: w.id,
                                        themeType: P.l.SIDEBAR,
                                        onOpenProfile: R ? void 0 : G,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: N.body,
                                children: [
                                    (0, r.jsx)(E.Z, {
                                        user: n,
                                        nickname: h.ZP.getName(null, w.id, n),
                                        pronouns: null == M ? void 0 : M.pronouns,
                                        onOpenProfile: R ? void 0 : G,
                                        tags: (0, r.jsx)(y.Z, {
                                            displayProfile: M,
                                            themeType: P.l.SIDEBAR,
                                        }),
                                    }),
                                    (0, r.jsxs)(j.Z.Overlay, {
                                        className: N.overlay,
                                        children: [
                                            (0, r.jsx)(O.Z, {
                                                heading: Z.intl.string(Z.t["61W33d"]),
                                                headingColor: "header-primary",
                                                children: (0, r.jsx)(x.Z, {
                                                    userBio: null == M ? void 0 : M.bio,
                                                    userId: n.id,
                                                    animateOnHover: !0,
                                                    isHovering: F,
                                                }),
                                            }),
                                            (0, r.jsx)(O.Z, {
                                                heading: Z.intl.string(Z.t["A//N4u"]),
                                                headingColor: "header-primary",
                                                children: (0, r.jsx)(v.Z, { userId: n.id }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    !R &&
                        (0, r.jsx)("div", {
                            className: T.footer,
                            children: (0, r.jsx)(a.P3F, {
                                onClick: () => {
                                    G(),
                                        (0, m.pQ)(
                                            A(
                                                {
                                                    action: "PRESS_VIEW_PROFILE",
                                                    analyticsLocations: k,
                                                },
                                                U,
                                            ),
                                        );
                                },
                                className: T.footerButton,
                                children: Z.intl.string(Z.t["+Xp3ho"]),
                            }),
                        }),
                    (null == M ? void 0 : M.profileEffect) != null &&
                        (0, r.jsx)(p.Z, {
                            profileEffectId: null == M || null == (t = M.profileEffect) ? void 0 : t.id,
                            isHovering: F,
                        }),
                ],
            }),
        }),
    });
}
