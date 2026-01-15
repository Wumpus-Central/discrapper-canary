n.d(t, { Z: () => P }), n(388685);
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
    E = n(724884),
    b = n(355045),
    y = n(290799),
    O = n(394769),
    v = n(555932),
    S = n(808189),
    I = n(362948),
    T = n(383881),
    C = n(981631),
    A = n(388032),
    N = n(990533);
let P = function (e) {
    let { analyticsLocation: t, guild: n, onClose: P, scrollToPowerupCards: R } = e,
        [w, D] = i.useState(!0),
        x = i.useRef(!1),
        L = (0, c.Z)(() => Date.now()),
        { analyticsLocations: j } = (0, u.ZP)(),
        M = i.useRef(null),
        k = i.useRef(null),
        U = i.useRef(null),
        G = i.useCallback(() => {
            null != U.current &&
                null != k.current &&
                k.current.scrollTo({
                    to: U.current.offsetTop,
                    animate: !0,
                });
        }, []),
        Z = i.useCallback(() => {
            G();
        }, [G]),
        F = i.useCallback(() => {
            null == P || P(),
                g.default.track(C.rMx.MODAL_DISMISSED, {
                    type: C.ZY5.PREMIUM_GUILD_USER_MODAL,
                    location_stack: j,
                    location_section: t.section,
                    location_object: t.object,
                    guild_id: n.id,
                    duration_open_ms: Date.now() - L,
                });
        }, [P, t, j, L, n.id]),
        B = i.useCallback(
            (e) => {
                e &&
                    !x.current &&
                    (g.default.track(C.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: C.ZY5.PREMIUM_GUILD_USER_MODAL,
                        location_stack: j,
                        location_section: t.section,
                        location_object: t.object,
                        guild_id: n.id,
                    }),
                    (x.current = !0));
            },
            [t, j, n.id],
        );
    i.useEffect(() => {
        g.default.track(C.rMx.OPEN_MODAL, {
            type: C.ZY5.PREMIUM_GUILD_USER_MODAL,
            location_stack: j,
            location_section: t.section,
            location_object: t.object,
            guild_id: n.id,
        });
    }, [n.id, t, j]),
        i.useEffect(() => {
            function e(e) {
                "Escape" === e.key && F();
            }
            return (
                window.addEventListener("keydown", e),
                () => {
                    window.removeEventListener("keydown", e);
                }
            );
        }, [F]);
    let V = (0, f.BU)(n.id, "GuildBoostingMarketing"),
        H = (0, a.e7)([p.Z], () => p.Z.hasFetchedCatalog(n.id)),
        Y = (0, a.e7)([_.Z], () => _.Z.hasFetchedPowerupCatalog(n.id));
    return (
        i.useEffect(() => {
            V && !H && (0, d.ce)(n.id);
        }, [n.id, V, H]),
        i.useEffect(() => {
            if (R && Y) {
                let e = setTimeout(() => {
                    G();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [R, G, Y]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != P &&
                    (0, r.jsx)("div", {
                        className: N.closeIconWrapper,
                        children: (0, r.jsx)(l.Z, {
                            className: N.closeIcon,
                            closeAction: F,
                            keybind: "ESC",
                            variant: l.Z.Variants.BOLD,
                        }),
                    }),
                (0, r.jsxs)(s.yWw, {
                    ref: k,
                    className: N.scroller,
                    children: [
                        (0, r.jsxs)("div", {
                            className: N.header,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: N.headerContentWrapper,
                                    children: [
                                        (0, r.jsx)(m.Z, {
                                            guild: e.guild,
                                            themeResponsive: !1,
                                            onButtonClick: Z,
                                        }),
                                        (0, r.jsx)(s.Heading, {
                                            className: N.heading,
                                            color: "always-white",
                                            variant: "display-lg",
                                            children: A.intl.string(A.t.N4sqzL),
                                        }),
                                        (0, r.jsx)(b.Z, {
                                            guild: n,
                                            closeLayer: F,
                                            onCtaVisibilityChange: D,
                                        }),
                                        (0, r.jsx)(v.Z, { guild: n }),
                                        (0, r.jsx)(S.Z, { guild: n }),
                                    ],
                                }),
                                (0, r.jsx)(T.O, {}),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: N.middleBodyContentWrapper,
                            children: (0, r.jsx)(h.Z, {
                                ref: U,
                                guild: e.guild,
                                onClose: F,
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: N.lowerBody,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: N.lowerBodyContentWrapper,
                                    children: [
                                        (0, r.jsx)(I.Z, {
                                            className: N.tierComparisonTable,
                                            guild: n,
                                        }),
                                        (0, r.jsx)(E.Z, {}),
                                        (0, r.jsx)(y.Z, {}),
                                    ],
                                }),
                                (0, r.jsx)(T.A, {}),
                                (0, r.jsx)("div", { className: N.lowerBodyBackgroundImage }),
                            ],
                        }),
                        (0, r.jsx)(o.$, {
                            innerRef: M,
                            onChange: B,
                            children: (0, r.jsx)("div", {
                                ref: M,
                                className: N.persistentCtaSpacer,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(O.Z, {
                    guild: n,
                    isVisible: !w,
                    closeLayer: F,
                }),
            ],
        })
    );
};
