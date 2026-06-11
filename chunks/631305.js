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
                n.e("68338"),
                n.e("19393"),
                n.e("56178"),
                n.e("66879"),
                n.e("46334"),
                n.e("596"),
                n.e("5093"),
                n.e("52041"),
                n.e("60235"),
                n.e("68261"),
                n.e("21335"),
                n.e("3932"),
                n.e("85404"),
                n.e("38251"),
                n.e("45959"),
                n.e("39667"),
                n.e("50417"),
                n.e("23532"),
                n.e("52557"),
                n.e("4450"),
                n.e("88003"),
                n.e("56689"),
                n.e("74907"),
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
