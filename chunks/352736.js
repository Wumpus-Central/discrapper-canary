n.d(t, { Z: () => C }), n(388685);
var r = n(25209),
    l = n(97797),
    a = n(35125),
    i = n(786761),
    o = n(739566),
    u = n(499401),
    s = n(693912),
    c = n(23750),
    p = n(314897),
    m = n(592125),
    d = n(430824),
    f = n(594174),
    N = n(5192),
    E = n(709054),
    T = n(981631),
    O = n(388032);
let I = {
        '234395307759108106': 'https://groovy.bot/commands',
        '365975655608745985': 'https://www.pokecord.com/getting-started',
        512412940897484800: 'http://jameslantz.net/smilebot'
    },
    h = () => [O.t['0cuj7u'], O.t['MuW+CA'], O.t.osqpHR, O.t['5ToSh4'], O.t.JEB8pq, O.t.pkOV5e, O.t.kRb1Jy, O.t.EmKLY2, O.t.rPtBnZ, O.t['5B/ekZ'], O.t.ESNC3d, O.t['Iw6d8/'], O.t.WecSZ2],
    _ = () => [O.t.Jm6e09, O.t.MGRnRU, O.t.EXOEGh, O.t['5uCTFB'], O.t.rl45Qk, O.t.Bh9zpa, O.t.RdEy1N, O.t.qcdp09, O.t.F7w2Rk, O.t.gSyOgI, O.t.uYgqv7, O.t['b/1SBQ'], O.t.LhebZG];
