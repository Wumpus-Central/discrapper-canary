n.d(t, { Z: () => N }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(622535),
    s = n(481060),
    l = n(425493),
    c = n(211266),
    u = n(906732),
    d = n(905551),
    f = n(755458),
    p = n(60482),
    _ = n(905128),
    m = n(174604),
    h = n(302175),
    g = n(626135),
    E = n(355045),
    b = n(394769),
    y = n(555932),
    O = n(808189),
    v = n(998857),
    S = n(917699),
    I = n(155819),
    T = n(981631),
    C = n(388032),
    A = n(924699);
function N(e) {
    let { analyticsLocation: t, guild: n, onClose: N, scrollToPowerupCards: P } = e,
        [R, w] = i.useState(!0),
        D = i.useRef(!1),
        x = (0, c.Z)(() => Date.now()),
        { analyticsLocations: L } = (0, u.ZP)(),
        j = i.useRef(null),
        M = i.useRef(null),
        k = i.useRef(null),
        U = i.useCallback(() => {
            null != k.current &&
                null != M.current &&
                M.current.scrollTo({
                    to: k.current.offsetTop,
                    animate: !0,
                });
        }, []),
        G = i.useCallback(() => {
            U();
        }, [U]),
        Z = i.useCallback(() => {
            null == N || N(),
                g.default.track(T.rMx.MODAL_DISMISSED, {
                    type: T.ZY5.PREMIUM_GUILD_USER_MODAL,
                    location_stack: L,
                    location_section: t.section,
                    location_object: t.object,
                    guild_id: n.id,
                    duration_open_ms: Date.now() - x,
                });
        }, [N, t, L, x, n.id]),
        F = i.useCallback(
            (e) => {
                e &&
                    !D.current &&
                    (g.default.track(T.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: T.ZY5.PREMIUM_GUILD_USER_MODAL,
                        location_stack: L,
                        location_section: t.section,
                        location_object: t.object,
                        guild_id: n.id,
                    }),
                    (D.current = !0));
            },
            [t, L, n.id],
        );
    i.useEffect(() => {
        g.default.track(T.rMx.OPEN_MODAL, {
            type: T.ZY5.PREMIUM_GUILD_USER_MODAL,
            location_stack: L,
            location_section: t.section,
            location_object: t.object,
            guild_id: n.id,
        });
    }, [n.id, t, L]),
        i.useEffect(() => {
            function e(e) {
                "Escape" === e.key && Z();
            }
            return (
                window.addEventListener("keydown", e),
                () => {
                    window.removeEventListener("keydown", e);
                }
            );
        }, [Z]);
    let B = (0, f.BU)(n.id, "GuildBoostingMarketingRefresh"),
        V = (0, a.e7)([p.Z], () => p.Z.hasFetchedCatalog(n.id)),
        H = (0, a.e7)([_.Z], () => _.Z.hasFetchedPowerupCatalog(n.id));
    return (
        i.useEffect(() => {
            B && !V && (0, d.ce)(n.id);
        }, [n.id, B, V]),
        i.useEffect(() => {
            if (P && H) {
                let e = setTimeout(() => {
                    U();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [P, U, H]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != N &&
                    (0, r.jsx)("div", {
                        className: A.closeIconWrapper,
                        children: (0, r.jsx)(l.Z, {
                            className: A.closeIcon,
                            closeAction: Z,
                            keybind: "ESC",
                            variant: l.Z.Variants.BOLD,
                        }),
                    }),
                (0, r.jsxs)(s.yWw, {
                    ref: M,
                    className: A.scroller,
                    children: [
                        (0, r.jsx)("div", {
                            className: A.header,
                            children: (0, r.jsxs)("div", {
                                className: A.headerContentWrapper,
                                children: [
                                    (0, r.jsx)(m.Z, {
                                        guild: e.guild,
                                        themeResponsive: !1,
                                        onButtonClick: G,
                                    }),
                                    (0, r.jsx)(s.Heading, {
                                        className: A.heading,
                                        color: "always-white",
                                        variant: "display-lg",
                                        children: C.intl.string(C.t.N4sqzL),
                                    }),
                                    (0, r.jsx)(E.Z, {
                                        guild: n,
                                        closeLayer: Z,
                                        onCtaVisibilityChange: w,
                                    }),
                                    (0, r.jsx)(y.Z, { guild: n }),
                                    (0, r.jsx)(O.Z, { guild: n }),
                                ],
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: A.middleBodyContentWrapper,
                            children: (0, r.jsx)(h.Z, {
                                ref: k,
                                guild: e.guild,
                                onClose: Z,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: A.lowerBody,
                            children: (0, r.jsxs)("div", {
                                className: A.lowerBodyContentWrapper,
                                children: [
                                    (0, r.jsx)(I.Z, {
                                        className: A.perksTable,
                                        guild: n,
                                    }),
                                    (0, r.jsx)(v.Z, {}),
                                    (0, r.jsx)(S.Z, {}),
                                ],
                            }),
                        }),
                        (0, r.jsx)(o.$, {
                            innerRef: j,
                            onChange: F,
                            children: (0, r.jsx)("div", {
                                ref: j,
                                className: A.persistentCtaSpacer,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(b.Z, {
                    guild: n,
                    isVisible: !R,
                    closeLayer: Z,
                }),
            ],
        })
    );
}
