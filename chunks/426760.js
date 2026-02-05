"use strict";
n.d(t, { A: () => N });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(230109),
    o = n(397927),
    l = n(444927),
    u = n(688810),
    c = n(665171),
    d = n(488803),
    _ = n(522055),
    f = n(645619),
    p = n(954571),
    h = n(917064),
    m = n(787001),
    g = n(232122),
    E = n(340195),
    A = n(244027),
    I = n(286188),
    T = n(278115),
    y = n(527113),
    S = n(250493),
    v = n(652215),
    C = n(985018),
    b = n(200430);
function N(e) {
    let { analyticsLocation: t, guild: n, onClose: N, scrollToPowerupCards: R } = e,
        [O, D] = i.useState(!0),
        L = i.useRef(!1),
        w = (0, l.A)(() => Date.now()),
        { analyticsLocations: x } = (0, u.Ay)(),
        P = i.useRef(null),
        M = i.useRef(null),
        k = i.useRef(null),
        U = i.useCallback(() => {
            null != k.current &&
                null != M.current &&
                M.current.scrollIntoViewNode({ node: k.current, animate: !0, shouldScrollToStart: !0 });
        }, []),
        G = i.useCallback(() => {
            U();
        }, [U]),
        V = i.useCallback(() => {
            N?.(),
                p.default.track(v.HAw.MODAL_DISMISSED, {
                    type: v.liQ.PREMIUM_GUILD_USER_MODAL,
                    location_stack: x,
                    location_section: t.section,
                    location_object: t.object,
                    guild_id: n.id,
                    duration_open_ms: Date.now() - w,
                });
        }, [N, t, x, w, n.id]),
        F = i.useCallback(
            (e) => {
                e &&
                    !L.current &&
                    (p.default.track(v.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: v.liQ.PREMIUM_GUILD_USER_MODAL,
                        location_stack: x,
                        location_section: t.section,
                        location_object: t.object,
                        guild_id: n.id,
                    }),
                    (L.current = !0));
            },
            [t, x, n.id],
        );
    i.useEffect(() => {
        p.default.track(v.HAw.OPEN_MODAL, {
            type: v.liQ.PREMIUM_GUILD_USER_MODAL,
            location_stack: x,
            location_section: t.section,
            location_object: t.object,
            guild_id: n.id,
        });
    }, [n.id, t, x]),
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
    let B = (0, d.C$)(n.id, "GuildBoostingMarketingRefresh"),
        j = (0, a.bG)([_.A], () => _.A.hasFetchedCatalog(n.id));
    i.useEffect(() => {
        B && !j && (0, c.z9)(n.id);
    }, [n.id, B, j]);
    let H = (0, a.bG)([f.A], () => f.A.hasFetchedPowerupCatalog(n.id));
    return (
        i.useEffect(() => {
            if (R && H) {
                let e = setTimeout(() => {
                    U();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [R, U, H]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != N &&
                    (0, r.jsx)("div", {
                        className: b.Yk,
                        children: (0, r.jsx)(o.DUT, {
                            className: b.b,
                            onClick: V,
                            "aria-label": C.intl.string(C.t.cpT0Cq),
                            children: (0, r.jsx)(o.PGe, { size: "md", color: "currentColor" }),
                        }),
                    }),
                (0, r.jsxs)(o.GtU, {
                    ref: M,
                    className: b.XG,
                    children: [
                        (0, r.jsxs)("div", {
                            className: b.wx,
                            children: [
                                (0, r.jsx)(E.A, { className: b.y2 }),
                                (0, r.jsxs)("div", {
                                    className: b.AZ,
                                    children: [
                                        (0, r.jsx)(I.A, { guildId: e.guild.id, onButtonClick: G }),
                                        (0, r.jsx)(m.A, { guild: n, closeLayer: V, onCtaVisibilityChange: D }),
                                        (0, r.jsx)(A.A, { guild: n }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: b.uE,
                            children: (0, r.jsx)(T.A, { ref: k, guild: e.guild, onClose: V }),
                        }),
                        (0, r.jsx)("div", {
                            className: b.o6,
                            children: (0, r.jsxs)("div", {
                                className: b.y$,
                                children: [
                                    (0, r.jsx)(y.A, { className: b.Q, guild: n }),
                                    (0, r.jsx)(h.A, {}),
                                    (0, r.jsx)(g.A, {}),
                                ],
                            }),
                        }),
                        (0, r.jsx)(s.L, {
                            innerRef: P,
                            onChange: F,
                            children: (0, r.jsx)("div", { ref: P, className: b.mR }),
                        }),
                    ],
                }),
                (0, r.jsx)(S.A, { guild: n, isVisible: !O, closeLayer: V }),
            ],
        })
    );
}
