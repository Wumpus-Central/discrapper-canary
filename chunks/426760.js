i.d(t, { A: () => V });
var s = i(627968),
    l = i(64700),
    a = i(311907),
    n = i(230109),
    r = i(939249),
    c = i(789645),
    o = i(599319),
    d = i(688810),
    u = i(665171),
    m = i(488803),
    g = i(522055),
    T = i(645619),
    x = i(954571),
    A = i(917064),
    f = i(787001),
    h = i(232122),
    j = i(340195),
    p = i(244027),
    N = i(278115),
    E = i(527113),
    b = i(250493),
    v = i(436083),
    I = i(652215),
    _ = i(985018),
    R = i(215895);
function V(e) {
    let { analyticsLocation: t, guild: i, onClose: V, scrollToPowerupCards: S } = e,
        [P, y] = l.useState(!0),
        C = l.useRef(!1),
        { analyticsLocations: k } = (0, d.Ay)(),
        L = l.useRef(null),
        U = l.useRef(null),
        M = l.useRef(null),
        O = l.useCallback(() => {
            V?.();
        }, [V]),
        G = l.useCallback(() => {
            null != M.current &&
                null != U.current &&
                U.current.scrollIntoViewNode({ node: M.current, animate: !0, shouldScrollToStart: !0 });
        }, []),
        D = l.useCallback(
            (e) => {
                e &&
                    !C.current &&
                    (x.default.track(I.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: I.liQ.PREMIUM_GUILD_USER_MODAL,
                        location_stack: k,
                        location_section: t.section,
                        location_object: t.object,
                        guild_id: i.id,
                    }),
                    (C.current = !0));
            },
            [t, k, i.id],
        );
    l.useEffect(() => {
        x.default.track(I.HAw.OPEN_MODAL, {
            type: I.liQ.PREMIUM_GUILD_USER_MODAL,
            location_stack: k,
            location_section: t.section,
            location_object: t.object,
            guild_id: i.id,
        });
    }, [i.id, t, k]);
    let w = (0, m.C$)(i.id, "GuildBoostingMarketingRefresh"),
        z = (0, a.bG)([g.A], () => g.A.shouldFetchCatalogForGuild(i.id));
    l.useEffect(() => {
        w && z && (0, u.z9)(i.id);
    }, [i.id, w, z]);
    let Q = (0, a.bG)([T.A], () => T.A.hasFetchedPowerupCatalog(i.id));
    return (
        l.useEffect(() => {
            if (S && Q) {
                let e = setTimeout(() => {
                    G();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [S, G, Q]),
        (0, s.jsxs)(s.Fragment, {
            children: [
                null != V &&
                    (0, s.jsx)("div", {
                        className: R.Yk,
                        children: (0, s.jsx)(r.D, {
                            className: R.b,
                            onClick: O,
                            "aria-label": _.intl.string(_.t.cpT0Cq),
                            children: (0, s.jsx)(c.P, { size: "md", color: "currentColor" }),
                        }),
                    }),
                (0, s.jsxs)(o.Gt, {
                    ref: U,
                    className: R.XG,
                    children: [
                        (0, s.jsxs)("div", {
                            className: R.wx,
                            children: [
                                (0, s.jsx)(j.A, { className: R.y2 }),
                                (0, s.jsxs)("div", {
                                    className: R.AZ,
                                    children: [
                                        (0, s.jsx)(f.A, {
                                            guild: i,
                                            closeLayer: O,
                                            onCtaVisibilityChange: y,
                                            className: R.Oh,
                                        }),
                                        (0, s.jsx)(v.A, {
                                            guild: i,
                                            analyticsLocation: t,
                                            videoPlacement: "top",
                                            sourceAnalyticsLocations: k,
                                        }),
                                        (0, s.jsx)(p.A, { guild: i }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: R.uE,
                            children: (0, s.jsx)(N.A, { ref: M, guild: e.guild, onClose: O }),
                        }),
                        (0, s.jsx)("div", {
                            className: R.o6,
                            children: (0, s.jsxs)("div", {
                                className: R.y$,
                                children: [
                                    (0, s.jsx)(E.A, { className: R.Q, guild: i }),
                                    (0, s.jsx)(A.A, {}),
                                    (0, s.jsx)(h.A, {}),
                                ],
                            }),
                        }),
                        (0, s.jsx)(n.L, {
                            innerRef: L,
                            onChange: D,
                            children: (0, s.jsx)("div", { ref: L, className: R.mR }),
                        }),
                    ],
                }),
                (0, s.jsx)(b.A, { guild: i, isVisible: !P, closeLayer: O }),
            ],
        })
    );
}
