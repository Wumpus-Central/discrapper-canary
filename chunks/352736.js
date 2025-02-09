n.d(e, { Z: () => S });
var i = n(25209),
    r = n(97797),
    a = n(35125),
    l = n(786761),
    o = n(739566),
    u = n(499401),
    s = n(693912),
    d = n(23750),
    c = n(314897),
    f = n(592125),
    _ = n(430824),
    E = n(594174),
    p = n(5192),
    h = n(709054),
    N = n(981631),
    m = n(388032);
let I = {
        '234395307759108106': 'https://groovy.bot/commands',
        '365975655608745985': 'https://www.pokecord.com/getting-started',
        512412940897484800: 'http://jameslantz.net/smilebot'
    },
    T = () => [m.t['0cuj7u'], m.t['MuW+CA'], m.t.osqpHR, m.t['5ToSh4'], m.t.JEB8pq, m.t.pkOV5e, m.t.kRb1Jy, m.t.EmKLY2, m.t.rPtBnZ, m.t['5B/ekZ'], m.t.ESNC3d, m.t['Iw6d8/'], m.t.WecSZ2],
    C = () => [m.t.Jm6e09, m.t.MGRnRU, m.t.EXOEGh, m.t['5uCTFB'], m.t.rl45Qk, m.t.Bh9zpa, m.t.RdEy1N, m.t.qcdp09, m.t.F7w2Rk, m.t.gSyOgI, m.t.uYgqv7, m.t['b/1SBQ'], m.t.LhebZG],
    g = () => [m.t['20E/ys'], m.t['oa8+kp'], m.t.zoKkXl, m.t.FP9aS0, m.t.E5Zj1d, m.t['6Anmws'], m.t.sR78HR, m.t.gA9qPz, m.t.Hkiyp6, m.t.w1HMho],
    A = () => [m.t['8fy3DQ'], m.t.UproUV, m.t['7l3EyM'], m.t.GToyaG, m.t['DUs+Zm'], m.t.yLkbfn, m.t.oWdvws, m.t.tOoKTE, m.t['VM7+Oj'], m.t['hJx/u7']],
    v = (t) => {
        switch (t) {
            case 'NORMAL':
            default:
                return T();
            case 'CLAN':
                return g();
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
function R(t, e) {
    let n = O(e),
        i = h.default.extractTimestamp(t) % n.length;
    return n[i];
}
function P(t) {
    return (0, i.Rp)(
        m.intl.formatToParts(m.t['ihxM9/'], {
            username: t,
            usernameOnClick: N.dG4
        })
    );
}
function b(t) {
    var e;
    return (null === (e = _.Z.getGuild(t)) || void 0 === e ? void 0 : e.hasFeature(N.oNc.CLAN)) ? 'CLAN' : 'NORMAL';
}
let S = {
    stringify: function (t, e) {
        var n, h, I, T;
        let C = null === (n = t.mentions) || void 0 === n ? void 0 : n[0],
            g = null != C && 'string' != typeof C ? E.default.getUser(C.id) : void 0,
            A = t.channel_id,
            v = p.ZP.getName(null, A, t.author);
        switch (t.type) {
            case N.uaV.RECIPIENT_ADD:
                if (null == g) return;
                return (0, i.Rp)(
                    m.intl.formatToParts(m.t['7/Xl0d'], {
                        username: v,
                        usernameOnClick: N.dG4,
                        otherUsername: p.ZP.getName(null, A, g),
                        otherUsernameOnClick: N.dG4
                    })
                );
            case N.uaV.RECIPIENT_REMOVE:
                if (null == g) return;
                let O = t.author;
                if (null == O || O.id === g.id)
                    return (0, i.Rp)(
                        m.intl.formatToParts(m.t['Qn5+LS'], {
                            username: v,
                            usernameOnClick: N.dG4
                        })
                    );
                return (0, i.Rp)(
                    m.intl.formatToParts(m.t.QtZ0RE, {
                        username: v,
                        usernameOnClick: N.dG4,
                        otherUsername: p.ZP.getName(null, A, g),
                        otherUsernameOnClick: N.dG4
                    })
                );
            case N.uaV.CALL:
                let { call: S } = t;
                if (null != S && -1 === S.participants.indexOf(c.default.getId()))
                    return (0, i.Rp)(
                        m.intl.formatToParts(m.t.DbgSAw, {
                            username: v,
                            usernameOnClick: N.dG4
                        })
                    );
                return;
            case N.uaV.CHANNEL_NAME_CHANGE:
                return (0, i.Rp)(
                    m.intl.formatToParts(e.isForumPost() ? m.t['qa0e/v'] : m.t.XCPMEB, {
                        username: v,
                        usernameOnClick: N.dG4,
                        channelName: t.content
                    })
                );
            case N.uaV.CHANNEL_ICON_CHANGE:
                return (0, i.Rp)(
                    m.intl.formatToParts(m.t.wypJZ2, {
                        username: v,
                        usernameOnClick: N.dG4
                    })
                );
            case N.uaV.CHANNEL_PINNED_MESSAGE:
                return (0, i.Rp)(
                    m.intl.formatToParts(m.t['/M60j4'], {
                        username: v,
                        usernameOnClick: N.dG4
                    })
                );
            case N.uaV.USER_JOIN:
                let Z = b(e.guild_id);
                return (0, i.Rp)(
                    m.intl.formatToParts(R(t.id, Z), {
                        username: v,
                        usernameOnClick: N.dG4
                    })
                );
            case N.uaV.GUILD_BOOST:
                return P(v);
            case N.uaV.GUILD_BOOST_TIER_1:
            case N.uaV.GUILD_BOOST_TIER_2:
            case N.uaV.GUILD_BOOST_TIER_3:
                return (function (t, e) {
                    let n = f.Z.getChannel(e);
                    return null == n || null == _.Z.getGuild(n.getGuildId())
                        ? P(t)
                        : (0, i.Rp)(
                              m.intl.formatToParts(m.t['ihxM9/'], {
                                  username: t,
                                  usernameOnClick: N.dG4
                              })
                          );
                })(v, A);
            case N.uaV.GUILD_INVITE_REMINDER:
                return m.intl.string(m.t.gxyKvr);
            case N.uaV.THREAD_STARTER_MESSAGE:
                return m.intl.formatToPlainString(m.t['B8H+Cg'], {
                    username: v,
                    threadName: e.name
                });
            case N.uaV.ROLE_SUBSCRIPTION_PURCHASE:
                if (t instanceof d.ZP) return null;
                return (0, i.Rp)(
                    (0, a.vp)({
                        username: v,
                        guildId: e.guild_id,
                        roleSubscriptionData: t.role_subscription_data
                    })
                );
            case N.uaV.PURCHASE_NOTIFICATION:
                if (t instanceof d.ZP || (null === (I = t.purchase_notification) || void 0 === I ? void 0 : null === (h = I.guild_product_purchase) || void 0 === h ? void 0 : h.product_name) == null) return null;
                return (0, i.Rp)(
                    (0, r.i)({
                        username: v,
                        productName: t.purchase_notification.guild_product_purchase.product_name
                    })
                );
            case N.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                if (t instanceof d.ZP) return null;
                let y = (0, o.ZH)((0, l.e5)(t));
                return (0, i.Rp)(
                    (0, u.Y)({
                        application: t.application,
                        username: y.nick
                    })
                );
            case N.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
                if (t instanceof d.ZP) return null;
                return (0, i.Rp)(
                    (0, s.B2)({
                        application: t.application,
                        username: (0, o.ZH)((0, l.e5)(t)).nick
                    })
                );
            case N.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
                if (t instanceof d.ZP) return null;
                return (0, i.Rp)(
                    (0, s.hj)({
                        application: t.application,
                        username: (0, o.ZH)((0, l.e5)(t)).nick
                    })
                );
            case N.uaV.AUTO_MODERATION_ACTION:
                if (
                    null === (T = t.embeds) || void 0 === T
                        ? void 0
                        : T.some((t) => {
                              let { type: e } = t;
                              return e === N.hBH.AUTO_MODERATION_NOTIFICATION;
                          })
                )
                    return (function (t) {
                        let e = f.Z.getChannel(t);
                        if (null == e) return null;
                        let n = _.Z.getGuild(e.getGuildId());
                        return null == n ? null : (0, i.Rp)(m.intl.formatToParts(m.t['a+lJKi'], { guildName: n.name }));
                    })(A);
                return t.content;
            case N.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
                return (function (t, e, n) {
                    let r = f.Z.getChannel(e);
                    if (null == r) return null;
                    let a = _.Z.getGuild(r.getGuildId());
                    return null == a
                        ? null
                        : (0, i.Rp)(
                              m.intl.formatToParts(m.t.iOuWPj, {
                                  username: t,
                                  guildName: a.name,
                                  time:
                                      '' !== n
                                          ? new Date(n).toLocaleString(m.intl.currentLocale, {
                                                hour: 'numeric',
                                                minute: '2-digit'
                                            })
                                          : ''
                              })
                          );
                })(v, A, t.content);
            case N.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
                return (function (t, e) {
                    let n = f.Z.getChannel(e);
                    if (null == n) return null;
                    let r = _.Z.getGuild(n.getGuildId());
                    return null == r
                        ? null
                        : (0, i.Rp)(
                              m.intl.formatToParts(m.t.axmbpq, {
                                  username: t,
                                  guildName: r.name
                              })
                          );
                })(v, A);
            default:
                return t.content;
        }
    },
    getSystemMessageUserJoin: function (t, e) {
        let n = v(e),
            i = h.default.extractTimestamp(t) % n.length;
        return n[i];
    },
    getSystemMessageUserJoinMobile: R,
    getSystemMessageBotJoin: function (t) {
        return null == I[t] ? null : m.intl.format(m.t.xw1Ij4, { learnOnClick: { onClick: () => window.open(I[t]) } });
    },
    getWelcomeMessageKind: b
};
