(n.d(e, { Z: () => g }), n(388685));
var r = n(25209),
    l = n(97797),
    i = n(35125),
    a = n(786761),
    u = n(739566),
    o = n(499401),
    s = n(693912),
    c = n(23750),
    m = n(314897),
    d = n(592125),
    f = n(430824),
    N = n(594174),
    _ = n(5192),
    p = n(709054),
    T = n(981631),
    E = n(388032);
let h = {
        '234395307759108106': 'https://groovy.bot/commands',
        '365975655608745985': 'https://www.pokecord.com/getting-started',
        512412940897484800: 'http://jameslantz.net/smilebot'
    },
    C = () => [E.t['0cuj7u'], E.t['MuW+CA'], E.t.osqpHR, E.t['5ToSh4'], E.t.JEB8pq, E.t.pkOV5e, E.t.kRb1Jy, E.t.EmKLY2, E.t.rPtBnZ, E.t['5B/ekZ'], E.t.ESNC3d, E.t['Iw6d8/'], E.t.WecSZ2],
    I = () => [E.t.Jm6e09, E.t.MGRnRU, E.t.EXOEGh, E.t['5uCTFB'], E.t.rl45Qk, E.t.Bh9zpa, E.t.RdEy1N, E.t.qcdp09, E.t.F7w2Rk, E.t.gSyOgI, E.t.uYgqv7, E.t['b/1SBQ'], E.t.LhebZG];
