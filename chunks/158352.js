"use strict";
n.d(t, { c: () => c });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(975571),
    a = n(997509),
    o = n(652215),
    d = n(985018);
function c(e) {
    let { features: t, canManageGuild: n } = e,
        c = s.useCallback(
            (e) => {
                let n = new Set(t);
                e
                    ? n.add(o.GuildFeatures.SUMMARIES_ENABLED_BY_USER)
                    : n.delete(o.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
                    a.A.updateGuild({ features: n });
            },
            [t],
        );
    return (0, i.jsx)(l.nVY, {
        label: d.intl.string(d.t.FOYxgr),
        description: d.intl.format(d.t["c6Cy/h"], { helpdeskArticle: r.A.getArticleURL(o.MVz.CONVERSATION_SUMMARIES) }),
        children: (0, i.jsx)(l.dOG, {
            label: d.intl.string(d.t.vmEDQs),
            badge: "beta",
            checked: t.has(o.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
            onChange: c,
            disabled: !n,
        }),
    });
}
