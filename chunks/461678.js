n.d(t, { A: () => m });
var l = n(627968);
n(64700);
var i = n(17928),
    s = n(550079),
    a = n(477782),
    r = n(995102),
    o = n(288104),
    c = n(661504),
    d = n(507238),
    u = n(769591),
    h = n(95701),
    g = n(71393);
function m(e) {
    let { channel: t, closePopout: n, onSelect: m, navId: A, label: p, location: C, includeGuildMute: E } = e,
        x = (0, o.b)(t),
        N = (0, c.A0)(t),
        f = (0, i.bG)([g.A], () => g.A.getGuild(t.guild_id)),
        _ = (0, d.A)(f),
        T = (0, u.os)("ChannelNotificationSettingsPopoutMenu") && h.B4.has(t.type);
    return (0, l.jsxs)(s.W, {
        "data-menu-migrated": !0,
        navId: A,
        onClose: n,
        "aria-label": p,
        onSelect: m,
        children: [
            (0, l.jsx)(a.rX, { children: (0, r.A)(t, C) }),
            E ? (0, l.jsx)(a.rX, { children: _ }) : null,
            T ? N : (0, l.jsx)(a.rX, { children: x }),
        ],
    });
}
