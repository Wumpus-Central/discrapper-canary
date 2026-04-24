i.d(t, { A: () => d });
var n = i(627968);
i(64700);
var r = i(231723),
    s = i(192308),
    l = i(869146),
    a = i(709055),
    o = i(954571),
    c = i(652215);
function d(e, t) {
    let d = t ?? `${c.JJy.PREMIUM_GUILD_UPSELL_MODAL}`;
    null != e.targetBoostedGuildTier && (d += ` - Tier ${e.targetBoostedGuildTier}`),
        o.default.track(c.HAw.OPEN_MODAL, { type: d, location: e.analyticsSourceLocation });
    let { openInPopoutEnabled: _, ...u } = e,
        h = l.A.getWindowOpen(c.MLl.CHANNEL_CALL_POPOUT) && null != _ && _;
    h && (0, a.A)(c.MLl.CHANNEL_CALL_POPOUT);
    let p = h ? r.KX : r.SY;
    (0, s.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([i.e("55057"), i.e("34071")]).then(i.bind(i, 553998));
            return (t) => (0, n.jsx)(e, { ...u, ...t });
        },
        {
            onCloseCallback: () => {
                o.default.track(c.HAw.MODAL_DISMISSED, { type: d, location: e.analyticsSourceLocation });
            },
            contextKey: p,
        },
    );
}
