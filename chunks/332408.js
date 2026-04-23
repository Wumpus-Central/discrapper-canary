a.r(t), a.d(t, { default: () => $ }), a(801541);
var s = a(627968),
    r = a(64700),
    i = a(503698),
    n = a.n(i),
    l = a(889137),
    c = a(311907),
    _ = a(873298),
    E = a(821609),
    o = a(534514),
    d = a(939249),
    T = a(285796),
    u = a(707554),
    m = a(573613),
    S = a(817281),
    A = a(82495),
    C = a(775602),
    f = a(793574),
    H = a(688810),
    O = a(793943),
    M = a(996254),
    N = a(234419),
    I = a(792656),
    p = a(400669),
    R = a(450232),
    h = a(780964),
    D = a(858897),
    x = a(909536),
    k = a(287809),
    P = a(954571),
    v = a(927578),
    w = a(47671),
    U = a(11029),
    L = a(58034),
    y = a(474529),
    j = a(692798),
    g = a(385803),
    b = a(652215),
    G = a(49999),
    V = a(788868),
    W = a(985018),
    B = a(758981);
let z = () =>
        (0, s.jsx)("div", {
            className: B.nV,
            children: (0, s.jsxs)("div", {
                className: B.mR,
                children: [
                    (0, s.jsx)(R.A, { className: B.PC, size: "md" }),
                    (0, s.jsx)(o.D, {
                        variant: "heading-md/bold",
                        color: "always-white",
                        children: W.intl.string(W.t.POSLGY),
                    }),
                ],
            }),
        }),
    K = (e) => {
        let { markAsDismissed: t } = e,
            a = (0, L.H)();
        return (0, s.jsxs)("div", {
            className: B.nV,
            children: [
                (0, s.jsx)(d.D, {
                    className: B.VV,
                    onClick: () => {
                        null != t && t(G.i.DISMISS), a(b.HAw.CLIENT_THEME_PREVIEW_CLOSED), (0, U.D)();
                    },
                    children: (0, s.jsx)(T.a, { size: "md", color: "currentColor", className: B.P0 }),
                }),
                (0, s.jsx)(o.D, { variant: "heading-lg/extrabold", children: W.intl.string(W.t["xSR+a/"]) }),
            ],
        });
    },
    Y = (e) => {
        let { onSubscribeSuccess: t, markAsDismissed: a } = e,
            { analyticsLocations: r } = (0, H.Ay)(f.A.CLIENT_THEMES_EDITOR),
            [i, n] = (0, c.yK)([k.default, w.A], () => [
                w.A.gradientPreset,
                v.Ay.isPremium(k.default.getCurrentUser()),
            ]),
            l = (0, N.V)(),
            E = (0, v.FY)({
                intervalType: l?.subscription_trial?.interval,
                intervalCount: l?.subscription_trial?.interval_count,
            }),
            o = n
                ? W.intl.string(W.t.IJI7yk)
                : l?.subscription_trial?.sku_id === V.pe.TIER_2
                  ? E
                  : W.intl.string(W.t.mr4K7D);
        return (0, s.jsx)(I.A, {
            subscriptionTier: V.pe.TIER_2,
            defaultTextOverride: o,
            premiumModalAnalyticsLocation: { object: b.ZSU.BUTTON_CTA, objectType: b.AnalyticsObjectTypes.BUY },
            onSubscribeModalClose: (e) => {
                e &&
                    (t?.(),
                    null != a && a(G.i.PRIMARY),
                    null != i &&
                        ((0, j.X8)({ isPersisted: !0, themeName: _.ju[i.id], analyticsLocations: r }),
                        (0, S.u_)({ backgroundGradientPresetId: i.id, theme: i.theme })));
            },
            fullWidth: !0,
        });
    },
    J = (e) => {
        let { markAsDismissed: t, isCoachmark: a } = e,
            { isPreview: i } = (0, c.cf)([w.A], () => ({ isPreview: w.A.isPreview })),
            [n, _] = r.useState(!1),
            o = (0, L.H)(),
            d = (0, x.St)("client_themes_editor_footer"),
            T = (0, M.X)(
                { no: W.t["3D5yo/"], "sv-SE": W.t["3D5yo/"], uk: W.t["3D5yo/"], de: W.t["3D5yo/"] },
                W.t["dqH+qr"],
            ),
            u = (0, l.YW)({ isPreview: i, isCoachmark: a, forceShowCloseButton: n })
                .with({ isCoachmark: !0 }, { forceShowCloseButton: !0 }, () => W.intl.string(W.t.cpT0Cq))
                .with({ isPreview: !0 }, () => T)
                .otherwise(() => W.intl.string(W.t.Olc2K3)),
            m = (0, s.jsx)(Y, {
                onSubscribeSuccess: () => {
                    _(!0);
                },
                markAsDismissed: t,
            });
        return (0, s.jsxs)("div", {
            className: B.N3,
            children: [
                i &&
                    (d
                        ? (0, s.jsxs)("div", {
                              className: B.rV,
                              children: [
                                  (0, s.jsx)(p.l, {
                                      size: "md",
                                      className: B.Tf,
                                      location: f.A.PREMIUM_WISHLIST_CLIENT_THEMES_EDITOR,
                                  }),
                                  m,
                              ],
                          })
                        : m),
                (0, s.jsx)(E.$, {
                    fullWidth: !0,
                    onClick: () => {
                        null != t && t(G.i.DISMISS),
                            o(b.HAw.CLIENT_THEME_PREVIEW_CLOSED),
                            (0, U.D)(),
                            a || (0, D.openUserSettings)(h.X.APPEARANCE_THEME_CATEGORY);
                    },
                    variant: "secondary",
                    text: u,
                }),
            ],
        });
    };
