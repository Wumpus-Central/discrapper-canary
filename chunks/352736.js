n.d(t, { Z: () => Z });
var i = n(25209),
    r = n(97797),
    a = n(35125),
    l = n(786761),
    u = n(739566),
    o = n(499401),
    d = n(693912),
    s = n(23750),
    c = n(314897),
    f = n(592125),
    _ = n(430824),
    E = n(594174),
    p = n(5192),
    m = n(709054),
    h = n(981631),
    N = n(388032);
let C = {
        '234395307759108106': 'https://groovy.bot/commands',
        '365975655608745985': 'https://www.pokecord.com/getting-started',
        512412940897484800: 'http://jameslantz.net/smilebot'
    },
    A = () => [N.t['0cuj7u'], N.t['MuW+CA'], N.t.osqpHR, N.t['5ToSh4'], N.t.JEB8pq, N.t.pkOV5e, N.t.kRb1Jy, N.t.EmKLY2, N.t.rPtBnZ, N.t['5B/ekZ'], N.t.ESNC3d, N.t['Iw6d8/'], N.t.WecSZ2],
    T = () => [N.t.Jm6e09, N.t.MGRnRU, N.t.EXOEGh, N.t['5uCTFB'], N.t.rl45Qk, N.t.Bh9zpa, N.t.RdEy1N, N.t.qcdp09, N.t.F7w2Rk, N.t.gSyOgI, N.t.uYgqv7, N.t['b/1SBQ'], N.t.LhebZG],
    g = () => [N.t['20E/ys'], N.t['oa8+kp'], N.t.zoKkXl, N.t.FP9aS0, N.t.E5Zj1d, N.t['6Anmws'], N.t.sR78HR, N.t.gA9qPz, N.t.Hkiyp6, N.t.w1HMho],
    v = () => [N.t['8fy3DQ'], N.t.UproUV, N.t['7l3EyM'], N.t.GToyaG, N.t['DUs+Zm'], N.t.yLkbfn, N.t.oWdvws, N.t.tOoKTE, N.t['VM7+Oj'], N.t['hJx/u7']],
    I = (e) => {
        switch (e) {
            case 'NORMAL':
            default:
                return A();
            case 'CLAN':
                return g();
        }
    },
    R = (e) => {
        switch (e) {
            case 'NORMAL':
            default:
                return T();
            case 'CLAN':
                return v();
        }
    };
