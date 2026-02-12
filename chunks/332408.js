"use strict";
n.d(t, { A: () => j }), n(801541);
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
    h = n(775602),
    p = n(793574),
    g = n(688810),
    E = n(793943),
    A = n(996254),
    I = n(234419),
    T = n(792656),
    y = n(450232),
    S = n(780964),
    v = n(840065),
    C = n(287809),
    b = n(954571),
    N = n(927578),
    R = n(47671),
    O = n(11029),
    D = n(58034),
    L = n(474529),
    w = n(692798),
    x = n(652215),
    P = n(49999),
    M = n(788868),
    k = n(985018),
    U = n(218098);
let G = () =>
        (0, r.jsx)("div", {
            className: U.nV,
            children: (0, r.jsxs)("div", {
                className: U.mR,
                children: [
                    (0, r.jsx)(y.A, { className: U.PC }),
                    (0, r.jsx)(d.Heading, {
                        variant: "heading-md/bold",
                        color: "always-white",
                        children: k.intl.string(k.t.POSLGY),
                    }),
                ],
            }),
        }),
    F = (e) => {
        let { markAsDismissed: t } = e,
            n = (0, D.H)(),
            i = () => {
                null != t && t(P.i.DISMISS), n(x.HAw.CLIENT_THEME_PREVIEW_CLOSED), (0, O.D)();
            };
        return (0, r.jsxs)("div", {
            className: U.nV,
            children: [
                (0, r.jsx)(d.DUT, {
                    className: U.VV,
                    onClick: i,
                    children: (0, r.jsx)(d.aXh, { size: "md", color: "currentColor", className: U.P0 }),
                }),
                (0, r.jsx)(d.Heading, { variant: "heading-lg/extrabold", children: k.intl.string(k.t["xSR+a/"]) }),
            ],
        });
    },
    V = (e) => {
        let { onSubscribeSuccess: t, markAsDismissed: n } = e,
            { analyticsLocations: i } = (0, g.Ay)(p.A.CLIENT_THEMES_EDITOR),
            [a, s] = (0, l.yK)([C.default, R.A], () => [
                R.A.gradientPreset,
                N.Ay.isPremium(C.default.getCurrentUser()),
            ]),
            o = (0, I.V)(),
            c = (0, N.FY)({
                intervalType: o?.subscription_trial?.interval,
                intervalCount: o?.subscription_trial?.interval_count,
            }),
            d = s
                ? k.intl.string(k.t.IJI7yk)
                : o?.subscription_trial?.sku_id === M.pe.TIER_2
                  ? c
                  : k.intl.string(k.t.mr4K7D),
            f = (e) => {
                e &&
                    (t?.(),
                    null != n && n(P.i.PRIMARY),
                    null != a &&
                        ((0, w.X8)({ isPersisted: !0, themeName: u.ju[a.id], analyticsLocations: i }),
                        (0, _.u_)({ backgroundGradientPresetId: a.id, theme: a.theme })));
            };
        return (0, r.jsx)(T.A, {
            subscriptionTier: M.pe.TIER_2,
            defaultTextOverride: d,
            premiumModalAnalyticsLocation: { object: x.ZSU.BUTTON_CTA, objectType: x.AnalyticsObjectTypes.BUY },
            onSubscribeModalClose: f,
            fullWidth: !0,
        });
    },
    B = (e) => {
        let { markAsDismissed: t, isCoachmark: n } = e,
            { isPreview: a } = (0, l.cf)([R.A], () => ({ isPreview: R.A.isPreview })),
            [s, u] = i.useState(!1),
            d = (0, D.H)(),
            _ = () => {
                null != t && t(P.i.DISMISS),
                    d(x.HAw.CLIENT_THEME_PREVIEW_CLOSED),
                    (0, O.D)(),
                    n || (0, v.openUserSettings)(S.X.APPEARANCE_PANEL, { section: x.nc_.APPEARANCE });
            },
            f = (0, A.X)(
                { no: k.t["3D5yo/"], "sv-SE": k.t["3D5yo/"], uk: k.t["3D5yo/"], de: k.t["3D5yo/"] },
                k.t["dqH+qr"],
            ),
            h = (0, o.YW)({ isPreview: a, isCoachmark: n, forceShowCloseButton: s })
                .with({ isCoachmark: !0 }, { forceShowCloseButton: !0 }, () => k.intl.string(k.t.cpT0Cq))
                .with({ isPreview: !0 }, () => f)
                .otherwise(() => k.intl.string(k.t.Olc2K3));
        return (0, r.jsxs)("div", {
            className: U.N3,
            children: [
                a &&
                    (0, r.jsx)(V, {
                        onSubscribeSuccess: () => {
                            u(!0);
                        },
                        markAsDismissed: t,
                    }),
                (0, r.jsx)(c.$nd, { fullWidth: !0, onClick: _, variant: "secondary", text: h }),
            ],
        });
    };
function j(e) {
    let { markAsDismissed: t, showClientThemesCoachmark: n } = e,
        { analyticsLocations: a } = (0, g.Ay)(p.A.CLIENT_THEMES_EDITOR),
        { isPreview: o, shouldEditorAnimate: u } = (0, l.cf)([R.A, h.A], () => ({
            isPreview: R.A.isPreview,
            shouldEditorAnimate: n && !h.A.useReducedMotion,
        })),
        c = (0, E.fy)().activePanel === E.HP.CLIENT_THEMES,
        _ = (0, D.H)();
    i.useEffect(() => _(x.HAw.CLIENT_THEME_PREVIEW_VIEWED), [_]),
        i.useEffect(() => {
            o &&
                b.default.track(x.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: M.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: a,
                });
        }, [o, a]);
    let A = (0, D.Z)(),
        I = (0, f.A)(null, o ? A : x.tEg);
    return (
        i.useEffect(() => {
            if (o && !c) return A;
        }, [o, c, A]),
        (0, r.jsx)(g.f5, {
            value: a,
            children: (0, r.jsx)("div", {
                ref: I,
                "data-app-right-panel": !0,
                className: s()(U.HS, u ? U.hP : null),
                children: (0, r.jsxs)(d.Fmo, {
                    children: [
                        n ? (0, r.jsx)(G, {}) : (0, r.jsx)(F, { markAsDismissed: t }),
                        (0, r.jsx)(L.A, {}),
                        (0, r.jsx)(d.HOs, {
                            className: U.sV,
                            children: (0, r.jsxs)(w.Ay, {
                                type: w.v0.EDITOR,
                                children: [
                                    !o && (0, r.jsx)(w.Ay.Basic, { className: U.Gg }),
                                    (0, r.jsx)(w.Ay.Gradient, { className: U.Gg, isCoachmark: n }),
                                ],
                            }),
                        }),
                        (0, r.jsx)(B, { markAsDismissed: t, isCoachmark: n }),
                    ],
                }),
            }),
        })
    );
}
