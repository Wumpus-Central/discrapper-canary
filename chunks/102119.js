"use strict";
n.d(t, { A: () => k });
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
    E = n(465794),
    g = n(450232),
    A = n(780964),
    I = n(358776),
    T = n(840065),
    S = n(287809),
    y = n(954571),
    v = n(927578),
    N = n(535229),
    C = n(526162),
    b = n(848971),
    R = n(652215),
    O = n(49999),
    D = n(788868),
    L = n(985018),
    w = n(378399);
let x = () => {
        let e = (0, o.bG)([S.default], () => v.Ay.isPremium(S.default.getCurrentUser())),
            t = (0, m.V)(),
            n = t?.subscription_trial?.sku_id === D.pe.TIER_2;
        return (0, r.jsx)(E.A, {
            size: u.$n.Sizes.MEDIUM,
            textOptions: {
                textOverride: e
                    ? L.intl.string(L.t.IJI7yk)
                    : n
                      ? (0, v.FY)({
                            intervalType: t?.subscription_trial?.interval,
                            intervalCount: t?.subscription_trial?.interval_count,
                        })
                      : L.intl.string(L.t.mr4K7D),
            },
            subscriptionTier: D.pe.TIER_2,
        });
    },
    M = (e) => {
        let { markAsDismissed: t } = e,
            n = () => {
                t?.(O.i.DISMISS), (0, h.Jp)(), (0, N.U)();
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
                        (0, r.jsx)(g.A, { className: w.PC }),
                    ],
                }),
            ],
        });
    },
    P = (e) => {
        let { isCoachmark: t, markAsDismissed: n } = e,
            i = (0, o.bG)([C.A], () => C.A.isUpsellPreview),
            s = () => {
                if ((n?.(O.i.DISMISS), (0, h.Jp)(), (0, N.U)(), !t)) {
                    let e = (0, I.Ci)("AppIconEditor_handleBack");
                    (0, T.openUserSettings)(e ? A.X.DISPLAY_IN_APP_ICON_CATEGORY : A.X.APPEARANCE_PANEL, {
                        section: R.nc_.APPEARANCE,
                    });
                }
            };
        return (0, r.jsxs)("div", {
            className: w.N3,
            children: [
                i && (0, r.jsx)(x, {}),
                (0, r.jsx)(l.$nd, {
                    onClick: s,
                    variant: "secondary",
                    fullWidth: !0,
                    text: i || t ? L.intl.string(L.t["dqH+qr"]) : L.intl.string(L.t.Olc2K3),
                }),
            ],
        });
    };
function k(e) {
    let { isCoachmark: t, markAsDismissed: n } = e,
        { analyticsLocations: s } = (0, p.Ay)(f.A.APP_ICON_EDITOR),
        l = (0, o.bG)([S.default], () => S.default.getCurrentUser()),
        { isUpsellPreview: u, shouldEditorAnimate: m } = (0, o.cf)([C.A, _.A], () => ({
            isUpsellPreview: C.A.isUpsellPreview,
            shouldEditorAnimate: t && !_.A.useReducedMotion,
        })),
        E = h.fy.getState().activePanel === h.HP.APP_ICON;
    i.useEffect(() => {
        u && y.default.track(R.HAw.PREMIUM_UPSELL_VIEWED, { type: D.e.APP_ICON_UPSELL, location_stack: s });
    }, [u, s]);
    let g = (0, d.A)(null, u ? N.U : R.tEg);
    return (i.useEffect(() => {
        if (u && !E) return N.U;
    }, [u, E]),
    null == l)
        ? null
        : (0, r.jsx)(p.f5, {
              value: s,
              children: (0, r.jsx)("div", {
                  ref: g,
                  className: a()(w.EN, m ? w.hP : null),
                  "data-app-right-panel": !0,
                  children: (0, r.jsxs)(c.Fmo, {
                      children: [
                          (0, r.jsx)(M, { markAsDismissed: n }),
                          (0, r.jsx)(c.HOs, {
                              className: w.sV,
                              children: (0, r.jsx)(b.A, { className: w.Gg, isEditor: !0 }),
                          }),
                          (0, r.jsx)(P, { markAsDismissed: n, isCoachmark: t }),
                      ],
                  }),
              }),
          });
}
