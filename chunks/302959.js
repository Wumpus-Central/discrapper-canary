var l = n(477900);
n(582128);
var i = n(350835),
    a = n(855986),
    r = n(55730),
    s = n(663249),
    o = n(961272),
    u = n(587895),
    c = n(172710),
    d = n(616356),
    m = n(734057),
    A = n(71393),
    p = n(977997),
    h = n(821589),
    f = n(652215),
    g = n(349789);
function x(e) {
    let { type: t, source: n, activity: i, applicationStream: a, user: r, guildId: s, channelId: u, onAction: c } = e;
    return (0, l.jsx)(o.A, {
        className: (0, h.t)(g, "actions", t),
        type: t,
        source: n,
        activity: i,
        applicationStream: a,
        user: r,
        guildId: s,
        buttonVariant: "primary",
        channelId: u,
        onAction: c,
    });
}
let I = s.A.Types;
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    activity: t,
                    user: n,
                    useStoreStream: o = !0,
                    showActions: h = !0,
                    hideHeader: g = !1,
                    showChannelDetails: I = !1,
                    ...v
                } = e,
                T = (0, a.bG)([p.A, m.A], () => m.A.getChannel(p.A.getVoiceStateForUser(n.id)?.channelId)),
                S = (0, a.bG)([d.A], () => (o ? d.A.getAnyStreamForUser(n.id) : null)),
                y = (0, a.bG)([A.A, p.A, m.A], () =>
                    (0, r.A)(t, f.jUm.EMBEDDED)
                        ? A.A.getGuild(
                              m.A.getChannel(p.A.getVoiceStateForSession(n.id, t?.session_id)?.channelId)?.getGuildId(),
                          )
                        : null,
                ),
                N = (0, a.bG)([A.A], () => (null != S ? A.A.getGuild(S.guildId) : null)),
                E = (0, a.bG)([u.A], () => {
                    if (null != t)
                        if (null != t.application_id) return u.A.getApplication(t.application_id);
                        else return u.A.getApplicationByName(t.name);
                    return null;
                });
            return t?.type === i.$.HANG_STATUS
                ? null
                : (0, l.jsx)(s.A, {
                      ...v,
                      activity: t,
                      user: n,
                      application: E,
                      hideHeader: g,
                      activityGuild: y ?? N,
                      showChannelDetails: I,
                      channel: I ? T : void 0,
                      renderActions: h
                          ? () => (0, l.jsx)(x, { ...v, applicationStream: S, activity: t, user: n })
                          : null,
                      onOpenSpotifyTrack: c.Mp,
                      onOpenSpotifyArtist: c.mN,
                      onOpenSpotifyAlbum: c.QX,
                  });
        },
        M: I,
    },
);
