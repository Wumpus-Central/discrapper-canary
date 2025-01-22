r.d(n, {
    Z: function () {
        return G;
    }
});
var i = r(47120);
var a = r(627341);
var o = r(200651),
    s = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(278074),
    d = r(442837),
    f = r(524437),
    p = r(481060),
    h = r(153867),
    _ = r(230711),
    m = r(351773),
    g = r(607070),
    E = r(100527),
    v = r(906732),
    y = r(639119),
    b = r(197115),
    I = r(587446),
    T = r(594174),
    S = r(626135),
    A = r(74538),
    C = r(238302),
    N = r(514361),
    R = r(572397),
    O = r(705262),
    D = r(981631),
    x = r(921944),
    L = r(474936),
    w = r(388032),
    P = r(245392);
let M = () =>
        (0, o.jsx)('div', {
            className: P.editorHeader,
            children: (0, o.jsxs)('div', {
                className: P.bannerUpsell,
                children: [
                    (0, o.jsx)(I.Z, { className: P.premiumIcon }),
                    (0, o.jsx)(p.Heading, {
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
                null != n && n(x.L.DISMISS), r(D.rMx.CLIENT_THEME_PREVIEW_CLOSED), (0, C.Mo)();
            };
        return (0, o.jsxs)('div', {
            className: P.editorHeader,
            children: [
                (0, o.jsx)(p.Clickable, {
                    className: P.closeCircleButton,
                    onClick: i,
                    children: (0, o.jsx)(p.CircleXIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: P.closeCircle
                    })
                }),
                (0, o.jsx)(p.Heading, {
                    variant: 'heading-lg/extrabold',
                    children: w.intl.string(w.t['xSR+a2'])
                })
            ]
        });
    },
    U = (e) => {
        var n, r, i;
        let { onSubscribeSuccess: a, markAsDismissed: s } = e,
            { analyticsLocations: l } = (0, v.ZP)(E.Z.CLIENT_THEMES_EDITOR),
            [u, c] = (0, d.Wu)([T.default, N.Z], () => [N.Z.gradientPreset, A.ZP.isPremium(T.default.getCurrentUser())]),
            _ = (0, y.N)(),
            m = (0, A.Rt)({
                intervalType: null == _ ? void 0 : null === (n = _.subscription_trial) || void 0 === n ? void 0 : n.interval,
                intervalCount: null == _ ? void 0 : null === (r = _.subscription_trial) || void 0 === r ? void 0 : r.interval_count
            }),
            g = (e) => {
                if (!e) return;
                if ((null == a || a(), null != s && s(x.L.PRIMARY), null != u))
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
        return (0, o.jsx)(b.Z, {
            size: p.Button.Sizes.MEDIUM,
            buttonText: c ? w.intl.string(w.t.IJI7ys) : (null == _ ? void 0 : null === (i = _.subscription_trial) || void 0 === i ? void 0 : i.sku_id) === L.Si.TIER_2 ? m : w.intl.string(w.t.mr4K7O),
            subscriptionTier: L.Si.TIER_2,
            onSubscribeModalClose: g
        });
    },
    B = (e) => {
        let { markAsDismissed: n } = e,
            { isPreview: r, isCoachmark: i } = (0, d.cj)([N.Z], () => ({
                isPreview: N.Z.isPreview,
                isCoachmark: N.Z.isCoachmark
            })),
            [a, l] = s.useState(!1),
            u = (0, R.q)(),
            f = () => {
                null != n && n(x.L.DISMISS), u(D.rMx.CLIENT_THEME_PREVIEW_CLOSED), (0, C.Mo)(), !i && _.Z.open();
            },
            h = (0, c.EQ)({
                isPreview: r,
                isCoachmark: i,
                forceShowCloseButton: a
            })
                .with({ isCoachmark: !0 }, { forceShowCloseButton: !0 }, () => w.intl.string(w.t.cpT0Cg))
                .with({ isPreview: !0 }, () => w.intl.string(w.t['dqH+qq']))
                .otherwise(() => w.intl.string(w.t.Olc2Ky));
        return (0, o.jsxs)('div', {
            className: P.editorFooter,
            children: [
                r &&
                    (0, o.jsx)(U, {
                        onSubscribeSuccess: () => {
                            l(!0);
                        },
                        markAsDismissed: n
                    }),
                (0, o.jsx)(p.Button, {
                    className: P.footerButton,
                    onClick: f,
                    color: p.Button.Colors.PRIMARY,
                    size: p.Button.Sizes.MEDIUM,
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
        } = (0, d.cj)([N.Z, g.Z], () => ({
            isPreview: N.Z.isPreview,
            isCoachmark: N.Z.isCoachmark,
            isEditorOpen: N.Z.isEditorOpen,
            shouldEditorAnimate: N.Z.isCoachmark && !g.Z.useReducedMotion
        })),
        f = (0, R.q)();
    s.useEffect(() => f(D.rMx.CLIENT_THEME_PREVIEW_VIEWED), [f]),
        s.useEffect(() => {
            if (!!i)
                S.default.track(D.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: L.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: r
                });
        }, [i, r]);
    let h = (0, R.J)(),
        _ = (0, m.Z)(null, i ? h : D.dG4);
    return (
        s.useEffect(() => {
            if (!!i && !l) return h;
        }, [i, l, h]),
        (0, o.jsx)(v.Gt, {
            value: r,
            children: (0, o.jsx)('div', {
                ref: _,
                'data-app-right-panel': !0,
                className: u()(P.themeEditor, c ? P.editorAnimate : null),
                children: (0, o.jsxs)(p.HeadingLevel, {
                    children: [
                        a ? (0, o.jsx)(M, {}) : (0, o.jsx)(k, { markAsDismissed: n }),
                        (0, o.jsx)(p.Scroller, {
                            className: P.editorBody,
                            children: (0, o.jsxs)(O.ZP, {
                                type: O.yH.EDITOR,
                                children: [!i && (0, o.jsx)(O.ZP.Basic, { className: P.selectionGroup }), (0, o.jsx)(O.ZP.Gradient, { className: P.selectionGroup })]
                            })
                        }),
                        (0, o.jsx)(B, { markAsDismissed: n })
                    ]
                })
            })
        })
    );
}
