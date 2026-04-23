"use strict";
n.d(t, { A: () => C });
var r = n(385244),
    i = n(718564),
    s = n(436857),
    a = n(47167),
    o = n(494576),
    l = n(942075),
    u = n(141468),
    c = n(763754),
    d = n(808829),
    _ = n(552691),
    f = n(383233),
    p = n(961350),
    h = n(734057),
    E = n(71393),
    m = n(994500),
    g = n(287809),
    A = n(562153),
    I = n(661191),
    T = n(652215),
    S = n(985018);
let y = {
    "234395307759108106": "https://groovy.bot/commands",
    "365975655608745985": "https://www.pokecord.com/getting-started",
    512412940897484800: "http://jameslantz.net/smilebot",
};
function N(e) {
    let t = [
            S.t.Jm6e0x,
            S.t.MGRnRT,
            S.t.EXOEGh,
            S.t["5uCTFN"],
            S.t.rl45Qo,
            S.t.Bh9zpQ,
            S.t.RdEy1J,
            S.t.qcdp00,
            S.t.F7w2Ru,
            S.t.gSyOgK,
            S.t.uYgqv7,
            S.t["b/1SBX"],
            S.t.LhebZF,
        ],
        n = I.default.extractTimestamp(e) % t.length;
    return t[n];
}
function v(e) {
    return (0, s.$)(S.intl.formatToParts(S.t.ihxM9x, { username: e, usernameOnClick: T.tEg }));
}
let C = {
    stringify: function (e, t) {
        let n = (function (e) {
                let [t] = e.mentions ?? [];
                return null == t
                    ? null
                    : "object" == typeof t
                      ? (g.default.getUser(t.id) ?? null)
                      : "string" == typeof t
                        ? (g.default.getUser(t) ?? null)
                        : null;
            })(e),
            I = e.channel_id,
            y = A.Ay.getName(null, I, e.author);
        switch (e.type) {
            case T.lAJ.RECIPIENT_ADD:
                if (null == n) return;
                return (0, s.$)(
                    S.intl.formatToParts(S.t["7/Xl0S"], {
                        username: y,
                        usernameOnClick: T.tEg,
                        otherUsername: A.Ay.getName(null, I, n),
                        otherUsernameOnClick: T.tEg,
                    }),
                );
            case T.lAJ.RECIPIENT_REMOVE:
                if (null == n) return;
                let C = e.author;
                if (null == C || C.id === n.id)
                    return (0, s.$)(S.intl.formatToParts(S.t["Qn5+Lf"], { username: y, usernameOnClick: T.tEg }));
                return (0, s.$)(
                    S.intl.formatToParts(S.t.QtZ0RD, {
                        username: y,
                        usernameOnClick: T.tEg,
                        otherUsername: A.Ay.getName(null, I, n),
                        otherUsernameOnClick: T.tEg,
                    }),
                );
            case T.lAJ.CALL:
                let { call: O } = e;
                if (null != O && -1 === O.participants.indexOf(p.default.getId()))
                    return (0, s.$)(S.intl.formatToParts(S.t.DbgSA0, { username: y, usernameOnClick: T.tEg }));
                return;
            case T.lAJ.CHANNEL_NAME_CHANGE:
                return (0, s.$)(
                    S.intl.formatToParts(t.isForumPost() ? S.t["qa0e/n"] : S.t.XCPMEG, {
                        username: y,
                        usernameOnClick: T.tEg,
                        channelName: e.content,
                    }),
                );
            case T.lAJ.CHANNEL_ICON_CHANGE:
                return (0, s.$)(S.intl.formatToParts(S.t.wypJZ0, { username: y, usernameOnClick: T.tEg }));
            case T.lAJ.CHANNEL_PINNED_MESSAGE:
                return (0, s.$)(S.intl.formatToParts(S.t["/M60j0"], { username: y, usernameOnClick: T.tEg }));
            case T.lAJ.USER_JOIN:
                return (0, s.$)(S.intl.formatToParts(N(e.id), { username: y, usernameOnClick: T.tEg }));
            case T.lAJ.EMOJI_ADDED:
                let R, b;
                return (
                    (b = null == (R = h.A.getChannel(e.channel_id)) ? null : E.A.getGuild(R.getGuildId())),
                    (0, s.$)(
                        S.intl.formatToParts(S.t.PJsjbP, {
                            emoji: e.content,
                            guildName: b?.name ?? S.intl.string(S.t.dtwqPR),
                        }),
                    )
                );
            case T.lAJ.GUILD_BOOST:
                return v(y);
            case T.lAJ.GUILD_BOOST_TIER_1:
            case T.lAJ.GUILD_BOOST_TIER_2:
            case T.lAJ.GUILD_BOOST_TIER_3:
                let D;
                return null == (D = h.A.getChannel(I)) || null == E.A.getGuild(D.getGuildId())
                    ? v(y)
                    : (0, s.$)(S.intl.formatToParts(S.t.ihxM9x, { username: y, usernameOnClick: T.tEg }));
            case T.lAJ.GUILD_INVITE_REMINDER:
                return S.intl.string(S.t.gxyKvr);
            case T.lAJ.THREAD_STARTER_MESSAGE:
                return S.intl.formatToPlainString(S.t["B8H+Cl"], {
                    username: y,
                    threadName: (0, a.m1)(t, g.default, m.A),
                });
            case T.lAJ.ROLE_SUBSCRIPTION_PURCHASE:
                if (e instanceof f.Ay) return null;
                return (0, s.$)(
                    (0, l.eb)({ username: y, guildId: t.guild_id, roleSubscriptionData: e.role_subscription_data }),
                );
            case T.lAJ.PURCHASE_NOTIFICATION:
                if (e instanceof f.Ay || e.purchase_notification?.guild_product_purchase?.product_name == null)
                    return null;
                return (0, s.$)(
                    (0, o.z)({ username: y, productName: e.purchase_notification.guild_product_purchase.product_name }),
                );
            case T.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                if (e instanceof f.Ay) return null;
                let L = (0, c.p_)((0, u.rh)(e));
                return (0, s.$)((0, d.P)({ application: e.application, username: L.nick }));
            case T.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED:
                if (e instanceof f.Ay) return null;
                return (0, s.$)((0, _.g6)({ application: e.application, username: (0, c.p_)((0, u.rh)(e)).nick }));
            case T.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
                if (e instanceof f.Ay) return null;
                return (0, s.$)((0, _.uk)({ application: e.application, username: (0, c.p_)((0, u.rh)(e)).nick }));
            case T.lAJ.AUTO_MODERATION_ACTION:
                if (
                    e.embeds?.some((e) => {
                        let { type: t } = e;
                        return t === T.Auw.AUTO_MODERATION_NOTIFICATION;
                    })
                ) {
                    let t = e.embeds.find((e) => {
                            let { type: t } = e;
                            return t === T.Auw.AUTO_MODERATION_NOTIFICATION;
                        }),
                        n = t?.fields?.find((e) => "name" in e && e.name === r.E.NOTIFICATION_TYPE),
                        a = null != n && "value" in n ? n.value : void 0,
                        o = h.A.getChannel(I);
                    if (null == o) return null;
                    let l = E.A.getGuild(o.getGuildId());
                    if (null == l) return null;
                    switch (a) {
                        case i.W.ACTIVITY_ALERTS_ENABLED:
                            return (0, s.$)(S.intl.formatToParts(S.t.wt3ZUM, { guildName: l.name }));
                        case i.W.INTERACTION_BLOCKED:
                            return (0, s.$)(S.intl.formatToParts(S.t.AkqI0g, { guildName: l.name }));
                        default:
                            return (0, s.$)(S.intl.formatToParts(S.t["a+lJKl"], { guildName: l.name }));
                    }
                }
                return e.content;
            case T.lAJ.GUILD_INCIDENT_ALERT_MODE_ENABLED:
                var w = e.content;
                let M = h.A.getChannel(I);
                if (null == M) return null;
                let P = E.A.getGuild(M.getGuildId());
                return null == P
                    ? null
                    : (0, s.$)(
                          S.intl.formatToParts(S.t.iOuWPk, {
                              username: y,
                              guildName: P.name,
                              time:
                                  "" !== w
                                      ? new Date(w).toLocaleString(S.intl.currentLocale, {
                                            hour: "numeric",
                                            minute: "2-digit",
                                        })
                                      : "",
                          }),
                      );
            case T.lAJ.GUILD_INCIDENT_ALERT_MODE_DISABLED:
                let x = h.A.getChannel(I);
                if (null == x) return null;
                let k = E.A.getGuild(x.getGuildId());
                return null == k
                    ? null
                    : (0, s.$)(S.intl.formatToParts(S.t.axmbpm, { username: y, guildName: k.name }));
            default:
                return e.content;
        }
    },
    getSystemMessageUserJoin: function (e) {
        let t = [
                S.t["0cuj7l"],
                S.t["MuW+CN"],
                S.t.osqpHX,
                S.t["5ToSh2"],
                S.t.JEB8ps,
                S.t.pkOV5T,
                S.t["kRb1J+"],
                S.t["EmKLY+"],
                S.t.rPtBnb,
                S.t["5B/ekS"],
                S.t.ESNC3Y,
                S.t.Iw6d8w,
                S.t["WecSZ/"],
            ],
            n = I.default.extractTimestamp(e) % t.length;
        return t[n];
    },
    getSystemMessageUserJoinMobile: N,
    getSystemMessageBotJoin: function (e) {
        return null == y[e] ? null : S.intl.format(S.t.xw1Ij0, { learnOnClick: { onClick: () => window.open(y[e]) } });
    },
};
