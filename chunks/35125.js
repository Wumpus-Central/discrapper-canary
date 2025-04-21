n.d(t, {
    PA: () => _,
    Tn: () => u,
    _i: () => b,
    eI: () => p,
    vp: () => m,
    y8: () => g
});
var r = n(367907),
    a = n(200876),
    i = n(430824),
    o = n(594174);
n(709054), n(523361);
var l = n(981631),
    c = n(388032);
function s(e) {
    return e;
}
function u(e) {
    let { username: t, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: r, guildId: a, roleSubscriptionData: i } = e,
        { content: o, formatParams: l } = f({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: a,
            roleSubscriptionData: i
        });
    return c.intl.format(o, l);
}
function _(e) {
    let { username: t, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: r, guildId: a, roleSubscriptionData: i } = e,
        { content: o, formatParams: l } = f({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: a,
            roleSubscriptionData: i
        });
    return c.intl.formatToParts(o, l);
}
function d(e, t) {
    var n, r;
    let a = i.Z.getGuild(e),
        o = null != (n = null == t ? void 0 : t.total_months_subscribed) ? n : 0;
    return {
        guild: a,
        totalMonthsSubscribed: o,
        showWithDuration: o > 0,
        isRenewal: null != (r = null == t ? void 0 : t.is_renewal) && r
    };
}
function f(e) {
    let { username: t, usernameOnClickHandler: n = s, roleSubscriptionOnClickHandler: r = l.dG4, guildId: a, roleSubscriptionData: i } = e,
        { guild: o, totalMonthsSubscribed: u, showWithDuration: _, isRenewal: f } = d(a, i);
    return {
        content: _ ? (f ? c.t.Iy66Mz : c.t.eCgb2d) : f ? c.t.mPTTdn : c.t.mYjFFx,
        formatParams: {
            username: t,
            usernameHook: n,
            guildName: null == o ? void 0 : o.name,
            handleGuildNameClick: r,
            tierName: null == i ? void 0 : i.tier_name,
            months: u
        }
    };
}
function m(e) {
    let t,
        { username: n, usernameOnClickHandler: r = s, roleSubscriptionOnClickHandler: a = l.dG4, guildId: i, roleSubscriptionData: o } = e,
        { guild: u, totalMonthsSubscribed: _, showWithDuration: f, isRenewal: m } = d(i, o);
    return (
        (t = f ? (m ? c.t.OQ0OU1 : c.t['+N9bxs']) : m ? c.t.OxP1ND : c.t['6Z1E+/']),
        c.intl.formatToParts(t, {
            guildName: null == u ? void 0 : u.name,
            tierName: null == o ? void 0 : o.tier_name,
            username: n,
            usernameOnClick: r,
            roleSubscriptionOnClick: a,
            months: _
        })
    );
}
function p(e) {
    return (0, a.l)(e);
}
function g(e, t, n, a) {
    var i;
    r.ZP.trackWithMetadata(l.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
        guild_id: e,
        user_id: null == (i = o.default.getCurrentUser()) ? void 0 : i.id,
        channel_id: t,
        message_id: n,
        role_subscription_listing_id: a
    });
}
function b(e, t) {
    var n;
    return {
        guild_id: e.guild_id,
        sender: null == (n = o.default.getCurrentUser()) ? void 0 : n.id,
        target_user: t.author.id,
        channel_id: e.id,
        message_id: t.id
    };
}
