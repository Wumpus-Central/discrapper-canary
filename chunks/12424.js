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
    m = n(985018),
    _ = n(542386);
let g = function (e) {
    let {
            hasAppliedGuildBoosts: t,
            hasBoostPerk: n,
            hasGuildAffinitiesOrInGuild: g,
            subscriptionIsPausedOrPausePending: x,
        } = e,
        { subtitle: A, flavor: h } = (function (e) {
            let {
                hasAppliedGuildBoosts: t,
                hasBoostPerk: n,
                hasGuildAffinitiesOrInGuild: i,
                subscriptionIsPausedOrPausePending: s,
            } = e;
            if (s)
                return {
                    flavor: m.intl.format(m.t.doslJu, {
                        onClick: () => (0, d.openUserSettings)(o.X.SUBSCRIPTIONS_PANEL),
                    }),
                };
            if (!i) return { subtitle: m.intl.string(m.t.oiWYAc) };
            if (t)
                return {
                    subtitle: m.intl.string(m.t.W5rDjW),
                    flavor: m.intl.format(m.t.cUHcaQ, {
                        helpdeskArticle: l.A.getArticleURL(c.MVz.GUILD_SUBSCRIPTIONS),
                    }),
                };
            let _ = u.hd[u.gD.PREMIUM_MONTH_GUILD],
                g = a.Ay.getDefaultPrice(_.id, n),
                x = (0, r.CE)((0, r.$g)(g.amount, g.currency), _.interval, _.intervalCount);
            return {
                subtitle: n ? m.intl.string(m.t.bhPzXR) : m.intl.string(m.t.Zs9h9Z),
                flavor: m.intl.formatToPlainString(m.t.PGgTdA, { monthlyGuildBoostPrice: x }),
            };
        })({
            hasAppliedGuildBoosts: t,
            hasBoostPerk: n,
            hasGuildAffinitiesOrInGuild: g,
            subscriptionIsPausedOrPausePending: x,
        });
    return (0, i.jsxs)("div", {
        className: _.i,
        children: [
            (0, i.jsx)(s.Heading, { variant: "heading-lg/bold", className: _.V, children: A }),
            null != h && (0, i.jsx)(s.Text, { variant: "text-sm/normal", children: h }),
        ],
    });
};
