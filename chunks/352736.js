var r,
    i,
    l = n(25209),
    a = n(97797),
    u = n(35125),
    o = n(786761),
    s = n(739566),
    c = n(499401),
    d = n(693912),
    f = n(23750),
    p = n(314897),
    h = n(592125),
    _ = n(430824),
    E = n(594174),
    m = n(5192),
    g = n(709054),
    C = n(981631),
    v = n(388032);
let A = {
    '234395307759108106': 'https://groovy.bot/commands',
    '365975655608745985': 'https://www.pokecord.com/getting-started',
    512412940897484800: 'http://jameslantz.net/smilebot'
};
((r = i || (i = {})).NORMAL = 'NORMAL'), (r.CLAN = 'CLAN');
let I = () => [v.t['0cuj7u'], v.t['MuW+CA'], v.t.osqpHR, v.t['5ToSh4'], v.t.JEB8pq, v.t.pkOV5e, v.t.kRb1Jy, v.t.EmKLY2, v.t.rPtBnZ, v.t['5B/ekZ'], v.t.ESNC3d, v.t['Iw6d8/'], v.t.WecSZ2],
    N = () => [v.t.Jm6e09, v.t.MGRnRU, v.t.EXOEGh, v.t['5uCTFB'], v.t.rl45Qk, v.t.Bh9zpa, v.t.RdEy1N, v.t.qcdp09, v.t.F7w2Rk, v.t.gSyOgI, v.t.uYgqv7, v.t['b/1SBQ'], v.t.LhebZG],
    T = () => [v.t['20E/ys'], v.t['oa8+kp'], v.t.zoKkXl, v.t.FP9aS0, v.t.E5Zj1d, v.t['6Anmws'], v.t.sR78HR, v.t.gA9qPz, v.t.Hkiyp6, v.t.w1HMho],
    O = () => [v.t['8fy3DQ'], v.t.UproUV, v.t['7l3EyM'], v.t.GToyaG, v.t['DUs+Zm'], v.t.yLkbfn, v.t.oWdvws, v.t.tOoKTE, v.t['VM7+Oj'], v.t['hJx/u7']],
    R = (e) => {
        switch (e) {
            case 'NORMAL':
            default:
                return I();
            case 'CLAN':
                return T();
        }
    },
    S = (e) => {
        switch (e) {
            case 'NORMAL':
            default:
                return N();
            case 'CLAN':
                return O();
        }
    };
