n.d(t, { P: () => d }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(63063),
    s = n(434404),
    o = n(981631),
    c = n(388032);
function d(e) {
    let { features: t, canManageGuild: n } = e,
        d = i.useCallback(
            (e) => {
                let n = new Set(t);
                e
                    ? n.add(o.GuildFeatures.SUMMARIES_ENABLED_BY_USER)
                    : n.delete(o.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
                    s.Z.updateGuild({ features: n });
            },
            [t],
        );
    return (0, r.jsx)(l.C3N, {
        label: c.intl.string(c.t.FOYxgr),
        description: c.intl.format(c.t["c6Cy/h"], { helpdeskArticle: a.Z.getArticleURL(o.BhN.CONVERSATION_SUMMARIES) }),
        children: (0, r.jsx)(l.rsf, {
            label: c.intl.string(c.t.vmEDQs),
            badge: "beta",
            checked: t.has(o.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
            onChange: d,
            disabled: !n,
        }),
    });
}
