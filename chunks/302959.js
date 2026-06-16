l.d(t, { A: () => g, M: () => j });
var i = l(627968);
l(64700);
var s = l(17928),
    n = l(55730),
    a = l(50820),
    d = l(35903),
    r = l(587895),
    c = l(172710),
    o = l(616356),
    p = l(734057),
    u = l(71393),
    m = l(977997),
    A = l(821589),
    h = l(652215),
    x = l(454960);
function v(e) {
    let { type: t, source: l, activity: s, applicationStream: n, user: a, guildId: r, channelId: c, onAction: o } = e;
    return (0, i.jsx)(d.A, {
        className: (0, A.t)(x, "actions", t),
        type: t,
        source: l,
        activity: s,
        applicationStream: n,
        user: a,
        guildId: r,
        buttonVariant: "primary",
        channelId: c,
        onAction: o,
    });
}
let j = a.A.Types,
    g = function (e) {
        let {
                activity: t,
                user: l,
                useStoreStream: d = !0,
                showActions: A = !0,
                hideHeader: x = !1,
                showChannelDetails: j = !1,
                ...g
            } = e,
            y = (0, s.bG)([m.A, p.A], () => p.A.getChannel(m.A.getVoiceStateForUser(l.id)?.channelId)),
            I = (0, s.bG)([o.A], () => (d ? o.A.getAnyStreamForUser(l.id) : null)),
            N = (0, s.bG)([u.A, m.A, p.A], () =>
                (0, n.A)(t, h.jUm.EMBEDDED)
                    ? u.A.getGuild(
                          p.A.getChannel(m.A.getVoiceStateForSession(l.id, t?.session_id)?.channelId)?.getGuildId(),
                      )
                    : null,
            ),
            f = (0, s.bG)([u.A], () => (null != I ? u.A.getGuild(I.guildId) : null)),
            T = (0, s.bG)([r.A], () => {
                if (null != t)
                    if (null != t.application_id) return r.A.getApplication(t.application_id);
                    else return r.A.getApplicationByName(t.name);
                return null;
            });
        return t?.type === h.$pd.HANG_STATUS
            ? null
            : (0, i.jsx)(a.A, {
                  ...g,
                  activity: t,
                  user: l,
                  application: T,
                  hideHeader: x,
                  activityGuild: N ?? f,
                  showChannelDetails: j,
                  channel: j ? y : void 0,
                  renderActions: A ? () => (0, i.jsx)(v, { ...g, applicationStream: I, activity: t, user: l }) : null,
                  onOpenSpotifyTrack: c.Mp,
                  onOpenSpotifyArtist: c.mN,
                  onOpenSpotifyAlbum: c.QX,
              });
    };
