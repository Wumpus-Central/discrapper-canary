"use strict";
n.d(t, { A: () => C });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(230109),
    o = n(397927),
    l = n(688810),
    u = n(665171),
    c = n(488803),
    d = n(522055),
    _ = n(645619),
    f = n(954571),
    p = n(917064),
    h = n(787001),
    m = n(232122),
    E = n(340195),
    g = n(244027),
    A = n(278115),
    I = n(527113),
    T = n(250493),
    S = n(436083),
    y = n(652215),
    v = n(985018),
    N = n(909095);
function C(e) {
    let { analyticsLocation: t, guild: n, onClose: C, scrollToPowerupCards: R } = e,
        [O, b] = i.useState(!0),
        D = i.useRef(!1),
        { analyticsLocations: L } = (0, l.Ay)(),
        w = i.useRef(null),
        M = i.useRef(null),
        P = i.useRef(null),
        x = i.useCallback(() => {
            C?.();
        }, [C]),
        k = i.useCallback(() => {
            null != P.current &&
                null != M.current &&
                M.current.scrollIntoViewNode({ node: P.current, animate: !0, shouldScrollToStart: !0 });
        }, []),
        U = i.useCallback(
            (e) => {
                e &&
                    !D.current &&
                    (f.default.track(y.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: y.liQ.PREMIUM_GUILD_USER_MODAL,
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
        f.default.track(y.HAw.OPEN_MODAL, {
            type: y.liQ.PREMIUM_GUILD_USER_MODAL,
            location_stack: L,
            location_section: t.section,
            location_object: t.object,
            guild_id: n.id,
        });
    }, [n.id, t, L]);
    let G = (0, c.C$)(n.id, "GuildBoostingMarketingRefresh"),
        F = (0, s.bG)([d.A], () => d.A.shouldFetchCatalogForGuild(n.id));
    i.useEffect(() => {
        G && F && (0, u.z9)(n.id);
    }, [n.id, G, F]);
    let V = (0, s.bG)([_.A], () => _.A.hasFetchedPowerupCatalog(n.id));
    return (
        i.useEffect(() => {
            if (R && V) {
                let e = setTimeout(() => {
                    k();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [R, k, V]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != C &&
                    (0, r.jsx)("div", {
                        className: N.Yk,
                        children: (0, r.jsx)(o.DUT, {
                            className: N.b,
                            onClick: x,
                            "aria-label": v.intl.string(v.t.cpT0Cq),
                            children: (0, r.jsx)(o.PGe, { size: "md", color: "currentColor" }),
                        }),
                    }),
                (0, r.jsxs)(o.GtU, {
                    ref: M,
                    className: N.XG,
                    children: [
                        (0, r.jsxs)("div", {
                            className: N.wx,
                            children: [
                                (0, r.jsx)(E.A, { className: N.y2 }),
                                (0, r.jsxs)("div", {
                                    className: N.AZ,
                                    children: [
                                        (0, r.jsx)(h.A, {
                                            guild: n,
                                            closeLayer: x,
                                            onCtaVisibilityChange: b,
                                            className: N.Oh,
                                        }),
                                        (0, r.jsx)(S.A, {
                                            guild: n,
                                            analyticsLocation: t,
                                            videoPlacement: "top",
                                            sourceAnalyticsLocations: L,
                                        }),
                                        (0, r.jsx)(g.A, { guild: n }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: N.uE,
                            children: (0, r.jsx)(A.A, { ref: P, guild: e.guild, onClose: x }),
                        }),
                        (0, r.jsx)("div", {
                            className: N.o6,
                            children: (0, r.jsxs)("div", {
                                className: N.y$,
                                children: [
                                    (0, r.jsx)(I.A, { className: N.Q, guild: n }),
                                    (0, r.jsx)(p.A, {}),
                                    (0, r.jsx)(m.A, {}),
                                ],
                            }),
                        }),
                        (0, r.jsx)(a.L, {
                            innerRef: w,
                            onChange: U,
                            children: (0, r.jsx)("div", { ref: w, className: N.mR }),
                        }),
                    ],
                }),
                (0, r.jsx)(T.A, { guild: n, isVisible: !O, closeLayer: x }),
            ],
        })
    );
}
