i.d(e, { A: () => x, M: () => v });
var n = i(627968),
    l = i(64700),
    r = i(311907),
    s = i(833349),
    a = i(153331),
    o = i(592182),
    d = i(587895),
    u = i(806246),
    c = i(890330),
    p = i(172710),
    m = i(616356),
    h = i(734057),
    A = i(71393),
    g = i(977997),
    T = i(954571),
    f = i(821589),
    S = i(652215),
    E = i(78016);
function C(t) {
    let { type: e, source: i, activity: l, applicationStream: r, user: s, guildId: a, channelId: d, onAction: u } = t;
    return (0, n.jsx)(o.A, {
        className: (0, f.t)(E, "actions", e),
        type: e,
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
    x = function (t) {
        let {
                activity: e,
                user: i,
                useStoreStream: o = !0,
                showActions: f = !0,
                hideHeader: E = !1,
                showChannelDetails: v = !1,
                ...x
            } = t,
            y = (0, r.bG)([g.A, h.A], () => h.A.getChannel(g.A.getVoiceStateForUser(i.id)?.channelId)),
            _ = (0, c.v)("UserActivityContainer", y),
            N = (0, r.bG)([m.A], () => (o ? m.A.getAnyStreamForUser(i.id) : null)),
            I = e?.type === S.$pd.HANG_STATUS && _ ? y : null,
            j = (0, r.bG)([A.A, g.A, h.A], () =>
                (0, s.A)(e, S.jUm.EMBEDDED)
                    ? A.A.getGuild(
                          h.A.getChannel(g.A.getVoiceStateForSession(i.id, e?.session_id)?.channelId)?.getGuildId(),
                      )
                    : null != I
                      ? A.A.getGuild(I.getGuildId())
                      : null,
            ),
            D = (0, r.bG)([A.A], () => (null != N ? A.A.getGuild(N.guildId) : null)),
            O = (0, r.bG)([d.A], () => {
                if (null != e)
                    if (null != e.application_id) return d.A.getApplication(e.application_id);
                    else return d.A.getApplicationByName(e.name);
                return null;
            });
        return (l.useEffect(() => {
            e?.type === S.$pd.HANG_STATUS &&
                _ &&
                T.default.track(S.HAw.VIEW_HANG_STATUS, {
                    source: "UserActivity",
                    other_user_id: i.id,
                    ...(0, u.A)(I?.id),
                });
        }, [e?.type, _, I, i.id]),
        e?.type !== S.$pd.HANG_STATUS || _)
            ? (0, n.jsx)(a.A, {
                  ...x,
                  activity: e,
                  user: i,
                  application: O,
                  hideHeader: E,
                  activityGuild: j ?? D,
                  showChannelDetails: v,
                  channel: v ? y : void 0,
                  enableUserHoverActivities: x.enableUserHoverActivities,
                  renderActions: f ? () => (0, n.jsx)(C, { ...x, applicationStream: N, activity: e, user: i }) : null,
                  onOpenSpotifyTrack: p.Mp,
                  onOpenSpotifyArtist: p.mN,
                  onOpenSpotifyAlbum: p.QX,
              })
            : null;
    };
