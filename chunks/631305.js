"use strict";
n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(869146),
    s = n(709055),
    o = n(954571),
    l = n(652215);
function u(e, t) {
    let u = t ?? `${l.JJy.PREMIUM_GUILD_UPSELL_MODAL}`;
    null != e.targetBoostedGuildTier && (u += ` - Tier ${e.targetBoostedGuildTier}`);
    let c = () => {
        o.default.track(l.HAw.MODAL_DISMISSED, { type: u, location: e.analyticsSourceLocation });
    };
    o.default.track(l.HAw.OPEN_MODAL, { type: u, location: e.analyticsSourceLocation });
    let { openInPopoutEnabled: d, ..._ } = e,
        f = a.A.getWindowOpen(l.MLl.CHANNEL_CALL_POPOUT) && null != d && d;
    f && (0, s.A)(l.MLl.CHANNEL_CALL_POPOUT);
    let p = f ? i.KX8 : i.SYi;
    (0, i.mMO)(
        async () => {
            let { default: e } = await n.e("45210").then(n.bind(n, 553998));
            return (t) => (0, r.jsx)(e, { ..._, ...t });
        },
        { onCloseCallback: c, contextKey: p },
    );
}
