"use strict";
n.r(t), n.d(t, { default: () => Y }), n(801541);
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(889137),
    c = n(311907),
    o = n(873298),
    u = n(821609),
    d = n(534514),
    _ = n(939249),
    E = n(285796),
    m = n(707554),
    T = n(573613),
    f = n(817281),
    A = n(82495),
    h = n(775602),
    S = n(793574),
    p = n(688810),
    C = n(793943),
    v = n(996254),
    x = n(234419),
    b = n(792656),
    I = n(400669),
    g = n(450232),
    H = n(780964),
    O = n(858897),
    R = n(909536),
    N = n(287809),
    k = n(954571),
    M = n(927578),
    y = n(47671),
    j = n(11029),
    D = n(58034),
    P = n(474529),
    w = n(692798),
    L = n(385803),
    U = n(652215),
    G = n(49999),
    W = n(788868),
    V = n(985018),
    B = n(758981);
let F = () =>
        (0, i.jsx)("div", {
            className: B.nV,
            children: (0, i.jsxs)("div", {
                className: B.mR,
                children: [
                    (0, i.jsx)(g.A, { className: B.PC, size: "md" }),
                    (0, i.jsx)(d.D, {
                        variant: "heading-md/bold",
                        color: "always-white",
                        children: V.intl.string(V.t.POSLGY),
                    }),
                ],
            }),
        }),
    K = (e) => {
        let { markAsDismissed: t } = e,
            n = (0, D.H)();
        return (0, i.jsxs)("div", {
            className: B.nV,
            children: [
                (0, i.jsx)(_.D, {
                    className: B.VV,
                    onClick: () => {
                        null != t && t(G.i.DISMISS), n(U.HAw.CLIENT_THEME_PREVIEW_CLOSED), (0, j.D)();
                    },
                    children: (0, i.jsx)(E.a, { size: "md", color: "currentColor", className: B.P0 }),
                }),
                (0, i.jsx)(d.D, { variant: "heading-lg/extrabold", children: V.intl.string(V.t["xSR+a/"]) }),
            ],
        });
    },
    $ = (e) => {
        let { onSubscribeSuccess: t, markAsDismissed: n } = e,
            { analyticsLocations: l } = (0, p.Ay)(S.A.CLIENT_THEMES_EDITOR),
            [r, s] = (0, c.yK)([N.default, y.A], () => [
                y.A.gradientPreset,
                M.Ay.isPremium(N.default.getCurrentUser()),
            ]),
            a = (0, x.V)(),
            u = (0, M.FY)({
                intervalType: a?.subscription_trial?.interval,
                intervalCount: a?.subscription_trial?.interval_count,
            }),
            d = s
                ? V.intl.string(V.t.IJI7yk)
                : a?.subscription_trial?.sku_id === W.pe.TIER_2
                  ? u
                  : V.intl.string(V.t.mr4K7D);
        return (0, i.jsx)(b.A, {
            subscriptionTier: W.pe.TIER_2,
            defaultTextOverride: d,
            premiumModalAnalyticsLocation: { object: U.ZSU.BUTTON_CTA, objectType: U.AnalyticsObjectTypes.BUY },
            onSubscribeModalClose: (e) => {
                e &&
                    (t?.(),
                    null != n && n(G.i.PRIMARY),
                    null != r &&
                        ((0, w.X8)({ isPersisted: !0, themeName: o.ju[r.id], analyticsLocations: l }),
                        (0, f.u_)({ backgroundGradientPresetId: r.id, theme: r.theme })));
            },
            fullWidth: !0,
        });
    },
    z = (e) => {
        let { markAsDismissed: t, isCoachmark: n } = e,
            { isPreview: r } = (0, c.cf)([y.A], () => ({ isPreview: y.A.isPreview })),
            [s, o] = l.useState(!1),
            d = (0, D.H)(),
            _ = (0, R.St)("client_themes_editor_footer"),
            E = (0, v.X)(
                { no: V.t["3D5yo/"], "sv-SE": V.t["3D5yo/"], uk: V.t["3D5yo/"], de: V.t["3D5yo/"] },
                V.t["dqH+qr"],
            ),
            m = (0, a.YW)({ isPreview: r, isCoachmark: n, forceShowCloseButton: s })
                .with({ isCoachmark: !0 }, { forceShowCloseButton: !0 }, () => V.intl.string(V.t.cpT0Cq))
                .with({ isPreview: !0 }, () => E)
                .otherwise(() => V.intl.string(V.t.Olc2K3)),
            T = (0, i.jsx)($, {
                onSubscribeSuccess: () => {
                    o(!0);
                },
                markAsDismissed: t,
            });
        return (0, i.jsxs)("div", {
            className: B.N3,
            children: [
                r &&
                    (_
                        ? (0, i.jsxs)("div", {
                              className: B.rV,
                              children: [
                                  (0, i.jsx)(I.l, {
                                      size: "md",
                                      className: B.Tf,
                                      location: S.A.PREMIUM_WISHLIST_CLIENT_THEMES_EDITOR,
                                  }),
                                  T,
                              ],
                          })
                        : T),
                (0, i.jsx)(u.$, {
                    fullWidth: !0,
                    onClick: () => {
                        null != t && t(G.i.DISMISS),
                            d(U.HAw.CLIENT_THEME_PREVIEW_CLOSED),
                            (0, j.D)(),
                            n || (0, O.openUserSettings)(H.X.APPEARANCE_THEME_CATEGORY);
                    },
                    variant: "secondary",
                    text: m,
                }),
            ],
        });
    };
