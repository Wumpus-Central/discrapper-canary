n.d(t, { S: () => E }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(526162),
    r = n(793943),
    o = n(792656),
    d = n(419954),
    u = n(933297),
    c = n(780964),
    g = n(779733),
    m = n(646234),
    _ = n(652215),
    A = n(788868),
    h = n(985018);
function p() {
    (0, r.nf)(r.HP.APP_ICON), (0, g.default)();
}
function x() {
    return (0, i.jsx)(o.A, {
        subscriptionTier: A.pe.TIER_2,
        defaultTextOverride: h.intl.string(h.t.mr4K7D),
        premiumModalAnalyticsLocation: { object: _.ZSU.BUTTON_CTA, objectType: _.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
let E = (0, d.zZ)(c.X.APPEARANCE_IN_APP_ICON_CATEGORY, {
    useTitle: () => h.intl.string(h.t.RPh2ou),
    useSubtitle: () => h.intl.string(h.t.IgENJo),
    useHeaderDecoration: function () {
        let e = (0, l.bG)([a.A], () => a.A.isUpsellPreview);
        return s.useMemo(() => {
            let t = [];
            return (
                t.push({
                    id: "preview-icon-button",
                    type: u.UV.BUTTON,
                    text: h.intl.string(h.t["6acvnZ"]),
                    onClick: p,
                }),
                e && t.push({ id: "upsell-button", type: u.UV.STRONGLY_DISCOURAGED_CUSTOM, button: x }),
                { type: u.WX.BUTTON_GROUP, buttons: t }
            );
        }, [e]);
    },
    buildLayout: () => [m.C],
});
