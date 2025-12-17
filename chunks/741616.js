n.d(t, { Z: () => h }), n(290780);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(215569),
    o = n(481060),
    s = n(592125),
    c = n(358652),
    u = n(19780),
    d = n(919436),
    f = n(388032);
function h() {
    (0, l.e7)([s.Z], () => s.Z.getPrivateChannelsVersion());
    let e = s.Z.getMutablePrivateChannels(),
        t = (0, l.Wu)([c.Z], () => c.Z.getUnreadPrivateChannelIds()),
        { selectedVoiceGuildId: n, selectedVoiceChannelId: h } = (0, l.cj)([u.Z], () => ({
            selectedVoiceGuildId: u.Z.getGuildId(),
            selectedVoiceChannelId: u.Z.getChannelId(),
        })),
        p = t.map((t) => {
            let n = e[t];
            return null == n || n.id === h ? null : (0, r.jsx)(d.Z, { channel: n }, n.id);
        }),
        g = null == n && null != h ? e[h] : null;
    return (
        null != g && p.unshift((0, r.jsx)(d.Z, { channel: g }, g.id)),
        (0, r.jsx)(o.Kqy, {
            id: "guild-list-unread-dms",
            role: "group",
            "aria-label": f.intl.string(f.t.YUU0RF),
            gap: "xs",
            hidden: p.length < 1,
            children: (0, r.jsx)(a.W, {
                component: i.Fragment,
                children: p,
            }),
        })
    );
}
