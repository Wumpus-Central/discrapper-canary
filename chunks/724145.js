n.d(t, { Z: () => Z }), n(388685), n(314940);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(278074),
    l = n(442837),
    c = n(524437),
    u = n(159691),
    d = n(481060),
    f = n(153867),
    _ = n(351773),
    p = n(607070),
    h = n(100527),
    m = n(906732),
    g = n(550385),
    E = n(799360),
    b = n(639119),
    y = n(638212),
    O = n(587446),
    v = n(313789),
    I = n(518596),
    T = n(594174),
    S = n(626135),
    A = n(74538),
    C = n(514361),
    N = n(55358),
    R = n(572397),
    P = n(708154),
    D = n(705262),
    w = n(981631),
    x = n(921944),
    L = n(474936),
    M = n(388032),
    j = n(204089);
let k = () =>
        (0, r.jsx)("div", {
            className: j.editorHeader,
            children: (0, r.jsxs)("div", {
                className: j.bannerUpsell,
                children: [
                    (0, r.jsx)(O.Z, { className: j.premiumIcon }),
                    (0, r.jsx)(d.Heading, {
                        variant: "heading-md/bold",
                        color: "always-white",
                        children: M.intl.string(M.t.POSLGY),
                    }),
                ],
            }),
        }),
    U = (e) => {
        let { markAsDismissed: t } = e,
            n = (0, R.q)(),
            i = () => {
                null != t && t(x.L.DISMISS), n(w.rMx.CLIENT_THEME_PREVIEW_CLOSED), (0, N.C)();
            };
        return (0, r.jsxs)("div", {
            className: j.editorHeader,
            children: [
                (0, r.jsx)(d.P3F, {
                    className: j.closeCircleButton,
                    onClick: i,
                    children: (0, r.jsx)(d.k$p, {
                        size: "md",
                        color: "currentColor",
                        className: j.closeCircle,
                    }),
                }),
                (0, r.jsx)(d.Heading, {
                    variant: "heading-lg/extrabold",
                    children: M.intl.string(M.t["xSR+a/"]),
                }),
            ],
        });
    },
    G = (e) => {
        var t, n, i;
        let { onSubscribeSuccess: a, markAsDismissed: o } = e,
            { analyticsLocations: s } = (0, m.ZP)(h.Z.CLIENT_THEMES_EDITOR),
            [u, d] = (0, l.Wu)([T.default, C.Z], () => [
                C.Z.gradientPreset,
                A.ZP.isPremium(T.default.getCurrentUser()),
            ]),
            _ = (0, b.N)(),
            p = (0, A.Rt)({
                intervalType: null == _ || null == (t = _.subscription_trial) ? void 0 : t.interval,
                intervalCount: null == _ || null == (n = _.subscription_trial) ? void 0 : n.interval_count,
            }),
            g = d
                ? M.intl.string(M.t.IJI7yk)
                : (null == _ || null == (i = _.subscription_trial) ? void 0 : i.sku_id) === L.Si.TIER_2
                  ? p
                  : M.intl.string(M.t.mr4K7D),
            E = (e) => {
                e &&
                    (null == a || a(),
                    null != o && o(x.L.PRIMARY),
                    null != u &&
                        ((0, D.Yk)({
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
                object: w.qAy.BUTTON_CTA,
                objectType: w.AnalyticsObjectTypes.BUY,
            },
            onSubscribeModalClose: E,
            fullWidth: !0,
        });
    },
    B = (e) => {
        let { markAsDismissed: t, isCoachmark: n } = e,
            { isPreview: a } = (0, l.cj)([C.Z], () => ({ isPreview: C.Z.isPreview })),
            [o, c] = i.useState(!1),
            d = (0, R.q)(),
            f = () => {
                null != t && t(x.L.DISMISS),
                    d(w.rMx.CLIENT_THEME_PREVIEW_CLOSED),
                    (0, N.C)(),
                    n || (0, I.openUserSettings)(v.n.APPEARANCE_PANEL, { section: w.oAB.APPEARANCE });
            },
            _ = (0, E.B)(
                {
                    no: M.t["3D5yo/"],
                    "sv-SE": M.t["3D5yo/"],
                    uk: M.t["3D5yo/"],
                    de: M.t["3D5yo/"],
                },
                M.t["dqH+qr"],
            ),
            p = (0, s.EQ)({
                isPreview: a,
                isCoachmark: n,
                forceShowCloseButton: o,
            })
                .with({ isCoachmark: !0 }, { forceShowCloseButton: !0 }, () => M.intl.string(M.t.cpT0Cq))
                .with({ isPreview: !0 }, () => _)
                .otherwise(() => M.intl.string(M.t.Olc2K3));
        return (0, r.jsxs)("div", {
            className: j.editorFooter,
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
                    text: p,
                }),
            ],
        });
    };
function Z(e) {
    let { markAsDismissed: t, showClientThemesCoachmark: n } = e,
        { analyticsLocations: a } = (0, m.ZP)(h.Z.CLIENT_THEMES_EDITOR),
        { isPreview: s, shouldEditorAnimate: c } = (0, l.cj)([C.Z, p.Z], () => ({
            isPreview: C.Z.isPreview,
            shouldEditorAnimate: n && !p.Z.useReducedMotion,
        })),
        u = (0, g.oq)().activePanel === g.wh.CLIENT_THEMES,
        f = (0, R.q)();
    i.useEffect(() => f(w.rMx.CLIENT_THEME_PREVIEW_VIEWED), [f]),
        i.useEffect(() => {
            s &&
                S.default.track(w.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: L.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: a,
                });
        }, [s, a]);
    let E = (0, R.J)(),
        b = (0, _.Z)(null, s ? E : w.dG4);
    return (
        i.useEffect(() => {
            if (s && !u) return E;
        }, [s, u, E]),
        (0, r.jsx)(m.Gt, {
            value: a,
            children: (0, r.jsx)("div", {
                ref: b,
                "data-app-right-panel": !0,
                className: o()(j.themeEditor, c ? j.editorAnimate : null),
                children: (0, r.jsxs)(d.y5t, {
                    children: [
                        n ? (0, r.jsx)(k, {}) : (0, r.jsx)(U, { markAsDismissed: t }),
                        (0, r.jsx)(P.Z, {}),
                        (0, r.jsx)(d.Ttm, {
                            className: j.editorBody,
                            children: (0, r.jsxs)(D.ZP, {
                                type: D.yH.EDITOR,
                                children: [
                                    !s && (0, r.jsx)(D.ZP.Basic, { className: j.selectionGroup }),
                                    (0, r.jsx)(D.ZP.Gradient, {
                                        className: j.selectionGroup,
                                        isCoachmark: n,
                                    }),
                                ],
                            }),
                        }),
                        (0, r.jsx)(B, {
                            markAsDismissed: t,
                            isCoachmark: n,
                        }),
                    ],
                }),
            }),
        })
    );
}
