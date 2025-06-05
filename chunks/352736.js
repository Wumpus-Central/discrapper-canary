n.d(t, { Z: () => O }), n(388685);
var r = n(25209),
    i = n(97797),
    o = n(35125),
    a = n(786761),
    l = n(739566),
    c = n(499401),
    u = n(693912),
    s = n(23750),
    d = n(314897),
    _ = n(592125),
    f = n(430824),
    p = n(594174),
    m = n(5192),
    b = n(709054),
    h = n(981631),
    g = n(388032);
let v = {
        '234395307759108106': 'https://groovy.bot/commands',
        '365975655608745985': 'https://www.pokecord.com/getting-started',
        512412940897484800: 'http://jameslantz.net/smilebot'
    },
    I = () => [g.t['0cuj7u'], g.t['MuW+CA'], g.t.osqpHR, g.t['5ToSh4'], g.t.JEB8pq, g.t.pkOV5e, g.t.kRb1Jy, g.t.EmKLY2, g.t.rPtBnZ, g.t['5B/ekZ'], g.t.ESNC3d, g.t['Iw6d8/'], g.t.WecSZ2],
    y = () => [g.t.Jm6e09, g.t.MGRnRU, g.t.EXOEGh, g.t['5uCTFB'], g.t.rl45Qk, g.t.Bh9zpa, g.t.RdEy1N, g.t.qcdp09, g.t.F7w2Rk, g.t.gSyOgI, g.t.uYgqv7, g.t['b/1SBQ'], g.t.LhebZG];