function O(e, t) {
    let n = R(t),
        i = m.default.extractTimestamp(e) % n.length;
    return n[i];
}
function P(e) {
    return (0, i.Rp)(
        N.intl.formatToParts(N.t['ihxM9/'], {
            username: e,
            usernameOnClick: h.dG4
        })
    );
}
function S(e) {
    var t;
    return (null === (t = _.Z.getGuild(e)) || void 0 === t ? void 0 : t.hasFeature(h.oNc.CLAN)) ? 'CLAN' : 'NORMAL';
}
let Z = {
    stringify: function (e, t) {
        var n, m, C, A;
        let T = null === (n = e.mentions) || void 0 === n ? void 0 : n[0],
            g = null != T && 'string' != typeof T ? E.default.getUser(T.id) : void 0,
            v = e.channel_id,
            I = p.ZP.getName(null, v, e.author);
        switch (e.type) {
            case h.uaV.RECIPIENT_ADD:
                if (null == g) return;
                return (0, i.Rp)(
                    N.intl.formatToParts(N.t['7/Xl0d'], {
                        username: I,
                        usernameOnClick: h.dG4,
                        otherUsername: p.ZP.getName(null, v, g),
                        otherUsernameOnClick: h.dG4
                    })
                );
            case h.uaV.RECIPIENT_REMOVE:
                if (null == g) return;
                let R = e.author;
                if (null == R || R.id === g.id)
                    return (0, i.Rp)(
                        N.intl.formatToParts(N.t['Qn5+LS'], {
                            username: I,
                            usernameOnClick: h.dG4
                        })
                    );
                return (0, i.Rp)(
                    N.intl.formatToParts(N.t.QtZ0RE, {
                        username: I,
                        usernameOnClick: h.dG4,
                        otherUsername: p.ZP.getName(null, v, g),
                        otherUsernameOnClick: h.dG4
                    })
                );
            case h.uaV.CALL:
                let { call: Z } = e;
                if (null != Z && -1 === Z.participants.indexOf(c.default.getId()))
                    return (0, i.Rp)(
                        N.intl.formatToParts(N.t.DbgSAw, {
                            username: I,
                            usernameOnClick: h.dG4
                        })
                    );
                return;
            case h.uaV.CHANNEL_NAME_CHANGE:
                return (0, i.Rp)(
                    N.intl.formatToParts(t.isForumPost() ? N.t['qa0e/v'] : N.t.XCPMEB, {
                        username: I,
                        usernameOnClick: h.dG4,
                        channelName: e.content
                    })
                );
            case h.uaV.CHANNEL_ICON_CHANGE:
                return (0, i.Rp)(
                    N.intl.formatToParts(N.t.wypJZ2, {
                        username: I,
                        usernameOnClick: h.dG4
                    })
                );
            case h.uaV.CHANNEL_PINNED_MESSAGE:
                return (0, i.Rp)(
                    N.intl.formatToParts(N.t['/M60j4'], {
                        username: I,
                        usernameOnClick: h.dG4
                    })
                );
            case h.uaV.USER_JOIN:
                let b = S(t.guild_id);
                return (0, i.Rp)(
                    N.intl.formatToParts(O(e.id, b), {
                        username: I,
                        usernameOnClick: h.dG4
                    })
                );
            case h.uaV.GUILD_BOOST:
                return P(I);
            case h.uaV.GUILD_BOOST_TIER_1:
            case h.uaV.GUILD_BOOST_TIER_2:
            case h.uaV.GUILD_BOOST_TIER_3:
                return (function (e, t) {
                    let n = f.Z.getChannel(t);
                    return null == n || null == _.Z.getGuild(n.getGuildId())
                        ? P(e)
                        : (0, i.Rp)(
                              N.intl.formatToParts(N.t['ihxM9/'], {
                                  username: e,
                                  usernameOnClick: h.dG4
                              })
                          );
                })(I, v);
            case h.uaV.GUILD_INVITE_REMINDER:
                return N.intl.string(N.t.gxyKvr);
            case h.uaV.THREAD_STARTER_MESSAGE:
                return N.intl.formatToPlainString(N.t['B8H+Cg'], {
                    username: I,
                    threadName: t.name
                });
            case h.uaV.ROLE_SUBSCRIPTION_PURCHASE:
                if (e instanceof s.ZP) return null;
                return (0, i.Rp)(
                    (0, a.vp)({
                        username: I,
                        guildId: t.guild_id,
                        roleSubscriptionData: e.role_subscription_data
                    })
                );
            case h.uaV.PURCHASE_NOTIFICATION:
                if (e instanceof s.ZP || (null === (C = e.purchase_notification) || void 0 === C ? void 0 : null === (m = C.guild_product_purchase) || void 0 === m ? void 0 : m.product_name) == null) return null;
                return (0, i.Rp)(
                    (0, r.i)({
                        username: I,
                        productName: e.purchase_notification.guild_product_purchase.product_name
                    })
                );
            case h.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                if (e instanceof s.ZP) return null;
                let y = (0, u.ZH)((0, l.e5)(e));
                return (0, i.Rp)(
                    (0, o.Y)({
                        application: e.application,
                        username: y.nick
                    })
                );
            case h.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
                if (e instanceof s.ZP) return null;
                return (0, i.Rp)(
                    (0, d.B2)({
                        application: e.application,
                        username: (0, u.ZH)((0, l.e5)(e)).nick
                    })
                );
            case h.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
                if (e instanceof s.ZP) return null;
                return (0, i.Rp)(
                    (0, d.hj)({
                        application: e.application,
                        username: (0, u.ZH)((0, l.e5)(e)).nick
                    })
                );
            case h.uaV.AUTO_MODERATION_ACTION:
                if (
                    null === (A = e.embeds) || void 0 === A
                        ? void 0
                        : A.some((e) => {
                              let { type: t } = e;
                              return t === h.hBH.AUTO_MODERATION_NOTIFICATION;
                          })
                )
                    return (function (e) {
                        let t = f.Z.getChannel(e);
                        if (null == t) return null;
                        let n = _.Z.getGuild(t.getGuildId());
                        return null == n ? null : (0, i.Rp)(N.intl.formatToParts(N.t['a+lJKi'], { guildName: n.name }));
                    })(v);
                return e.content;
            case h.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
                return (function (e, t, n) {
                    let r = f.Z.getChannel(t);
                    if (null == r) return null;
                    let a = _.Z.getGuild(r.getGuildId());
                    return null == a
                        ? null
                        : (0, i.Rp)(
                              N.intl.formatToParts(N.t.iOuWPj, {
                                  username: e,
                                  guildName: a.name,
                                  time:
                                      '' !== n
                                          ? new Date(n).toLocaleString(N.intl.currentLocale, {
                                                hour: 'numeric',
                                                minute: '2-digit'
                                            })
                                          : ''
                              })
                          );
                })(I, v, e.content);
            case h.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
                return (function (e, t) {
                    let n = f.Z.getChannel(t);
                    if (null == n) return null;
                    let r = _.Z.getGuild(n.getGuildId());
                    return null == r
                        ? null
                        : (0, i.Rp)(
                              N.intl.formatToParts(N.t.axmbpq, {
                                  username: e,
                                  guildName: r.name
                              })
                          );
                })(I, v);
            default:
                return e.content;
        }
    },
    getSystemMessageUserJoin: function (e, t) {
        let n = I(t),
            i = m.default.extractTimestamp(e) % n.length;
        return n[i];
    },
    getSystemMessageUserJoinMobile: O,
    getSystemMessageBotJoin: function (e) {
        return null == C[e] ? null : N.intl.format(N.t.xw1Ij4, { learnOnClick: { onClick: () => window.open(C[e]) } });
    },
    getWelcomeMessageKind: S
};
