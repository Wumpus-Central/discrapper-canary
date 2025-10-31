n.d(t, { Z: () => b }), n(388685);
var r = n(951288);
n(647438);
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
    m = n(358924),
    h = n(817915),
    g = n(981631),
    _ = n(388032);
function b(e) {
    var t, i;
    let { party: b, onUserContextMenu: E } = e,
        { priorityMembers: O, guildContext: I } = b,
        y = O[0],
        v = (function (e) {
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
                I = null == O ? void 0 : O.activity,
                y = null == O ? void 0 : O.startedPlayingTime,
                v = { name: null != (t = null == I ? void 0 : I.name) ? t : "" };
            if ((0, a.Z)(I) && null != I)
                return {
                    subtitle: (0, r.jsx)(d.ZP, {
                        start: y,
                        location: d.ZP.Locations.ACTIVITY_FEED_NEW,
                        messageProps: v,
                    }),
                    icon: null,
                };
            if (b + E === 1 && null != O) {
                let { game: e } = O;
                if (null == I)
                    return {
                        subtitle: null,
                        icon: null,
                    };
                let t = f.dc(I);
                if (null != t) return t;
                switch (I.type) {
                    case g.IIU.PLAYING:
                        if ((0, o.Z)(I))
                            return {
                                subtitle: _.intl.string(_.t.tO8wOx),
                                icon: (0, r.jsx)(m.Z.Header.Icon, { src: m.Z.Header.Icon.Src.XBOX }),
                            };
                        return {
                            subtitle: (0, r.jsx)(d.ZP, {
                                start: y,
                                location: d.ZP.Locations.ACTIVITY_FEED_NEW,
                                messageProps: v,
                            }),
                            icon:
                                null != e
                                    ? (0, r.jsx)(m.Z.Header.Icon, {
                                          src: null != e.getIconURL(h.Z) ? e.getIconURL(h.Z) : n(211827),
                                      })
                                    : null,
                        };
                    case g.IIU.STREAMING:
                        return {
                            subtitle: _.intl.string(_.t.HyGHj7),
                            icon:
                                null != e && null != e.getIconURL(h.Z)
                                    ? (0, r.jsx)(m.Z.Header.Icon, { src: e.getIconURL(h.Z) })
                                    : null,
                        };
                    case g.IIU.LISTENING:
                        let i;
                        return (
                            (i = (0, s.Z)(I)
                                ? (0, r.jsx)(m.Z.Header.Icon, { src: m.Z.Header.Icon.Src.SPOTIFY })
                                : null != e.getIconURL(h.Z)
                                  ? (0, r.jsx)(m.Z.Header.Icon, { src: e.getIconURL(h.Z) })
                                  : (0, r.jsx)(m.Z.Header.Icon, { src: n(211827) })),
                            {
                                subtitle: _.intl.formatToPlainString(_.t.NF5xop, { name: I.name }),
                                icon: i,
                            }
                        );
                    case g.IIU.WATCHING:
                        return {
                            subtitle: _.intl.formatToPlainString(_.t.pW3Ip3, { name: I.name }),
                            icon:
                                null != e && null != e.getIconURL(h.Z)
                                    ? (0, r.jsx)(m.Z.Header.Icon, { src: e.getIconURL(h.Z) })
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
                    if (null != t && t.type === g.IIU.LISTENING)
                        return {
                            subtitle: _.intl.string(_.t.rmnkz4),
                            icon: (0, r.jsx)(m.Z.Header.Icon, { src: m.Z.Header.Icon.Src.SPOTIFY }),
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
                            messageProps: v,
                        }),
                        icon:
                            null != n && null != n.getIconURL(h.Z)
                                ? (0, r.jsx)(m.Z.Header.Icon, { src: n.getIconURL(h.Z) })
                                : null,
                    }
                );
            }
            return {
                subtitle: _.intl.string(_.t.sau5tt),
                icon: (0, r.jsx)(m.Z.Header.Icon, { src: m.Z.Header.Icon.Src.MULTIPLE }),
            };
        })(b),
        T = (0, u.Z)({
            applicationId: null == (i = b.currentActivities[0]) || null == (t = i.activity) ? void 0 : t.application_id,
            location: "FriendsActivityFeed",
            source: c.m1.FriendsActivityFeed,
        });
    return (0, r.jsx)(m.Z.Header, {
        priorityUser: y,
        guildId: null == I ? void 0 : I.id,
        title: v,
        subtitle: C,
        icon: S,
        onSubtitleClick: T,
        onIconClick: T,
        onContextMenu: (e) => E(e, y.user),
    });
}
