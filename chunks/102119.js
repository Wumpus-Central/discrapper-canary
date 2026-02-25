"use strict";
n.d(t, { A: () => F });
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
    R = n(635917),
    O = n(652215),
    D = n(49999),
    L = n(788868),
    w = n(985018),
    x = n(870217);
let M = () => {
        let e = (0, o.bG)([S.default], () => v.Ay.isPremium(S.default.getCurrentUser())),
            t = (0, m.V)(),
            n = t?.subscription_trial?.sku_id === L.pe.TIER_2;
        return (0, r.jsx)(E.A, {
            size: u.$n.Sizes.MEDIUM,
            textOptions: {
                textOverride: e
                    ? w.intl.string(w.t.IJI7yk)
                    : n
                      ? (0, v.FY)({
                            intervalType: t?.subscription_trial?.interval,
                            intervalCount: t?.subscription_trial?.interval_count,
                        })
                      : w.intl.string(w.t.mr4K7D),
            },
            subscriptionTier: L.pe.TIER_2,
        });
    },
    P = (e) => {
        let { markAsDismissed: t } = e,
            n = () => {
                t?.(D.i.DISMISS), (0, h.Jp)(), (0, N.U)();
            };
        return (0, r.jsxs)("div", {
            className: x.nV,
            children: [
                (0, r.jsx)(c.DUT, {
                    className: x.VV,
                    onClick: () => n(),
                    children: (0, r.jsx)(c.aXh, { size: "md", color: "currentColor", className: x.P0 }),
                }),
                (0, r.jsxs)("div", {
                    className: x.DD,
                    children: [
                        (0, r.jsx)(c.Heading, {
                            variant: "heading-lg/extrabold",
                            children: w.intl.string(w.t["hb/wE0"]),
                        }),
                        (0, r.jsx)(g.A, { className: x.PC }),
                    ],
                }),
            ],
        });
    },
    k = (e) => {
        let { isCoachmark: t, markAsDismissed: n } = e,
            i = (0, o.bG)([C.A], () => C.A.isUpsellPreview),
            s = () => {
                if ((n?.(D.i.DISMISS), (0, h.Jp)(), (0, N.U)(), !t)) {
                    let e = (0, I.Ci)("AppIconEditor_handleBack");
                    (0, T.openUserSettings)(e ? A.X.DISPLAY_IN_APP_ICON_CATEGORY : A.X.APPEARANCE_PANEL, {
                        section: O.nc_.APPEARANCE,
                    });
                }
            };
        return (0, r.jsxs)("div", {
            className: x.N3,
            children: [
                i && (0, r.jsx)(M, {}),
                (0, r.jsx)(l.$nd, {
                    onClick: s,
                    variant: "secondary",
                    fullWidth: !0,
                    text: i || t ? w.intl.string(w.t["dqH+qr"]) : w.intl.string(w.t.Olc2K3),
                }),
            ],
        });
    },
    U = 16,
    G = 24;
function F(e) {
    let { isCoachmark: t, markAsDismissed: n, iconSize: s = R.N8.SIZE_60 } = e,
        { analyticsLocations: l } = (0, p.Ay)(f.A.APP_ICON_EDITOR),
        u = (0, o.bG)([S.default], () => S.default.getCurrentUser()),
        { isUpsellPreview: m, shouldEditorAnimate: E } = (0, o.cf)([C.A, _.A], () => ({
            isUpsellPreview: C.A.isUpsellPreview,
            shouldEditorAnimate: t && !_.A.useReducedMotion,
        })),
        g = h.fy.getState().activePanel === h.HP.APP_ICON;
    i.useEffect(() => {
        m && y.default.track(O.HAw.PREMIUM_UPSELL_VIEWED, { type: L.e.APP_ICON_UPSELL, location_stack: l });
    }, [m, l]);
    let A = (0, d.A)(null, m ? N.U : O.tEg);
    i.useEffect(() => {
        if (m && !g) return N.U;
    }, [m, g]);
    let I = i.useMemo(
        () => ({
            "--custom-in-app-icon-editor-content-width": `${3 * s + 2 * G}px`,
            "--custom-in-app-icon-editor-padding": `${U}px`,
        }),
        [s],
    );
    return null == u
        ? null
        : (0, r.jsx)(p.f5, {
              value: l,
              children: (0, r.jsx)("div", {
                  ref: A,
                  className: a()(x.EN, E ? x.hP : null),
                  "data-app-right-panel": !0,
                  style: I,
                  children: (0, r.jsxs)(c.Fmo, {
                      children: [
                          (0, r.jsx)(P, { markAsDismissed: n }),
                          (0, r.jsx)(c.HOs, {
                              className: x.sV,
                              children: (0, r.jsx)(b.A, { className: x.Gg, isEditor: !0, iconSize: s }),
                          }),
                          (0, r.jsx)(k, { markAsDismissed: n, isCoachmark: t }),
                      ],
                  }),
              }),
          });
}
