n.d(t, {
    A: () => j,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(732955),
    c = n(421380),
    u = n(397927),
    d = n(82495),
    f = n(775602),
    p = n(793574),
    _ = n(688810),
    h = n(793943),
    m = n(234419),
    g = n(465794),
    E = n(450232),
    b = n(780964),
    y = n(840065),
    O = n(287809),
    A = n(954571),
    v = n(927578),
    S = n(535229),
    I = n(526162),
    T = n(848971),
    C = n(652215),
    N = n(49999),
    R = n(788868),
    w = n(985018),
    P = n(378399);
let D = () => {
        var e, t, n;
        let i = (0, o.bG)([O.default], () => v.Ay.isPremium(O.default.getCurrentUser())),
            a = (0, m.V)(),
            s = (null == a || null == (e = a.subscription_trial) ? void 0 : e.sku_id) === R.pe.TIER_2;
        return (0, r.jsx)(g.A, {
            size: c.$n.Sizes.MEDIUM,
            textOptions: {
                textOverride: i
                    ? w.intl.string(w.t.IJI7yk)
                    : s
                      ? (0, v.FY)({
                            intervalType: null == a || null == (t = a.subscription_trial) ? void 0 : t.interval,
                            intervalCount: null == a || null == (n = a.subscription_trial) ? void 0 : n.interval_count,
                        })
                      : w.intl.string(w.t.mr4K7D),
            },
            subscriptionTier: R.pe.TIER_2,
        });
    },
    x = (e) => {
        let { markAsDismissed: t } = e,
            n = () => {
                null == t || t(N.i.DISMISS), (0, h.Jp)(), (0, S.U)();
            };
        return (0, r.jsxs)("div", {
            className: P.nV,
            children: [
                (0, r.jsx)(u.DUT, {
                    className: P.VV,
                    onClick: () => n(),
                    children: (0, r.jsx)(u.aXh, {
                        size: "md",
                        color: "currentColor",
                        className: P.P0,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: P.DD,
                    children: [
                        (0, r.jsx)(u.Heading, {
                            variant: "heading-lg/extrabold",
                            children: w.intl.string(w.t["hb/wE0"]),
                        }),
                        (0, r.jsx)(E.A, {
                            className: P.PC,
                        }),
                    ],
                }),
            ],
        });
    },
    L = (e) => {
        let { isCoachmark: t, markAsDismissed: n } = e,
            i = (0, o.bG)([I.A], () => I.A.isUpsellPreview),
            a = () => {
                null == n || n(N.i.DISMISS),
                    (0, h.Jp)(),
                    (0, S.U)(),
                    t ||
                        (0, y.openUserSettings)(b.X.APPEARANCE_PANEL, {
                            section: C.nc_.APPEARANCE,
                        });
            };
        return (0, r.jsxs)("div", {
            className: P.N3,
            children: [
                i && (0, r.jsx)(D, {}),
                (0, r.jsx)(l.$nd, {
                    onClick: a,
                    variant: "secondary",
                    fullWidth: !0,
                    text: i || t ? w.intl.string(w.t["dqH+qr"]) : w.intl.string(w.t.Olc2K3),
                }),
            ],
        });
    };

function j(e) {
    let { isCoachmark: t, markAsDismissed: n } = e,
        { analyticsLocations: a } = (0, _.Ay)(p.A.APP_ICON_EDITOR),
        l = (0, o.bG)([O.default], () => O.default.getCurrentUser()),
        { isUpsellPreview: c, shouldEditorAnimate: m } = (0, o.cf)([I.A, f.A], () => ({
            isUpsellPreview: I.A.isUpsellPreview,
            shouldEditorAnimate: t && !f.A.useReducedMotion,
        })),
        g = h.fy.getState().activePanel === h.HP.APP_ICON;
    i.useEffect(() => {
        c &&
            A.default.track(C.HAw.PREMIUM_UPSELL_VIEWED, {
                type: R.e.APP_ICON_UPSELL,
                location_stack: a,
            });
    }, [c, a]);
    let E = (0, d.A)(null, c ? S.U : C.tEg);
    return (i.useEffect(() => {
        if (c && !g) return S.U;
    }, [c, g]),
    null == l)
        ? null
        : (0, r.jsx)(_.f5, {
              value: a,
              children: (0, r.jsx)("div", {
                  ref: E,
                  className: s()(P.EN, m ? P.hP : null),
                  "data-app-right-panel": !0,
                  children: (0, r.jsxs)(u.Fmo, {
                      children: [
                          (0, r.jsx)(x, {
                              markAsDismissed: n,
                          }),
                          (0, r.jsx)(u.HOs, {
                              className: P.sV,
                              children: (0, r.jsx)(T.A, {
                                  className: P.Gg,
                                  isEditor: !0,
                              }),
                          }),
                          (0, r.jsx)(L, {
                              markAsDismissed: n,
                              isCoachmark: t,
                          }),
                      ],
                  }),
              }),
          });
}
