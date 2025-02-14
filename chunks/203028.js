n.d(t, { Z: () => E }), n(47120);
var i = n(200651);
n(192379);
var l = n(512722),
    r = n.n(l),
    a = n(841784),
    s = n(503438),
    o = n(802856),
    d = n(810568),
    c = n(168524),
    u = n(707409),
    h = n(51144),
    m = n(761282),
    p = n(358924),
    g = n(817915),
    _ = n(981631),
    f = n(388032);
function E(e) {
    var t, l;
    let { party: E, onUserContextMenu: I } = e,
        { priorityMembers: C, guildContext: N } = E,
        v = C[0],
        T = (function (e) {
            let { priorityMembers: t, partiedMembers: n } = e,
                i = new Set(
                    t.map((e) => {
                        let { user: t } = e;
                        return t.id;
                    })
                ),
                l = n.filter((e) => !i.has(e.id)),
                r = h.ZP.getName(t[0].user),
                a = null != t[1] ? h.ZP.getName(t[1].user) : null != l[0] ? h.ZP.getName(l[0]) : null;
            switch (n.length) {
                case 1:
                    return r;
                case 2:
                    return f.intl.format(f.t.t1DyCw, {
                        user1: r,
                        user2: a
                    });
                default:
                    return f.intl.format(f.t['5CSEcH'], {
                        user1: r,
                        user2: a,
                        extras: n.length - 2
                    });
            }
        })(E),
        { subtitle: S, icon: A } = (function (e) {
            var t;
            let { priorityMembers: l, partiedMembers: d, voiceChannels: c, currentActivities: h } = e,
                E = l.length,
                I = d.length - E,
                C = h[0],
                N = null == C ? void 0 : C.activity,
                v = null == C ? void 0 : C.startedPlayingTime,
                T = { name: null !== (t = null == N ? void 0 : N.name) && void 0 !== t ? t : '' };
            if ((0, a.Z)(N) && null != N)
                return {
                    subtitle: (0, i.jsx)(u.ZP, {
                        start: v,
                        location: u.ZP.Locations.ACTIVITY_FEED_NEW,
                        messageProps: T
                    }),
                    icon: null
                };
            if (E + I === 1 && null != C) {
                let { game: e } = C;
                if (null == N)
                    return {
                        subtitle: null,
                        icon: null
                    };
                let t = m.dc(N);
                if (null != t) return t;
                switch (N.type) {
                    case _.IIU.PLAYING:
                        if ((0, o.Z)(N))
                            return {
                                subtitle: f.intl.string(f.t.tO8wOz),
                                icon: (0, i.jsx)(p.Z.Header.Icon, { src: p.Z.Header.Icon.Src.XBOX })
                            };
                        return {
                            subtitle: (0, i.jsx)(u.ZP, {
                                start: v,
                                location: u.ZP.Locations.ACTIVITY_FEED_NEW,
                                messageProps: T
                            }),
                            icon: null != e ? (0, i.jsx)(p.Z.Header.Icon, { src: null != e.getIconURL(g.Z) ? e.getIconURL(g.Z) : n(211827) }) : null
                        };
                    case _.IIU.STREAMING:
                        return {
                            subtitle: f.intl.string(f.t.HyGHj4),
                            icon: null != e && null != e.getIconURL(g.Z) ? (0, i.jsx)(p.Z.Header.Icon, { src: e.getIconURL(g.Z) }) : null
                        };
                    case _.IIU.LISTENING:
                        let l;
                        return (
                            (l = (0, s.Z)(N) ? (0, i.jsx)(p.Z.Header.Icon, { src: p.Z.Header.Icon.Src.SPOTIFY }) : null != e.getIconURL(g.Z) ? (0, i.jsx)(p.Z.Header.Icon, { src: e.getIconURL(g.Z) }) : (0, i.jsx)(p.Z.Header.Icon, { src: n(211827) })),
                            {
                                subtitle: f.intl.formatToPlainString(f.t.NF5xoq, { name: N.name }),
                                icon: l
                            }
                        );
                    case _.IIU.WATCHING:
                        return {
                            subtitle: f.intl.formatToPlainString(f.t.pW3Ip6, { name: N.name }),
                            icon: null != e && null != e.getIconURL(g.Z) ? (0, i.jsx)(p.Z.Header.Icon, { src: e.getIconURL(g.Z) }) : null
                        };
                    default:
                        return {
                            subtitle: f.intl.string(f.t.grGyaW),
                            icon: null
                        };
                }
            }
            if (0 === h.length) {
                if (c.length > 0)
                    return {
                        subtitle: f.intl.string(f.t.grGyaW),
                        icon: null
                    };
                let e = h[0];
                if (null != e) {
                    let { activity: t } = e;
                    if (null != t) {
                        let e = m.dc(t);
                        if (null != e) return e;
                    }
                    if (null != t && t.type === _.IIU.LISTENING)
                        return {
                            subtitle: f.intl.string(f.t.rmnkz8),
                            icon: (0, i.jsx)(p.Z.Header.Icon, { src: p.Z.Header.Icon.Src.SPOTIFY })
                        };
                }
            } else if (1 === h.length) {
                let e = h.find((e) => null != e.activity);
                if (null == e)
                    return {
                        subtitle: null,
                        icon: null
                    };
                let { activity: t, game: n, startedPlayingTime: l } = e;
                return (
                    r()(null != t, 'Activity was null somehow'),
                    {
                        subtitle: (0, i.jsx)(u.ZP, {
                            start: l,
                            location: u.ZP.Locations.ACTIVITY_FEED_NEW,
                            messageProps: T
                        }),
                        icon: null != n && null != n.getIconURL(g.Z) ? (0, i.jsx)(p.Z.Header.Icon, { src: n.getIconURL(g.Z) }) : null
                    }
                );
            }
            return {
                subtitle: f.intl.string(f.t.sau5tr),
                icon: (0, i.jsx)(p.Z.Header.Icon, { src: p.Z.Header.Icon.Src.MULTIPLE })
            };
        })(E),
        Z = (0, c.Z)({
            applicationId: null === (l = E.currentActivities[0]) || void 0 === l ? void 0 : null === (t = l.activity) || void 0 === t ? void 0 : t.application_id,
            location: 'FriendsActivityFeed',
            source: d.m1.FriendsActivityFeed
        });
    return (0, i.jsx)(p.Z.Header, {
        priorityUser: v,
        guildId: null == N ? void 0 : N.id,
        title: T,
        subtitle: S,
        icon: A,
        onSubtitleClick: Z,
        onIconClick: Z,
        onContextMenu: (e) => I(e, v.user)
    });
}
