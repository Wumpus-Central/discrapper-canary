n.d(t, { Z: () => T }), n(388685);
var r = n(25209),
    a = n(97797),
    i = n(35125),
    o = n(786761),
    l = n(739566),
    c = n(499401),
    s = n(693912),
    u = n(23750),
    _ = n(314897),
    d = n(592125),
    f = n(430824),
    p = n(594174),
    m = n(5192),
    g = n(709054),
    h = n(981631),
    v = n(388032);
let b = {
        '234395307759108106': 'https://groovy.bot/commands',
        '365975655608745985': 'https://www.pokecord.com/getting-started',
        512412940897484800: 'http://jameslantz.net/smilebot'
    },
    I = () => [v.t['0cuj7u'], v.t['MuW+CA'], v.t.osqpHR, v.t['5ToSh4'], v.t.JEB8pq, v.t.pkOV5e, v.t.kRb1Jy, v.t.EmKLY2, v.t.rPtBnZ, v.t['5B/ekZ'], v.t.ESNC3d, v.t['Iw6d8/'], v.t.WecSZ2],
    y = () => [v.t.Jm6e09, v.t.MGRnRU, v.t.EXOEGh, v.t['5uCTFB'], v.t.rl45Qk, v.t.Bh9zpa, v.t.RdEy1N, v.t.qcdp09, v.t.F7w2Rk, v.t.gSyOgI, v.t.uYgqv7, v.t['b/1SBQ'], v.t.LhebZG],
    S = () => [v.t['20E/ys'], v.t['oa8+kp'], v.t.zoKkXl, v.t.FP9aS0, v.t.E5Zj1d, v.t['6Anmws'], v.t.sR78HR, v.t.gA9qPz, v.t.Hkiyp6, v.t.w1HMho],
    E = () => [v.t['8fy3DQ'], v.t.UproUV, v.t['7l3EyM'], v.t.GToyaG, v.t['DUs+Zm'], v.t.yLkbfn, v.t.oWdvws, v.t.tOoKTE, v.t['VM7+Oj'], v.t['hJx/u7']],
    C = (e) => {
        switch (e) {
            case 'NORMAL':
            default:
                return I();
            case 'CLAN':
                return S();
        }
    },
    O = (e) => {
        switch (e) {
            case 'NORMAL':
            default:
                return y();
            case 'CLAN':
                return E();
        }
    };
