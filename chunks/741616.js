n.d(t, { Z: () => p }), n(290780);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(215569),
    s = n(481060),
    a = n(592125),
    c = n(358652),
    u = n(19780),
    d = n(919436),
    h = n(388032);
function p() {
    (0, l.e7)([a.Z], () => a.Z.getPrivateChannelsVersion());
    let e = a.Z.getMutablePrivateChannels(),
        t = (0, l.Wu)([c.Z], () => c.Z.getUnreadPrivateChannelIds()),
        { selectedVoiceGuildId: n, selectedVoiceChannelId: p } = (0, l.cj)([u.Z], () => ({
            selectedVoiceGuildId: u.Z.getGuildId(),
            selectedVoiceChannelId: u.Z.getChannelId()
        })),
        f = t.map((t) => {
            let n = e[t];
            return null == n || n.id === p ? null : (0, r.jsx)(d.Z, { channel: n }, n.id);
        }),
        g = null == n && null != p ? e[p] : null;
    return (
        null != g && f.unshift((0, r.jsx)(d.Z, { channel: g }, g.id)),
        (0, r.jsx)(s.Kqy, {
            id: 'guild-list-unread-dms',
            role: 'group',
            'aria-label': h.NW.string(h.t.YUU0RE),
            gap: 'xs',
            hidden: f.length < 1,
            children: (0, r.jsx)(o.W, {
                component: i.Fragment,
                children: f
            })
        })
    );
}
