n.d(t, { A: () => x, M: () => v });
var i = n(627968);
n(64700);
var a = n(17928),
    l = n(833349),
    r = n(50820),
    s = n(35903),
    o = n(587895),
    d = n(172710),
    c = n(616356),
    u = n(734057),
    p = n(71393),
    m = n(977997),
    h = n(821589),
    g = n(652215),
    A = n(454960);
function f(e) {
    let { type: t, source: n, activity: a, applicationStream: l, user: r, guildId: o, channelId: d, onAction: c } = e;
    return (0, i.jsx)(s.A, {
        className: (0, h.t)(A, "actions", t),
        type: t,
        source: n,
        activity: a,
        applicationStream: l,
        user: r,
        guildId: o,
        buttonVariant: "primary",
        channelId: d,
        onAction: c,
    });
}
let v = r.A.Types,
    x = function (e) {
        let {
                activity: t,
                user: n,
                useStoreStream: s = !0,
                showActions: h = !0,
                hideHeader: A = !1,
                showChannelDetails: v = !1,
                ...x
            } = e,
            I = (0, a.bG)([m.A, u.A], () => u.A.getChannel(m.A.getVoiceStateForUser(n.id)?.channelId)),
            E = (0, a.bG)([c.A], () => (s ? c.A.getAnyStreamForUser(n.id) : null)),
            N = (0, a.bG)([p.A, m.A, u.A], () =>
                (0, l.A)(t, g.jUm.EMBEDDED)
                    ? p.A.getGuild(
                          u.A.getChannel(m.A.getVoiceStateForSession(n.id, t?.session_id)?.channelId)?.getGuildId(),
                      )
                    : null,
            ),
            S = (0, a.bG)([p.A], () => (null != E ? p.A.getGuild(E.guildId) : null)),
            y = (0, a.bG)([o.A], () => {
                if (null != t)
                    if (null != t.application_id) return o.A.getApplication(t.application_id);
                    else return o.A.getApplicationByName(t.name);
                return null;
            });
        return t?.type === g.$pd.HANG_STATUS
            ? null
            : (0, i.jsx)(r.A, {
                  ...x,
                  activity: t,
                  user: n,
                  application: y,
                  hideHeader: A,
                  activityGuild: N ?? S,
                  showChannelDetails: v,
                  channel: v ? I : void 0,
                  renderActions: h ? () => (0, i.jsx)(f, { ...x, applicationStream: E, activity: t, user: n }) : null,
                  onOpenSpotifyTrack: d.Mp,
                  onOpenSpotifyArtist: d.mN,
                  onOpenSpotifyAlbum: d.QX,
              });
    };
