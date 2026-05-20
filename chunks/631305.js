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
        f = a.A.getWindowOpen(u.MLl.CHANNEL_CALL_POPOUT) && null != d && d;
    f && (0, o.A)(u.MLl.CHANNEL_CALL_POPOUT);
    let h = f ? r.KX : r.SY;
    (0, s.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                n.e("8516"),
                n.e("12289"),
                n.e("45650"),
                n.e("67485"),
                n.e("6671"),
                n.e("52041"),
                n.e("60235"),
                n.e("45959"),
                n.e("39667"),
                n.e("50417"),
                n.e("71202"),
                n.e("45210"),
            ]).then(n.bind(n, 331617));
            return (t) => (0, i.jsx)(e, { ..._, ...t });
        },
        {
            onCloseCallback: () => {
                l.default.track(u.HAw.MODAL_DISMISSED, { type: c, location: e.analyticsSourceLocation });
            },
            contextKey: h,
        },
    );
}
