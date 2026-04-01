i.d(t, { A: () => C, M: () => T });
var n = i(627968),
    a = i(64700),
    l = i(311907),
    s = i(833349),
    r = i(153331),
    o = i(592182),
    c = i(587895),
    d = i(806246),
    u = i(890330),
    m = i(172710),
    _ = i(616356),
    p = i(734057),
    h = i(71393),
    A = i(977997),
    g = i(954571),
    f = i(821589),
    v = i(652215),
    S = i(78016);
function I(e) {
    let { type: t, source: i, activity: a, applicationStream: l, user: s, guildId: r, channelId: c, onAction: d } = e;
    return (0, n.jsx)(o.A, {
        className: (0, f.t)(S, "actions", t),
        type: t,
        source: i,
        activity: a,
        applicationStream: l,
        user: s,
        guildId: r,
        buttonVariant: "primary",
        channelId: c,
        onAction: d,
    });
}
let T = r.A.Types,
    C = function (e) {
        let {
                activity: t,
                user: i,
                useStoreStream: o = !0,
                showActions: f = !0,
                hideHeader: S = !1,
                showChannelDetails: T = !1,
                ...C
            } = e,
            E = (0, l.bG)([A.A, p.A], () => p.A.getChannel(A.A.getVoiceStateForUser(i.id)?.channelId)),
            y = (0, u.v)("UserActivityContainer", E),
            x = (0, l.bG)([_.A], () => (o ? _.A.getAnyStreamForUser(i.id) : null)),
            N = t?.type === v.$pd.HANG_STATUS && y ? E : null,
            b = (0, l.bG)([h.A, A.A, p.A], () =>
                (0, s.A)(t, v.jUm.EMBEDDED)
                    ? h.A.getGuild(
                          p.A.getChannel(A.A.getVoiceStateForSession(i.id, t?.session_id)?.channelId)?.getGuildId(),
                      )
                    : null != N
                      ? h.A.getGuild(N.getGuildId())
                      : null,
            ),
            L = (0, l.bG)([h.A], () => (null != x ? h.A.getGuild(x.guildId) : null)),
            P = (0, l.bG)([c.A], () => {
                if (null != t)
                    if (null != t.application_id) return c.A.getApplication(t.application_id);
                    else return c.A.getApplicationByName(t.name);
                return null;
            });
        return (a.useEffect(() => {
            t?.type === v.$pd.HANG_STATUS &&
                y &&
                g.default.track(v.HAw.VIEW_HANG_STATUS, {
                    source: "UserActivity",
                    other_user_id: i.id,
                    ...(0, d.A)(N?.id),
                });
        }, [t?.type, y, N, i.id]),
        t?.type !== v.$pd.HANG_STATUS || y)
            ? (0, n.jsx)(r.A, {
                  ...C,
                  activity: t,
                  user: i,
                  application: P,
                  hideHeader: S,
                  activityGuild: b ?? L,
                  showChannelDetails: T,
                  channel: T ? E : void 0,
                  enableUserHoverActivities: C.enableUserHoverActivities,
                  renderActions: f ? () => (0, n.jsx)(I, { ...C, applicationStream: x, activity: t, user: i }) : null,
                  onOpenSpotifyTrack: m.Mp,
                  onOpenSpotifyArtist: m.mN,
                  onOpenSpotifyAlbum: m.QX,
              })
            : null;
    };
