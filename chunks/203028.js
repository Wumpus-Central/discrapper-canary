n.d(t, { Z: () => _ }), n(47120);
var r = n(200651);
n(192379);
var i = n(512722),
    l = n.n(i),
    o = n(841784),
    a = n(503438),
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
        { priorityMembers: O, guildContext: N } = _,
        v = O[0],
        y = (function (e) {
            let { priorityMembers: t, partiedMembers: n } = e,
                r = new Set(
                    t.map((e) => {
                        let { user: t } = e;
                        return t.id;
                    })
                ),
                i = n.filter((e) => !r.has(e.id)),
                l = p.ZP.getName(t[0].user),
                o = null != t[1] ? p.ZP.getName(t[1].user) : null != i[0] ? p.ZP.getName(i[0]) : null;
            switch (n.length) {
                case 1:
                    return l;
                case 2:
                    return b.NW.format(b.t.t1DyCw, {
                        user1: l,
                        user2: o
                    });
                default:
                    return b.NW.format(b.t['5CSEcH'], {
                        user1: l,
                        user2: o,
                        extras: n.length - 2
                    });
            }
        })(_),
        { subtitle: I, icon: C } = (function (e) {
            var t;
            let { priorityMembers: i, partiedMembers: c, voiceChannels: u, currentActivities: p } = e,
                _ = i.length,
                E = c.length - _,
                O = p[0],
                N = null == O ? void 0 : O.activity,
                v = null == O ? void 0 : O.startedPlayingTime,
                y = { name: null !== (t = null == N ? void 0 : N.name) && void 0 !== t ? t : '' };
            if ((0, o.Z)(N) && null != N)
                return {
                    subtitle: (0, r.jsx)(d.ZP, {
                        start: v,
                        location: d.ZP.Locations.ACTIVITY_FEED_NEW,
                        messageProps: y
                    }),
                    icon: null
                };
            if (_ + E === 1 && null != O) {
                let { game: e } = O;
                if (null == N)
                    return {
                        subtitle: null,
                        icon: null
                    };
                let t = h.dc(N);
                if (null != t) return t;
                switch (N.type) {
                    case m.IIU.PLAYING:
                        if ((0, s.Z)(N))
                            return {
                                subtitle: b.NW.string(b.t.tO8wOz),
                                icon: (0, r.jsx)(f.Z.Header.Icon, { src: f.Z.Header.Icon.Src.XBOX })
                            };
                        return {
                            subtitle: (0, r.jsx)(d.ZP, {
                                start: v,
                                location: d.ZP.Locations.ACTIVITY_FEED_NEW,
                                messageProps: y
                            }),
                            icon: null != e ? (0, r.jsx)(f.Z.Header.Icon, { src: null != e.getIconURL(g.Z) ? e.getIconURL(g.Z) : n(211827) }) : null
                        };
                    case m.IIU.STREAMING:
                        return {
                            subtitle: b.NW.string(b.t.HyGHj4),
                            icon: null != e && null != e.getIconURL(g.Z) ? (0, r.jsx)(f.Z.Header.Icon, { src: e.getIconURL(g.Z) }) : null
                        };
                    case m.IIU.LISTENING:
                        let i;
                        return (
                            (i = (0, a.Z)(N) ? (0, r.jsx)(f.Z.Header.Icon, { src: f.Z.Header.Icon.Src.SPOTIFY }) : null != e.getIconURL(g.Z) ? (0, r.jsx)(f.Z.Header.Icon, { src: e.getIconURL(g.Z) }) : (0, r.jsx)(f.Z.Header.Icon, { src: n(211827) })),
                            {
                                subtitle: b.NW.formatToPlainString(b.t.NF5xoq, { name: N.name }),
                                icon: i
                            }
                        );
                    case m.IIU.WATCHING:
                        return {
                            subtitle: b.NW.formatToPlainString(b.t.pW3Ip6, { name: N.name }),
                            icon: null != e && null != e.getIconURL(g.Z) ? (0, r.jsx)(f.Z.Header.Icon, { src: e.getIconURL(g.Z) }) : null
                        };
                    default:
                        return {
                            subtitle: b.NW.string(b.t.grGyaW),
                            icon: null
                        };
                }
            }
            if (0 === p.length) {
                if (u.length > 0)
                    return {
                        subtitle: b.NW.string(b.t.grGyaW),
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
                            subtitle: b.NW.string(b.t.rmnkz8),
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
                            messageProps: y
                        }),
                        icon: null != n && null != n.getIconURL(g.Z) ? (0, r.jsx)(f.Z.Header.Icon, { src: n.getIconURL(g.Z) }) : null
                    }
                );
            }
            return {
                subtitle: b.NW.string(b.t.sau5tr),
                icon: (0, r.jsx)(f.Z.Header.Icon, { src: f.Z.Header.Icon.Src.MULTIPLE })
            };
        })(_),
        S = (0, u.Z)({
            applicationId: null === (i = _.currentActivities[0]) || void 0 === i ? void 0 : null === (t = i.activity) || void 0 === t ? void 0 : t.application_id,
            location: 'FriendsActivityFeed',
            source: c.m1.FriendsActivityFeed
        });
    return (0, r.jsx)(f.Z.Header, {
        priorityUser: v,
        guildId: null == N ? void 0 : N.id,
        title: y,
        subtitle: I,
        icon: C,
        onSubtitleClick: S,
        onIconClick: S,
        onContextMenu: (e) => E(e, v.user)
    });
}
