n.d(t, { A: () => D }), n(896048);
var r = n(385244),
    i = n(718564),
    a = n(436857),
    s = n(494576),
    o = n(942075),
    l = n(141468),
    c = n(763754),
    u = n(808829),
    d = n(552691),
    f = n(383233),
    p = n(961350),
    _ = n(734057),
    h = n(71393),
    m = n(287809),
    g = n(562153),
    E = n(661191),
    b = n(652215),
    y = n(985018);
let O = {
        "234395307759108106": "https://groovy.bot/commands",
        "365975655608745985": "https://www.pokecord.com/getting-started",
        512412940897484800: "http://jameslantz.net/smilebot",
    },
    A = () => [
        y.t["0cuj7l"],
        y.t["MuW+CN"],
        y.t.osqpHX,
        y.t["5ToSh2"],
        y.t.JEB8ps,
        y.t.pkOV5T,
        y.t["kRb1J+"],
        y.t["EmKLY+"],
        y.t.rPtBnb,
        y.t["5B/ekS"],
        y.t.ESNC3Y,
        y.t.Iw6d8w,
        y.t["WecSZ/"],
    ],
    v = () => [
        y.t.Jm6e0x,
        y.t.MGRnRT,
        y.t.EXOEGh,
        y.t["5uCTFN"],
        y.t.rl45Qo,
        y.t.Bh9zpQ,
        y.t.RdEy1J,
        y.t.qcdp00,
        y.t.F7w2Ru,
        y.t.gSyOgK,
        y.t.uYgqv7,
        y.t["b/1SBX"],
        y.t.LhebZF,
    ];
