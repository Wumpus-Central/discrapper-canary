n.d(t, { Z: () => H }), n(388685), n(314940);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(278074),
    l = n(442837),
    c = n(524437),
    u = n(159691),
    d = n(755721),
    f = n(481060),
    _ = n(153867),
    p = n(351773),
    h = n(607070),
    m = n(100527),
    g = n(906732),
    E = n(550385),
    b = n(799360),
    y = n(639119),
    O = n(638212),
    v = n(767714),
    I = n(587446),
    T = n(313789),
    S = n(518596),
    A = n(594174),
    C = n(626135),
    N = n(74538),
    R = n(514361),
    P = n(803038),
    w = n(55358),
    D = n(572397),
    L = n(708154),
    x = n(705262),
    M = n(981631),
    j = n(921944),
    k = n(474936),
    U = n(388032),
    G = n(204089);
let B = () =>
        (0, r.jsx)("div", {
            className: G.editorHeader,
            children: (0, r.jsxs)("div", {
                className: G.bannerUpsell,
                children: [
                    (0, r.jsx)(I.Z, { className: G.premiumIcon }),
                    (0, r.jsx)(f.X6q, {
                        variant: "heading-md/bold",
                        color: "always-white",
                        children: U.intl.string(U.t.POSLGR),
                    }),
                ],
            }),
        }),
    Z = (e) => {
        let { markAsDismissed: t } = e,
            n = (0, D.q)(),
            i = () => {
                null != t && t(j.L.DISMISS), n(M.rMx.CLIENT_THEME_PREVIEW_CLOSED), (0, w.C)();
            };
        return (0, r.jsxs)("div", {
            className: G.editorHeader,
            children: [
                (0, r.jsx)(f.P3F, {
                    className: G.closeCircleButton,
                    onClick: i,
                    children: (0, r.jsx)(f.k$p, {
                        size: "md",
                        color: "currentColor",
                        className: G.closeCircle,
                    }),
                }),
                (0, r.jsx)(f.X6q, {
                    variant: "heading-lg/extrabold",
                    children: U.intl.string(U.t["xSR+a2"]),
                }),
            ],
        });
    },
    F = (e) => {
        var t, n, i;
        let { onSubscribeSuccess: a, markAsDismissed: o } = e,
            { analyticsLocations: s } = (0, g.ZP)(m.Z.CLIENT_THEMES_EDITOR),
            [u, f] = (0, l.Wu)([A.default, R.Z], () => [
                R.Z.gradientPreset,
                N.ZP.isPremium(A.default.getCurrentUser()),
            ]),
            p = (0, y.N)(),
            { v2EditorEnabled: h } = P.Mc.useExperiment({ location: "ClientThemesEditor" }),
            E = (0, N.Rt)({
                intervalType: null == p || null == (t = p.subscription_trial) ? void 0 : t.interval,
                intervalCount: null == p || null == (n = p.subscription_trial) ? void 0 : n.interval_count,
            }),
            b = f
                ? U.intl.string(U.t.IJI7ys)
                : (null == p || null == (i = p.subscription_trial) ? void 0 : i.sku_id) === k.Si.TIER_2
                  ? E
                  : U.intl.string(U.t.mr4K7O),
            I = (e) => {
                e &&
                    (null == a || a(),
                    null != o && o(j.L.PRIMARY),
                    null != u &&
                        ((0, x.Yk)({
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
                  subscriptionTier: k.Si.TIER_2,
                  defaultTextOverride: b,
                  premiumModalAnalyticsLocation: {
                      object: M.qAy.BUTTON_CTA,
                      objectType: M.Qqv.BUY,
                  },
                  onSubscribeModalClose: I,
                  fullWidth: !0,
              })
            : (0, r.jsx)(v.Z, {
                  size: d.zx.Sizes.MEDIUM,
                  textOptions: { textOverride: b },
                  subscriptionTier: k.Si.TIER_2,
                  onSubscribeModalClose: I,
              });
    },
    V = (e) => {
        let { markAsDismissed: t, isCoachmark: n } = e,
            { isPreview: a } = (0, l.cj)([R.Z], () => ({ isPreview: R.Z.isPreview })),
            { v2EditorEnabled: o } = P.Mc.useExperiment({ location: "ClientThemesEditor" }),
            [c, d] = i.useState(!1),
            f = (0, D.q)(),
            _ = () => {
                null != t && t(j.L.DISMISS),
                    f(M.rMx.CLIENT_THEME_PREVIEW_CLOSED),
                    (0, w.C)(),
                    n || (0, S.openUserSettings)(T.n.APPEARANCE_PANEL, { section: M.oAB.APPEARANCE });
            },
            p = (0, b.B)(
                {
                    no: U.t["3D5yo6"],
                    "sv-SE": U.t["3D5yo6"],
                    uk: U.t["3D5yo6"],
                    de: U.t["3D5yo6"],
                },
                U.t["dqH+qq"],
            ),
            h = (0, s.EQ)({
                isPreview: a,
                isCoachmark: n,
                forceShowCloseButton: c,
            })
                .with({ isCoachmark: !0 }, { forceShowCloseButton: !0 }, () => U.intl.string(U.t.cpT0Cg))
                .with({ isPreview: !0 }, () => p)
                .otherwise(() => U.intl.string(U.t.Olc2Ky)),
            m = o ? G.editorFooterV2 : G.editorFooter;
        return (0, r.jsxs)("div", {
            className: m,
            children: [
                a &&
                    (0, r.jsx)(F, {
                        onSubscribeSuccess: () => {
                            d(!0);
                        },
                        markAsDismissed: t,
                    }),
                (0, r.jsx)(u.zxk, {
                    fullWidth: !0,
                    onClick: _,
                    variant: "secondary",
                    text: h,
                }),
            ],
        });
    };
function H(e) {
    let { markAsDismissed: t, showClientThemesCoachmark: n } = e,
        { analyticsLocations: a } = (0, g.ZP)(m.Z.CLIENT_THEMES_EDITOR),
        { v2EditorEnabled: s } = P.Mc.useExperiment({ location: "ClientThemesEditor" }),
        { isPreview: c, shouldEditorAnimate: u } = (0, l.cj)([R.Z, h.Z], () => ({
            isPreview: R.Z.isPreview,
            shouldEditorAnimate: n && !h.Z.useReducedMotion,
        })),
        d = (0, E.oq)().activePanel === E.wh.CLIENT_THEMES,
        _ = (0, D.q)();
    i.useEffect(() => _(M.rMx.CLIENT_THEME_PREVIEW_VIEWED), [_]),
        i.useEffect(() => {
            c &&
                C.default.track(M.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: k.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: a,
                });
        }, [c, a]);
    let b = (0, D.J)(),
        y = (0, p.Z)(null, c ? b : M.dG4);
    return (
        i.useEffect(() => {
            if (c && !d) return b;
        }, [c, d, b]),
        (0, r.jsx)(g.Gt, {
            value: a,
            children: (0, r.jsx)("div", {
                ref: y,
                "data-app-right-panel": !0,
                className: o()(G.themeEditor, u ? G.editorAnimate : null),
                children: (0, r.jsxs)(f.y5t, {
                    children: [
                        n ? (0, r.jsx)(B, {}) : (0, r.jsx)(Z, { markAsDismissed: t }),
                        s && (0, r.jsx)(L.Z, {}),
                        (0, r.jsx)(f.Ttm, {
                            className: G.editorBody,
                            children: (0, r.jsxs)(x.ZP, {
                                type: x.yH.EDITOR,
                                children: [
                                    !c && (0, r.jsx)(x.ZP.Basic, { className: G.selectionGroup }),
                                    (0, r.jsx)(x.ZP.Gradient, {
                                        className: G.selectionGroup,
                                        isCoachmark: n,
                                    }),
                                ],
                            }),
                        }),
                        (0, r.jsx)(V, {
                            markAsDismissed: t,
                            isCoachmark: n,
                        }),
                    ],
                }),
            }),
        })
    );
}
