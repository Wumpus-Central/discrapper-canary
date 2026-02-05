"use strict";
n.d(t, { A: () => B }), n(801541);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
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
    g = n(793943),
    E = n(996254),
    A = n(234419),
    I = n(792656),
    T = n(450232),
    y = n(780964),
    S = n(840065),
    v = n(287809),
    C = n(954571),
    b = n(927578),
    N = n(47671),
    R = n(11029),
    O = n(58034),
    D = n(474529),
    L = n(692798),
    w = n(652215),
    x = n(49999),
    P = n(788868),
    M = n(985018),
    k = n(218098);
let U = () =>
        (0, r.jsx)("div", {
            className: k.nV,
            children: (0, r.jsxs)("div", {
                className: k.mR,
                children: [
                    (0, r.jsx)(T.A, { className: k.PC }),
                    (0, r.jsx)(d.Heading, {
                        variant: "heading-md/bold",
                        color: "always-white",
                        children: M.intl.string(M.t.POSLGY),
                    }),
                ],
            }),
        }),
    G = (e) => {
        let { markAsDismissed: t } = e,
            n = (0, O.H)(),
            i = () => {
                null != t && t(x.i.DISMISS), n(w.HAw.CLIENT_THEME_PREVIEW_CLOSED), (0, R.D)();
            };
        return (0, r.jsxs)("div", {
            className: k.nV,
            children: [
                (0, r.jsx)(d.DUT, {
                    className: k.VV,
                    onClick: i,
                    children: (0, r.jsx)(d.aXh, { size: "md", color: "currentColor", className: k.P0 }),
                }),
                (0, r.jsx)(d.Heading, { variant: "heading-lg/extrabold", children: M.intl.string(M.t["xSR+a/"]) }),
            ],
        });
    },
    V = (e) => {
        let { onSubscribeSuccess: t, markAsDismissed: n } = e,
            { analyticsLocations: i } = (0, m.Ay)(h.A.CLIENT_THEMES_EDITOR),
            [a, s] = (0, l.yK)([v.default, N.A], () => [
                N.A.gradientPreset,
                b.Ay.isPremium(v.default.getCurrentUser()),
            ]),
            o = (0, A.V)(),
            c = (0, b.FY)({
                intervalType: o?.subscription_trial?.interval,
                intervalCount: o?.subscription_trial?.interval_count,
            }),
            d = s
                ? M.intl.string(M.t.IJI7yk)
                : o?.subscription_trial?.sku_id === P.pe.TIER_2
                  ? c
                  : M.intl.string(M.t.mr4K7D),
            f = (e) => {
                e &&
                    (t?.(),
                    null != n && n(x.i.PRIMARY),
                    null != a &&
                        ((0, L.X8)({ isPersisted: !0, themeName: u.ju[a.id], analyticsLocations: i }),
                        (0, _.u_)({ backgroundGradientPresetId: a.id, theme: a.theme })));
            };
        return (0, r.jsx)(I.A, {
            subscriptionTier: P.pe.TIER_2,
            defaultTextOverride: d,
            premiumModalAnalyticsLocation: { object: w.ZSU.BUTTON_CTA, objectType: w.AnalyticsObjectTypes.BUY },
            onSubscribeModalClose: f,
            fullWidth: !0,
        });
    },
    F = (e) => {
        let { markAsDismissed: t, isCoachmark: n } = e,
            { isPreview: a } = (0, l.cf)([N.A], () => ({ isPreview: N.A.isPreview })),
            [s, u] = i.useState(!1),
            d = (0, O.H)(),
            _ = () => {
                null != t && t(x.i.DISMISS),
                    d(w.HAw.CLIENT_THEME_PREVIEW_CLOSED),
                    (0, R.D)(),
                    n || (0, S.openUserSettings)(y.X.APPEARANCE_PANEL, { section: w.nc_.APPEARANCE });
            },
            f = (0, E.X)(
                { no: M.t["3D5yo/"], "sv-SE": M.t["3D5yo/"], uk: M.t["3D5yo/"], de: M.t["3D5yo/"] },
                M.t["dqH+qr"],
            ),
            p = (0, o.YW)({ isPreview: a, isCoachmark: n, forceShowCloseButton: s })
                .with({ isCoachmark: !0 }, { forceShowCloseButton: !0 }, () => M.intl.string(M.t.cpT0Cq))
                .with({ isPreview: !0 }, () => f)
                .otherwise(() => M.intl.string(M.t.Olc2K3));
        return (0, r.jsxs)("div", {
            className: k.N3,
            children: [
                a &&
                    (0, r.jsx)(V, {
                        onSubscribeSuccess: () => {
                            u(!0);
                        },
                        markAsDismissed: t,
                    }),
                (0, r.jsx)(c.$nd, { fullWidth: !0, onClick: _, variant: "secondary", text: p }),
            ],
        });
    };
function B(e) {
    let { markAsDismissed: t, showClientThemesCoachmark: n } = e,
        { analyticsLocations: a } = (0, m.Ay)(h.A.CLIENT_THEMES_EDITOR),
        { isPreview: o, shouldEditorAnimate: u } = (0, l.cf)([N.A, p.A], () => ({
            isPreview: N.A.isPreview,
            shouldEditorAnimate: n && !p.A.useReducedMotion,
        })),
        c = (0, g.fy)().activePanel === g.HP.CLIENT_THEMES,
        _ = (0, O.H)();
    i.useEffect(() => _(w.HAw.CLIENT_THEME_PREVIEW_VIEWED), [_]),
        i.useEffect(() => {
            o &&
                C.default.track(w.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: P.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: a,
                });
        }, [o, a]);
    let E = (0, O.Z)(),
        A = (0, f.A)(null, o ? E : w.tEg);
    return (
        i.useEffect(() => {
            if (o && !c) return E;
        }, [o, c, E]),
        (0, r.jsx)(m.f5, {
            value: a,
            children: (0, r.jsx)("div", {
                ref: A,
                "data-app-right-panel": !0,
                className: s()(k.HS, u ? k.hP : null),
                children: (0, r.jsxs)(d.Fmo, {
                    children: [
                        n ? (0, r.jsx)(U, {}) : (0, r.jsx)(G, { markAsDismissed: t }),
                        (0, r.jsx)(D.A, {}),
                        (0, r.jsx)(d.HOs, {
                            className: k.sV,
                            children: (0, r.jsxs)(L.Ay, {
                                type: L.v0.EDITOR,
                                children: [
                                    !o && (0, r.jsx)(L.Ay.Basic, { className: k.Gg }),
                                    (0, r.jsx)(L.Ay.Gradient, { className: k.Gg, isCoachmark: n }),
                                ],
                            }),
                        }),
                        (0, r.jsx)(F, { markAsDismissed: t, isCoachmark: n }),
                    ],
                }),
            }),
        })
    );
}
