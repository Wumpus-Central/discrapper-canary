"use strict";
n.d(t, { A: () => W }), n(801541);
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
    T = n(450232),
    S = n(780964),
    y = n(358776),
    v = n(840065),
    N = n(287809),
    C = n(954571),
    R = n(927578),
    O = n(47671),
    b = n(11029),
    D = n(58034),
    L = n(474529),
    w = n(692798),
    M = n(385803),
    x = n(652215),
    P = n(49999),
    k = n(788868),
    U = n(985018),
    G = n(218098);
let F = () =>
        (0, r.jsx)("div", {
            className: G.nV,
            children: (0, r.jsxs)("div", {
                className: G.mR,
                children: [
                    (0, r.jsx)(T.A, { className: G.PC, size: "md" }),
                    (0, r.jsx)(d.Heading, {
                        variant: "heading-md/bold",
                        color: "always-white",
                        children: U.intl.string(U.t.POSLGY),
                    }),
                ],
            }),
        }),
    V = (e) => {
        let { markAsDismissed: t } = e,
            n = (0, D.H)(),
            i = () => {
                null != t && t(P.i.DISMISS), n(x.HAw.CLIENT_THEME_PREVIEW_CLOSED), (0, b.D)();
            };
        return (0, r.jsxs)("div", {
            className: G.nV,
            children: [
                (0, r.jsx)(d.DUT, {
                    className: G.VV,
                    onClick: i,
                    children: (0, r.jsx)(d.aXh, { size: "md", color: "currentColor", className: G.P0 }),
                }),
                (0, r.jsx)(d.Heading, { variant: "heading-lg/extrabold", children: U.intl.string(U.t["xSR+a/"]) }),
            ],
        });
    },
    B = (e) => {
        let { onSubscribeSuccess: t, markAsDismissed: n } = e,
            { analyticsLocations: i } = (0, m.Ay)(h.A.CLIENT_THEMES_EDITOR),
            [s, a] = (0, l.yK)([N.default, O.A], () => [
                O.A.gradientPreset,
                R.Ay.isPremium(N.default.getCurrentUser()),
            ]),
            o = (0, A.V)(),
            c = (0, R.FY)({
                intervalType: o?.subscription_trial?.interval,
                intervalCount: o?.subscription_trial?.interval_count,
            }),
            d = a
                ? U.intl.string(U.t.IJI7yk)
                : o?.subscription_trial?.sku_id === k.pe.TIER_2
                  ? c
                  : U.intl.string(U.t.mr4K7D),
            f = (e) => {
                e &&
                    (t?.(),
                    null != n && n(P.i.PRIMARY),
                    null != s &&
                        ((0, w.X8)({ isPersisted: !0, themeName: u.ju[s.id], analyticsLocations: i }),
                        (0, _.u_)({ backgroundGradientPresetId: s.id, theme: s.theme })));
            };
        return (0, r.jsx)(I.A, {
            subscriptionTier: k.pe.TIER_2,
            defaultTextOverride: d,
            premiumModalAnalyticsLocation: { object: x.ZSU.BUTTON_CTA, objectType: x.AnalyticsObjectTypes.BUY },
            onSubscribeModalClose: f,
            fullWidth: !0,
        });
    },
    H = (e) => {
        let { markAsDismissed: t, isCoachmark: n } = e,
            { isPreview: s } = (0, l.cf)([O.A], () => ({ isPreview: O.A.isPreview })),
            [a, u] = i.useState(!1),
            d = (0, D.H)(),
            _ = () => {
                if ((null != t && t(P.i.DISMISS), d(x.HAw.CLIENT_THEME_PREVIEW_CLOSED), (0, b.D)(), !n)) {
                    let e = (0, y.Ci)("ClientThemesEditor_handleBack");
                    (0, v.openUserSettings)(e ? S.X.DISPLAY_THEME_CATEGORY : S.X.APPEARANCE_PANEL, {
                        section: x.nc_.APPEARANCE,
                    });
                }
            },
            f = (0, g.X)(
                { no: U.t["3D5yo/"], "sv-SE": U.t["3D5yo/"], uk: U.t["3D5yo/"], de: U.t["3D5yo/"] },
                U.t["dqH+qr"],
            ),
            p = (0, o.YW)({ isPreview: s, isCoachmark: n, forceShowCloseButton: a })
                .with({ isCoachmark: !0 }, { forceShowCloseButton: !0 }, () => U.intl.string(U.t.cpT0Cq))
                .with({ isPreview: !0 }, () => f)
                .otherwise(() => U.intl.string(U.t.Olc2K3));
        return (0, r.jsxs)("div", {
            className: G.N3,
            children: [
                s &&
                    (0, r.jsx)(B, {
                        onSubscribeSuccess: () => {
                            u(!0);
                        },
                        markAsDismissed: t,
                    }),
                (0, r.jsx)(c.$nd, { fullWidth: !0, onClick: _, variant: "secondary", text: p }),
            ],
        });
    },
    j = 16,
    Y = 24;
function W(e) {
    let { markAsDismissed: t, showClientThemesCoachmark: n, iconSize: s = M.ni.SIZE_60 } = e,
        { analyticsLocations: o } = (0, m.Ay)(h.A.CLIENT_THEMES_EDITOR),
        { isPreview: u, shouldEditorAnimate: c } = (0, l.cf)([O.A, p.A], () => ({
            isPreview: O.A.isPreview,
            shouldEditorAnimate: n && !p.A.useReducedMotion,
        })),
        _ = (0, E.fy)().activePanel === E.HP.CLIENT_THEMES,
        g = (0, D.H)();
    i.useEffect(() => g(x.HAw.CLIENT_THEME_PREVIEW_VIEWED), [g]),
        i.useEffect(() => {
            u &&
                C.default.track(x.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: k.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: o,
                });
        }, [u, o]);
    let A = (0, D.Z)(),
        I = (0, f.A)(null, u ? A : x.tEg);
    i.useEffect(() => {
        if (u && !_) return A;
    }, [u, _, A]);
    let T = i.useMemo(
        () => ({
            "--custom-client-themes-editor-content-width": `${3 * s + 2 * Y}px`,
            "--custom-client-themes-editor-padding": `${j}px`,
        }),
        [s],
    );
    return (0, r.jsx)(m.f5, {
        value: o,
        children: (0, r.jsx)("div", {
            ref: I,
            "data-app-right-panel": !0,
            className: a()(G.HS, c ? G.hP : null),
            style: T,
            children: (0, r.jsxs)(d.Fmo, {
                children: [
                    n ? (0, r.jsx)(F, {}) : (0, r.jsx)(V, { markAsDismissed: t }),
                    (0, r.jsx)(L.A, {}),
                    (0, r.jsx)(d.HOs, {
                        className: G.sV,
                        children: (0, r.jsxs)(w.Ay, {
                            type: w.v0.EDITOR,
                            children: [
                                !u && (0, r.jsx)(w.Ay.Basic, { className: G.Gg, iconSize: s }),
                                (0, r.jsx)(w.Ay.Gradient, { className: G.Gg, isCoachmark: n, iconSize: s }),
                            ],
                        }),
                    }),
                    (0, r.jsx)(H, { markAsDismissed: t, isCoachmark: n }),
                ],
            }),
        }),
    });
}
