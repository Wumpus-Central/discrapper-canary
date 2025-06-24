n.d(t, { Z: () => h });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    a = n(776568),
    o = n(218035),
    s = n(775666),
    c = n(858822),
    u = n(423589),
    d = n(131704),
    p = n(430824);
function h(e) {
    let { channel: t, closePopout: n, onSelect: h, navId: f, label: m, location: g, includeGuildMute: b } = e,
        _ = (0, o.c)(t),
        y = (0, s.EQ)(t),
        x = (0, i.e7)([p.Z], () => p.Z.getGuild(t.guild_id)),
        C = (0, c.Z)(x),
        v = (0, u.Mn)('ChannelNotificationSettingsPopoutMenu') && d.$N.has(t.type);
    return (0, r.jsxs)(l.v2r, {
        navId: f,
        onClose: n,
        'aria-label': m,
        onSelect: h,
        children: [(0, r.jsx)(l.kSQ, { children: (0, a.ZP)(t, g) }), b ? (0, r.jsx)(l.kSQ, { children: C }) : null, v ? y : (0, r.jsx)(l.kSQ, { children: _ })]
    });
}
