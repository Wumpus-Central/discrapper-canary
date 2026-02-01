n.d(t, {
    A: () => D,
}),
    n(896048);
var r = n(385244),
    i = n(718564),
    a = n(436857),
    o = n(494576),
    s = n(942075),
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
    y = n(652215),
    b = n(985018);
let O = {
        "234395307759108106": "https://groovy.bot/commands",
        "365975655608745985": "https://www.pokecord.com/getting-started",
        512412940897484800: "http://jameslantz.net/smilebot",
    },
    v = () => [
        b.t["0cuj7l"],
        b.t["MuW+CN"],
        b.t.osqpHX,
        b.t["5ToSh2"],
        b.t.JEB8ps,
        b.t.pkOV5T,
        b.t["kRb1J+"],
        b.t["EmKLY+"],
        b.t.rPtBnb,
        b.t["5B/ekS"],
        b.t.ESNC3Y,
        b.t.Iw6d8w,
        b.t["WecSZ/"],
    ],
    A = () => [
        b.t.Jm6e0x,
        b.t.MGRnRT,
        b.t.EXOEGh,
        b.t["5uCTFN"],
        b.t.rl45Qo,
        b.t.Bh9zpQ,
        b.t.RdEy1J,
        b.t.qcdp00,
        b.t.F7w2Ru,
        b.t.gSyOgK,
        b.t.uYgqv7,
        b.t["b/1SBX"],
        b.t.LhebZF,
    ];

function I(e) {
    let t = A(),
        n = E.default.extractTimestamp(e) % t.length;
    return t[n];
}

function S(e) {
    var t;
    let n = _.A.getChannel(e.channel_id),
        r = null == n ? null : h.A.getGuild(n.getGuildId());
    return (0, a.$)(
        b.intl.formatToParts(b.t.PJsjbP, {
            emoji: e.content,
            guildName: null != (t = null == r ? void 0 : r.name) ? t : b.intl.string(b.t.dtwqPR),
        }),
    );
}

function T(e) {
    return (0, a.$)(
        b.intl.formatToParts(b.t.ihxM9x, {
            username: e,
            usernameOnClick: y.tEg,
        }),
    );
}

