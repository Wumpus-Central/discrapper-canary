i.d(e, { A: () => I, M: () => v });
var n = i(627968),
    l = i(64700),
    r = i(311907),
    s = i(833349),
    a = i(153331),
    o = i(592182),
    d = i(587895),
    u = i(806246),
    c = i(890330),
    m = i(172710),
    A = i(616356),
    h = i(734057),
    p = i(71393),
    g = i(977997),
    f = i(954571),
    T = i(821589),
    S = i(652215),
    E = i(650417);
function C(t) {
    let { type: e, source: i, activity: l, applicationStream: r, user: s, guildId: a, channelId: d, onAction: u } = t;
    return (0, n.jsx)(o.A, {
        className: (0, T.t)(E, "actions", e),
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
    I = function (t) {
        let {
                activity: e,
                user: i,
                useStoreStream: o = !0,
                showActions: T = !0,
                hideHeader: E = !1,
                showChannelDetails: v = !1,
                ...I
            } = t,
            _ = (0, r.bG)([g.A, h.A], () => h.A.getChannel(g.A.getVoiceStateForUser(i.id)?.channelId)),
            x = (0, c.v)("UserActivityContainer", _),
            N = (0, r.bG)([A.A], () => (o ? A.A.getAnyStreamForUser(i.id) : null)),
            y = e?.type === S.$pd.HANG_STATUS && x ? _ : null,
            j = (0, r.bG)([p.A, g.A, h.A], () =>
                (0, s.A)(e, S.jUm.EMBEDDED)
                    ? p.A.getGuild(
                          h.A.getChannel(g.A.getVoiceStateForSession(i.id, e?.session_id)?.channelId)?.getGuildId(),
                      )
                    : null != y
                      ? p.A.getGuild(y.getGuildId())
                      : null,
            ),
            D = (0, r.bG)([p.A], () => (null != N ? p.A.getGuild(N.guildId) : null)),
            O = (0, r.bG)([d.A], () => {
                if (null != e)
                    if (null != e.application_id) return d.A.getApplication(e.application_id);
                    else return d.A.getApplicationByName(e.name);
                return null;
            });
        return (l.useEffect(() => {
            e?.type === S.$pd.HANG_STATUS &&
                x &&
                f.default.track(S.HAw.VIEW_HANG_STATUS, {
                    source: "UserActivity",
                    other_user_id: i.id,
                    ...(0, u.A)(y?.id),
                });
        }, [e?.type, x, y, i.id]),
        e?.type !== S.$pd.HANG_STATUS || x)
            ? (0, n.jsx)(a.A, {
                  ...I,
                  activity: e,
                  user: i,
                  application: O,
                  hideHeader: E,
                  activityGuild: j ?? D,
                  showChannelDetails: v,
                  channel: v ? _ : void 0,
                  enableUserHoverActivities: I.enableUserHoverActivities,
                  renderActions: T ? () => (0, n.jsx)(C, { ...I, applicationStream: N, activity: e, user: i }) : null,
                  onOpenSpotifyTrack: m.Mp,
                  onOpenSpotifyArtist: m.mN,
                  onOpenSpotifyAlbum: m.QX,
              })
            : null;
    };
