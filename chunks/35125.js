n.d(t, {
    PA: function () {
        return d;
    },
    Tn: function () {
        return c;
    },
    _i: function () {
        return m;
    },
    eI: function () {
        return _;
    },
    vp: function () {
        return h;
    },
    y8: function () {
        return E;
    }
});
var r = n(367907),
    i = n(200876),
    l = n(430824),
    a = n(594174);
n(709054), n(523361);
var u = n(981631),
    o = n(388032);
function s(e) {
    return e;
}
function c(e) {
    let { username: t, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: r, guildId: i, roleSubscriptionData: l } = e,
        { content: a, formatParams: u } = p({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: l
        });
    return o.intl.format(a, u);
}
function d(e) {
    let { username: t, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: r, guildId: i, roleSubscriptionData: l } = e,
        { content: a, formatParams: u } = p({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: l
        });
    return o.intl.formatToParts(a, u);
}
function f(e, t) {
    var n, r;
    let i = l.Z.getGuild(e),
        a = null !== (n = null == t ? void 0 : t.total_months_subscribed) && void 0 !== n ? n : 0;
    return {
        guild: i,
        totalMonthsSubscribed: a,
        showWithDuration: a > 0,
        isRenewal: null !== (r = null == t ? void 0 : t.is_renewal) && void 0 !== r && r
    };
}
function p(e) {
    let t,
        { username: n, usernameOnClickHandler: r = s, roleSubscriptionOnClickHandler: i = u.dG4, guildId: l, roleSubscriptionData: a } = e,
        { guild: c, totalMonthsSubscribed: d, showWithDuration: p, isRenewal: h } = f(l, a);
    return (
        (t = p ? (h ? o.t.Iy66Mz : o.t.eCgb2d) : h ? o.t.mPTTdn : o.t.mYjFFx),
        {
            content: t,
            formatParams: {
                username: n,
                usernameHook: r,
                guildName: null == c ? void 0 : c.name,
                handleGuildNameClick: i,
                tierName: null == a ? void 0 : a.tier_name,
                months: d
            }
        }
    );
}
function h(e) {
    let t,
        { username: n, usernameOnClickHandler: r = s, roleSubscriptionOnClickHandler: i = u.dG4, guildId: l, roleSubscriptionData: a } = e,
        { guild: c, totalMonthsSubscribed: d, showWithDuration: p, isRenewal: h } = f(l, a);
    return (
        (t = p ? (h ? o.t.OQ0OU1 : o.t['+N9bxs']) : h ? o.t.OxP1ND : o.t['6Z1E+/']),
        o.intl.formatToParts(t, {
            guildName: null == c ? void 0 : c.name,
            tierName: null == a ? void 0 : a.tier_name,
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
function E(e, t, n, i) {
    var l;
    r.ZP.trackWithMetadata(u.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
        guild_id: e,
        user_id: null === (l = a.default.getCurrentUser()) || void 0 === l ? void 0 : l.id,
        channel_id: t,
        message_id: n,
        role_subscription_listing_id: i
    });
}
function m(e, t) {
    var n;
    return {
        guild_id: e.guild_id,
        sender: null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
        target_user: t.author.id,
        channel_id: e.id,
        message_id: t.id
    };
}