function R(e) {
    let t = _(),
        n = E.default.extractTimestamp(e) % t.length;
    return t[n];
}
function g(e) {
    return (0, r.Rp)(
        O.intl.formatToParts(O.t['ihxM9/'], {
            username: e,
            usernameOnClick: T.dG4
        })
    );
}
let C = {
    stringify: function (e, t) {
        var n, E, I;
        let h = (function (e) {
                var t, n, r;
                let [l] = null != (t = e.mentions) ? t : [];
                return null == l ? null : 'object' == typeof l ? (null != (n = f.default.getUser(l.id)) ? n : null) : 'string' == typeof l && null != (r = f.default.getUser(l)) ? r : null;
            })(e),
            _ = e.channel_id,
            C = N.ZP.getName(null, _, e.author);
        switch (e.type) {
            case T.uaV.RECIPIENT_ADD:
                if (null == h) return;
                return (0, r.Rp)(
                    O.intl.formatToParts(O.t['7/Xl0d'], {
                        username: C,
                        usernameOnClick: T.dG4,
                        otherUsername: N.ZP.getName(null, _, h),
                        otherUsernameOnClick: T.dG4
                    })
                );
            case T.uaV.RECIPIENT_REMOVE:
                if (null == h) return;
                let P = e.author;
                if (null == P || P.id === h.id)
                    return (0, r.Rp)(
                        O.intl.formatToParts(O.t['Qn5+LS'], {
                            username: C,
                            usernameOnClick: T.dG4
                        })
                    );
                return (0, r.Rp)(
                    O.intl.formatToParts(O.t.QtZ0RE, {
                        username: C,
                        usernameOnClick: T.dG4,
                        otherUsername: N.ZP.getName(null, _, h),
                        otherUsernameOnClick: T.dG4
                    })
                );
            case T.uaV.CALL:
                let { call: A } = e;
                if (null != A && -1 === A.participants.indexOf(p.default.getId()))
                    return (0, r.Rp)(
                        O.intl.formatToParts(O.t.DbgSAw, {
                            username: C,
                            usernameOnClick: T.dG4
                        })
                    );
                return;
            case T.uaV.CHANNEL_NAME_CHANGE:
                return (0, r.Rp)(
                    O.intl.formatToParts(t.isForumPost() ? O.t['qa0e/v'] : O.t.XCPMEB, {
                        username: C,
                        usernameOnClick: T.dG4,
                        channelName: e.content
                    })
                );
            case T.uaV.CHANNEL_ICON_CHANGE:
                return (0, r.Rp)(
                    O.intl.formatToParts(O.t.wypJZ2, {
                        username: C,
                        usernameOnClick: T.dG4
                    })
                );
            case T.uaV.CHANNEL_PINNED_MESSAGE:
                return (0, r.Rp)(
                    O.intl.formatToParts(O.t['/M60j4'], {
                        username: C,
                        usernameOnClick: T.dG4
                    })
                );
            case T.uaV.USER_JOIN:
                return (0, r.Rp)(
                    O.intl.formatToParts(R(e.id), {
                        username: C,
                        usernameOnClick: T.dG4
                    })
                );
            case T.uaV.GUILD_BOOST:
                return g(C);
            case T.uaV.GUILD_BOOST_TIER_1:
            case T.uaV.GUILD_BOOST_TIER_2:
            case T.uaV.GUILD_BOOST_TIER_3:
                let L = m.Z.getChannel(_);
                return null == L || null == d.Z.getGuild(L.getGuildId())
                    ? g(C)
                    : (0, r.Rp)(
                          O.intl.formatToParts(O.t['ihxM9/'], {
                              username: C,
                              usernameOnClick: T.dG4
                          })
                      );
            case T.uaV.GUILD_INVITE_REMINDER:
                return O.intl.string(O.t.gxyKvr);
            case T.uaV.THREAD_STARTER_MESSAGE:
                return O.intl.formatToPlainString(O.t['B8H+Cg'], {
                    username: C,
                    threadName: t.name
                });
            case T.uaV.ROLE_SUBSCRIPTION_PURCHASE:
                if (e instanceof c.ZP) return null;
                return (0, r.Rp)(
                    (0, a.vp)({
                        username: C,
                        guildId: t.guild_id,
                        roleSubscriptionData: e.role_subscription_data
                    })
                );
            case T.uaV.PURCHASE_NOTIFICATION:
                if (e instanceof c.ZP || (null == (E = e.purchase_notification) || null == (n = E.guild_product_purchase) ? void 0 : n.product_name) == null) return null;
                return (0, r.Rp)(
                    (0, l.i)({
                        username: C,
                        productName: e.purchase_notification.guild_product_purchase.product_name
                    })
                );
            case T.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                if (e instanceof c.ZP) return null;
                let b = (0, o.ZH)((0, i.e5)(e));
                return (0, r.Rp)(
                    (0, u.Y)({
                        application: e.application,
                        username: b.nick
                    })
                );
            case T.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
                if (e instanceof c.ZP) return null;
                return (0, r.Rp)(
                    (0, s.B2)({
                        application: e.application,
                        username: (0, o.ZH)((0, i.e5)(e)).nick
                    })
                );
            case T.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
                if (e instanceof c.ZP) return null;
                return (0, r.Rp)(
                    (0, s.hj)({
                        application: e.application,
                        username: (0, o.ZH)((0, i.e5)(e)).nick
                    })
                );
            case T.uaV.AUTO_MODERATION_ACTION:
                if (
                    null == (I = e.embeds)
                        ? void 0
                        : I.some((e) => {
                              let { type: t } = e;
                              return t === T.hBH.AUTO_MODERATION_NOTIFICATION;
                          })
                ) {
                    let e = m.Z.getChannel(_);
                    if (null == e) return null;
                    let t = d.Z.getGuild(e.getGuildId());
                    return null == t ? null : (0, r.Rp)(O.intl.formatToParts(O.t['a+lJKi'], { guildName: t.name }));
                }
                return e.content;
            case T.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
                var G = e.content;
                let Z = m.Z.getChannel(_);
                if (null == Z) return null;
                let k = d.Z.getGuild(Z.getGuildId());
                return null == k
                    ? null
                    : (0, r.Rp)(
                          O.intl.formatToParts(O.t.iOuWPj, {
                              username: C,
                              guildName: k.name,
                              time:
                                  '' !== G
                                      ? new Date(G).toLocaleString(O.intl.currentLocale, {
                                            hour: 'numeric',
                                            minute: '2-digit'
                                        })
                                      : ''
                          })
                      );
            case T.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
                let v = m.Z.getChannel(_);
                if (null == v) return null;
                let B = d.Z.getGuild(v.getGuildId());
                return null == B
                    ? null
                    : (0, r.Rp)(
                          O.intl.formatToParts(O.t.axmbpq, {
                              username: C,
                              guildName: B.name
                          })
                      );
            default:
                return e.content;
        }
    },
    getSystemMessageUserJoin: function (e) {
        let t = h(),
            n = E.default.extractTimestamp(e) % t.length;
        return t[n];
    },
    getSystemMessageUserJoinMobile: R,
    getSystemMessageBotJoin: function (e) {
        return null == I[e] ? null : O.intl.format(O.t.xw1Ij4, { learnOnClick: { onClick: () => window.open(I[e]) } });
    }
};