function E(e) {
    let t = y(),
        n = b.default.extractTimestamp(e) % t.length;
    return t[n];
}
function S(e) {
    return (0, r.Rp)(
        g.intl.formatToParts(g.t['ihxM9/'], {
            username: e,
            usernameOnClick: h.dG4
        })
    );
}
let O = {
    stringify: function (e, t) {
        var n, b, v;
        let I = (function (e) {
                var t, n, r;
                let [i] = null != (t = e.mentions) ? t : [];
                return null == i ? null : 'object' == typeof i ? (null != (n = p.default.getUser(i.id)) ? n : null) : 'string' == typeof i && null != (r = p.default.getUser(i)) ? r : null;
            })(e),
            y = e.channel_id,
            O = m.ZP.getName(null, y, e.author);
        switch (e.type) {
            case h.uaV.RECIPIENT_ADD:
                if (null == I) return;
                return (0, r.Rp)(
                    g.intl.formatToParts(g.t['7/Xl0d'], {
                        username: O,
                        usernameOnClick: h.dG4,
                        otherUsername: m.ZP.getName(null, y, I),
                        otherUsernameOnClick: h.dG4
                    })
                );
            case h.uaV.RECIPIENT_REMOVE:
                if (null == I) return;
                let C = e.author;
                if (null == C || C.id === I.id)
                    return (0, r.Rp)(
                        g.intl.formatToParts(g.t['Qn5+LS'], {
                            username: O,
                            usernameOnClick: h.dG4
                        })
                    );
                return (0, r.Rp)(
                    g.intl.formatToParts(g.t.QtZ0RE, {
                        username: O,
                        usernameOnClick: h.dG4,
                        otherUsername: m.ZP.getName(null, y, I),
                        otherUsernameOnClick: h.dG4
                    })
                );
            case h.uaV.CALL:
                let { call: P } = e;
                if (null != P && -1 === P.participants.indexOf(d.default.getId()))
                    return (0, r.Rp)(
                        g.intl.formatToParts(g.t.DbgSAw, {
                            username: O,
                            usernameOnClick: h.dG4
                        })
                    );
                return;
            case h.uaV.CHANNEL_NAME_CHANGE:
                return (0, r.Rp)(
                    g.intl.formatToParts(t.isForumPost() ? g.t['qa0e/v'] : g.t.XCPMEB, {
                        username: O,
                        usernameOnClick: h.dG4,
                        channelName: e.content
                    })
                );
            case h.uaV.CHANNEL_ICON_CHANGE:
                return (0, r.Rp)(
                    g.intl.formatToParts(g.t.wypJZ2, {
                        username: O,
                        usernameOnClick: h.dG4
                    })
                );
            case h.uaV.CHANNEL_PINNED_MESSAGE:
                return (0, r.Rp)(
                    g.intl.formatToParts(g.t['/M60j4'], {
                        username: O,
                        usernameOnClick: h.dG4
                    })
                );
            case h.uaV.USER_JOIN:
                return (0, r.Rp)(
                    g.intl.formatToParts(E(e.id), {
                        username: O,
                        usernameOnClick: h.dG4
                    })
                );
            case h.uaV.GUILD_BOOST:
                return S(O);
            case h.uaV.GUILD_BOOST_TIER_1:
            case h.uaV.GUILD_BOOST_TIER_2:
            case h.uaV.GUILD_BOOST_TIER_3:
                let A = _.Z.getChannel(y);
                return null == A || null == f.Z.getGuild(A.getGuildId())
                    ? S(O)
                    : (0, r.Rp)(
                          g.intl.formatToParts(g.t['ihxM9/'], {
                              username: O,
                              usernameOnClick: h.dG4
                          })
                      );
            case h.uaV.GUILD_INVITE_REMINDER:
                return g.intl.string(g.t.gxyKvr);
            case h.uaV.THREAD_STARTER_MESSAGE:
                return g.intl.formatToPlainString(g.t['B8H+Cg'], {
                    username: O,
                    threadName: t.name
                });
            case h.uaV.ROLE_SUBSCRIPTION_PURCHASE:
                if (e instanceof s.ZP) return null;
                return (0, r.Rp)(
                    (0, o.vp)({
                        username: O,
                        guildId: t.guild_id,
                        roleSubscriptionData: e.role_subscription_data
                    })
                );
            case h.uaV.PURCHASE_NOTIFICATION:
                if (e instanceof s.ZP || (null == (b = e.purchase_notification) || null == (n = b.guild_product_purchase) ? void 0 : n.product_name) == null) return null;
                return (0, r.Rp)(
                    (0, i.i)({
                        username: O,
                        productName: e.purchase_notification.guild_product_purchase.product_name
                    })
                );
            case h.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                if (e instanceof s.ZP) return null;
                let N = (0, l.ZH)((0, a.e5)(e));
                return (0, r.Rp)(
                    (0, c.Y)({
                        application: e.application,
                        username: N.nick
                    })
                );
            case h.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
                if (e instanceof s.ZP) return null;
                return (0, r.Rp)(
                    (0, u.B2)({
                        application: e.application,
                        username: (0, l.ZH)((0, a.e5)(e)).nick
                    })
                );
            case h.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
                if (e instanceof s.ZP) return null;
                return (0, r.Rp)(
                    (0, u.hj)({
                        application: e.application,
                        username: (0, l.ZH)((0, a.e5)(e)).nick
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
                    let e = _.Z.getChannel(y);
                    if (null == e) return null;
                    let t = f.Z.getGuild(e.getGuildId());
                    return null == t ? null : (0, r.Rp)(g.intl.formatToParts(g.t['a+lJKi'], { guildName: t.name }));
                }
                return e.content;
            case h.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
                var T = e.content;
                let w = _.Z.getChannel(y);
                if (null == w) return null;
                let x = f.Z.getGuild(w.getGuildId());
                return null == x
                    ? null
                    : (0, r.Rp)(
                          g.intl.formatToParts(g.t.iOuWPj, {
                              username: O,
                              guildName: x.name,
                              time:
                                  '' !== T
                                      ? new Date(T).toLocaleString(g.intl.currentLocale, {
                                            hour: 'numeric',
                                            minute: '2-digit'
                                        })
                                      : ''
                          })
                      );
            case h.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
                let j = _.Z.getChannel(y);
                if (null == j) return null;
                let L = f.Z.getGuild(j.getGuildId());
                return null == L
                    ? null
                    : (0, r.Rp)(
                          g.intl.formatToParts(g.t.axmbpq, {
                              username: O,
                              guildName: L.name
                          })
                      );
            default:
                return e.content;
        }
    },
    getSystemMessageUserJoin: function (e) {
        let t = I(),
            n = b.default.extractTimestamp(e) % t.length;
        return t[n];
    },
    getSystemMessageUserJoinMobile: E,
    getSystemMessageBotJoin: function (e) {
        return null == v[e] ? null : g.intl.format(g.t.xw1Ij4, { learnOnClick: { onClick: () => window.open(v[e]) } });
    }
};
