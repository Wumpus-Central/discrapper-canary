n.d(t, {
    A: () => R,
});
var r = n(627968),
    l = n(64700),
    i = n(158954),
    a = n(397927),
    s = n(736653),
    o = n(793574),
    c = n(688810),
    u = n(311016),
    d = n(713517),
    f = n(182592),
    p = n(562153),
    h = n(183555),
    b = n(672385),
    g = n(950191),
    m = n(657331),
    A = n(718019),
    y = n(31432),
    O = n(915614),
    j = n(389996),
    v = n(743987),
    x = n(900179),
    E = n(946356),
    _ = n(810396),
    C = n(35241),
    S = n(587168),
    I = n(996988),
    N = n(985018),
    T = n(743789),
    P = n(673721);

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

function R(e) {
    var t;
    let { user: n, channel: R } = e,
        D = __OVERLAY__ || !(0, u.A)(n.id),
        M = (0, g.Ay)(n.id),
        L = (0, s.Ay)(),
        G = l.useRef(Date.now()),
        { analyticsLocations: k } = (0, c.Ay)(o.A.USER_PROFILE_SIDEBAR),
        U = (0, h.pb)({
            layout: "SIDEBAR",
            userId: n.id,
            channelId: R.id,
        }),
        V = l.useRef(null),
        { isHoveringOrFocusing: F, isHovering: H } = (0, d.A)(V),
        B = () => {
            (0, m.openUserProfileModal)(
                w(
                    {
                        sourceAnalyticsLocations: k,
                        hideRestrictedProfile: !0,
                    },
                    U,
                ),
            );
        };
    return (0, r.jsx)(c.f5, {
        value: k,
        children: (0, r.jsx)(h.of, {
            value: U,
            openedAt: G.current,
            fetchStartedAt: null == M ? void 0 : M.fetchStartedAt,
            fetchEndedAt: null == M ? void 0 : M.fetchEndedAt,
            isLoaded: null == M ? void 0 : M.isLoaded,
            children: (0, r.jsxs)(E.A, {
                ref: V,
                user: n,
                displayProfile: M,
                themeType: I.d.SIDEBAR,
                themeOverride: L,
                children: [
                    (0, r.jsxs)(i.d_W, {
                        children: [
                            (0, r.jsx)(S.A, {
                                children: (0, r.jsx)(C.A, {
                                    user: n,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: T.wx,
                                children: [
                                    (0, r.jsx)(O.A, {
                                        user: n,
                                        displayProfile: M,
                                        themeType: I.d.SIDEBAR,
                                        animateOnHoverOrFocusOnly: !F,
                                    }),
                                    (0, r.jsx)(A.A, {
                                        user: n,
                                        displayProfile: M,
                                        channelId: R.id,
                                        themeType: I.d.SIDEBAR,
                                        onOpenProfile: D ? void 0 : B,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: P.rf,
                                children: [
                                    (0, r.jsx)(_.A, {
                                        user: n,
                                        guildId: R.guild_id,
                                        nickname: p.Ay.getName(null, R.id, n),
                                        pronouns: null == M ? void 0 : M.pronouns,
                                        onOpenProfile: D ? void 0 : B,
                                        tags: (0, r.jsx)(y.A, {
                                            displayProfile: M,
                                            themeType: I.d.SIDEBAR,
                                        }),
                                    }),
                                    (0, r.jsxs)(E.A.Overlay, {
                                        className: P.Lw,
                                        children: [
                                            (0, r.jsx)(x.A, {
                                                heading: N.intl.string(N.t["61W33d"]),
                                                headingColor: "text-strong",
                                                children: (0, r.jsx)(j.A, {
                                                    userBio: null == M ? void 0 : M.bio,
                                                    userId: n.id,
                                                    animateOnHoverOrFocusOnly: !0,
                                                    isHoveringOrFocusing: F,
                                                }),
                                            }),
                                            (0, r.jsx)(x.A, {
                                                heading: N.intl.string(N.t["A//N4k"]),
                                                headingColor: "text-strong",
                                                children: (0, r.jsx)(v.A, {
                                                    userId: n.id,
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    !D &&
                        (0, r.jsx)("div", {
                            className: T.qr,
                            children: (0, r.jsx)(a.DUT, {
                                onClick: () => {
                                    B(),
                                        (0, b.Wn)(
                                            w(
                                                {
                                                    action: "PRESS_VIEW_PROFILE",
                                                    analyticsLocations: k,
                                                },
                                                U,
                                            ),
                                        );
                                },
                                className: T.wC,
                                children: N.intl.string(N.t["+Xp3hq"]),
                            }),
                        }),
                    (null == M ? void 0 : M.profileEffect) != null &&
                        (0, r.jsx)(f.A, {
                            skuId: null == M || null == (t = M.profileEffect) ? void 0 : t.skuId,
                            isHovering: H,
                        }),
                ],
            }),
        }),
    });
}
