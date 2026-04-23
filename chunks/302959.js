n.d(t, { A: () => E, M: () => f });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(833349),
    a = n(153331),
    r = n(592182),
    o = n(587895),
    d = n(172710),
    c = n(616356),
    u = n(734057),
    h = n(71393),
    A = n(977997),
    _ = n(821589),
    m = n(652215),
    g = n(454960);
function p(e) {
    let { type: t, source: n, activity: l, applicationStream: s, user: a, guildId: o, channelId: d, onAction: c } = e;
    return (0, i.jsx)(r.A, {
        className: (0, _.t)(g, "actions", t),
        type: t,
        source: n,
        activity: l,
        applicationStream: s,
        user: a,
        guildId: o,
        buttonVariant: "primary",
        channelId: d,
        onAction: c,
    });
}
let f = a.A.Types,
    E = function (e) {
        let {
                activity: t,
                user: n,
                useStoreStream: r = !0,
                showActions: _ = !0,
                hideHeader: g = !1,
                showChannelDetails: f = !1,
                ...E
            } = e,
            x = (0, l.bG)([A.A, u.A], () => u.A.getChannel(A.A.getVoiceStateForUser(n.id)?.channelId)),
            I = (0, l.bG)([c.A], () => (r ? c.A.getAnyStreamForUser(n.id) : null)),
            C = (0, l.bG)([h.A, A.A, u.A], () =>
                (0, s.A)(t, m.jUm.EMBEDDED)
                    ? h.A.getGuild(
                          u.A.getChannel(A.A.getVoiceStateForSession(n.id, t?.session_id)?.channelId)?.getGuildId(),
                      )
                    : null,
            ),
            b = (0, l.bG)([h.A], () => (null != I ? h.A.getGuild(I.guildId) : null)),
            N = (0, l.bG)([o.A], () => {
                if (null != t)
                    if (null != t.application_id) return o.A.getApplication(t.application_id);
                    else return o.A.getApplicationByName(t.name);
                return null;
            });
        return t?.type === m.$pd.HANG_STATUS
            ? null
            : (0, i.jsx)(a.A, {
                  ...E,
                  activity: t,
                  user: n,
                  application: N,
                  hideHeader: g,
                  activityGuild: C ?? b,
                  showChannelDetails: f,
                  channel: f ? x : void 0,
                  renderActions: _ ? () => (0, i.jsx)(p, { ...E, applicationStream: I, activity: t, user: n }) : null,
                  onOpenSpotifyTrack: d.Mp,
                  onOpenSpotifyArtist: d.mN,
                  onOpenSpotifyAlbum: d.QX,
              });
    };
