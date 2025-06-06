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
    g = n(981631),
    h = n(388032);
let v = {
        '234395307759108106': 'https://groovy.bot/commands',
        '365975655608745985': 'https://www.pokecord.com/getting-started',
        512412940897484800: 'http://jameslantz.net/smilebot'
    },
    I = () => [h.t['0cuj7u'], h.t['MuW+CA'], h.t.osqpHR, h.t['5ToSh4'], h.t.JEB8pq, h.t.pkOV5e, h.t.kRb1Jy, h.t.EmKLY2, h.t.rPtBnZ, h.t['5B/ekZ'], h.t.ESNC3d, h.t['Iw6d8/'], h.t.WecSZ2],
    y = () => [h.t.Jm6e09, h.t.MGRnRU, h.t.EXOEGh, h.t['5uCTFB'], h.t.rl45Qk, h.t.Bh9zpa, h.t.RdEy1N, h.t.qcdp09, h.t.F7w2Rk, h.t.gSyOgI, h.t.uYgqv7, h.t['b/1SBQ'], h.t.LhebZG];
function E(e) {
    let t = y(),
        n = b.default.extractTimestamp(e) % t.length;
    return t[n];
}
function S(e) {
    return (0, r.Rp)(
        h.intl.formatToParts(h.t['ihxM9/'], {
            username: e,
            usernameOnClick: g.dG4
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
            case g.uaV.RECIPIENT_ADD:
                if (null == I) return;
                return (0, r.Rp)(
                    h.intl.formatToParts(h.t['7/Xl0d'], {
                        username: O,
                        usernameOnClick: g.dG4,
                        otherUsername: m.ZP.getName(null, y, I),
                        otherUsernameOnClick: g.dG4
                    })
                );
            case g.uaV.RECIPIENT_REMOVE:
                if (null == I) return;
                let C = e.author;
                if (null == C || C.id === I.id)
                    return (0, r.Rp)(
                        h.intl.formatToParts(h.t['Qn5+LS'], {
                            username: O,
                            usernameOnClick: g.dG4
                        })
                    );
                return (0, r.Rp)(
                    h.intl.formatToParts(h.t.QtZ0RE, {
                        username: O,
                        usernameOnClick: g.dG4,
                        otherUsername: m.ZP.getName(null, y, I),
                        otherUsernameOnClick: g.dG4
                    })
                );
            case g.uaV.CALL:
                let { call: P } = e;
                if (null != P && -1 === P.participants.indexOf(d.default.getId()))
                    return (0, r.Rp)(
                        h.intl.formatToParts(h.t.DbgSAw, {
                            username: O,
                            usernameOnClick: g.dG4
                        })
                    );
                return;
            case g.uaV.CHANNEL_NAME_CHANGE:
                return (0, r.Rp)(
                    h.intl.formatToParts(t.isForumPost() ? h.t['qa0e/v'] : h.t.XCPMEB, {
                        username: O,
                        usernameOnClick: g.dG4,
                        channelName: e.content
                    })
                );
            case g.uaV.CHANNEL_ICON_CHANGE:
                return (0, r.Rp)(
                    h.intl.formatToParts(h.t.wypJZ2, {
                        username: O,
                        usernameOnClick: g.dG4
                    })
                );
            case g.uaV.CHANNEL_PINNED_MESSAGE:
                return (0, r.Rp)(
                    h.intl.formatToParts(h.t['/M60j4'], {
                        username: O,
                        usernameOnClick: g.dG4
                    })
                );
            case g.uaV.USER_JOIN:
                return (0, r.Rp)(
                    h.intl.formatToParts(E(e.id), {
                        username: O,
                        usernameOnClick: g.dG4
                    })
                );
            case g.uaV.GUILD_BOOST:
                return S(O);
            case g.uaV.GUILD_BOOST_TIER_1:
            case g.uaV.GUILD_BOOST_TIER_2:
            case g.uaV.GUILD_BOOST_TIER_3:
                let A = _.Z.getChannel(y);
                return null == A || null == f.Z.getGuild(A.getGuildId())
                    ? S(O)
                    : (0, r.Rp)(
                          h.intl.formatToParts(h.t['ihxM9/'], {
                              username: O,
                              usernameOnClick: g.dG4
                          })
                      );
            case g.uaV.GUILD_INVITE_REMINDER:
                return h.intl.string(h.t.gxyKvr);
            case g.uaV.THREAD_STARTER_MESSAGE:
                return h.intl.formatToPlainString(h.t['B8H+Cg'], {
                    username: O,
                    threadName: t.name
                });
            case g.uaV.ROLE_SUBSCRIPTION_PURCHASE:
                if (e instanceof s.ZP) return null;
                return (0, r.Rp)(
                    (0, o.vp)({
                        username: O,
                        guildId: t.guild_id,
                        roleSubscriptionData: e.role_subscription_data
                    })
                );
            case g.uaV.PURCHASE_NOTIFICATION:
                if (e instanceof s.ZP || (null == (b = e.purchase_notification) || null == (n = b.guild_product_purchase) ? void 0 : n.product_name) == null) return null;
                return (0, r.Rp)(
                    (0, i.i)({
                        username: O,
                        productName: e.purchase_notification.guild_product_purchase.product_name
                    })
                );
            case g.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                if (e instanceof s.ZP) return null;
                let N = (0, l.ZH)((0, a.e5)(e));
                return (0, r.Rp)(
                    (0, c.Y)({
                        application: e.application,
                        username: N.nick
                    })
                );
            case g.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
                if (e instanceof s.ZP) return null;
                return (0, r.Rp)(
                    (0, u.B2)({
                        application: e.application,
                        username: (0, l.ZH)((0, a.e5)(e)).nick
                    })
                );
            case g.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
                if (e instanceof s.ZP) return null;
                return (0, r.Rp)(
                    (0, u.hj)({
                        application: e.application,
                        username: (0, l.ZH)((0, a.e5)(e)).nick
                    })
                );
            case g.uaV.AUTO_MODERATION_ACTION:
                if (
                    null == (v = e.embeds)
                        ? void 0
                        : v.some((e) => {
                              let { type: t } = e;
                              return t === g.hBH.AUTO_MODERATION_NOTIFICATION;
                          })
                ) {
                    let e = _.Z.getChannel(y);
                    if (null == e) return null;
                    let t = f.Z.getGuild(e.getGuildId());
                    return null == t ? null : (0, r.Rp)(h.intl.formatToParts(h.t['a+lJKi'], { guildName: t.name }));
                }
                return e.content;
            case g.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
                var T = e.content;
                let w = _.Z.getChannel(y);
                if (null == w) return null;
                let x = f.Z.getGuild(w.getGuildId());
                return null == x
                    ? null
                    : (0, r.Rp)(
                          h.intl.formatToParts(h.t.iOuWPj, {
                              username: O,
                              guildName: x.name,
                              time:
                                  '' !== T
                                      ? new Date(T).toLocaleString(h.intl.currentLocale, {
                                            hour: 'numeric',
                                            minute: '2-digit'
                                        })
                                      : ''
                          })
                      );
            case g.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
                let j = _.Z.getChannel(y);
                if (null == j) return null;
                let L = f.Z.getGuild(j.getGuildId());
                return null == L
                    ? null
                    : (0, r.Rp)(
                          h.intl.formatToParts(h.t.axmbpq, {
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
        return null == v[e] ? null : h.intl.format(h.t.xw1Ij4, { learnOnClick: { onClick: () => window.open(v[e]) } });
    }
};
