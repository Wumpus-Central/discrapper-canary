"use strict";
n.d(t, { A: () => w });
var r = n(385244),
    i = n(718564),
    a = n(436857),
    s = n(494576),
    o = n(942075),
    l = n(141468),
    u = n(763754),
    c = n(808829),
    d = n(552691),
    _ = n(383233),
    f = n(961350),
    p = n(734057),
    h = n(71393),
    m = n(287809),
    g = n(562153),
    E = n(661191),
    A = n(652215),
    I = n(985018);
let T = {
        "234395307759108106": "https://groovy.bot/commands",
        "365975655608745985": "https://www.pokecord.com/getting-started",
        512412940897484800: "http://jameslantz.net/smilebot",
    },
    y = () => [
        I.t["0cuj7l"],
        I.t["MuW+CN"],
        I.t.osqpHX,
        I.t["5ToSh2"],
        I.t.JEB8ps,
        I.t.pkOV5T,
        I.t["kRb1J+"],
        I.t["EmKLY+"],
        I.t.rPtBnb,
        I.t["5B/ekS"],
        I.t.ESNC3Y,
        I.t.Iw6d8w,
        I.t["WecSZ/"],
    ],
    S = () => [
        I.t.Jm6e0x,
        I.t.MGRnRT,
        I.t.EXOEGh,
        I.t["5uCTFN"],
        I.t.rl45Qo,
        I.t.Bh9zpQ,
        I.t.RdEy1J,
        I.t.qcdp00,
        I.t.F7w2Ru,
        I.t.gSyOgK,
        I.t.uYgqv7,
        I.t["b/1SBX"],
        I.t.LhebZF,
    ];
