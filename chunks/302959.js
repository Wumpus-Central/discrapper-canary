n.d(t, { A: () => N, M: () => C });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(833349),
    r = n(153331),
    o = n(592182),
    d = n(587895),
    c = n(806246),
    u = n(890330),
    h = n(172710),
    A = n(616356),
    _ = n(734057),
    m = n(71393),
    g = n(977997),
    p = n(954571),
    f = n(821589),
    x = n(652215),
    E = n(78016);
function I(e) {
    let { type: t, source: n, activity: l, applicationStream: s, user: a, guildId: r, channelId: d, onAction: c } = e;
    return (0, i.jsx)(o.A, {
        className: (0, f.t)(E, "actions", t),
        type: t,
        source: n,
        activity: l,
        applicationStream: s,
        user: a,
        guildId: r,
        buttonVariant: "primary",
        channelId: d,
        onAction: c,
    });
}
let C = r.A.Types,
    N = function (e) {
        let {
                activity: t,
                user: n,
                useStoreStream: o = !0,
                showActions: f = !0,
                hideHeader: E = !1,
                showChannelDetails: C = !1,
                ...N
            } = e,
            T = (0, s.bG)([g.A, _.A], () => _.A.getChannel(g.A.getVoiceStateForUser(n.id)?.channelId)),
            S = (0, u.v)("UserActivityContainer", T),
            b = (0, s.bG)([A.A], () => (o ? A.A.getAnyStreamForUser(n.id) : null)),
            v = t?.type === x.$pd.HANG_STATUS && S ? T : null,
            y = (0, s.bG)([m.A, g.A, _.A], () =>
                (0, a.A)(t, x.jUm.EMBEDDED)
                    ? m.A.getGuild(
                          _.A.getChannel(g.A.getVoiceStateForSession(n.id, t?.session_id)?.channelId)?.getGuildId(),
                      )
                    : null != v
                      ? m.A.getGuild(v.getGuildId())
                      : null,
            ),
            j = (0, s.bG)([m.A], () => (null != b ? m.A.getGuild(b.guildId) : null)),
            R = (0, s.bG)([d.A], () => {
                if (null != t)
                    if (null != t.application_id) return d.A.getApplication(t.application_id);
                    else return d.A.getApplicationByName(t.name);
                return null;
            });
        return (l.useEffect(() => {
            t?.type === x.$pd.HANG_STATUS &&
                S &&
                p.default.track(x.HAw.VIEW_HANG_STATUS, {
                    source: "UserActivity",
                    other_user_id: n.id,
                    ...(0, c.A)(v?.id),
                });
        }, [t?.type, S, v, n.id]),
        t?.type !== x.$pd.HANG_STATUS || S)
            ? (0, i.jsx)(r.A, {
                  ...N,
                  activity: t,
                  user: n,
                  application: R,
                  hideHeader: E,
                  activityGuild: y ?? j,
                  showChannelDetails: C,
                  channel: C ? T : void 0,
                  renderActions: f ? () => (0, i.jsx)(I, { ...N, applicationStream: b, activity: t, user: n }) : null,
                  onOpenSpotifyTrack: h.Mp,
                  onOpenSpotifyArtist: h.mN,
                  onOpenSpotifyAlbum: h.QX,
              })
            : null;
    };
