n.d(t, { S: () => T }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(526162),
    a = n(793943),
    o = n(792656),
    d = n(419954),
    c = n(933297),
    u = n(780964),
    m = n(779733),
    g = n(646234),
    _ = n(652215),
    x = n(788868),
    h = n(985018);
function A() {
    (0, a.nf)(a.HP.APP_ICON), (0, m.default)();
}
function p() {
    return (0, i.jsx)(o.A, {
        subscriptionTier: x.pe.TIER_2,
        defaultTextOverride: h.intl.string(h.t.mr4K7D),
        premiumModalAnalyticsLocation: { object: _.ZSU.BUTTON_CTA, objectType: _.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
let T = (0, d.zZ)(u.X.APPEARANCE_IN_APP_ICON_CATEGORY, {
    useTitle: () => h.intl.string(h.t.RPh2ou),
    useSubtitle: () => h.intl.string(h.t.IgENJo),
    useHeaderDecoration: function () {
        let e = (0, l.bG)([r.A], () => r.A.isUpsellPreview);
        return s.useMemo(() => {
            let t = [];
            return (
                t.push({
                    id: "preview-icon-button",
                    type: c.UV.BUTTON,
                    text: h.intl.string(h.t["6acvnZ"]),
                    onClick: A,
                }),
                e && t.push({ id: "upsell-button", type: c.UV.STRONGLY_DISCOURAGED_CUSTOM, button: p }),
                { type: c.WX.BUTTON_GROUP, buttons: t }
            );
        }, [e]);
    },
    buildLayout: () => [g.C],
});
