n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    o = n(776568),
    l = n(218035),
    s = n(775666),
    c = n(858822),
    d = n(423589),
    u = n(131704),
    p = n(430824);
function m(e) {
    let { channel: t, closePopout: n, onSelect: m, navId: f, label: h, location: g, includeGuildMute: _ } = e,
        b = (0, l.c)(t),
        v = (0, s.EQ)(t),
        y = (0, i.e7)([p.Z], () => p.Z.getGuild(t.guild_id)),
        x = (0, c.Z)(y),
        O = (0, d.Mn)('ChannelNotificationSettingsPopoutMenu') && u.$N.has(t.type);
    return (0, r.jsxs)(a.v2r, {
        navId: f,
        onClose: n,
        'aria-label': h,
        onSelect: m,
        children: [(0, r.jsx)(a.kSQ, { children: (0, o.ZP)(t, g) }), _ ? (0, r.jsx)(a.kSQ, { children: x }) : null, O ? v : (0, r.jsx)(a.kSQ, { children: b })]
    });
}
