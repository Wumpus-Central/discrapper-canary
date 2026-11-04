var l = i(477900);
i(582128);
var a = i(350835),
    n = i(855986),
    s = i(55730),
    d = i(663249),
    r = i(961272),
    c = i(587895),
    o = i(172710),
    m = i(616356),
    p = i(734057),
    u = i(71393),
    A = i(977997),
    h = i(821589),
    v = i(652215),
    x = i(349789);
function g(e) {
    let { type: t, source: i, activity: a, applicationStream: n, user: s, guildId: d, channelId: c, onAction: o } = e;
    return (0, l.jsx)(r.A, {
        className: (0, h.t)(x, "actions", t),
        type: t,
        source: i,
        activity: a,
        applicationStream: n,
        user: s,
        guildId: d,
        buttonVariant: "primary",
        channelId: c,
        onAction: o,
    });
}
let N = d.A.Types;
i.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    activity: t,
                    user: i,
                    useStoreStream: r = !0,
                    showActions: h = !0,
                    hideHeader: x = !1,
                    showChannelDetails: N = !1,
                    ...j
                } = e,
                y = (0, n.bG)([A.A, p.A], () => p.A.getChannel(A.A.getVoiceStateForUser(i.id)?.channelId)),
                I = (0, n.bG)([m.A], () => (r ? m.A.getAnyStreamForUser(i.id) : null)),
                f = (0, n.bG)([u.A, A.A, p.A], () =>
                    (0, s.A)(t, v.jUm.EMBEDDED)
                        ? u.A.getGuild(
                              p.A.getChannel(A.A.getVoiceStateForSession(i.id, t?.session_id)?.channelId)?.getGuildId(),
                          )
                        : null,
                ),
                S = (0, n.bG)([u.A], () => (null != I ? u.A.getGuild(I.guildId) : null)),
                b = (0, n.bG)([c.A], () => {
                    if (null != t)
                        if (null != t.application_id) return c.A.getApplication(t.application_id);
                        else return c.A.getApplicationByName(t.name);
                    return null;
                });
            return t?.type === a.$.HANG_STATUS
                ? null
                : (0, l.jsx)(d.A, {
                      ...j,
                      activity: t,
                      user: i,
                      application: b,
                      hideHeader: x,
                      activityGuild: f ?? S,
                      showChannelDetails: N,
                      channel: N ? y : void 0,
                      renderActions: h
                          ? () => (0, l.jsx)(g, { ...j, applicationStream: I, activity: t, user: i })
                          : null,
                      onOpenSpotifyTrack: o.Mp,
                      onOpenSpotifyArtist: o.mN,
                      onOpenSpotifyAlbum: o.QX,
                  });
        },
        M: N,
    },
);
