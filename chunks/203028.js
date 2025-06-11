n.d(t, { Z: () => _ }), n(388685);
var r = n(255367);
n(73800);
var i = n(512722),
    l = n.n(i),
    a = n(841784),
    o = n(503438),
    s = n(802856),
    c = n(810568),
    u = n(168524),
    d = n(707409),
    p = n(51144),
    h = n(761282),
    f = n(358924),
    g = n(817915),
    m = n(981631),
    b = n(388032);
function _(e) {
    var t, i;
    let { party: _, onUserContextMenu: E } = e,
        { priorityMembers: O, guildContext: y } = _,
        I = O[0],
        v = (function (e) {
            let { priorityMembers: t, partiedMembers: n } = e,
                r = new Set(
                    t.map((e) => {
                        let { user: t } = e;
                        return t.id;
                    })
                ),
                i = n.filter((e) => !r.has(e.id)),
                l = p.ZP.getName(t[0].user),
                a = null != t[1] ? p.ZP.getName(t[1].user) : null != i[0] ? p.ZP.getName(i[0]) : null;
            switch (n.length) {
                case 1:
                    return l;
                case 2:
                    return b.intl.format(b.t.t1DyCw, {
                        user1: l,
                        user2: a
                    });
                default:
                    return b.intl.format(b.t['5CSEcH'], {
                        user1: l,
                        user2: a,
                        extras: n.length - 2
                    });
            }
        })(_),
        { subtitle: C, icon: S } = (function (e) {
            var t;
            let { priorityMembers: i, partiedMembers: c, voiceChannels: u, currentActivities: p } = e,
                _ = i.length,
                E = c.length - _,
                O = p[0],
                y = null == O ? void 0 : O.activity,
                I = null == O ? void 0 : O.startedPlayingTime,
                v = { name: null != (t = null == y ? void 0 : y.name) ? t : '' };
            if ((0, a.Z)(y) && null != y)
                return {
                    subtitle: (0, r.jsx)(d.ZP, {
                        start: I,
                        location: d.ZP.Locations.ACTIVITY_FEED_NEW,
                        messageProps: v
                    }),
                    icon: null
                };
            if (_ + E === 1 && null != O) {
                let { game: e } = O;
                if (null == y)
                    return {
                        subtitle: null,
                        icon: null
                    };
                let t = h.dc(y);
                if (null != t) return t;
                switch (y.type) {
                    case m.IIU.PLAYING:
                        if ((0, s.Z)(y))
                            return {
                                subtitle: b.intl.string(b.t.tO8wOz),
                                icon: (0, r.jsx)(f.Z.Header.Icon, { src: f.Z.Header.Icon.Src.XBOX })
                            };
                        return {
                            subtitle: (0, r.jsx)(d.ZP, {
                                start: I,
                                location: d.ZP.Locations.ACTIVITY_FEED_NEW,
                                messageProps: v
                            }),
                            icon: null != e ? (0, r.jsx)(f.Z.Header.Icon, { src: null != e.getIconURL(g.Z) ? e.getIconURL(g.Z) : n(211827) }) : null
                        };
                    case m.IIU.STREAMING:
                        return {
                            subtitle: b.intl.string(b.t.HyGHj4),
                            icon: null != e && null != e.getIconURL(g.Z) ? (0, r.jsx)(f.Z.Header.Icon, { src: e.getIconURL(g.Z) }) : null
                        };
                    case m.IIU.LISTENING:
                        let i;
                        return (
                            (i = (0, o.Z)(y) ? (0, r.jsx)(f.Z.Header.Icon, { src: f.Z.Header.Icon.Src.SPOTIFY }) : null != e.getIconURL(g.Z) ? (0, r.jsx)(f.Z.Header.Icon, { src: e.getIconURL(g.Z) }) : (0, r.jsx)(f.Z.Header.Icon, { src: n(211827) })),
                            {
                                subtitle: b.intl.formatToPlainString(b.t.NF5xoq, { name: y.name }),
                                icon: i
                            }
                        );
                    case m.IIU.WATCHING:
                        return {
                            subtitle: b.intl.formatToPlainString(b.t.pW3Ip6, { name: y.name }),
                            icon: null != e && null != e.getIconURL(g.Z) ? (0, r.jsx)(f.Z.Header.Icon, { src: e.getIconURL(g.Z) }) : null
                        };
                    default:
                        return {
                            subtitle: b.intl.string(b.t.grGyaW),
                            icon: null
                        };
                }
            }
            if (0 === p.length) {
                if (u.length > 0)
                    return {
                        subtitle: b.intl.string(b.t.grGyaW),
                        icon: null
                    };
                let e = p[0];
                if (null != e) {
                    let { activity: t } = e;
                    if (null != t) {
                        let e = h.dc(t);
                        if (null != e) return e;
                    }
                    if (null != t && t.type === m.IIU.LISTENING)
                        return {
                            subtitle: b.intl.string(b.t.rmnkz8),
                            icon: (0, r.jsx)(f.Z.Header.Icon, { src: f.Z.Header.Icon.Src.SPOTIFY })
                        };
                }
            } else if (1 === p.length) {
                let e = p.find((e) => null != e.activity);
                if (null == e)
                    return {
                        subtitle: null,
                        icon: null
                    };
                let { activity: t, game: n, startedPlayingTime: i } = e;
                return (
                    l()(null != t, 'Activity was null somehow'),
                    {
                        subtitle: (0, r.jsx)(d.ZP, {
                            start: i,
                            location: d.ZP.Locations.ACTIVITY_FEED_NEW,
                            messageProps: v
                        }),
                        icon: null != n && null != n.getIconURL(g.Z) ? (0, r.jsx)(f.Z.Header.Icon, { src: n.getIconURL(g.Z) }) : null
                    }
                );
            }
            return {
                subtitle: b.intl.string(b.t.sau5tr),
                icon: (0, r.jsx)(f.Z.Header.Icon, { src: f.Z.Header.Icon.Src.MULTIPLE })
            };
        })(_),
        N = (0, u.Z)({
            applicationId: null == (i = _.currentActivities[0]) || null == (t = i.activity) ? void 0 : t.application_id,
            location: 'FriendsActivityFeed',
            source: c.m1.FriendsActivityFeed
        });
    return (0, r.jsx)(f.Z.Header, {
        priorityUser: I,
        guildId: null == y ? void 0 : y.id,
        title: v,
        subtitle: C,
        icon: S,
        onSubtitleClick: N,
        onIconClick: N,
        onContextMenu: (e) => E(e, I.user)
    });
}
