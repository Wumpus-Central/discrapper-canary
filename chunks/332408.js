"use strict";
n.d(t, { A: () => K }), n(801541);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(889137),
    l = n(311907),
    u = n(873298),
    c = n(732955),
    d = n(397927),
    _ = n(817281),
    f = n(82495),
    p = n(775602),
    h = n(793574),
    m = n(688810),
    E = n(793943),
    g = n(996254),
    A = n(234419),
    I = n(792656),
    T = n(400669),
    S = n(450232),
    y = n(780964),
    v = n(858897),
    N = n(909536),
    C = n(287809),
    R = n(954571),
    O = n(927578),
    b = n(47671),
    D = n(11029),
    L = n(58034),
    w = n(474529),
    M = n(692798),
    P = n(385803),
    x = n(652215),
    k = n(49999),
    U = n(788868),
    G = n(985018),
    F = n(758981);
let V = () =>
        (0, r.jsx)("div", {
            className: F.nV,
            children: (0, r.jsxs)("div", {
                className: F.mR,
                children: [
                    (0, r.jsx)(S.A, { className: F.PC, size: "md" }),
                    (0, r.jsx)(d.Heading, {
                        variant: "heading-md/bold",
                        color: "always-white",
                        children: G.intl.string(G.t.POSLGY),
                    }),
                ],
            }),
        }),
    B = (e) => {
        let { markAsDismissed: t } = e,
            n = (0, L.H)(),
            i = () => {
                null != t && t(k.i.DISMISS), n(x.HAw.CLIENT_THEME_PREVIEW_CLOSED), (0, D.D)();
            };
        return (0, r.jsxs)("div", {
            className: F.nV,
            children: [
                (0, r.jsx)(d.DUT, {
                    className: F.VV,
                    onClick: i,
                    children: (0, r.jsx)(d.aXh, { size: "md", color: "currentColor", className: F.P0 }),
                }),
                (0, r.jsx)(d.Heading, { variant: "heading-lg/extrabold", children: G.intl.string(G.t["xSR+a/"]) }),
            ],
        });
    },
    H = (e) => {
        let { onSubscribeSuccess: t, markAsDismissed: n } = e,
            { analyticsLocations: i } = (0, m.Ay)(h.A.CLIENT_THEMES_EDITOR),
            [s, a] = (0, l.yK)([C.default, b.A], () => [
                b.A.gradientPreset,
                O.Ay.isPremium(C.default.getCurrentUser()),
            ]),
            o = (0, A.V)(),
            c = (0, O.FY)({
                intervalType: o?.subscription_trial?.interval,
                intervalCount: o?.subscription_trial?.interval_count,
            }),
            d = a
                ? G.intl.string(G.t.IJI7yk)
                : o?.subscription_trial?.sku_id === U.pe.TIER_2
                  ? c
                  : G.intl.string(G.t.mr4K7D),
            f = (e) => {
                e &&
                    (t?.(),
                    null != n && n(k.i.PRIMARY),
                    null != s &&
                        ((0, M.X8)({ isPersisted: !0, themeName: u.ju[s.id], analyticsLocations: i }),
                        (0, _.u_)({ backgroundGradientPresetId: s.id, theme: s.theme })));
            };
        return (0, r.jsx)(I.A, {
            subscriptionTier: U.pe.TIER_2,
            defaultTextOverride: d,
            premiumModalAnalyticsLocation: { object: x.ZSU.BUTTON_CTA, objectType: x.AnalyticsObjectTypes.BUY },
            onSubscribeModalClose: f,
            fullWidth: !0,
        });
    },
    j = (e) => {
        let { markAsDismissed: t, isCoachmark: n } = e,
            { isPreview: s } = (0, l.cf)([b.A], () => ({ isPreview: b.A.isPreview })),
            [a, u] = i.useState(!1),
            d = (0, L.H)(),
            _ = (0, N.St)("client_themes_editor_footer"),
            f = () => {
                null != t && t(k.i.DISMISS),
                    d(x.HAw.CLIENT_THEME_PREVIEW_CLOSED),
                    (0, D.D)(),
                    n || (0, v.openUserSettings)(y.X.APPEARANCE_THEME_CATEGORY);
            },
            p = (0, g.X)(
                { no: G.t["3D5yo/"], "sv-SE": G.t["3D5yo/"], uk: G.t["3D5yo/"], de: G.t["3D5yo/"] },
                G.t["dqH+qr"],
            ),
            m = (0, o.YW)({ isPreview: s, isCoachmark: n, forceShowCloseButton: a })
                .with({ isCoachmark: !0 }, { forceShowCloseButton: !0 }, () => G.intl.string(G.t.cpT0Cq))
                .with({ isPreview: !0 }, () => p)
                .otherwise(() => G.intl.string(G.t.Olc2K3)),
            E = (0, r.jsx)(H, {
                onSubscribeSuccess: () => {
                    u(!0);
                },
                markAsDismissed: t,
            });
        return (0, r.jsxs)("div", {
            className: F.N3,
            children: [
                s &&
                    (_
                        ? (0, r.jsxs)("div", {
                              className: F.rV,
                              children: [
                                  (0, r.jsx)(T.l, {
                                      size: "md",
                                      className: F.Tf,
                                      location: h.A.PREMIUM_WISHLIST_CLIENT_THEMES_EDITOR,
                                  }),
                                  E,
                              ],
                          })
                        : E),
                (0, r.jsx)(c.$nd, { fullWidth: !0, onClick: f, variant: "secondary", text: m }),
            ],
        });
    },
    Y = 16,
    W = 24;
