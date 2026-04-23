"use strict";
n.d(t, { A: () => R });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(230109),
    o = n(939249),
    l = n(789645),
    u = n(599319),
    c = n(688810),
    d = n(665171),
    _ = n(488803),
    f = n(522055),
    p = n(645619),
    h = n(954571),
    E = n(917064),
    m = n(787001),
    g = n(232122),
    A = n(340195),
    I = n(244027),
    T = n(278115),
    S = n(527113),
    y = n(250493),
    N = n(436083),
    v = n(652215),
    C = n(985018),
    O = n(215895);
function R(e) {
    let { analyticsLocation: t, guild: n, onClose: R, scrollToPowerupCards: b } = e,
        [D, L] = i.useState(!0),
        w = i.useRef(!1),
        { analyticsLocations: M } = (0, c.Ay)(),
        P = i.useRef(null),
        x = i.useRef(null),
        k = i.useRef(null),
        U = i.useCallback(() => {
            R?.();
        }, [R]),
        G = i.useCallback(() => {
            null != k.current &&
                null != x.current &&
                x.current.scrollIntoViewNode({ node: k.current, animate: !0, shouldScrollToStart: !0 });
        }, []),
        F = i.useCallback(
            (e) => {
                e &&
                    !w.current &&
                    (h.default.track(v.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: v.liQ.PREMIUM_GUILD_USER_MODAL,
                        location_stack: M,
                        location_section: t.section,
                        location_object: t.object,
                        guild_id: n.id,
                    }),
                    (w.current = !0));
            },
            [t, M, n.id],
        );
    i.useEffect(() => {
        h.default.track(v.HAw.OPEN_MODAL, {
            type: v.liQ.PREMIUM_GUILD_USER_MODAL,
            location_stack: M,
            location_section: t.section,
            location_object: t.object,
            guild_id: n.id,
        });
    }, [n.id, t, M]);
    let V = (0, _.C$)(n.id, "GuildBoostingMarketingRefresh"),
        B = (0, s.bG)([f.A], () => f.A.shouldFetchCatalogForGuild(n.id));
    i.useEffect(() => {
        V && B && (0, d.z9)(n.id);
    }, [n.id, V, B]);
    let H = (0, s.bG)([p.A], () => p.A.hasFetchedPowerupCatalog(n.id));
    return (
        i.useEffect(() => {
            if (b && H) {
                let e = setTimeout(() => {
                    G();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [b, G, H]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != R &&
                    (0, r.jsx)("div", {
                        className: O.Yk,
                        children: (0, r.jsx)(o.D, {
                            className: O.b,
                            onClick: U,
                            "aria-label": C.intl.string(C.t.cpT0Cq),
                            children: (0, r.jsx)(l.P, { size: "md", color: "currentColor" }),
                        }),
                    }),
                (0, r.jsxs)(u.Gt, {
                    ref: x,
                    className: O.XG,
                    children: [
                        (0, r.jsxs)("div", {
                            className: O.wx,
                            children: [
                                (0, r.jsx)(A.A, { className: O.y2 }),
                                (0, r.jsxs)("div", {
                                    className: O.AZ,
                                    children: [
                                        (0, r.jsx)(m.A, {
                                            guild: n,
                                            closeLayer: U,
                                            onCtaVisibilityChange: L,
                                            className: O.Oh,
                                        }),
                                        (0, r.jsx)(N.A, {
                                            guild: n,
                                            analyticsLocation: t,
                                            videoPlacement: "top",
                                            sourceAnalyticsLocations: M,
                                        }),
                                        (0, r.jsx)(I.A, { guild: n }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: O.uE,
                            children: (0, r.jsx)(T.A, { ref: k, guild: e.guild, onClose: U }),
                        }),
                        (0, r.jsx)("div", {
                            className: O.o6,
                            children: (0, r.jsxs)("div", {
                                className: O.y$,
                                children: [
                                    (0, r.jsx)(S.A, { className: O.Q, guild: n }),
                                    (0, r.jsx)(E.A, {}),
                                    (0, r.jsx)(g.A, {}),
                                ],
                            }),
                        }),
                        (0, r.jsx)(a.L, {
                            innerRef: P,
                            onChange: F,
                            children: (0, r.jsx)("div", { ref: P, className: O.mR }),
                        }),
                    ],
                }),
                (0, r.jsx)(y.A, { guild: n, isVisible: !D, closeLayer: U }),
            ],
        })
    );
}