function C(e, t) {
    let n = _.A.getChannel(t);
    return null == n || null == h.A.getGuild(n.getGuildId())
        ? T(e)
        : (0, a.$)(
              b.intl.formatToParts(b.t.ihxM9x, {
                  username: e,
                  usernameOnClick: y.tEg,
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
              b.intl.formatToParts(b.t.iOuWPk, {
                  username: e,
                  guildName: i.name,
                  time:
                      "" !== n
                          ? new Date(n).toLocaleString(b.intl.currentLocale, {
                                hour: "numeric",
                                minute: "2-digit",
                            })
                          : "",
              }),
          );
}

function w(e, t) {
    let n = _.A.getChannel(t);
    if (null == n) return null;
    let r = h.A.getGuild(n.getGuildId());
    return null == r
        ? null
        : (0, a.$)(
              b.intl.formatToParts(b.t.axmbpm, {
                  username: e,
                  guildName: r.name,
              }),
          );
}

function R(e, t) {
    let n = _.A.getChannel(e);
    if (null == n) return null;
    let r = h.A.getGuild(n.getGuildId());
    if (null == r) return null;
    switch (t) {
        case i.W.ACTIVITY_ALERTS_ENABLED:
            return (0, a.$)(
                b.intl.formatToParts(b.t.wt3ZUM, {
                    guildName: r.name,
                }),
            );
        case i.W.INTERACTION_BLOCKED:
            return (0, a.$)(
                b.intl.formatToParts(b.t.AkqI0g, {
                    guildName: r.name,
                }),
            );
        default:
            return (0, a.$)(
                b.intl.formatToParts(b.t["a+lJKl"], {
                    guildName: r.name,
                }),
            );
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
            case y.lAJ.RECIPIENT_ADD:
                if (null == m) return;
                return (0, a.$)(
                    b.intl.formatToParts(b.t["7/Xl0S"], {
                        username: O,
                        usernameOnClick: y.tEg,
                        otherUsername: g.Ay.getName(null, E, m),
                        otherUsernameOnClick: y.tEg,
                    }),
                );
            case y.lAJ.RECIPIENT_REMOVE:
                if (null == m) return;
                let v = e.author;
                if (null == v || v.id === m.id)
                    return (0, a.$)(
                        b.intl.formatToParts(b.t["Qn5+Lf"], {
                            username: O,
                            usernameOnClick: y.tEg,
                        }),
                    );
                return (0, a.$)(
                    b.intl.formatToParts(b.t.QtZ0RD, {
                        username: O,
                        usernameOnClick: y.tEg,
                        otherUsername: g.Ay.getName(null, E, m),
                        otherUsernameOnClick: y.tEg,
                    }),
                );
            case y.lAJ.CALL:
                let { call: A } = e;
                if (null != A && -1 === A.participants.indexOf(p.default.getId()))
                    return (0, a.$)(
                        b.intl.formatToParts(b.t.DbgSA0, {
                            username: O,
                            usernameOnClick: y.tEg,
                        }),
                    );
                return;
            case y.lAJ.CHANNEL_NAME_CHANGE:
                return (0, a.$)(
                    b.intl.formatToParts(t.isForumPost() ? b.t["qa0e/n"] : b.t.XCPMEG, {
                        username: O,
                        usernameOnClick: y.tEg,
                        channelName: e.content,
                    }),
                );
            case y.lAJ.CHANNEL_ICON_CHANGE:
                return (0, a.$)(
                    b.intl.formatToParts(b.t.wypJZ0, {
                        username: O,
                        usernameOnClick: y.tEg,
                    }),
                );
            case y.lAJ.CHANNEL_PINNED_MESSAGE:
                return (0, a.$)(
                    b.intl.formatToParts(b.t["/M60j0"], {
                        username: O,
                        usernameOnClick: y.tEg,
                    }),
                );
            case y.lAJ.USER_JOIN:
                return (0, a.$)(
                    b.intl.formatToParts(I(e.id), {
                        username: O,
                        usernameOnClick: y.tEg,
                    }),
                );
            case y.lAJ.EMOJI_ADDED:
                return S(e);
            case y.lAJ.GUILD_BOOST:
                return T(O);
            case y.lAJ.GUILD_BOOST_TIER_1:
            case y.lAJ.GUILD_BOOST_TIER_2:
            case y.lAJ.GUILD_BOOST_TIER_3:
                return C(O, E);
            case y.lAJ.GUILD_INVITE_REMINDER:
                return b.intl.string(b.t.gxyKvr);
            case y.lAJ.THREAD_STARTER_MESSAGE:
                return b.intl.formatToPlainString(b.t["B8H+Cl"], {
                    username: O,
                    threadName: t.name,
                });
            case y.lAJ.ROLE_SUBSCRIPTION_PURCHASE:
                if (e instanceof f.Ay) return null;
                return (0, a.$)(
                    (0, s.eb)({
                        username: O,
                        guildId: t.guild_id,
                        roleSubscriptionData: e.role_subscription_data,
                    }),
                );
            case y.lAJ.PURCHASE_NOTIFICATION:
                if (
                    e instanceof f.Ay ||
                    (null == (i = e.purchase_notification) || null == (n = i.guild_product_purchase)
                        ? void 0
                        : n.product_name) == null
                )
                    return null;
                return (0, a.$)(
                    (0, o.z)({
                        username: O,
                        productName: e.purchase_notification.guild_product_purchase.product_name,
                    }),
                );
            case y.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                if (e instanceof f.Ay) return null;
                let D = (0, c.p_)((0, l.rh)(e));
                return (0, a.$)(
                    (0, u.P)({
                        application: e.application,
                        username: D.nick,
                    }),
                );
            case y.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED:
                if (e instanceof f.Ay) return null;
                return (0, a.$)(
                    (0, d.g6)({
                        application: e.application,
                        username: (0, c.p_)((0, l.rh)(e)).nick,
                    }),
                );
            case y.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
                if (e instanceof f.Ay) return null;
                return (0, a.$)(
                    (0, d.uk)({
                        application: e.application,
                        username: (0, c.p_)((0, l.rh)(e)).nick,
                    }),
                );
            case y.lAJ.AUTO_MODERATION_ACTION:
                if (
                    null == (_ = e.embeds)
                        ? void 0
                        : _.some((e) => {
                              let { type: t } = e;
                              return t === y.Auw.AUTO_MODERATION_NOTIFICATION;
                          })
                ) {
                    let t = e.embeds.find((e) => {
                            let { type: t } = e;
                            return t === y.Auw.AUTO_MODERATION_NOTIFICATION;
                        }),
                        n =
                            null == t || null == (h = t.fields)
                                ? void 0
                                : h.find((e) => "name" in e && e.name === r.E.NOTIFICATION_TYPE);
                    return R(E, null != n && "value" in n ? n.value : void 0);
                }
                return e.content;
            case y.lAJ.GUILD_INCIDENT_ALERT_MODE_ENABLED:
                return N(O, E, e.content);
            case y.lAJ.GUILD_INCIDENT_ALERT_MODE_DISABLED:
                return w(O, E);
            default:
                return e.content;
        }
    },
    getSystemMessageUserJoin: function (e) {
        let t = v(),
            n = E.default.extractTimestamp(e) % t.length;
        return t[n];
    },
    getSystemMessageUserJoinMobile: I,
    getSystemMessageBotJoin: function (e) {
        return null == O[e]
            ? null
            : b.intl.format(b.t.xw1Ij0, {
                  learnOnClick: {
                      onClick: () => window.open(O[e]),
                  },
              });
    },
};
