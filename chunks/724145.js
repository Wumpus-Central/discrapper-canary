n.d(t, { Z: () => V }), n(388685), n(314940);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(278074),
    l = n(442837),
    c = n(524437),
    u = n(680018),
    d = n(755721),
    f = n(481060),
    _ = n(153867),
    p = n(230711),
    h = n(351773),
    m = n(607070),
    g = n(100527),
    E = n(906732),
    b = n(550385),
    y = n(639119),
    O = n(638212),
    v = n(767714),
    I = n(587446),
    T = n(594174),
    S = n(626135),
    A = n(74538),
    N = n(514361),
    C = n(803038),
    R = n(55358),
    P = n(572397),
    w = n(705262),
    D = n(981631),
    L = n(921944),
    x = n(474936),
    M = n(388032),
    k = n(204089);
let j = () =>
        (0, r.jsx)("div", {
            className: k.editorHeader,
            children: (0, r.jsxs)("div", {
                className: k.bannerUpsell,
                children: [
                    (0, r.jsx)(I.Z, { className: k.premiumIcon }),
                    (0, r.jsx)(f.X6q, {
                        variant: "heading-md/bold",
                        color: "always-white",
                        children: M.intl.string(M.t.POSLGR),
                    }),
                ],
            }),
        }),
    U = (e) => {
        let { markAsDismissed: t } = e,
            n = (0, P.q)(),
            i = () => {
                null != t && t(L.L.DISMISS), n(D.rMx.CLIENT_THEME_PREVIEW_CLOSED), (0, R.C)();
            };
        return (0, r.jsxs)("div", {
            className: k.editorHeader,
            children: [
                (0, r.jsx)(f.P3F, {
                    className: k.closeCircleButton,
                    onClick: i,
                    children: (0, r.jsx)(f.k$p, {
                        size: "md",
                        color: "currentColor",
                        className: k.closeCircle,
                    }),
                }),
                (0, r.jsx)(f.X6q, {
                    variant: "heading-lg/extrabold",
                    children: M.intl.string(M.t["xSR+a2"]),
                }),
            ],
        });
    },
    G = (e) => {
        var t, n, i;
        let { onSubscribeSuccess: a, markAsDismissed: o } = e,
            { analyticsLocations: s } = (0, E.ZP)(g.Z.CLIENT_THEMES_EDITOR),
            [u, f] = (0, l.Wu)([T.default, N.Z], () => [
                N.Z.gradientPreset,
                A.ZP.isPremium(T.default.getCurrentUser()),
            ]),
            p = (0, y.N)(),
            { v2EditorEnabled: h } = C.Mc.useExperiment({ location: "ClientThemesEditor" }),
            m = (0, A.Rt)({
                intervalType: null == p || null == (t = p.subscription_trial) ? void 0 : t.interval,
                intervalCount: null == p || null == (n = p.subscription_trial) ? void 0 : n.interval_count,
            }),
            b = f
                ? M.intl.string(M.t.IJI7ys)
                : (null == p || null == (i = p.subscription_trial) ? void 0 : i.sku_id) === x.Si.TIER_2
                  ? m
                  : M.intl.string(M.t.mr4K7O),
            I = (e) => {
                e &&
                    (null == a || a(),
                    null != o && o(L.L.PRIMARY),
                    null != u &&
                        ((0, w.Yk)({
                            isPersisted: !0,
                            themeName: c.Us[u.id],
                            analyticsLocations: s,
                        }),
                        (0, _.ZI)({
                            backgroundGradientPresetId: u.id,
                            theme: u.theme,
                        })));
            };
        return h
            ? (0, r.jsx)(O.Z, {
                  subscriptionTier: x.Si.TIER_2,
                  defaultTextOverride: b,
                  premiumModalAnalyticsLocation: {
                      object: D.qAy.BUTTON_CTA,
                      objectType: D.Qqv.BUY,
                  },
                  onSubscribeModalClose: I,
                  fullWidth: !0,
              })
            : (0, r.jsx)(v.Z, {
                  size: d.zx.Sizes.MEDIUM,
                  textOptions: { textOverride: b },
                  subscriptionTier: x.Si.TIER_2,
                  onSubscribeModalClose: I,
              });
    },
    B = (e) => {
        let { markAsDismissed: t, isCoachmark: n } = e,
            { isPreview: a } = (0, l.cj)([N.Z], () => ({ isPreview: N.Z.isPreview })),
            { v2EditorEnabled: o } = C.Mc.useExperiment({ location: "ClientThemesEditor" }),
            [c, d] = i.useState(!1),
            f = (0, P.q)(),
            _ = () => {
                null != t && t(L.L.DISMISS), f(D.rMx.CLIENT_THEME_PREVIEW_CLOSED), (0, R.C)(), n || p.Z.open();
            },
            h = (0, s.EQ)({
                isPreview: a,
                isCoachmark: n,
                forceShowCloseButton: c,
            })
                .with({ isCoachmark: !0 }, { forceShowCloseButton: !0 }, () => M.intl.string(M.t.cpT0Cg))
                .with({ isPreview: !0 }, () => M.intl.string(M.t["dqH+qq"]))
                .otherwise(() => M.intl.string(M.t.Olc2Ky)),
            m = o ? k.editorFooterV2 : k.editorFooter;
        return (0, r.jsxs)("div", {
            className: m,
            children: [
                a &&
                    (0, r.jsx)(G, {
                        onSubscribeSuccess: () => {
                            d(!0);
                        },
                        markAsDismissed: t,
                    }),
                (0, r.jsx)(u.z, {
                    fullWidth: !0,
                    onClick: _,
                    variant: "secondary",
                    text: h,
                }),
            ],
        });
    };
