n.d(t, {
    PA: () => c,
    Tn: () => s,
    _i: () => h,
    eI: () => p,
    vp: () => E,
    y8: () => m
});
var i = n(367907),
    r = n(200876),
    a = n(430824),
    l = n(594174);
n(709054), n(523361);
var u = n(981631),
    o = n(388032);
function d(e) {
    return e;
}
function s(e) {
    let { username: t, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: i, guildId: r, roleSubscriptionData: a } = e,
        { content: l, formatParams: u } = _({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: a
        });
    return o.intl.format(l, u);
}
function c(e) {
    let { username: t, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: i, guildId: r, roleSubscriptionData: a } = e,
        { content: l, formatParams: u } = _({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: a
        });
    return o.intl.formatToParts(l, u);
}
function f(e, t) {
    var n, i;
    let r = a.Z.getGuild(e),
        l = null !== (n = null == t ? void 0 : t.total_months_subscribed) && void 0 !== n ? n : 0;
    return {
        guild: r,
        totalMonthsSubscribed: l,
        showWithDuration: l > 0,
        isRenewal: null !== (i = null == t ? void 0 : t.is_renewal) && void 0 !== i && i
    };
}
function _(e) {
    let { username: t, usernameOnClickHandler: n = d, roleSubscriptionOnClickHandler: i = u.dG4, guildId: r, roleSubscriptionData: a } = e,
        { guild: l, totalMonthsSubscribed: s, showWithDuration: c, isRenewal: _ } = f(r, a);
    return {
        content: c ? (_ ? o.t.Iy66Mz : o.t.eCgb2d) : _ ? o.t.mPTTdn : o.t.mYjFFx,
        formatParams: {
            username: t,
            usernameHook: n,
            guildName: null == l ? void 0 : l.name,
            handleGuildNameClick: i,
            tierName: null == a ? void 0 : a.tier_name,
            months: s
        }
    };
}
function E(e) {
    let t,
        { username: n, usernameOnClickHandler: i = d, roleSubscriptionOnClickHandler: r = u.dG4, guildId: a, roleSubscriptionData: l } = e,
        { guild: s, totalMonthsSubscribed: c, showWithDuration: _, isRenewal: E } = f(a, l);
    return (
        (t = _ ? (E ? o.t.OQ0OU1 : o.t['+N9bxs']) : E ? o.t.OxP1ND : o.t['6Z1E+/']),
        o.intl.formatToParts(t, {
            guildName: null == s ? void 0 : s.name,
            tierName: null == l ? void 0 : l.tier_name,
            username: n,
            usernameOnClick: i,
            roleSubscriptionOnClick: r,
            months: c
        })
    );
}
function p(e) {
    return (0, r.l)(e);
}
function m(e, t, n, r) {
    var a;
    i.ZP.trackWithMetadata(u.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
        guild_id: e,
        user_id: null === (a = l.default.getCurrentUser()) || void 0 === a ? void 0 : a.id,
        channel_id: t,
        message_id: n,
        role_subscription_listing_id: r
    });
}
function h(e, t) {
    var n;
    return {
        guild_id: e.guild_id,
        sender: null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
        target_user: t.author.id,
        channel_id: e.id,
        message_id: t.id
    };
}
