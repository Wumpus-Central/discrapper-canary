n.d(t, { Z: () => C }), n(388685);
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
    b = n(981631),
    v = n(388032);
let h = {
        '234395307759108106': 'https://groovy.bot/commands',
        '365975655608745985': 'https://www.pokecord.com/getting-started',
        512412940897484800: 'http://jameslantz.net/smilebot'
    },
    I = () => [v.t['0cuj7u'], v.t['MuW+CA'], v.t.osqpHR, v.t['5ToSh4'], v.t.JEB8pq, v.t.pkOV5e, v.t.kRb1Jy, v.t.EmKLY2, v.t.rPtBnZ, v.t['5B/ekZ'], v.t.ESNC3d, v.t['Iw6d8/'], v.t.WecSZ2],
    y = () => [v.t.Jm6e09, v.t.MGRnRU, v.t.EXOEGh, v.t['5uCTFB'], v.t.rl45Qk, v.t.Bh9zpa, v.t.RdEy1N, v.t.qcdp09, v.t.F7w2Rk, v.t.gSyOgI, v.t.uYgqv7, v.t['b/1SBQ'], v.t.LhebZG];
function S(e) {
    let t = y(),
        n = g.default.extractTimestamp(e) % t.length;
    return t[n];
}
function E(e) {
    return (0, r.Rp)(
        v.intl.formatToParts(v.t['ihxM9/'], {
            username: e,
            usernameOnClick: b.dG4
        })
    );
}
let C = {
    stringify: function (e, t) {
        var n, g, h;
        let I = (function (e) {
                var t, n, r;
                let [a] = null != (t = e.mentions) ? t : [];
                return null == a ? null : 'object' == typeof a ? (null != (n = m.default.getUser(a.id)) ? n : null) : 'string' == typeof a && null != (r = m.default.getUser(a)) ? r : null;
            })(e),
            y = e.channel_id,
            C = p.ZP.getName(null, y, e.author);
        switch (e.type) {
            case b.uaV.RECIPIENT_ADD:
                if (null == I) return;
                return (0, r.Rp)(
                    v.intl.formatToParts(v.t['7/Xl0d'], {
                        username: C,
                        usernameOnClick: b.dG4,
                        otherUsername: p.ZP.getName(null, y, I),
                        otherUsernameOnClick: b.dG4
                    })
                );
            case b.uaV.RECIPIENT_REMOVE:
                if (null == I) return;
                let P = e.author;
                if (null == P || P.id === I.id)
                    return (0, r.Rp)(
                        v.intl.formatToParts(v.t['Qn5+LS'], {
                            username: C,
                            usernameOnClick: b.dG4
                        })
                    );
                return (0, r.Rp)(
                    v.intl.formatToParts(v.t.QtZ0RE, {
                        username: C,
                        usernameOnClick: b.dG4,
                        otherUsername: p.ZP.getName(null, y, I),
                        otherUsernameOnClick: b.dG4
                    })
                );
            case b.uaV.CALL:
                let { call: O } = e;
                if (null != O && -1 === O.participants.indexOf(_.default.getId()))
                    return (0, r.Rp)(
                        v.intl.formatToParts(v.t.DbgSAw, {
                            username: C,
                            usernameOnClick: b.dG4
                        })
                    );
                return;
            case b.uaV.CHANNEL_NAME_CHANGE:
                return (0, r.Rp)(
                    v.intl.formatToParts(t.isForumPost() ? v.t['qa0e/v'] : v.t.XCPMEB, {
                        username: C,
                        usernameOnClick: b.dG4,
                        channelName: e.content
                    })
                );
            case b.uaV.CHANNEL_ICON_CHANGE:
                return (0, r.Rp)(
                    v.intl.formatToParts(v.t.wypJZ2, {
                        username: C,
                        usernameOnClick: b.dG4
                    })
                );
            case b.uaV.CHANNEL_PINNED_MESSAGE:
                return (0, r.Rp)(
                    v.intl.formatToParts(v.t['/M60j4'], {
                        username: C,
                        usernameOnClick: b.dG4
                    })
                );
            case b.uaV.USER_JOIN:
                return (0, r.Rp)(
                    v.intl.formatToParts(S(e.id), {
                        username: C,
                        usernameOnClick: b.dG4
                    })
                );
            case b.uaV.GUILD_BOOST:
                return E(C);
            case b.uaV.GUILD_BOOST_TIER_1:
            case b.uaV.GUILD_BOOST_TIER_2:
            case b.uaV.GUILD_BOOST_TIER_3:
                let A = d.Z.getChannel(y);
                return null == A || null == f.Z.getGuild(A.getGuildId())
                    ? E(C)
                    : (0, r.Rp)(
                          v.intl.formatToParts(v.t['ihxM9/'], {
                              username: C,
                              usernameOnClick: b.dG4
                          })
                      );
            case b.uaV.GUILD_INVITE_REMINDER:
                return v.intl.string(v.t.gxyKvr);
            case b.uaV.THREAD_STARTER_MESSAGE:
                return v.intl.formatToPlainString(v.t['B8H+Cg'], {
                    username: C,
                    threadName: t.name
                });
            case b.uaV.ROLE_SUBSCRIPTION_PURCHASE:
                if (e instanceof u.ZP) return null;
                return (0, r.Rp)(
                    (0, i.vp)({
                        username: C,
                        guildId: t.guild_id,
                        roleSubscriptionData: e.role_subscription_data
                    })
                );
            case b.uaV.PURCHASE_NOTIFICATION:
                if (e instanceof u.ZP || (null == (g = e.purchase_notification) || null == (n = g.guild_product_purchase) ? void 0 : n.product_name) == null) return null;
                return (0, r.Rp)(
                    (0, a.i)({
                        username: C,
                        productName: e.purchase_notification.guild_product_purchase.product_name
                    })
                );
            case b.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                if (e instanceof u.ZP) return null;
                let N = (0, l.ZH)((0, o.e5)(e));
                return (0, r.Rp)(
                    (0, c.Y)({
                        application: e.application,
                        username: N.nick
                    })
                );
            case b.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
                if (e instanceof u.ZP) return null;
                return (0, r.Rp)(
                    (0, s.B2)({
                        application: e.application,
                        username: (0, l.ZH)((0, o.e5)(e)).nick
                    })
                );
            case b.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
                if (e instanceof u.ZP) return null;
                return (0, r.Rp)(
                    (0, s.hj)({
                        application: e.application,
                        username: (0, l.ZH)((0, o.e5)(e)).nick
                    })
                );
            case b.uaV.AUTO_MODERATION_ACTION:
                if (
                    null == (h = e.embeds)
                        ? void 0
                        : h.some((e) => {
                              let { type: t } = e;
                              return t === b.hBH.AUTO_MODERATION_NOTIFICATION;
                          })
                ) {
                    let e = d.Z.getChannel(y);
                    if (null == e) return null;
                    let t = f.Z.getGuild(e.getGuildId());
                    return null == t ? null : (0, r.Rp)(v.intl.formatToParts(v.t['a+lJKi'], { guildName: t.name }));
                }
                return e.content;
            case b.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
                var w = e.content;
                let T = d.Z.getChannel(y);
                if (null == T) return null;
                let L = f.Z.getGuild(T.getGuildId());
                return null == L
                    ? null
                    : (0, r.Rp)(
                          v.intl.formatToParts(v.t.iOuWPj, {
                              username: C,
                              guildName: L.name,
                              time:
                                  '' !== w
                                      ? new Date(w).toLocaleString(v.intl.currentLocale, {
                                            hour: 'numeric',
                                            minute: '2-digit'
                                        })
                                      : ''
                          })
                      );
            case b.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
                let x = d.Z.getChannel(y);
                if (null == x) return null;
                let j = f.Z.getGuild(x.getGuildId());
                return null == j
                    ? null
                    : (0, r.Rp)(
                          v.intl.formatToParts(v.t.axmbpq, {
                              username: C,
                              guildName: j.name
                          })
                      );
            default:
                return e.content;
        }
    },
    getSystemMessageUserJoin: function (e) {
        let t = I(),
            n = g.default.extractTimestamp(e) % t.length;
        return t[n];
    },
    getSystemMessageUserJoinMobile: S,
    getSystemMessageBotJoin: function (e) {
        return null == h[e] ? null : v.intl.format(v.t.xw1Ij4, { learnOnClick: { onClick: () => window.open(h[e]) } });
    }
};
