s.d(n, { A: () => f });
var i = s(627968);
s(64700);
var o = s(231723),
    r = s(192308),
    l = s(869146),
    e = s(709055),
    c = s(954571),
    a = s(652215);
function f(t, n) {
    let f = n ?? `${a.JJy.PREMIUM_GUILD_UPSELL_MODAL}`;
    null != t.targetBoostedGuildTier && (f += ` - Tier ${t.targetBoostedGuildTier}`),
        c.default.track(a.HAw.OPEN_MODAL, { type: f, location: t.analyticsSourceLocation });
    let { openInPopoutEnabled: u, ..._ } = t,
        E = l.A.getWindowOpen(a.MLl.CHANNEL_CALL_POPOUT) && null != u && u;
    E && (0, e.A)(a.MLl.CHANNEL_CALL_POPOUT);
    let d = E ? o.KX : o.SY;
    (0, r.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([
                s.e("77598"),
                s.e("25385"),
                s.e("45650"),
                s.e("80813"),
                s.e("40305"),
                s.e("52041"),
                s.e("60235"),
                s.e("45959"),
                s.e("55057"),
                s.e("71202"),
                s.e("45210"),
            ]).then(s.bind(s, 553998));
            return (n) => (0, i.jsx)(t, { ..._, ...n });
        },
        {
            onCloseCallback: () => {
                c.default.track(a.HAw.MODAL_DISMISSED, { type: f, location: t.analyticsSourceLocation });
            },
            contextKey: d,
        },
    );
}
