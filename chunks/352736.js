n.d(t, { Z: () => T });
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
        var n, g, v, b;
        let y = null == (n = e.mentions) ? void 0 : n[0],
            S = null != y && 'string' != typeof y ? p.default.getUser(y.id) : void 0,
            E = e.channel_id,
            C = m.ZP.getName(null, E, e.author);
        switch (e.type) {
            case h.uaV.RECIPIENT_ADD:
                if (null == S) return;
                return (0, a.Rp)(
                    I.NW.formatToParts(I.t['7/Xl0d'], {
                        username: C,
                        usernameOnClick: h.dG4,
                        otherUsername: m.ZP.getName(null, E, S),
                        otherUsernameOnClick: h.dG4
                    })
                );
            case h.uaV.RECIPIENT_REMOVE:
                if (null == S) return;
                let A = e.author;
                if (null == A || A.id === S.id)
                    return (0, a.Rp)(
                        I.NW.formatToParts(I.t['Qn5+LS'], {
                            username: C,
                            usernameOnClick: h.dG4
                        })
                    );
                return (0, a.Rp)(
                    I.NW.formatToParts(I.t.QtZ0RE, {
                        username: C,
                        usernameOnClick: h.dG4,
                        otherUsername: m.ZP.getName(null, E, S),
                        otherUsernameOnClick: h.dG4
                    })
                );
            case h.uaV.CALL:
                let { call: T } = e;
                if (null != T && -1 === T.participants.indexOf(_.default.getId()))
                    return (0, a.Rp)(
                        I.NW.formatToParts(I.t.DbgSAw, {
                            username: C,
                            usernameOnClick: h.dG4
                        })
                    );
                return;
            case h.uaV.CHANNEL_NAME_CHANGE:
                return (0, a.Rp)(
                    I.NW.formatToParts(t.isForumPost() ? I.t['qa0e/v'] : I.t.XCPMEB, {
                        username: C,
                        usernameOnClick: h.dG4,
                        channelName: e.content
                    })
                );
            case h.uaV.CHANNEL_ICON_CHANGE:
                return (0, a.Rp)(
                    I.NW.formatToParts(I.t.wypJZ2, {
                        username: C,
                        usernameOnClick: h.dG4
                    })
                );
            case h.uaV.CHANNEL_PINNED_MESSAGE:
                return (0, a.Rp)(
                    I.NW.formatToParts(I.t['/M60j4'], {
                        username: C,
                        usernameOnClick: h.dG4
                    })
                );
            case h.uaV.USER_JOIN:
                let L = O(t.guild_id);
                return (0, a.Rp)(
                    I.NW.formatToParts(N(e.id, L), {
                        username: C,
                        usernameOnClick: h.dG4
                    })
                );
            case h.uaV.GUILD_BOOST:
                return P(C);
            case h.uaV.GUILD_BOOST_TIER_1:
            case h.uaV.GUILD_BOOST_TIER_2:
            case h.uaV.GUILD_BOOST_TIER_3:
                let w = d.Z.getChannel(E);
                return null == w || null == f.Z.getGuild(w.getGuildId())
                    ? P(C)
                    : (0, a.Rp)(
                          I.NW.formatToParts(I.t['ihxM9/'], {
                              username: C,
                              usernameOnClick: h.dG4
                          })
                      );
            case h.uaV.GUILD_INVITE_REMINDER:
                return I.NW.string(I.t.gxyKvr);
            case h.uaV.THREAD_STARTER_MESSAGE:
                return I.NW.formatToPlainString(I.t['B8H+Cg'], {
                    username: C,
                    threadName: t.name
                });
            case h.uaV.ROLE_SUBSCRIPTION_PURCHASE:
                if (e instanceof u.ZP) return null;
                return (0, a.Rp)(
                    (0, i.vp)({
                        username: C,
                        guildId: t.guild_id,
                        roleSubscriptionData: e.role_subscription_data
                    })
                );
            case h.uaV.PURCHASE_NOTIFICATION:
                if (e instanceof u.ZP || (null == (v = e.purchase_notification) || null == (g = v.guild_product_purchase) ? void 0 : g.product_name) == null) return null;
                return (0, a.Rp)(
                    (0, r.i)({
                        username: C,
                        productName: e.purchase_notification.guild_product_purchase.product_name
                    })
                );
            case h.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                if (e instanceof u.ZP) return null;
                let x = (0, l.ZH)((0, o.e5)(e));
                return (0, a.Rp)(
                    (0, c.Y)({
                        application: e.application,
                        username: x.nick
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
                    null == (b = e.embeds)
                        ? void 0
                        : b.some((e) => {
                              let { type: t } = e;
                              return t === h.hBH.AUTO_MODERATION_NOTIFICATION;
                          })
                ) {
                    let e = d.Z.getChannel(E);
                    if (null == e) return null;
                    let t = f.Z.getGuild(e.getGuildId());
                    return null == t ? null : (0, a.Rp)(I.NW.formatToParts(I.t['a+lJKi'], { guildName: t.name }));
                }
                return e.content;
            case h.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
                var Z = e.content;
                let R = d.Z.getChannel(E);
                if (null == R) return null;
                let D = f.Z.getGuild(R.getGuildId());
                return null == D
                    ? null
                    : (0, a.Rp)(
                          I.NW.formatToParts(I.t.iOuWPj, {
                              username: C,
                              guildName: D.name,
                              time:
                                  '' !== Z
                                      ? new Date(Z).toLocaleString(I.NW.currentLocale, {
                                            hour: 'numeric',
                                            minute: '2-digit'
                                        })
                                      : ''
                          })
                      );
            case h.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
                let k = d.Z.getChannel(E);
                if (null == k) return null;
                let j = f.Z.getGuild(k.getGuildId());
                return null == j
                    ? null
                    : (0, a.Rp)(
                          I.NW.formatToParts(I.t.axmbpq, {
                              username: C,
                              guildName: j.name
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
