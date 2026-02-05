n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var s = n(397927),
    r = n(975571),
    a = n(927578),
    l = n(580630),
    o = n(780964),
    c = n(840065),
    d = n(652215),
    u = n(788868),
    _ = n(985018),
    m = n(689507);
let A = function (e) {
    let {
            hasAppliedGuildBoosts: t,
            hasBoostPerk: n,
            hasGuildAffinitiesOrInGuild: A,
            subscriptionIsPausedOrPausePending: g,
        } = e,
        { subtitle: E, flavor: h } = (function (e) {
            let {
                hasAppliedGuildBoosts: t,
                hasBoostPerk: n,
                hasGuildAffinitiesOrInGuild: i,
                subscriptionIsPausedOrPausePending: s,
            } = e;
            if (s)
                return {
                    flavor: _.intl.format(_.t.doslJu, {
                        onClick: () =>
                            (0, c.openUserSettings)(o.X.SUBSCRIPTIONS_PANEL, { section: d.nc_.SUBSCRIPTIONS }),
                    }),
                };
            if (!i) return { subtitle: _.intl.string(_.t.oiWYAc) };
            if (t)
                return {
                    subtitle: _.intl.string(_.t.W5rDjW),
                    flavor: _.intl.format(_.t.cUHcaQ, {
                        helpdeskArticle: r.A.getArticleURL(d.MVz.GUILD_SUBSCRIPTIONS),
                    }),
                };
            let m = u.hd[u.gD.PREMIUM_MONTH_GUILD],
                A = a.Ay.getDefaultPrice(m.id, n),
                g = (0, l.CE)((0, l.$g)(A.amount, A.currency), m.interval, m.intervalCount);
            return {
                subtitle: n ? _.intl.string(_.t.bhPzXR) : _.intl.string(_.t.Zs9h9Z),
                flavor: _.intl.formatToPlainString(_.t.PGgTdA, { monthlyGuildBoostPrice: g }),
            };
        })({
            hasAppliedGuildBoosts: t,
            hasBoostPerk: n,
            hasGuildAffinitiesOrInGuild: A,
            subscriptionIsPausedOrPausePending: g,
        });
    return (0, i.jsxs)("div", {
        className: m.i,
        children: [
            (0, i.jsx)(s.Heading, { variant: "heading-lg/bold", className: m.V, children: E }),
            null != h && (0, i.jsx)(s.Text, { variant: "text-sm/normal", children: h }),
        ],
    });
};
