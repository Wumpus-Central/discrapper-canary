n.d(e, { Z: () => S });
var i = n(25209),
    r = n(97797),
    a = n(35125),
    l = n(786761),
    o = n(739566),
    u = n(499401),
    s = n(693912),
    c = n(23750),
    d = n(314897),
    f = n(592125),
    N = n(430824),
    _ = n(594174),
    p = n(5192),
    E = n(709054),
    h = n(981631),
    m = n(388032);
let I = {
        '234395307759108106': 'https://groovy.bot/commands',
        '365975655608745985': 'https://www.pokecord.com/getting-started',
        512412940897484800: 'http://jameslantz.net/smilebot'
    },
    g = () => [m.t['0cuj7u'], m.t['MuW+CA'], m.t.osqpHR, m.t['5ToSh4'], m.t.JEB8pq, m.t.pkOV5e, m.t.kRb1Jy, m.t.EmKLY2, m.t.rPtBnZ, m.t['5B/ekZ'], m.t.ESNC3d, m.t['Iw6d8/'], m.t.WecSZ2],
    T = () => [m.t.Jm6e09, m.t.MGRnRU, m.t.EXOEGh, m.t['5uCTFB'], m.t.rl45Qk, m.t.Bh9zpa, m.t.RdEy1N, m.t.qcdp09, m.t.F7w2Rk, m.t.gSyOgI, m.t.uYgqv7, m.t['b/1SBQ'], m.t.LhebZG],
    C = () => [m.t['20E/ys'], m.t['oa8+kp'], m.t.zoKkXl, m.t.FP9aS0, m.t.E5Zj1d, m.t['6Anmws'], m.t.sR78HR, m.t.gA9qPz, m.t.Hkiyp6, m.t.w1HMho],
    O = () => [m.t['8fy3DQ'], m.t.UproUV, m.t['7l3EyM'], m.t.GToyaG, m.t['DUs+Zm'], m.t.yLkbfn, m.t.oWdvws, m.t.tOoKTE, m.t['VM7+Oj'], m.t['hJx/u7']],
    A = (t) => {
        switch (t) {
            case 'NORMAL':
            default:
                return g();
            case 'CLAN':
                return C();
        }
    },
    v = (t) => {
        switch (t) {
            case 'NORMAL':
            default:
                return T();
            case 'CLAN':
                return O();
        }
    };
