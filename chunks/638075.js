n.d(t, {
    A: () => N,
}),
    n(896048);
var l = n(385244),
    r = n(718564),
    i = n(436857),
    u = n(494576),
    a = n(942075),
    o = n(141468),
    s = n(763754),
    d = n(808829),
    c = n(552691),
    m = n(383233),
    A = n(961350),
    h = n(734057),
    f = n(71393),
    E = n(287809),
    p = n(562153),
    g = n(661191),
    O = n(652215),
    T = n(985018);
let _ = {
    "234395307759108106": "https://groovy.bot/commands",
    "365975655608745985": "https://www.pokecord.com/getting-started",
    512412940897484800: "http://jameslantz.net/smilebot",
};

function I(e) {
    let t = [
            T.t.Jm6e0x,
            T.t.MGRnRT,
            T.t.EXOEGh,
            T.t["5uCTFN"],
            T.t.rl45Qo,
            T.t.Bh9zpQ,
            T.t.RdEy1J,
            T.t.qcdp00,
            T.t.F7w2Ru,
            T.t.gSyOgK,
            T.t.uYgqv7,
            T.t["b/1SBX"],
            T.t.LhebZF,
        ],
        n = g.default.extractTimestamp(e) % t.length;
    return t[n];
}

function b(e) {
    return (0, i.$)(
        T.intl.formatToParts(T.t.ihxM9x, {
            username: e,
            usernameOnClick: O.tEg,
        }),
    );
}
let N = {
    stringify: function (e, t) {
        let n = (function (e) {
                var t, n, l;
                let [r] = null != (t = e.mentions) ? t : [];
                return null == r
                    ? null
                    : "object" == typeof r
                      ? null != (n = E.default.getUser(r.id))
                          ? n
                          : null
                      : "string" == typeof r && null != (l = E.default.getUser(r))
                        ? l
                        : null;
            })(e),
            g = e.channel_id,
            _ = p.Ay.getName(null, g, e.author);
        switch (e.type) {
            case O.lAJ.RECIPIENT_ADD:
                if (null == n) return;
                return (0, i.$)(
                    T.intl.formatToParts(T.t["7/Xl0S"], {
                        username: _,
                        usernameOnClick: O.tEg,
                        otherUsername: p.Ay.getName(null, g, n),
                        otherUsernameOnClick: O.tEg,
                    }),
                );
            case O.lAJ.RECIPIENT_REMOVE:
                if (null == n) return;
                let N = e.author;
                if (null == N || N.id === n.id)
                    return (0, i.$)(
                        T.intl.formatToParts(T.t["Qn5+Lf"], {
                            username: _,
                            usernameOnClick: O.tEg,
                        }),
                    );
                return (0, i.$)(
                    T.intl.formatToParts(T.t.QtZ0RD, {
                        username: _,
                        usernameOnClick: O.tEg,
                        otherUsername: p.Ay.getName(null, g, n),
                        otherUsernameOnClick: O.tEg,
                    }),
                );
            case O.lAJ.CALL:
                let { call: C } = e;
                if (null != C && -1 === C.participants.indexOf(A.default.getId()))
                    return (0, i.$)(
                        T.intl.formatToParts(T.t.DbgSA0, {
                            username: _,
                            usernameOnClick: O.tEg,
                        }),
                    );
                return;
            case O.lAJ.CHANNEL_NAME_CHANGE:
                return (0, i.$)(
                    T.intl.formatToParts(t.isForumPost() ? T.t["qa0e/n"] : T.t.XCPMEG, {
                        username: _,
                        usernameOnClick: O.tEg,
                        channelName: e.content,
                    }),
                );
            case O.lAJ.CHANNEL_ICON_CHANGE:
                return (0, i.$)(
                    T.intl.formatToParts(T.t.wypJZ0, {
                        username: _,
                        usernameOnClick: O.tEg,
                    }),
                );
            case O.lAJ.CHANNEL_PINNED_MESSAGE:
                return (0, i.$)(
                    T.intl.formatToParts(T.t["/M60j0"], {
                        username: _,
                        usernameOnClick: O.tEg,
                    }),
                );
            case O.lAJ.USER_JOIN:
                return (0, i.$)(
                    T.intl.formatToParts(I(e.id), {
                        username: _,
                        usernameOnClick: O.tEg,
                    }),
                );
            case O.lAJ.EMOJI_ADDED:
                let P, S;
                return (
                    (S = null == (P = h.A.getChannel(e.channel_id)) ? null : f.A.getGuild(P.getGuildId())),
                    (0, i.$)(
                        T.intl.formatToParts(T.t.PJsjbP, {
                            emoji: e.content,
                            guildName: null != (L = null == S ? void 0 : S.name) ? L : T.intl.string(T.t.dtwqPR),
                        }),
                    )
                );
            case O.lAJ.GUILD_BOOST:
                return b(_);
            case O.lAJ.GUILD_BOOST_TIER_1:
            case O.lAJ.GUILD_BOOST_TIER_2:
            case O.lAJ.GUILD_BOOST_TIER_3:
                let y;
                return null == (y = h.A.getChannel(g)) || null == f.A.getGuild(y.getGuildId())
                    ? b(_)
                    : (0, i.$)(
                          T.intl.formatToParts(T.t.ihxM9x, {
                              username: _,
                              usernameOnClick: O.tEg,
                          }),
                      );
            case O.lAJ.GUILD_INVITE_REMINDER:
                return T.intl.string(T.t.gxyKvr);
            case O.lAJ.THREAD_STARTER_MESSAGE:
                return T.intl.formatToPlainString(T.t["B8H+Cl"], {
                    username: _,
                    threadName: t.name,
                });
            case O.lAJ.ROLE_SUBSCRIPTION_PURCHASE:
                if (e instanceof m.Ay) return null;
                return (0, i.$)(
                    (0, a.eb)({
                        username: _,
                        guildId: t.guild_id,
                        roleSubscriptionData: e.role_subscription_data,
                    }),
                );
            case O.lAJ.PURCHASE_NOTIFICATION:
                if (
                    e instanceof m.Ay ||
                    (null == (v = e.purchase_notification) || null == (R = v.guild_product_purchase)
                        ? void 0
                        : R.product_name) == null
                )
                    return null;
                return (0, i.$)(
                    (0, u.z)({
                        username: _,
                        productName: e.purchase_notification.guild_product_purchase.product_name,
                    }),
                );
            case O.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                if (e instanceof m.Ay) return null;
                let D = (0, s.p_)((0, o.rh)(e));
                return (0, i.$)(
                    (0, d.P)({
                        application: e.application,
                        username: D.nick,
                    }),
                );
            case O.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED:
                if (e instanceof m.Ay) return null;
                return (0, i.$)(
                    (0, c.g6)({
                        application: e.application,
                        username: (0, s.p_)((0, o.rh)(e)).nick,
                    }),
                );
            case O.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
                if (e instanceof m.Ay) return null;
                return (0, i.$)(
                    (0, c.uk)({
                        application: e.application,
                        username: (0, s.p_)((0, o.rh)(e)).nick,
                    }),
                );
            case O.lAJ.AUTO_MODERATION_ACTION:
                if (
                    null == (G = e.embeds)
                        ? void 0
                        : G.some((e) => {
                              let { type: t } = e;
                              return t === O.Auw.AUTO_MODERATION_NOTIFICATION;
                          })
                ) {
                    var R, v, G, w, L;
                    let t = e.embeds.find((e) => {
                            let { type: t } = e;
                            return t === O.Auw.AUTO_MODERATION_NOTIFICATION;
                        }),
                        n =
                            null == t || null == (w = t.fields)
                                ? void 0
                                : w.find((e) => "name" in e && e.name === l.E.NOTIFICATION_TYPE),
                        u = null != n && "value" in n ? n.value : void 0,
                        a = h.A.getChannel(g);
                    if (null == a) return null;
                    let o = f.A.getGuild(a.getGuildId());
                    if (null == o) return null;
                    switch (u) {
                        case r.W.ACTIVITY_ALERTS_ENABLED:
                            return (0, i.$)(
                                T.intl.formatToParts(T.t.wt3ZUM, {
                                    guildName: o.name,
                                }),
                            );
                        case r.W.INTERACTION_BLOCKED:
                            return (0, i.$)(
                                T.intl.formatToParts(T.t.AkqI0g, {
                                    guildName: o.name,
                                }),
                            );
                        default:
                            return (0, i.$)(
                                T.intl.formatToParts(T.t["a+lJKl"], {
                                    guildName: o.name,
                                }),
                            );
                    }
                }
                return e.content;
            case O.lAJ.GUILD_INCIDENT_ALERT_MODE_ENABLED:
                var k = e.content;
                let J = h.A.getChannel(g);
                if (null == J) return null;
                let U = f.A.getGuild(J.getGuildId());
                return null == U
                    ? null
                    : (0, i.$)(
                          T.intl.formatToParts(T.t.iOuWPk, {
                              username: _,
                              guildName: U.name,
                              time:
                                  "" !== k
                                      ? new Date(k).toLocaleString(T.intl.currentLocale, {
                                            hour: "numeric",
                                            minute: "2-digit",
                                        })
                                      : "",
                          }),
                      );
            case O.lAJ.GUILD_INCIDENT_ALERT_MODE_DISABLED:
                let M = h.A.getChannel(g);
                if (null == M) return null;
                let j = f.A.getGuild(M.getGuildId());
                return null == j
                    ? null
                    : (0, i.$)(
                          T.intl.formatToParts(T.t.axmbpm, {
                              username: _,
                              guildName: j.name,
                          }),
                      );
            default:
                return e.content;
        }
    },
    getSystemMessageUserJoin: function (e) {
        let t = [
                T.t["0cuj7l"],
                T.t["MuW+CN"],
                T.t.osqpHX,
                T.t["5ToSh2"],
                T.t.JEB8ps,
                T.t.pkOV5T,
                T.t["kRb1J+"],
                T.t["EmKLY+"],
                T.t.rPtBnb,
                T.t["5B/ekS"],
                T.t.ESNC3Y,
                T.t.Iw6d8w,
                T.t["WecSZ/"],
            ],
            n = g.default.extractTimestamp(e) % t.length;
        return t[n];
    },
    getSystemMessageUserJoinMobile: I,
    getSystemMessageBotJoin: function (e) {
        return null == _[e]
            ? null
            : T.intl.format(T.t.xw1Ij0, {
                  learnOnClick: {
                      onClick: () => window.open(_[e]),
                  },
              });
    },
};
