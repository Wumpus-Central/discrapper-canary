n.d(t, { Z: () => g }), n(388685);
var r = n(721355),
    i = n(320285),
    l = n(25209),
    a = n(97797),
    o = n(35125),
    c = n(786761),
    s = n(739566),
    u = n(499401),
    d = n(693912),
    _ = n(23750),
    E = n(314897),
    I = n(592125),
    T = n(430824),
    O = n(594174),
    p = n(5192),
    N = n(709054),
    f = n(981631),
    S = n(388032);
let m = {
    "234395307759108106": "https://groovy.bot/commands",
    "365975655608745985": "https://www.pokecord.com/getting-started",
    512412940897484800: "http://jameslantz.net/smilebot",
};
function R(e) {
    let t = [
            S.t.Jm6e09,
            S.t.MGRnRU,
            S.t.EXOEGh,
            S.t["5uCTFB"],
            S.t.rl45Qk,
            S.t.Bh9zpa,
            S.t.RdEy1N,
            S.t.qcdp09,
            S.t.F7w2Rk,
            S.t.gSyOgI,
            S.t.uYgqv7,
            S.t["b/1SBQ"],
            S.t.LhebZG,
        ],
        n = N.default.extractTimestamp(e) % t.length;
    return t[n];
}
function A(e) {
    return (0, l.Rp)(
        S.intl.formatToParts(S.t["ihxM9/"], {
            username: e,
            usernameOnClick: f.dG4,
        }),
    );
}
let g = {
    stringify: function (e, t) {
        var n, N, m, g;
        let P = (function (e) {
                var t, n, r;
                let [i] = null != (t = e.mentions) ? t : [];
                return null == i
                    ? null
                    : "object" == typeof i
                      ? null != (n = O.default.getUser(i.id))
                          ? n
                          : null
                      : "string" == typeof i && null != (r = O.default.getUser(i))
                        ? r
                        : null;
            })(e),
            C = e.channel_id,
            D = p.ZP.getName(null, C, e.author);
        switch (e.type) {
            case f.uaV.RECIPIENT_ADD:
                if (null == P) return;
                return (0, l.Rp)(
                    S.intl.formatToParts(S.t["7/Xl0d"], {
                        username: D,
                        usernameOnClick: f.dG4,
                        otherUsername: p.ZP.getName(null, C, P),
                        otherUsernameOnClick: f.dG4,
                    }),
                );
            case f.uaV.RECIPIENT_REMOVE:
                if (null == P) return;
                let y = e.author;
                if (null == y || y.id === P.id)
                    return (0, l.Rp)(
                        S.intl.formatToParts(S.t["Qn5+LS"], {
                            username: D,
                            usernameOnClick: f.dG4,
                        }),
                    );
                return (0, l.Rp)(
                    S.intl.formatToParts(S.t.QtZ0RE, {
                        username: D,
                        usernameOnClick: f.dG4,
                        otherUsername: p.ZP.getName(null, C, P),
                        otherUsernameOnClick: f.dG4,
                    }),
                );
            case f.uaV.CALL:
                let { call: h } = e;
                if (null != h && -1 === h.participants.indexOf(E.default.getId()))
                    return (0, l.Rp)(
                        S.intl.formatToParts(S.t.DbgSAw, {
                            username: D,
                            usernameOnClick: f.dG4,
                        }),
                    );
                return;
            case f.uaV.CHANNEL_NAME_CHANGE:
                return (0, l.Rp)(
                    S.intl.formatToParts(t.isForumPost() ? S.t["qa0e/v"] : S.t.XCPMEB, {
                        username: D,
                        usernameOnClick: f.dG4,
                        channelName: e.content,
                    }),
                );
            case f.uaV.CHANNEL_ICON_CHANGE:
                return (0, l.Rp)(
                    S.intl.formatToParts(S.t.wypJZ2, {
                        username: D,
                        usernameOnClick: f.dG4,
                    }),
                );
            case f.uaV.CHANNEL_PINNED_MESSAGE:
                return (0, l.Rp)(
                    S.intl.formatToParts(S.t["/M60j4"], {
                        username: D,
                        usernameOnClick: f.dG4,
                    }),
                );
            case f.uaV.USER_JOIN:
                return (0, l.Rp)(
                    S.intl.formatToParts(R(e.id), {
                        username: D,
                        usernameOnClick: f.dG4,
                    }),
                );
            case f.uaV.GUILD_BOOST:
                return A(D);
            case f.uaV.GUILD_BOOST_TIER_1:
            case f.uaV.GUILD_BOOST_TIER_2:
            case f.uaV.GUILD_BOOST_TIER_3:
                let b = I.Z.getChannel(C);
                return null == b || null == T.Z.getGuild(b.getGuildId())
                    ? A(D)
                    : (0, l.Rp)(
                          S.intl.formatToParts(S.t["ihxM9/"], {
                              username: D,
                              usernameOnClick: f.dG4,
                          }),
                      );
            case f.uaV.GUILD_INVITE_REMINDER:
                return S.intl.string(S.t.gxyKvr);
            case f.uaV.THREAD_STARTER_MESSAGE:
                return S.intl.formatToPlainString(S.t["B8H+Cg"], {
                    username: D,
                    threadName: t.name,
                });
            case f.uaV.ROLE_SUBSCRIPTION_PURCHASE:
                if (e instanceof _.ZP) return null;
                return (0, l.Rp)(
                    (0, o.vp)({
                        username: D,
                        guildId: t.guild_id,
                        roleSubscriptionData: e.role_subscription_data,
                    }),
                );
            case f.uaV.PURCHASE_NOTIFICATION:
                if (
                    e instanceof _.ZP ||
                    (null == (N = e.purchase_notification) || null == (n = N.guild_product_purchase)
                        ? void 0
                        : n.product_name) == null
                )
                    return null;
                return (0, l.Rp)(
                    (0, a.i)({
                        username: D,
                        productName: e.purchase_notification.guild_product_purchase.product_name,
                    }),
                );
            case f.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                if (e instanceof _.ZP) return null;
                let U = (0, s.ZH)((0, c.e5)(e));
                return (0, l.Rp)(
                    (0, u.Y)({
                        application: e.application,
                        username: U.nick,
                    }),
                );
            case f.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
                if (e instanceof _.ZP) return null;
                return (0, l.Rp)(
                    (0, d.B2)({
                        application: e.application,
                        username: (0, s.ZH)((0, c.e5)(e)).nick,
                    }),
                );
            case f.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
                if (e instanceof _.ZP) return null;
                return (0, l.Rp)(
                    (0, d.hj)({
                        application: e.application,
                        username: (0, s.ZH)((0, c.e5)(e)).nick,
                    }),
                );
            case f.uaV.AUTO_MODERATION_ACTION:
                if (
                    null == (m = e.embeds)
                        ? void 0
                        : m.some((e) => {
                              let { type: t } = e;
                              return t === f.hBH.AUTO_MODERATION_NOTIFICATION;
                          })
                ) {
                    let t = e.embeds.find((e) => {
                            let { type: t } = e;
                            return t === f.hBH.AUTO_MODERATION_NOTIFICATION;
                        }),
                        n =
                            null == t || null == (g = t.fields)
                                ? void 0
                                : g.find((e) => "name" in e && e.name === r.D.NOTIFICATION_TYPE),
                        a = null != n && "value" in n ? n.value : void 0,
                        o = I.Z.getChannel(C);
                    if (null == o) return null;
                    let c = T.Z.getGuild(o.getGuildId());
                    if (null == c) return null;
                    switch (a) {
                        case i.p.ACTIVITY_ALERTS_ENABLED:
                            return (0, l.Rp)(S.intl.formatToParts(S.t.wt3ZUF, { guildName: c.name }));
                        case i.p.INTERACTION_BLOCKED:
                            return (0, l.Rp)(S.intl.formatToParts(S.t.AkqI0t, { guildName: c.name }));
                        default:
                            return (0, l.Rp)(S.intl.formatToParts(S.t["a+lJKi"], { guildName: c.name }));
                    }
                }
                return e.content;
            case f.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
                var M = e.content;
                let v = I.Z.getChannel(C);
                if (null == v) return null;
                let Z = T.Z.getGuild(v.getGuildId());
                return null == Z
                    ? null
                    : (0, l.Rp)(
                          S.intl.formatToParts(S.t.iOuWPj, {
                              username: D,
                              guildName: Z.name,
                              time:
                                  "" !== M
                                      ? new Date(M).toLocaleString(S.intl.currentLocale, {
                                            hour: "numeric",
                                            minute: "2-digit",
                                        })
                                      : "",
                          }),
                      );
            case f.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
                let L = I.Z.getChannel(C);
                if (null == L) return null;
                let k = T.Z.getGuild(L.getGuildId());
                return null == k
                    ? null
                    : (0, l.Rp)(
                          S.intl.formatToParts(S.t.axmbpq, {
                              username: D,
                              guildName: k.name,
                          }),
                      );
            default:
                return e.content;
        }
    },
    getSystemMessageUserJoin: function (e) {
        let t = [
                S.t["0cuj7u"],
                S.t["MuW+CA"],
                S.t.osqpHR,
                S.t["5ToSh4"],
                S.t.JEB8pq,
                S.t.pkOV5e,
                S.t.kRb1Jy,
                S.t.EmKLY2,
                S.t.rPtBnZ,
                S.t["5B/ekZ"],
                S.t.ESNC3d,
                S.t["Iw6d8/"],
                S.t.WecSZ2,
            ],
            n = N.default.extractTimestamp(e) % t.length;
        return t[n];
    },
    getSystemMessageUserJoinMobile: R,
    getSystemMessageBotJoin: function (e) {
        return null == m[e] ? null : S.intl.format(S.t.xw1Ij4, { learnOnClick: { onClick: () => window.open(m[e]) } });
    },
};
