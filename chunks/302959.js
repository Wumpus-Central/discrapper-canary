i.d(t, { A: () => C, M: () => v });
var n = i(627968),
    a = i(64700),
    l = i(311907),
    r = i(833349),
    s = i(153331),
    o = i(592182),
    d = i(587895),
    c = i(806246),
    u = i(890330),
    m = i(172710),
    _ = i(616356),
    A = i(734057),
    g = i(71393),
    h = i(977997),
    f = i(954571),
    p = i(821589),
    S = i(652215),
    I = i(654471);
function x(e) {
    let { type: t, source: i, activity: a, applicationStream: l, user: r, guildId: s, channelId: d, onAction: c } = e;
    return (0, n.jsx)(o.A, {
        className: (0, p.t)(I, "actions", t),
        type: t,
        source: i,
        activity: a,
        applicationStream: l,
        user: r,
        guildId: s,
        buttonVariant: "primary",
        channelId: d,
        onAction: c,
    });
}
let v = s.A.Types,
    C = function (e) {
        let {
                activity: t,
                user: i,
                useStoreStream: o = !0,
                showActions: p = !0,
                hideHeader: I = !1,
                showChannelDetails: v = !1,
                ...C
            } = e,
            E = (0, l.bG)([h.A, A.A], () => A.A.getChannel(h.A.getVoiceStateForUser(i.id)?.channelId)),
            y = (0, u.v)("UserActivityContainer", E),
            T = (0, l.bG)([_.A], () => (o ? _.A.getAnyStreamForUser(i.id) : null)),
            N = t?.type === S.$pd.HANG_STATUS && y ? E : null,
            b = (0, l.bG)([g.A, h.A, A.A], () =>
                (0, r.A)(t, S.jUm.EMBEDDED)
                    ? g.A.getGuild(
                          A.A.getChannel(h.A.getVoiceStateForSession(i.id, t?.session_id)?.channelId)?.getGuildId(),
                      )
                    : null != N
                      ? g.A.getGuild(N.getGuildId())
                      : null,
            ),
            j = (0, l.bG)([g.A], () => (null != T ? g.A.getGuild(T.guildId) : null)),
            L = (0, l.bG)([d.A], () => {
                if (null != t)
                    if (null != t.application_id) return d.A.getApplication(t.application_id);
                    else return d.A.getApplicationByName(t.name);
                return null;
            });
        return (a.useEffect(() => {
            t?.type === S.$pd.HANG_STATUS &&
                y &&
                f.default.track(S.HAw.VIEW_HANG_STATUS, {
                    source: "UserActivity",
                    other_user_id: i.id,
                    ...(0, c.A)(N?.id),
                });
        }, [t?.type, y, N, i.id]),
        t?.type !== S.$pd.HANG_STATUS || y)
            ? (0, n.jsx)(s.A, {
                  ...C,
                  activity: t,
                  user: i,
                  application: L,
                  hideHeader: I,
                  activityGuild: b ?? j,
                  showChannelDetails: v,
                  channel: v ? E : void 0,
                  enableUserHoverActivities: C.enableUserHoverActivities,
                  renderActions: p ? () => (0, n.jsx)(x, { ...C, applicationStream: T, activity: t, user: i }) : null,
                  onOpenSpotifyTrack: m.Mp,
                  onOpenSpotifyArtist: m.mN,
                  onOpenSpotifyAlbum: m.QX,
              })
            : null;
    };