function $(e) {
    let { markAsDismissed: t, showClientThemesCoachmark: a, iconSize: i = g.ni.SIZE_60 } = e,
        { analyticsLocations: l } = (0, H.Ay)(f.A.CLIENT_THEMES_EDITOR),
        { isPreview: _, shouldEditorAnimate: E } = (0, c.cf)([w.A, C.A], () => ({
            isPreview: w.A.isPreview,
            shouldEditorAnimate: a && !C.A.useReducedMotion,
        })),
        o = (0, O.fy)().activePanel === O.HP.CLIENT_THEMES,
        d = (0, L.H)();
    r.useEffect(() => d(b.HAw.CLIENT_THEME_PREVIEW_VIEWED), [d]),
        r.useEffect(() => {
            _ &&
                P.default.track(b.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: V.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: l,
                });
        }, [_, l]);
    let T = (0, L.Z)(),
        S = (0, A.A)(null, _ ? T : b.tEg);
    r.useEffect(() => {
        if (_ && !o) return T;
    }, [_, o, T]);
    let M = r.useMemo(
        () => ({
            "--custom-client-themes-editor-content-width": `${3 * i + 48}px`,
            "--custom-client-themes-editor-padding": "16px",
        }),
        [i],
    );
    return (0, s.jsx)(H.f5, {
        value: l,
        children: (0, s.jsx)("div", {
            ref: S,
            "data-app-right-panel": !0,
            className: n()(B.HS, E ? B.hP : null),
            style: M,
            children: (0, s.jsxs)(u.F, {
                children: [
                    a ? (0, s.jsx)(z, {}) : (0, s.jsx)(K, { markAsDismissed: t }),
                    (0, s.jsx)(y.A, {}),
                    (0, s.jsx)(m.Ip, {
                        className: B.sV,
                        children: (0, s.jsxs)(j.Ay, {
                            type: j.v0.EDITOR,
                            children: [
                                !_ && (0, s.jsx)(j.Ay.Basic, { className: B.Gg, iconSize: i }),
                                (0, s.jsx)(j.Ay.Gradient, { className: B.Gg, isCoachmark: a, iconSize: i }),
                            ],
                        }),
                    }),
                    (0, s.jsx)(J, { markAsDismissed: t, isCoachmark: a }),
                ],
            }),
        }),
    });
}
