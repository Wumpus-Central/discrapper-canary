"use strict";
n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var r = n(231723),
    s = n(192308),
    a = n(869146),
    o = n(709055),
    l = n(174459),
    u = n(652215);
function c(e, t) {
    let c = t ?? `${u.JJy.PREMIUM_GUILD_UPSELL_MODAL}`;
    null != e.targetBoostedGuildTier && (c += ` - Tier ${e.targetBoostedGuildTier}`),
        l.default.track(u.HAw.OPEN_MODAL, { type: c, location: e.analyticsSourceLocation });
    let { openInPopoutEnabled: d, ..._ } = e,
        h = a.A.getWindowOpen(u.MLl.CHANNEL_CALL_POPOUT) && null != d && d;
    h && (0, o.A)(u.MLl.CHANNEL_CALL_POPOUT);
    let f = h ? r.KX : r.SY;
    (0, s.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                n.e("23449"),
                n.e("95170"),
                n.e("39713"),
                n.e("36248"),
                n.e("45650"),
                n.e("5093"),
                n.e("52041"),
                n.e("60235"),
                n.e("99278"),
                n.e("85404"),
                n.e("9578"),
                n.e("45959"),
                n.e("39667"),
                n.e("50417"),
                n.e("23532"),
                n.e("52557"),
                n.e("84870"),
                n.e("88003"),
                n.e("71202"),
                n.e("45210"),
            ]).then(n.bind(n, 331617));
            return (t) => (0, i.jsx)(e, { ..._, ...t });
        },
        {
            onCloseCallback: () => {
                l.default.track(u.HAw.MODAL_DISMISSED, { type: c, location: e.analyticsSourceLocation });
            },
            contextKey: f,
        },
    );
}
