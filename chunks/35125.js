n.d(e, {
    PA: () => c,
    Tn: () => d,
    _i: () => N,
    eI: () => E,
    vp: () => p,
    y8: () => h
});
var i = n(367907),
    a = n(200876),
    r = n(430824),
    l = n(594174);
n(709054), n(523361);
var o = n(981631),
    u = n(388032);
function s(t) {
    return t;
}
function d(t) {
    let { username: e, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: i, guildId: a, roleSubscriptionData: r } = t,
        { content: l, formatParams: o } = _({
            username: e,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: a,
            roleSubscriptionData: r
        });
    return u.intl.format(l, o);
}
function c(t) {
    let { username: e, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: i, guildId: a, roleSubscriptionData: r } = t,
        { content: l, formatParams: o } = _({
            username: e,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: a,
            roleSubscriptionData: r
        });
    return u.intl.formatToParts(l, o);
}
function f(t, e) {
    var n, i;
    let a = r.Z.getGuild(t),
        l = null !== (n = null == e ? void 0 : e.total_months_subscribed) && void 0 !== n ? n : 0;
    return {
        guild: a,
        totalMonthsSubscribed: l,
        showWithDuration: l > 0,
        isRenewal: null !== (i = null == e ? void 0 : e.is_renewal) && void 0 !== i && i
    };
}
function _(t) {
    let { username: e, usernameOnClickHandler: n = s, roleSubscriptionOnClickHandler: i = o.dG4, guildId: a, roleSubscriptionData: r } = t,
        { guild: l, totalMonthsSubscribed: d, showWithDuration: c, isRenewal: _ } = f(a, r);
    return {
        content: c ? (_ ? u.t.Iy66Mz : u.t.eCgb2d) : _ ? u.t.mPTTdn : u.t.mYjFFx,
        formatParams: {
            username: e,
            usernameHook: n,
            guildName: null == l ? void 0 : l.name,
            handleGuildNameClick: i,
            tierName: null == r ? void 0 : r.tier_name,
            months: d
        }
    };
}
function p(t) {
    let e,
        { username: n, usernameOnClickHandler: i = s, roleSubscriptionOnClickHandler: a = o.dG4, guildId: r, roleSubscriptionData: l } = t,
        { guild: d, totalMonthsSubscribed: c, showWithDuration: _, isRenewal: p } = f(r, l);
    return (
        (e = _ ? (p ? u.t.OQ0OU1 : u.t['+N9bxs']) : p ? u.t.OxP1ND : u.t['6Z1E+/']),
        u.intl.formatToParts(e, {
            guildName: null == d ? void 0 : d.name,
            tierName: null == l ? void 0 : l.tier_name,
            username: n,
            usernameOnClick: i,
            roleSubscriptionOnClick: a,
            months: c
        })
    );
}
function E(t) {
    return (0, a.l)(t);
}
function h(t, e, n, a) {
    var r;
    i.ZP.trackWithMetadata(o.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
        guild_id: t,
        user_id: null === (r = l.default.getCurrentUser()) || void 0 === r ? void 0 : r.id,
        channel_id: e,
        message_id: n,
        role_subscription_listing_id: a
    });
}
function N(t, e) {
    var n;
    return {
        guild_id: t.guild_id,
        sender: null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
        target_user: e.author.id,
        channel_id: t.id,
        message_id: e.id
    };
}
