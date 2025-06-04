n.d(t, { Z: () => j }), n(388685), n(314940);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(278074),
    l = n(442837),
    c = n(524437),
    u = n(481060),
    d = n(153867),
    f = n(230711),
    _ = n(351773),
    p = n(607070),
    h = n(100527),
    m = n(906732),
    g = n(550385),
    E = n(639119),
    b = n(767714),
    y = n(587446),
    O = n(594174),
    v = n(626135),
    I = n(74538),
    S = n(514361),
    T = n(55358),
    A = n(572397),
    N = n(705262),
    C = n(981631),
    P = n(921944),
    R = n(474936),
    w = n(388032),
    D = n(595532);
let L = () =>
        (0, r.jsx)('div', {
            className: D.editorHeader,
            children: (0, r.jsxs)('div', {
                className: D.bannerUpsell,
                children: [
                    (0, r.jsx)(y.Z, { className: D.premiumIcon }),
                    (0, r.jsx)(u.X6q, {
                        variant: 'heading-md/bold',
                        color: 'always-white',
                        children: w.intl.string(w.t.POSLGR)
                    })
                ]
            })
        }),
    x = (e) => {
        let { markAsDismissed: t } = e,
            n = (0, A.q)(),
            i = () => {
                null != t && t(P.L.DISMISS), n(C.rMx.CLIENT_THEME_PREVIEW_CLOSED), (0, T.C)();
            };
        return (0, r.jsxs)('div', {
            className: D.editorHeader,
            children: [
                (0, r.jsx)(u.P3F, {
                    className: D.closeCircleButton,
                    onClick: i,
                    children: (0, r.jsx)(u.k$p, {
                        size: 'md',
                        color: 'currentColor',
                        className: D.closeCircle
                    })
                }),
                (0, r.jsx)(u.X6q, {
                    variant: 'heading-lg/extrabold',
                    children: w.intl.string(w.t['xSR+a2'])
                })
            ]
        });
    },
    k = (e) => {
        var t, n, i;
        let { onSubscribeSuccess: o, markAsDismissed: a } = e,
            { analyticsLocations: s } = (0, m.ZP)(h.Z.CLIENT_THEMES_EDITOR),
            [f, _] = (0, l.Wu)([O.default, S.Z], () => [S.Z.gradientPreset, I.ZP.isPremium(O.default.getCurrentUser())]),
            p = (0, E.N)(),
            g = (0, I.Rt)({
                intervalType: null == p || null == (t = p.subscription_trial) ? void 0 : t.interval,
                intervalCount: null == p || null == (n = p.subscription_trial) ? void 0 : n.interval_count
            }),
            y = (e) => {
                e &&
                    (null == o || o(),
                    null != a && a(P.L.PRIMARY),
                    null != f &&
                        ((0, N.Yk)({
                            isPersisted: !0,
                            themeName: c.Us[f.id],
                            analyticsLocations: s
                        }),
                        (0, d.ZI)({
                            backgroundGradientPresetId: f.id,
                            theme: f.theme
                        })));
            };
        return (0, r.jsx)(b.Z, {
            size: u.zxk.Sizes.MEDIUM,
            textOptions: { textOverride: _ ? w.intl.string(w.t.IJI7ys) : (null == p || null == (i = p.subscription_trial) ? void 0 : i.sku_id) === R.Si.TIER_2 ? g : w.intl.string(w.t.mr4K7O) },
            subscriptionTier: R.Si.TIER_2,
            onSubscribeModalClose: y
        });
    },
    M = (e) => {
        let { markAsDismissed: t, isCoachmark: n } = e,
            { isPreview: o } = (0, l.cj)([S.Z], () => ({ isPreview: S.Z.isPreview })),
            [a, c] = i.useState(!1),
            d = (0, A.q)(),
            _ = () => {
                null != t && t(P.L.DISMISS), d(C.rMx.CLIENT_THEME_PREVIEW_CLOSED), (0, T.C)(), n || f.Z.open();
            },
            p = (0, s.EQ)({
                isPreview: o,
                isCoachmark: n,
                forceShowCloseButton: a
            })
                .with({ isCoachmark: !0 }, { forceShowCloseButton: !0 }, () => w.intl.string(w.t.cpT0Cg))
                .with({ isPreview: !0 }, () => w.intl.string(w.t['dqH+qq']))
                .otherwise(() => w.intl.string(w.t.Olc2Ky));
        return (0, r.jsxs)('div', {
            className: D.editorFooter,
            children: [
                o &&
                    (0, r.jsx)(k, {
                        onSubscribeSuccess: () => {
                            c(!0);
                        },
                        markAsDismissed: t
                    }),
                (0, r.jsx)(u.zxk, {
                    className: D.footerButton,
                    onClick: _,
                    color: u.zxk.Colors.PRIMARY,
                    size: u.zxk.Sizes.MEDIUM,
                    children: p
                })
            ]
        });
    };
function j(e) {
    let { markAsDismissed: t, showClientThemesCoachmark: n } = e,
        { analyticsLocations: o } = (0, m.ZP)(h.Z.CLIENT_THEMES_EDITOR),
        { isPreview: s, shouldEditorAnimate: c } = (0, l.cj)([S.Z, p.Z], () => ({
            isPreview: S.Z.isPreview,
            shouldEditorAnimate: n && !p.Z.useReducedMotion
        })),
        d = (0, g.oq)().activePanel === g.wh.CLIENT_THEMES,
        f = (0, A.q)();
    i.useEffect(() => f(C.rMx.CLIENT_THEME_PREVIEW_VIEWED), [f]),
        i.useEffect(() => {
            s &&
                v.default.track(C.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: R.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: o
                });
        }, [s, o]);
    let E = (0, A.J)(),
        b = (0, _.Z)(null, s ? E : C.dG4);
    return (
        i.useEffect(() => {
            if (s && !d) return E;
        }, [s, d, E]),
        (0, r.jsx)(m.Gt, {
            value: o,
            children: (0, r.jsx)('div', {
                ref: b,
                'data-app-right-panel': !0,
                className: a()(D.themeEditor, c ? D.editorAnimate : null),
                children: (0, r.jsxs)(u.y5t, {
                    children: [
                        n ? (0, r.jsx)(L, {}) : (0, r.jsx)(x, { markAsDismissed: t }),
                        (0, r.jsx)(u.Ttm, {
                            className: D.editorBody,
                            children: (0, r.jsxs)(N.ZP, {
                                type: N.yH.EDITOR,
                                children: [
                                    !s && (0, r.jsx)(N.ZP.Basic, { className: D.selectionGroup }),
                                    (0, r.jsx)(N.ZP.Gradient, {
                                        className: D.selectionGroup,
                                        isCoachmark: n
                                    })
                                ]
                            })
                        }),
                        (0, r.jsx)(M, {
                            markAsDismissed: t,
                            isCoachmark: n
                        })
                    ]
                })
            })
        })
    );
}
