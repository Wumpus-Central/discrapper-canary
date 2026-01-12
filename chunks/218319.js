n.d(t, { Z: () => A }), n(388685);
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
    g = n(355045),
    E = n(394769),
    b = n(555932),
    y = n(808189),
    O = n(998857),
    v = n(917699),
    S = n(155819),
    I = n(981631),
    T = n(388032),
    C = n(924699);
function A(e) {
    let { analyticsLocation: t, guild: n, onClose: A } = e,
        [N, P] = i.useState(!0),
        R = i.useRef(!1),
        w = (0, c.Z)(() => Date.now()),
        { analyticsLocations: D } = (0, u.ZP)(),
        x = i.useRef(null),
        L = i.useRef(null),
        j = i.useRef(null),
        M = i.useCallback(() => {
            null != j.current &&
                null != L.current &&
                L.current.scrollTo({
                    to: j.current.offsetTop,
                    animate: !0,
                });
        }, []),
        k = i.useCallback(() => {
            null == A || A(),
                h.default.track(I.rMx.MODAL_DISMISSED, {
                    type: I.ZY5.PREMIUM_GUILD_USER_MODAL,
                    location_stack: D,
                    location_section: t.section,
                    location_object: t.object,
                    guild_id: n.id,
                    duration_open_ms: Date.now() - w,
                });
        }, [A, t, D, w, n.id]),
        U = i.useCallback(
            (e) => {
                e &&
                    !R.current &&
                    (h.default.track(I.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: I.ZY5.PREMIUM_GUILD_USER_MODAL,
                        location_stack: D,
                        location_section: t.section,
                        location_object: t.object,
                        guild_id: n.id,
                    }),
                    (R.current = !0));
            },
            [t, D, n.id],
        );
    i.useEffect(() => {
        h.default.track(I.rMx.OPEN_MODAL, {
            type: I.ZY5.PREMIUM_GUILD_USER_MODAL,
            location_stack: D,
            location_section: t.section,
            location_object: t.object,
            guild_id: n.id,
        });
    }, [n.id, t, D]),
        i.useEffect(() => {
            function e(e) {
                "Escape" === e.key && k();
            }
            return (
                window.addEventListener("keydown", e),
                () => {
                    window.removeEventListener("keydown", e);
                }
            );
        }, [k]);
    let G = (0, f.BU)(n.id, "GuildBoostingMarketingRefresh"),
        Z = (0, a.e7)([p.Z], () => p.Z.hasFetchedCatalog(n.id));
    return (
        i.useEffect(() => {
            G && !Z && (0, d.ce)(n.id);
        }, [n.id, G, Z]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != A &&
                    (0, r.jsx)("div", {
                        className: C.closeIconWrapper,
                        children: (0, r.jsx)(l.Z, {
                            className: C.closeIcon,
                            closeAction: k,
                            keybind: "ESC",
                            variant: l.Z.Variants.BOLD,
                        }),
                    }),
                (0, r.jsxs)(s.yWw, {
                    ref: L,
                    className: C.scroller,
                    children: [
                        (0, r.jsx)("div", {
                            className: C.header,
                            children: (0, r.jsxs)("div", {
                                className: C.headerContentWrapper,
                                children: [
                                    (0, r.jsx)(_.Z, {
                                        guild: e.guild,
                                        themeResponsive: !1,
                                        onButtonClick: M,
                                    }),
                                    (0, r.jsx)(s.Heading, {
                                        className: C.heading,
                                        color: "always-white",
                                        variant: "display-lg",
                                        children: T.intl.string(T.t.N4sqzL),
                                    }),
                                    (0, r.jsx)(g.Z, {
                                        guild: n,
                                        closeLayer: k,
                                        onCtaVisibilityChange: P,
                                    }),
                                    (0, r.jsx)(b.Z, { guild: n }),
                                    (0, r.jsx)(y.Z, { guild: n }),
                                ],
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: C.middleBodyContentWrapper,
                            children: (0, r.jsx)(m.Z, {
                                ref: j,
                                guild: e.guild,
                                onClose: k,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: C.lowerBody,
                            children: (0, r.jsxs)("div", {
                                className: C.lowerBodyContentWrapper,
                                children: [
                                    (0, r.jsx)(S.Z, {
                                        className: C.perksTable,
                                        guild: n,
                                    }),
                                    (0, r.jsx)(O.Z, {}),
                                    (0, r.jsx)(v.Z, {}),
                                ],
                            }),
                        }),
                        (0, r.jsx)(o.$, {
                            innerRef: x,
                            onChange: U,
                            children: (0, r.jsx)("div", {
                                ref: x,
                                className: C.persistentCtaSpacer,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(E.Z, {
                    guild: n,
                    isVisible: !N,
                    closeLayer: k,
                }),
            ],
        })
    );
}
