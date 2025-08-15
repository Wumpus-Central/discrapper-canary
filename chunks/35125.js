n.d(t, {
    PA: () => d,
    Tn: () => u,
    _i: () => p,
    eI: () => T,
    vp: () => I,
    y8: () => O,
});
var r = n(367907),
    i = n(200876),
    l = n(430824),
    a = n(594174);
n(709054), n(523361);
var o = n(981631),
    c = n(388032);
function s(e) {
    return e;
}
function u(e) {
    let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: l,
        } = e,
        { content: a, formatParams: o } = E({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: l,
        });
    return c.intl.format(a, o);
}
function d(e) {
    let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: l,
        } = e,
        { content: a, formatParams: o } = E({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: l,
        });
    return c.intl.formatToParts(a, o);
}
function _(e, t) {
    var n, r;
    let i = l.Z.getGuild(e),
        a = null != (n = null == t ? void 0 : t.total_months_subscribed) ? n : 0;
    return {
        guild: i,
        totalMonthsSubscribed: a,
        showWithDuration: a > 0,
        isRenewal: null != (r = null == t ? void 0 : t.is_renewal) && r,
    };
}
function E(e) {
    let {
            username: t,
            usernameOnClickHandler: n = s,
            roleSubscriptionOnClickHandler: r = o.dG4,
            guildId: i,
            roleSubscriptionData: l,
        } = e,
        { guild: a, totalMonthsSubscribed: u, showWithDuration: d, isRenewal: E } = _(i, l);
    return {
        content: d ? (E ? c.t.Iy66Mz : c.t.eCgb2d) : E ? c.t.mPTTdn : c.t.mYjFFx,
        formatParams: {
            username: t,
            usernameHook: n,
            guildName: null == a ? void 0 : a.name,
            handleGuildNameClick: r,
            tierName: null == l ? void 0 : l.tier_name,
            months: u,
        },
    };
}
function I(e) {
    let t,
        {
            username: n,
            usernameOnClickHandler: r = s,
            roleSubscriptionOnClickHandler: i = o.dG4,
            guildId: l,
            roleSubscriptionData: a,
        } = e,
        { guild: u, totalMonthsSubscribed: d, showWithDuration: E, isRenewal: I } = _(l, a);
    return (
        (t = E ? (I ? c.t.OQ0OU1 : c.t["+N9bxs"]) : I ? c.t.OxP1ND : c.t["6Z1E+/"]),
        c.intl.formatToParts(t, {
            guildName: null == u ? void 0 : u.name,
            tierName: null == a ? void 0 : a.tier_name,
            username: n,
            usernameOnClick: r,
            roleSubscriptionOnClick: i,
            months: d,
        })
    );
}
function T(e) {
    return (0, i.l)(e);
}
function O(e, t, n, i) {
    var l;
    r.ZP.trackWithMetadata(o.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
        guild_id: e,
        user_id: null == (l = a.default.getCurrentUser()) ? void 0 : l.id,
        channel_id: t,
        message_id: n,
        role_subscription_listing_id: i,
    });
}
function p(e, t) {
    var n;
    return {
        guild_id: e.guild_id,
        sender: null == (n = a.default.getCurrentUser()) ? void 0 : n.id,
        target_user: t.author.id,
        channel_id: e.id,
        message_id: t.id,
    };
}
