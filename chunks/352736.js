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
    h = n(981631),
    I = n(388032);
let v = {
        '234395307759108106': 'https://groovy.bot/commands',
        '365975655608745985': 'https://www.pokecord.com/getting-started',
        512412940897484800: 'http://jameslantz.net/smilebot'
    },
    b = () => [I.t['0cuj7u'], I.t['MuW+CA'], I.t.osqpHR, I.t['5ToSh4'], I.t.JEB8pq, I.t.pkOV5e, I.t.kRb1Jy, I.t.EmKLY2, I.t.rPtBnZ, I.t['5B/ekZ'], I.t.ESNC3d, I.t['Iw6d8/'], I.t.WecSZ2],
    y = () => [I.t.Jm6e09, I.t.MGRnRU, I.t.EXOEGh, I.t['5uCTFB'], I.t.rl45Qk, I.t.Bh9zpa, I.t.RdEy1N, I.t.qcdp09, I.t.F7w2Rk, I.t.gSyOgI, I.t.uYgqv7, I.t['b/1SBQ'], I.t.LhebZG],
    S = () => [I.t['20E/ys'], I.t['oa8+kp'], I.t.zoKkXl, I.t.FP9aS0, I.t.E5Zj1d, I.t['6Anmws'], I.t.sR78HR, I.t.gA9qPz, I.t.Hkiyp6, I.t.w1HMho],
    E = () => [I.t['8fy3DQ'], I.t.UproUV, I.t['7l3EyM'], I.t.GToyaG, I.t['DUs+Zm'], I.t.yLkbfn, I.t.oWdvws, I.t.tOoKTE, I.t['VM7+Oj'], I.t['hJx/u7']],
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
        I.NW.formatToParts(I.t['ihxM9/'], {
            username: e,
            usernameOnClick: h.dG4
        })
    );
}
function O(e) {
    var t;
    return (null == (t = f.Z.getGuild(e)) ? void 0 : t.hasFeature(h.oNc.CLAN)) ? 'CLAN' : 'NORMAL';
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
            case h.uaV.RECIPIENT_ADD:
                if (null == b) return;
                return (0, a.Rp)(
                    I.NW.formatToParts(I.t['7/Xl0d'], {
                        username: S,
                        usernameOnClick: h.dG4,
                        otherUsername: m.ZP.getName(null, y, b),
                        otherUsernameOnClick: h.dG4
                    })
                );
            case h.uaV.RECIPIENT_REMOVE:
                if (null == b) return;
                let E = e.author;
                if (null == E || E.id === b.id)
                    return (0, a.Rp)(
                        I.NW.formatToParts(I.t['Qn5+LS'], {
                            username: S,
                            usernameOnClick: h.dG4
                        })
                    );
                return (0, a.Rp)(
                    I.NW.formatToParts(I.t.QtZ0RE, {
                        username: S,
                        usernameOnClick: h.dG4,
                        otherUsername: m.ZP.getName(null, y, b),
                        otherUsernameOnClick: h.dG4
                    })
                );
            case h.uaV.CALL:
                let { call: C } = e;
                if (null != C && -1 === C.participants.indexOf(_.default.getId()))
                    return (0, a.Rp)(
                        I.NW.formatToParts(I.t.DbgSAw, {
                            username: S,
                            usernameOnClick: h.dG4
                        })
                    );
                return;
            case h.uaV.CHANNEL_NAME_CHANGE:
                return (0, a.Rp)(
                    I.NW.formatToParts(t.isForumPost() ? I.t['qa0e/v'] : I.t.XCPMEB, {
                        username: S,
                        usernameOnClick: h.dG4,
                        channelName: e.content
                    })
                );
            case h.uaV.CHANNEL_ICON_CHANGE:
                return (0, a.Rp)(
                    I.NW.formatToParts(I.t.wypJZ2, {
                        username: S,
                        usernameOnClick: h.dG4
                    })
                );
            case h.uaV.CHANNEL_PINNED_MESSAGE:
                return (0, a.Rp)(
                    I.NW.formatToParts(I.t['/M60j4'], {
                        username: S,
                        usernameOnClick: h.dG4
                    })
                );
            case h.uaV.USER_JOIN:
                let A = O(t.guild_id);
                return (0, a.Rp)(
                    I.NW.formatToParts(N(e.id, A), {
                        username: S,
                        usernameOnClick: h.dG4
                    })
                );
            case h.uaV.GUILD_BOOST:
                return P(S);
            case h.uaV.GUILD_BOOST_TIER_1:
            case h.uaV.GUILD_BOOST_TIER_2:
            case h.uaV.GUILD_BOOST_TIER_3:
                let T = d.Z.getChannel(y);
                return null == T || null == f.Z.getGuild(T.getGuildId())
                    ? P(S)
                    : (0, a.Rp)(
                          I.NW.formatToParts(I.t['ihxM9/'], {
                              username: S,
                              usernameOnClick: h.dG4
                          })
                      );
            case h.uaV.GUILD_INVITE_REMINDER:
                return I.NW.string(I.t.gxyKvr);
            case h.uaV.THREAD_STARTER_MESSAGE:
                return I.NW.formatToPlainString(I.t['B8H+Cg'], {
                    username: S,
                    threadName: t.name
                });
            case h.uaV.ROLE_SUBSCRIPTION_PURCHASE:
                if (e instanceof u.ZP) return null;
                return (0, a.Rp)(
                    (0, i.vp)({
                        username: S,
                        guildId: t.guild_id,
                        roleSubscriptionData: e.role_subscription_data
                    })
                );
            case h.uaV.PURCHASE_NOTIFICATION:
                if (e instanceof u.ZP || (null == (g = e.purchase_notification) || null == (n = g.guild_product_purchase) ? void 0 : n.product_name) == null) return null;
                return (0, a.Rp)(
                    (0, r.i)({
                        username: S,
                        productName: e.purchase_notification.guild_product_purchase.product_name
                    })
                );
            case h.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                if (e instanceof u.ZP) return null;
                let L = (0, l.ZH)((0, o.e5)(e));
                return (0, a.Rp)(
                    (0, c.Y)({
                        application: e.application,
                        username: L.nick
                    })
                );
            case h.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
                if (e instanceof u.ZP) return null;
                return (0, a.Rp)(
                    (0, s.B2)({
                        application: e.application,
                        username: (0, l.ZH)((0, o.e5)(e)).nick
                    })
                );
            case h.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
                if (e instanceof u.ZP) return null;
                return (0, a.Rp)(
                    (0, s.hj)({
                        application: e.application,
                        username: (0, l.ZH)((0, o.e5)(e)).nick
                    })
                );
            case h.uaV.AUTO_MODERATION_ACTION:
                if (
                    null == (v = e.embeds)
                        ? void 0
                        : v.some((e) => {
                              let { type: t } = e;
                              return t === h.hBH.AUTO_MODERATION_NOTIFICATION;
                          })
                ) {
                    let e = d.Z.getChannel(y);
                    if (null == e) return null;
                    let t = f.Z.getGuild(e.getGuildId());
                    return null == t ? null : (0, a.Rp)(I.NW.formatToParts(I.t['a+lJKi'], { guildName: t.name }));
                }
                return e.content;
            case h.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
                var w = e.content;
                let x = d.Z.getChannel(y);
                if (null == x) return null;
                let Z = f.Z.getGuild(x.getGuildId());
                return null == Z
                    ? null
                    : (0, a.Rp)(
                          I.NW.formatToParts(I.t.iOuWPj, {
                              username: S,
                              guildName: Z.name,
                              time:
                                  '' !== w
                                      ? new Date(w).toLocaleString(I.NW.currentLocale, {
                                            hour: 'numeric',
                                            minute: '2-digit'
                                        })
                                      : ''
                          })
                      );
            case h.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
                let R = d.Z.getChannel(y);
                if (null == R) return null;
                let D = f.Z.getGuild(R.getGuildId());
                return null == D
                    ? null
                    : (0, a.Rp)(
                          I.NW.formatToParts(I.t.axmbpq, {
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
        return null == v[e] ? null : I.NW.format(I.t.xw1Ij4, { learnOnClick: { onClick: () => window.open(v[e]) } });
    },
    getWelcomeMessageKind: O
};
