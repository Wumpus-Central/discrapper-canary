n.d(t, {
    PA: () => d,
    Tn: () => u,
    _i: () => g,
    eI: () => m,
    vp: () => _,
    y8: () => h,
});
var r = n(367907),
    i = n(200876),
    a = n(430824),
    o = n(594174);
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
            roleSubscriptionData: a,
        } = e,
        { content: o, formatParams: s } = p({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: a,
        });
    return l.intl.format(o, s);
}
function d(e) {
    let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: a,
        } = e,
        { content: o, formatParams: s } = p({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: a,
        });
    return l.intl.formatToParts(o, s);
}
function f(e, t) {
    var n, r;
    let i = a.Z.getGuild(e),
        o = null != (n = null == t ? void 0 : t.total_months_subscribed) ? n : 0,
        s = o > 0;
    return {
        guild: i,
        totalMonthsSubscribed: o,
        showWithDuration: s,
        isRenewal: null != (r = null == t ? void 0 : t.is_renewal) && r,
    };
}
function p(e) {
    let {
            username: t,
            usernameOnClickHandler: n = c,
            roleSubscriptionOnClickHandler: r = s.dG4,
            guildId: i,
            roleSubscriptionData: a,
        } = e,
        { guild: o, totalMonthsSubscribed: u, showWithDuration: d, isRenewal: p } = f(i, a);
    return {
        content: d ? (p ? l.t.Iy66M7 : l.t.eCgb2W) : p ? l.t.mPTTdv : l.t.mYjFFx,
        formatParams: {
            username: t,
            usernameHook: n,
            guildName: null == o ? void 0 : o.name,
            handleGuildNameClick: r,
            tierName: null == a ? void 0 : a.tier_name,
            months: u,
        },
    };
}
function _(e) {
    let t,
        {
            username: n,
            usernameOnClickHandler: r = c,
            roleSubscriptionOnClickHandler: i = s.dG4,
            guildId: a,
            roleSubscriptionData: o,
        } = e,
        { guild: u, totalMonthsSubscribed: d, showWithDuration: p, isRenewal: _ } = f(a, o);
    return (
        (t = p ? (_ ? l.t.OQ0OUy : l.t["+N9bxq"]) : _ ? l.t.OxP1NC : l.t["6Z1E+7"]),
        l.intl.formatToParts(t, {
            guildName: null == u ? void 0 : u.name,
            tierName: null == o ? void 0 : o.tier_name,
            username: n,
            usernameOnClick: r,
            roleSubscriptionOnClick: i,
            months: d,
        })
    );
}
function m(e) {
    return (0, i.l)(e);
}
function h(e, t, n, i) {
    var a;
    r.ZP.trackWithMetadata(s.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
        guild_id: e,
        user_id: null == (a = o.default.getCurrentUser()) ? void 0 : a.id,
        channel_id: t,
        message_id: n,
        role_subscription_listing_id: i,
    });
}
function g(e, t) {
    var n;
    return {
        guild_id: e.guild_id,
        sender: null == (n = o.default.getCurrentUser()) ? void 0 : n.id,
        target_user: t.author.id,
        channel_id: e.id,
        message_id: t.id,
    };
}
