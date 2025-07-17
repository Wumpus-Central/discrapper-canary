(n.d(e, { Z: () => P }), n(388685));
var r = n(721355),
    l = n(320285),
    i = n(25209),
    a = n(97797),
    u = n(35125),
    o = n(786761),
    s = n(739566),
    c = n(499401),
    m = n(693912),
    d = n(23750),
    N = n(314897),
    f = n(592125),
    _ = n(430824),
    T = n(594174),
    I = n(5192),
    E = n(709054),
    p = n(981631),
    C = n(388032);
let A = {
        '234395307759108106': 'https://groovy.bot/commands',
        '365975655608745985': 'https://www.pokecord.com/getting-started',
        512412940897484800: 'http://jameslantz.net/smilebot'
    },
    h = () => [C.t['0cuj7u'], C.t['MuW+CA'], C.t.osqpHR, C.t['5ToSh4'], C.t.JEB8pq, C.t.pkOV5e, C.t.kRb1Jy, C.t.EmKLY2, C.t.rPtBnZ, C.t['5B/ekZ'], C.t.ESNC3d, C.t['Iw6d8/'], C.t.WecSZ2],
    R = () => [C.t.Jm6e09, C.t.MGRnRU, C.t.EXOEGh, C.t['5uCTFB'], C.t.rl45Qk, C.t.Bh9zpa, C.t.RdEy1N, C.t.qcdp09, C.t.F7w2Rk, C.t.gSyOgI, C.t.uYgqv7, C.t['b/1SBQ'], C.t.LhebZG];
