n.d(t, {
    c: () => d,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(975571),
    a = n(997509),
    c = n(652215),
    o = n(985018);

function d(e) {
    let { features: t, canManageGuild: n } = e,
        d = i.useCallback(
            (e) => {
                let n = new Set(t);
                e
                    ? n.add(c.GuildFeatures.SUMMARIES_ENABLED_BY_USER)
                    : n.delete(c.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
                    a.A.updateGuild({
                        features: n,
                    });
            },
            [t],
        );
    return (0, r.jsx)(l.nVY, {
        label: o.intl.string(o.t.FOYxgr),
        description: o.intl.format(o.t["c6Cy/h"], {
            helpdeskArticle: s.A.getArticleURL(c.MVz.CONVERSATION_SUMMARIES),
        }),
        children: (0, r.jsx)(l.dOG, {
            label: o.intl.string(o.t.vmEDQs),
            badge: "beta",
            checked: t.has(c.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
            onChange: d,
            disabled: !n,
        }),
    });
}
