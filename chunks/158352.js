n.d(t, { c: () => u });
var i = n(627968),
    l = n(64700),
    s = n(270003),
    r = n(243721),
    a = n(975571),
    o = n(997509),
    d = n(652215),
    c = n(985018);
function u(e) {
    let { features: t, canManageGuild: n } = e,
        u = l.useCallback(
            (e) => {
                let n = new Set(t);
                e
                    ? n.add(d.GuildFeatures.SUMMARIES_ENABLED_BY_USER)
                    : n.delete(d.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
                    o.A.updateGuild({ features: n });
            },
            [t],
        );
    return (0, i.jsx)(s.n, {
        label: c.intl.string(c.t.FOYxgr),
        description: c.intl.format(c.t["c6Cy/h"], { helpdeskArticle: a.A.getArticleURL(d.MVz.CONVERSATION_SUMMARIES) }),
        children: (0, i.jsx)(r.d, {
            label: c.intl.string(c.t.vmEDQs),
            badge: "beta",
            checked: t.has(d.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
            onChange: u,
            disabled: !n,
        }),
    });
}
