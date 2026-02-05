"use strict";
n.d(t, { A: () => M });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
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
    g = n(465794),
    E = n(450232),
    A = n(780964),
    I = n(840065),
    T = n(287809),
    y = n(954571),
    S = n(927578),
    v = n(535229),
    C = n(526162),
    b = n(848971),
    N = n(652215),
    R = n(49999),
    O = n(788868),
    D = n(985018),
    L = n(378399);
let w = () => {
        let e = (0, o.bG)([T.default], () => S.Ay.isPremium(T.default.getCurrentUser())),
            t = (0, m.V)(),
            n = t?.subscription_trial?.sku_id === O.pe.TIER_2;
        return (0, r.jsx)(g.A, {
            size: u.$n.Sizes.MEDIUM,
            textOptions: {
                textOverride: e
                    ? D.intl.string(D.t.IJI7yk)
                    : n
                      ? (0, S.FY)({
                            intervalType: t?.subscription_trial?.interval,
                            intervalCount: t?.subscription_trial?.interval_count,
                        })
                      : D.intl.string(D.t.mr4K7D),
            },
            subscriptionTier: O.pe.TIER_2,
        });
    },
    x = (e) => {
        let { markAsDismissed: t } = e,
            n = () => {
                t?.(R.i.DISMISS), (0, h.Jp)(), (0, v.U)();
            };
        return (0, r.jsxs)("div", {
            className: L.nV,
            children: [
                (0, r.jsx)(c.DUT, {
                    className: L.VV,
                    onClick: () => n(),
                    children: (0, r.jsx)(c.aXh, { size: "md", color: "currentColor", className: L.P0 }),
                }),
                (0, r.jsxs)("div", {
                    className: L.DD,
                    children: [
                        (0, r.jsx)(c.Heading, {
                            variant: "heading-lg/extrabold",
                            children: D.intl.string(D.t["hb/wE0"]),
                        }),
                        (0, r.jsx)(E.A, { className: L.PC }),
                    ],
                }),
            ],
        });
    },
    P = (e) => {
        let { isCoachmark: t, markAsDismissed: n } = e,
            i = (0, o.bG)([C.A], () => C.A.isUpsellPreview),
            a = () => {
                n?.(R.i.DISMISS),
                    (0, h.Jp)(),
                    (0, v.U)(),
                    t || (0, I.openUserSettings)(A.X.APPEARANCE_PANEL, { section: N.nc_.APPEARANCE });
            };
        return (0, r.jsxs)("div", {
            className: L.N3,
            children: [
                i && (0, r.jsx)(w, {}),
                (0, r.jsx)(l.$nd, {
                    onClick: a,
                    variant: "secondary",
                    fullWidth: !0,
                    text: i || t ? D.intl.string(D.t["dqH+qr"]) : D.intl.string(D.t.Olc2K3),
                }),
            ],
        });
    };
function M(e) {
    let { isCoachmark: t, markAsDismissed: n } = e,
        { analyticsLocations: a } = (0, p.Ay)(f.A.APP_ICON_EDITOR),
        l = (0, o.bG)([T.default], () => T.default.getCurrentUser()),
        { isUpsellPreview: u, shouldEditorAnimate: m } = (0, o.cf)([C.A, _.A], () => ({
            isUpsellPreview: C.A.isUpsellPreview,
            shouldEditorAnimate: t && !_.A.useReducedMotion,
        })),
        g = h.fy.getState().activePanel === h.HP.APP_ICON;
    i.useEffect(() => {
        u && y.default.track(N.HAw.PREMIUM_UPSELL_VIEWED, { type: O.e.APP_ICON_UPSELL, location_stack: a });
    }, [u, a]);
    let E = (0, d.A)(null, u ? v.U : N.tEg);
    return (i.useEffect(() => {
        if (u && !g) return v.U;
    }, [u, g]),
    null == l)
        ? null
        : (0, r.jsx)(p.f5, {
              value: a,
              children: (0, r.jsx)("div", {
                  ref: E,
                  className: s()(L.EN, m ? L.hP : null),
                  "data-app-right-panel": !0,
                  children: (0, r.jsxs)(c.Fmo, {
                      children: [
                          (0, r.jsx)(x, { markAsDismissed: n }),
                          (0, r.jsx)(c.HOs, {
                              className: L.sV,
                              children: (0, r.jsx)(b.A, { className: L.Gg, isEditor: !0 }),
                          }),
                          (0, r.jsx)(P, { markAsDismissed: n, isCoachmark: t }),
                      ],
                  }),
              }),
          });
}
