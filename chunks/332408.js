"use strict";
n.d(t, { A: () => H }), n(801541);
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
    b = n(927578),
    R = n(47671),
    O = n(11029),
    D = n(58034),
    L = n(474529),
    w = n(692798),
    x = n(652215),
    M = n(49999),
    P = n(788868),
    k = n(985018),
    U = n(28380);
let G = () =>
        (0, r.jsx)("div", {
            className: U.nV,
            children: (0, r.jsxs)("div", {
                className: U.mR,
                children: [
                    (0, r.jsx)(T.A, { className: U.PC }),
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
                null != t && t(M.i.DISMISS), n(x.HAw.CLIENT_THEME_PREVIEW_CLOSED), (0, O.D)();
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
            { analyticsLocations: i } = (0, m.Ay)(h.A.CLIENT_THEMES_EDITOR),
            [s, a] = (0, l.yK)([N.default, R.A], () => [
                R.A.gradientPreset,
                b.Ay.isPremium(N.default.getCurrentUser()),
            ]),
            o = (0, A.V)(),
            c = (0, b.FY)({
                intervalType: o?.subscription_trial?.interval,
                intervalCount: o?.subscription_trial?.interval_count,
            }),
            d = a
                ? k.intl.string(k.t.IJI7yk)
                : o?.subscription_trial?.sku_id === P.pe.TIER_2
                  ? c
                  : k.intl.string(k.t.mr4K7D),
            f = (e) => {
                e &&
                    (t?.(),
                    null != n && n(M.i.PRIMARY),
                    null != s &&
                        ((0, w.X8)({ isPersisted: !0, themeName: u.ju[s.id], analyticsLocations: i }),
                        (0, _.u_)({ backgroundGradientPresetId: s.id, theme: s.theme })));
            };
        return (0, r.jsx)(I.A, {
            subscriptionTier: P.pe.TIER_2,
            defaultTextOverride: d,
            premiumModalAnalyticsLocation: { object: x.ZSU.BUTTON_CTA, objectType: x.AnalyticsObjectTypes.BUY },
            onSubscribeModalClose: f,
            fullWidth: !0,
        });
    },
    B = (e) => {
        let { markAsDismissed: t, isCoachmark: n } = e,
            { isPreview: s } = (0, l.cf)([R.A], () => ({ isPreview: R.A.isPreview })),
            [a, u] = i.useState(!1),
            d = (0, D.H)(),
            _ = () => {
                if ((null != t && t(M.i.DISMISS), d(x.HAw.CLIENT_THEME_PREVIEW_CLOSED), (0, O.D)(), !n)) {
                    let e = (0, y.Ci)("ClientThemesEditor_handleBack");
                    (0, v.openUserSettings)(e ? S.X.DISPLAY_THEME_CATEGORY : S.X.APPEARANCE_PANEL, {
                        section: x.nc_.APPEARANCE,
                    });
                }
            },
            f = (0, g.X)(
                { no: k.t["3D5yo/"], "sv-SE": k.t["3D5yo/"], uk: k.t["3D5yo/"], de: k.t["3D5yo/"] },
                k.t["dqH+qr"],
            ),
            p = (0, o.YW)({ isPreview: s, isCoachmark: n, forceShowCloseButton: a })
                .with({ isCoachmark: !0 }, { forceShowCloseButton: !0 }, () => k.intl.string(k.t.cpT0Cq))
                .with({ isPreview: !0 }, () => f)
                .otherwise(() => k.intl.string(k.t.Olc2K3));
        return (0, r.jsxs)("div", {
            className: U.N3,
            children: [
                s &&
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
function H(e) {
    let { markAsDismissed: t, showClientThemesCoachmark: n } = e,
        { analyticsLocations: s } = (0, m.Ay)(h.A.CLIENT_THEMES_EDITOR),
        { isPreview: o, shouldEditorAnimate: u } = (0, l.cf)([R.A, p.A], () => ({
            isPreview: R.A.isPreview,
            shouldEditorAnimate: n && !p.A.useReducedMotion,
        })),
        c = (0, E.fy)().activePanel === E.HP.CLIENT_THEMES,
        _ = (0, D.H)();
    i.useEffect(() => _(x.HAw.CLIENT_THEME_PREVIEW_VIEWED), [_]),
        i.useEffect(() => {
            o &&
                C.default.track(x.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: P.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: s,
                });
        }, [o, s]);
    let g = (0, D.Z)(),
        A = (0, f.A)(null, o ? g : x.tEg);
    return (
        i.useEffect(() => {
            if (o && !c) return g;
        }, [o, c, g]),
        (0, r.jsx)(m.f5, {
            value: s,
            children: (0, r.jsx)("div", {
                ref: A,
                "data-app-right-panel": !0,
                className: a()(U.HS, u ? U.hP : null),
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
