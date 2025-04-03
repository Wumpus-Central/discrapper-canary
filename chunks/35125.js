n.d(t, {
    PA: () => d,
    Tn: () => s,
    _i: () => p,
    eI: () => E,
    vp: () => N,
    y8: () => m
});
var r = n(367907),
    a = n(200876),
    i = n(430824),
    l = n(594174);
n(709054), n(523361);
var u = n(981631),
    o = n(388032);
function c(e) {
    return e;
}
function s(e) {
    let { username: t, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: r, guildId: a, roleSubscriptionData: i } = e,
        { content: l, formatParams: u } = _({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: a,
            roleSubscriptionData: i
        });
    return o.NW.format(l, u);
}
function d(e) {
    let { username: t, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: r, guildId: a, roleSubscriptionData: i } = e,
        { content: l, formatParams: u } = _({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: a,
            roleSubscriptionData: i
        });
    return o.NW.formatToParts(l, u);
}
function f(e, t) {
    var n, r;
    let a = i.Z.getGuild(e),
        l = null != (n = null == t ? void 0 : t.total_months_subscribed) ? n : 0;
    return {
        guild: a,
        totalMonthsSubscribed: l,
        showWithDuration: l > 0,
        isRenewal: null != (r = null == t ? void 0 : t.is_renewal) && r
    };
}
function _(e) {
    let { username: t, usernameOnClickHandler: n = c, roleSubscriptionOnClickHandler: r = u.dG4, guildId: a, roleSubscriptionData: i } = e,
        { guild: l, totalMonthsSubscribed: s, showWithDuration: d, isRenewal: _ } = f(a, i);
    return {
        content: d ? (_ ? o.t.Iy66Mz : o.t.eCgb2d) : _ ? o.t.mPTTdn : o.t.mYjFFx,
        formatParams: {
            username: t,
            usernameHook: n,
            guildName: null == l ? void 0 : l.name,
            handleGuildNameClick: r,
            tierName: null == i ? void 0 : i.tier_name,
            months: s
        }
    };
}
function N(e) {
    let t,
        { username: n, usernameOnClickHandler: r = c, roleSubscriptionOnClickHandler: a = u.dG4, guildId: i, roleSubscriptionData: l } = e,
        { guild: s, totalMonthsSubscribed: d, showWithDuration: _, isRenewal: N } = f(i, l);
    return (
        (t = _ ? (N ? o.t.OQ0OU1 : o.t['+N9bxs']) : N ? o.t.OxP1ND : o.t['6Z1E+/']),
        o.NW.formatToParts(t, {
            guildName: null == s ? void 0 : s.name,
            tierName: null == l ? void 0 : l.tier_name,
            username: n,
            usernameOnClick: r,
            roleSubscriptionOnClick: a,
            months: d
        })
    );
}
function E(e) {
    return (0, a.l)(e);
}
function m(e, t, n, a) {
    var i;
    r.ZP.trackWithMetadata(u.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
        guild_id: e,
        user_id: null == (i = l.default.getCurrentUser()) ? void 0 : i.id,
        channel_id: t,
        message_id: n,
        role_subscription_listing_id: a
    });
}
function p(e, t) {
    var n;
    return {
        guild_id: e.guild_id,
        sender: null == (n = l.default.getCurrentUser()) ? void 0 : n.id,
        target_user: t.author.id,
        channel_id: e.id,
        message_id: t.id
    };
}
