n.d(t, { Z: () => B }), n(388685), n(314940);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(278074),
    l = n(442837),
    c = n(524437),
    u = n(159691),
    d = n(481060),
    f = n(153867),
    p = n(351773),
    _ = n(607070),
    m = n(100527),
    h = n(906732),
    g = n(550385),
    E = n(799360),
    b = n(639119),
    y = n(638212),
    O = n(587446),
    v = n(313789),
    S = n(518596),
    I = n(594174),
    T = n(626135),
    A = n(74538),
    C = n(514361),
    N = n(55358),
    P = n(572397),
    R = n(708154),
    w = n(705262),
    D = n(981631),
    x = n(921944),
    L = n(474936),
    j = n(388032),
    M = n(204089);
let k = () =>
        (0, r.jsx)("div", {
            className: M.editorHeader,
            children: (0, r.jsxs)("div", {
                className: M.bannerUpsell,
                children: [
                    (0, r.jsx)(O.Z, { className: M.premiumIcon }),
                    (0, r.jsx)(d.Heading, {
                        variant: "heading-md/bold",
                        color: "always-white",
                        children: j.intl.string(j.t.POSLGY),
                    }),
                ],
            }),
        }),
    U = (e) => {
        let { markAsDismissed: t } = e,
            n = (0, P.q)(),
            i = () => {
                null != t && t(x.L.DISMISS), n(D.rMx.CLIENT_THEME_PREVIEW_CLOSED), (0, N.C)();
            };
        return (0, r.jsxs)("div", {
            className: M.editorHeader,
            children: [
                (0, r.jsx)(d.P3F, {
                    className: M.closeCircleButton,
                    onClick: i,
                    children: (0, r.jsx)(d.k$p, {
                        size: "md",
                        color: "currentColor",
                        className: M.closeCircle,
                    }),
                }),
                (0, r.jsx)(d.Heading, {
                    variant: "heading-lg/extrabold",
                    children: j.intl.string(j.t["xSR+a/"]),
                }),
            ],
        });
    },
    G = (e) => {
        var t, n, i;
        let { onSubscribeSuccess: a, markAsDismissed: o } = e,
            { analyticsLocations: s } = (0, h.ZP)(m.Z.CLIENT_THEMES_EDITOR),
            [u, d] = (0, l.Wu)([I.default, C.Z], () => [
                C.Z.gradientPreset,
                A.ZP.isPremium(I.default.getCurrentUser()),
            ]),
            p = (0, b.N)(),
            _ = (0, A.Rt)({
                intervalType: null == p || null == (t = p.subscription_trial) ? void 0 : t.interval,
                intervalCount: null == p || null == (n = p.subscription_trial) ? void 0 : n.interval_count,
            }),
            g = d
                ? j.intl.string(j.t.IJI7yk)
                : (null == p || null == (i = p.subscription_trial) ? void 0 : i.sku_id) === L.Si.TIER_2
                  ? _
                  : j.intl.string(j.t.mr4K7D),
            E = (e) => {
                e &&
                    (null == a || a(),
                    null != o && o(x.L.PRIMARY),
                    null != u &&
                        ((0, w.Yk)({
                            isPersisted: !0,
                            themeName: c.Us[u.id],
                            analyticsLocations: s,
                        }),
                        (0, f.ZI)({
                            backgroundGradientPresetId: u.id,
                            theme: u.theme,
                        })));
            };
        return (0, r.jsx)(y.Z, {
            subscriptionTier: L.Si.TIER_2,
            defaultTextOverride: g,
            premiumModalAnalyticsLocation: {
                object: D.qAy.BUTTON_CTA,
                objectType: D.AnalyticsObjectTypes.BUY,
            },
            onSubscribeModalClose: E,
            fullWidth: !0,
        });
    },
    Z = (e) => {
        let { markAsDismissed: t, isCoachmark: n } = e,
            { isPreview: a } = (0, l.cj)([C.Z], () => ({ isPreview: C.Z.isPreview })),
            [o, c] = i.useState(!1),
            d = (0, P.q)(),
            f = () => {
                null != t && t(x.L.DISMISS),
                    d(D.rMx.CLIENT_THEME_PREVIEW_CLOSED),
                    (0, N.C)(),
                    n || (0, S.openUserSettings)(v.n.APPEARANCE_PANEL, { section: D.oAB.APPEARANCE });
            },
            p = (0, E.B)(
                {
                    no: j.t["3D5yo/"],
                    "sv-SE": j.t["3D5yo/"],
                    uk: j.t["3D5yo/"],
                    de: j.t["3D5yo/"],
                },
                j.t["dqH+qr"],
            ),
            _ = (0, s.EQ)({
                isPreview: a,
                isCoachmark: n,
                forceShowCloseButton: o,
            })
                .with({ isCoachmark: !0 }, { forceShowCloseButton: !0 }, () => j.intl.string(j.t.cpT0Cq))
                .with({ isPreview: !0 }, () => p)
                .otherwise(() => j.intl.string(j.t.Olc2K3));
        return (0, r.jsxs)("div", {
            className: M.editorFooter,
            children: [
                a &&
                    (0, r.jsx)(G, {
                        onSubscribeSuccess: () => {
                            c(!0);
                        },
                        markAsDismissed: t,
                    }),
                (0, r.jsx)(u.zxk, {
                    fullWidth: !0,
                    onClick: f,
                    variant: "secondary",
                    text: _,
                }),
            ],
        });
    };
function B(e) {
    let { markAsDismissed: t, showClientThemesCoachmark: n } = e,
        { analyticsLocations: a } = (0, h.ZP)(m.Z.CLIENT_THEMES_EDITOR),
        { isPreview: s, shouldEditorAnimate: c } = (0, l.cj)([C.Z, _.Z], () => ({
            isPreview: C.Z.isPreview,
            shouldEditorAnimate: n && !_.Z.useReducedMotion,
        })),
        u = (0, g.oq)().activePanel === g.wh.CLIENT_THEMES,
        f = (0, P.q)();
    i.useEffect(() => f(D.rMx.CLIENT_THEME_PREVIEW_VIEWED), [f]),
        i.useEffect(() => {
            s &&
                T.default.track(D.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: L.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: a,
                });
        }, [s, a]);
    let E = (0, P.J)(),
        b = (0, p.Z)(null, s ? E : D.dG4);
    return (
        i.useEffect(() => {
            if (s && !u) return E;
        }, [s, u, E]),
        (0, r.jsx)(h.Gt, {
            value: a,
            children: (0, r.jsx)("div", {
                ref: b,
                "data-app-right-panel": !0,
                className: o()(M.themeEditor, c ? M.editorAnimate : null),
                children: (0, r.jsxs)(d.y5t, {
                    children: [
                        n ? (0, r.jsx)(k, {}) : (0, r.jsx)(U, { markAsDismissed: t }),
                        (0, r.jsx)(R.Z, {}),
                        (0, r.jsx)(d.Ttm, {
                            className: M.editorBody,
                            children: (0, r.jsxs)(w.ZP, {
                                type: w.yH.EDITOR,
                                children: [
                                    !s && (0, r.jsx)(w.ZP.Basic, { className: M.selectionGroup }),
                                    (0, r.jsx)(w.ZP.Gradient, {
                                        className: M.selectionGroup,
                                        isCoachmark: n,
                                    }),
                                ],
                            }),
                        }),
                        (0, r.jsx)(Z, {
                            markAsDismissed: t,
                            isCoachmark: n,
                        }),
                    ],
                }),
            }),
        })
    );
}
