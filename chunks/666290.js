n.d(t, { A: () => _ }), n(896048);
var r = n(627968);
n(64700);
var i = n(284009),
    l = n.n(i),
    a = n(765379),
    s = n(90644),
    o = n(61330),
    c = n(609425),
    u = n(73392),
    d = n(409626),
    p = n(692969),
    f = n(290987),
    h = n(427262),
    A = n(516085),
    g = n(928636);
n(595);
var m = n(652215),
    b = n(985018);
function _(e) {
    var t, i;
    let { party: _, onUserContextMenu: E } = e,
        { priorityMembers: O, partiedMembers: y, guildContext: I } = _,
        v = O[0],
        S = (function (e) {
            let { priorityMembers: t, partiedMembers: n } = e,
                r = new Set(
                    t.map((e) => {
                        let { user: t } = e;
                        return t.id;
                    }),
                ),
                i = n.filter((e) => !r.has(e.id)),
                l = h.Ay.getName(t[0].user),
                a = null != t[1] ? h.Ay.getName(t[1].user) : null != i[0] ? h.Ay.getName(i[0]) : null;
            switch (n.length) {
                case 1:
                    return l;
                case 2:
                    return b.intl.format(b.t.t1DyC1, {
                        user1: l,
                        user2: a,
                    });
                default:
                    return b.intl.format(b.t["5CSEcJ"], {
                        user1: l,
                        user2: a,
                        extras: n.length - 2,
                    });
            }
        })(_),
        { subtitle: C, icon: N } = (function (e) {
            var t;
            let { priorityMembers: i, partiedMembers: c, voiceChannels: u, currentActivities: d } = e,
                p = i.length,
                h = c.length - p,
                _ = d[0],
                E = null == _ ? void 0 : _.activity,
                O = null == _ ? void 0 : _.startedPlayingTime,
                y = { name: null != (t = null == E ? void 0 : E.name) ? t : "" };
            if ((0, a.A)(E) && null != E)
                return {
                    subtitle: (0, r.jsx)(f.Ay, {
                        start: O,
                        location: f.Ay.Locations.ACTIVITY_FEED_NEW,
                        messageProps: y,
                    }),
                    icon: null,
                };
            if (p + h === 1 && null != _) {
                let { game: e } = _;
                if (null == E)
                    return {
                        subtitle: null,
                        icon: null,
                    };
                let t = A.Ij(E);
                if (null != t) return t;
                switch (E.type) {
                    case m.$pd.PLAYING:
                        if ((0, o.A)(E))
                            return {
                                subtitle: b.intl.string(b.t.tO8wOx),
                                icon: (0, r.jsx)(g.A.Header.Icon, { src: g.A.Header.Icon.Src.XBOX }),
                            };
                        return {
                            subtitle: (0, r.jsx)(f.Ay, {
                                start: O,
                                location: f.Ay.Locations.ACTIVITY_FEED_NEW,
                                messageProps: y,
                            }),
                            icon:
                                null != e
                                    ? (0, r.jsx)(g.A.Header.Icon, {
                                          src: null != e.getIconURL(64) ? e.getIconURL(64) : n(960648),
                                      })
                                    : null,
                        };
                    case m.$pd.STREAMING:
                        return {
                            subtitle: b.intl.string(b.t.HyGHj7),
                            icon:
                                null != e && null != e.getIconURL(64)
                                    ? (0, r.jsx)(g.A.Header.Icon, { src: e.getIconURL(64) })
                                    : null,
                        };
                    case m.$pd.LISTENING:
                        let i;
                        return (
                            (i = (0, s.A)(E)
                                ? (0, r.jsx)(g.A.Header.Icon, { src: g.A.Header.Icon.Src.SPOTIFY })
                                : null != e.getIconURL(64)
                                  ? (0, r.jsx)(g.A.Header.Icon, { src: e.getIconURL(64) })
                                  : (0, r.jsx)(g.A.Header.Icon, { src: n(960648) })),
                            {
                                subtitle: b.intl.formatToPlainString(b.t.NF5xop, { name: E.name }),
                                icon: i,
                            }
                        );
                    case m.$pd.WATCHING:
                        return {
                            subtitle: b.intl.formatToPlainString(b.t.pW3Ip3, { name: E.name }),
                            icon:
                                null != e && null != e.getIconURL(64)
                                    ? (0, r.jsx)(g.A.Header.Icon, { src: e.getIconURL(64) })
                                    : null,
                        };
                    default:
                        return {
                            subtitle: b.intl.string(b.t.grGyaf),
                            icon: null,
                        };
                }
            }
            if (0 === d.length) {
                if (u.length > 0)
                    return {
                        subtitle: b.intl.string(b.t.grGyaf),
                        icon: null,
                    };
                let e = d[0];
                if (null != e) {
                    let { activity: t } = e;
                    if (null != t) {
                        let e = A.Ij(t);
                        if (null != e) return e;
                    }
                    if (null != t && t.type === m.$pd.LISTENING)
                        return {
                            subtitle: b.intl.string(b.t.rmnkz4),
                            icon: (0, r.jsx)(g.A.Header.Icon, { src: g.A.Header.Icon.Src.SPOTIFY }),
                        };
                }
            } else if (1 === d.length) {
                let e = d.find((e) => null != e.activity);
                if (null == e)
                    return {
                        subtitle: null,
                        icon: null,
                    };
                let { activity: t, game: n, startedPlayingTime: i } = e;
                return (
                    l()(null != t, "Activity was null somehow"),
                    {
                        subtitle: (0, r.jsx)(f.Ay, {
                            start: i,
                            location: f.Ay.Locations.ACTIVITY_FEED_NEW,
                            messageProps: y,
                        }),
                        icon:
                            null != n && null != n.getIconURL(64)
                                ? (0, r.jsx)(g.A.Header.Icon, { src: n.getIconURL(64) })
                                : null,
                    }
                );
            }
            return {
                subtitle: b.intl.string(b.t.sau5tt),
                icon: (0, r.jsx)(g.A.Header.Icon, { src: g.A.Header.Icon.Src.MULTIPLE }),
            };
        })(_),
        T = (0, p.A)({
            applicationId: null == (i = _.currentActivities[0]) || null == (t = i.activity) ? void 0 : t.application_id,
            location: "FriendsActivityFeed",
            source: d.Ob.FriendsActivityFeed,
        }),
        j = (0, c.A)({
            userId: v.user.id,
            guildId: null == I ? void 0 : I.id,
        }),
        x = (0, u.a)({ displayNameStyles: j });
    return (0, r.jsx)(g.A.Header, {
        priorityUser: v,
        guildId: null == I ? void 0 : I.id,
        title: S,
        subtitle: C,
        icon: N,
        onSubtitleClick: T,
        onIconClick: T,
        onContextMenu: (e) => E(e, v.user),
        displayNameFont: 1 === y.length ? x : void 0,
    });
}
