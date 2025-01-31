n.d(t, {
    PA: () => c,
    Tn: () => u,
    _i: () => E,
    eI: () => f,
    vp: () => C,
    y8: () => p
});
var i = n(367907),
    l = n(200876),
    r = n(430824),
    s = n(594174);
n(709054), n(523361);
var a = n(981631),
    o = n(388032);
function d(e) {
    return e;
}
function u(e) {
    let { username: t, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: i, guildId: l, roleSubscriptionData: r } = e,
        { content: s, formatParams: a } = g({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: l,
            roleSubscriptionData: r
        });
    return o.intl.format(s, a);
}
function c(e) {
    let { username: t, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: i, guildId: l, roleSubscriptionData: r } = e,
        { content: s, formatParams: a } = g({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: l,
            roleSubscriptionData: r
        });
    return o.intl.formatToParts(s, a);
}
function h(e, t) {
    var n, i;
    let l = r.Z.getGuild(e),
        s = null !== (n = null == t ? void 0 : t.total_months_subscribed) && void 0 !== n ? n : 0;
    return {
        guild: l,
        totalMonthsSubscribed: s,
        showWithDuration: s > 0,
        isRenewal: null !== (i = null == t ? void 0 : t.is_renewal) && void 0 !== i && i
    };
}
function g(e) {
    let { username: t, usernameOnClickHandler: n = d, roleSubscriptionOnClickHandler: i = a.dG4, guildId: l, roleSubscriptionData: r } = e,
        { guild: s, totalMonthsSubscribed: u, showWithDuration: c, isRenewal: g } = h(l, r);
    return {
        content: c ? (g ? o.t.Iy66Mz : o.t.eCgb2d) : g ? o.t.mPTTdn : o.t.mYjFFx,
        formatParams: {
            username: t,
            usernameHook: n,
            guildName: null == s ? void 0 : s.name,
            handleGuildNameClick: i,
            tierName: null == r ? void 0 : r.tier_name,
            months: u
        }
    };
}
function C(e) {
    let t,
        { username: n, usernameOnClickHandler: i = d, roleSubscriptionOnClickHandler: l = a.dG4, guildId: r, roleSubscriptionData: s } = e,
        { guild: u, totalMonthsSubscribed: c, showWithDuration: g, isRenewal: C } = h(r, s);
    return (
        (t = g ? (C ? o.t.OQ0OU1 : o.t['+N9bxs']) : C ? o.t.OxP1ND : o.t['6Z1E+/']),
        o.intl.formatToParts(t, {
            guildName: null == u ? void 0 : u.name,
            tierName: null == s ? void 0 : s.tier_name,
            username: n,
            usernameOnClick: i,
            roleSubscriptionOnClick: l,
            months: c
        })
    );
}
function f(e) {
    return (0, l.l)(e);
}
function p(e, t, n, l) {
    var r;
    i.ZP.trackWithMetadata(a.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
        guild_id: e,
        user_id: null === (r = s.default.getCurrentUser()) || void 0 === r ? void 0 : r.id,
        channel_id: t,
        message_id: n,
        role_subscription_listing_id: l
    });
}
function E(e, t) {
    var n;
    return {
        guild_id: e.guild_id,
        sender: null === (n = s.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
        target_user: t.author.id,
        channel_id: e.id,
        message_id: t.id
    };
}
