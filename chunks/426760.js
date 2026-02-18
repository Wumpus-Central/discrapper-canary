"use strict";
n.d(t, { A: () => D });
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
    h = n(927581),
    p = n(954571),
    g = n(917064),
    E = n(787001),
    A = n(232122),
    I = n(340195),
    T = n(244027),
    y = n(286188),
    S = n(278115),
    v = n(527113),
    C = n(250493),
    b = n(436083),
    N = n(652215),
    R = n(985018),
    O = n(200430);
function D(e) {
    let { analyticsLocation: t, guild: n, onClose: D, scrollToPowerupCards: L } = e,
        [w, x] = i.useState(!0),
        P = i.useRef(!1),
        M = (0, l.A)(() => Date.now()),
        { analyticsLocations: k } = (0, u.Ay)(),
        U = i.useRef(null),
        G = i.useRef(null),
        F = i.useRef(null),
        V = i.useCallback(() => {
            null != F.current &&
                null != G.current &&
                G.current.scrollIntoViewNode({ node: F.current, animate: !0, shouldScrollToStart: !0 });
        }, []),
        B = i.useCallback(() => {
            V();
        }, [V]),
        j = i.useCallback(() => {
            D?.(),
                p.default.track(N.HAw.MODAL_DISMISSED, {
                    type: N.liQ.PREMIUM_GUILD_USER_MODAL,
                    location_stack: k,
                    location_section: t.section,
                    location_object: t.object,
                    guild_id: n.id,
                    duration_open_ms: Date.now() - M,
                });
        }, [D, t, k, M, n.id]),
        H = i.useCallback(
            (e) => {
                e &&
                    !P.current &&
                    (p.default.track(N.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: N.liQ.PREMIUM_GUILD_USER_MODAL,
                        location_stack: k,
                        location_section: t.section,
                        location_object: t.object,
                        guild_id: n.id,
                    }),
                    (P.current = !0));
            },
            [t, k, n.id],
        );
    i.useEffect(() => {
        p.default.track(N.HAw.OPEN_MODAL, {
            type: N.liQ.PREMIUM_GUILD_USER_MODAL,
            location_stack: k,
            location_section: t.section,
            location_object: t.object,
            guild_id: n.id,
        });
    }, [n.id, t, k]),
        i.useEffect(() => {
            function e(e) {
                "Escape" === e.key && j();
            }
            return (
                window.addEventListener("keydown", e),
                () => {
                    window.removeEventListener("keydown", e);
                }
            );
        }, [j]);
    let Y = (0, h.u)("GuildBoostingMarketingRefresh"),
        W = (0, d.C$)(n.id, "GuildBoostingMarketingRefresh"),
        K = (0, a.bG)([_.A], () => _.A.shouldFetchCatalogForGuild(n.id));
    i.useEffect(() => {
        W && K && (0, c.z9)(n.id);
    }, [n.id, W, K]);
    let $ = (0, a.bG)([f.A], () => f.A.hasFetchedPowerupCatalog(n.id));
    return (
        i.useEffect(() => {
            if (L && $) {
                let e = setTimeout(() => {
                    V();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [L, V, $]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != D &&
                    (0, r.jsx)("div", {
                        className: O.Yk,
                        children: (0, r.jsx)(o.DUT, {
                            className: O.b,
                            onClick: j,
                            "aria-label": R.intl.string(R.t.cpT0Cq),
                            children: (0, r.jsx)(o.PGe, { size: "md", color: "currentColor" }),
                        }),
                    }),
                (0, r.jsxs)(o.GtU, {
                    ref: G,
                    className: O.XG,
                    children: [
                        (0, r.jsxs)("div", {
                            className: O.wx,
                            children: [
                                (0, r.jsx)(I.A, { className: O.y2 }),
                                (0, r.jsxs)("div", {
                                    className: O.AZ,
                                    children: [
                                        "top" !== Y && (0, r.jsx)(y.A, { guildId: e.guild.id, onButtonClick: B }),
                                        (0, r.jsx)(E.A, {
                                            guild: n,
                                            closeLayer: j,
                                            onCtaVisibilityChange: x,
                                            className: "top" === Y ? O.Oh : void 0,
                                        }),
                                        "top" === Y && (0, r.jsx)(b.A, { guild: n }),
                                        (0, r.jsx)(T.A, { guild: n }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: O.uE,
                            children: (0, r.jsx)(S.A, { ref: F, guild: e.guild, onClose: j }),
                        }),
                        (0, r.jsx)("div", {
                            className: O.o6,
                            children: (0, r.jsxs)("div", {
                                className: O.y$,
                                children: [
                                    (0, r.jsx)(v.A, { className: O.Q, guild: n }),
                                    (0, r.jsx)(g.A, {}),
                                    "bottom" === Y &&
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(o.Heading, {
                                                    className: O.Qc,
                                                    variant: "heading-xxl/semibold",
                                                    children: R.intl.string(R.t["0f1VCH"]),
                                                }),
                                                (0, r.jsx)(b.A, { guild: n }),
                                            ],
                                        }),
                                    (0, r.jsx)(A.A, {}),
                                ],
                            }),
                        }),
                        (0, r.jsx)(s.L, {
                            innerRef: U,
                            onChange: H,
                            children: (0, r.jsx)("div", { ref: U, className: O.mR }),
                        }),
                    ],
                }),
                (0, r.jsx)(C.A, { guild: n, isVisible: !w, closeLayer: j }),
            ],
        })
    );
}