function K(e) {
    let { markAsDismissed: t, showClientThemesCoachmark: n, iconSize: s = P.ni.SIZE_60 } = e,
        { analyticsLocations: o } = (0, m.Ay)(h.A.CLIENT_THEMES_EDITOR),
        { isPreview: u, shouldEditorAnimate: c } = (0, l.cf)([b.A, p.A], () => ({
            isPreview: b.A.isPreview,
            shouldEditorAnimate: n && !p.A.useReducedMotion,
        })),
        _ = (0, E.fy)().activePanel === E.HP.CLIENT_THEMES,
        g = (0, L.H)();
    i.useEffect(() => g(x.HAw.CLIENT_THEME_PREVIEW_VIEWED), [g]),
        i.useEffect(() => {
            u &&
                R.default.track(x.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: U.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: o,
                });
        }, [u, o]);
    let A = (0, L.Z)(),
        I = (0, f.A)(null, u ? A : x.tEg);
    i.useEffect(() => {
        if (u && !_) return A;
    }, [u, _, A]);
    let T = i.useMemo(
        () => ({
            "--custom-client-themes-editor-content-width": `${3 * s + 2 * W}px`,
            "--custom-client-themes-editor-padding": `${Y}px`,
        }),
        [s],
    );
    return (0, r.jsx)(m.f5, {
        value: o,
        children: (0, r.jsx)("div", {
            ref: I,
            "data-app-right-panel": !0,
            className: a()(F.HS, c ? F.hP : null),
            style: T,
            children: (0, r.jsxs)(d.Fmo, {
                children: [
                    n ? (0, r.jsx)(V, {}) : (0, r.jsx)(B, { markAsDismissed: t }),
                    (0, r.jsx)(w.A, {}),
                    (0, r.jsx)(d.HOs, {
                        className: F.sV,
                        children: (0, r.jsxs)(M.Ay, {
                            type: M.v0.EDITOR,
                            children: [
                                !u && (0, r.jsx)(M.Ay.Basic, { className: F.Gg, iconSize: s }),
                                (0, r.jsx)(M.Ay.Gradient, { className: F.Gg, isCoachmark: n, iconSize: s }),
                            ],
                        }),
                    }),
                    (0, r.jsx)(j, { markAsDismissed: t, isCoachmark: n }),
                ],
            }),
        }),
    });
}
