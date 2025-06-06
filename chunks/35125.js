n.d(t, {
    PA: () => d,
    Tn: () => s,
    _i: () => h,
    eI: () => m,
    vp: () => p,
    y8: () => b
});
var r = n(367907),
    i = n(200876),
    o = n(430824),
    a = n(594174);
n(709054), n(523361);
var l = n(981631),
    c = n(388032);
function u(e) {
    return e;
}
function s(e) {
    let { username: t, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: r, guildId: i, roleSubscriptionData: o } = e,
        { content: a, formatParams: l } = f({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: o
        });
    return c.intl.format(a, l);
}
function d(e) {
    let { username: t, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: r, guildId: i, roleSubscriptionData: o } = e,
        { content: a, formatParams: l } = f({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: o
        });
    return c.intl.formatToParts(a, l);
}
function _(e, t) {
    var n, r;
    let i = o.Z.getGuild(e),
        a = null != (n = null == t ? void 0 : t.total_months_subscribed) ? n : 0;
    return {
        guild: i,
        totalMonthsSubscribed: a,
        showWithDuration: a > 0,
        isRenewal: null != (r = null == t ? void 0 : t.is_renewal) && r
    };
}
function f(e) {
    let { username: t, usernameOnClickHandler: n = u, roleSubscriptionOnClickHandler: r = l.dG4, guildId: i, roleSubscriptionData: o } = e,
        { guild: a, totalMonthsSubscribed: s, showWithDuration: d, isRenewal: f } = _(i, o);
    return {
        content: d ? (f ? c.t.Iy66Mz : c.t.eCgb2d) : f ? c.t.mPTTdn : c.t.mYjFFx,
        formatParams: {
            username: t,
            usernameHook: n,
            guildName: null == a ? void 0 : a.name,
            handleGuildNameClick: r,
            tierName: null == o ? void 0 : o.tier_name,
            months: s
        }
    };
}
function p(e) {
    let t,
        { username: n, usernameOnClickHandler: r = u, roleSubscriptionOnClickHandler: i = l.dG4, guildId: o, roleSubscriptionData: a } = e,
        { guild: s, totalMonthsSubscribed: d, showWithDuration: f, isRenewal: p } = _(o, a);
    return (
        (t = f ? (p ? c.t.OQ0OU1 : c.t['+N9bxs']) : p ? c.t.OxP1ND : c.t['6Z1E+/']),
        c.intl.formatToParts(t, {
            guildName: null == s ? void 0 : s.name,
            tierName: null == a ? void 0 : a.tier_name,
            username: n,
            usernameOnClick: r,
            roleSubscriptionOnClick: i,
            months: d
        })
    );
}
function m(e) {
    return (0, i.l)(e);
}
function b(e, t, n, i) {
    var o;
    r.ZP.trackWithMetadata(l.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
        guild_id: e,
        user_id: null == (o = a.default.getCurrentUser()) ? void 0 : o.id,
        channel_id: t,
        message_id: n,
        role_subscription_listing_id: i
    });
}
function h(e, t) {
    var n;
    return {
        guild_id: e.guild_id,
        sender: null == (n = a.default.getCurrentUser()) ? void 0 : n.id,
        target_user: t.author.id,
        channel_id: e.id,
        message_id: t.id
    };
}
