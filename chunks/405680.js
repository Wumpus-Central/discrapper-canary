"use strict";
n.d(t, { A: () => O });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(230109),
    o = n(397927),
    l = n(684136),
    u = n(444927),
    c = n(688810),
    d = n(665171),
    _ = n(488803),
    f = n(522055),
    p = n(645619),
    h = n(427854),
    m = n(796780),
    g = n(954571),
    E = n(449280),
    A = n(247425),
    I = n(406245),
    T = n(965826),
    S = n(141614),
    y = n(217639),
    v = n(836275),
    C = n(694128),
    N = n(652215),
    b = n(985018),
    R = n(445698);
let O = function (e) {
    let { analyticsLocation: t, guild: n, onClose: O, scrollToPowerupCards: D } = e,
        [L, w] = i.useState(!0),
        x = i.useRef(!1),
        M = (0, u.A)(() => Date.now()),
        { analyticsLocations: P } = (0, c.Ay)(),
        k = i.useRef(null),
        U = i.useRef(null),
        G = i.useRef(null),
        F = (0, a.bG)([f.A], () => f.A.shouldFetchCatalogForGuild(n.id)),
        V = i.useCallback(() => {
            null != G.current && null != U.current && U.current.scrollTo({ to: G.current.offsetTop, animate: !0 });
        }, []),
        B = i.useCallback(() => {
            V();
        }, [V]),
        j = i.useCallback(() => {
            O?.(),
                g.default.track(N.HAw.MODAL_DISMISSED, {
                    type: N.liQ.PREMIUM_GUILD_USER_MODAL,
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
                    (g.default.track(N.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: N.liQ.PREMIUM_GUILD_USER_MODAL,
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
        g.default.track(N.HAw.OPEN_MODAL, {
            type: N.liQ.PREMIUM_GUILD_USER_MODAL,
            location_stack: P,
            location_section: t.section,
            location_object: t.object,
            guild_id: n.id,
        });
    }, [n.id, t, P]),
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
    let Y = (0, _.C$)(n.id, "GuildBoostingMarketing"),
        W = (0, a.bG)([p.A], () => p.A.hasFetchedPowerupCatalog(n.id));
    return (
        i.useEffect(() => {
            Y && F && (0, d.z9)(n.id);
        }, [n.id, Y, F]),
        i.useEffect(() => {
            if (D && W) {
                let e = setTimeout(() => {
                    V();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [D, V, W]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != O &&
                    (0, r.jsx)("div", {
                        className: R.bn,
                        children: (0, r.jsx)(l.A, {
                            className: R.ut,
                            closeAction: j,
                            keybind: "ESC",
                            variant: l.A.Variants.BOLD,
                        }),
                    }),
                (0, r.jsxs)(o.GtU, {
                    ref: U,
                    className: R.XG,
                    children: [
                        (0, r.jsxs)("div", {
                            className: R.wx,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: R.AZ,
                                    children: [
                                        (0, r.jsx)(h.A, { guild: e.guild, themeResponsive: !1, onButtonClick: B }),
                                        (0, r.jsx)(o.Heading, {
                                            className: R.R_,
                                            color: "always-white",
                                            variant: "display-lg",
                                            children: b.intl.string(b.t.N4sqzL),
                                        }),
                                        (0, r.jsx)(A.A, { guild: n, closeLayer: j, onCtaVisibilityChange: w }),
                                        (0, r.jsx)(S.A, { guild: n }),
                                        (0, r.jsx)(y.A, { guild: n }),
                                    ],
                                }),
                                (0, r.jsx)(C.$, {}),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: R.uE,
                            children: (0, r.jsx)(m.A, { ref: G, guild: e.guild, onClose: j }),
                        }),
                        (0, r.jsxs)("div", {
                            className: R.o6,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: R.y$,
                                    children: [
                                        (0, r.jsx)(v.A, { className: R.e4, guild: n }),
                                        (0, r.jsx)(E.A, {}),
                                        (0, r.jsx)(I.A, {}),
                                    ],
                                }),
                                (0, r.jsx)(C.S, {}),
                                (0, r.jsx)("div", { className: R.LY }),
                            ],
                        }),
                        (0, r.jsx)(s.L, {
                            innerRef: k,
                            onChange: H,
                            children: (0, r.jsx)("div", { ref: k, className: R.mR }),
                        }),
                    ],
                }),
                (0, r.jsx)(T.A, { guild: n, isVisible: !L, closeLayer: j }),
            ],
        })
    );
};