function v(e) {
    let t = S(),
        n = E.default.extractTimestamp(e) % t.length;
    return t[n];
}
function C(e) {
    let t = p.A.getChannel(e.channel_id),
        n = null == t ? null : h.A.getGuild(t.getGuildId());
    return (0, a.$)(
        I.intl.formatToParts(I.t.PJsjbP, { emoji: e.content, guildName: n?.name ?? I.intl.string(I.t.dtwqPR) }),
    );
}
function b(e) {
    return (0, a.$)(I.intl.formatToParts(I.t.ihxM9x, { username: e, usernameOnClick: A.tEg }));
}
function N(e, t) {
    let n = p.A.getChannel(t);
    return null == n || null == h.A.getGuild(n.getGuildId())
        ? b(e)
        : (0, a.$)(I.intl.formatToParts(I.t.ihxM9x, { username: e, usernameOnClick: A.tEg }));
}
function R(e, t, n) {
    let r = p.A.getChannel(t);
    if (null == r) return null;
    let i = h.A.getGuild(r.getGuildId());
    return null == i
        ? null
        : (0, a.$)(
              I.intl.formatToParts(I.t.iOuWPk, {
                  username: e,
                  guildName: i.name,
                  time:
                      "" !== n
                          ? new Date(n).toLocaleString(I.intl.currentLocale, { hour: "numeric", minute: "2-digit" })
                          : "",
              }),
          );
}
function O(e, t) {
    let n = p.A.getChannel(t);
    if (null == n) return null;
    let r = h.A.getGuild(n.getGuildId());
    return null == r ? null : (0, a.$)(I.intl.formatToParts(I.t.axmbpm, { username: e, guildName: r.name }));
}
function D(e, t) {
    let n = p.A.getChannel(e);
    if (null == n) return null;
    let r = h.A.getGuild(n.getGuildId());
    if (null == r) return null;
    switch (t) {
        case i.W.ACTIVITY_ALERTS_ENABLED:
            return (0, a.$)(I.intl.formatToParts(I.t.wt3ZUM, { guildName: r.name }));
        case i.W.INTERACTION_BLOCKED:
            return (0, a.$)(I.intl.formatToParts(I.t.AkqI0g, { guildName: r.name }));
        default:
            return (0, a.$)(I.intl.formatToParts(I.t["a+lJKl"], { guildName: r.name }));
    }
}
function L(e) {
    let [t] = e.mentions ?? [];
    return null == t
        ? null
        : "object" == typeof t
          ? (m.default.getUser(t.id) ?? null)
          : "string" == typeof t
            ? (m.default.getUser(t) ?? null)
            : null;
}
let w = {
    stringify: function (e, t) {
        let n = L(e),
            i = e.channel_id,
            p = g.Ay.getName(null, i, e.author);
        switch (e.type) {
            case A.lAJ.RECIPIENT_ADD:
                if (null == n) return;
                return (0, a.$)(
                    I.intl.formatToParts(I.t["7/Xl0S"], {
                        username: p,
                        usernameOnClick: A.tEg,
                        otherUsername: g.Ay.getName(null, i, n),
                        otherUsernameOnClick: A.tEg,
                    }),
                );
            case A.lAJ.RECIPIENT_REMOVE:
                if (null == n) return;
                let h = e.author;
                if (null == h || h.id === n.id)
                    return (0, a.$)(I.intl.formatToParts(I.t["Qn5+Lf"], { username: p, usernameOnClick: A.tEg }));
                return (0, a.$)(
                    I.intl.formatToParts(I.t.QtZ0RD, {
                        username: p,
                        usernameOnClick: A.tEg,
                        otherUsername: g.Ay.getName(null, i, n),
                        otherUsernameOnClick: A.tEg,
                    }),
                );
            case A.lAJ.CALL:
                let { call: m } = e;
                if (null != m && -1 === m.participants.indexOf(f.default.getId()))
                    return (0, a.$)(I.intl.formatToParts(I.t.DbgSA0, { username: p, usernameOnClick: A.tEg }));
                return;
            case A.lAJ.CHANNEL_NAME_CHANGE:
                return (0, a.$)(
                    I.intl.formatToParts(t.isForumPost() ? I.t["qa0e/n"] : I.t.XCPMEG, {
                        username: p,
                        usernameOnClick: A.tEg,
                        channelName: e.content,
                    }),
                );
            case A.lAJ.CHANNEL_ICON_CHANGE:
                return (0, a.$)(I.intl.formatToParts(I.t.wypJZ0, { username: p, usernameOnClick: A.tEg }));
            case A.lAJ.CHANNEL_PINNED_MESSAGE:
                return (0, a.$)(I.intl.formatToParts(I.t["/M60j0"], { username: p, usernameOnClick: A.tEg }));
            case A.lAJ.USER_JOIN:
                return (0, a.$)(I.intl.formatToParts(v(e.id), { username: p, usernameOnClick: A.tEg }));
            case A.lAJ.EMOJI_ADDED:
                return C(e);
            case A.lAJ.GUILD_BOOST:
                return b(p);
            case A.lAJ.GUILD_BOOST_TIER_1:
            case A.lAJ.GUILD_BOOST_TIER_2:
            case A.lAJ.GUILD_BOOST_TIER_3:
                return N(p, i);
            case A.lAJ.GUILD_INVITE_REMINDER:
                return I.intl.string(I.t.gxyKvr);
            case A.lAJ.THREAD_STARTER_MESSAGE:
                return I.intl.formatToPlainString(I.t["B8H+Cl"], { username: p, threadName: t.name });
            case A.lAJ.ROLE_SUBSCRIPTION_PURCHASE:
                if (e instanceof _.Ay) return null;
                return (0, a.$)(
                    (0, o.eb)({ username: p, guildId: t.guild_id, roleSubscriptionData: e.role_subscription_data }),
                );
            case A.lAJ.PURCHASE_NOTIFICATION:
                if (e instanceof _.Ay || e.purchase_notification?.guild_product_purchase?.product_name == null)
                    return null;
                return (0, a.$)(
                    (0, s.z)({ username: p, productName: e.purchase_notification.guild_product_purchase.product_name }),
                );
            case A.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                if (e instanceof _.Ay) return null;
                let E = (0, u.p_)((0, l.rh)(e));
                return (0, a.$)((0, c.P)({ application: e.application, username: E.nick }));
            case A.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED:
                if (e instanceof _.Ay) return null;
                return (0, a.$)((0, d.g6)({ application: e.application, username: (0, u.p_)((0, l.rh)(e)).nick }));
            case A.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
                if (e instanceof _.Ay) return null;
                return (0, a.$)((0, d.uk)({ application: e.application, username: (0, u.p_)((0, l.rh)(e)).nick }));
            case A.lAJ.AUTO_MODERATION_ACTION:
                if (
                    e.embeds?.some((e) => {
                        let { type: t } = e;
                        return t === A.Auw.AUTO_MODERATION_NOTIFICATION;
                    })
                ) {
                    let t = e.embeds.find((e) => {
                            let { type: t } = e;
                            return t === A.Auw.AUTO_MODERATION_NOTIFICATION;
                        }),
                        n = t?.fields?.find((e) => "name" in e && e.name === r.E.NOTIFICATION_TYPE);
                    return D(i, null != n && "value" in n ? n.value : void 0);
                }
                return e.content;
            case A.lAJ.GUILD_INCIDENT_ALERT_MODE_ENABLED:
                return R(p, i, e.content);
            case A.lAJ.GUILD_INCIDENT_ALERT_MODE_DISABLED:
                return O(p, i);
            default:
                return e.content;
        }
    },
    getSystemMessageUserJoin: function (e) {
        let t = y(),
            n = E.default.extractTimestamp(e) % t.length;
        return t[n];
    },
    getSystemMessageUserJoinMobile: v,
    getSystemMessageBotJoin: function (e) {
        return null == T[e] ? null : I.intl.format(I.t.xw1Ij0, { learnOnClick: { onClick: () => window.open(T[e]) } });
    },
};
