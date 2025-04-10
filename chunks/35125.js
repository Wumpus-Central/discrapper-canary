n.d(t, {
    PA: () => d,
    Tn: () => c,
    _i: () => O,
    eI: () => _,
    vp: () => E,
    y8: () => S
});
var r = n(367907),
    i = n(200876),
    l = n(430824),
    o = n(594174);
n(709054), n(523361);
var a = n(981631),
    u = n(388032);
function s(e) {
    return e;
}
function c(e) {
    let { username: t, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: r, guildId: i, roleSubscriptionData: l } = e,
        { content: o, formatParams: a } = f({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: l
        });
    return u.NW.format(o, a);
}
function d(e) {
    let { username: t, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: r, guildId: i, roleSubscriptionData: l } = e,
        { content: o, formatParams: a } = f({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: l
        });
    return u.NW.formatToParts(o, a);
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
function f(e) {
    let { username: t, usernameOnClickHandler: n = s, roleSubscriptionOnClickHandler: r = a.dG4, guildId: i, roleSubscriptionData: l } = e,
        { guild: o, totalMonthsSubscribed: c, showWithDuration: d, isRenewal: f } = p(i, l);
    return {
        content: d ? (f ? u.t.Iy66Mz : u.t.eCgb2d) : f ? u.t.mPTTdn : u.t.mYjFFx,
        formatParams: {
            username: t,
            usernameHook: n,
            guildName: null == o ? void 0 : o.name,
            handleGuildNameClick: r,
            tierName: null == l ? void 0 : l.tier_name,
            months: c
        }
    };
}
function E(e) {
    let t,
        { username: n, usernameOnClickHandler: r = s, roleSubscriptionOnClickHandler: i = a.dG4, guildId: l, roleSubscriptionData: o } = e,
        { guild: c, totalMonthsSubscribed: d, showWithDuration: f, isRenewal: E } = p(l, o);
    return (
        (t = f ? (E ? u.t.OQ0OU1 : u.t['+N9bxs']) : E ? u.t.OxP1ND : u.t['6Z1E+/']),
        u.NW.formatToParts(t, {
            guildName: null == c ? void 0 : c.name,
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
