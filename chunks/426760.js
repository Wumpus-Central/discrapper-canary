"use strict";
n.d(t, { A: () => b });
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
    S = n(527113),
    y = n(250493),
    v = n(652215),
    C = n(985018),
    N = n(200430);
function b(e) {
    let { analyticsLocation: t, guild: n, onClose: b, scrollToPowerupCards: R } = e,
        [O, D] = i.useState(!0),
        L = i.useRef(!1),
        w = (0, l.A)(() => Date.now()),
        { analyticsLocations: x } = (0, u.Ay)(),
        M = i.useRef(null),
        P = i.useRef(null),
        k = i.useRef(null),
        U = i.useCallback(() => {
            null != k.current &&
                null != P.current &&
                P.current.scrollIntoViewNode({ node: k.current, animate: !0, shouldScrollToStart: !0 });
        }, []),
        G = i.useCallback(() => {
            U();
        }, [U]),
        F = i.useCallback(() => {
            b?.(),
                p.default.track(v.HAw.MODAL_DISMISSED, {
                    type: v.liQ.PREMIUM_GUILD_USER_MODAL,
                    location_stack: x,
                    location_section: t.section,
                    location_object: t.object,
                    guild_id: n.id,
                    duration_open_ms: Date.now() - w,
                });
        }, [b, t, x, w, n.id]),
        V = i.useCallback(
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
                "Escape" === e.key && F();
            }
            return (
                window.addEventListener("keydown", e),
                () => {
                    window.removeEventListener("keydown", e);
                }
            );
        }, [F]);
    let B = (0, d.C$)(n.id, "GuildBoostingMarketingRefresh"),
        j = (0, a.bG)([_.A], () => _.A.shouldFetchCatalogForGuild(n.id));
    i.useEffect(() => {
        B && j && (0, c.z9)(n.id);
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
                null != b &&
                    (0, r.jsx)("div", {
                        className: N.Yk,
                        children: (0, r.jsx)(o.DUT, {
                            className: N.b,
                            onClick: F,
                            "aria-label": C.intl.string(C.t.cpT0Cq),
                            children: (0, r.jsx)(o.PGe, { size: "md", color: "currentColor" }),
                        }),
                    }),
                (0, r.jsxs)(o.GtU, {
                    ref: P,
                    className: N.XG,
                    children: [
                        (0, r.jsxs)("div", {
                            className: N.wx,
                            children: [
                                (0, r.jsx)(E.A, { className: N.y2 }),
                                (0, r.jsxs)("div", {
                                    className: N.AZ,
                                    children: [
                                        (0, r.jsx)(I.A, { guildId: e.guild.id, onButtonClick: G }),
                                        (0, r.jsx)(m.A, { guild: n, closeLayer: F, onCtaVisibilityChange: D }),
                                        (0, r.jsx)(A.A, { guild: n }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: N.uE,
                            children: (0, r.jsx)(T.A, { ref: k, guild: e.guild, onClose: F }),
                        }),
                        (0, r.jsx)("div", {
                            className: N.o6,
                            children: (0, r.jsxs)("div", {
                                className: N.y$,
                                children: [
                                    (0, r.jsx)(S.A, { className: N.Q, guild: n }),
                                    (0, r.jsx)(h.A, {}),
                                    (0, r.jsx)(g.A, {}),
                                ],
                            }),
                        }),
                        (0, r.jsx)(s.L, {
                            innerRef: M,
                            onChange: V,
                            children: (0, r.jsx)("div", { ref: M, className: N.mR }),
                        }),
                    ],
                }),
                (0, r.jsx)(y.A, { guild: n, isVisible: !O, closeLayer: F }),
            ],
        })
    );
}