function P(e, t) {
    let n = S(t),
        r = g.default.extractTimestamp(e) % n.length;
    return n[r];
}
function Z(e) {
    return (0, l.Rp)(
        v.intl.formatToParts(v.t['ihxM9/'], {
            username: e,
            usernameOnClick: C.dG4
        })
    );
}
function y(e, t) {
    let n = h.Z.getChannel(t);
    return null == n || null == _.Z.getGuild(n.getGuildId())
        ? Z(e)
        : (0, l.Rp)(
              v.intl.formatToParts(v.t['ihxM9/'], {
                  username: e,
                  usernameOnClick: C.dG4
              })
          );
}
function L(e) {
    var t;
    return (null === (t = _.Z.getGuild(e)) || void 0 === t ? void 0 : t.hasFeature(C.oNc.CLAN)) ? 'CLAN' : 'NORMAL';
}
t.Z = {
    stringify: function (e, t) {
        var n, r, i, g;
        let A = null === (n = e.mentions) || void 0 === n ? void 0 : n[0],
            I = null != A && 'string' != typeof A ? E.default.getUser(A.id) : void 0,
            N = e.channel_id,
            T = m.ZP.getName(null, N, e.author);
        switch (e.type) {
            case C.uaV.RECIPIENT_ADD:
                if (null == I) return;
                return (0, l.Rp)(
                    v.intl.formatToParts(v.t['7/Xl0d'], {
                        username: T,
                        usernameOnClick: C.dG4,
                        otherUsername: m.ZP.getName(null, N, I),
                        otherUsernameOnClick: C.dG4
                    })
                );
            case C.uaV.RECIPIENT_REMOVE:
                if (null == I) return;
                let O = e.author;
                if (null == O || O.id === I.id)
                    return (0, l.Rp)(
                        v.intl.formatToParts(v.t['Qn5+LS'], {
                            username: T,
                            usernameOnClick: C.dG4
                        })
                    );
                return (0, l.Rp)(
                    v.intl.formatToParts(v.t.QtZ0RE, {
                        username: T,
                        usernameOnClick: C.dG4,
                        otherUsername: m.ZP.getName(null, N, I),
                        otherUsernameOnClick: C.dG4
                    })
                );
            case C.uaV.CALL:
                let { call: R } = e;
                if (null != R && -1 === R.participants.indexOf(p.default.getId()))
                    return (0, l.Rp)(
                        v.intl.formatToParts(v.t.DbgSAw, {
                            username: T,
                            usernameOnClick: C.dG4
                        })
                    );
                return;
            case C.uaV.CHANNEL_NAME_CHANGE:
                return (0, l.Rp)(
                    v.intl.formatToParts(t.isForumPost() ? v.t['qa0e/v'] : v.t.XCPMEB, {
                        username: T,
                        usernameOnClick: C.dG4,
                        channelName: e.content
                    })
                );
            case C.uaV.CHANNEL_ICON_CHANGE:
                return (0, l.Rp)(
                    v.intl.formatToParts(v.t.wypJZ2, {
                        username: T,
                        usernameOnClick: C.dG4
                    })
                );
            case C.uaV.CHANNEL_PINNED_MESSAGE:
                return (0, l.Rp)(
                    v.intl.formatToParts(v.t['/M60j4'], {
                        username: T,
                        usernameOnClick: C.dG4
                    })
                );
            case C.uaV.USER_JOIN:
                let S = L(t.guild_id);
                return (0, l.Rp)(
                    v.intl.formatToParts(P(e.id, S), {
                        username: T,
                        usernameOnClick: C.dG4
                    })
                );
            case C.uaV.GUILD_BOOST:
                return Z(T);
            case C.uaV.GUILD_BOOST_TIER_1:
            case C.uaV.GUILD_BOOST_TIER_2:
            case C.uaV.GUILD_BOOST_TIER_3:
                return y(T, N);
            case C.uaV.GUILD_INVITE_REMINDER:
                return v.intl.string(v.t.gxyKvr);
            case C.uaV.THREAD_STARTER_MESSAGE:
                return v.intl.formatToPlainString(v.t['B8H+Cg'], {
                    username: T,
                    threadName: t.name
                });
            case C.uaV.ROLE_SUBSCRIPTION_PURCHASE:
                if (e instanceof f.ZP) return null;
                return (0, l.Rp)(
                    (0, u.vp)({
                        username: T,
                        guildId: t.guild_id,
                        roleSubscriptionData: e.role_subscription_data
                    })
                );
            case C.uaV.PURCHASE_NOTIFICATION:
                if (e instanceof f.ZP || (null === (i = e.purchase_notification) || void 0 === i ? void 0 : null === (r = i.guild_product_purchase) || void 0 === r ? void 0 : r.product_name) == null) return null;
                return (0, l.Rp)(
                    (0, a.i)({
                        username: T,
                        productName: e.purchase_notification.guild_product_purchase.product_name
                    })
                );
            case C.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                if (e instanceof f.ZP) return null;
                let b = (0, s.ZH)((0, o.e5)(e));
                return (0, l.Rp)(
                    (0, c.Y)({
                        application: e.application,
                        username: b.nick
                    })
                );
            case C.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
                if (e instanceof f.ZP) return null;
                return (0, l.Rp)(
                    (0, d.B2)({
                        application: e.application,
                        username: (0, s.ZH)((0, o.e5)(e)).nick
                    })
                );
            case C.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
                if (e instanceof f.ZP) return null;
                return (0, l.Rp)(
                    (0, d.hj)({
                        application: e.application,
                        username: (0, s.ZH)((0, o.e5)(e)).nick
                    })
                );
            case C.uaV.AUTO_MODERATION_ACTION:
                if (
                    null === (g = e.embeds) || void 0 === g
                        ? void 0
                        : g.some((e) => {
                              let { type: t } = e;
                              return t === C.hBH.AUTO_MODERATION_NOTIFICATION;
                          })
                )
                    return (function (e) {
                        let t = h.Z.getChannel(e);
                        if (null == t) return null;
                        let n = _.Z.getGuild(t.getGuildId());
                        return null == n ? null : (0, l.Rp)(v.intl.formatToParts(v.t['a+lJKi'], { guildName: n.name }));
                    })(N);
                return e.content;
            case C.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
                return (function (e, t, n) {
                    let r = h.Z.getChannel(t);
                    if (null == r) return null;
                    let i = _.Z.getGuild(r.getGuildId());
                    return null == i
                        ? null
                        : (0, l.Rp)(
                              v.intl.formatToParts(v.t.iOuWPj, {
                                  username: e,
                                  guildName: i.name,
                                  time:
                                      '' !== n
                                          ? new Date(n).toLocaleString(v.intl.currentLocale, {
                                                hour: 'numeric',
                                                minute: '2-digit'
                                            })
                                          : ''
                              })
                          );
                })(T, N, e.content);
            case C.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
                return (function (e, t) {
                    let n = h.Z.getChannel(t);
                    if (null == n) return null;
                    let r = _.Z.getGuild(n.getGuildId());
                    return null == r
                        ? null
                        : (0, l.Rp)(
                              v.intl.formatToParts(v.t.axmbpq, {
                                  username: e,
                                  guildName: r.name
                              })
                          );
                })(T, N);
            default:
                return e.content;
        }
    },
    getSystemMessageUserJoin: function (e, t) {
        let n = R(t),
            r = g.default.extractTimestamp(e) % n.length;
        return n[r];
    },
    getSystemMessageUserJoinMobile: P,
    getSystemMessageBotJoin: function (e) {
        return null == A[e] ? null : v.intl.format(v.t.xw1Ij4, { learnOnClick: { onClick: () => window.open(A[e]) } });
    },
    getWelcomeMessageKind: L
};
