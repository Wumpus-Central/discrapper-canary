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
    _ = n(174604),
    m = n(302175),
    h = n(626135),
    g = n(724884),
    E = n(355045),
    b = n(290799),
    y = n(394769),
    O = n(555932),
    v = n(808189),
    S = n(362948),
    I = n(383881),
    T = n(981631),
    A = n(388032),
    C = n(517872);
let N = function (e) {
    let { analyticsLocation: t, guild: n, onClose: N } = e,
        [P, R] = i.useState(!0),
        w = i.useRef(!1),
        D = (0, c.Z)(() => Date.now()),
        { analyticsLocations: x } = (0, u.ZP)(),
        L = i.useRef(null),
        j = i.useRef(null),
        M = i.useRef(null),
        k = i.useCallback(() => {
            null != M.current &&
                null != j.current &&
                j.current.scrollTo({
                    to: M.current.offsetTop,
                    animate: !0,
                });
        }, []),
        U = i.useCallback(() => {
            null == N || N(),
                h.default.track(T.rMx.MODAL_DISMISSED, {
                    type: T.ZY5.PREMIUM_GUILD_USER_MODAL,
                    location_stack: x,
                    location_section: t.section,
                    location_object: t.object,
                    guild_id: n.id,
                    duration_open_ms: Date.now() - D,
                });
        }, [N, t, x, D, n.id]),
        G = i.useCallback(
            (e) => {
                e &&
                    !w.current &&
                    (h.default.track(T.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: T.ZY5.PREMIUM_GUILD_USER_MODAL,
                        location_stack: x,
                        location_section: t.section,
                        location_object: t.object,
                        guild_id: n.id,
                    }),
                    (w.current = !0));
            },
            [t, x, n.id],
        );
    i.useEffect(() => {
        h.default.track(T.rMx.OPEN_MODAL, {
            type: T.ZY5.PREMIUM_GUILD_USER_MODAL,
            location_stack: x,
            location_section: t.section,
            location_object: t.object,
            guild_id: n.id,
        });
    }, [n.id, t, x]),
        i.useEffect(() => {
            function e(e) {
                "Escape" === e.key && U();
            }
            return (
                window.addEventListener("keydown", e),
                () => {
                    window.removeEventListener("keydown", e);
                }
            );
        }, [U]);
    let Z = (0, f.BU)(n.id, "GuildBoostingMarketing"),
        B = (0, a.e7)([p.Z], () => p.Z.hasFetchedCatalog(n.id));
    return (
        i.useEffect(() => {
            Z && !B && (0, d.ce)(n.id);
        }, [n.id, Z, B]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != N &&
                    (0, r.jsx)("div", {
                        className: C.closeIconWrapper,
                        children: (0, r.jsx)(l.Z, {
                            className: C.closeIcon,
                            closeAction: U,
                            keybind: "ESC",
                            variant: l.Z.Variants.BOLD,
                        }),
                    }),
                (0, r.jsxs)(s.yWw, {
                    ref: j,
                    className: C.scroller,
                    children: [
                        (0, r.jsxs)("div", {
                            className: C.header,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: C.headerContentWrapper,
                                    children: [
                                        (0, r.jsx)(_.Z, {
                                            guild: e.guild,
                                            themeResponsive: !1,
                                            onButtonClick: k,
                                        }),
                                        (0, r.jsx)(s.Heading, {
                                            className: C.heading,
                                            color: "always-white",
                                            variant: "display-lg",
                                            children: A.intl.string(A.t.N4sqzL),
                                        }),
                                        (0, r.jsx)(E.Z, {
                                            guild: n,
                                            closeLayer: U,
                                            onCtaVisibilityChange: R,
                                        }),
                                        (0, r.jsx)(O.Z, { guild: n }),
                                        (0, r.jsx)(v.Z, { guild: n }),
                                    ],
                                }),
                                (0, r.jsx)(I.O, {}),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: C.middleBodyContentWrapper,
                            children: (0, r.jsx)(m.Z, {
                                ref: M,
                                guild: e.guild,
                                onClose: U,
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: C.lowerBody,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: C.lowerBodyContentWrapper,
                                    children: [
                                        (0, r.jsx)(S.Z, {
                                            className: C.tierComparisonTable,
                                            guild: n,
                                        }),
                                        (0, r.jsx)(g.Z, {}),
                                        (0, r.jsx)(b.Z, {}),
                                    ],
                                }),
                                (0, r.jsx)(I.A, {}),
                                (0, r.jsx)("div", { className: C.lowerBodyBackgroundImage }),
                            ],
                        }),
                        (0, r.jsx)(o.$, {
                            innerRef: L,
                            onChange: G,
                            children: (0, r.jsx)("div", {
                                ref: L,
                                className: C.persistentCtaSpacer,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(y.Z, {
                    guild: n,
                    isVisible: !P,
                    closeLayer: U,
                }),
            ],
        })
    );
};
