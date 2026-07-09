"use strict";
n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var r = n(231723),
    a = n(192308),
    s = n(869146),
    l = n(709055),
    o = n(174459),
    d = n(652215);
function c(e, t) {
    let c = t ?? `${d.JJy.PREMIUM_GUILD_UPSELL_MODAL}`;
    null != e.targetBoostedGuildTier && (c += ` - Tier ${e.targetBoostedGuildTier}`),
        o.default.track(d.HAw.OPEN_MODAL, { type: c, location: e.analyticsSourceLocation });
    let { openInPopoutEnabled: u, ..._ } = e,
        E = s.A.getWindowOpen(d.MLl.CHANNEL_CALL_POPOUT) && null != u && u;
    E && (0, l.A)(d.MLl.CHANNEL_CALL_POPOUT);
    let A = E ? r.KX : r.SY;
    (0, a.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                n.e("42676"),
                n.e("10198"),
                n.e("9212"),
                n.e("75193"),
                n.e("35442"),
                n.e("38739"),
                n.e("77086"),
                n.e("31880"),
                n.e("53385"),
                n.e("46494"),
                n.e("30810"),
                n.e("15553"),
                n.e("56329"),
                n.e("68261"),
                n.e("60235"),
                n.e("43716"),
                n.e("85927"),
                n.e("85404"),
                n.e("10120"),
                n.e("45959"),
                n.e("71202"),
                n.e("43430"),
                n.e("32191"),
                n.e("23532"),
                n.e("52557"),
                n.e("55654"),
                n.e("68574"),
                n.e("88003"),
                n.e("74907"),
                n.e("45210"),
            ]).then(n.bind(n, 331617));
            return (t) => (0, i.jsx)(e, { ..._, ...t });
        },
        {
            onCloseCallback: function () {
                o.default.track(d.HAw.MODAL_DISMISSED, { type: c, location: e.analyticsSourceLocation });
            },
            contextKey: A,
        },
    );
}
