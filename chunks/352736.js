n.d(t, { Z: () => w }), n(388685);
var r = n(721355),
    i = n(320285),
    a = n(25209),
    o = n(97797),
    s = n(35125),
    l = n(786761),
    c = n(739566),
    u = n(499401),
    d = n(693912),
    f = n(23750),
    _ = n(314897),
    p = n(592125),
    h = n(430824),
    m = n(594174),
    g = n(5192),
    E = n(709054),
    b = n(981631),
    y = n(388032);
let O = {
        "234395307759108106": "https://groovy.bot/commands",
        "365975655608745985": "https://www.pokecord.com/getting-started",
        512412940897484800: "http://jameslantz.net/smilebot",
    },
    v = () => [
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
    I = () => [
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
function T(e) {
    let t = I(),
        n = E.default.extractTimestamp(e) % t.length;
    return t[n];
}
function S(e) {
    var t;
    let n = p.Z.getChannel(e.channel_id),
        r = null == n ? null : h.Z.getGuild(n.getGuildId());
    return (0, a.Rp)(
        y.intl.formatToParts(y.t.PJsjbP, {
            emoji: e.content,
            guildName: null != (t = null == r ? void 0 : r.name) ? t : y.intl.string(y.t.dtwqPR),
        }),
    );
}
function A(e) {
    return (0, a.Rp)(
        y.intl.formatToParts(y.t.ihxM9x, {
            username: e,
            usernameOnClick: b.dG4,
        }),
    );
}
function C(e, t) {
    let n = p.Z.getChannel(t);
    return null == n || null == h.Z.getGuild(n.getGuildId())
        ? A(e)
        : (0, a.Rp)(
              y.intl.formatToParts(y.t.ihxM9x, {
                  username: e,
                  usernameOnClick: b.dG4,
              }),
          );
}
function N(e, t, n) {
    let r = p.Z.getChannel(t);
    if (null == r) return null;
    let i = h.Z.getGuild(r.getGuildId());
    return null == i
        ? null
        : (0, a.Rp)(
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
    let n = p.Z.getChannel(t);
    if (null == n) return null;
    let r = h.Z.getGuild(n.getGuildId());
    return null == r
        ? null
        : (0, a.Rp)(
              y.intl.formatToParts(y.t.axmbpm, {
                  username: e,
                  guildName: r.name,
              }),
          );
}
function P(e, t) {
    let n = p.Z.getChannel(e);
    if (null == n) return null;
    let r = h.Z.getGuild(n.getGuildId());
    if (null == r) return null;
    switch (t) {
        case i.p.ACTIVITY_ALERTS_ENABLED:
            return (0, a.Rp)(y.intl.formatToParts(y.t.wt3ZUM, { guildName: r.name }));
        case i.p.INTERACTION_BLOCKED:
            return (0, a.Rp)(y.intl.formatToParts(y.t.AkqI0g, { guildName: r.name }));
        default:
            return (0, a.Rp)(y.intl.formatToParts(y.t["a+lJKl"], { guildName: r.name }));
    }
}
function D(e) {
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
let w = {
    stringify: function (e, t) {
        var n, i, p, h;
        let m = D(e),
            E = e.channel_id,
            O = g.ZP.getName(null, E, e.author);
        switch (e.type) {
            case b.uaV.RECIPIENT_ADD:
                if (null == m) return;
                return (0, a.Rp)(
                    y.intl.formatToParts(y.t["7/Xl0S"], {
                        username: O,
                        usernameOnClick: b.dG4,
                        otherUsername: g.ZP.getName(null, E, m),
                        otherUsernameOnClick: b.dG4,
                    }),
                );
            case b.uaV.RECIPIENT_REMOVE:
                if (null == m) return;
                let v = e.author;
                if (null == v || v.id === m.id)
                    return (0, a.Rp)(
                        y.intl.formatToParts(y.t["Qn5+Lf"], {
                            username: O,
                            usernameOnClick: b.dG4,
                        }),
                    );
                return (0, a.Rp)(
                    y.intl.formatToParts(y.t.QtZ0RD, {
                        username: O,
                        usernameOnClick: b.dG4,
                        otherUsername: g.ZP.getName(null, E, m),
                        otherUsernameOnClick: b.dG4,
                    }),
                );
            case b.uaV.CALL:
                let { call: I } = e;
                if (null != I && -1 === I.participants.indexOf(_.default.getId()))
                    return (0, a.Rp)(
                        y.intl.formatToParts(y.t.DbgSA0, {
                            username: O,
                            usernameOnClick: b.dG4,
                        }),
                    );
                return;
            case b.uaV.CHANNEL_NAME_CHANGE:
                return (0, a.Rp)(
                    y.intl.formatToParts(t.isForumPost() ? y.t["qa0e/n"] : y.t.XCPMEG, {
                        username: O,
                        usernameOnClick: b.dG4,
                        channelName: e.content,
                    }),
                );
            case b.uaV.CHANNEL_ICON_CHANGE:
                return (0, a.Rp)(
                    y.intl.formatToParts(y.t.wypJZ0, {
                        username: O,
                        usernameOnClick: b.dG4,
                    }),
                );
            case b.uaV.CHANNEL_PINNED_MESSAGE:
                return (0, a.Rp)(
                    y.intl.formatToParts(y.t["/M60j0"], {
                        username: O,
                        usernameOnClick: b.dG4,
                    }),
                );
            case b.uaV.USER_JOIN:
                return (0, a.Rp)(
                    y.intl.formatToParts(T(e.id), {
                        username: O,
                        usernameOnClick: b.dG4,
                    }),
                );
            case b.uaV.EMOJI_ADDED:
                return S(e);
            case b.uaV.GUILD_BOOST:
                return A(O);
            case b.uaV.GUILD_BOOST_TIER_1:
            case b.uaV.GUILD_BOOST_TIER_2:
            case b.uaV.GUILD_BOOST_TIER_3:
                return C(O, E);
            case b.uaV.GUILD_INVITE_REMINDER:
                return y.intl.string(y.t.gxyKvr);
            case b.uaV.THREAD_STARTER_MESSAGE:
                return y.intl.formatToPlainString(y.t["B8H+Cl"], {
                    username: O,
                    threadName: t.name,
                });
            case b.uaV.ROLE_SUBSCRIPTION_PURCHASE:
                if (e instanceof f.ZP) return null;
                return (0, a.Rp)(
                    (0, s.vp)({
                        username: O,
                        guildId: t.guild_id,
                        roleSubscriptionData: e.role_subscription_data,
                    }),
                );
            case b.uaV.PURCHASE_NOTIFICATION:
                if (
                    e instanceof f.ZP ||
                    (null == (i = e.purchase_notification) || null == (n = i.guild_product_purchase)
                        ? void 0
                        : n.product_name) == null
                )
                    return null;
                return (0, a.Rp)(
                    (0, o.i)({
                        username: O,
                        productName: e.purchase_notification.guild_product_purchase.product_name,
                    }),
                );
            case b.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                if (e instanceof f.ZP) return null;
                let w = (0, c.ZH)((0, l.e5)(e));
                return (0, a.Rp)(
                    (0, u.Y)({
                        application: e.application,
                        username: w.nick,
                    }),
                );
            case b.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
                if (e instanceof f.ZP) return null;
                return (0, a.Rp)(
                    (0, d.B2)({
                        application: e.application,
                        username: (0, c.ZH)((0, l.e5)(e)).nick,
                    }),
                );
            case b.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
                if (e instanceof f.ZP) return null;
                return (0, a.Rp)(
                    (0, d.hj)({
                        application: e.application,
                        username: (0, c.ZH)((0, l.e5)(e)).nick,
                    }),
                );
            case b.uaV.AUTO_MODERATION_ACTION:
                if (
                    null == (p = e.embeds)
                        ? void 0
                        : p.some((e) => {
                              let { type: t } = e;
                              return t === b.hBH.AUTO_MODERATION_NOTIFICATION;
                          })
                ) {
                    let t = e.embeds.find((e) => {
                            let { type: t } = e;
                            return t === b.hBH.AUTO_MODERATION_NOTIFICATION;
                        }),
                        n =
                            null == t || null == (h = t.fields)
                                ? void 0
                                : h.find((e) => "name" in e && e.name === r.D.NOTIFICATION_TYPE);
                    return P(E, null != n && "value" in n ? n.value : void 0);
                }
                return e.content;
            case b.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
                return N(O, E, e.content);
            case b.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
                return R(O, E);
            default:
                return e.content;
        }
    },
    getSystemMessageUserJoin: function (e) {
        let t = v(),
            n = E.default.extractTimestamp(e) % t.length;
        return t[n];
    },
    getSystemMessageUserJoinMobile: T,
    getSystemMessageBotJoin: function (e) {
        return null == O[e] ? null : y.intl.format(y.t.xw1Ij0, { learnOnClick: { onClick: () => window.open(O[e]) } });
    },
};
