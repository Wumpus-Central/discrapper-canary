n.d(t, { Z: () => b }), n(388685);
var r = n(54381);
n(473749);
var i = n(512722),
    l = n.n(i),
    a = n(841784),
    s = n(503438),
    o = n(802856),
    c = n(810568),
    u = n(168524),
    d = n(707409),
    p = n(51144),
    f = n(761282),
    h = n(358924),
    g = n(817915),
    m = n(981631),
    _ = n(388032);
function b(e) {
    var t, i;
    let { party: b, onUserContextMenu: E } = e,
        { priorityMembers: O, guildContext: v } = b,
        y = O[0],
        I = (function (e) {
            let { priorityMembers: t, partiedMembers: n } = e,
                r = new Set(
                    t.map((e) => {
                        let { user: t } = e;
                        return t.id;
                    }),
                ),
                i = n.filter((e) => !r.has(e.id)),
                l = p.ZP.getName(t[0].user),
                a = null != t[1] ? p.ZP.getName(t[1].user) : null != i[0] ? p.ZP.getName(i[0]) : null;
            switch (n.length) {
                case 1:
                    return l;
                case 2:
                    return _.intl.format(_.t.t1DyC1, {
                        user1: l,
                        user2: a,
                    });
                default:
                    return _.intl.format(_.t["5CSEcJ"], {
                        user1: l,
                        user2: a,
                        extras: n.length - 2,
                    });
            }
        })(b),
        { subtitle: C, icon: S } = (function (e) {
            var t;
            let { priorityMembers: i, partiedMembers: c, voiceChannels: u, currentActivities: p } = e,
                b = i.length,
                E = c.length - b,
                O = p[0],
                v = null == O ? void 0 : O.activity,
                y = null == O ? void 0 : O.startedPlayingTime,
                I = { name: null != (t = null == v ? void 0 : v.name) ? t : "" };
            if ((0, a.Z)(v) && null != v)
                return {
                    subtitle: (0, r.jsx)(d.ZP, {
                        start: y,
                        location: d.ZP.Locations.ACTIVITY_FEED_NEW,
                        messageProps: I,
                    }),
                    icon: null,
                };
            if (b + E === 1 && null != O) {
                let { game: e } = O;
                if (null == v)
                    return {
                        subtitle: null,
                        icon: null,
                    };
                let t = f.dc(v);
                if (null != t) return t;
                switch (v.type) {
                    case m.IIU.PLAYING:
                        if ((0, o.Z)(v))
                            return {
                                subtitle: _.intl.string(_.t.tO8wOx),
                                icon: (0, r.jsx)(h.Z.Header.Icon, { src: h.Z.Header.Icon.Src.XBOX }),
                            };
                        return {
                            subtitle: (0, r.jsx)(d.ZP, {
                                start: y,
                                location: d.ZP.Locations.ACTIVITY_FEED_NEW,
                                messageProps: I,
                            }),
                            icon:
                                null != e
                                    ? (0, r.jsx)(h.Z.Header.Icon, {
                                          src: null != e.getIconURL(g.Z) ? e.getIconURL(g.Z) : n(211827),
                                      })
                                    : null,
                        };
                    case m.IIU.STREAMING:
                        return {
                            subtitle: _.intl.string(_.t.HyGHj7),
                            icon:
                                null != e && null != e.getIconURL(g.Z)
                                    ? (0, r.jsx)(h.Z.Header.Icon, { src: e.getIconURL(g.Z) })
                                    : null,
                        };
                    case m.IIU.LISTENING:
                        let i;
                        return (
                            (i = (0, s.Z)(v)
                                ? (0, r.jsx)(h.Z.Header.Icon, { src: h.Z.Header.Icon.Src.SPOTIFY })
                                : null != e.getIconURL(g.Z)
                                  ? (0, r.jsx)(h.Z.Header.Icon, { src: e.getIconURL(g.Z) })
                                  : (0, r.jsx)(h.Z.Header.Icon, { src: n(211827) })),
                            {
                                subtitle: _.intl.formatToPlainString(_.t.NF5xop, { name: v.name }),
                                icon: i,
                            }
                        );
                    case m.IIU.WATCHING:
                        return {
                            subtitle: _.intl.formatToPlainString(_.t.pW3Ip3, { name: v.name }),
                            icon:
                                null != e && null != e.getIconURL(g.Z)
                                    ? (0, r.jsx)(h.Z.Header.Icon, { src: e.getIconURL(g.Z) })
                                    : null,
                        };
                    default:
                        return {
                            subtitle: _.intl.string(_.t.grGyaf),
                            icon: null,
                        };
                }
            }
            if (0 === p.length) {
                if (u.length > 0)
                    return {
                        subtitle: _.intl.string(_.t.grGyaf),
                        icon: null,
                    };
                let e = p[0];
                if (null != e) {
                    let { activity: t } = e;
                    if (null != t) {
                        let e = f.dc(t);
                        if (null != e) return e;
                    }
                    if (null != t && t.type === m.IIU.LISTENING)
                        return {
                            subtitle: _.intl.string(_.t.rmnkz4),
                            icon: (0, r.jsx)(h.Z.Header.Icon, { src: h.Z.Header.Icon.Src.SPOTIFY }),
                        };
                }
            } else if (1 === p.length) {
                let e = p.find((e) => null != e.activity);
                if (null == e)
                    return {
                        subtitle: null,
                        icon: null,
                    };
                let { activity: t, game: n, startedPlayingTime: i } = e;
                return (
                    l()(null != t, "Activity was null somehow"),
                    {
                        subtitle: (0, r.jsx)(d.ZP, {
                            start: i,
                            location: d.ZP.Locations.ACTIVITY_FEED_NEW,
                            messageProps: I,
                        }),
                        icon:
                            null != n && null != n.getIconURL(g.Z)
                                ? (0, r.jsx)(h.Z.Header.Icon, { src: n.getIconURL(g.Z) })
                                : null,
                    }
                );
            }
            return {
                subtitle: _.intl.string(_.t.sau5tt),
                icon: (0, r.jsx)(h.Z.Header.Icon, { src: h.Z.Header.Icon.Src.MULTIPLE }),
            };
        })(b),
        T = (0, u.Z)({
            applicationId: null == (i = b.currentActivities[0]) || null == (t = i.activity) ? void 0 : t.application_id,
            location: "FriendsActivityFeed",
            source: c.m1.FriendsActivityFeed,
        });
    return (0, r.jsx)(h.Z.Header, {
        priorityUser: y,
        guildId: null == v ? void 0 : v.id,
        title: I,
        subtitle: C,
        icon: S,
        onSubtitleClick: T,
        onIconClick: T,
        onContextMenu: (e) => E(e, y.user),
    });
}
