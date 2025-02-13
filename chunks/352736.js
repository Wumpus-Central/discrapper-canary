n.d(e, { Z: () => S });
var i = n(25209),
    a = n(97797),
    r = n(35125),
    l = n(786761),
    o = n(739566),
    u = n(499401),
    s = n(693912),
    d = n(23750),
    c = n(314897),
    f = n(592125),
    _ = n(430824),
    p = n(594174),
    h = n(5192),
    E = n(709054),
    m = n(981631),
    N = n(388032);
let I = {
        '234395307759108106': 'https://groovy.bot/commands',
        '365975655608745985': 'https://www.pokecord.com/getting-started',
        512412940897484800: 'http://jameslantz.net/smilebot'
    },
    g = () => [N.t['0cuj7u'], N.t['MuW+CA'], N.t.osqpHR, N.t['5ToSh4'], N.t.JEB8pq, N.t.pkOV5e, N.t.kRb1Jy, N.t.EmKLY2, N.t.rPtBnZ, N.t['5B/ekZ'], N.t.ESNC3d, N.t['Iw6d8/'], N.t.WecSZ2],
    C = () => [N.t.Jm6e09, N.t.MGRnRU, N.t.EXOEGh, N.t['5uCTFB'], N.t.rl45Qk, N.t.Bh9zpa, N.t.RdEy1N, N.t.qcdp09, N.t.F7w2Rk, N.t.gSyOgI, N.t.uYgqv7, N.t['b/1SBQ'], N.t.LhebZG],
    T = () => [N.t['20E/ys'], N.t['oa8+kp'], N.t.zoKkXl, N.t.FP9aS0, N.t.E5Zj1d, N.t['6Anmws'], N.t.sR78HR, N.t.gA9qPz, N.t.Hkiyp6, N.t.w1HMho],
    A = () => [N.t['8fy3DQ'], N.t.UproUV, N.t['7l3EyM'], N.t.GToyaG, N.t['DUs+Zm'], N.t.yLkbfn, N.t.oWdvws, N.t.tOoKTE, N.t['VM7+Oj'], N.t['hJx/u7']],
    v = (t) => {
        switch (t) {
            case 'NORMAL':
            default:
                return g();
            case 'CLAN':
                return T();
        }
    },
    O = (t) => {
        switch (t) {
            case 'NORMAL':
            default:
                return C();
            case 'CLAN':
                return A();
        }
    };
