n.d(e, { Z: () => Z });
var l = n(25209),
    i = n(97797),
    r = n(35125),
    a = n(786761),
    u = n(739566),
    o = n(499401),
    s = n(693912),
    c = n(23750),
    d = n(314897),
    m = n(592125),
    N = n(430824),
    f = n(594174),
    _ = n(5192),
    g = n(709054),
    E = n(981631),
    p = n(388032);
let R = {
        '234395307759108106': 'https://groovy.bot/commands',
        '365975655608745985': 'https://www.pokecord.com/getting-started',
        512412940897484800: 'http://jameslantz.net/smilebot'
    },
    T = () => [p.t['0cuj7u'], p.t['MuW+CA'], p.t.osqpHR, p.t['5ToSh4'], p.t.JEB8pq, p.t.pkOV5e, p.t.kRb1Jy, p.t.EmKLY2, p.t.rPtBnZ, p.t['5B/ekZ'], p.t.ESNC3d, p.t['Iw6d8/'], p.t.WecSZ2],
    I = () => [p.t.Jm6e09, p.t.MGRnRU, p.t.EXOEGh, p.t['5uCTFB'], p.t.rl45Qk, p.t.Bh9zpa, p.t.RdEy1N, p.t.qcdp09, p.t.F7w2Rk, p.t.gSyOgI, p.t.uYgqv7, p.t['b/1SBQ'], p.t.LhebZG],
    O = () => [p.t['20E/ys'], p.t['oa8+kp'], p.t.zoKkXl, p.t.FP9aS0, p.t.E5Zj1d, p.t['6Anmws'], p.t.sR78HR, p.t.gA9qPz, p.t.Hkiyp6, p.t.w1HMho],
    h = () => [p.t['8fy3DQ'], p.t.UproUV, p.t['7l3EyM'], p.t.GToyaG, p.t['DUs+Zm'], p.t.yLkbfn, p.t.oWdvws, p.t.tOoKTE, p.t['VM7+Oj'], p.t['hJx/u7']],
    A = (t) => {
        switch (t) {
            case 'NORMAL':
            default:
                return T();
            case 'CLAN':
                return O();
        }
    },
    C = (t) => {
        switch (t) {
            case 'NORMAL':
            default:
                return I();
            case 'CLAN':
                return h();
        }
    };