function V(e) {
    let { markAsDismissed: t, showClientThemesCoachmark: n } = e,
        { analyticsLocations: a } = (0, E.ZP)(g.Z.CLIENT_THEMES_EDITOR),
        { isPreview: s, shouldEditorAnimate: c } = (0, l.cj)([N.Z, m.Z], () => ({
            isPreview: N.Z.isPreview,
            shouldEditorAnimate: n && !m.Z.useReducedMotion,
        })),
        u = (0, b.oq)().activePanel === b.wh.CLIENT_THEMES,
        d = (0, P.q)();
    i.useEffect(() => d(D.rMx.CLIENT_THEME_PREVIEW_VIEWED), [d]),
        i.useEffect(() => {
            s &&
                S.default.track(D.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: x.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: a,
                });
        }, [s, a]);
    let _ = (0, P.J)(),
        p = (0, h.Z)(null, s ? _ : D.dG4);
    return (
        i.useEffect(() => {
            if (s && !u) return _;
        }, [s, u, _]),
        (0, r.jsx)(E.Gt, {
            value: a,
            children: (0, r.jsx)("div", {
                ref: p,
                "data-app-right-panel": !0,
                className: o()(k.themeEditor, c ? k.editorAnimate : null),
                children: (0, r.jsxs)(f.y5t, {
                    children: [
                        n ? (0, r.jsx)(j, {}) : (0, r.jsx)(U, { markAsDismissed: t }),
                        (0, r.jsx)(f.Ttm, {
                            className: k.editorBody,
                            children: (0, r.jsxs)(w.ZP, {
                                type: w.yH.EDITOR,
                                children: [
                                    !s && (0, r.jsx)(w.ZP.Basic, { className: k.selectionGroup }),
                                    (0, r.jsx)(w.ZP.Gradient, {
                                        className: k.selectionGroup,
                                        isCoachmark: n,
                                    }),
                                ],
                            }),
                        }),
                        (0, r.jsx)(B, {
                            markAsDismissed: t,
                            isCoachmark: n,
                        }),
                    ],
                }),
            }),
        })
    );
}