function Y(e) {
    let { markAsDismissed: t, showClientThemesCoachmark: n, iconSize: r = L.ni.SIZE_60 } = e,
        { analyticsLocations: a } = (0, p.Ay)(S.A.CLIENT_THEMES_EDITOR),
        { isPreview: o, shouldEditorAnimate: u } = (0, c.cf)([y.A, h.A], () => ({
            isPreview: y.A.isPreview,
            shouldEditorAnimate: n && !h.A.useReducedMotion,
        })),
        d = (0, C.fy)().activePanel === C.HP.CLIENT_THEMES,
        _ = (0, D.H)();
    l.useEffect(() => _(U.HAw.CLIENT_THEME_PREVIEW_VIEWED), [_]),
        l.useEffect(() => {
            o &&
                k.default.track(U.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: W.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: a,
                });
        }, [o, a]);
    let E = (0, D.Z)(),
        f = (0, A.A)(null, o ? E : U.tEg);
    l.useEffect(() => {
        if (o && !d) return E;
    }, [o, d, E]);
    let v = l.useMemo(
        () => ({
            "--custom-client-themes-editor-content-width": `${3 * r + 48}px`,
            "--custom-client-themes-editor-padding": "16px",
        }),
        [r],
    );
    return (0, i.jsx)(p.f5, {
        value: a,
        children: (0, i.jsx)("div", {
            ref: f,
            "data-app-right-panel": !0,
            className: s()(B.HS, u ? B.hP : null),
            style: v,
            children: (0, i.jsxs)(m.F, {
                children: [
                    n ? (0, i.jsx)(F, {}) : (0, i.jsx)(K, { markAsDismissed: t }),
                    (0, i.jsx)(P.A, {}),
                    (0, i.jsx)(T.Ip, {
                        className: B.sV,
                        children: (0, i.jsxs)(w.Ay, {
                            type: w.v0.EDITOR,
                            children: [
                                !o && (0, i.jsx)(w.Ay.Basic, { className: B.Gg, iconSize: r }),
                                (0, i.jsx)(w.Ay.Gradient, { className: B.Gg, isCoachmark: n, iconSize: r }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(z, { markAsDismissed: t, isCoachmark: n }),
                ],
            }),
        }),
    });
}