function O(t) {
    let e = R(),
        n = E.default.extractTimestamp(t) % e.length;
    return e[n];
}
function g(t) {
    return (0, i.Rp)(
        C.intl.formatToParts(C.t['ihxM9/'], {
            username: t,
            usernameOnClick: p.dG4
        })
    );
}
let P = {
    stringify: function (t, e) {
        var n, E, A, h;
        let R = (function (t) {
                var e, n, r;
                let [l] = null != (e = t.mentions) ? e : [];
                return null == l ? null : 'object' == typeof l ? (null != (n = T.default.getUser(l.id)) ? n : null) : 'string' == typeof l && null != (r = T.default.getUser(l)) ? r : null;
            })(t),
            P = t.channel_id,
            G = I.ZP.getName(null, P, t.author);
        switch (t.type) {
            case p.uaV.RECIPIENT_ADD:
                if (null == R) return;
                return (0, i.Rp)(
                    C.intl.formatToParts(C.t['7/Xl0d'], {
                        username: G,
                        usernameOnClick: p.dG4,
                        otherUsername: I.ZP.getName(null, P, R),
                        otherUsernameOnClick: p.dG4
                    })
                );
            case p.uaV.RECIPIENT_REMOVE:
                if (null == R) return;
                let L = t.author;
                if (null == L || L.id === R.id)
                    return (0, i.Rp)(
                        C.intl.formatToParts(C.t['Qn5+LS'], {
                            username: G,
                            usernameOnClick: p.dG4
                        })
                    );
                return (0, i.Rp)(
                    C.intl.formatToParts(C.t.QtZ0RE, {
                        username: G,
                        usernameOnClick: p.dG4,
                        otherUsername: I.ZP.getName(null, P, R),
                        otherUsernameOnClick: p.dG4
                    })
                );
            case p.uaV.CALL:
                let { call: S } = t;
                if (null != S && -1 === S.participants.indexOf(N.default.getId()))
                    return (0, i.Rp)(
                        C.intl.formatToParts(C.t.DbgSAw, {
                            username: G,
                            usernameOnClick: p.dG4
                        })
                    );
                return;
            case p.uaV.CHANNEL_NAME_CHANGE:
                return (0, i.Rp)(
                    C.intl.formatToParts(e.isForumPost() ? C.t['qa0e/v'] : C.t.XCPMEB, {
                        username: G,
                        usernameOnClick: p.dG4,
                        channelName: t.content
                    })
                );
            case p.uaV.CHANNEL_ICON_CHANGE:
                return (0, i.Rp)(
                    C.intl.formatToParts(C.t.wypJZ2, {
                        username: G,
                        usernameOnClick: p.dG4
                    })
                );
            case p.uaV.CHANNEL_PINNED_MESSAGE:
                return (0, i.Rp)(
                    C.intl.formatToParts(C.t['/M60j4'], {
                        username: G,
                        usernameOnClick: p.dG4
                    })
                );
            case p.uaV.USER_JOIN:
                return (0, i.Rp)(
                    C.intl.formatToParts(O(t.id), {
                        username: G,
                        usernameOnClick: p.dG4
                    })
                );
            case p.uaV.GUILD_BOOST:
                return g(G);
            case p.uaV.GUILD_BOOST_TIER_1:
            case p.uaV.GUILD_BOOST_TIER_2:
            case p.uaV.GUILD_BOOST_TIER_3:
                let k = f.Z.getChannel(P);
                return null == k || null == _.Z.getGuild(k.getGuildId())
                    ? g(G)
                    : (0, i.Rp)(
                          C.intl.formatToParts(C.t['ihxM9/'], {
                              username: G,
                              usernameOnClick: p.dG4
                          })
                      );
            case p.uaV.GUILD_INVITE_REMINDER:
                return C.intl.string(C.t.gxyKvr);
            case p.uaV.THREAD_STARTER_MESSAGE:
                return C.intl.formatToPlainString(C.t['B8H+Cg'], {
                    username: G,
                    threadName: e.name
                });
            case p.uaV.ROLE_SUBSCRIPTION_PURCHASE:
                if (t instanceof d.ZP) return null;
                return (0, i.Rp)(
                    (0, u.vp)({
                        username: G,
                        guildId: e.guild_id,
                        roleSubscriptionData: t.role_subscription_data
                    })
                );
            case p.uaV.PURCHASE_NOTIFICATION:
                if (t instanceof d.ZP || (null == (E = t.purchase_notification) || null == (n = E.guild_product_purchase) ? void 0 : n.product_name) == null) return null;
                return (0, i.Rp)(
                    (0, a.i)({
                        username: G,
                        productName: t.purchase_notification.guild_product_purchase.product_name
                    })
                );
            case p.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                if (t instanceof d.ZP) return null;
                let U = (0, s.ZH)((0, o.e5)(t));
                return (0, i.Rp)(
                    (0, c.Y)({
                        application: t.application,
                        username: U.nick
                    })
                );
            case p.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
                if (t instanceof d.ZP) return null;
                return (0, i.Rp)(
                    (0, m.B2)({
                        application: t.application,
                        username: (0, s.ZH)((0, o.e5)(t)).nick
                    })
                );
            case p.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
                if (t instanceof d.ZP) return null;
                return (0, i.Rp)(
                    (0, m.hj)({
                        application: t.application,
                        username: (0, s.ZH)((0, o.e5)(t)).nick
                    })
                );
            case p.uaV.AUTO_MODERATION_ACTION:
                if (
                    null == (A = t.embeds)
                        ? void 0
                        : A.some((t) => {
                              let { type: e } = t;
                              return e === p.hBH.AUTO_MODERATION_NOTIFICATION;
                          })
                ) {
                    let e = t.embeds.find((t) => {
                            let { type: e } = t;
                            return e === p.hBH.AUTO_MODERATION_NOTIFICATION;
                        }),
                        n = null == e || null == (h = e.fields) ? void 0 : h.find((t) => 'name' in t && t.name === r.D.NOTIFICATION_TYPE),
                        a = null != n && 'value' in n ? n.value : void 0,
                        u = f.Z.getChannel(P);
                    if (null == u) return null;
                    let o = _.Z.getGuild(u.getGuildId());
                    if (null == o) return null;
                    switch (a) {
                        case l.p.ACTIVITY_ALERTS_ENABLED:
                            return (0, i.Rp)(C.intl.formatToParts(C.t.wt3ZUF, { guildName: o.name }));
                        case l.p.INTERACTION_BLOCKED:
                            return (0, i.Rp)(C.intl.formatToParts(C.t.AkqI0t, { guildName: o.name }));
                        default:
                            return (0, i.Rp)(C.intl.formatToParts(C.t['a+lJKi'], { guildName: o.name }));
                    }
                }
                return t.content;
            case p.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
                var D = t.content;
                let Z = f.Z.getChannel(P);
                if (null == Z) return null;
                let V = _.Z.getGuild(Z.getGuildId());
                return null == V
                    ? null
                    : (0, i.Rp)(
                          C.intl.formatToParts(C.t.iOuWPj, {
                              username: G,
                              guildName: V.name,
                              time:
                                  '' !== D
                                      ? new Date(D).toLocaleString(C.intl.currentLocale, {
                                            hour: 'numeric',
                                            minute: '2-digit'
                                        })
                                      : ''
                          })
                      );
            case p.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
                let v = f.Z.getChannel(P);
                if (null == v) return null;
                let B = _.Z.getGuild(v.getGuildId());
                return null == B
                    ? null
                    : (0, i.Rp)(
                          C.intl.formatToParts(C.t.axmbpq, {
                              username: G,
                              guildName: B.name
                          })
                      );
            default:
                return t.content;
        }
    },
    getSystemMessageUserJoin: function (t) {
        let e = h(),
            n = E.default.extractTimestamp(t) % e.length;
        return e[n];
    },
    getSystemMessageUserJoinMobile: O,
    getSystemMessageBotJoin: function (t) {
        return null == A[t] ? null : C.intl.format(C.t.xw1Ij4, { learnOnClick: { onClick: () => window.open(A[t]) } });
    }
};