function P(e, t) {
    let n = O(t),
        r = g.default.extractTimestamp(e) % n.length;
    return n[r];
}
function A(e) {
    return (0, r.Rp)(
        v.NW.formatToParts(v.t['ihxM9/'], {
            username: e,
            usernameOnClick: h.dG4
        })
    );
}
function N(e) {
    var t;
    return (null == (t = f.Z.getGuild(e)) ? void 0 : t.hasFeature(h.oNc.CLAN)) ? 'CLAN' : 'NORMAL';
}
let T = {
    stringify: function (e, t) {
        var n, g, b;
        let I = (function (e) {
                var t, n, r;
                let [a] = null != (t = e.mentions) ? t : [];
                return null == a ? null : 'object' == typeof a ? (null != (n = p.default.getUser(a.id)) ? n : null) : 'string' == typeof a && null != (r = p.default.getUser(a)) ? r : null;
            })(e),
            y = e.channel_id,
            S = m.ZP.getName(null, y, e.author);
        switch (e.type) {
            case h.uaV.RECIPIENT_ADD:
                if (null == I) return;
                return (0, r.Rp)(
                    v.NW.formatToParts(v.t['7/Xl0d'], {
                        username: S,
                        usernameOnClick: h.dG4,
                        otherUsername: m.ZP.getName(null, y, I),
                        otherUsernameOnClick: h.dG4
                    })
                );
            case h.uaV.RECIPIENT_REMOVE:
                if (null == I) return;
                let E = e.author;
                if (null == E || E.id === I.id)
                    return (0, r.Rp)(
                        v.NW.formatToParts(v.t['Qn5+LS'], {
                            username: S,
                            usernameOnClick: h.dG4
                        })
                    );
                return (0, r.Rp)(
                    v.NW.formatToParts(v.t.QtZ0RE, {
                        username: S,
                        usernameOnClick: h.dG4,
                        otherUsername: m.ZP.getName(null, y, I),
                        otherUsernameOnClick: h.dG4
                    })
                );
            case h.uaV.CALL:
                let { call: C } = e;
                if (null != C && -1 === C.participants.indexOf(_.default.getId()))
                    return (0, r.Rp)(
                        v.NW.formatToParts(v.t.DbgSAw, {
                            username: S,
                            usernameOnClick: h.dG4
                        })
                    );
                return;
            case h.uaV.CHANNEL_NAME_CHANGE:
                return (0, r.Rp)(
                    v.NW.formatToParts(t.isForumPost() ? v.t['qa0e/v'] : v.t.XCPMEB, {
                        username: S,
                        usernameOnClick: h.dG4,
                        channelName: e.content
                    })
                );
            case h.uaV.CHANNEL_ICON_CHANGE:
                return (0, r.Rp)(
                    v.NW.formatToParts(v.t.wypJZ2, {
                        username: S,
                        usernameOnClick: h.dG4
                    })
                );
            case h.uaV.CHANNEL_PINNED_MESSAGE:
                return (0, r.Rp)(
                    v.NW.formatToParts(v.t['/M60j4'], {
                        username: S,
                        usernameOnClick: h.dG4
                    })
                );
            case h.uaV.USER_JOIN:
                let O = N(t.guild_id);
                return (0, r.Rp)(
                    v.NW.formatToParts(P(e.id, O), {
                        username: S,
                        usernameOnClick: h.dG4
                    })
                );
            case h.uaV.GUILD_BOOST:
                return A(S);
            case h.uaV.GUILD_BOOST_TIER_1:
            case h.uaV.GUILD_BOOST_TIER_2:
            case h.uaV.GUILD_BOOST_TIER_3:
                let T = d.Z.getChannel(y);
                return null == T || null == f.Z.getGuild(T.getGuildId())
                    ? A(S)
                    : (0, r.Rp)(
                          v.NW.formatToParts(v.t['ihxM9/'], {
                              username: S,
                              usernameOnClick: h.dG4
                          })
                      );
            case h.uaV.GUILD_INVITE_REMINDER:
                return v.NW.string(v.t.gxyKvr);
            case h.uaV.THREAD_STARTER_MESSAGE:
                return v.NW.formatToPlainString(v.t['B8H+Cg'], {
                    username: S,
                    threadName: t.name
                });
            case h.uaV.ROLE_SUBSCRIPTION_PURCHASE:
                if (e instanceof u.ZP) return null;
                return (0, r.Rp)(
                    (0, i.vp)({
                        username: S,
                        guildId: t.guild_id,
                        roleSubscriptionData: e.role_subscription_data
                    })
                );
            case h.uaV.PURCHASE_NOTIFICATION:
                if (e instanceof u.ZP || (null == (g = e.purchase_notification) || null == (n = g.guild_product_purchase) ? void 0 : n.product_name) == null) return null;
                return (0, r.Rp)(
                    (0, a.i)({
                        username: S,
                        productName: e.purchase_notification.guild_product_purchase.product_name
                    })
                );
            case h.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                if (e instanceof u.ZP) return null;
                let w = (0, l.ZH)((0, o.e5)(e));
                return (0, r.Rp)(
                    (0, c.Y)({
                        application: e.application,
                        username: w.nick
                    })
                );
            case h.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
                if (e instanceof u.ZP) return null;
                return (0, r.Rp)(
                    (0, s.B2)({
                        application: e.application,
                        username: (0, l.ZH)((0, o.e5)(e)).nick
                    })
                );
            case h.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
                if (e instanceof u.ZP) return null;
                return (0, r.Rp)(
                    (0, s.hj)({
                        application: e.application,
                        username: (0, l.ZH)((0, o.e5)(e)).nick
                    })
                );
            case h.uaV.AUTO_MODERATION_ACTION:
                if (
                    null == (b = e.embeds)
                        ? void 0
                        : b.some((e) => {
                              let { type: t } = e;
                              return t === h.hBH.AUTO_MODERATION_NOTIFICATION;
                          })
                ) {
                    let e = d.Z.getChannel(y);
                    if (null == e) return null;
                    let t = f.Z.getGuild(e.getGuildId());
                    return null == t ? null : (0, r.Rp)(v.NW.formatToParts(v.t['a+lJKi'], { guildName: t.name }));
                }
                return e.content;
            case h.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
                var L = e.content;
                let x = d.Z.getChannel(y);
                if (null == x) return null;
                let j = f.Z.getGuild(x.getGuildId());
                return null == j
                    ? null
                    : (0, r.Rp)(
                          v.NW.formatToParts(v.t.iOuWPj, {
                              username: S,
                              guildName: j.name,
                              time:
                                  '' !== L
                                      ? new Date(L).toLocaleString(v.NW.currentLocale, {
                                            hour: 'numeric',
                                            minute: '2-digit'
                                        })
                                      : ''
                          })
                      );
            case h.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
                let D = d.Z.getChannel(y);
                if (null == D) return null;
                let Z = f.Z.getGuild(D.getGuildId());
                return null == Z
                    ? null
                    : (0, r.Rp)(
                          v.NW.formatToParts(v.t.axmbpq, {
                              username: S,
                              guildName: Z.name
                          })
                      );
            default:
                return e.content;
        }
    },
    getSystemMessageUserJoin: function (e, t) {
        let n = C(t),
            r = g.default.extractTimestamp(e) % n.length;
        return n[r];
    },
    getSystemMessageUserJoinMobile: P,
    getSystemMessageBotJoin: function (e) {
        return null == b[e] ? null : v.NW.format(v.t.xw1Ij4, { learnOnClick: { onClick: () => window.open(b[e]) } });
    },
    getWelcomeMessageKind: N
};
