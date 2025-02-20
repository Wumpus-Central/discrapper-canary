n.d(e, {
    PA: () => d,
    Tn: () => c,
    _i: () => h,
    eI: () => p,
    vp: () => _,
    y8: () => E
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
function c(t) {
    let { username: e, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: i, guildId: r, roleSubscriptionData: a } = t,
        { content: l, formatParams: o } = N({
            username: e,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: a
        });
    return u.NW.format(l, o);
}
function d(t) {
    let { username: e, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: i, guildId: r, roleSubscriptionData: a } = t,
        { content: l, formatParams: o } = N({
            username: e,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: a
        });
    return u.NW.formatToParts(l, o);
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
function N(t) {
    let { username: e, usernameOnClickHandler: n = s, roleSubscriptionOnClickHandler: i = o.dG4, guildId: r, roleSubscriptionData: a } = t,
        { guild: l, totalMonthsSubscribed: c, showWithDuration: d, isRenewal: N } = f(r, a);
    return {
        content: d ? (N ? u.t.Iy66Mz : u.t.eCgb2d) : N ? u.t.mPTTdn : u.t.mYjFFx,
        formatParams: {
            username: e,
            usernameHook: n,
            guildName: null == l ? void 0 : l.name,
            handleGuildNameClick: i,
            tierName: null == a ? void 0 : a.tier_name,
            months: c
        }
    };
}
function _(t) {
    let e,
        { username: n, usernameOnClickHandler: i = s, roleSubscriptionOnClickHandler: r = o.dG4, guildId: a, roleSubscriptionData: l } = t,
        { guild: c, totalMonthsSubscribed: d, showWithDuration: N, isRenewal: _ } = f(a, l);
    return (
        (e = N ? (_ ? u.t.OQ0OU1 : u.t['+N9bxs']) : _ ? u.t.OxP1ND : u.t['6Z1E+/']),
        u.NW.formatToParts(e, {
            guildName: null == c ? void 0 : c.name,
            tierName: null == l ? void 0 : l.tier_name,
            username: n,
            usernameOnClick: i,
            roleSubscriptionOnClick: r,
            months: d
        })
    );
}
function p(t) {
    return (0, r.l)(t);
}
function E(t, e, n, r) {
    var a;
    i.ZP.trackWithMetadata(o.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
        guild_id: t,
        user_id: null === (a = l.default.getCurrentUser()) || void 0 === a ? void 0 : a.id,
        channel_id: e,
        message_id: n,
        role_subscription_listing_id: r
    });
}
function h(t, e) {
    var n;
    return {
        guild_id: t.guild_id,
        sender: null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
        target_user: e.author.id,
        channel_id: t.id,
        message_id: e.id
    };
}
