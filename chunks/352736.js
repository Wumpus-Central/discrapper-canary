n.d(t, { Z: () => w }), n(388685);
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
    m = n(594174),
    p = n(5192),
    g = n(709054),
    v = n(981631),
    b = n(388032);
let h = {
        '234395307759108106': 'https://groovy.bot/commands',
        '365975655608745985': 'https://www.pokecord.com/getting-started',
        512412940897484800: 'http://jameslantz.net/smilebot'
    },
    I = () => [b.t['0cuj7u'], b.t['MuW+CA'], b.t.osqpHR, b.t['5ToSh4'], b.t.JEB8pq, b.t.pkOV5e, b.t.kRb1Jy, b.t.EmKLY2, b.t.rPtBnZ, b.t['5B/ekZ'], b.t.ESNC3d, b.t['Iw6d8/'], b.t.WecSZ2],
    y = () => [b.t.Jm6e09, b.t.MGRnRU, b.t.EXOEGh, b.t['5uCTFB'], b.t.rl45Qk, b.t.Bh9zpa, b.t.RdEy1N, b.t.qcdp09, b.t.F7w2Rk, b.t.gSyOgI, b.t.uYgqv7, b.t['b/1SBQ'], b.t.LhebZG],
    S = () => [b.t['20E/ys'], b.t['oa8+kp'], b.t.zoKkXl, b.t.FP9aS0, b.t.E5Zj1d, b.t['6Anmws'], b.t.sR78HR, b.t.gA9qPz, b.t.Hkiyp6, b.t.w1HMho],
    E = () => [b.t['8fy3DQ'], b.t.UproUV, b.t['7l3EyM'], b.t.GToyaG, b.t['DUs+Zm'], b.t.yLkbfn, b.t.oWdvws, b.t.tOoKTE, b.t['VM7+Oj'], b.t['hJx/u7']],
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
        b.NW.formatToParts(b.t['ihxM9/'], {
            username: e,
            usernameOnClick: v.dG4
        })
    );
}
function N(e) {
    var t;
    return (null == (t = f.Z.getGuild(e)) ? void 0 : t.hasFeature(v.oNc.CLAN)) ? 'CLAN' : 'NORMAL';
}
let w = {
    stringify: function (e, t) {
        var n, g, h;
        let I = (function (e) {
                var t, n, r;
                let [a] = null != (t = e.mentions) ? t : [];
                return null == a ? null : 'object' == typeof a ? (null != (n = m.default.getUser(a.id)) ? n : null) : 'string' == typeof a && null != (r = m.default.getUser(a)) ? r : null;
            })(e),
            y = e.channel_id,
            S = p.ZP.getName(null, y, e.author);
        switch (e.type) {
            case v.uaV.RECIPIENT_ADD:
                if (null == I) return;
                return (0, r.Rp)(
                    b.NW.formatToParts(b.t['7/Xl0d'], {
                        username: S,
                        usernameOnClick: v.dG4,
                        otherUsername: p.ZP.getName(null, y, I),
                        otherUsernameOnClick: v.dG4
                    })
                );
            case v.uaV.RECIPIENT_REMOVE:
                if (null == I) return;
                let E = e.author;
                if (null == E || E.id === I.id)
                    return (0, r.Rp)(
                        b.NW.formatToParts(b.t['Qn5+LS'], {
                            username: S,
                            usernameOnClick: v.dG4
                        })
                    );
                return (0, r.Rp)(
                    b.NW.formatToParts(b.t.QtZ0RE, {
                        username: S,
                        usernameOnClick: v.dG4,
                        otherUsername: p.ZP.getName(null, y, I),
                        otherUsernameOnClick: v.dG4
                    })
                );
            case v.uaV.CALL:
                let { call: C } = e;
                if (null != C && -1 === C.participants.indexOf(_.default.getId()))
                    return (0, r.Rp)(
                        b.NW.formatToParts(b.t.DbgSAw, {
                            username: S,
                            usernameOnClick: v.dG4
                        })
                    );
                return;
            case v.uaV.CHANNEL_NAME_CHANGE:
                return (0, r.Rp)(
                    b.NW.formatToParts(t.isForumPost() ? b.t['qa0e/v'] : b.t.XCPMEB, {
                        username: S,
                        usernameOnClick: v.dG4,
                        channelName: e.content
                    })
                );
            case v.uaV.CHANNEL_ICON_CHANGE:
                return (0, r.Rp)(
                    b.NW.formatToParts(b.t.wypJZ2, {
                        username: S,
                        usernameOnClick: v.dG4
                    })
                );
            case v.uaV.CHANNEL_PINNED_MESSAGE:
                return (0, r.Rp)(
                    b.NW.formatToParts(b.t['/M60j4'], {
                        username: S,
                        usernameOnClick: v.dG4
                    })
                );
            case v.uaV.USER_JOIN:
                let O = N(t.guild_id);
                return (0, r.Rp)(
                    b.NW.formatToParts(P(e.id, O), {
                        username: S,
                        usernameOnClick: v.dG4
                    })
                );
            case v.uaV.GUILD_BOOST:
                return A(S);
            case v.uaV.GUILD_BOOST_TIER_1:
            case v.uaV.GUILD_BOOST_TIER_2:
            case v.uaV.GUILD_BOOST_TIER_3:
                let w = d.Z.getChannel(y);
                return null == w || null == f.Z.getGuild(w.getGuildId())
                    ? A(S)
                    : (0, r.Rp)(
                          b.NW.formatToParts(b.t['ihxM9/'], {
                              username: S,
                              usernameOnClick: v.dG4
                          })
                      );
            case v.uaV.GUILD_INVITE_REMINDER:
                return b.NW.string(b.t.gxyKvr);
            case v.uaV.THREAD_STARTER_MESSAGE:
                return b.NW.formatToPlainString(b.t['B8H+Cg'], {
                    username: S,
                    threadName: t.name
                });
            case v.uaV.ROLE_SUBSCRIPTION_PURCHASE:
                if (e instanceof u.ZP) return null;
                return (0, r.Rp)(
                    (0, i.vp)({
                        username: S,
                        guildId: t.guild_id,
                        roleSubscriptionData: e.role_subscription_data
                    })
                );
            case v.uaV.PURCHASE_NOTIFICATION:
                if (e instanceof u.ZP || (null == (g = e.purchase_notification) || null == (n = g.guild_product_purchase) ? void 0 : n.product_name) == null) return null;
                return (0, r.Rp)(
                    (0, a.i)({
                        username: S,
                        productName: e.purchase_notification.guild_product_purchase.product_name
                    })
                );
            case v.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                if (e instanceof u.ZP) return null;
                let T = (0, l.ZH)((0, o.e5)(e));
                return (0, r.Rp)(
                    (0, c.Y)({
                        application: e.application,
                        username: T.nick
                    })
                );
            case v.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
                if (e instanceof u.ZP) return null;
                return (0, r.Rp)(
                    (0, s.B2)({
                        application: e.application,
                        username: (0, l.ZH)((0, o.e5)(e)).nick
                    })
                );
            case v.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
                if (e instanceof u.ZP) return null;
                return (0, r.Rp)(
                    (0, s.hj)({
                        application: e.application,
                        username: (0, l.ZH)((0, o.e5)(e)).nick
                    })
                );
            case v.uaV.AUTO_MODERATION_ACTION:
                if (
                    null == (h = e.embeds)
                        ? void 0
                        : h.some((e) => {
                              let { type: t } = e;
                              return t === v.hBH.AUTO_MODERATION_NOTIFICATION;
                          })
                ) {
                    let e = d.Z.getChannel(y);
                    if (null == e) return null;
                    let t = f.Z.getGuild(e.getGuildId());
                    return null == t ? null : (0, r.Rp)(b.NW.formatToParts(b.t['a+lJKi'], { guildName: t.name }));
                }
                return e.content;
            case v.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
                var L = e.content;
                let x = d.Z.getChannel(y);
                if (null == x) return null;
                let j = f.Z.getGuild(x.getGuildId());
                return null == j
                    ? null
                    : (0, r.Rp)(
                          b.NW.formatToParts(b.t.iOuWPj, {
                              username: S,
                              guildName: j.name,
                              time:
                                  '' !== L
                                      ? new Date(L).toLocaleString(b.NW.currentLocale, {
                                            hour: 'numeric',
                                            minute: '2-digit'
                                        })
                                      : ''
                          })
                      );
            case v.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
                let k = d.Z.getChannel(y);
                if (null == k) return null;
                let Z = f.Z.getGuild(k.getGuildId());
                return null == Z
                    ? null
                    : (0, r.Rp)(
                          b.NW.formatToParts(b.t.axmbpq, {
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
        return null == h[e] ? null : b.NW.format(b.t.xw1Ij4, { learnOnClick: { onClick: () => window.open(h[e]) } });
    },
    getWelcomeMessageKind: N
};
