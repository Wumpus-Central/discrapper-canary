n.d(t, { Z: () => k }), n(47120), n(627341);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(278074),
    l = n(442837),
    c = n(524437),
    u = n(481060),
    d = n(153867),
    f = n(230711),
    p = n(351773),
    _ = n(607070),
    h = n(100527),
    m = n(906732),
    g = n(639119),
    E = n(197115),
    v = n(587446),
    b = n(594174),
    y = n(626135),
    O = n(74538),
    S = n(238302),
    I = n(514361),
    T = n(572397),
    N = n(705262),
    A = n(981631),
    C = n(921944),
    R = n(474936),
    P = n(388032),
    w = n(156753);
let D = () =>
        (0, r.jsx)('div', {
            className: w.editorHeader,
            children: (0, r.jsxs)('div', {
                className: w.bannerUpsell,
                children: [
                    (0, r.jsx)(v.Z, { className: w.premiumIcon }),
                    (0, r.jsx)(u.X6q, {
                        variant: 'heading-md/bold',
                        color: 'always-white',
                        children: P.NW.string(P.t.POSLGR)
                    })
                ]
            })
        }),
    x = (e) => {
        let { markAsDismissed: t } = e,
            n = (0, T.q)(),
            i = () => {
                null != t && t(C.L.DISMISS), n(A.rMx.CLIENT_THEME_PREVIEW_CLOSED), (0, S.Mo)();
            };
        return (0, r.jsxs)('div', {
            className: w.editorHeader,
            children: [
                (0, r.jsx)(u.P3F, {
                    className: w.closeCircleButton,
                    onClick: i,
                    children: (0, r.jsx)(u.k$p, {
                        size: 'md',
                        color: 'currentColor',
                        className: w.closeCircle
                    })
                }),
                (0, r.jsx)(u.X6q, {
                    variant: 'heading-lg/extrabold',
                    children: P.NW.string(P.t['xSR+a2'])
                })
            ]
        });
    },
    L = (e) => {
        var t, n, i;
        let { onSubscribeSuccess: o, markAsDismissed: a } = e,
            { analyticsLocations: s } = (0, m.ZP)(h.Z.CLIENT_THEMES_EDITOR),
            [f, p] = (0, l.Wu)([b.default, I.Z], () => [I.Z.gradientPreset, O.ZP.isPremium(b.default.getCurrentUser())]),
            _ = (0, g.N)(),
            v = (0, O.Rt)({
                intervalType: null == _ ? void 0 : null === (t = _.subscription_trial) || void 0 === t ? void 0 : t.interval,
                intervalCount: null == _ ? void 0 : null === (n = _.subscription_trial) || void 0 === n ? void 0 : n.interval_count
            }),
            y = (e) => {
                if (e)
                    null == o || o(),
                        null != a && a(C.L.PRIMARY),
                        null != f &&
                            ((0, N.Yk)({
                                isPersisted: !0,
                                themeName: c.Us[f.id],
                                analyticsLocations: s
                            }),
                            (0, d.ZI)({
                                backgroundGradientPresetId: f.id,
                                theme: f.theme
                            }));
            };
        return (0, r.jsx)(E.Z, {
            size: u.zxk.Sizes.MEDIUM,
            buttonText: p ? P.NW.string(P.t.IJI7ys) : (null == _ ? void 0 : null === (i = _.subscription_trial) || void 0 === i ? void 0 : i.sku_id) === R.Si.TIER_2 ? v : P.NW.string(P.t.mr4K7O),
            subscriptionTier: R.Si.TIER_2,
            onSubscribeModalClose: y
        });
    },
    M = (e) => {
        let { markAsDismissed: t, isCoachmark: n } = e,
            { isPreview: o } = (0, l.cj)([I.Z], () => ({ isPreview: I.Z.isPreview })),
            [a, c] = i.useState(!1),
            d = (0, T.q)(),
            p = () => {
                null != t && t(C.L.DISMISS), d(A.rMx.CLIENT_THEME_PREVIEW_CLOSED), (0, S.Mo)(), n || f.Z.open();
            },
            _ = (0, s.EQ)({
                isPreview: o,
                isCoachmark: n,
                forceShowCloseButton: a
            })
                .with({ isCoachmark: !0 }, { forceShowCloseButton: !0 }, () => P.NW.string(P.t.cpT0Cg))
                .with({ isPreview: !0 }, () => P.NW.string(P.t['dqH+qq']))
                .otherwise(() => P.NW.string(P.t.Olc2Ky));
        return (0, r.jsxs)('div', {
            className: w.editorFooter,
            children: [
                o &&
                    (0, r.jsx)(L, {
                        onSubscribeSuccess: () => {
                            c(!0);
                        },
                        markAsDismissed: t
                    }),
                (0, r.jsx)(u.zxk, {
                    className: w.footerButton,
                    onClick: p,
                    color: u.zxk.Colors.PRIMARY,
                    size: u.zxk.Sizes.MEDIUM,
                    children: _
                })
            ]
        });
    };
function k(e) {
    let { markAsDismissed: t, showClientThemesCoachmark: n } = e,
        { analyticsLocations: o } = (0, m.ZP)(h.Z.CLIENT_THEMES_EDITOR),
        {
            isPreview: s,
            isEditorOpen: c,
            shouldEditorAnimate: d
        } = (0, l.cj)([I.Z, _.Z], () => ({
            isPreview: I.Z.isPreview,
            isEditorOpen: I.Z.isEditorOpen,
            shouldEditorAnimate: n && !_.Z.useReducedMotion
        })),
        f = (0, T.q)();
    i.useEffect(() => f(A.rMx.CLIENT_THEME_PREVIEW_VIEWED), [f]),
        i.useEffect(() => {
            s &&
                y.default.track(A.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: R.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: o
                });
        }, [s, o]);
    let g = (0, T.J)(),
        E = (0, p.Z)(null, s ? g : A.dG4);
    return (
        i.useEffect(() => {
            if (s && !c) return g;
        }, [s, c, g]),
        (0, r.jsx)(m.Gt, {
            value: o,
            children: (0, r.jsx)('div', {
                ref: E,
                'data-app-right-panel': !0,
                className: a()(w.themeEditor, d ? w.editorAnimate : null),
                children: (0, r.jsxs)(u.y5t, {
                    children: [
                        n ? (0, r.jsx)(D, {}) : (0, r.jsx)(x, { markAsDismissed: t }),
                        (0, r.jsx)(u.Ttm, {
                            className: w.editorBody,
                            children: (0, r.jsxs)(N.ZP, {
                                type: N.yH.EDITOR,
                                children: [
                                    !s && (0, r.jsx)(N.ZP.Basic, { className: w.selectionGroup }),
                                    (0, r.jsx)(N.ZP.Gradient, {
                                        className: w.selectionGroup,
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
