"use strict";
n.d(t, { A: () => R });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(230109),
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
    E = n(232122),
    g = n(340195),
    A = n(244027),
    I = n(278115),
    T = n(527113),
    S = n(250493),
    y = n(436083),
    v = n(652215),
    N = n(985018),
    C = n(909095);
function R(e) {
    let { analyticsLocation: t, guild: n, onClose: R, scrollToPowerupCards: O } = e,
        [b, D] = i.useState(!0),
        L = i.useRef(!1),
        w = (0, l.A)(() => Date.now()),
        { analyticsLocations: M } = (0, u.Ay)(),
        P = i.useRef(null),
        x = i.useRef(null),
        k = i.useRef(null),
        U = i.useCallback(() => {
            null != k.current &&
                null != x.current &&
                x.current.scrollIntoViewNode({ node: k.current, animate: !0, shouldScrollToStart: !0 });
        }, []),
        G = i.useCallback(() => {
            R?.(),
                p.default.track(v.HAw.MODAL_DISMISSED, {
                    type: v.liQ.PREMIUM_GUILD_USER_MODAL,
                    location_stack: M,
                    location_section: t.section,
                    location_object: t.object,
                    guild_id: n.id,
                    duration_open_ms: Date.now() - w,
                });
        }, [R, t, M, w, n.id]),
        F = i.useCallback(
            (e) => {
                e &&
                    !L.current &&
                    (p.default.track(v.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: v.liQ.PREMIUM_GUILD_USER_MODAL,
                        location_stack: M,
                        location_section: t.section,
                        location_object: t.object,
                        guild_id: n.id,
                    }),
                    (L.current = !0));
            },
            [t, M, n.id],
        );
    i.useEffect(() => {
        p.default.track(v.HAw.OPEN_MODAL, {
            type: v.liQ.PREMIUM_GUILD_USER_MODAL,
            location_stack: M,
            location_section: t.section,
            location_object: t.object,
            guild_id: n.id,
        });
    }, [n.id, t, M]),
        i.useEffect(() => {
            function e(e) {
                "Escape" === e.key && G();
            }
            return (
                window.addEventListener("keydown", e),
                () => {
                    window.removeEventListener("keydown", e);
                }
            );
        }, [G]);
    let V = (0, d.C$)(n.id, "GuildBoostingMarketingRefresh"),
        B = (0, s.bG)([_.A], () => _.A.shouldFetchCatalogForGuild(n.id));
    i.useEffect(() => {
        V && B && (0, c.z9)(n.id);
    }, [n.id, V, B]);
    let H = (0, s.bG)([f.A], () => f.A.hasFetchedPowerupCatalog(n.id));
    return (
        i.useEffect(() => {
            if (O && H) {
                let e = setTimeout(() => {
                    U();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [O, U, H]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != R &&
                    (0, r.jsx)("div", {
                        className: C.Yk,
                        children: (0, r.jsx)(o.DUT, {
                            className: C.b,
                            onClick: G,
                            "aria-label": N.intl.string(N.t.cpT0Cq),
                            children: (0, r.jsx)(o.PGe, { size: "md", color: "currentColor" }),
                        }),
                    }),
                (0, r.jsxs)(o.GtU, {
                    ref: x,
                    className: C.XG,
                    children: [
                        (0, r.jsxs)("div", {
                            className: C.wx,
                            children: [
                                (0, r.jsx)(g.A, { className: C.y2 }),
                                (0, r.jsxs)("div", {
                                    className: C.AZ,
                                    children: [
                                        (0, r.jsx)(m.A, {
                                            guild: n,
                                            closeLayer: G,
                                            onCtaVisibilityChange: D,
                                            className: C.Oh,
                                        }),
                                        (0, r.jsx)(y.A, {
                                            guild: n,
                                            analyticsLocation: t,
                                            videoPlacement: "top",
                                            sourceAnalyticsLocations: M,
                                        }),
                                        (0, r.jsx)(A.A, { guild: n }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: C.uE,
                            children: (0, r.jsx)(I.A, { ref: k, guild: e.guild, onClose: G }),
                        }),
                        (0, r.jsx)("div", {
                            className: C.o6,
                            children: (0, r.jsxs)("div", {
                                className: C.y$,
                                children: [
                                    (0, r.jsx)(T.A, { className: C.Q, guild: n }),
                                    (0, r.jsx)(h.A, {}),
                                    (0, r.jsx)(E.A, {}),
                                ],
                            }),
                        }),
                        (0, r.jsx)(a.L, {
                            innerRef: P,
                            onChange: F,
                            children: (0, r.jsx)("div", { ref: P, className: C.mR }),
                        }),
                    ],
                }),
                (0, r.jsx)(S.A, { guild: n, isVisible: !b, closeLayer: G }),
            ],
        })
    );
}
