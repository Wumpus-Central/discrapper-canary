i.d(t, { A: () => d });
var r = i(627968);
i(64700);
var n = i(231723),
    s = i(192308),
    o = i(869146),
    l = i(709055),
    a = i(954571),
    c = i(652215);
function d(e, t) {
    let d = t ?? `${c.JJy.PREMIUM_GUILD_UPSELL_MODAL}`;
    null != e.targetBoostedGuildTier && (d += ` - Tier ${e.targetBoostedGuildTier}`),
        a.default.track(c.HAw.OPEN_MODAL, { type: d, location: e.analyticsSourceLocation });
    let { openInPopoutEnabled: _, ...u } = e,
        h = o.A.getWindowOpen(c.MLl.CHANNEL_CALL_POPOUT) && null != _ && _;
    h && (0, l.A)(c.MLl.CHANNEL_CALL_POPOUT);
    let p = h ? n.KX : n.SY;
    (0, s.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([i.e("55057"), i.e("47612")]).then(i.bind(i, 553998));
            return (t) => (0, r.jsx)(e, { ...u, ...t });
        },
        {
            onCloseCallback: () => {
                a.default.track(c.HAw.MODAL_DISMISSED, { type: d, location: e.analyticsSourceLocation });
            },
            contextKey: p,
        },
    );
}
