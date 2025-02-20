n.d(t, { Z: () => d }), n(733860);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(215569),
    a = n(592125),
    s = n(358652),
    c = n(19780),
    u = n(919436);
function d() {
    (0, l.e7)([a.Z], () => a.Z.getPrivateChannelsVersion());
    let e = a.Z.getMutablePrivateChannels(),
        t = (0, l.Wu)([s.Z], () => s.Z.getUnreadPrivateChannelIds()),
        { selectedVoiceGuildId: n, selectedVoiceChannelId: d } = (0, l.cj)([c.Z], () => ({
            selectedVoiceGuildId: c.Z.getGuildId(),
            selectedVoiceChannelId: c.Z.getChannelId()
        })),
        p = t.map((t) => {
            let n = e[t];
            return null == n || n.id === d ? null : (0, r.jsx)(u.Z, { channel: n }, n.id);
        }),
        h = null == n && null != d ? e[d] : null;
    return (
        null != h && p.unshift((0, r.jsx)(u.Z, { channel: h }, h.id)),
        (0, r.jsx)(o.W, {
            component: i.Fragment,
            children: p
        })
    );
}
