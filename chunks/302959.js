i.d(t, { A: () => _, M: () => v });
var n = i(627968),
    l = i(64700),
    r = i(311907),
    s = i(833349),
    a = i(153331),
    o = i(592182),
    d = i(587895),
    u = i(806246),
    c = i(890330),
    A = i(172710),
    h = i(616356),
    m = i(734057),
    p = i(71393),
    g = i(977997),
    f = i(954571),
    T = i(821589),
    S = i(652215),
    E = i(78016);
function C(e) {
    let { type: t, source: i, activity: l, applicationStream: r, user: s, guildId: a, channelId: d, onAction: u } = e;
    return (0, n.jsx)(o.A, {
        className: (0, T.t)(E, "actions", t),
        type: t,
        source: i,
        activity: l,
        applicationStream: r,
        user: s,
        guildId: a,
        buttonVariant: "primary",
        channelId: d,
        onAction: u,
    });
}
let v = a.A.Types,
    _ = function (e) {
        let {
                activity: t,
                user: i,
                useStoreStream: o = !0,
                showActions: T = !0,
                hideHeader: E = !1,
                showChannelDetails: v = !1,
                ..._
            } = e,
            y = (0, r.bG)([g.A, m.A], () => m.A.getChannel(g.A.getVoiceStateForUser(i.id)?.channelId)),
            x = (0, c.v)("UserActivityContainer", y),
            I = (0, r.bG)([h.A], () => (o ? h.A.getAnyStreamForUser(i.id) : null)),
            N = t?.type === S.$pd.HANG_STATUS && x ? y : null,
            j = (0, r.bG)([p.A, g.A, m.A], () =>
                (0, s.A)(t, S.jUm.EMBEDDED)
                    ? p.A.getGuild(
                          m.A.getChannel(g.A.getVoiceStateForSession(i.id, t?.session_id)?.channelId)?.getGuildId(),
                      )
                    : null != N
                      ? p.A.getGuild(N.getGuildId())
                      : null,
            ),
            D = (0, r.bG)([p.A], () => (null != I ? p.A.getGuild(I.guildId) : null)),
            O = (0, r.bG)([d.A], () => {
                if (null != t)
                    if (null != t.application_id) return d.A.getApplication(t.application_id);
                    else return d.A.getApplicationByName(t.name);
                return null;
            });
        return (l.useEffect(() => {
            t?.type === S.$pd.HANG_STATUS &&
                x &&
                f.default.track(S.HAw.VIEW_HANG_STATUS, {
                    source: "UserActivity",
                    other_user_id: i.id,
                    ...(0, u.A)(N?.id),
                });
        }, [t?.type, x, N, i.id]),
        t?.type !== S.$pd.HANG_STATUS || x)
            ? (0, n.jsx)(a.A, {
                  ..._,
                  activity: t,
                  user: i,
                  application: O,
                  hideHeader: E,
                  activityGuild: j ?? D,
                  showChannelDetails: v,
                  channel: v ? y : void 0,
                  enableUserHoverActivities: _.enableUserHoverActivities,
                  renderActions: T ? () => (0, n.jsx)(C, { ..._, applicationStream: I, activity: t, user: i }) : null,
                  onOpenSpotifyTrack: A.Mp,
                  onOpenSpotifyArtist: A.mN,
                  onOpenSpotifyAlbum: A.QX,
              })
            : null;
    };
