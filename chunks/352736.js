n.d(t, { Z: () => N }), n(388685);
var a = n(25209),
    r = n(97797),
    l = n(35125),
    i = n(786761),
    s = n(739566),
    o = n(499401),
    c = n(693912),
    d = n(23750),
    u = n(314897),
    m = n(592125),
    p = n(430824),
    x = n(594174),
    h = n(5192),
    b = n(709054),
    f = n(981631),
    v = n(388032);
let _ = {
        '234395307759108106': 'https://groovy.bot/commands',
        '365975655608745985': 'https://www.pokecord.com/getting-started',
        512412940897484800: 'http://jameslantz.net/smilebot'
    },
    g = () => [v.t['0cuj7u'], v.t['MuW+CA'], v.t.osqpHR, v.t['5ToSh4'], v.t.JEB8pq, v.t.pkOV5e, v.t.kRb1Jy, v.t.EmKLY2, v.t.rPtBnZ, v.t['5B/ekZ'], v.t.ESNC3d, v.t['Iw6d8/'], v.t.WecSZ2],
    j = () => [v.t.Jm6e09, v.t.MGRnRU, v.t.EXOEGh, v.t['5uCTFB'], v.t.rl45Qk, v.t.Bh9zpa, v.t.RdEy1N, v.t.qcdp09, v.t.F7w2Rk, v.t.gSyOgI, v.t.uYgqv7, v.t['b/1SBQ'], v.t.LhebZG];
