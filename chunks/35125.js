n.d(e, {
    PA: () => m,
    Tn: () => c,
    _i: () => I,
    eI: () => _,
    vp: () => N,
    y8: () => T
});
var r = n(367907),
    l = n(200876),
    i = n(430824),
    a = n(594174);
(n(709054), n(523361));
var u = n(981631),
    o = n(388032);
function s(t) {
    return t;
}
function c(t) {
    let { username: e, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: r, guildId: l, roleSubscriptionData: i } = t,
        { content: a, formatParams: u } = f({
            username: e,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: l,
            roleSubscriptionData: i
        });
    return o.intl.format(a, u);
}
function m(t) {
    let { username: e, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: r, guildId: l, roleSubscriptionData: i } = t,
        { content: a, formatParams: u } = f({
            username: e,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: l,
            roleSubscriptionData: i
        });
    return o.intl.formatToParts(a, u);
}
function d(t, e) {
    var n, r;
    let l = i.Z.getGuild(t),
        a = null != (n = null == e ? void 0 : e.total_months_subscribed) ? n : 0;
    return {
        guild: l,
        totalMonthsSubscribed: a,
        showWithDuration: a > 0,
        isRenewal: null != (r = null == e ? void 0 : e.is_renewal) && r
    };
}
function f(t) {
    let { username: e, usernameOnClickHandler: n = s, roleSubscriptionOnClickHandler: r = u.dG4, guildId: l, roleSubscriptionData: i } = t,
        { guild: a, totalMonthsSubscribed: c, showWithDuration: m, isRenewal: f } = d(l, i);
    return {
        content: m ? (f ? o.t.Iy66Mz : o.t.eCgb2d) : f ? o.t.mPTTdn : o.t.mYjFFx,
        formatParams: {
            username: e,
            usernameHook: n,
            guildName: null == a ? void 0 : a.name,
            handleGuildNameClick: r,
            tierName: null == i ? void 0 : i.tier_name,
            months: c
        }
    };
}
function N(t) {
    let e,
        { username: n, usernameOnClickHandler: r = s, roleSubscriptionOnClickHandler: l = u.dG4, guildId: i, roleSubscriptionData: a } = t,
        { guild: c, totalMonthsSubscribed: m, showWithDuration: f, isRenewal: N } = d(i, a);
    return (
        (e = f ? (N ? o.t.OQ0OU1 : o.t['+N9bxs']) : N ? o.t.OxP1ND : o.t['6Z1E+/']),
        o.intl.formatToParts(e, {
            guildName: null == c ? void 0 : c.name,
            tierName: null == a ? void 0 : a.tier_name,
            username: n,
            usernameOnClick: r,
            roleSubscriptionOnClick: l,
            months: m
        })
    );
}
function _(t) {
    return (0, l.l)(t);
}
function T(t, e, n, l) {
    var i;
    r.ZP.trackWithMetadata(u.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
        guild_id: t,
        user_id: null == (i = a.default.getCurrentUser()) ? void 0 : i.id,
        channel_id: e,
        message_id: n,
        role_subscription_listing_id: l
    });
}
function I(t, e) {
    var n;
    return {
        guild_id: t.guild_id,
        sender: null == (n = a.default.getCurrentUser()) ? void 0 : n.id,
        target_user: e.author.id,
        channel_id: t.id,
        message_id: e.id
    };
}
