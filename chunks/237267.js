n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(975571),
    s = n(927578),
    o = n(580630),
    l = n(780964),
    c = n(840065),
    u = n(652215),
    d = n(788868),
    f = n(985018),
    p = n(689507);
function _(e) {
    let {
        hasAppliedGuildBoosts: t,
        hasBoostPerk: n,
        hasGuildAffinitiesOrInGuild: r,
        subscriptionIsPausedOrPausePending: i,
    } = e;
    if (i)
        return {
            flavor: f.intl.format(f.t.doslJu, {
                onClick: () => (0, c.openUserSettings)(l.X.SUBSCRIPTIONS_PANEL, { section: u.nc_.SUBSCRIPTIONS }),
            }),
        };
    if (!r) return { subtitle: f.intl.string(f.t.oiWYAc) };
    if (t)
        return {
            subtitle: f.intl.string(f.t.W5rDjW),
            flavor: f.intl.format(f.t.cUHcaQ, { helpdeskArticle: a.A.getArticleURL(u.MVz.GUILD_SUBSCRIPTIONS) }),
        };
    let p = d.hd[d.gD.PREMIUM_MONTH_GUILD],
        _ = s.Ay.getDefaultPrice(p.id, n),
        h = (0, o.CE)((0, o.$g)(_.amount, _.currency), p.interval, p.intervalCount);
    return {
        subtitle: n ? f.intl.string(f.t.bhPzXR) : f.intl.string(f.t.Zs9h9Z),
        flavor: f.intl.formatToPlainString(f.t.PGgTdA, { monthlyGuildBoostPrice: h }),
    };
}
let h = function (e) {
    let {
            hasAppliedGuildBoosts: t,
            hasBoostPerk: n,
            hasGuildAffinitiesOrInGuild: a,
            subscriptionIsPausedOrPausePending: s,
        } = e,
        { subtitle: o, flavor: l } = _({
            hasAppliedGuildBoosts: t,
            hasBoostPerk: n,
            hasGuildAffinitiesOrInGuild: a,
            subscriptionIsPausedOrPausePending: s,
        });
    return (0, r.jsxs)("div", {
        className: p.i,
        children: [
            (0, r.jsx)(i.Heading, {
                variant: "heading-lg/bold",
                className: p.V,
                children: o,
            }),
            null != l &&
                (0, r.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    children: l,
                }),
        ],
    });
};