function S(e) {
    let t = v(),
        n = E.default.extractTimestamp(e) % t.length;
    return t[n];
}
function I(e) {
    var t;
    let n = _.A.getChannel(e.channel_id),
        r = null == n ? null : h.A.getGuild(n.getGuildId());
    return (0, a.$)(
        y.intl.formatToParts(y.t.PJsjbP, {
            emoji: e.content,
            guildName: null != (t = null == r ? void 0 : r.name) ? t : y.intl.string(y.t.dtwqPR),
        }),
    );
}
function T(e) {
    return (0, a.$)(
        y.intl.formatToParts(y.t.ihxM9x, {
            username: e,
            usernameOnClick: b.tEg,
        }),
    );
}
function C(e, t) {
    let n = _.A.getChannel(t);
    return null == n || null == h.A.getGuild(n.getGuildId())
        ? T(e)
        : (0, a.$)(
              y.intl.formatToParts(y.t.ihxM9x, {
                  username: e,
                  usernameOnClick: b.tEg,
              }),
          );
}
function N(e, t, n) {
    let r = _.A.getChannel(t);
    if (null == r) return null;
    let i = h.A.getGuild(r.getGuildId());
    return null == i
        ? null
        : (0, a.$)(
              y.intl.formatToParts(y.t.iOuWPk, {
                  username: e,
                  guildName: i.name,
                  time:
                      "" !== n
                          ? new Date(n).toLocaleString(y.intl.currentLocale, {
                                hour: "numeric",
                                minute: "2-digit",
                            })
                          : "",
              }),
          );
}
function R(e, t) {
    let n = _.A.getChannel(t);
    if (null == n) return null;
    let r = h.A.getGuild(n.getGuildId());
    return null == r
        ? null
        : (0, a.$)(
              y.intl.formatToParts(y.t.axmbpm, {
                  username: e,
                  guildName: r.name,
              }),
          );
}
function w(e, t) {
    let n = _.A.getChannel(e);
    if (null == n) return null;
    let r = h.A.getGuild(n.getGuildId());
    if (null == r) return null;
    switch (t) {
        case i.W.ACTIVITY_ALERTS_ENABLED:
            return (0, a.$)(y.intl.formatToParts(y.t.wt3ZUM, { guildName: r.name }));
        case i.W.INTERACTION_BLOCKED:
            return (0, a.$)(y.intl.formatToParts(y.t.AkqI0g, { guildName: r.name }));
        default:
            return (0, a.$)(y.intl.formatToParts(y.t["a+lJKl"], { guildName: r.name }));
    }
}
function P(e) {
    var t, n, r;
    let [i] = null != (t = e.mentions) ? t : [];
    return null == i
        ? null
        : "object" == typeof i
          ? null != (n = m.default.getUser(i.id))
              ? n
              : null
          : "string" == typeof i && null != (r = m.default.getUser(i))
            ? r
            : null;
}
let D = {
    stringify: function (e, t) {
        var n, i, _, h;
        let m = P(e),
            E = e.channel_id,
            O = g.Ay.getName(null, E, e.author);
        switch (e.type) {
            case b.lAJ.RECIPIENT_ADD:
                if (null == m) return;
                return (0, a.$)(
                    y.intl.formatToParts(y.t["7/Xl0S"], {
                        username: O,
                        usernameOnClick: b.tEg,
                        otherUsername: g.Ay.getName(null, E, m),
                        otherUsernameOnClick: b.tEg,
                    }),
                );
            case b.lAJ.RECIPIENT_REMOVE:
                if (null == m) return;
                let A = e.author;
                if (null == A || A.id === m.id)
                    return (0, a.$)(
                        y.intl.formatToParts(y.t["Qn5+Lf"], {
                            username: O,
                            usernameOnClick: b.tEg,
                        }),
                    );
                return (0, a.$)(
                    y.intl.formatToParts(y.t.QtZ0RD, {
                        username: O,
                        usernameOnClick: b.tEg,
                        otherUsername: g.Ay.getName(null, E, m),
                        otherUsernameOnClick: b.tEg,
                    }),
                );
            case b.lAJ.CALL:
                let { call: v } = e;
                if (null != v && -1 === v.participants.indexOf(p.default.getId()))
                    return (0, a.$)(
                        y.intl.formatToParts(y.t.DbgSA0, {
                            username: O,
                            usernameOnClick: b.tEg,
                        }),
                    );
                return;
            case b.lAJ.CHANNEL_NAME_CHANGE:
                return (0, a.$)(
                    y.intl.formatToParts(t.isForumPost() ? y.t["qa0e/n"] : y.t.XCPMEG, {
                        username: O,
                        usernameOnClick: b.tEg,
                        channelName: e.content,
                    }),
                );
            case b.lAJ.CHANNEL_ICON_CHANGE:
                return (0, a.$)(
                    y.intl.formatToParts(y.t.wypJZ0, {
                        username: O,
                        usernameOnClick: b.tEg,
                    }),
                );
            case b.lAJ.CHANNEL_PINNED_MESSAGE:
                return (0, a.$)(
                    y.intl.formatToParts(y.t["/M60j0"], {
                        username: O,
                        usernameOnClick: b.tEg,
                    }),
                );
            case b.lAJ.USER_JOIN:
                return (0, a.$)(
                    y.intl.formatToParts(S(e.id), {
                        username: O,
                        usernameOnClick: b.tEg,
                    }),
                );
            case b.lAJ.EMOJI_ADDED:
                return I(e);
            case b.lAJ.GUILD_BOOST:
                return T(O);
            case b.lAJ.GUILD_BOOST_TIER_1:
            case b.lAJ.GUILD_BOOST_TIER_2:
            case b.lAJ.GUILD_BOOST_TIER_3:
                return C(O, E);
            case b.lAJ.GUILD_INVITE_REMINDER:
                return y.intl.string(y.t.gxyKvr);
            case b.lAJ.THREAD_STARTER_MESSAGE:
                return y.intl.formatToPlainString(y.t["B8H+Cl"], {
                    username: O,
                    threadName: t.name,
                });
            case b.lAJ.ROLE_SUBSCRIPTION_PURCHASE:
                if (e instanceof f.Ay) return null;
                return (0, a.$)(
                    (0, o.eb)({
                        username: O,
                        guildId: t.guild_id,
                        roleSubscriptionData: e.role_subscription_data,
                    }),
                );
            case b.lAJ.PURCHASE_NOTIFICATION:
                if (
                    e instanceof f.Ay ||
                    (null == (i = e.purchase_notification) || null == (n = i.guild_product_purchase)
                        ? void 0
                        : n.product_name) == null
                )
                    return null;
                return (0, a.$)(
                    (0, s.z)({
                        username: O,
                        productName: e.purchase_notification.guild_product_purchase.product_name,
                    }),
                );
            case b.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                if (e instanceof f.Ay) return null;
                let D = (0, c.p_)((0, l.rh)(e));
                return (0, a.$)(
                    (0, u.P)({
                        application: e.application,
                        username: D.nick,
                    }),
                );
            case b.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED:
                if (e instanceof f.Ay) return null;
                return (0, a.$)(
                    (0, d.g6)({
                        application: e.application,
                        username: (0, c.p_)((0, l.rh)(e)).nick,
                    }),
                );
            case b.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
                if (e instanceof f.Ay) return null;
                return (0, a.$)(
                    (0, d.uk)({
                        application: e.application,
                        username: (0, c.p_)((0, l.rh)(e)).nick,
                    }),
                );
            case b.lAJ.AUTO_MODERATION_ACTION:
                if (
                    null == (_ = e.embeds)
                        ? void 0
                        : _.some((e) => {
                              let { type: t } = e;
                              return t === b.Auw.AUTO_MODERATION_NOTIFICATION;
                          })
                ) {
                    let t = e.embeds.find((e) => {
                            let { type: t } = e;
                            return t === b.Auw.AUTO_MODERATION_NOTIFICATION;
                        }),
                        n =
                            null == t || null == (h = t.fields)
                                ? void 0
                                : h.find((e) => "name" in e && e.name === r.E.NOTIFICATION_TYPE);
                    return w(E, null != n && "value" in n ? n.value : void 0);
                }
                return e.content;
            case b.lAJ.GUILD_INCIDENT_ALERT_MODE_ENABLED:
                return N(O, E, e.content);
            case b.lAJ.GUILD_INCIDENT_ALERT_MODE_DISABLED:
                return R(O, E);
            default:
                return e.content;
        }
    },
    getSystemMessageUserJoin: function (e) {
        let t = A(),
            n = E.default.extractTimestamp(e) % t.length;
        return t[n];
    },
    getSystemMessageUserJoinMobile: S,
    getSystemMessageBotJoin: function (e) {
        return null == O[e] ? null : y.intl.format(y.t.xw1Ij0, { learnOnClick: { onClick: () => window.open(O[e]) } });
    },
};
