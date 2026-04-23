n.d(t, { A: () => f });
var i = n(627968);
n(64700);
var s = n(284009),
    l = n.n(s),
    a = n(765379),
    r = n(90644),
    o = n(61330),
    c = n(609425),
    d = n(73392),
    u = n(409626),
    m = n(692969),
    A = n(290987),
    h = n(427262),
    x = n(516085),
    p = n(928636);
n(595);
var g = n(652215),
    N = n(985018);
function f(e) {
    let { party: t, onUserContextMenu: s } = e,
        { priorityMembers: f, partiedMembers: _, guildContext: I } = t,
        v = f[0],
        j = (function (e) {
            let { priorityMembers: t, partiedMembers: n } = e,
                i = new Set(
                    t.map((e) => {
                        let { user: t } = e;
                        return t.id;
                    }),
                ),
                s = n.filter((e) => !i.has(e.id)),
                l = h.Ay.getName(t[0].user),
                a = null != t[1] ? h.Ay.getName(t[1].user) : null != s[0] ? h.Ay.getName(s[0]) : null;
            switch (n.length) {
                case 1:
                    return l;
                case 2:
                    return N.intl.format(N.t.t1DyC1, { user1: l, user2: a });
                default:
                    return N.intl.format(N.t["5CSEcJ"], { user1: l, user2: a, extras: n.length - 2 });
            }
        })(t),
        { subtitle: C, icon: y } = (function (e) {
            let { priorityMembers: t, partiedMembers: s, voiceChannels: c, currentActivities: d } = e,
                u = t.length,
                m = s.length - u,
                h = d[0],
                f = h?.activity,
                _ = h?.startedPlayingTime,
                I = { name: f?.name ?? "" };
            if ((0, a.A)(f) && null != f)
                return {
                    subtitle: (0, i.jsx)(A.Ay, {
                        start: _,
                        location: A.Ay.Locations.ACTIVITY_FEED_NEW,
                        messageProps: I,
                    }),
                    icon: null,
                };
            if (u + m === 1 && null != h) {
                let { game: e } = h;
                if (null == f) return { subtitle: null, icon: null };
                let t = x.Ij(f);
                if (null != t) return t;
                switch (f.type) {
                    case g.$pd.PLAYING:
                        if ((0, o.A)(f))
                            return {
                                subtitle: N.intl.string(N.t.tO8wOx),
                                icon: (0, i.jsx)(p.A.Header.Icon, { src: p.A.Header.Icon.Src.XBOX }),
                            };
                        return {
                            subtitle: (0, i.jsx)(A.Ay, {
                                start: _,
                                location: A.Ay.Locations.ACTIVITY_FEED_NEW,
                                messageProps: I,
                            }),
                            icon:
                                null != e
                                    ? (0, i.jsx)(p.A.Header.Icon, {
                                          src: null != e.getIconURL(64) ? e.getIconURL(64) : n(960648),
                                      })
                                    : null,
                        };
                    case g.$pd.STREAMING:
                        return {
                            subtitle: N.intl.string(N.t.HyGHj7),
                            icon:
                                null != e && null != e.getIconURL(64)
                                    ? (0, i.jsx)(p.A.Header.Icon, { src: e.getIconURL(64) })
                                    : null,
                        };
                    case g.$pd.LISTENING:
                        let s;
                        return (
                            (s = (0, r.A)(f)
                                ? (0, i.jsx)(p.A.Header.Icon, { src: p.A.Header.Icon.Src.SPOTIFY })
                                : null != e.getIconURL(64)
                                  ? (0, i.jsx)(p.A.Header.Icon, { src: e.getIconURL(64) })
                                  : (0, i.jsx)(p.A.Header.Icon, { src: n(960648) })),
                            { subtitle: N.intl.formatToPlainString(N.t.NF5xop, { name: f.name }), icon: s }
                        );
                    case g.$pd.WATCHING:
                        return {
                            subtitle: N.intl.formatToPlainString(N.t.pW3Ip3, { name: f.name }),
                            icon:
                                null != e && null != e.getIconURL(64)
                                    ? (0, i.jsx)(p.A.Header.Icon, { src: e.getIconURL(64) })
                                    : null,
                        };
                    default:
                        return { subtitle: N.intl.string(N.t.grGyaf), icon: null };
                }
            }
            if (0 === d.length) {
                if (c.length > 0) return { subtitle: N.intl.string(N.t.grGyaf), icon: null };
                let e = d[0];
                if (null != e) {
                    let { activity: t } = e;
                    if (null != t) {
                        let e = x.Ij(t);
                        if (null != e) return e;
                    }
                    if (null != t && t.type === g.$pd.LISTENING)
                        return {
                            subtitle: N.intl.string(N.t.rmnkz4),
                            icon: (0, i.jsx)(p.A.Header.Icon, { src: p.A.Header.Icon.Src.SPOTIFY }),
                        };
                }
            } else if (1 === d.length) {
                let e = d.find((e) => null != e.activity);
                if (null == e) return { subtitle: null, icon: null };
                let { activity: t, game: n, startedPlayingTime: s } = e;
                return (
                    l()(null != t, "Activity was null somehow"),
                    {
                        subtitle: (0, i.jsx)(A.Ay, {
                            start: s,
                            location: A.Ay.Locations.ACTIVITY_FEED_NEW,
                            messageProps: I,
                        }),
                        icon:
                            null != n && null != n.getIconURL(64)
                                ? (0, i.jsx)(p.A.Header.Icon, { src: n.getIconURL(64) })
                                : null,
                    }
                );
            }
            return {
                subtitle: N.intl.string(N.t.sau5tt),
                icon: (0, i.jsx)(p.A.Header.Icon, { src: p.A.Header.Icon.Src.MULTIPLE }),
            };
        })(t),
        S = (0, m.A)({
            applicationId: t.currentActivities[0]?.activity?.application_id,
            location: "FriendsActivityFeed",
            source: u.Ob.FriendsActivityFeed,
        }),
        E = (0, c.A)({ userId: v.user.id, guildId: I?.id }),
        T = (0, d.a)({ displayNameStyles: E });
    return (0, i.jsx)(p.A.Header, {
        priorityUser: v,
        guildId: I?.id,
        title: j,
        subtitle: C,
        icon: y,
        onSubtitleClick: S,
        onIconClick: S,
        onContextMenu: (e) => s(e, v.user),
        displayNameFont: 1 === _.length ? T : void 0,
    });
}
