n.d(t, { Z: () => T }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(622535),
    o = n(481060),
    s = n(425493),
    l = n(211266),
    c = n(906732),
    u = n(174604),
    d = n(302175),
    f = n(626135),
    _ = n(724884),
    p = n(355045),
    h = n(290799),
    m = n(394769),
    g = n(555932),
    E = n(808189),
    b = n(362948),
    y = n(383881),
    O = n(981631),
    v = n(388032),
    I = n(517872);
let T = function (e) {
    let { analyticsLocation: t, guild: n, onClose: T } = e,
        [S, A] = i.useState(!0),
        C = i.useRef(!1),
        N = (0, l.Z)(() => Date.now()),
        { analyticsLocations: R } = (0, c.ZP)(),
        P = i.useRef(null),
        D = i.useRef(null),
        w = i.useRef(null),
        x = i.useCallback(() => {
            null != w.current &&
                null != D.current &&
                D.current.scrollTo({
                    to: w.current.offsetTop,
                    animate: !0,
                });
        }, []),
        L = i.useCallback(() => {
            null == T || T(),
                f.default.track(O.rMx.MODAL_DISMISSED, {
                    type: O.ZY5.PREMIUM_GUILD_USER_MODAL,
                    location_stack: R,
                    location_section: t.section,
                    location_object: t.object,
                    guild_id: n.id,
                    duration_open_ms: Date.now() - N,
                });
        }, [T, t, R, N, n.id]),
        M = i.useCallback(
            (e) => {
                e &&
                    !C.current &&
                    (f.default.track(O.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: O.ZY5.PREMIUM_GUILD_USER_MODAL,
                        location_stack: R,
                        location_section: t.section,
                        location_object: t.object,
                        guild_id: n.id,
                    }),
                    (C.current = !0));
            },
            [t, R, n.id],
        );
    return (
        i.useEffect(() => {
            f.default.track(O.rMx.OPEN_MODAL, {
                type: O.ZY5.PREMIUM_GUILD_USER_MODAL,
                location_stack: R,
                location_section: t.section,
                location_object: t.object,
                guild_id: n.id,
            });
        }, [n.id, t, R]),
        i.useEffect(() => {
            function e(e) {
                "Escape" === e.key && L();
            }
            return (
                window.addEventListener("keydown", e),
                () => {
                    window.removeEventListener("keydown", e);
                }
            );
        }, [L]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != T &&
                    (0, r.jsx)("div", {
                        className: I.closeIconWrapper,
                        children: (0, r.jsx)(s.Z, {
                            className: I.closeIcon,
                            closeAction: L,
                            keybind: "ESC",
                            variant: s.Z.Variants.BOLD,
                        }),
                    }),
                (0, r.jsxs)(o.yWw, {
                    ref: D,
                    className: I.scroller,
                    children: [
                        (0, r.jsxs)("div", {
                            className: I.header,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: I.headerContentWrapper,
                                    children: [
                                        (0, r.jsx)(u.Z, {
                                            guild: e.guild,
                                            themeResponsive: !1,
                                            onButtonClick: x,
                                        }),
                                        (0, r.jsx)(o.Heading, {
                                            className: I.heading,
                                            color: "always-white",
                                            variant: "display-lg",
                                            children: v.intl.string(v.t.N4sqzL),
                                        }),
                                        (0, r.jsx)(p.Z, {
                                            guild: n,
                                            closeLayer: L,
                                            onCtaVisibilityChange: A,
                                        }),
                                        (0, r.jsx)(g.Z, { guild: n }),
                                        (0, r.jsx)(E.Z, { guild: n }),
                                    ],
                                }),
                                (0, r.jsx)(y.O, {}),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: I.middleBodyContentWrapper,
                            children: (0, r.jsx)(d.Z, {
                                ref: w,
                                guild: e.guild,
                                onClose: L,
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: I.lowerBody,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: I.lowerBodyContentWrapper,
                                    children: [
                                        (0, r.jsx)(b.Z, {
                                            className: I.tierComparisonTable,
                                            guild: n,
                                        }),
                                        (0, r.jsx)(_.Z, {}),
                                        (0, r.jsx)(h.Z, {}),
                                    ],
                                }),
                                (0, r.jsx)(y.A, {}),
                                (0, r.jsx)("div", { className: I.lowerBodyBackgroundImage }),
                            ],
                        }),
                        (0, r.jsx)(a.$, {
                            innerRef: P,
                            onChange: M,
                            children: (0, r.jsx)("div", {
                                ref: P,
                                className: I.persistentCtaSpacer,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(m.Z, {
                    guild: n,
                    isVisible: !S,
                    closeLayer: L,
                }),
            ],
        })
    );
};
