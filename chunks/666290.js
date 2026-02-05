n.d(t, { A: () => f });
var i = n(627968);
n(64700);
var r = n(284009),
    a = n.n(r),
    l = n(765379),
    s = n(90644),
    o = n(61330),
    d = n(609425),
    c = n(73392),
    u = n(409626),
    A = n(692969),
    h = n(290987),
    _ = n(427262),
    m = n(516085),
    p = n(928636);
n(595);
var g = n(652215),
    E = n(985018);
function f(e) {
    let { party: t, onUserContextMenu: r } = e,
        { priorityMembers: f, partiedMembers: I, guildContext: C } = t,
        N = f[0],
        T = (function (e) {
            let { priorityMembers: t, partiedMembers: n } = e,
                i = new Set(
                    t.map((e) => {
                        let { user: t } = e;
                        return t.id;
                    }),
                ),
                r = n.filter((e) => !i.has(e.id)),
                a = _.Ay.getName(t[0].user),
                l = null != t[1] ? _.Ay.getName(t[1].user) : null != r[0] ? _.Ay.getName(r[0]) : null;
            switch (n.length) {
                case 1:
                    return a;
                case 2:
                    return E.intl.format(E.t.t1DyC1, { user1: a, user2: l });
                default:
                    return E.intl.format(E.t["5CSEcJ"], { user1: a, user2: l, extras: n.length - 2 });
            }
        })(t),
        { subtitle: S, icon: x } = (function (e) {
            let { priorityMembers: t, partiedMembers: r, voiceChannels: d, currentActivities: c } = e,
                u = t.length,
                A = r.length - u,
                _ = c[0],
                f = _?.activity,
                I = _?.startedPlayingTime,
                C = { name: f?.name ?? "" };
            if ((0, l.A)(f) && null != f)
                return {
                    subtitle: (0, i.jsx)(h.Ay, {
                        start: I,
                        location: h.Ay.Locations.ACTIVITY_FEED_NEW,
                        messageProps: C,
                    }),
                    icon: null,
                };
            if (u + A === 1 && null != _) {
                let { game: e } = _;
                if (null == f) return { subtitle: null, icon: null };
                let t = m.Ij(f);
                if (null != t) return t;
                switch (f.type) {
                    case g.$pd.PLAYING:
                        if ((0, o.A)(f))
                            return {
                                subtitle: E.intl.string(E.t.tO8wOx),
                                icon: (0, i.jsx)(p.A.Header.Icon, { src: p.A.Header.Icon.Src.XBOX }),
                            };
                        return {
                            subtitle: (0, i.jsx)(h.Ay, {
                                start: I,
                                location: h.Ay.Locations.ACTIVITY_FEED_NEW,
                                messageProps: C,
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
                            subtitle: E.intl.string(E.t.HyGHj7),
                            icon:
                                null != e && null != e.getIconURL(64)
                                    ? (0, i.jsx)(p.A.Header.Icon, { src: e.getIconURL(64) })
                                    : null,
                        };
                    case g.$pd.LISTENING:
                        let r;
                        return (
                            (r = (0, s.A)(f)
                                ? (0, i.jsx)(p.A.Header.Icon, { src: p.A.Header.Icon.Src.SPOTIFY })
                                : null != e.getIconURL(64)
                                  ? (0, i.jsx)(p.A.Header.Icon, { src: e.getIconURL(64) })
                                  : (0, i.jsx)(p.A.Header.Icon, { src: n(960648) })),
                            { subtitle: E.intl.formatToPlainString(E.t.NF5xop, { name: f.name }), icon: r }
                        );
                    case g.$pd.WATCHING:
                        return {
                            subtitle: E.intl.formatToPlainString(E.t.pW3Ip3, { name: f.name }),
                            icon:
                                null != e && null != e.getIconURL(64)
                                    ? (0, i.jsx)(p.A.Header.Icon, { src: e.getIconURL(64) })
                                    : null,
                        };
                    default:
                        return { subtitle: E.intl.string(E.t.grGyaf), icon: null };
                }
            }
            if (0 === c.length) {
                if (d.length > 0) return { subtitle: E.intl.string(E.t.grGyaf), icon: null };
                let e = c[0];
                if (null != e) {
                    let { activity: t } = e;
                    if (null != t) {
                        let e = m.Ij(t);
                        if (null != e) return e;
                    }
                    if (null != t && t.type === g.$pd.LISTENING)
                        return {
                            subtitle: E.intl.string(E.t.rmnkz4),
                            icon: (0, i.jsx)(p.A.Header.Icon, { src: p.A.Header.Icon.Src.SPOTIFY }),
                        };
                }
            } else if (1 === c.length) {
                let e = c.find((e) => null != e.activity);
                if (null == e) return { subtitle: null, icon: null };
                let { activity: t, game: n, startedPlayingTime: r } = e;
                return (
                    a()(null != t, "Activity was null somehow"),
                    {
                        subtitle: (0, i.jsx)(h.Ay, {
                            start: r,
                            location: h.Ay.Locations.ACTIVITY_FEED_NEW,
                            messageProps: C,
                        }),
                        icon:
                            null != n && null != n.getIconURL(64)
                                ? (0, i.jsx)(p.A.Header.Icon, { src: n.getIconURL(64) })
                                : null,
                    }
                );
            }
            return {
                subtitle: E.intl.string(E.t.sau5tt),
                icon: (0, i.jsx)(p.A.Header.Icon, { src: p.A.Header.Icon.Src.MULTIPLE }),
            };
        })(t),
        v = (0, A.A)({
            applicationId: t.currentActivities[0]?.activity?.application_id,
            location: "FriendsActivityFeed",
            source: u.Ob.FriendsActivityFeed,
        }),
        b = (0, d.A)({ userId: N.user.id, guildId: C?.id }),
        y = (0, c.a)({ displayNameStyles: b });
    return (0, i.jsx)(p.A.Header, {
        priorityUser: N,
        guildId: C?.id,
        title: T,
        subtitle: S,
        icon: x,
        onSubtitleClick: v,
        onIconClick: v,
        onContextMenu: (e) => r(e, N.user),
        displayNameFont: 1 === I.length ? y : void 0,
    });
}
