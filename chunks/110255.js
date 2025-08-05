n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    a = n(776568),
    s = n(218035),
    o = n(775666),
    c = n(858822),
    d = n(423589),
    u = n(131704),
    h = n(430824);
function p(e) {
    let { channel: t, closePopout: n, onSelect: p, navId: f, label: g, location: m, includeGuildMute: b } = e,
        _ = (0, s.c)(t),
        y = (0, o.EQ)(t),
        j = (0, i.e7)([h.Z], () => h.Z.getGuild(t.guild_id)),
        O = (0, c.Z)(j),
        x = (0, d.Mn)('ChannelNotificationSettingsPopoutMenu') && u.$N.has(t.type);
    return (0, r.jsxs)(l.v2r, {
        navId: f,
        onClose: n,
        'aria-label': g,
        onSelect: p,
        children: [(0, r.jsx)(l.kSQ, { children: (0, a.ZP)(t, m) }), b ? (0, r.jsx)(l.kSQ, { children: O }) : null, x ? y : (0, r.jsx)(l.kSQ, { children: _ })]
    });
}
