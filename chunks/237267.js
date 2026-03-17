n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(975571),
    a = n(927578),
    r = n(580630),
    o = n(780964),
    d = n(840065),
    c = n(652215),
    u = n(788868),
    _ = n(985018),
    m = n(689507);
let g = function (e) {
    let {
            hasAppliedGuildBoosts: t,
            hasBoostPerk: n,
            hasGuildAffinitiesOrInGuild: g,
            subscriptionIsPausedOrPausePending: A,
        } = e,
        { subtitle: h, flavor: x } = (function (e) {
            let {
                hasAppliedGuildBoosts: t,
                hasBoostPerk: n,
                hasGuildAffinitiesOrInGuild: i,
                subscriptionIsPausedOrPausePending: s,
            } = e;
            if (s)
                return {
                    flavor: _.intl.format(_.t.doslJu, {
                        onClick: () => (0, d.openUserSettings)(o.X.SUBSCRIPTIONS_PANEL),
                    }),
                };
            if (!i) return { subtitle: _.intl.string(_.t.oiWYAc) };
            if (t)
                return {
                    subtitle: _.intl.string(_.t.W5rDjW),
                    flavor: _.intl.format(_.t.cUHcaQ, {
                        helpdeskArticle: l.A.getArticleURL(c.MVz.GUILD_SUBSCRIPTIONS),
                    }),
                };
            let m = u.hd[u.gD.PREMIUM_MONTH_GUILD],
                g = a.Ay.getDefaultPrice(m.id, n),
                A = (0, r.CE)((0, r.$g)(g.amount, g.currency), m.interval, m.intervalCount);
            return {
                subtitle: n ? _.intl.string(_.t.bhPzXR) : _.intl.string(_.t.Zs9h9Z),
                flavor: _.intl.formatToPlainString(_.t.PGgTdA, { monthlyGuildBoostPrice: A }),
            };
        })({
            hasAppliedGuildBoosts: t,
            hasBoostPerk: n,
            hasGuildAffinitiesOrInGuild: g,
            subscriptionIsPausedOrPausePending: A,
        });
    return (0, i.jsxs)("div", {
        className: m.i,
        children: [
            (0, i.jsx)(s.Heading, { variant: "heading-lg/bold", className: m.V, children: h }),
            null != x && (0, i.jsx)(s.Text, { variant: "text-sm/normal", children: x }),
        ],
    });
};
