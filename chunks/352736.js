n.d(t, { Z: () => T }), n(388685);
var a = n(25209),
    r = n(97797),
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
    I = n(981631),
    h = n(388032);
let v = {
        '234395307759108106': 'https://groovy.bot/commands',
        '365975655608745985': 'https://www.pokecord.com/getting-started',
        512412940897484800: 'http://jameslantz.net/smilebot'
    },
    b = () => [h.t['0cuj7u'], h.t['MuW+CA'], h.t.osqpHR, h.t['5ToSh4'], h.t.JEB8pq, h.t.pkOV5e, h.t.kRb1Jy, h.t.EmKLY2, h.t.rPtBnZ, h.t['5B/ekZ'], h.t.ESNC3d, h.t['Iw6d8/'], h.t.WecSZ2],
    y = () => [h.t.Jm6e09, h.t.MGRnRU, h.t.EXOEGh, h.t['5uCTFB'], h.t.rl45Qk, h.t.Bh9zpa, h.t.RdEy1N, h.t.qcdp09, h.t.F7w2Rk, h.t.gSyOgI, h.t.uYgqv7, h.t['b/1SBQ'], h.t.LhebZG],
    S = () => [h.t['20E/ys'], h.t['oa8+kp'], h.t.zoKkXl, h.t.FP9aS0, h.t.E5Zj1d, h.t['6Anmws'], h.t.sR78HR, h.t.gA9qPz, h.t.Hkiyp6, h.t.w1HMho],
    E = () => [h.t['8fy3DQ'], h.t.UproUV, h.t['7l3EyM'], h.t.GToyaG, h.t['DUs+Zm'], h.t.yLkbfn, h.t.oWdvws, h.t.tOoKTE, h.t['VM7+Oj'], h.t['hJx/u7']],
    C = (e) => {
        switch (e) {
            case 'NORMAL':
            default:
                return b();
            case 'CLAN':
                return S();
        }
    },
    A = (e) => {
        switch (e) {
            case 'NORMAL':
            default:
                return y();
            case 'CLAN':
                return E();
        }
    };
