n.d(t, {
    A: () => m,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(975571),
    s = n(927578),
    a = n(580630),
    o = n(780964),
    c = n(840065),
    d = n(652215),
    u = n(788868),
    _ = n(985018),
    p = n(689507);
let m = function (e) {
    let {
            hasAppliedGuildBoosts: t,
            hasBoostPerk: n,
            hasGuildAffinitiesOrInGuild: m,
            subscriptionIsPausedOrPausePending: g,
        } = e,
        { subtitle: A, flavor: f } = (function (e) {
            let {
                hasAppliedGuildBoosts: t,
                hasBoostPerk: n,
                hasGuildAffinitiesOrInGuild: r,
                subscriptionIsPausedOrPausePending: i,
            } = e;
            if (i)
                return {
                    flavor: _.intl.format(_.t.doslJu, {
                        onClick: () =>
                            (0, c.openUserSettings)(o.X.SUBSCRIPTIONS_PANEL, {
                                section: d.nc_.SUBSCRIPTIONS,
                            }),
                    }),
                };
            if (!r)
                return {
                    subtitle: _.intl.string(_.t.oiWYAc),
                };
            if (t)
                return {
                    subtitle: _.intl.string(_.t.W5rDjW),
                    flavor: _.intl.format(_.t.cUHcaQ, {
                        helpdeskArticle: l.A.getArticleURL(d.MVz.GUILD_SUBSCRIPTIONS),
                    }),
                };
            let p = u.hd[u.gD.PREMIUM_MONTH_GUILD],
                m = s.Ay.getDefaultPrice(p.id, n),
                g = (0, a.CE)((0, a.$g)(m.amount, m.currency), p.interval, p.intervalCount);
            return {
                subtitle: n ? _.intl.string(_.t.bhPzXR) : _.intl.string(_.t.Zs9h9Z),
                flavor: _.intl.formatToPlainString(_.t.PGgTdA, {
                    monthlyGuildBoostPrice: g,
                }),
            };
        })({
            hasAppliedGuildBoosts: t,
            hasBoostPerk: n,
            hasGuildAffinitiesOrInGuild: m,
            subscriptionIsPausedOrPausePending: g,
        });
    return (0, r.jsxs)("div", {
        className: p.i,
        children: [
            (0, r.jsx)(i.Heading, {
                variant: "heading-lg/bold",
                className: p.V,
                children: A,
            }),
            null != f &&
                (0, r.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    children: f,
                }),
        ],
    });
};
