"use strict";
n.d(t, { A: () => B });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(821609),
    u = n(862482),
    d = n(939249),
    c = n(285796),
    _ = n(534514),
    f = n(827734),
    E = n(707554),
    h = n(573613),
    p = n(82495),
    m = n(775602),
    g = n(793574),
    A = n(688810),
    I = n(793943),
    T = n(234419),
    S = n(725807),
    y = n(450232),
    N = n(780964),
    O = n(858897),
    R = n(287809),
    v = n(954571),
    C = n(927578),
    b = n(535229),
    D = n(526162),
    L = n(848971),
    w = n(635917),
    M = n(652215),
    P = n(49999),
    U = n(788868),
    k = n(985018),
    x = n(564194);
let G = () => {
        let e = (0, o.bG)([R.default], () => C.Ay.isPremium(R.default.getCurrentUser())),
            t = (0, T.V)(),
            n = t?.subscription_trial?.sku_id === U.pe.TIER_2;
        return (0, r.jsx)(S.A, {
            size: u.$n.Sizes.MEDIUM,
            textOptions: {
                textOverride: e
                    ? k.intl.string(k.t.IJI7yk)
                    : n
                      ? (0, C.FY)({
                            intervalType: t?.subscription_trial?.interval,
                            intervalCount: t?.subscription_trial?.interval_count,
                        })
                      : k.intl.string(k.t.mr4K7D),
            },
            subscriptionTier: U.pe.TIER_2,
        });
    },
    V = (e) => {
        let { markAsDismissed: t } = e;
        return (0, r.jsxs)("div", {
            className: x.nV,
            children: [
                (0, r.jsx)(d.D, {
                    className: x.VV,
                    onClick: () => void (t?.(P.i.DISMISS), (0, I.Jp)(), (0, b.U)()),
                    children: (0, r.jsx)(c.a, { size: "md", color: "currentColor", className: x.P0 }),
                }),
                (0, r.jsxs)("div", {
                    className: x.DD,
                    children: [
                        (0, r.jsx)(_.D, { variant: "heading-lg/extrabold", children: k.intl.string(k.t["hb/wE0"]) }),
                        (0, r.jsx)(y.A, { color: f.A.colors.TEXT_STRONG, size: "sm", className: x.PC }),
                    ],
                }),
            ],
        });
    },
    F = (e) => {
        let { isCoachmark: t, markAsDismissed: n } = e,
            i = (0, o.bG)([D.A], () => D.A.isUpsellPreview);
        return (0, r.jsxs)("div", {
            className: x.N3,
            children: [
                i && (0, r.jsx)(G, {}),
                (0, r.jsx)(l.$, {
                    onClick: () => {
                        n?.(P.i.DISMISS),
                            (0, I.Jp)(),
                            (0, b.U)(),
                            t || (0, O.openUserSettings)(N.X.APPEARANCE_IN_APP_ICON_CATEGORY);
                    },
                    variant: "secondary",
                    fullWidth: !0,
                    text: i || t ? k.intl.string(k.t["dqH+qr"]) : k.intl.string(k.t.Olc2K3),
                }),
            ],
        });
    };
function B(e) {
    let { isCoachmark: t, markAsDismissed: n, iconSize: s = w.N8.SIZE_60 } = e,
        { analyticsLocations: l } = (0, A.Ay)(g.A.APP_ICON_EDITOR),
        u = (0, o.bG)([R.default], () => R.default.getCurrentUser()),
        { isUpsellPreview: d, shouldEditorAnimate: c } = (0, o.cf)([D.A, m.A], () => ({
            isUpsellPreview: D.A.isUpsellPreview,
            shouldEditorAnimate: t && !m.A.useReducedMotion,
        })),
        _ = I.fy.getState().activePanel === I.HP.APP_ICON;
    i.useEffect(() => {
        d && v.default.track(M.HAw.PREMIUM_UPSELL_VIEWED, { type: U.e.APP_ICON_UPSELL, location_stack: l });
    }, [d, l]);
    let f = (0, p.A)(null, d ? b.U : M.tEg);
    i.useEffect(() => {
        if (d && !_) return b.U;
    }, [d, _]);
    let T = i.useMemo(
        () => ({
            "--custom-in-app-icon-editor-content-width": `${3 * s + 48}px`,
            "--custom-in-app-icon-editor-padding": "16px",
        }),
        [s],
    );
    return null == u
        ? null
        : (0, r.jsx)(A.f5, {
              value: l,
              children: (0, r.jsx)("div", {
                  ref: f,
                  className: a()(x.EN, c ? x.hP : null),
                  "data-app-right-panel": !0,
                  style: T,
                  children: (0, r.jsxs)(E.F, {
                      children: [
                          (0, r.jsx)(V, { markAsDismissed: n }),
                          (0, r.jsx)(h.Ip, {
                              className: x.sV,
                              children: (0, r.jsx)(L.A, { className: x.Gg, isEditor: !0, iconSize: s }),
                          }),
                          (0, r.jsx)(F, { markAsDismissed: n, isCoachmark: t }),
                      ],
                  }),
              }),
          });
}
