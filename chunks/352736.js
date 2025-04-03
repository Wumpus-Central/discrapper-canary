n.d(e, { Z: () => Z });
var r = n(25209),
    a = n(97797),
    l = n(35125),
    u = n(786761),
    i = n(739566),
    o = n(499401),
    s = n(693912),
    c = n(23750),
    d = n(314897),
    N = n(592125),
    m = n(430824),
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
        r = g.default.extractTimestamp(t) % n.length;
    return n[r];
}
function G(t) {
    return (0, r.Rp)(
        p.NW.formatToParts(p.t['ihxM9/'], {
            username: t,
            usernameOnClick: E.dG4
        })
    );
}
function L(t) {
    var e;
    return (null == (e = m.Z.getGuild(t)) ? void 0 : e.hasFeature(E.oNc.CLAN)) ? 'CLAN' : 'NORMAL';
}
let Z = {
    stringify: function (t, e) {
        var n, g, R, T;
        let I = null == (n = t.mentions) ? void 0 : n[0],
            O = null != I && 'string' != typeof I ? f.default.getUser(I.id) : void 0,
            h = t.channel_id,
            A = _.ZP.getName(null, h, t.author);
        switch (t.type) {
            case E.uaV.RECIPIENT_ADD:
                if (null == O) return;
                return (0, r.Rp)(
                    p.NW.formatToParts(p.t['7/Xl0d'], {
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
                    return (0, r.Rp)(
                        p.NW.formatToParts(p.t['Qn5+LS'], {
                            username: A,
                            usernameOnClick: E.dG4
                        })
                    );
                return (0, r.Rp)(
                    p.NW.formatToParts(p.t.QtZ0RE, {
                        username: A,
                        usernameOnClick: E.dG4,
                        otherUsername: _.ZP.getName(null, h, O),
                        otherUsernameOnClick: E.dG4
                    })
                );
            case E.uaV.CALL:
                let { call: Z } = t;
                if (null != Z && -1 === Z.participants.indexOf(d.default.getId()))
                    return (0, r.Rp)(
                        p.NW.formatToParts(p.t.DbgSAw, {
                            username: A,
                            usernameOnClick: E.dG4
                        })
                    );
                return;
            case E.uaV.CHANNEL_NAME_CHANGE:
                return (0, r.Rp)(
                    p.NW.formatToParts(e.isForumPost() ? p.t['qa0e/v'] : p.t.XCPMEB, {
                        username: A,
                        usernameOnClick: E.dG4,
                        channelName: t.content
                    })
                );
            case E.uaV.CHANNEL_ICON_CHANGE:
                return (0, r.Rp)(
                    p.NW.formatToParts(p.t.wypJZ2, {
                        username: A,
                        usernameOnClick: E.dG4
                    })
                );
            case E.uaV.CHANNEL_PINNED_MESSAGE:
                return (0, r.Rp)(
                    p.NW.formatToParts(p.t['/M60j4'], {
                        username: A,
                        usernameOnClick: E.dG4
                    })
                );
            case E.uaV.USER_JOIN:
                let U = L(e.guild_id);
                return (0, r.Rp)(
                    p.NW.formatToParts(P(t.id, U), {
                        username: A,
                        usernameOnClick: E.dG4
                    })
                );
            case E.uaV.GUILD_BOOST:
                return G(A);
            case E.uaV.GUILD_BOOST_TIER_1:
            case E.uaV.GUILD_BOOST_TIER_2:
            case E.uaV.GUILD_BOOST_TIER_3:
                let S = N.Z.getChannel(h);
                return null == S || null == m.Z.getGuild(S.getGuildId())
                    ? G(A)
                    : (0, r.Rp)(
                          p.NW.formatToParts(p.t['ihxM9/'], {
                              username: A,
                              usernameOnClick: E.dG4
                          })
                      );
            case E.uaV.GUILD_INVITE_REMINDER:
                return p.NW.string(p.t.gxyKvr);
            case E.uaV.THREAD_STARTER_MESSAGE:
                return p.NW.formatToPlainString(p.t['B8H+Cg'], {
                    username: A,
                    threadName: e.name
                });
            case E.uaV.ROLE_SUBSCRIPTION_PURCHASE:
                if (t instanceof c.ZP) return null;
                return (0, r.Rp)(
                    (0, l.vp)({
                        username: A,
                        guildId: e.guild_id,
                        roleSubscriptionData: t.role_subscription_data
                    })
                );
            case E.uaV.PURCHASE_NOTIFICATION:
                if (t instanceof c.ZP || (null == (R = t.purchase_notification) || null == (g = R.guild_product_purchase) ? void 0 : g.product_name) == null) return null;
                return (0, r.Rp)(
                    (0, a.i)({
                        username: A,
                        productName: t.purchase_notification.guild_product_purchase.product_name
                    })
                );
            case E.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                if (t instanceof c.ZP) return null;
                let W = (0, i.ZH)((0, u.e5)(t));
                return (0, r.Rp)(
                    (0, o.Y)({
                        application: t.application,
                        username: W.nick
                    })
                );
            case E.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
                if (t instanceof c.ZP) return null;
                return (0, r.Rp)(
                    (0, s.B2)({
                        application: t.application,
                        username: (0, i.ZH)((0, u.e5)(t)).nick
                    })
                );
            case E.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
                if (t instanceof c.ZP) return null;
                return (0, r.Rp)(
                    (0, s.hj)({
                        application: t.application,
                        username: (0, i.ZH)((0, u.e5)(t)).nick
                    })
                );
            case E.uaV.AUTO_MODERATION_ACTION:
                if (
                    null == (T = t.embeds)
                        ? void 0
                        : T.some((t) => {
                              let { type: e } = t;
                              return e === E.hBH.AUTO_MODERATION_NOTIFICATION;
                          })
                ) {
                    let t = N.Z.getChannel(h);
                    if (null == t) return null;
                    let e = m.Z.getGuild(t.getGuildId());
                    return null == e ? null : (0, r.Rp)(p.NW.formatToParts(p.t['a+lJKi'], { guildName: e.name }));
                }
                return t.content;
            case E.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
                var k = t.content;
                let D = N.Z.getChannel(h);
                if (null == D) return null;
                let M = m.Z.getGuild(D.getGuildId());
                return null == M
                    ? null
                    : (0, r.Rp)(
                          p.NW.formatToParts(p.t.iOuWPj, {
                              username: A,
                              guildName: M.name,
                              time:
                                  '' !== k
                                      ? new Date(k).toLocaleString(p.NW.currentLocale, {
                                            hour: 'numeric',
                                            minute: '2-digit'
                                        })
                                      : ''
                          })
                      );
            case E.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
                let V = N.Z.getChannel(h);
                if (null == V) return null;
                let v = m.Z.getGuild(V.getGuildId());
                return null == v
                    ? null
                    : (0, r.Rp)(
                          p.NW.formatToParts(p.t.axmbpq, {
                              username: A,
                              guildName: v.name
                          })
                      );
            default:
                return t.content;
        }
    },
    getSystemMessageUserJoin: function (t, e) {
        let n = A(e),
            r = g.default.extractTimestamp(t) % n.length;
        return n[r];
    },
    getSystemMessageUserJoinMobile: P,
    getSystemMessageBotJoin: function (t) {
        return null == R[t] ? null : p.NW.format(p.t.xw1Ij4, { learnOnClick: { onClick: () => window.open(R[t]) } });
    },
    getWelcomeMessageKind: L
};
