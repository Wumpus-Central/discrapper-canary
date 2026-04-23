"use strict";
n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(231723),
    s = n(192308),
    a = n(869146),
    o = n(709055),
    l = n(954571),
    u = n(652215);
function c(e, t) {
    let c = t ?? `${u.JJy.PREMIUM_GUILD_UPSELL_MODAL}`;
    null != e.targetBoostedGuildTier && (c += ` - Tier ${e.targetBoostedGuildTier}`),
        l.default.track(u.HAw.OPEN_MODAL, { type: c, location: e.analyticsSourceLocation });
    let { openInPopoutEnabled: d, ..._ } = e,
        f = a.A.getWindowOpen(u.MLl.CHANNEL_CALL_POPOUT) && null != d && d;
    f && (0, o.A)(u.MLl.CHANNEL_CALL_POPOUT);
    let p = f ? i.KX : i.SY;
    (0, s.openModalLazy)(
        async () => {
            let { default: e } = await n.e("45210").then(n.bind(n, 553998));
            return (t) => (0, r.jsx)(e, { ..._, ...t });
        },
        {
            onCloseCallback: () => {
                l.default.track(u.HAw.MODAL_DISMISSED, { type: c, location: e.analyticsSourceLocation });
            },
            contextKey: p,
        },
    );
}
