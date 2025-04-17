n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    l = n(776568),
    o = n(218035),
    s = n(775666),
    c = n(858822),
    u = n(423589),
    d = n(131704),
    p = n(430824);
function m(e) {
    let { channel: t, closePopout: n, onSelect: m, navId: f, label: h, location: g, includeGuildMute: _ } = e,
        b = (0, o.c)(t),
        x = (0, s.EQ)(t),
        y = (0, i.e7)([p.Z], () => p.Z.getGuild(t.guild_id)),
        E = (0, c.Z)(y),
        v = (0, u.Mn)('ChannelNotificationSettingsPopoutMenu') && d.$N.has(t.type);
    return (0, r.jsxs)(a.v2r, {
        navId: f,
        onClose: n,
        'aria-label': h,
        onSelect: m,
        children: [(0, r.jsx)(a.kSQ, { children: (0, l.ZP)(t, g) }), _ ? (0, r.jsx)(a.kSQ, { children: E }) : null, v ? x : (0, r.jsx)(a.kSQ, { children: b })]
    });
}