function R(t) {
    let e = I(),
        n = p.default.extractTimestamp(t) % e.length;
    return e[n];
}
function A(t) {
    return (0, r.Rp)(
        E.intl.formatToParts(E.t['ihxM9/'], {
            username: t,
            usernameOnClick: T.dG4
        })
    );
}
let g = {
    stringify: function (t, e) {
        var n, p, h;
        let C = (function (t) {
                var e, n, r;
                let [l] = null != (e = t.mentions) ? e : [];
                return null == l ? null : 'object' == typeof l ? (null != (n = N.default.getUser(l.id)) ? n : null) : 'string' == typeof l && null != (r = N.default.getUser(l)) ? r : null;
            })(t),
            I = t.channel_id,
            g = _.ZP.getName(null, I, t.author);
        switch (t.type) {
            case T.uaV.RECIPIENT_ADD:
                if (null == C) return;
                return (0, r.Rp)(
                    E.intl.formatToParts(E.t['7/Xl0d'], {
                        username: g,
                        usernameOnClick: T.dG4,
                        otherUsername: _.ZP.getName(null, I, C),
                        otherUsernameOnClick: T.dG4
                    })
                );
            case T.uaV.RECIPIENT_REMOVE:
                if (null == C) return;
                let P = t.author;
                if (null == P || P.id === C.id)
                    return (0, r.Rp)(
                        E.intl.formatToParts(E.t['Qn5+LS'], {
                            username: g,
                            usernameOnClick: T.dG4
                        })
                    );
                return (0, r.Rp)(
                    E.intl.formatToParts(E.t.QtZ0RE, {
                        username: g,
                        usernameOnClick: T.dG4,
                        otherUsername: _.ZP.getName(null, I, C),
                        otherUsernameOnClick: T.dG4
                    })
                );
            case T.uaV.CALL:
                let { call: O } = t;
                if (null != O && -1 === O.participants.indexOf(m.default.getId()))
                    return (0, r.Rp)(
                        E.intl.formatToParts(E.t.DbgSAw, {
                            username: g,
                            usernameOnClick: T.dG4
                        })
                    );
                return;
            case T.uaV.CHANNEL_NAME_CHANGE:
                return (0, r.Rp)(
                    E.intl.formatToParts(e.isForumPost() ? E.t['qa0e/v'] : E.t.XCPMEB, {
                        username: g,
                        usernameOnClick: T.dG4,
                        channelName: t.content
                    })
                );
            case T.uaV.CHANNEL_ICON_CHANGE:
                return (0, r.Rp)(
                    E.intl.formatToParts(E.t.wypJZ2, {
                        username: g,
                        usernameOnClick: T.dG4
                    })
                );
            case T.uaV.CHANNEL_PINNED_MESSAGE:
                return (0, r.Rp)(
                    E.intl.formatToParts(E.t['/M60j4'], {
                        username: g,
                        usernameOnClick: T.dG4
                    })
                );
            case T.uaV.USER_JOIN:
                return (0, r.Rp)(
                    E.intl.formatToParts(R(t.id), {
                        username: g,
                        usernameOnClick: T.dG4
                    })
                );
            case T.uaV.GUILD_BOOST:
                return A(g);
            case T.uaV.GUILD_BOOST_TIER_1:
            case T.uaV.GUILD_BOOST_TIER_2:
            case T.uaV.GUILD_BOOST_TIER_3:
                let G = d.Z.getChannel(I);
                return null == G || null == f.Z.getGuild(G.getGuildId())
                    ? A(g)
                    : (0, r.Rp)(
                          E.intl.formatToParts(E.t['ihxM9/'], {
                              username: g,
                              usernameOnClick: T.dG4
                          })
                      );
            case T.uaV.GUILD_INVITE_REMINDER:
                return E.intl.string(E.t.gxyKvr);
            case T.uaV.THREAD_STARTER_MESSAGE:
                return E.intl.formatToPlainString(E.t['B8H+Cg'], {
                    username: g,
                    threadName: e.name
                });
            case T.uaV.ROLE_SUBSCRIPTION_PURCHASE:
                if (t instanceof c.ZP) return null;
                return (0, r.Rp)(
                    (0, i.vp)({
                        username: g,
                        guildId: e.guild_id,
                        roleSubscriptionData: t.role_subscription_data
                    })
                );
            case T.uaV.PURCHASE_NOTIFICATION:
                if (t instanceof c.ZP || (null == (p = t.purchase_notification) || null == (n = p.guild_product_purchase) ? void 0 : n.product_name) == null) return null;
                return (0, r.Rp)(
                    (0, l.i)({
                        username: g,
                        productName: t.purchase_notification.guild_product_purchase.product_name
                    })
                );
            case T.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                if (t instanceof c.ZP) return null;
                let L = (0, u.ZH)((0, a.e5)(t));
                return (0, r.Rp)(
                    (0, o.Y)({
                        application: t.application,
                        username: L.nick
                    })
                );
            case T.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
                if (t instanceof c.ZP) return null;
                return (0, r.Rp)(
                    (0, s.B2)({
                        application: t.application,
                        username: (0, u.ZH)((0, a.e5)(t)).nick
                    })
                );
            case T.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
                if (t instanceof c.ZP) return null;
                return (0, r.Rp)(
                    (0, s.hj)({
                        application: t.application,
                        username: (0, u.ZH)((0, a.e5)(t)).nick
                    })
                );
            case T.uaV.AUTO_MODERATION_ACTION:
                if (
                    null == (h = t.embeds)
                        ? void 0
                        : h.some((t) => {
                              let { type: e } = t;
                              return e === T.hBH.AUTO_MODERATION_NOTIFICATION;
                          })
                ) {
                    let t = d.Z.getChannel(I);
                    if (null == t) return null;
                    let e = f.Z.getGuild(t.getGuildId());
                    return null == e ? null : (0, r.Rp)(E.intl.formatToParts(E.t['a+lJKi'], { guildName: e.name }));
                }
                return t.content;
            case T.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
                var S = t.content;
                let k = d.Z.getChannel(I);
                if (null == k) return null;
                let U = f.Z.getGuild(k.getGuildId());
                return null == U
                    ? null
                    : (0, r.Rp)(
                          E.intl.formatToParts(E.t.iOuWPj, {
                              username: g,
                              guildName: U.name,
                              time:
                                  '' !== S
                                      ? new Date(S).toLocaleString(E.intl.currentLocale, {
                                            hour: 'numeric',
                                            minute: '2-digit'
                                        })
                                      : ''
                          })
                      );
            case T.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
                let Z = d.Z.getChannel(I);
                if (null == Z) return null;
                let V = f.Z.getGuild(Z.getGuildId());
                return null == V
                    ? null
                    : (0, r.Rp)(
                          E.intl.formatToParts(E.t.axmbpq, {
                              username: g,
                              guildName: V.name
                          })
                      );
            default:
                return t.content;
        }
    },
    getSystemMessageUserJoin: function (t) {
        let e = C(),
            n = p.default.extractTimestamp(t) % e.length;
        return e[n];
    },
    getSystemMessageUserJoinMobile: R,
    getSystemMessageBotJoin: function (t) {
        return null == h[t] ? null : E.intl.format(E.t.xw1Ij4, { learnOnClick: { onClick: () => window.open(h[t]) } });
    }
};
