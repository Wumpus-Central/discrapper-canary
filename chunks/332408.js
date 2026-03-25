"use strict";
n.d(t, { A: () => $ }), n(801541);
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
    v = n(358776),
    N = n(840065),
    C = n(909536),
    R = n(287809),
    O = n(954571),
    b = n(927578),
    D = n(47671),
    L = n(11029),
    w = n(58034),
    M = n(474529),
    x = n(692798),
    P = n(385803),
    k = n(652215),
    U = n(49999),
    G = n(788868),
    F = n(985018),
    V = n(218098);
let B = () =>
        (0, r.jsx)("div", {
            className: V.nV,
            children: (0, r.jsxs)("div", {
                className: V.mR,
                children: [
                    (0, r.jsx)(S.A, { className: V.PC, size: "md" }),
                    (0, r.jsx)(d.Heading, {
                        variant: "heading-md/bold",
                        color: "always-white",
                        children: F.intl.string(F.t.POSLGY),
                    }),
                ],
            }),
        }),
    H = (e) => {
        let { markAsDismissed: t } = e,
            n = (0, w.H)(),
            i = () => {
                null != t && t(U.i.DISMISS), n(k.HAw.CLIENT_THEME_PREVIEW_CLOSED), (0, L.D)();
            };
        return (0, r.jsxs)("div", {
            className: V.nV,
            children: [
                (0, r.jsx)(d.DUT, {
                    className: V.VV,
                    onClick: i,
                    children: (0, r.jsx)(d.aXh, { size: "md", color: "currentColor", className: V.P0 }),
                }),
                (0, r.jsx)(d.Heading, { variant: "heading-lg/extrabold", children: F.intl.string(F.t["xSR+a/"]) }),
            ],
        });
    },
    j = (e) => {
        let { onSubscribeSuccess: t, markAsDismissed: n } = e,
            { analyticsLocations: i } = (0, m.Ay)(h.A.CLIENT_THEMES_EDITOR),
            [s, a] = (0, l.yK)([R.default, D.A], () => [
                D.A.gradientPreset,
                b.Ay.isPremium(R.default.getCurrentUser()),
            ]),
            o = (0, A.V)(),
            c = (0, b.FY)({
                intervalType: o?.subscription_trial?.interval,
                intervalCount: o?.subscription_trial?.interval_count,
            }),
            d = a
                ? F.intl.string(F.t.IJI7yk)
                : o?.subscription_trial?.sku_id === G.pe.TIER_2
                  ? c
                  : F.intl.string(F.t.mr4K7D),
            f = (e) => {
                e &&
                    (t?.(),
                    null != n && n(U.i.PRIMARY),
                    null != s &&
                        ((0, x.X8)({ isPersisted: !0, themeName: u.ju[s.id], analyticsLocations: i }),
                        (0, _.u_)({ backgroundGradientPresetId: s.id, theme: s.theme })));
            };
        return (0, r.jsx)(I.A, {
            subscriptionTier: G.pe.TIER_2,
            defaultTextOverride: d,
            premiumModalAnalyticsLocation: { object: k.ZSU.BUTTON_CTA, objectType: k.AnalyticsObjectTypes.BUY },
            onSubscribeModalClose: f,
            fullWidth: !0,
        });
    },
    Y = (e) => {
        let { markAsDismissed: t, isCoachmark: n } = e,
            { isPreview: s } = (0, l.cf)([D.A], () => ({ isPreview: D.A.isPreview })),
            [a, u] = i.useState(!1),
            d = (0, w.H)(),
            _ = (0, C.St)("client_themes_editor_footer"),
            f = () => {
                if ((null != t && t(U.i.DISMISS), d(k.HAw.CLIENT_THEME_PREVIEW_CLOSED), (0, L.D)(), !n)) {
                    let e = (0, v.Ci)("ClientThemesEditor_handleBack");
                    (0, N.openUserSettings)(e ? y.X.DISPLAY_THEME_CATEGORY : y.X.APPEARANCE_PANEL);
                }
            },
            p = (0, g.X)(
                { no: F.t["3D5yo/"], "sv-SE": F.t["3D5yo/"], uk: F.t["3D5yo/"], de: F.t["3D5yo/"] },
                F.t["dqH+qr"],
            ),
            h = (0, o.YW)({ isPreview: s, isCoachmark: n, forceShowCloseButton: a })
                .with({ isCoachmark: !0 }, { forceShowCloseButton: !0 }, () => F.intl.string(F.t.cpT0Cq))
                .with({ isPreview: !0 }, () => p)
                .otherwise(() => F.intl.string(F.t.Olc2K3)),
            m = (0, r.jsx)(j, {
                onSubscribeSuccess: () => {
                    u(!0);
                },
                markAsDismissed: t,
            });
        return (0, r.jsxs)("div", {
            className: V.N3,
            children: [
                s &&
                    (_
                        ? (0, r.jsxs)("div", {
                              className: V.rV,
                              children: [(0, r.jsx)(T.l, { size: "sm", className: V.Tf }), m],
                          })
                        : m),
                (0, r.jsx)(c.$nd, { fullWidth: !0, onClick: f, variant: "secondary", text: h }),
            ],
        });
    },
    W = 16,
    K = 24;
function $(e) {
    let { markAsDismissed: t, showClientThemesCoachmark: n, iconSize: s = P.ni.SIZE_60 } = e,
        { analyticsLocations: o } = (0, m.Ay)(h.A.CLIENT_THEMES_EDITOR),
        { isPreview: u, shouldEditorAnimate: c } = (0, l.cf)([D.A, p.A], () => ({
            isPreview: D.A.isPreview,
            shouldEditorAnimate: n && !p.A.useReducedMotion,
        })),
        _ = (0, E.fy)().activePanel === E.HP.CLIENT_THEMES,
        g = (0, w.H)();
    i.useEffect(() => g(k.HAw.CLIENT_THEME_PREVIEW_VIEWED), [g]),
        i.useEffect(() => {
            u &&
                O.default.track(k.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: G.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: o,
                });
        }, [u, o]);
    let A = (0, w.Z)(),
        I = (0, f.A)(null, u ? A : k.tEg);
    i.useEffect(() => {
        if (u && !_) return A;
    }, [u, _, A]);
    let T = i.useMemo(
        () => ({
            "--custom-client-themes-editor-content-width": `${3 * s + 2 * K}px`,
            "--custom-client-themes-editor-padding": `${W}px`,
        }),
        [s],
    );
    return (0, r.jsx)(m.f5, {
        value: o,
        children: (0, r.jsx)("div", {
            ref: I,
            "data-app-right-panel": !0,
            className: a()(V.HS, c ? V.hP : null),
            style: T,
            children: (0, r.jsxs)(d.Fmo, {
                children: [
                    n ? (0, r.jsx)(B, {}) : (0, r.jsx)(H, { markAsDismissed: t }),
                    (0, r.jsx)(M.A, {}),
                    (0, r.jsx)(d.HOs, {
                        className: V.sV,
                        children: (0, r.jsxs)(x.Ay, {
                            type: x.v0.EDITOR,
                            children: [
                                !u && (0, r.jsx)(x.Ay.Basic, { className: V.Gg, iconSize: s }),
                                (0, r.jsx)(x.Ay.Gradient, { className: V.Gg, isCoachmark: n, iconSize: s }),
                            ],
                        }),
                    }),
                    (0, r.jsx)(Y, { markAsDismissed: t, isCoachmark: n }),
                ],
            }),
        }),
    });
}
