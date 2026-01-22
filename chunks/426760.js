n.d(t, { A: () => N }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(230109),
    o = n(397927),
    l = n(684136),
    c = n(444927),
    u = n(688810),
    d = n(665171),
    f = n(488803),
    p = n(522055),
    _ = n(645619),
    h = n(427854),
    m = n(796780),
    g = n(954571),
    E = n(247425),
    b = n(965826),
    y = n(141614),
    O = n(217639),
    A = n(917064),
    v = n(232122),
    S = n(527113),
    I = n(652215),
    T = n(985018),
    C = n(200430);
function N(e) {
    let { analyticsLocation: t, guild: n, onClose: N, scrollToPowerupCards: R } = e,
        [w, P] = i.useState(!0),
        D = i.useRef(!1),
        x = (0, c.A)(() => Date.now()),
        { analyticsLocations: L } = (0, u.Ay)(),
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
        V = i.useCallback(() => {
            null == N || N(),
                g.default.track(I.HAw.MODAL_DISMISSED, {
                    type: I.liQ.PREMIUM_GUILD_USER_MODAL,
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
                    (g.default.track(I.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: I.liQ.PREMIUM_GUILD_USER_MODAL,
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
        g.default.track(I.HAw.OPEN_MODAL, {
            type: I.liQ.PREMIUM_GUILD_USER_MODAL,
            location_stack: L,
            location_section: t.section,
            location_object: t.object,
            guild_id: n.id,
        });
    }, [n.id, t, L]),
        i.useEffect(() => {
            function e(e) {
                "Escape" === e.key && V();
            }
            return (
                window.addEventListener("keydown", e),
                () => {
                    window.removeEventListener("keydown", e);
                }
            );
        }, [V]);
    let B = (0, f.C$)(n.id, "GuildBoostingMarketingRefresh"),
        H = (0, a.bG)([p.A], () => p.A.hasFetchedCatalog(n.id)),
        Y = (0, a.bG)([_.A], () => _.A.hasFetchedPowerupCatalog(n.id));
    return (
        i.useEffect(() => {
            B && !H && (0, d.z9)(n.id);
        }, [n.id, B, H]),
        i.useEffect(() => {
            if (R && Y) {
                let e = setTimeout(() => {
                    U();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [R, U, Y]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != N &&
                    (0, r.jsx)("div", {
                        className: C.bn,
                        children: (0, r.jsx)(l.A, {
                            className: C.ut,
                            closeAction: V,
                            keybind: "ESC",
                            variant: l.A.Variants.BOLD,
                        }),
                    }),
                (0, r.jsxs)(o.GtU, {
                    ref: M,
                    className: C.XG,
                    children: [
                        (0, r.jsx)("div", {
                            className: C.wx,
                            children: (0, r.jsxs)("div", {
                                className: C.AZ,
                                children: [
                                    (0, r.jsx)(h.A, {
                                        guild: e.guild,
                                        themeResponsive: !1,
                                        onButtonClick: G,
                                    }),
                                    (0, r.jsx)(o.Heading, {
                                        className: C.R_,
                                        color: "always-white",
                                        variant: "display-lg",
                                        children: T.intl.string(T.t.N4sqzL),
                                    }),
                                    (0, r.jsx)(E.A, {
                                        guild: n,
                                        closeLayer: V,
                                        onCtaVisibilityChange: P,
                                    }),
                                    (0, r.jsx)(y.A, { guild: n }),
                                    (0, r.jsx)(O.A, { guild: n }),
                                ],
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: C.uE,
                            children: (0, r.jsx)(m.A, {
                                ref: k,
                                guild: e.guild,
                                onClose: V,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: C.o6,
                            children: (0, r.jsxs)("div", {
                                className: C.y$,
                                children: [
                                    (0, r.jsx)(S.A, {
                                        className: C.Q,
                                        guild: n,
                                    }),
                                    (0, r.jsx)(A.A, {}),
                                    (0, r.jsx)(v.A, {}),
                                ],
                            }),
                        }),
                        (0, r.jsx)(s.L, {
                            innerRef: j,
                            onChange: F,
                            children: (0, r.jsx)("div", {
                                ref: j,
                                className: C.mR,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(b.A, {
                    guild: n,
                    isVisible: !w,
                    closeLayer: V,
                }),
            ],
        })
    );
}