function P(t, e) {
    let n = C(e),
        l = g.default.extractTimestamp(t) % n.length;
    return n[l];
}
function G(t) {
    return (0, l.Rp)(
        p.intl.formatToParts(p.t['ihxM9/'], {
            username: t,
            usernameOnClick: E.dG4
        })
    );
}
function L(t) {
    var e;
    return (null === (e = N.Z.getGuild(t)) || void 0 === e ? void 0 : e.hasFeature(E.oNc.CLAN)) ? 'CLAN' : 'NORMAL';
}
let Z = {
    stringify: function (t, e) {
        var n, g, R, T;
        let I = null === (n = t.mentions) || void 0 === n ? void 0 : n[0],
            O = null != I && 'string' != typeof I ? f.default.getUser(I.id) : void 0,
            h = t.channel_id,
            A = _.ZP.getName(null, h, t.author);
        switch (t.type) {
            case E.uaV.RECIPIENT_ADD:
                if (null == O) return;
                return (0, l.Rp)(
                    p.intl.formatToParts(p.t['7/Xl0d'], {
                        username: A,
                        usernameOnClick: E.dG4,
                        otherUsername: _.ZP.getName(null, h, O),
                        otherUsernameOnClick: E.dG4
                    })
                );
            case E.uaV.RECIPIENT_REMOVE:
                if (null == O) return;
                let C = t.author;
                if (null == C || C.id === O.id)
                    return (0, l.Rp)(
                        p.intl.formatToParts(p.t['Qn5+LS'], {
                            username: A,
                            usernameOnClick: E.dG4
                        })
                    );
                return (0, l.Rp)(
                    p.intl.formatToParts(p.t.QtZ0RE, {
                        username: A,
                        usernameOnClick: E.dG4,
                        otherUsername: _.ZP.getName(null, h, O),
                        otherUsernameOnClick: E.dG4
                    })
                );
            case E.uaV.CALL:
                let { call: Z } = t;
                if (null != Z && -1 === Z.participants.indexOf(d.default.getId()))
                    return (0, l.Rp)(
                        p.intl.formatToParts(p.t.DbgSAw, {
                            username: A,
                            usernameOnClick: E.dG4
                        })
                    );
                return;
            case E.uaV.CHANNEL_NAME_CHANGE:
                return (0, l.Rp)(
                    p.intl.formatToParts(e.isForumPost() ? p.t['qa0e/v'] : p.t.XCPMEB, {
                        username: A,
                        usernameOnClick: E.dG4,
                        channelName: t.content
                    })
                );
            case E.uaV.CHANNEL_ICON_CHANGE:
                return (0, l.Rp)(
                    p.intl.formatToParts(p.t.wypJZ2, {
                        username: A,
                        usernameOnClick: E.dG4
                    })
                );
            case E.uaV.CHANNEL_PINNED_MESSAGE:
                return (0, l.Rp)(
                    p.intl.formatToParts(p.t['/M60j4'], {
                        username: A,
                        usernameOnClick: E.dG4
                    })
                );
            case E.uaV.USER_JOIN:
                let U = L(e.guild_id);
                return (0, l.Rp)(
                    p.intl.formatToParts(P(t.id, U), {
                        username: A,
                        usernameOnClick: E.dG4
                    })
                );
            case E.uaV.GUILD_BOOST:
                return G(A);
            case E.uaV.GUILD_BOOST_TIER_1:
            case E.uaV.GUILD_BOOST_TIER_2:
            case E.uaV.GUILD_BOOST_TIER_3:
                return (function (t, e) {
                    let n = m.Z.getChannel(e);
                    return null == n || null == N.Z.getGuild(n.getGuildId())
                        ? G(t)
                        : (0, l.Rp)(
                              p.intl.formatToParts(p.t['ihxM9/'], {
                                  username: t,
                                  usernameOnClick: E.dG4
                              })
                          );
                })(A, h);
            case E.uaV.GUILD_INVITE_REMINDER:
                return p.intl.string(p.t.gxyKvr);
            case E.uaV.THREAD_STARTER_MESSAGE:
                return p.intl.formatToPlainString(p.t['B8H+Cg'], {
                    username: A,
                    threadName: e.name
                });
            case E.uaV.ROLE_SUBSCRIPTION_PURCHASE:
                if (t instanceof c.ZP) return null;
                return (0, l.Rp)(
                    (0, r.vp)({
                        username: A,
                        guildId: e.guild_id,
                        roleSubscriptionData: t.role_subscription_data
                    })
                );
            case E.uaV.PURCHASE_NOTIFICATION:
                if (t instanceof c.ZP || (null === (R = t.purchase_notification) || void 0 === R ? void 0 : null === (g = R.guild_product_purchase) || void 0 === g ? void 0 : g.product_name) == null) return null;
                return (0, l.Rp)(
                    (0, i.i)({
                        username: A,
                        productName: t.purchase_notification.guild_product_purchase.product_name
                    })
                );
            case E.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                if (t instanceof c.ZP) return null;
                let S = (0, u.ZH)((0, a.e5)(t));
                return (0, l.Rp)(
                    (0, o.Y)({
                        application: t.application,
                        username: S.nick
                    })
                );
            case E.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
                if (t instanceof c.ZP) return null;
                return (0, l.Rp)(
                    (0, s.B2)({
                        application: t.application,
                        username: (0, u.ZH)((0, a.e5)(t)).nick
                    })
                );
            case E.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
                if (t instanceof c.ZP) return null;
                return (0, l.Rp)(
                    (0, s.hj)({
                        application: t.application,
                        username: (0, u.ZH)((0, a.e5)(t)).nick
                    })
                );
            case E.uaV.AUTO_MODERATION_ACTION:
                if (
                    null === (T = t.embeds) || void 0 === T
                        ? void 0
                        : T.some((t) => {
                              let { type: e } = t;
                              return e === E.hBH.AUTO_MODERATION_NOTIFICATION;
                          })
                )
                    return (function (t) {
                        let e = m.Z.getChannel(t);
                        if (null == e) return null;
                        let n = N.Z.getGuild(e.getGuildId());
                        return null == n ? null : (0, l.Rp)(p.intl.formatToParts(p.t['a+lJKi'], { guildName: n.name }));
                    })(h);
                return t.content;
            case E.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
                return (function (t, e, n) {
                    let i = m.Z.getChannel(e);
                    if (null == i) return null;
                    let r = N.Z.getGuild(i.getGuildId());
                    return null == r
                        ? null
                        : (0, l.Rp)(
                              p.intl.formatToParts(p.t.iOuWPj, {
                                  username: t,
                                  guildName: r.name,
                                  time:
                                      '' !== n
                                          ? new Date(n).toLocaleString(p.intl.currentLocale, {
                                                hour: 'numeric',
                                                minute: '2-digit'
                                            })
                                          : ''
                              })
                          );
                })(A, h, t.content);
            case E.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
                return (function (t, e) {
                    let n = m.Z.getChannel(e);
                    if (null == n) return null;
                    let i = N.Z.getGuild(n.getGuildId());
                    return null == i
                        ? null
                        : (0, l.Rp)(
                              p.intl.formatToParts(p.t.axmbpq, {
                                  username: t,
                                  guildName: i.name
                              })
                          );
                })(A, h);
            default:
                return t.content;
        }
    },
    getSystemMessageUserJoin: function (t, e) {
        let n = A(e),
            l = g.default.extractTimestamp(t) % n.length;
        return n[l];
    },
    getSystemMessageUserJoinMobile: P,
    getSystemMessageBotJoin: function (t) {
        return null == R[t] ? null : p.intl.format(p.t.xw1Ij4, { learnOnClick: { onClick: () => window.open(R[t]) } });
    },
    getWelcomeMessageKind: L
};
