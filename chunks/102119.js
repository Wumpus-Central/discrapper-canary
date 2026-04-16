"use strict";
n.d(t, { A: () => G });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(732955),
    u = n(421380),
    c = n(397927),
    d = n(82495),
    _ = n(775602),
    f = n(793574),
    p = n(688810),
    h = n(793943),
    m = n(234419),
    E = n(725807),
    g = n(450232),
    A = n(780964),
    I = n(858897),
    T = n(287809),
    S = n(954571),
    y = n(927578),
    v = n(535229),
    N = n(526162),
    C = n(848971),
    R = n(635917),
    O = n(652215),
    b = n(49999),
    D = n(788868),
    L = n(985018),
    w = n(564194);
let M = () => {
        let e = (0, o.bG)([T.default], () => y.Ay.isPremium(T.default.getCurrentUser())),
            t = (0, m.V)(),
            n = t?.subscription_trial?.sku_id === D.pe.TIER_2;
        return (0, r.jsx)(E.A, {
            size: u.$n.Sizes.MEDIUM,
            textOptions: {
                textOverride: e
                    ? L.intl.string(L.t.IJI7yk)
                    : n
                      ? (0, y.FY)({
                            intervalType: t?.subscription_trial?.interval,
                            intervalCount: t?.subscription_trial?.interval_count,
                        })
                      : L.intl.string(L.t.mr4K7D),
            },
            subscriptionTier: D.pe.TIER_2,
        });
    },
    P = (e) => {
        let { markAsDismissed: t } = e,
            n = () => {
                t?.(b.i.DISMISS), (0, h.Jp)(), (0, v.U)();
            };
        return (0, r.jsxs)("div", {
            className: w.nV,
            children: [
                (0, r.jsx)(c.DUT, {
                    className: w.VV,
                    onClick: () => n(),
                    children: (0, r.jsx)(c.aXh, { size: "md", color: "currentColor", className: w.P0 }),
                }),
                (0, r.jsxs)("div", {
                    className: w.DD,
                    children: [
                        (0, r.jsx)(c.Heading, {
                            variant: "heading-lg/extrabold",
                            children: L.intl.string(L.t["hb/wE0"]),
                        }),
                        (0, r.jsx)(g.A, { color: c.LU0.colors.TEXT_STRONG, size: "sm", className: w.PC }),
                    ],
                }),
            ],
        });
    },
    x = (e) => {
        let { isCoachmark: t, markAsDismissed: n } = e,
            i = (0, o.bG)([N.A], () => N.A.isUpsellPreview),
            s = () => {
                n?.(b.i.DISMISS),
                    (0, h.Jp)(),
                    (0, v.U)(),
                    t || (0, I.openUserSettings)(A.X.DISPLAY_IN_APP_ICON_CATEGORY);
            };
        return (0, r.jsxs)("div", {
            className: w.N3,
            children: [
                i && (0, r.jsx)(M, {}),
                (0, r.jsx)(l.$nd, {
                    onClick: s,
                    variant: "secondary",
                    fullWidth: !0,
                    text: i || t ? L.intl.string(L.t["dqH+qr"]) : L.intl.string(L.t.Olc2K3),
                }),
            ],
        });
    },
    k = 16,
    U = 24;
function G(e) {
    let { isCoachmark: t, markAsDismissed: n, iconSize: s = R.N8.SIZE_60 } = e,
        { analyticsLocations: l } = (0, p.Ay)(f.A.APP_ICON_EDITOR),
        u = (0, o.bG)([T.default], () => T.default.getCurrentUser()),
        { isUpsellPreview: m, shouldEditorAnimate: E } = (0, o.cf)([N.A, _.A], () => ({
            isUpsellPreview: N.A.isUpsellPreview,
            shouldEditorAnimate: t && !_.A.useReducedMotion,
        })),
        g = h.fy.getState().activePanel === h.HP.APP_ICON;
    i.useEffect(() => {
        m && S.default.track(O.HAw.PREMIUM_UPSELL_VIEWED, { type: D.e.APP_ICON_UPSELL, location_stack: l });
    }, [m, l]);
    let A = (0, d.A)(null, m ? v.U : O.tEg);
    i.useEffect(() => {
        if (m && !g) return v.U;
    }, [m, g]);
    let I = i.useMemo(
        () => ({
            "--custom-in-app-icon-editor-content-width": `${3 * s + 2 * U}px`,
            "--custom-in-app-icon-editor-padding": `${k}px`,
        }),
        [s],
    );
    return null == u
        ? null
        : (0, r.jsx)(p.f5, {
              value: l,
              children: (0, r.jsx)("div", {
                  ref: A,
                  className: a()(w.EN, E ? w.hP : null),
                  "data-app-right-panel": !0,
                  style: I,
                  children: (0, r.jsxs)(c.Fmo, {
                      children: [
                          (0, r.jsx)(P, { markAsDismissed: n }),
                          (0, r.jsx)(c.HOs, {
                              className: w.sV,
                              children: (0, r.jsx)(C.A, { className: w.Gg, isEditor: !0, iconSize: s }),
                          }),
                          (0, r.jsx)(x, { markAsDismissed: n, isCoachmark: t }),
                      ],
                  }),
              }),
          });
}