function P(t, e) {
    let n = O(e),
        i = E.default.extractTimestamp(t) % n.length;
    return n[i];
}
function b(t) {
    return (0, i.Rp)(
        N.intl.formatToParts(N.t['ihxM9/'], {
            username: t,
            usernameOnClick: m.dG4
        })
    );
}
function R(t) {
    var e;
    return (null === (e = _.Z.getGuild(t)) || void 0 === e ? void 0 : e.hasFeature(m.oNc.CLAN)) ? 'CLAN' : 'NORMAL';
}
let S = {
    stringify: function (t, e) {
        var n, E, I, g;
        let C = null === (n = t.mentions) || void 0 === n ? void 0 : n[0],
            T = null != C && 'string' != typeof C ? p.default.getUser(C.id) : void 0,
            A = t.channel_id,
            v = h.ZP.getName(null, A, t.author);
        switch (t.type) {
            case m.uaV.RECIPIENT_ADD:
                if (null == T) return;
                return (0, i.Rp)(
                    N.intl.formatToParts(N.t['7/Xl0d'], {
                        username: v,
                        usernameOnClick: m.dG4,
                        otherUsername: h.ZP.getName(null, A, T),
                        otherUsernameOnClick: m.dG4
                    })
                );
            case m.uaV.RECIPIENT_REMOVE:
                if (null == T) return;
                let O = t.author;
                if (null == O || O.id === T.id)
                    return (0, i.Rp)(
                        N.intl.formatToParts(N.t['Qn5+LS'], {
                            username: v,
                            usernameOnClick: m.dG4
                        })
                    );
                return (0, i.Rp)(
                    N.intl.formatToParts(N.t.QtZ0RE, {
                        username: v,
                        usernameOnClick: m.dG4,
                        otherUsername: h.ZP.getName(null, A, T),
                        otherUsernameOnClick: m.dG4
                    })
                );
            case m.uaV.CALL:
                let { call: S } = t;
                if (null != S && -1 === S.participants.indexOf(c.default.getId()))
                    return (0, i.Rp)(
                        N.intl.formatToParts(N.t.DbgSAw, {
                            username: v,
                            usernameOnClick: m.dG4
                        })
                    );
                return;
            case m.uaV.CHANNEL_NAME_CHANGE:
                return (0, i.Rp)(
                    N.intl.formatToParts(e.isForumPost() ? N.t['qa0e/v'] : N.t.XCPMEB, {
                        username: v,
                        usernameOnClick: m.dG4,
                        channelName: t.content
                    })
                );
            case m.uaV.CHANNEL_ICON_CHANGE:
                return (0, i.Rp)(
                    N.intl.formatToParts(N.t.wypJZ2, {
                        username: v,
                        usernameOnClick: m.dG4
                    })
                );
            case m.uaV.CHANNEL_PINNED_MESSAGE:
                return (0, i.Rp)(
                    N.intl.formatToParts(N.t['/M60j4'], {
                        username: v,
                        usernameOnClick: m.dG4
                    })
                );
            case m.uaV.USER_JOIN:
                let Z = R(e.guild_id);
                return (0, i.Rp)(
                    N.intl.formatToParts(P(t.id, Z), {
                        username: v,
                        usernameOnClick: m.dG4
                    })
                );
            case m.uaV.GUILD_BOOST:
                return b(v);
            case m.uaV.GUILD_BOOST_TIER_1:
            case m.uaV.GUILD_BOOST_TIER_2:
            case m.uaV.GUILD_BOOST_TIER_3:
                return (function (t, e) {
                    let n = f.Z.getChannel(e);
                    return null == n || null == _.Z.getGuild(n.getGuildId())
                        ? b(t)
                        : (0, i.Rp)(
                              N.intl.formatToParts(N.t['ihxM9/'], {
                                  username: t,
                                  usernameOnClick: m.dG4
                              })
                          );
                })(v, A);
            case m.uaV.GUILD_INVITE_REMINDER:
                return N.intl.string(N.t.gxyKvr);
            case m.uaV.THREAD_STARTER_MESSAGE:
                return N.intl.formatToPlainString(N.t['B8H+Cg'], {
                    username: v,
                    threadName: e.name
                });
            case m.uaV.ROLE_SUBSCRIPTION_PURCHASE:
                if (t instanceof d.ZP) return null;
                return (0, i.Rp)(
                    (0, r.vp)({
                        username: v,
                        guildId: e.guild_id,
                        roleSubscriptionData: t.role_subscription_data
                    })
                );
            case m.uaV.PURCHASE_NOTIFICATION:
                if (t instanceof d.ZP || (null === (I = t.purchase_notification) || void 0 === I ? void 0 : null === (E = I.guild_product_purchase) || void 0 === E ? void 0 : E.product_name) == null) return null;
                return (0, i.Rp)(
                    (0, a.i)({
                        username: v,
                        productName: t.purchase_notification.guild_product_purchase.product_name
                    })
                );
            case m.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                if (t instanceof d.ZP) return null;
                let y = (0, o.ZH)((0, l.e5)(t));
                return (0, i.Rp)(
                    (0, u.Y)({
                        application: t.application,
                        username: y.nick
                    })
                );
            case m.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
                if (t instanceof d.ZP) return null;
                return (0, i.Rp)(
                    (0, s.B2)({
                        application: t.application,
                        username: (0, o.ZH)((0, l.e5)(t)).nick
                    })
                );
            case m.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
                if (t instanceof d.ZP) return null;
                return (0, i.Rp)(
                    (0, s.hj)({
                        application: t.application,
                        username: (0, o.ZH)((0, l.e5)(t)).nick
                    })
                );
            case m.uaV.AUTO_MODERATION_ACTION:
                if (
                    null === (g = t.embeds) || void 0 === g
                        ? void 0
                        : g.some((t) => {
                              let { type: e } = t;
                              return e === m.hBH.AUTO_MODERATION_NOTIFICATION;
                          })
                )
                    return (function (t) {
                        let e = f.Z.getChannel(t);
                        if (null == e) return null;
                        let n = _.Z.getGuild(e.getGuildId());
                        return null == n ? null : (0, i.Rp)(N.intl.formatToParts(N.t['a+lJKi'], { guildName: n.name }));
                    })(A);
                return t.content;
            case m.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
                return (function (t, e, n) {
                    let a = f.Z.getChannel(e);
                    if (null == a) return null;
                    let r = _.Z.getGuild(a.getGuildId());
                    return null == r
                        ? null
                        : (0, i.Rp)(
                              N.intl.formatToParts(N.t.iOuWPj, {
                                  username: t,
                                  guildName: r.name,
                                  time:
                                      '' !== n
                                          ? new Date(n).toLocaleString(N.intl.currentLocale, {
                                                hour: 'numeric',
                                                minute: '2-digit'
                                            })
                                          : ''
                              })
                          );
                })(v, A, t.content);
            case m.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
                return (function (t, e) {
                    let n = f.Z.getChannel(e);
                    if (null == n) return null;
                    let a = _.Z.getGuild(n.getGuildId());
                    return null == a
                        ? null
                        : (0, i.Rp)(
                              N.intl.formatToParts(N.t.axmbpq, {
                                  username: t,
                                  guildName: a.name
                              })
                          );
                })(v, A);
            default:
                return t.content;
        }
    },
    getSystemMessageUserJoin: function (t, e) {
        let n = v(e),
            i = E.default.extractTimestamp(t) % n.length;
        return n[i];
    },
    getSystemMessageUserJoinMobile: P,
    getSystemMessageBotJoin: function (t) {
        return null == I[t] ? null : N.intl.format(N.t.xw1Ij4, { learnOnClick: { onClick: () => window.open(I[t]) } });
    },
    getWelcomeMessageKind: R
};
