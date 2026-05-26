i.d(n, { A: () => f });
var s = i(627968);
i(64700);
var l = i(231723),
    e = i(192308),
    r = i(869146),
    o = i(709055),
    c = i(174459),
    a = i(652215);
function f(t, n) {
    let f = n ?? `${a.JJy.PREMIUM_GUILD_UPSELL_MODAL}`;
    null != t.targetBoostedGuildTier && (f += ` - Tier ${t.targetBoostedGuildTier}`),
        c.default.track(a.HAw.OPEN_MODAL, { type: f, location: t.analyticsSourceLocation });
    let { openInPopoutEnabled: u, ...d } = t,
        _ = r.A.getWindowOpen(a.MLl.CHANNEL_CALL_POPOUT) && null != u && u;
    _ && (0, o.A)(a.MLl.CHANNEL_CALL_POPOUT);
    let E = _ ? l.KX : l.SY;
    (0, e.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([
                i.e("92646"),
                i.e("35316"),
                i.e("45650"),
                i.e("26705"),
                i.e("5093"),
                i.e("52041"),
                i.e("60235"),
                i.e("45959"),
                i.e("39667"),
                i.e("50417"),
                i.e("71202"),
                i.e("45210"),
            ]).then(i.bind(i, 331617));
            return (n) => (0, s.jsx)(t, { ...d, ...n });
        },
        {
            onCloseCallback: () => {
                c.default.track(a.HAw.MODAL_DISMISSED, { type: f, location: t.analyticsSourceLocation });
            },
            contextKey: E,
        },
    );
}
