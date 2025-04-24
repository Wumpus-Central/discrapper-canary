n.d(e, {
    PA: () => d,
    Tn: () => _,
    _i: () => S,
    eI: () => I,
    vp: () => E,
    y8: () => f
});
var r = n(367907),
    i = n(200876),
    l = n(430824),
    a = n(594174);
n(709054), n(523361);
var u = n(981631),
    s = n(388032);
function o(t) {
    return t;
}
function _(t) {
    let { username: e, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: r, guildId: i, roleSubscriptionData: l } = t,
        { content: a, formatParams: u } = A({
            username: e,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: l
        });
    return s.intl.format(a, u);
}
function d(t) {
    let { username: e, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: r, guildId: i, roleSubscriptionData: l } = t,
        { content: a, formatParams: u } = A({
            username: e,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: l
        });
    return s.intl.formatToParts(a, u);
}
function c(t, e) {
    var n, r;
    let i = l.Z.getGuild(t),
        a = null != (n = null == e ? void 0 : e.total_months_subscribed) ? n : 0;
    return {
        guild: i,
        totalMonthsSubscribed: a,
        showWithDuration: a > 0,
        isRenewal: null != (r = null == e ? void 0 : e.is_renewal) && r
    };
}
function A(t) {
    let { username: e, usernameOnClickHandler: n = o, roleSubscriptionOnClickHandler: r = u.dG4, guildId: i, roleSubscriptionData: l } = t,
        { guild: a, totalMonthsSubscribed: _, showWithDuration: d, isRenewal: A } = c(i, l);
    return {
        content: d ? (A ? s.t.Iy66Mz : s.t.eCgb2d) : A ? s.t.mPTTdn : s.t.mYjFFx,
        formatParams: {
            username: e,
            usernameHook: n,
            guildName: null == a ? void 0 : a.name,
            handleGuildNameClick: r,
            tierName: null == l ? void 0 : l.tier_name,
            months: _
        }
    };
}
function E(t) {
    let e,
        { username: n, usernameOnClickHandler: r = o, roleSubscriptionOnClickHandler: i = u.dG4, guildId: l, roleSubscriptionData: a } = t,
        { guild: _, totalMonthsSubscribed: d, showWithDuration: A, isRenewal: E } = c(l, a);
    return (
        (e = A ? (E ? s.t.OQ0OU1 : s.t['+N9bxs']) : E ? s.t.OxP1ND : s.t['6Z1E+/']),
        s.intl.formatToParts(e, {
            guildName: null == _ ? void 0 : _.name,
            tierName: null == a ? void 0 : a.tier_name,
            username: n,
            usernameOnClick: r,
            roleSubscriptionOnClick: i,
            months: d
        })
    );
}
function I(t) {
    return (0, i.l)(t);
}
function f(t, e, n, i) {
    var l;
    r.ZP.trackWithMetadata(u.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
        guild_id: t,
        user_id: null == (l = a.default.getCurrentUser()) ? void 0 : l.id,
        channel_id: e,
        message_id: n,
        role_subscription_listing_id: i
    });
}
function S(t, e) {
    var n;
    return {
        guild_id: t.guild_id,
        sender: null == (n = a.default.getCurrentUser()) ? void 0 : n.id,
        target_user: e.author.id,
        channel_id: t.id,
        message_id: e.id
    };
}
