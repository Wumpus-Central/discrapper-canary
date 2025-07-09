(n.d(t, { Z: () => U }), n(388685), n(314940));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(278074),
    l = n(442837),
    c = n(524437),
    u = n(755721),
    d = n(481060),
    f = n(153867),
    _ = n(230711),
    p = n(351773),
    h = n(607070),
    m = n(100527),
    g = n(906732),
    E = n(550385),
    b = n(639119),
    y = n(767714),
    O = n(587446),
    v = n(594174),
    I = n(626135),
    T = n(74538),
    S = n(514361),
    A = n(55358),
    N = n(572397),
    C = n(705262),
    R = n(981631),
    P = n(921944),
    w = n(474936),
    D = n(388032),
    L = n(595532);
let x = () =>
        (0, r.jsx)('div', {
            className: L.editorHeader,
            children: (0, r.jsxs)('div', {
                className: L.bannerUpsell,
                children: [
                    (0, r.jsx)(O.Z, { className: L.premiumIcon }),
                    (0, r.jsx)(d.X6q, {
                        variant: 'heading-md/bold',
                        color: 'always-white',
                        children: D.intl.string(D.t.POSLGR)
                    })
                ]
            })
        }),
    M = (e) => {
        let { markAsDismissed: t } = e,
            n = (0, N.q)(),
            i = () => {
                (null != t && t(P.L.DISMISS), n(R.rMx.CLIENT_THEME_PREVIEW_CLOSED), (0, A.C)());
            };
        return (0, r.jsxs)('div', {
            className: L.editorHeader,
            children: [
                (0, r.jsx)(d.P3F, {
                    className: L.closeCircleButton,
                    onClick: i,
                    children: (0, r.jsx)(d.k$p, {
                        size: 'md',
                        color: 'currentColor',
                        className: L.closeCircle
                    })
                }),
                (0, r.jsx)(d.X6q, {
                    variant: 'heading-lg/extrabold',
                    children: D.intl.string(D.t['xSR+a2'])
                })
            ]
        });
    },
    k = (e) => {
        var t, n, i;
        let { onSubscribeSuccess: a, markAsDismissed: o } = e,
            { analyticsLocations: s } = (0, g.ZP)(m.Z.CLIENT_THEMES_EDITOR),
            [d, _] = (0, l.Wu)([v.default, S.Z], () => [S.Z.gradientPreset, T.ZP.isPremium(v.default.getCurrentUser())]),
            p = (0, b.N)(),
            h = (0, T.Rt)({
                intervalType: null == p || null == (t = p.subscription_trial) ? void 0 : t.interval,
                intervalCount: null == p || null == (n = p.subscription_trial) ? void 0 : n.interval_count
            }),
            E = (e) => {
                e &&
                    (null == a || a(),
                    null != o && o(P.L.PRIMARY),
                    null != d &&
                        ((0, C.Yk)({
                            isPersisted: !0,
                            themeName: c.Us[d.id],
                            analyticsLocations: s
                        }),
                        (0, f.ZI)({
                            backgroundGradientPresetId: d.id,
                            theme: d.theme
                        })));
            };
        return (0, r.jsx)(y.Z, {
            size: u.zx.Sizes.MEDIUM,
            textOptions: { textOverride: _ ? D.intl.string(D.t.IJI7ys) : (null == p || null == (i = p.subscription_trial) ? void 0 : i.sku_id) === w.Si.TIER_2 ? h : D.intl.string(D.t.mr4K7O) },
            subscriptionTier: w.Si.TIER_2,
            onSubscribeModalClose: E
        });
    },
    j = (e) => {
        let { markAsDismissed: t, isCoachmark: n } = e,
            { isPreview: a } = (0, l.cj)([S.Z], () => ({ isPreview: S.Z.isPreview })),
            [o, c] = i.useState(!1),
            d = (0, N.q)(),
            f = () => {
                (null != t && t(P.L.DISMISS), d(R.rMx.CLIENT_THEME_PREVIEW_CLOSED), (0, A.C)(), n || _.Z.open());
            },
            p = (0, s.EQ)({
                isPreview: a,
                isCoachmark: n,
                forceShowCloseButton: o
            })
                .with({ isCoachmark: !0 }, { forceShowCloseButton: !0 }, () => D.intl.string(D.t.cpT0Cg))
                .with({ isPreview: !0 }, () => D.intl.string(D.t['dqH+qq']))
                .otherwise(() => D.intl.string(D.t.Olc2Ky));
        return (0, r.jsxs)('div', {
            className: L.editorFooter,
            children: [
                a &&
                    (0, r.jsx)(k, {
                        onSubscribeSuccess: () => {
                            c(!0);
                        },
                        markAsDismissed: t
                    }),
                (0, r.jsx)(u.zx, {
                    className: L.footerButton,
                    onClick: f,
                    color: u.zx.Colors.PRIMARY,
                    size: u.zx.Sizes.MEDIUM,
                    children: p
                })
            ]
        });
    };
function U(e) {
    let { markAsDismissed: t, showClientThemesCoachmark: n } = e,
        { analyticsLocations: a } = (0, g.ZP)(m.Z.CLIENT_THEMES_EDITOR),
        { isPreview: s, shouldEditorAnimate: c } = (0, l.cj)([S.Z, h.Z], () => ({
            isPreview: S.Z.isPreview,
            shouldEditorAnimate: n && !h.Z.useReducedMotion
        })),
        u = (0, E.oq)().activePanel === E.wh.CLIENT_THEMES,
        f = (0, N.q)();
    (i.useEffect(() => f(R.rMx.CLIENT_THEME_PREVIEW_VIEWED), [f]),
        i.useEffect(() => {
            s &&
                I.default.track(R.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: w.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: a
                });
        }, [s, a]));
    let _ = (0, N.J)(),
        b = (0, p.Z)(null, s ? _ : R.dG4);
    return (
        i.useEffect(() => {
            if (s && !u) return _;
        }, [s, u, _]),
        (0, r.jsx)(g.Gt, {
            value: a,
            children: (0, r.jsx)('div', {
                ref: b,
                'data-app-right-panel': !0,
                className: o()(L.themeEditor, c ? L.editorAnimate : null),
                children: (0, r.jsxs)(d.y5t, {
                    children: [
                        n ? (0, r.jsx)(x, {}) : (0, r.jsx)(M, { markAsDismissed: t }),
                        (0, r.jsx)(d.Ttm, {
                            className: L.editorBody,
                            children: (0, r.jsxs)(C.ZP, {
                                type: C.yH.EDITOR,
                                children: [
                                    !s && (0, r.jsx)(C.ZP.Basic, { className: L.selectionGroup }),
                                    (0, r.jsx)(C.ZP.Gradient, {
                                        className: L.selectionGroup,
                                        isCoachmark: n
                                    })
                                ]
                            })
                        }),
                        (0, r.jsx)(j, {
                            markAsDismissed: t,
                            isCoachmark: n
                        })
                    ]
                })
            })
        })
    );
}
