n.d(t, { Z: () => j }), n(388685), n(314940);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(278074),
    l = n(442837),
    c = n(524437),
    u = n(481060),
    d = n(153867),
    _ = n(230711),
    f = n(351773),
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
    T = n(514361),
    S = n(55358),
    A = n(572397),
    N = n(705262),
    C = n(981631),
    R = n(921944),
    P = n(474936),
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
                null != t && t(R.L.DISMISS), n(C.rMx.CLIENT_THEME_PREVIEW_CLOSED), (0, S.C)();
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
    M = (e) => {
        var t, n, i;
        let { onSubscribeSuccess: a, markAsDismissed: o } = e,
            { analyticsLocations: s } = (0, m.ZP)(h.Z.CLIENT_THEMES_EDITOR),
            [_, f] = (0, l.Wu)([O.default, T.Z], () => [T.Z.gradientPreset, I.ZP.isPremium(O.default.getCurrentUser())]),
            p = (0, E.N)(),
            g = (0, I.Rt)({
                intervalType: null == p || null == (t = p.subscription_trial) ? void 0 : t.interval,
                intervalCount: null == p || null == (n = p.subscription_trial) ? void 0 : n.interval_count
            }),
            y = (e) => {
                e &&
                    (null == a || a(),
                    null != o && o(R.L.PRIMARY),
                    null != _ &&
                        ((0, N.Yk)({
                            isPersisted: !0,
                            themeName: c.Us[_.id],
                            analyticsLocations: s
                        }),
                        (0, d.ZI)({
                            backgroundGradientPresetId: _.id,
                            theme: _.theme
                        })));
            };
        return (0, r.jsx)(b.Z, {
            size: u.zxk.Sizes.MEDIUM,
            textOptions: { textOverride: f ? w.intl.string(w.t.IJI7ys) : (null == p || null == (i = p.subscription_trial) ? void 0 : i.sku_id) === P.Si.TIER_2 ? g : w.intl.string(w.t.mr4K7O) },
            subscriptionTier: P.Si.TIER_2,
            onSubscribeModalClose: y
        });
    },
    k = (e) => {
        let { markAsDismissed: t, isCoachmark: n } = e,
            { isPreview: a } = (0, l.cj)([T.Z], () => ({ isPreview: T.Z.isPreview })),
            [o, c] = i.useState(!1),
            d = (0, A.q)(),
            f = () => {
                null != t && t(R.L.DISMISS), d(C.rMx.CLIENT_THEME_PREVIEW_CLOSED), (0, S.C)(), n || _.Z.open();
            },
            p = (0, s.EQ)({
                isPreview: a,
                isCoachmark: n,
                forceShowCloseButton: o
            })
                .with({ isCoachmark: !0 }, { forceShowCloseButton: !0 }, () => w.intl.string(w.t.cpT0Cg))
                .with({ isPreview: !0 }, () => w.intl.string(w.t['dqH+qq']))
                .otherwise(() => w.intl.string(w.t.Olc2Ky));
        return (0, r.jsxs)('div', {
            className: D.editorFooter,
            children: [
                a &&
                    (0, r.jsx)(M, {
                        onSubscribeSuccess: () => {
                            c(!0);
                        },
                        markAsDismissed: t
                    }),
                (0, r.jsx)(u.zxk, {
                    className: D.footerButton,
                    onClick: f,
                    color: u.zxk.Colors.PRIMARY,
                    size: u.zxk.Sizes.MEDIUM,
                    children: p
                })
            ]
        });
    };
function j(e) {
    let { markAsDismissed: t, showClientThemesCoachmark: n } = e,
        { analyticsLocations: a } = (0, m.ZP)(h.Z.CLIENT_THEMES_EDITOR),
        { isPreview: s, shouldEditorAnimate: c } = (0, l.cj)([T.Z, p.Z], () => ({
            isPreview: T.Z.isPreview,
            shouldEditorAnimate: n && !p.Z.useReducedMotion
        })),
        d = (0, g.oq)().activePanel === g.wh.CLIENT_THEMES,
        _ = (0, A.q)();
    i.useEffect(() => _(C.rMx.CLIENT_THEME_PREVIEW_VIEWED), [_]),
        i.useEffect(() => {
            s &&
                v.default.track(C.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: P.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: a
                });
        }, [s, a]);
    let E = (0, A.J)(),
        b = (0, f.Z)(null, s ? E : C.dG4);
    return (
        i.useEffect(() => {
            if (s && !d) return E;
        }, [s, d, E]),
        (0, r.jsx)(m.Gt, {
            value: a,
            children: (0, r.jsx)('div', {
                ref: b,
                'data-app-right-panel': !0,
                className: o()(D.themeEditor, c ? D.editorAnimate : null),
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
                        (0, r.jsx)(k, {
                            markAsDismissed: t,
                            isCoachmark: n
                        })
                    ]
                })
            })
        })
    );
}
