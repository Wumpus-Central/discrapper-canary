"use strict";
n.d(t, { A: () => O });
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
    p = n(927581),
    h = n(954571),
    m = n(917064),
    E = n(787001),
    g = n(232122),
    A = n(340195),
    I = n(244027),
    T = n(286188),
    S = n(278115),
    y = n(527113),
    v = n(250493),
    N = n(436083),
    C = n(652215),
    b = n(985018),
    R = n(200430);
function O(e) {
    let { analyticsLocation: t, guild: n, onClose: O, scrollToPowerupCards: D } = e,
        [L, w] = i.useState(!0),
        x = i.useRef(!1),
        M = (0, l.A)(() => Date.now()),
        { analyticsLocations: P } = (0, u.Ay)(),
        k = i.useRef(null),
        U = i.useRef(null),
        G = i.useRef(null),
        F = i.useCallback(() => {
            null != G.current &&
                null != U.current &&
                U.current.scrollIntoViewNode({ node: G.current, animate: !0, shouldScrollToStart: !0 });
        }, []),
        V = i.useCallback(() => {
            F();
        }, [F]),
        B = i.useCallback(() => {
            O?.(),
                h.default.track(C.HAw.MODAL_DISMISSED, {
                    type: C.liQ.PREMIUM_GUILD_USER_MODAL,
                    location_stack: P,
                    location_section: t.section,
                    location_object: t.object,
                    guild_id: n.id,
                    duration_open_ms: Date.now() - M,
                });
        }, [O, t, P, M, n.id]),
        H = i.useCallback(
            (e) => {
                e &&
                    !x.current &&
                    (h.default.track(C.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: C.liQ.PREMIUM_GUILD_USER_MODAL,
                        location_stack: P,
                        location_section: t.section,
                        location_object: t.object,
                        guild_id: n.id,
                    }),
                    (x.current = !0));
            },
            [t, P, n.id],
        );
    i.useEffect(() => {
        h.default.track(C.HAw.OPEN_MODAL, {
            type: C.liQ.PREMIUM_GUILD_USER_MODAL,
            location_stack: P,
            location_section: t.section,
            location_object: t.object,
            guild_id: n.id,
        });
    }, [n.id, t, P]),
        i.useEffect(() => {
            function e(e) {
                "Escape" === e.key && B();
            }
            return (
                window.addEventListener("keydown", e),
                () => {
                    window.removeEventListener("keydown", e);
                }
            );
        }, [B]);
    let j = (0, p.u)("GuildBoostingMarketingRefresh"),
        Y = (0, d.C$)(n.id, "GuildBoostingMarketingRefresh"),
        W = (0, s.bG)([_.A], () => _.A.shouldFetchCatalogForGuild(n.id));
    i.useEffect(() => {
        Y && W && (0, c.z9)(n.id);
    }, [n.id, Y, W]);
    let K = (0, s.bG)([f.A], () => f.A.hasFetchedPowerupCatalog(n.id));
    return (
        i.useEffect(() => {
            if (D && K) {
                let e = setTimeout(() => {
                    F();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [D, F, K]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != O &&
                    (0, r.jsx)("div", {
                        className: R.Yk,
                        children: (0, r.jsx)(o.DUT, {
                            className: R.b,
                            onClick: B,
                            "aria-label": b.intl.string(b.t.cpT0Cq),
                            children: (0, r.jsx)(o.PGe, { size: "md", color: "currentColor" }),
                        }),
                    }),
                (0, r.jsxs)(o.GtU, {
                    ref: U,
                    className: R.XG,
                    children: [
                        (0, r.jsxs)("div", {
                            className: R.wx,
                            children: [
                                (0, r.jsx)(A.A, { className: R.y2 }),
                                (0, r.jsxs)("div", {
                                    className: R.AZ,
                                    children: [
                                        "top" !== j && (0, r.jsx)(T.A, { guildId: e.guild.id, onButtonClick: V }),
                                        (0, r.jsx)(E.A, {
                                            guild: n,
                                            closeLayer: B,
                                            onCtaVisibilityChange: w,
                                            className: "top" === j ? R.Oh : void 0,
                                        }),
                                        "top" === j &&
                                            (0, r.jsx)(N.A, {
                                                guild: n,
                                                analyticsLocation: t,
                                                videoPlacement: "top",
                                                sourceAnalyticsLocations: P,
                                            }),
                                        (0, r.jsx)(I.A, { guild: n }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: R.uE,
                            children: (0, r.jsx)(S.A, { ref: G, guild: e.guild, onClose: B }),
                        }),
                        (0, r.jsx)("div", {
                            className: R.o6,
                            children: (0, r.jsxs)("div", {
                                className: R.y$,
                                children: [
                                    (0, r.jsx)(y.A, { className: R.Q, guild: n }),
                                    (0, r.jsx)(m.A, {}),
                                    "bottom" === j &&
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(o.Heading, {
                                                    className: R.Qc,
                                                    variant: "heading-xxl/semibold",
                                                    children: b.intl.string(b.t["0f1VCH"]),
                                                }),
                                                (0, r.jsx)(N.A, {
                                                    guild: n,
                                                    analyticsLocation: t,
                                                    videoPlacement: "bottom",
                                                    sourceAnalyticsLocations: P,
                                                }),
                                            ],
                                        }),
                                    (0, r.jsx)(g.A, {}),
                                ],
                            }),
                        }),
                        (0, r.jsx)(a.L, {
                            innerRef: k,
                            onChange: H,
                            children: (0, r.jsx)("div", { ref: k, className: R.mR }),
                        }),
                    ],
                }),
                (0, r.jsx)(v.A, { guild: n, isVisible: !L, closeLayer: B }),
            ],
        })
    );
}
