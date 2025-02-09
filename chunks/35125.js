n.d(e, {
    PA: () => c,
    Tn: () => d,
    _i: () => N,
    eI: () => p,
    vp: () => E,
    y8: () => h
});
var i = n(367907),
    r = n(200876),
    a = n(430824),
    l = n(594174);
n(709054), n(523361);
var o = n(981631),
    u = n(388032);
function s(t) {
    return t;
}
function d(t) {
    let { username: e, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: i, guildId: r, roleSubscriptionData: a } = t,
        { content: l, formatParams: o } = _({
            username: e,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: a
        });
    return u.intl.format(l, o);
}
function c(t) {
    let { username: e, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: i, guildId: r, roleSubscriptionData: a } = t,
        { content: l, formatParams: o } = _({
            username: e,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: a
        });
    return u.intl.formatToParts(l, o);
}
function f(t, e) {
    var n, i;
    let r = a.Z.getGuild(t),
        l = null !== (n = null == e ? void 0 : e.total_months_subscribed) && void 0 !== n ? n : 0;
    return {
        guild: r,
        totalMonthsSubscribed: l,
        showWithDuration: l > 0,
        isRenewal: null !== (i = null == e ? void 0 : e.is_renewal) && void 0 !== i && i
    };
}
function _(t) {
    let { username: e, usernameOnClickHandler: n = s, roleSubscriptionOnClickHandler: i = o.dG4, guildId: r, roleSubscriptionData: a } = t,
        { guild: l, totalMonthsSubscribed: d, showWithDuration: c, isRenewal: _ } = f(r, a);
    return {
        content: c ? (_ ? u.t.Iy66Mz : u.t.eCgb2d) : _ ? u.t.mPTTdn : u.t.mYjFFx,
        formatParams: {
            username: e,
            usernameHook: n,
            guildName: null == l ? void 0 : l.name,
            handleGuildNameClick: i,
            tierName: null == a ? void 0 : a.tier_name,
            months: d
        }
    };
}
function E(t) {
    let e,
        { username: n, usernameOnClickHandler: i = s, roleSubscriptionOnClickHandler: r = o.dG4, guildId: a, roleSubscriptionData: l } = t,
        { guild: d, totalMonthsSubscribed: c, showWithDuration: _, isRenewal: E } = f(a, l);
    return (
        (e = _ ? (E ? u.t.OQ0OU1 : u.t['+N9bxs']) : E ? u.t.OxP1ND : u.t['6Z1E+/']),
        u.intl.formatToParts(e, {
            guildName: null == d ? void 0 : d.name,
            tierName: null == l ? void 0 : l.tier_name,
            username: n,
            usernameOnClick: i,
            roleSubscriptionOnClick: r,
            months: c
        })
    );
}
function p(t) {
    return (0, r.l)(t);
}
function h(t, e, n, r) {
    var a;
    i.ZP.trackWithMetadata(o.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
        guild_id: t,
        user_id: null === (a = l.default.getCurrentUser()) || void 0 === a ? void 0 : a.id,
        channel_id: e,
        message_id: n,
        role_subscription_listing_id: r
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
