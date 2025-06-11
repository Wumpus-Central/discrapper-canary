n.d(t, {
    PA: () => d,
    Tn: () => s,
    _i: () => O,
    eI: () => _,
    vp: () => f,
    y8: () => S
});
var r = n(367907),
    i = n(200876),
    l = n(430824),
    o = n(594174);
n(709054), n(523361);
var a = n(981631),
    u = n(388032);
function c(e) {
    return e;
}
function s(e) {
    let { username: t, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: r, guildId: i, roleSubscriptionData: l } = e,
        { content: o, formatParams: a } = E({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: l
        });
    return u.intl.format(o, a);
}
function d(e) {
    let { username: t, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: r, guildId: i, roleSubscriptionData: l } = e,
        { content: o, formatParams: a } = E({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: l
        });
    return u.intl.formatToParts(o, a);
}
function p(e, t) {
    var n, r;
    let i = l.Z.getGuild(e),
        o = null != (n = null == t ? void 0 : t.total_months_subscribed) ? n : 0;
    return {
        guild: i,
        totalMonthsSubscribed: o,
        showWithDuration: o > 0,
        isRenewal: null != (r = null == t ? void 0 : t.is_renewal) && r
    };
}
function E(e) {
    let { username: t, usernameOnClickHandler: n = c, roleSubscriptionOnClickHandler: r = a.dG4, guildId: i, roleSubscriptionData: l } = e,
        { guild: o, totalMonthsSubscribed: s, showWithDuration: d, isRenewal: E } = p(i, l);
    return {
        content: d ? (E ? u.t.Iy66Mz : u.t.eCgb2d) : E ? u.t.mPTTdn : u.t.mYjFFx,
        formatParams: {
            username: t,
            usernameHook: n,
            guildName: null == o ? void 0 : o.name,
            handleGuildNameClick: r,
            tierName: null == l ? void 0 : l.tier_name,
            months: s
        }
    };
}
function f(e) {
    let t,
        { username: n, usernameOnClickHandler: r = c, roleSubscriptionOnClickHandler: i = a.dG4, guildId: l, roleSubscriptionData: o } = e,
        { guild: s, totalMonthsSubscribed: d, showWithDuration: E, isRenewal: f } = p(l, o);
    return (
        (t = E ? (f ? u.t.OQ0OU1 : u.t['+N9bxs']) : f ? u.t.OxP1ND : u.t['6Z1E+/']),
        u.intl.formatToParts(t, {
            guildName: null == s ? void 0 : s.name,
            tierName: null == o ? void 0 : o.tier_name,
            username: n,
            usernameOnClick: r,
            roleSubscriptionOnClick: i,
            months: d
        })
    );
}
function _(e) {
    return (0, i.l)(e);
}
function S(e, t, n, i) {
    var l;
    r.ZP.trackWithMetadata(a.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
        guild_id: e,
        user_id: null == (l = o.default.getCurrentUser()) ? void 0 : l.id,
        channel_id: t,
        message_id: n,
        role_subscription_listing_id: i
    });
}
function O(e, t) {
    var n;
    return {
        guild_id: e.guild_id,
        sender: null == (n = o.default.getCurrentUser()) ? void 0 : n.id,
        target_user: t.author.id,
        channel_id: e.id,
        message_id: t.id
    };
}
