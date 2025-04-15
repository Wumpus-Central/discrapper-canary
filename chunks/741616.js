n.d(t, { Z: () => d }), n(290780);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(215569),
    s = n(592125),
    a = n(358652),
    c = n(19780),
    u = n(919436);
function d() {
    (0, l.e7)([s.Z], () => s.Z.getPrivateChannelsVersion());
    let e = s.Z.getMutablePrivateChannels(),
        t = (0, l.Wu)([a.Z], () => a.Z.getUnreadPrivateChannelIds()),
        { selectedVoiceGuildId: n, selectedVoiceChannelId: d } = (0, l.cj)([c.Z], () => ({
            selectedVoiceGuildId: c.Z.getGuildId(),
            selectedVoiceChannelId: c.Z.getChannelId()
        })),
        h = t.map((t) => {
            let n = e[t];
            return null == n || n.id === d ? null : (0, r.jsx)(u.Z, { channel: n }, n.id);
        }),
        p = null == n && null != d ? e[d] : null;
    return (
        null != p && h.unshift((0, r.jsx)(u.Z, { channel: p }, p.id)),
        (0, r.jsx)(o.W, {
            component: i.Fragment,
            children: h
        })
    );
}
