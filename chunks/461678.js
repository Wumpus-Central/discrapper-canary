n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(397927),
    a = n(995102),
    r = n(288104),
    o = n(661504),
    c = n(507238),
    d = n(769591),
    u = n(95701),
    h = n(71393);
function m(e) {
    let { channel: t, closePopout: n, onSelect: m, navId: A, label: g, location: p, includeGuildMute: f } = e,
        _ = (0, r.b)(t),
        E = (0, o.A0)(t),
        x = (0, l.bG)([h.A], () => h.A.getGuild(t.guild_id)),
        C = (0, c.A)(x),
        S = (0, d.os)("ChannelNotificationSettingsPopoutMenu") && u.B4.has(t.type);
    return (0, i.jsxs)(s.W1t, {
        "data-menu-migrated": !0,
        navId: A,
        onClose: n,
        "aria-label": g,
        onSelect: m,
        children: [
            (0, i.jsx)(s.rXV, { children: (0, a.A)(t, p) }),
            f ? (0, i.jsx)(s.rXV, { children: C }) : null,
            S ? E : (0, i.jsx)(s.rXV, { children: _ }),
        ],
    });
}