function N(e, t) {
    let n = A(t),
        a = g.default.extractTimestamp(e) % n.length;
    return n[a];
}
function P(e) {
    return (0, a.Rp)(
        h.NW.formatToParts(h.t['ihxM9/'], {
            username: e,
            usernameOnClick: I.dG4
        })
    );
}
function O(e) {
    var t;
    return (null == (t = f.Z.getGuild(e)) ? void 0 : t.hasFeature(I.oNc.CLAN)) ? 'CLAN' : 'NORMAL';
}
let T = {
    stringify: function (e, t) {
        var n, g, v;
        let b = (function (e) {
                var t, n, a;
                let [r] = null != (t = e.mentions) ? t : [];
                return null == r ? null : 'object' == typeof r ? (null != (n = p.default.getUser(r.id)) ? n : null) : 'string' == typeof r && null != (a = p.default.getUser(r)) ? a : null;
            })(e),
            y = e.channel_id,
            S = m.ZP.getName(null, y, e.author);
        switch (e.type) {
            case I.uaV.RECIPIENT_ADD:
                if (null == b) return;
                return (0, a.Rp)(
                    h.NW.formatToParts(h.t['7/Xl0d'], {
                        username: S,
                        usernameOnClick: I.dG4,
                        otherUsername: m.ZP.getName(null, y, b),
                        otherUsernameOnClick: I.dG4
                    })
                );
            case I.uaV.RECIPIENT_REMOVE:
                if (null == b) return;
                let E = e.author;
                if (null == E || E.id === b.id)
                    return (0, a.Rp)(
                        h.NW.formatToParts(h.t['Qn5+LS'], {
                            username: S,
                            usernameOnClick: I.dG4
                        })
                    );
                return (0, a.Rp)(
                    h.NW.formatToParts(h.t.QtZ0RE, {
                        username: S,
                        usernameOnClick: I.dG4,
                        otherUsername: m.ZP.getName(null, y, b),
                        otherUsernameOnClick: I.dG4
                    })
                );
            case I.uaV.CALL:
                let { call: C } = e;
                if (null != C && -1 === C.participants.indexOf(_.default.getId()))
                    return (0, a.Rp)(
                        h.NW.formatToParts(h.t.DbgSAw, {
                            username: S,
                            usernameOnClick: I.dG4
                        })
                    );
                return;
            case I.uaV.CHANNEL_NAME_CHANGE:
                return (0, a.Rp)(
                    h.NW.formatToParts(t.isForumPost() ? h.t['qa0e/v'] : h.t.XCPMEB, {
                        username: S,
                        usernameOnClick: I.dG4,
                        channelName: e.content
                    })
                );
            case I.uaV.CHANNEL_ICON_CHANGE:
                return (0, a.Rp)(
                    h.NW.formatToParts(h.t.wypJZ2, {
                        username: S,
                        usernameOnClick: I.dG4
                    })
                );
            case I.uaV.CHANNEL_PINNED_MESSAGE:
                return (0, a.Rp)(
                    h.NW.formatToParts(h.t['/M60j4'], {
                        username: S,
                        usernameOnClick: I.dG4
                    })
                );
            case I.uaV.USER_JOIN:
                let A = O(t.guild_id);
                return (0, a.Rp)(
                    h.NW.formatToParts(N(e.id, A), {
                        username: S,
                        usernameOnClick: I.dG4
                    })
                );
            case I.uaV.GUILD_BOOST:
                return P(S);
            case I.uaV.GUILD_BOOST_TIER_1:
            case I.uaV.GUILD_BOOST_TIER_2:
            case I.uaV.GUILD_BOOST_TIER_3:
                let T = d.Z.getChannel(y);
                return null == T || null == f.Z.getGuild(T.getGuildId())
                    ? P(S)
                    : (0, a.Rp)(
                          h.NW.formatToParts(h.t['ihxM9/'], {
                              username: S,
                              usernameOnClick: I.dG4
                          })
                      );
            case I.uaV.GUILD_INVITE_REMINDER:
                return h.NW.string(h.t.gxyKvr);
            case I.uaV.THREAD_STARTER_MESSAGE:
                return h.NW.formatToPlainString(h.t['B8H+Cg'], {
                    username: S,
                    threadName: t.name
                });
            case I.uaV.ROLE_SUBSCRIPTION_PURCHASE:
                if (e instanceof u.ZP) return null;
                return (0, a.Rp)(
                    (0, i.vp)({
                        username: S,
                        guildId: t.guild_id,
                        roleSubscriptionData: e.role_subscription_data
                    })
                );
            case I.uaV.PURCHASE_NOTIFICATION:
                if (e instanceof u.ZP || (null == (g = e.purchase_notification) || null == (n = g.guild_product_purchase) ? void 0 : n.product_name) == null) return null;
                return (0, a.Rp)(
                    (0, r.i)({
                        username: S,
                        productName: e.purchase_notification.guild_product_purchase.product_name
                    })
                );
            case I.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                if (e instanceof u.ZP) return null;
                let L = (0, l.ZH)((0, o.e5)(e));
                return (0, a.Rp)(
                    (0, c.Y)({
                        application: e.application,
                        username: L.nick
                    })
                );
            case I.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
                if (e instanceof u.ZP) return null;
                return (0, a.Rp)(
                    (0, s.B2)({
                        application: e.application,
                        username: (0, l.ZH)((0, o.e5)(e)).nick
                    })
                );
            case I.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
                if (e instanceof u.ZP) return null;
                return (0, a.Rp)(
                    (0, s.hj)({
                        application: e.application,
                        username: (0, l.ZH)((0, o.e5)(e)).nick
                    })
                );
            case I.uaV.AUTO_MODERATION_ACTION:
                if (
                    null == (v = e.embeds)
                        ? void 0
                        : v.some((e) => {
                              let { type: t } = e;
                              return t === I.hBH.AUTO_MODERATION_NOTIFICATION;
                          })
                ) {
                    let e = d.Z.getChannel(y);
                    if (null == e) return null;
                    let t = f.Z.getGuild(e.getGuildId());
                    return null == t ? null : (0, a.Rp)(h.NW.formatToParts(h.t['a+lJKi'], { guildName: t.name }));
                }
                return e.content;
            case I.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
                var w = e.content;
                let x = d.Z.getChannel(y);
                if (null == x) return null;
                let Z = f.Z.getGuild(x.getGuildId());
                return null == Z
                    ? null
                    : (0, a.Rp)(
                          h.NW.formatToParts(h.t.iOuWPj, {
                              username: S,
                              guildName: Z.name,
                              time:
                                  '' !== w
                                      ? new Date(w).toLocaleString(h.NW.currentLocale, {
                                            hour: 'numeric',
                                            minute: '2-digit'
                                        })
                                      : ''
                          })
                      );
            case I.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
                let R = d.Z.getChannel(y);
                if (null == R) return null;
                let D = f.Z.getGuild(R.getGuildId());
                return null == D
                    ? null
                    : (0, a.Rp)(
                          h.NW.formatToParts(h.t.axmbpq, {
                              username: S,
                              guildName: D.name
                          })
                      );
            default:
                return e.content;
        }
    },
    getSystemMessageUserJoin: function (e, t) {
        let n = C(t),
            a = g.default.extractTimestamp(e) % n.length;
        return n[a];
    },
    getSystemMessageUserJoinMobile: N,
    getSystemMessageBotJoin: function (e) {
        return null == v[e] ? null : h.NW.format(h.t.xw1Ij4, { learnOnClick: { onClick: () => window.open(v[e]) } });
    },
    getWelcomeMessageKind: O
};
