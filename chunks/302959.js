i.d(t, { A: () => N, M: () => g });
var l = i(477900);
i(582128);
var a = i(17928),
    n = i(55730),
    s = i(50820),
    d = i(35903),
    r = i(587895),
    c = i(172710),
    o = i(616356),
    p = i(734057),
    m = i(71393),
    u = i(977997),
    x = i(821589),
    A = i(652215),
    h = i(349789);
function v(e) {
    let { type: t, source: i, activity: a, applicationStream: n, user: s, guildId: r, channelId: c, onAction: o } = e;
    return (0, l.jsx)(d.A, {
        className: (0, x.t)(h, "actions", t),
        type: t,
        source: i,
        activity: a,
        applicationStream: n,
        user: s,
        guildId: r,
        buttonVariant: "primary",
        channelId: c,
        onAction: o,
    });
}
let g = s.A.Types,
    N = function (e) {
        let {
                activity: t,
                user: i,
                useStoreStream: d = !0,
                showActions: x = !0,
                hideHeader: h = !1,
                showChannelDetails: g = !1,
                ...N
            } = e,
            j = (0, a.bG)([u.A, p.A], () => p.A.getChannel(u.A.getVoiceStateForUser(i.id)?.channelId)),
            y = (0, a.bG)([o.A], () => (d ? o.A.getAnyStreamForUser(i.id) : null)),
            I = (0, a.bG)([m.A, u.A, p.A], () =>
                (0, n.A)(t, A.jUm.EMBEDDED)
                    ? m.A.getGuild(
                          p.A.getChannel(u.A.getVoiceStateForSession(i.id, t?.session_id)?.channelId)?.getGuildId(),
                      )
                    : null,
            ),
            f = (0, a.bG)([m.A], () => (null != y ? m.A.getGuild(y.guildId) : null)),
            S = (0, a.bG)([r.A], () => {
                if (null != t)
                    if (null != t.application_id) return r.A.getApplication(t.application_id);
                    else return r.A.getApplicationByName(t.name);
                return null;
            });
        return t?.type === A.$pd.HANG_STATUS
            ? null
            : (0, l.jsx)(s.A, {
                  ...N,
                  activity: t,
                  user: i,
                  application: S,
                  hideHeader: h,
                  activityGuild: I ?? f,
                  showChannelDetails: g,
                  channel: g ? j : void 0,
                  renderActions: x ? () => (0, l.jsx)(v, { ...N, applicationStream: y, activity: t, user: i }) : null,
                  onOpenSpotifyTrack: c.Mp,
                  onOpenSpotifyArtist: c.mN,
                  onOpenSpotifyAlbum: c.QX,
              });
    };
