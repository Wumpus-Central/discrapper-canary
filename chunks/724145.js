(n.d(t, { Z: () => G }), n(388685), n(314940));
var r = n(255367),
    i = n(73800),
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
    O = n(767714),
    v = n(587446),
    I = n(594174),
    T = n(626135),
    S = n(74538),
    A = n(514361),
    N = n(55358),
    C = n(572397),
    R = n(705262),
    P = n(981631),
    w = n(921944),
    D = n(474936),
    L = n(388032),
    x = n(595532);
let M = () =>
        (0, r.jsx)('div', {
            className: x.editorHeader,
            children: (0, r.jsxs)('div', {
                className: x.bannerUpsell,
                children: [
                    (0, r.jsx)(v.Z, { className: x.premiumIcon }),
                    (0, r.jsx)(f.X6q, {
                        variant: 'heading-md/bold',
                        color: 'always-white',
                        children: L.intl.string(L.t.POSLGR)
                    })
                ]
            })
        }),
    k = (e) => {
        let { markAsDismissed: t } = e,
            n = (0, C.q)(),
            i = () => {
                (null != t && t(w.L.DISMISS), n(P.rMx.CLIENT_THEME_PREVIEW_CLOSED), (0, N.C)());
            };
        return (0, r.jsxs)('div', {
            className: x.editorHeader,
            children: [
                (0, r.jsx)(f.P3F, {
                    className: x.closeCircleButton,
                    onClick: i,
                    children: (0, r.jsx)(f.k$p, {
                        size: 'md',
                        color: 'currentColor',
                        className: x.closeCircle
                    })
                }),
                (0, r.jsx)(f.X6q, {
                    variant: 'heading-lg/extrabold',
                    children: L.intl.string(L.t['xSR+a2'])
                })
            ]
        });
    },
    j = (e) => {
        var t, n, i;
        let { onSubscribeSuccess: a, markAsDismissed: o } = e,
            { analyticsLocations: s } = (0, E.ZP)(g.Z.CLIENT_THEMES_EDITOR),
            [u, f] = (0, l.Wu)([I.default, A.Z], () => [A.Z.gradientPreset, S.ZP.isPremium(I.default.getCurrentUser())]),
            p = (0, y.N)(),
            h = (0, S.Rt)({
                intervalType: null == p || null == (t = p.subscription_trial) ? void 0 : t.interval,
                intervalCount: null == p || null == (n = p.subscription_trial) ? void 0 : n.interval_count
            }),
            m = (e) => {
                e &&
                    (null == a || a(),
                    null != o && o(w.L.PRIMARY),
                    null != u &&
                        ((0, R.Yk)({
                            isPersisted: !0,
                            themeName: c.Us[u.id],
                            analyticsLocations: s
                        }),
                        (0, _.ZI)({
                            backgroundGradientPresetId: u.id,
                            theme: u.theme
                        })));
            };
        return (0, r.jsx)(O.Z, {
            size: d.zx.Sizes.MEDIUM,
            textOptions: { textOverride: f ? L.intl.string(L.t.IJI7ys) : (null == p || null == (i = p.subscription_trial) ? void 0 : i.sku_id) === D.Si.TIER_2 ? h : L.intl.string(L.t.mr4K7O) },
            subscriptionTier: D.Si.TIER_2,
            onSubscribeModalClose: m
        });
    },
    U = (e) => {
        let { markAsDismissed: t, isCoachmark: n } = e,
            { isPreview: a } = (0, l.cj)([A.Z], () => ({ isPreview: A.Z.isPreview })),
            [o, c] = i.useState(!1),
            d = (0, C.q)(),
            f = () => {
                (null != t && t(w.L.DISMISS), d(P.rMx.CLIENT_THEME_PREVIEW_CLOSED), (0, N.C)(), n || p.Z.open());
            },
            _ = (0, s.EQ)({
                isPreview: a,
                isCoachmark: n,
                forceShowCloseButton: o
            })
                .with({ isCoachmark: !0 }, { forceShowCloseButton: !0 }, () => L.intl.string(L.t.cpT0Cg))
                .with({ isPreview: !0 }, () => L.intl.string(L.t['dqH+qq']))
                .otherwise(() => L.intl.string(L.t.Olc2Ky));
        return (0, r.jsxs)('div', {
            className: x.editorFooter,
            children: [
                a &&
                    (0, r.jsx)(j, {
                        onSubscribeSuccess: () => {
                            c(!0);
                        },
                        markAsDismissed: t
                    }),
                (0, r.jsx)(u.z, {
                    fullWidth: !0,
                    onClick: f,
                    variant: 'secondary',
                    text: _
                })
            ]
        });
    };
function G(e) {
    let { markAsDismissed: t, showClientThemesCoachmark: n } = e,
        { analyticsLocations: a } = (0, E.ZP)(g.Z.CLIENT_THEMES_EDITOR),
        { isPreview: s, shouldEditorAnimate: c } = (0, l.cj)([A.Z, m.Z], () => ({
            isPreview: A.Z.isPreview,
            shouldEditorAnimate: n && !m.Z.useReducedMotion
        })),
        u = (0, b.oq)().activePanel === b.wh.CLIENT_THEMES,
        d = (0, C.q)();
    (i.useEffect(() => d(P.rMx.CLIENT_THEME_PREVIEW_VIEWED), [d]),
        i.useEffect(() => {
            s &&
                T.default.track(P.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: D.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: a
                });
        }, [s, a]));
    let _ = (0, C.J)(),
        p = (0, h.Z)(null, s ? _ : P.dG4);
    return (
        i.useEffect(() => {
            if (s && !u) return _;
        }, [s, u, _]),
        (0, r.jsx)(E.Gt, {
            value: a,
            children: (0, r.jsx)('div', {
                ref: p,
                'data-app-right-panel': !0,
                className: o()(x.themeEditor, c ? x.editorAnimate : null),
                children: (0, r.jsxs)(f.y5t, {
                    children: [
                        n ? (0, r.jsx)(M, {}) : (0, r.jsx)(k, { markAsDismissed: t }),
                        (0, r.jsx)(f.Ttm, {
                            className: x.editorBody,
                            children: (0, r.jsxs)(R.ZP, {
                                type: R.yH.EDITOR,
                                children: [
                                    !s && (0, r.jsx)(R.ZP.Basic, { className: x.selectionGroup }),
                                    (0, r.jsx)(R.ZP.Gradient, {
                                        className: x.selectionGroup,
                                        isCoachmark: n
                                    })
                                ]
                            })
                        }),
                        (0, r.jsx)(U, {
                            markAsDismissed: t,
                            isCoachmark: n
                        })
                    ]
                })
            })
        })
    );
}