function b(t, e) {
    let n = v(e),
        i = E.default.extractTimestamp(t) % n.length;
    return n[i];
}
function P(t) {
    return (0, i.Rp)(
        m.NW.formatToParts(m.t['ihxM9/'], {
            username: t,
            usernameOnClick: h.dG4
        })
    );
}
function R(t) {
    var e;
    return (null === (e = N.Z.getGuild(t)) || void 0 === e ? void 0 : e.hasFeature(h.oNc.CLAN)) ? 'CLAN' : 'NORMAL';
}
let S = {
    stringify: function (t, e) {
        var n, E, I, g;
        let T = null === (n = t.mentions) || void 0 === n ? void 0 : n[0],
            C = null != T && 'string' != typeof T ? _.default.getUser(T.id) : void 0,
            O = t.channel_id,
            A = p.ZP.getName(null, O, t.author);
        switch (t.type) {
            case h.uaV.RECIPIENT_ADD:
                if (null == C) return;
                return (0, i.Rp)(
                    m.NW.formatToParts(m.t['7/Xl0d'], {
                        username: A,
                        usernameOnClick: h.dG4,
                        otherUsername: p.ZP.getName(null, O, C),
                        otherUsernameOnClick: h.dG4
                    })
                );
            case h.uaV.RECIPIENT_REMOVE:
                if (null == C) return;
                let v = t.author;
                if (null == v || v.id === C.id)
                    return (0, i.Rp)(
                        m.NW.formatToParts(m.t['Qn5+LS'], {
                            username: A,
                            usernameOnClick: h.dG4
                        })
                    );
                return (0, i.Rp)(
                    m.NW.formatToParts(m.t.QtZ0RE, {
                        username: A,
                        usernameOnClick: h.dG4,
                        otherUsername: p.ZP.getName(null, O, C),
                        otherUsernameOnClick: h.dG4
                    })
                );
            case h.uaV.CALL:
                let { call: S } = t;
                if (null != S && -1 === S.participants.indexOf(d.default.getId()))
                    return (0, i.Rp)(
                        m.NW.formatToParts(m.t.DbgSAw, {
                            username: A,
                            usernameOnClick: h.dG4
                        })
                    );
                return;
            case h.uaV.CHANNEL_NAME_CHANGE:
                return (0, i.Rp)(
                    m.NW.formatToParts(e.isForumPost() ? m.t['qa0e/v'] : m.t.XCPMEB, {
                        username: A,
                        usernameOnClick: h.dG4,
                        channelName: t.content
                    })
                );
            case h.uaV.CHANNEL_ICON_CHANGE:
                return (0, i.Rp)(
                    m.NW.formatToParts(m.t.wypJZ2, {
                        username: A,
                        usernameOnClick: h.dG4
                    })
                );
            case h.uaV.CHANNEL_PINNED_MESSAGE:
                return (0, i.Rp)(
                    m.NW.formatToParts(m.t['/M60j4'], {
                        username: A,
                        usernameOnClick: h.dG4
                    })
                );
            case h.uaV.USER_JOIN:
                let y = R(e.guild_id);
                return (0, i.Rp)(
                    m.NW.formatToParts(b(t.id, y), {
                        username: A,
                        usernameOnClick: h.dG4
                    })
                );
            case h.uaV.GUILD_BOOST:
                return P(A);
            case h.uaV.GUILD_BOOST_TIER_1:
            case h.uaV.GUILD_BOOST_TIER_2:
            case h.uaV.GUILD_BOOST_TIER_3:
                return (function (t, e) {
                    let n = f.Z.getChannel(e);
                    return null == n || null == N.Z.getGuild(n.getGuildId())
                        ? P(t)
                        : (0, i.Rp)(
                              m.NW.formatToParts(m.t['ihxM9/'], {
                                  username: t,
                                  usernameOnClick: h.dG4
                              })
                          );
                })(A, O);
            case h.uaV.GUILD_INVITE_REMINDER:
                return m.NW.string(m.t.gxyKvr);
            case h.uaV.THREAD_STARTER_MESSAGE:
                return m.NW.formatToPlainString(m.t['B8H+Cg'], {
                    username: A,
                    threadName: e.name
                });
            case h.uaV.ROLE_SUBSCRIPTION_PURCHASE:
                if (t instanceof c.ZP) return null;
                return (0, i.Rp)(
                    (0, a.vp)({
                        username: A,
                        guildId: e.guild_id,
                        roleSubscriptionData: t.role_subscription_data
                    })
                );
            case h.uaV.PURCHASE_NOTIFICATION:
                if (t instanceof c.ZP || (null === (I = t.purchase_notification) || void 0 === I ? void 0 : null === (E = I.guild_product_purchase) || void 0 === E ? void 0 : E.product_name) == null) return null;
                return (0, i.Rp)(
                    (0, r.i)({
                        username: A,
                        productName: t.purchase_notification.guild_product_purchase.product_name
                    })
                );
            case h.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                if (t instanceof c.ZP) return null;
                let Z = (0, o.ZH)((0, l.e5)(t));
                return (0, i.Rp)(
                    (0, u.Y)({
                        application: t.application,
                        username: Z.nick
                    })
                );
            case h.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
                if (t instanceof c.ZP) return null;
                return (0, i.Rp)(
                    (0, s.B2)({
                        application: t.application,
                        username: (0, o.ZH)((0, l.e5)(t)).nick
                    })
                );
            case h.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
                if (t instanceof c.ZP) return null;
                return (0, i.Rp)(
                    (0, s.hj)({
                        application: t.application,
                        username: (0, o.ZH)((0, l.e5)(t)).nick
                    })
                );
            case h.uaV.AUTO_MODERATION_ACTION:
                if (
                    null === (g = t.embeds) || void 0 === g
                        ? void 0
                        : g.some((t) => {
                              let { type: e } = t;
                              return e === h.hBH.AUTO_MODERATION_NOTIFICATION;
                          })
                )
                    return (function (t) {
                        let e = f.Z.getChannel(t);
                        if (null == e) return null;
                        let n = N.Z.getGuild(e.getGuildId());
                        return null == n ? null : (0, i.Rp)(m.NW.formatToParts(m.t['a+lJKi'], { guildName: n.name }));
                    })(O);
                return t.content;
            case h.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
                return (function (t, e, n) {
                    let r = f.Z.getChannel(e);
                    if (null == r) return null;
                    let a = N.Z.getGuild(r.getGuildId());
                    return null == a
                        ? null
                        : (0, i.Rp)(
                              m.NW.formatToParts(m.t.iOuWPj, {
                                  username: t,
                                  guildName: a.name,
                                  time:
                                      '' !== n
                                          ? new Date(n).toLocaleString(m.NW.currentLocale, {
                                                hour: 'numeric',
                                                minute: '2-digit'
                                            })
                                          : ''
                              })
                          );
                })(A, O, t.content);
            case h.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
                return (function (t, e) {
                    let n = f.Z.getChannel(e);
                    if (null == n) return null;
                    let r = N.Z.getGuild(n.getGuildId());
                    return null == r
                        ? null
                        : (0, i.Rp)(
                              m.NW.formatToParts(m.t.axmbpq, {
                                  username: t,
                                  guildName: r.name
                              })
                          );
                })(A, O);
            default:
                return t.content;
        }
    },
    getSystemMessageUserJoin: function (t, e) {
        let n = A(e),
            i = E.default.extractTimestamp(t) % n.length;
        return n[i];
    },
    getSystemMessageUserJoinMobile: b,
    getSystemMessageBotJoin: function (t) {
        return null == I[t] ? null : m.NW.format(m.t.xw1Ij4, { learnOnClick: { onClick: () => window.open(I[t]) } });
    },
    getWelcomeMessageKind: R
};
