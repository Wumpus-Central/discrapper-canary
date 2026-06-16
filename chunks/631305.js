e.d(n, { A: () => f });
var i = e(627968);
e(64700);
var s = e(231723),
    l = e(192308),
    r = e(869146),
    o = e(709055),
    c = e(174459),
    a = e(652215);
function f(t, n) {
    let f = n ?? `${a.JJy.PREMIUM_GUILD_UPSELL_MODAL}`;
    null != t.targetBoostedGuildTier && (f += ` - Tier ${t.targetBoostedGuildTier}`),
        c.default.track(a.HAw.OPEN_MODAL, { type: f, location: t.analyticsSourceLocation });
    let { openInPopoutEnabled: u, ...d } = t,
        _ = r.A.getWindowOpen(a.MLl.CHANNEL_CALL_POPOUT) && null != u && u;
    _ && (0, o.A)(a.MLl.CHANNEL_CALL_POPOUT);
    let E = _ ? s.KX : s.SY;
    (0, l.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([
                e.e("81804"),
                e.e("19393"),
                e.e("34784"),
                e.e("76631"),
                e.e("46334"),
                e.e("70294"),
                e.e("5093"),
                e.e("52041"),
                e.e("60235"),
                e.e("68261"),
                e.e("21335"),
                e.e("3932"),
                e.e("85404"),
                e.e("38251"),
                e.e("45959"),
                e.e("39667"),
                e.e("50417"),
                e.e("23532"),
                e.e("52557"),
                e.e("4450"),
                e.e("88003"),
                e.e("56689"),
                e.e("74907"),
                e.e("71202"),
                e.e("45210"),
            ]).then(e.bind(e, 331617));
            return (n) => (0, i.jsx)(t, { ...d, ...n });
        },
        {
            onCloseCallback: () => {
                c.default.track(a.HAw.MODAL_DISMISSED, { type: f, location: t.analyticsSourceLocation });
            },
            contextKey: E,
        },
    );
}
