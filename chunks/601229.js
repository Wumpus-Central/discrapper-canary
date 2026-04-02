n.d(t, { U6: () => T, kp: () => f, yG: () => S });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    a = n(964486),
    r = n(793574),
    o = n(688810),
    d = n(526162),
    c = n(848971),
    u = n(793943),
    m = n(792656),
    g = n(954571),
    _ = n(779733),
    x = n(652215),
    A = n(788868),
    h = n(985018),
    p = n(622326);
let T = () => {
    (0, u.nf)(u.HP.APP_ICON), (0, _.default)();
};
function f() {
    return (0, i.jsx)(m.A, {
        subscriptionTier: A.pe.TIER_2,
        defaultTextOverride: h.intl.string(h.t.mr4K7D),
        premiumModalAnalyticsLocation: { object: x.ZSU.BUTTON_CTA, objectType: x.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
let S = () => {
    let { analyticsLocations: e } = (0, o.Ay)(r.A.USER_SETTINGS),
        t = (0, s.bG)([d.A], () => d.A.isUpsellPreview);
    return (
        (0, a.Ay)(() => {
            t && g.default.track(x.HAw.PREMIUM_UPSELL_VIEWED, { type: A.e.APP_ICON_UPSELL, location_stack: e });
        }),
        (0, i.jsx)("div", {
            className: p.Gg,
            children: (0, i.jsx)(c.A, {
                disabled: t,
                renderCTAButtons: () =>
                    (0, i.jsxs)("div", {
                        className: p.gY,
                        children: [
                            (0, i.jsx)(l.Button, {
                                variant: t ? "secondary" : "primary",
                                text: h.intl.string(h.t["hb/wE0"]),
                                onClick: () => T(),
                            }),
                            t && (0, i.jsx)(f, {}),
                        ],
                    }),
            }),
        })
    );
};
