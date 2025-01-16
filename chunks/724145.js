r.d(n, {
    Z: function () {
        return G;
    }
});
var i = r(47120);
var a = r(627341);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(278074),
    d = r(442837),
    f = r(524437),
    _ = r(481060),
    h = r(153867),
    p = r(230711),
    m = r(351773),
    g = r(607070),
    E = r(100527),
    v = r(906732),
    I = r(639119),
    T = r(197115),
    b = r(587446),
    y = r(594174),
    S = r(626135),
    A = r(74538),
    N = r(238302),
    C = r(514361),
    R = r(572397),
    O = r(705262),
    D = r(981631),
    L = r(921944),
    x = r(474936),
    w = r(388032),
    P = r(245392);
let M = () =>
        (0, s.jsx)('div', {
            className: P.editorHeader,
            children: (0, s.jsxs)('div', {
                className: P.bannerUpsell,
                children: [
                    (0, s.jsx)(b.Z, { className: P.premiumIcon }),
                    (0, s.jsx)(_.Heading, {
                        variant: 'heading-md/bold',
                        color: 'always-white',
                        children: w.intl.string(w.t.POSLGR)
                    })
                ]
            })
        }),
    k = (e) => {
        let { markAsDismissed: n } = e,
            r = (0, R.q)(),
            i = () => {
                null != n && n(L.L.DISMISS), r(D.rMx.CLIENT_THEME_PREVIEW_CLOSED), (0, N.Mo)();
            };
        return (0, s.jsxs)('div', {
            className: P.editorHeader,
            children: [
                (0, s.jsx)(_.Clickable, {
                    className: P.closeCircleButton,
                    onClick: i,
                    children: (0, s.jsx)(_.CircleXIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: P.closeCircle
                    })
                }),
                (0, s.jsx)(_.Heading, {
                    variant: 'heading-lg/extrabold',
                    children: w.intl.string(w.t['xSR+a2'])
                })
            ]
        });
    },
    U = (e) => {
        var n, r, i;
        let { onSubscribeSuccess: a, markAsDismissed: o } = e,
            { analyticsLocations: l } = (0, v.ZP)(E.Z.CLIENT_THEMES_EDITOR),
            [u, c] = (0, d.Wu)([y.default, C.Z], () => [C.Z.gradientPreset, A.ZP.isPremium(y.default.getCurrentUser())]),
            p = (0, I.N)(),
            m = (0, A.Rt)({
                intervalType: null == p ? void 0 : null === (n = p.subscription_trial) || void 0 === n ? void 0 : n.interval,
                intervalCount: null == p ? void 0 : null === (r = p.subscription_trial) || void 0 === r ? void 0 : r.interval_count
            }),
            g = (e) => {
                if (!e) return;
                if ((null == a || a(), null != o && o(L.L.PRIMARY), null != u))
                    (0, O.Yk)({
                        isPersisted: !0,
                        themeName: f.Us[u.id],
                        analyticsLocations: l
                    }),
                        (0, h.ZI)({
                            backgroundGradientPresetId: u.id,
                            theme: u.theme
                        });
            };
        return (0, s.jsx)(T.Z, {
            size: _.Button.Sizes.MEDIUM,
            buttonText: c ? w.intl.string(w.t.IJI7ys) : (null == p ? void 0 : null === (i = p.subscription_trial) || void 0 === i ? void 0 : i.sku_id) === x.Si.TIER_2 ? m : w.intl.string(w.t.mr4K7O),
            subscriptionTier: x.Si.TIER_2,
            onSubscribeModalClose: g
        });
    },
    B = (e) => {
        let { markAsDismissed: n } = e,
            { isPreview: r, isCoachmark: i } = (0, d.cj)([C.Z], () => ({
                isPreview: C.Z.isPreview,
                isCoachmark: C.Z.isCoachmark
            })),
            [a, l] = o.useState(!1),
            u = (0, R.q)(),
            f = () => {
                null != n && n(L.L.DISMISS), u(D.rMx.CLIENT_THEME_PREVIEW_CLOSED), (0, N.Mo)(), !i && p.Z.open();
            },
            h = (0, c.EQ)({
                isPreview: r,
                isCoachmark: i,
                forceShowCloseButton: a
            })
                .with({ isCoachmark: !0 }, { forceShowCloseButton: !0 }, () => w.intl.string(w.t.cpT0Cg))
                .with({ isPreview: !0 }, () => w.intl.string(w.t['dqH+qq']))
                .otherwise(() => w.intl.string(w.t.Olc2Ky));
        return (0, s.jsxs)('div', {
            className: P.editorFooter,
            children: [
                r &&
                    (0, s.jsx)(U, {
                        onSubscribeSuccess: () => {
                            l(!0);
                        },
                        markAsDismissed: n
                    }),
                (0, s.jsx)(_.Button, {
                    className: P.footerButton,
                    onClick: f,
                    color: _.Button.Colors.PRIMARY,
                    size: _.Button.Sizes.MEDIUM,
                    children: h
                })
            ]
        });
    };
function G(e) {
    let { markAsDismissed: n } = e,
        { analyticsLocations: r } = (0, v.ZP)(E.Z.CLIENT_THEMES_EDITOR),
        {
            isPreview: i,
            isCoachmark: a,
            isEditorOpen: l,
            shouldEditorAnimate: c
        } = (0, d.cj)([C.Z, g.Z], () => ({
            isPreview: C.Z.isPreview,
            isCoachmark: C.Z.isCoachmark,
            isEditorOpen: C.Z.isEditorOpen,
            shouldEditorAnimate: C.Z.isCoachmark && !g.Z.useReducedMotion
        })),
        f = (0, R.q)();
    o.useEffect(() => f(D.rMx.CLIENT_THEME_PREVIEW_VIEWED), [f]),
        o.useEffect(() => {
            if (!!i)
                S.default.track(D.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: x.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: r
                });
        }, [i, r]);
    let h = (0, R.J)(),
        p = (0, m.Z)(null, i ? h : D.dG4);
    return (
        o.useEffect(() => {
            if (!!i && !l) return h;
        }, [i, l, h]),
        (0, s.jsx)(v.Gt, {
            value: r,
            children: (0, s.jsx)('div', {
                ref: p,
                'data-app-right-panel': !0,
                className: u()(P.themeEditor, c ? P.editorAnimate : null),
                children: (0, s.jsxs)(_.HeadingLevel, {
                    children: [
                        a ? (0, s.jsx)(M, {}) : (0, s.jsx)(k, { markAsDismissed: n }),
                        (0, s.jsx)(_.Scroller, {
                            className: P.editorBody,
                            children: (0, s.jsxs)(O.ZP, {
                                type: O.yH.EDITOR,
                                children: [!i && (0, s.jsx)(O.ZP.Basic, { className: P.selectionGroup }), (0, s.jsx)(O.ZP.Gradient, { className: P.selectionGroup })]
                            })
                        }),
                        (0, s.jsx)(B, { markAsDismissed: n })
                    ]
                })
            })
        })
    );
}
