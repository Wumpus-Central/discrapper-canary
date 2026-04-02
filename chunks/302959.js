i.d(e, { A: () => y, M: () => v });
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
    A = i(734057),
    h = i(71393),
    g = i(977997),
    f = i(954571),
    S = i(821589),
    T = i(652215),
    E = i(650417);
function C(t) {
    let { type: e, source: i, activity: l, applicationStream: r, user: s, guildId: a, channelId: d, onAction: u } = t;
    return (0, n.jsx)(o.A, {
        className: (0, S.t)(E, "actions", e),
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
    y = function (t) {
        let {
                activity: e,
                user: i,
                useStoreStream: o = !0,
                showActions: S = !0,
                hideHeader: E = !1,
                showChannelDetails: v = !1,
                ...y
            } = t,
            I = (0, r.bG)([g.A, A.A], () => A.A.getChannel(g.A.getVoiceStateForUser(i.id)?.channelId)),
            _ = (0, c.v)("UserActivityContainer", I),
            N = (0, r.bG)([m.A], () => (o ? m.A.getAnyStreamForUser(i.id) : null)),
            x = e?.type === T.$pd.HANG_STATUS && _ ? I : null,
            j = (0, r.bG)([h.A, g.A, A.A], () =>
                (0, s.A)(e, T.jUm.EMBEDDED)
                    ? h.A.getGuild(
                          A.A.getChannel(g.A.getVoiceStateForSession(i.id, e?.session_id)?.channelId)?.getGuildId(),
                      )
                    : null != x
                      ? h.A.getGuild(x.getGuildId())
                      : null,
            ),
            P = (0, r.bG)([h.A], () => (null != N ? h.A.getGuild(N.guildId) : null)),
            L = (0, r.bG)([d.A], () => {
                if (null != e)
                    if (null != e.application_id) return d.A.getApplication(e.application_id);
                    else return d.A.getApplicationByName(e.name);
                return null;
            });
        return (l.useEffect(() => {
            e?.type === T.$pd.HANG_STATUS &&
                _ &&
                f.default.track(T.HAw.VIEW_HANG_STATUS, {
                    source: "UserActivity",
                    other_user_id: i.id,
                    ...(0, u.A)(x?.id),
                });
        }, [e?.type, _, x, i.id]),
        e?.type !== T.$pd.HANG_STATUS || _)
            ? (0, n.jsx)(a.A, {
                  ...y,
                  activity: e,
                  user: i,
                  application: L,
                  hideHeader: E,
                  activityGuild: j ?? P,
                  showChannelDetails: v,
                  channel: v ? I : void 0,
                  enableUserHoverActivities: y.enableUserHoverActivities,
                  renderActions: S ? () => (0, n.jsx)(C, { ...y, applicationStream: N, activity: e, user: i }) : null,
                  onOpenSpotifyTrack: p.Mp,
                  onOpenSpotifyArtist: p.mN,
                  onOpenSpotifyAlbum: p.QX,
              })
            : null;
    };
