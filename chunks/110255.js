n.d(t, { Z: () => _ });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(776568),
    s = n(218035),
    o = n(775666),
    c = n(858822),
    d = n(423589),
    u = n(131704),
    m = n(430824);
function _(e) {
    let { channel: t, closePopout: n, onSelect: _, navId: h, label: p, location: g, includeGuildMute: f } = e,
        x = (0, s.c)(t),
        C = (0, o.EQ)(t),
        E = (0, l.e7)([m.Z], () => m.Z.getGuild(t.guild_id)),
        v = (0, c.Z)(E),
        I = (0, d.Mn)('ChannelNotificationSettingsPopoutMenu') && u.$N.has(t.type);
    return (0, i.jsxs)(a.v2r, {
        navId: h,
        onClose: n,
        'aria-label': p,
        onSelect: _,
        children: [(0, i.jsx)(a.kSQ, { children: (0, r.ZP)(t, g) }), f ? (0, i.jsx)(a.kSQ, { children: v }) : null, I ? C : (0, i.jsx)(a.kSQ, { children: x })]
    });
}
