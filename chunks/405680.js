n.d(t, {
    A: () => R,
}),
    n(896048);
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
    E = n(449280),
    b = n(247425),
    y = n(406245),
    O = n(965826),
    A = n(141614),
    v = n(217639),
    S = n(836275),
    I = n(694128),
    T = n(652215),
    C = n(985018),
    N = n(445698);
let R = function (e) {
    let { analyticsLocation: t, guild: n, onClose: R, scrollToPowerupCards: w } = e,
        [P, D] = i.useState(!0),
        x = i.useRef(!1),
        L = (0, c.A)(() => Date.now()),
        { analyticsLocations: j } = (0, u.Ay)(),
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
        V = i.useCallback(() => {
            G();
        }, [G]),
        F = i.useCallback(() => {
            null == R || R(),
                g.default.track(T.HAw.MODAL_DISMISSED, {
                    type: T.liQ.PREMIUM_GUILD_USER_MODAL,
                    location_stack: j,
                    location_section: t.section,
                    location_object: t.object,
                    guild_id: n.id,
                    duration_open_ms: Date.now() - L,
                });
        }, [R, t, j, L, n.id]),
        B = i.useCallback(
            (e) => {
                e &&
                    !x.current &&
                    (g.default.track(T.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: T.liQ.PREMIUM_GUILD_USER_MODAL,
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
        g.default.track(T.HAw.OPEN_MODAL, {
            type: T.liQ.PREMIUM_GUILD_USER_MODAL,
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
    let H = (0, f.C$)(n.id, "GuildBoostingMarketing"),
        Y = (0, a.bG)([p.A], () => p.A.hasFetchedCatalog(n.id)),
        W = (0, a.bG)([_.A], () => _.A.hasFetchedPowerupCatalog(n.id));
    return (
        i.useEffect(() => {
            H && !Y && (0, d.z9)(n.id);
        }, [n.id, H, Y]),
        i.useEffect(() => {
            if (w && W) {
                let e = setTimeout(() => {
                    G();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [w, G, W]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != R &&
                    (0, r.jsx)("div", {
                        className: N.bn,
                        children: (0, r.jsx)(l.A, {
                            className: N.ut,
                            closeAction: F,
                            keybind: "ESC",
                            variant: l.A.Variants.BOLD,
                        }),
                    }),
                (0, r.jsxs)(o.GtU, {
                    ref: k,
                    className: N.XG,
                    children: [
                        (0, r.jsxs)("div", {
                            className: N.wx,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: N.AZ,
                                    children: [
                                        (0, r.jsx)(h.A, {
                                            guild: e.guild,
                                            themeResponsive: !1,
                                            onButtonClick: V,
                                        }),
                                        (0, r.jsx)(o.Heading, {
                                            className: N.R_,
                                            color: "always-white",
                                            variant: "display-lg",
                                            children: C.intl.string(C.t.N4sqzL),
                                        }),
                                        (0, r.jsx)(b.A, {
                                            guild: n,
                                            closeLayer: F,
                                            onCtaVisibilityChange: D,
                                        }),
                                        (0, r.jsx)(A.A, {
                                            guild: n,
                                        }),
                                        (0, r.jsx)(v.A, {
                                            guild: n,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(I.$, {}),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: N.uE,
                            children: (0, r.jsx)(m.A, {
                                ref: U,
                                guild: e.guild,
                                onClose: F,
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: N.o6,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: N.y$,
                                    children: [
                                        (0, r.jsx)(S.A, {
                                            className: N.e4,
                                            guild: n,
                                        }),
                                        (0, r.jsx)(E.A, {}),
                                        (0, r.jsx)(y.A, {}),
                                    ],
                                }),
                                (0, r.jsx)(I.S, {}),
                                (0, r.jsx)("div", {
                                    className: N.LY,
                                }),
                            ],
                        }),
                        (0, r.jsx)(s.L, {
                            innerRef: M,
                            onChange: B,
                            children: (0, r.jsx)("div", {
                                ref: M,
                                className: N.mR,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(O.A, {
                    guild: n,
                    isVisible: !P,
                    closeLayer: F,
                }),
            ],
        })
    );
};
