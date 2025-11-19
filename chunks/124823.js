n.d(t, { Z: () => w });
var r = n(54381),
    i = n(473749),
    l = n(793030),
    a = n(481060),
    s = n(410030),
    o = n(100527),
    c = n(906732),
    d = n(580552),
    u = n(104505),
    p = n(680295),
    h = n(5192),
    f = n(785717),
    g = n(221292),
    m = n(687158),
    b = n(892001),
    _ = n(899007),
    y = n(648052),
    O = n(867176),
    j = n(280885),
    x = n(900927),
    v = n(678738),
    C = n(502762),
    I = n(530),
    S = n(679332),
    E = n(544989),
    Z = n(671955),
    P = n(388032),
    T = n(231688),
    N = n(892273);
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
        A = __OVERLAY__ || !(0, d.Z)(n.id),
        D = (0, m.ZP)(n.id),
        L = (0, s.ZP)(),
        M = i.useRef(Date.now()),
        { analyticsLocations: k } = (0, c.ZP)(o.Z.USER_PROFILE_SIDEBAR),
        U = (0, f.ZB)({
            layout: "SIDEBAR",
            userId: n.id,
            channelId: w.id,
        }),
        G = i.useRef(null),
        { isHoveringOrFocusing: H, isHovering: F } = (0, u.Z)(G),
        B = (e) => {
            (0, b.openUserProfileModal)(
                R(
                    {
                        sourceAnalyticsLocations: k,
                        hideRestrictedProfile: !0,
                    },
                    U,
                    e,
                ),
            );
        };
    return (0, r.jsx)(c.Gt, {
        value: k,
        children: (0, r.jsx)(f.Mt, {
            value: U,
            openedAt: M.current,
            fetchStartedAt: null == D ? void 0 : D.fetchStartedAt,
            fetchEndedAt: null == D ? void 0 : D.fetchEndedAt,
            isLoaded: null == D ? void 0 : D.isLoaded,
            children: (0, r.jsxs)(C.Z, {
                ref: G,
                user: n,
                displayProfile: D,
                themeType: Z.l.SIDEBAR,
                themeOverride: L,
                children: [
                    (0, r.jsxs)(l.u2D, {
                        children: [
                            (0, r.jsx)(E.Z, { children: (0, r.jsx)(S.Z, { user: n }) }),
                            (0, r.jsxs)("div", {
                                className: T.header,
                                children: [
                                    (0, r.jsx)(O.Z, {
                                        user: n,
                                        displayProfile: D,
                                        themeType: Z.l.SIDEBAR,
                                        animateOnHoverOrFocusOnly: !H,
                                    }),
                                    (0, r.jsx)(_.Z, {
                                        user: n,
                                        displayProfile: D,
                                        channelId: w.id,
                                        themeType: Z.l.SIDEBAR,
                                        onOpenProfile: A ? void 0 : B,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: N.body,
                                children: [
                                    (0, r.jsx)(I.Z, {
                                        user: n,
                                        guildId: w.guild_id,
                                        nickname: h.ZP.getName(null, w.id, n),
                                        pronouns: null == D ? void 0 : D.pronouns,
                                        onOpenProfile: A ? void 0 : B,
                                        tags: (0, r.jsx)(y.Z, {
                                            displayProfile: D,
                                            themeType: Z.l.SIDEBAR,
                                        }),
                                    }),
                                    (0, r.jsxs)(C.Z.Overlay, {
                                        className: N.overlay,
                                        children: [
                                            (0, r.jsx)(v.Z, {
                                                heading: P.intl.string(P.t["61W33d"]),
                                                headingColor: "header-primary",
                                                children: (0, r.jsx)(j.Z, {
                                                    userBio: null == D ? void 0 : D.bio,
                                                    userId: n.id,
                                                    animateOnHoverOrFocusOnly: !0,
                                                    isHoveringOrFocusing: H,
                                                }),
                                            }),
                                            (0, r.jsx)(v.Z, {
                                                heading: P.intl.string(P.t["A//N4k"]),
                                                headingColor: "header-primary",
                                                children: (0, r.jsx)(x.Z, { userId: n.id }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    !A &&
                        (0, r.jsx)("div", {
                            className: T.footer,
                            children: (0, r.jsx)(a.P3F, {
                                onClick: () => {
                                    B(),
                                        (0, g.pQ)(
                                            R(
                                                {
                                                    action: "PRESS_VIEW_PROFILE",
                                                    analyticsLocations: k,
                                                },
                                                U,
                                            ),
                                        );
                                },
                                className: T.footerButton,
                                children: P.intl.string(P.t["+Xp3hq"]),
                            }),
                        }),
                    (null == D ? void 0 : D.profileEffect) != null &&
                        (0, r.jsx)(p.Z, {
                            skuId: null == D || null == (t = D.profileEffect) ? void 0 : t.skuId,
                            isHovering: F,
                        }),
                ],
            }),
        }),
    });
}
