n.d(t, { U6: () => T, kp: () => E, yG: () => S });
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
    _ = n(792656),
    m = n(954571),
    g = n(12901),
    A = n(652215),
    x = n(788868),
    h = n(985018),
    p = n(207645);
let T = () => {
    (0, u.nf)(u.HP.APP_ICON), (0, g.default)();
};
function E() {
    return (0, i.jsx)(_.A, {
        subscriptionTier: x.pe.TIER_2,
        defaultTextOverride: h.intl.string(h.t.mr4K7D),
        premiumModalAnalyticsLocation: { object: A.ZSU.BUTTON_CTA, objectType: A.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
let S = () => {
    let { analyticsLocations: e } = (0, o.Ay)(r.A.USER_SETTINGS),
        t = (0, s.bG)([d.A], () => d.A.isUpsellPreview);
    return (
        (0, a.Ay)(() => {
            t && m.default.track(A.HAw.PREMIUM_UPSELL_VIEWED, { type: x.e.APP_ICON_UPSELL, location_stack: e });
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
                            t && (0, i.jsx)(E, {}),
                        ],
                    }),
            }),
        })
    );
};
