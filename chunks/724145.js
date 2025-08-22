n.d(t, { Z: () => F }), n(388685), n(314940);
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
    y = n(799360),
    O = n(639119),
    v = n(638212),
    I = n(767714),
    T = n(587446),
    S = n(594174),
    A = n(626135),
    C = n(74538),
    N = n(514361),
    R = n(803038),
    P = n(55358),
    w = n(572397),
    D = n(708154),
    x = n(705262),
    L = n(981631),
    j = n(921944),
    M = n(474936),
    k = n(388032),
    U = n(204089);
let G = () =>
        (0, r.jsx)("div", {
            className: U.editorHeader,
            children: (0, r.jsxs)("div", {
                className: U.bannerUpsell,
                children: [
                    (0, r.jsx)(T.Z, { className: U.premiumIcon }),
                    (0, r.jsx)(f.X6q, {
                        variant: "heading-md/bold",
                        color: "always-white",
                        children: k.intl.string(k.t.POSLGR),
                    }),
                ],
            }),
        }),
    B = (e) => {
        let { markAsDismissed: t } = e,
            n = (0, w.q)(),
            i = () => {
                null != t && t(j.L.DISMISS), n(L.rMx.CLIENT_THEME_PREVIEW_CLOSED), (0, P.C)();
            };
        return (0, r.jsxs)("div", {
            className: U.editorHeader,
            children: [
                (0, r.jsx)(f.P3F, {
                    className: U.closeCircleButton,
                    onClick: i,
                    children: (0, r.jsx)(f.k$p, {
                        size: "md",
                        color: "currentColor",
                        className: U.closeCircle,
                    }),
                }),
                (0, r.jsx)(f.X6q, {
                    variant: "heading-lg/extrabold",
                    children: k.intl.string(k.t["xSR+a2"]),
                }),
            ],
        });
    },
    Z = (e) => {
        var t, n, i;
        let { onSubscribeSuccess: a, markAsDismissed: o } = e,
            { analyticsLocations: s } = (0, E.ZP)(g.Z.CLIENT_THEMES_EDITOR),
            [u, f] = (0, l.Wu)([S.default, N.Z], () => [
                N.Z.gradientPreset,
                C.ZP.isPremium(S.default.getCurrentUser()),
            ]),
            p = (0, O.N)(),
            { v2EditorEnabled: h } = R.Mc.useExperiment({ location: "ClientThemesEditor" }),
            m = (0, C.Rt)({
                intervalType: null == p || null == (t = p.subscription_trial) ? void 0 : t.interval,
                intervalCount: null == p || null == (n = p.subscription_trial) ? void 0 : n.interval_count,
            }),
            b = f
                ? k.intl.string(k.t.IJI7ys)
                : (null == p || null == (i = p.subscription_trial) ? void 0 : i.sku_id) === M.Si.TIER_2
                  ? m
                  : k.intl.string(k.t.mr4K7O),
            y = (e) => {
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
            ? (0, r.jsx)(v.Z, {
                  subscriptionTier: M.Si.TIER_2,
                  defaultTextOverride: b,
                  premiumModalAnalyticsLocation: {
                      object: L.qAy.BUTTON_CTA,
                      objectType: L.Qqv.BUY,
                  },
                  onSubscribeModalClose: y,
                  fullWidth: !0,
              })
            : (0, r.jsx)(I.Z, {
                  size: d.zx.Sizes.MEDIUM,
                  textOptions: { textOverride: b },
                  subscriptionTier: M.Si.TIER_2,
                  onSubscribeModalClose: y,
              });
    },
    V = (e) => {
        let { markAsDismissed: t, isCoachmark: n } = e,
            { isPreview: a } = (0, l.cj)([N.Z], () => ({ isPreview: N.Z.isPreview })),
            { v2EditorEnabled: o } = R.Mc.useExperiment({ location: "ClientThemesEditor" }),
            [c, d] = i.useState(!1),
            f = (0, w.q)(),
            _ = () => {
                null != t && t(j.L.DISMISS), f(L.rMx.CLIENT_THEME_PREVIEW_CLOSED), (0, P.C)(), n || p.Z.open();
            },
            h = (0, y.B)(
                {
                    no: k.t["3D5yo6"],
                    "sv-SE": k.t["3D5yo6"],
                    uk: k.t["3D5yo6"],
                    de: k.t["3D5yo6"],
                },
                k.t["dqH+qq"],
            ),
            m = (0, s.EQ)({
                isPreview: a,
                isCoachmark: n,
                forceShowCloseButton: c,
            })
                .with({ isCoachmark: !0 }, { forceShowCloseButton: !0 }, () => k.intl.string(k.t.cpT0Cg))
                .with({ isPreview: !0 }, () => h)
                .otherwise(() => k.intl.string(k.t.Olc2Ky)),
            g = o ? U.editorFooterV2 : U.editorFooter;
        return (0, r.jsxs)("div", {
            className: g,
            children: [
                a &&
                    (0, r.jsx)(Z, {
                        onSubscribeSuccess: () => {
                            d(!0);
                        },
                        markAsDismissed: t,
                    }),
                (0, r.jsx)(u.z, {
                    fullWidth: !0,
                    onClick: _,
                    variant: "secondary",
                    text: m,
                }),
            ],
        });
    };
function F(e) {
    let { markAsDismissed: t, showClientThemesCoachmark: n } = e,
        { analyticsLocations: a } = (0, E.ZP)(g.Z.CLIENT_THEMES_EDITOR),
        { v2EditorEnabled: s } = R.Mc.useExperiment({ location: "ClientThemesEditor" }),
        { isPreview: c, shouldEditorAnimate: u } = (0, l.cj)([N.Z, m.Z], () => ({
            isPreview: N.Z.isPreview,
            shouldEditorAnimate: n && !m.Z.useReducedMotion,
        })),
        d = (0, b.oq)().activePanel === b.wh.CLIENT_THEMES,
        _ = (0, w.q)();
    i.useEffect(() => _(L.rMx.CLIENT_THEME_PREVIEW_VIEWED), [_]),
        i.useEffect(() => {
            c &&
                A.default.track(L.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: M.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: a,
                });
        }, [c, a]);
    let p = (0, w.J)(),
        y = (0, h.Z)(null, c ? p : L.dG4);
    return (
        i.useEffect(() => {
            if (c && !d) return p;
        }, [c, d, p]),
        (0, r.jsx)(E.Gt, {
            value: a,
            children: (0, r.jsx)("div", {
                ref: y,
                "data-app-right-panel": !0,
                className: o()(U.themeEditor, u ? U.editorAnimate : null),
                children: (0, r.jsxs)(f.y5t, {
                    children: [
                        n ? (0, r.jsx)(G, {}) : (0, r.jsx)(B, { markAsDismissed: t }),
                        s && (0, r.jsx)(D.Z, {}),
                        (0, r.jsx)(f.Ttm, {
                            className: U.editorBody,
                            children: (0, r.jsxs)(x.ZP, {
                                type: x.yH.EDITOR,
                                children: [
                                    !c && (0, r.jsx)(x.ZP.Basic, { className: U.selectionGroup }),
                                    (0, r.jsx)(x.ZP.Gradient, {
                                        className: U.selectionGroup,
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
