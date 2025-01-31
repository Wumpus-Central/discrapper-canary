n.d(t, { Z: () => k }), n(47120), n(627341);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(278074),
    l = n(442837),
    u = n(524437),
    c = n(481060),
    d = n(153867),
    f = n(230711),
    _ = n(351773),
    p = n(607070),
    h = n(100527),
    m = n(906732),
    g = n(639119),
    E = n(197115),
    v = n(587446),
    y = n(594174),
    I = n(626135),
    b = n(74538),
    T = n(238302),
    S = n(514361),
    A = n(572397),
    N = n(705262),
    C = n(981631),
    R = n(921944),
    O = n(474936),
    D = n(388032),
    x = n(245392);
let L = () =>
        (0, i.jsx)('div', {
            className: x.editorHeader,
            children: (0, i.jsxs)('div', {
                className: x.bannerUpsell,
                children: [
                    (0, i.jsx)(v.Z, { className: x.premiumIcon }),
                    (0, i.jsx)(c.X6q, {
                        variant: 'heading-md/bold',
                        color: 'always-white',
                        children: D.intl.string(D.t.POSLGR)
                    })
                ]
            })
        }),
    P = (e) => {
        let { markAsDismissed: t } = e,
            n = (0, A.q)(),
            r = () => {
                null != t && t(R.L.DISMISS), n(C.rMx.CLIENT_THEME_PREVIEW_CLOSED), (0, T.Mo)();
            };
        return (0, i.jsxs)('div', {
            className: x.editorHeader,
            children: [
                (0, i.jsx)(c.P3F, {
                    className: x.closeCircleButton,
                    onClick: r,
                    children: (0, i.jsx)(c.k$p, {
                        size: 'md',
                        color: 'currentColor',
                        className: x.closeCircle
                    })
                }),
                (0, i.jsx)(c.X6q, {
                    variant: 'heading-lg/extrabold',
                    children: D.intl.string(D.t['xSR+a2'])
                })
            ]
        });
    },
    w = (e) => {
        var t, n, r;
        let { onSubscribeSuccess: a, markAsDismissed: s } = e,
            { analyticsLocations: o } = (0, m.ZP)(h.Z.CLIENT_THEMES_EDITOR),
            [f, _] = (0, l.Wu)([y.default, S.Z], () => [S.Z.gradientPreset, b.ZP.isPremium(y.default.getCurrentUser())]),
            p = (0, g.N)(),
            v = (0, b.Rt)({
                intervalType: null == p ? void 0 : null === (t = p.subscription_trial) || void 0 === t ? void 0 : t.interval,
                intervalCount: null == p ? void 0 : null === (n = p.subscription_trial) || void 0 === n ? void 0 : n.interval_count
            }),
            I = (e) => {
                if (e)
                    null == a || a(),
                        null != s && s(R.L.PRIMARY),
                        null != f &&
                            ((0, N.Yk)({
                                isPersisted: !0,
                                themeName: u.Us[f.id],
                                analyticsLocations: o
                            }),
                            (0, d.ZI)({
                                backgroundGradientPresetId: f.id,
                                theme: f.theme
                            }));
            };
        return (0, i.jsx)(E.Z, {
            size: c.zxk.Sizes.MEDIUM,
            buttonText: _ ? D.intl.string(D.t.IJI7ys) : (null == p ? void 0 : null === (r = p.subscription_trial) || void 0 === r ? void 0 : r.sku_id) === O.Si.TIER_2 ? v : D.intl.string(D.t.mr4K7O),
            subscriptionTier: O.Si.TIER_2,
            onSubscribeModalClose: I
        });
    },
    M = (e) => {
        let { markAsDismissed: t } = e,
            { isPreview: n, isCoachmark: a } = (0, l.cj)([S.Z], () => ({
                isPreview: S.Z.isPreview,
                isCoachmark: S.Z.isCoachmark
            })),
            [s, u] = r.useState(!1),
            d = (0, A.q)(),
            _ = () => {
                null != t && t(R.L.DISMISS), d(C.rMx.CLIENT_THEME_PREVIEW_CLOSED), (0, T.Mo)(), a || f.Z.open();
            },
            p = (0, o.EQ)({
                isPreview: n,
                isCoachmark: a,
                forceShowCloseButton: s
            })
                .with({ isCoachmark: !0 }, { forceShowCloseButton: !0 }, () => D.intl.string(D.t.cpT0Cg))
                .with({ isPreview: !0 }, () => D.intl.string(D.t['dqH+qq']))
                .otherwise(() => D.intl.string(D.t.Olc2Ky));
        return (0, i.jsxs)('div', {
            className: x.editorFooter,
            children: [
                n &&
                    (0, i.jsx)(w, {
                        onSubscribeSuccess: () => {
                            u(!0);
                        },
                        markAsDismissed: t
                    }),
                (0, i.jsx)(c.zxk, {
                    className: x.footerButton,
                    onClick: _,
                    color: c.zxk.Colors.PRIMARY,
                    size: c.zxk.Sizes.MEDIUM,
                    children: p
                })
            ]
        });
    };
function k(e) {
    let { markAsDismissed: t } = e,
        { analyticsLocations: n } = (0, m.ZP)(h.Z.CLIENT_THEMES_EDITOR),
        {
            isPreview: a,
            isCoachmark: o,
            isEditorOpen: u,
            shouldEditorAnimate: d
        } = (0, l.cj)([S.Z, p.Z], () => ({
            isPreview: S.Z.isPreview,
            isCoachmark: S.Z.isCoachmark,
            isEditorOpen: S.Z.isEditorOpen,
            shouldEditorAnimate: S.Z.isCoachmark && !p.Z.useReducedMotion
        })),
        f = (0, A.q)();
    r.useEffect(() => f(C.rMx.CLIENT_THEME_PREVIEW_VIEWED), [f]),
        r.useEffect(() => {
            a &&
                I.default.track(C.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: O.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: n
                });
        }, [a, n]);
    let g = (0, A.J)(),
        E = (0, _.Z)(null, a ? g : C.dG4);
    return (
        r.useEffect(() => {
            if (a && !u) return g;
        }, [a, u, g]),
        (0, i.jsx)(m.Gt, {
            value: n,
            children: (0, i.jsx)('div', {
                ref: E,
                'data-app-right-panel': !0,
                className: s()(x.themeEditor, d ? x.editorAnimate : null),
                children: (0, i.jsxs)(c.y5t, {
                    children: [
                        o ? (0, i.jsx)(L, {}) : (0, i.jsx)(P, { markAsDismissed: t }),
                        (0, i.jsx)(c.Ttm, {
                            className: x.editorBody,
                            children: (0, i.jsxs)(N.ZP, {
                                type: N.yH.EDITOR,
                                children: [!a && (0, i.jsx)(N.ZP.Basic, { className: x.selectionGroup }), (0, i.jsx)(N.ZP.Gradient, { className: x.selectionGroup })]
                            })
                        }),
                        (0, i.jsx)(M, { markAsDismissed: t })
                    ]
                })
            })
        })
    );
}
