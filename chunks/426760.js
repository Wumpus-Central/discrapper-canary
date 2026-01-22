n.d(t, { A: () => C }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(230109),
    o = n(397927),
    l = n(444927),
    c = n(688810),
    u = n(665171),
    d = n(488803),
    f = n(522055),
    p = n(645619),
    _ = n(954571),
    h = n(917064),
    m = n(787001),
    g = n(232122),
    E = n(340195),
    b = n(244027),
    y = n(286188),
    O = n(278115),
    A = n(527113),
    v = n(250493),
    S = n(652215),
    I = n(985018),
    T = n(200430);
function C(e) {
    let { analyticsLocation: t, guild: n, onClose: C, scrollToPowerupCards: N } = e,
        [R, w] = i.useState(!0),
        P = i.useRef(!1),
        D = (0, l.A)(() => Date.now()),
        { analyticsLocations: x } = (0, c.Ay)(),
        L = i.useRef(null),
        j = i.useRef(null),
        M = i.useRef(null),
        k = i.useCallback(() => {
            null != M.current &&
                null != j.current &&
                j.current.scrollIntoViewNode({
                    node: M.current,
                    animate: !0,
                    shouldScrollToStart: !0,
                });
        }, []),
        U = i.useCallback(() => {
            k();
        }, [k]),
        G = i.useCallback(() => {
            null == C || C(),
                _.default.track(S.HAw.MODAL_DISMISSED, {
                    type: S.liQ.PREMIUM_GUILD_USER_MODAL,
                    location_stack: x,
                    location_section: t.section,
                    location_object: t.object,
                    guild_id: n.id,
                    duration_open_ms: Date.now() - D,
                });
        }, [C, t, x, D, n.id]),
        V = i.useCallback(
            (e) => {
                e &&
                    !P.current &&
                    (_.default.track(S.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: S.liQ.PREMIUM_GUILD_USER_MODAL,
                        location_stack: x,
                        location_section: t.section,
                        location_object: t.object,
                        guild_id: n.id,
                    }),
                    (P.current = !0));
            },
            [t, x, n.id],
        );
    i.useEffect(() => {
        _.default.track(S.HAw.OPEN_MODAL, {
            type: S.liQ.PREMIUM_GUILD_USER_MODAL,
            location_stack: x,
            location_section: t.section,
            location_object: t.object,
            guild_id: n.id,
        });
    }, [n.id, t, x]),
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
    let F = (0, d.C$)(n.id, "GuildBoostingMarketingRefresh"),
        B = (0, a.bG)([f.A], () => f.A.hasFetchedCatalog(n.id));
    i.useEffect(() => {
        F && !B && (0, u.z9)(n.id);
    }, [n.id, F, B]);
    let H = (0, a.bG)([p.A], () => p.A.hasFetchedPowerupCatalog(n.id));
    return (
        i.useEffect(() => {
            if (N && H) {
                let e = setTimeout(() => {
                    k();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [N, k, H]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != C &&
                    (0, r.jsx)("div", {
                        className: T.Yk,
                        children: (0, r.jsx)(o.DUT, {
                            className: T.b,
                            onClick: G,
                            "aria-label": I.intl.string(I.t.cpT0Cq),
                            children: (0, r.jsx)(o.PGe, {
                                size: "md",
                                color: "currentColor",
                            }),
                        }),
                    }),
                (0, r.jsxs)(o.GtU, {
                    ref: j,
                    className: T.XG,
                    children: [
                        (0, r.jsxs)("div", {
                            className: T.wx,
                            children: [
                                (0, r.jsx)(E.A, { className: T.y2 }),
                                (0, r.jsxs)("div", {
                                    className: T.AZ,
                                    children: [
                                        (0, r.jsx)(y.A, {
                                            guildId: e.guild.id,
                                            onButtonClick: U,
                                        }),
                                        (0, r.jsx)(m.A, {
                                            guild: n,
                                            closeLayer: G,
                                            onCtaVisibilityChange: w,
                                        }),
                                        (0, r.jsx)(b.A, { guild: n }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: T.uE,
                            children: (0, r.jsx)(O.A, {
                                ref: M,
                                guild: e.guild,
                                onClose: G,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: T.o6,
                            children: (0, r.jsxs)("div", {
                                className: T.y$,
                                children: [
                                    (0, r.jsx)(A.A, {
                                        className: T.Q,
                                        guild: n,
                                    }),
                                    (0, r.jsx)(h.A, {}),
                                    (0, r.jsx)(g.A, {}),
                                ],
                            }),
                        }),
                        (0, r.jsx)(s.L, {
                            innerRef: L,
                            onChange: V,
                            children: (0, r.jsx)("div", {
                                ref: L,
                                className: T.mR,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(v.A, {
                    guild: n,
                    isVisible: !R,
                    closeLayer: G,
                }),
            ],
        })
    );
}
