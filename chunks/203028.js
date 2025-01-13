n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(512722),
    l = n.n(r),
    a = n(841784),
    s = n(503438),
    o = n(802856),
    c = n(810568),
    d = n(168524),
    u = n(707409),
    h = n(51144),
    m = n(761282),
    p = n(358924),
    g = n(817915),
    f = n(981631),
    _ = n(388032);
function E(e) {
    var t, r;
    let { party: E, onUserContextMenu: I } = e,
        { priorityMembers: C, guildContext: N } = E,
        v = C[0],
        S = (function (e) {
            let { priorityMembers: t, partiedMembers: n } = e,
                i = new Set(
                    t.map((e) => {
                        let { user: t } = e;
                        return t.id;
                    })
                ),
                r = n.filter((e) => !i.has(e.id)),
                l = h.ZP.getName(t[0].user),
                a = null != t[1] ? h.ZP.getName(t[1].user) : null != r[0] ? h.ZP.getName(r[0]) : null;
            switch (n.length) {
                case 1:
                    return l;
                case 2:
                    return _.intl.format(_.t.t1DyCw, {
                        user1: l,
                        user2: a
                    });
                default:
                    return _.intl.format(_.t['5CSEcH'], {
                        user1: l,
                        user2: a,
                        extras: n.length - 2
                    });
            }
        })(E),
        { subtitle: T, icon: A } = (function (e) {
            var t;
            let { priorityMembers: r, partiedMembers: c, voiceChannels: d, currentActivities: h } = e,
                E = r.length,
                I = c.length - E,
                C = h[0],
                N = null == C ? void 0 : C.activity,
                v = null == C ? void 0 : C.startedPlayingTime,
                S = { name: null !== (t = null == N ? void 0 : N.name) && void 0 !== t ? t : '' };
            if ((0, a.Z)(N) && null != N)
                return {
                    subtitle: (0, i.jsx)(u.ZP, {
                        start: v,
                        location: u.ZP.Locations.ACTIVITY_FEED_NEW,
                        messageProps: S
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
                    case f.IIU.PLAYING:
                        if ((0, o.Z)(N))
                            return {
                                subtitle: _.intl.string(_.t.tO8wOz),
                                icon: (0, i.jsx)(p.Z.Header.Icon, { src: p.Z.Header.Icon.Src.XBOX })
                            };
                        return {
                            subtitle: (0, i.jsx)(u.ZP, {
                                start: v,
                                location: u.ZP.Locations.ACTIVITY_FEED_NEW,
                                messageProps: S
                            }),
                            icon: null != e ? (0, i.jsx)(p.Z.Header.Icon, { src: null != e.getIconURL(g.Z) ? e.getIconURL(g.Z) : n(211827) }) : null
                        };
                    case f.IIU.STREAMING:
                        return {
                            subtitle: _.intl.string(_.t.HyGHj4),
                            icon: null != e && null != e.getIconURL(g.Z) ? (0, i.jsx)(p.Z.Header.Icon, { src: e.getIconURL(g.Z) }) : null
                        };
                    case f.IIU.LISTENING:
                        let r;
                        return (
                            (r = (0, s.Z)(N) ? (0, i.jsx)(p.Z.Header.Icon, { src: p.Z.Header.Icon.Src.SPOTIFY }) : null != e.getIconURL(g.Z) ? (0, i.jsx)(p.Z.Header.Icon, { src: e.getIconURL(g.Z) }) : (0, i.jsx)(p.Z.Header.Icon, { src: n(211827) })),
                            {
                                subtitle: _.intl.formatToPlainString(_.t.NF5xoq, { name: N.name }),
                                icon: r
                            }
                        );
                    case f.IIU.WATCHING:
                        return {
                            subtitle: _.intl.string(_.t['0PyKSU']),
                            icon: null != e && null != e.getIconURL(g.Z) ? (0, i.jsx)(p.Z.Header.Icon, { src: e.getIconURL(g.Z) }) : null
                        };
                    default:
                        return {
                            subtitle: _.intl.string(_.t.grGyaW),
                            icon: null
                        };
                }
            }
            if (0 === h.length) {
                if (d.length > 0)
                    return {
                        subtitle: _.intl.string(_.t.grGyaW),
                        icon: null
                    };
                let e = h[0];
                if (null != e) {
                    let { activity: t } = e;
                    if (null != t) {
                        let e = m.dc(t);
                        if (null != e) return e;
                    }
                    if (null != t && t.type === f.IIU.LISTENING)
                        return {
                            subtitle: _.intl.string(_.t.rmnkz8),
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
                let { activity: t, game: n, startedPlayingTime: r } = e;
                return (
                    l()(null != t, 'Activity was null somehow'),
                    {
                        subtitle: (0, i.jsx)(u.ZP, {
                            start: r,
                            location: u.ZP.Locations.ACTIVITY_FEED_NEW,
                            messageProps: S
                        }),
                        icon: null != n && null != n.getIconURL(g.Z) ? (0, i.jsx)(p.Z.Header.Icon, { src: n.getIconURL(g.Z) }) : null
                    }
                );
            }
            return {
                subtitle: _.intl.string(_.t.sau5tr),
                icon: (0, i.jsx)(p.Z.Header.Icon, { src: p.Z.Header.Icon.Src.MULTIPLE })
            };
        })(E),
        b = (0, d.Z)({
            applicationId: null === (r = E.currentActivities[0]) || void 0 === r ? void 0 : null === (t = r.activity) || void 0 === t ? void 0 : t.application_id,
            location: 'FriendsActivityFeed',
            source: c.m1.FriendsActivityFeed
        });
    return (0, i.jsx)(p.Z.Header, {
        priorityUser: v,
        guildId: null == N ? void 0 : N.id,
        title: S,
        subtitle: T,
        icon: A,
        onSubtitleClick: b,
        onIconClick: b,
        onContextMenu: (e) => I(e, v.user)
    });
}
