n.d(t, {
    PA: () => u,
    Tn: () => _,
    _i: () => h,
    eI: () => p,
    vp: () => m,
    y8: () => g
});
var a = n(367907),
    i = n(200876),
    r = n(430824),
    o = n(594174);
n(709054), n(523361);
var l = n(981631),
    s = n(388032);
function c(e) {
    return e;
}
function _(e) {
    let { username: t, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: a, guildId: i, roleSubscriptionData: r } = e,
        { content: o, formatParams: l } = f({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: a,
            guildId: i,
            roleSubscriptionData: r
        });
    return s.intl.format(o, l);
}
function u(e) {
    let { username: t, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: a, guildId: i, roleSubscriptionData: r } = e,
        { content: o, formatParams: l } = f({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: a,
            guildId: i,
            roleSubscriptionData: r
        });
    return s.intl.formatToParts(o, l);
}
function d(e, t) {
    var n, a;
    let i = r.Z.getGuild(e),
        o = null !== (n = null == t ? void 0 : t.total_months_subscribed) && void 0 !== n ? n : 0;
    return {
        guild: i,
        totalMonthsSubscribed: o,
        showWithDuration: o > 0,
        isRenewal: null !== (a = null == t ? void 0 : t.is_renewal) && void 0 !== a && a
    };
}
function f(e) {
    let { username: t, usernameOnClickHandler: n = c, roleSubscriptionOnClickHandler: a = l.dG4, guildId: i, roleSubscriptionData: r } = e,
        { guild: o, totalMonthsSubscribed: _, showWithDuration: u, isRenewal: f } = d(i, r);
    return {
        content: u ? (f ? s.t.Iy66Mz : s.t.eCgb2d) : f ? s.t.mPTTdn : s.t.mYjFFx,
        formatParams: {
            username: t,
            usernameHook: n,
            guildName: null == o ? void 0 : o.name,
            handleGuildNameClick: a,
            tierName: null == r ? void 0 : r.tier_name,
            months: _
        }
    };
}
function m(e) {
    let t,
        { username: n, usernameOnClickHandler: a = c, roleSubscriptionOnClickHandler: i = l.dG4, guildId: r, roleSubscriptionData: o } = e,
        { guild: _, totalMonthsSubscribed: u, showWithDuration: f, isRenewal: m } = d(r, o);
    return (
        (t = f ? (m ? s.t.OQ0OU1 : s.t['+N9bxs']) : m ? s.t.OxP1ND : s.t['6Z1E+/']),
        s.intl.formatToParts(t, {
            guildName: null == _ ? void 0 : _.name,
            tierName: null == o ? void 0 : o.tier_name,
            username: n,
            usernameOnClick: a,
            roleSubscriptionOnClick: i,
            months: u
        })
    );
}
function p(e) {
    return (0, i.l)(e);
}
function g(e, t, n, i) {
    var r;
    a.ZP.trackWithMetadata(l.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
        guild_id: e,
        user_id: null === (r = o.default.getCurrentUser()) || void 0 === r ? void 0 : r.id,
        channel_id: t,
        message_id: n,
        role_subscription_listing_id: i
    });
}
function h(e, t) {
    var n;
    return {
        guild_id: e.guild_id,
        sender: null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
        target_user: t.author.id,
        channel_id: e.id,
        message_id: t.id
    };
}