function y(e) {
    let t = j(),
        n = b.default.extractTimestamp(e) % t.length;
    return t[n];
}
function C(e) {
    return (0, a.Rp)(
        v.intl.formatToParts(v.t['ihxM9/'], {
            username: e,
            usernameOnClick: f.dG4
        })
    );
}
let N = {
    stringify: function (e, t) {
        var n, b, _;
        let g = (function (e) {
                var t, n, a;
                let [r] = null != (t = e.mentions) ? t : [];
                return null == r ? null : 'object' == typeof r ? (null != (n = x.default.getUser(r.id)) ? n : null) : 'string' == typeof r && null != (a = x.default.getUser(r)) ? a : null;
            })(e),
            j = e.channel_id,
            N = h.ZP.getName(null, j, e.author);
        switch (e.type) {
            case f.uaV.RECIPIENT_ADD:
                if (null == g) return;
                return (0, a.Rp)(
                    v.intl.formatToParts(v.t['7/Xl0d'], {
                        username: N,
                        usernameOnClick: f.dG4,
                        otherUsername: h.ZP.getName(null, j, g),
                        otherUsernameOnClick: f.dG4
                    })
                );
            case f.uaV.RECIPIENT_REMOVE:
                if (null == g) return;
                let O = e.author;
                if (null == O || O.id === g.id)
                    return (0, a.Rp)(
                        v.intl.formatToParts(v.t['Qn5+LS'], {
                            username: N,
                            usernameOnClick: f.dG4
                        })
                    );
                return (0, a.Rp)(
                    v.intl.formatToParts(v.t.QtZ0RE, {
                        username: N,
                        usernameOnClick: f.dG4,
                        otherUsername: h.ZP.getName(null, j, g),
                        otherUsernameOnClick: f.dG4
                    })
                );
            case f.uaV.CALL:
                let { call: E } = e;
                if (null != E && -1 === E.participants.indexOf(u.default.getId()))
                    return (0, a.Rp)(
                        v.intl.formatToParts(v.t.DbgSAw, {
                            username: N,
                            usernameOnClick: f.dG4
                        })
                    );
                return;
            case f.uaV.CHANNEL_NAME_CHANGE:
                return (0, a.Rp)(
                    v.intl.formatToParts(t.isForumPost() ? v.t['qa0e/v'] : v.t.XCPMEB, {
                        username: N,
                        usernameOnClick: f.dG4,
                        channelName: e.content
                    })
                );
            case f.uaV.CHANNEL_ICON_CHANGE:
                return (0, a.Rp)(
                    v.intl.formatToParts(v.t.wypJZ2, {
                        username: N,
                        usernameOnClick: f.dG4
                    })
                );
            case f.uaV.CHANNEL_PINNED_MESSAGE:
                return (0, a.Rp)(
                    v.intl.formatToParts(v.t['/M60j4'], {
                        username: N,
                        usernameOnClick: f.dG4
                    })
                );
            case f.uaV.USER_JOIN:
                return (0, a.Rp)(
                    v.intl.formatToParts(y(e.id), {
                        username: N,
                        usernameOnClick: f.dG4
                    })
                );
            case f.uaV.GUILD_BOOST:
                return C(N);
            case f.uaV.GUILD_BOOST_TIER_1:
            case f.uaV.GUILD_BOOST_TIER_2:
            case f.uaV.GUILD_BOOST_TIER_3:
                let T = m.Z.getChannel(j);
                return null == T || null == p.Z.getGuild(T.getGuildId())
                    ? C(N)
                    : (0, a.Rp)(
                          v.intl.formatToParts(v.t['ihxM9/'], {
                              username: N,
                              usernameOnClick: f.dG4
                          })
                      );
            case f.uaV.GUILD_INVITE_REMINDER:
                return v.intl.string(v.t.gxyKvr);
            case f.uaV.THREAD_STARTER_MESSAGE:
                return v.intl.formatToPlainString(v.t['B8H+Cg'], {
                    username: N,
                    threadName: t.name
                });
            case f.uaV.ROLE_SUBSCRIPTION_PURCHASE:
                if (e instanceof d.ZP) return null;
                return (0, a.Rp)(
                    (0, l.vp)({
                        username: N,
                        guildId: t.guild_id,
                        roleSubscriptionData: e.role_subscription_data
                    })
                );
            case f.uaV.PURCHASE_NOTIFICATION:
                if (e instanceof d.ZP || (null == (b = e.purchase_notification) || null == (n = b.guild_product_purchase) ? void 0 : n.product_name) == null) return null;
                return (0, a.Rp)(
                    (0, r.i)({
                        username: N,
                        productName: e.purchase_notification.guild_product_purchase.product_name
                    })
                );
            case f.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                if (e instanceof d.ZP) return null;
                let S = (0, s.ZH)((0, i.e5)(e));
                return (0, a.Rp)(
                    (0, o.Y)({
                        application: e.application,
                        username: S.nick
                    })
                );
            case f.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
                if (e instanceof d.ZP) return null;
                return (0, a.Rp)(
                    (0, c.B2)({
                        application: e.application,
                        username: (0, s.ZH)((0, i.e5)(e)).nick
                    })
                );
            case f.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
                if (e instanceof d.ZP) return null;
                return (0, a.Rp)(
                    (0, c.hj)({
                        application: e.application,
                        username: (0, s.ZH)((0, i.e5)(e)).nick
                    })
                );
            case f.uaV.AUTO_MODERATION_ACTION:
                if (
                    null == (_ = e.embeds)
                        ? void 0
                        : _.some((e) => {
                              let { type: t } = e;
                              return t === f.hBH.AUTO_MODERATION_NOTIFICATION;
                          })
                ) {
                    let e = m.Z.getChannel(j);
                    if (null == e) return null;
                    let t = p.Z.getGuild(e.getGuildId());
                    return null == t ? null : (0, a.Rp)(v.intl.formatToParts(v.t['a+lJKi'], { guildName: t.name }));
                }
                return e.content;
            case f.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
                var P = e.content;
                let I = m.Z.getChannel(j);
                if (null == I) return null;
                let w = p.Z.getGuild(I.getGuildId());
                return null == w
                    ? null
                    : (0, a.Rp)(
                          v.intl.formatToParts(v.t.iOuWPj, {
                              username: N,
                              guildName: w.name,
                              time:
                                  '' !== P
                                      ? new Date(P).toLocaleString(v.intl.currentLocale, {
                                            hour: 'numeric',
                                            minute: '2-digit'
                                        })
                                      : ''
                          })
                      );
            case f.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
                let k = m.Z.getChannel(j);
                if (null == k) return null;
                let R = p.Z.getGuild(k.getGuildId());
                return null == R
                    ? null
                    : (0, a.Rp)(
                          v.intl.formatToParts(v.t.axmbpq, {
                              username: N,
                              guildName: R.name
                          })
                      );
            default:
                return e.content;
        }
    },
    getSystemMessageUserJoin: function (e) {
        let t = g(),
            n = b.default.extractTimestamp(e) % t.length;
        return t[n];
    },
    getSystemMessageUserJoinMobile: y,
    getSystemMessageBotJoin: function (e) {
        return null == _[e] ? null : v.intl.format(v.t.xw1Ij4, { learnOnClick: { onClick: () => window.open(_[e]) } });
    }
};
