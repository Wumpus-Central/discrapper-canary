i.d(n, { A: () => f });
var r = i(477900);
i(582128);
var s = i(231723),
    l = i(192308),
    o = i(869146),
    c = i(709055),
    e = i(174459),
    a = i(652215);
function f(t, n) {
    let f = n ?? `${a.JJy.PREMIUM_GUILD_UPSELL_MODAL}`;
    null != t.targetBoostedGuildTier && (f += ` - Tier ${t.targetBoostedGuildTier}`),
        e.default.track(a.HAw.OPEN_MODAL, { type: f, location: t.analyticsSourceLocation });
    let { openInPopoutEnabled: u, ...d } = t,
        _ = o.A.getWindowOpen(a.MLl.CHANNEL_CALL_POPOUT) && null != u && u;
    _ && (0, c.A)(a.MLl.CHANNEL_CALL_POPOUT);
    let E = _ ? s.KX : s.SY;
    (0, l.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([i.e("711562"), i.e("265480"), i.e("171202"), i.e("845210")]).then(
                i.bind(i, 331617),
            );
            return (n) => (0, r.jsx)(t, { ...d, ...n });
        },
        {
            onCloseCallback: function () {
                e.default.track(a.HAw.MODAL_DISMISSED, { type: f, location: t.analyticsSourceLocation });
            },
            contextKey: E,
        },
    );
}
