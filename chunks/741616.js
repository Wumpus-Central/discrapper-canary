n.d(t, { Z: () => f }), n(290780);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    o = n(215569),
    a = n(481060),
    s = n(592125),
    c = n(358652),
    u = n(19780),
    d = n(919436),
    p = n(388032);
function f() {
    (0, l.e7)([s.Z], () => s.Z.getPrivateChannelsVersion());
    let e = s.Z.getMutablePrivateChannels(),
        t = (0, l.Wu)([c.Z], () => c.Z.getUnreadPrivateChannelIds()),
        { selectedVoiceGuildId: n, selectedVoiceChannelId: f } = (0, l.cj)([u.Z], () => ({
            selectedVoiceGuildId: u.Z.getGuildId(),
            selectedVoiceChannelId: u.Z.getChannelId(),
        })),
        h = t.map((t) => {
            let n = e[t];
            return null == n || n.id === f ? null : (0, r.jsx)(d.Z, { channel: n }, n.id);
        }),
        g = null == n && null != f ? e[f] : null;
    return (
        null != g && h.unshift((0, r.jsx)(d.Z, { channel: g }, g.id)),
        (0, r.jsx)(a.Kqy, {
            id: "guild-list-unread-dms",
            role: "group",
            "aria-label": p.intl.string(p.t.YUU0RF),
            gap: "xs",
            hidden: h.length < 1,
            children: (0, r.jsx)(o.W, {
                component: i.Fragment,
                children: h,
            }),
        })
    );
}
