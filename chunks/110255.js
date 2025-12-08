n.d(t, { Z: () => h });
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(481060),
    a = n(776568),
    s = n(218035),
    o = n(775666),
    c = n(858822),
    d = n(423589),
    u = n(131704),
    p = n(430824);
function h(e) {
    let { channel: t, closePopout: n, onSelect: h, navId: f, label: g, location: m, includeGuildMute: b } = e,
        _ = (0, s.c)(t),
        y = (0, o.EQ)(t),
        O = (0, i.e7)([p.Z], () => p.Z.getGuild(t.guild_id)),
        x = (0, c.Z)(O),
        j = (0, d.Mn)("ChannelNotificationSettingsPopoutMenu") && u.$N.has(t.type);
    return (0, r.jsxs)(l.v2r, {
        navId: f,
        onClose: n,
        "aria-label": g,
        onSelect: h,
        children: [
            (0, r.jsx)(l.kSQ, { children: (0, a.ZP)(t, m) }),
            b ? (0, r.jsx)(l.kSQ, { children: x }) : null,
            j ? y : (0, r.jsx)(l.kSQ, { children: _ }),
        ],
    });
}
