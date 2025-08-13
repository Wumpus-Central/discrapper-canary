n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    a = n(776568),
    s = n(218035),
    o = n(775666),
    c = n(858822),
    u = n(423589),
    d = n(131704),
    h = n(430824);
function p(e) {
    let { channel: t, closePopout: n, onSelect: p, navId: f, label: g, location: m, includeGuildMute: b } = e,
        y = (0, s.c)(t),
        x = (0, o.EQ)(t),
        j = (0, i.e7)([h.Z], () => h.Z.getGuild(t.guild_id)),
        _ = (0, c.Z)(j),
        O = (0, u.Mn)("ChannelNotificationSettingsPopoutMenu") && d.$N.has(t.type);
    return (0, r.jsxs)(l.v2r, {
        navId: f,
        onClose: n,
        "aria-label": g,
        onSelect: p,
        children: [
            (0, r.jsx)(l.kSQ, { children: (0, a.ZP)(t, m) }),
            b ? (0, r.jsx)(l.kSQ, { children: _ }) : null,
            O ? x : (0, r.jsx)(l.kSQ, { children: y }),
        ],
    });
}
