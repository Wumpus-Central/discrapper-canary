n.d(t, {
    PA: () => d,
    Tn: () => u,
    _i: () => g,
    eI: () => h,
    vp: () => p,
    y8: () => m,
});
var r = n(367907),
    i = n(200876),
    o = n(430824),
    a = n(594174);
n(709054), n(523361);
var s = n(981631),
    l = n(388032);
function c(e) {
    return e;
}
function u(e) {
    let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: o,
        } = e,
        { content: a, formatParams: s } = _({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: o,
        });
    return l.intl.format(a, s);
}
function d(e) {
    let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: o,
        } = e,
        { content: a, formatParams: s } = _({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: o,
        });
    return l.intl.formatToParts(a, s);
}
function f(e, t) {
    var n, r;
    let i = o.Z.getGuild(e),
        a = null != (n = null == t ? void 0 : t.total_months_subscribed) ? n : 0,
        s = a > 0;
    return {
        guild: i,
        totalMonthsSubscribed: a,
        showWithDuration: s,
        isRenewal: null != (r = null == t ? void 0 : t.is_renewal) && r,
    };
}
function _(e) {
    let {
            username: t,
            usernameOnClickHandler: n = c,
            roleSubscriptionOnClickHandler: r = s.dG4,
            guildId: i,
            roleSubscriptionData: o,
        } = e,
        { guild: a, totalMonthsSubscribed: u, showWithDuration: d, isRenewal: _ } = f(i, o);
    return {
        content: d ? (_ ? l.t.Iy66Mz : l.t.eCgb2d) : _ ? l.t.mPTTdn : l.t.mYjFFx,
        formatParams: {
            username: t,
            usernameHook: n,
            guildName: null == a ? void 0 : a.name,
            handleGuildNameClick: r,
            tierName: null == o ? void 0 : o.tier_name,
            months: u,
        },
    };
}
function p(e) {
    let t,
        {
            username: n,
            usernameOnClickHandler: r = c,
            roleSubscriptionOnClickHandler: i = s.dG4,
            guildId: o,
            roleSubscriptionData: a,
        } = e,
        { guild: u, totalMonthsSubscribed: d, showWithDuration: _, isRenewal: p } = f(o, a);
    return (
        (t = _ ? (p ? l.t.OQ0OU1 : l.t["+N9bxs"]) : p ? l.t.OxP1ND : l.t["6Z1E+/"]),
        l.intl.formatToParts(t, {
            guildName: null == u ? void 0 : u.name,
            tierName: null == a ? void 0 : a.tier_name,
            username: n,
            usernameOnClick: r,
            roleSubscriptionOnClick: i,
            months: d,
        })
    );
}
function h(e) {
    return (0, i.l)(e);
}
function m(e, t, n, i) {
    var o;
    r.ZP.trackWithMetadata(s.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
        guild_id: e,
        user_id: null == (o = a.default.getCurrentUser()) ? void 0 : o.id,
        channel_id: t,
        message_id: n,
        role_subscription_listing_id: i,
    });
}
function g(e, t) {
    var n;
    return {
        guild_id: e.guild_id,
        sender: null == (n = a.default.getCurrentUser()) ? void 0 : n.id,
        target_user: t.author.id,
        channel_id: e.id,
        message_id: t.id,
    };
}
