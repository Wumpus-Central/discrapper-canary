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
                n.e("86832"),
                n.e("76342"),
                n.e("60988"),
                n.e("69273"),
                n.e("72210"),
                n.e("3155"),
                n.e("45214"),
                n.e("35316"),
                n.e("99253"),
                n.e("58846"),
                n.e("17202"),
                n.e("6605"),
                n.e("52041"),
                n.e("68261"),
                n.e("60235"),
                n.e("21335"),
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
                n.e("83161"),
                n.e("88003"),
                n.e("97288"),
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
