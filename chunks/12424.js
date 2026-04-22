n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var s = n(534514),
    l = n(834730),
    a = n(975571),
    r = n(927578),
    o = n(580630),
    d = n(780964),
    u = n(858897),
    c = n(652215),
    g = n(788868),
    m = n(985018),
    _ = n(38357);
let A = function (e) {
    let {
            hasAppliedGuildBoosts: t,
            hasBoostPerk: n,
            hasGuildAffinitiesOrInGuild: A,
            subscriptionIsPausedOrPausePending: h,
        } = e,
        { subtitle: p, flavor: x } = (function (e) {
            let {
                hasAppliedGuildBoosts: t,
                hasBoostPerk: n,
                hasGuildAffinitiesOrInGuild: i,
                subscriptionIsPausedOrPausePending: s,
            } = e;
            if (s)
                return {
                    flavor: m.intl.format(m.t.doslJu, {
                        onClick: () => (0, u.openUserSettings)(d.X.SUBSCRIPTIONS_PANEL),
                    }),
                };
            if (!i) return { subtitle: m.intl.string(m.t.oiWYAc) };
            if (t)
                return {
                    subtitle: m.intl.string(m.t.W5rDjW),
                    flavor: m.intl.format(m.t.cUHcaQ, {
                        helpdeskArticle: a.A.getArticleURL(c.MVz.GUILD_SUBSCRIPTIONS),
                    }),
                };
            let l = g.hd[g.gD.PREMIUM_MONTH_GUILD],
                _ = r.Ay.getDefaultPrice(l.id, n),
                A = (0, o.CE)((0, o.$g)(_.amount, _.currency), l.interval, l.intervalCount);
            return {
                subtitle: n ? m.intl.string(m.t.bhPzXR) : m.intl.string(m.t.Zs9h9Z),
                flavor: m.intl.formatToPlainString(m.t.PGgTdA, { monthlyGuildBoostPrice: A }),
            };
        })({
            hasAppliedGuildBoosts: t,
            hasBoostPerk: n,
            hasGuildAffinitiesOrInGuild: A,
            subscriptionIsPausedOrPausePending: h,
        });
    return (0, i.jsxs)("div", {
        className: _.i,
        children: [
            (0, i.jsx)(s.D, { variant: "heading-lg/bold", className: _.V, children: p }),
            null != x && (0, i.jsx)(l.E, { variant: "text-sm/normal", children: x }),
        ],
    });
};
