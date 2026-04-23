n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(861672),
    s = n(477782),
    r = n(995102),
    o = n(288104),
    c = n(661504),
    d = n(507238),
    u = n(769591),
    h = n(95701),
    m = n(71393);
function A(e) {
    let { channel: t, closePopout: n, onSelect: A, navId: g, label: _, location: p, includeGuildMute: f } = e,
        E = (0, o.b)(t),
        C = (0, c.A0)(t),
        x = (0, l.bG)([m.A], () => m.A.getGuild(t.guild_id)),
        S = (0, d.A)(x),
        I = (0, u.os)("ChannelNotificationSettingsPopoutMenu") && h.B4.has(t.type);
    return (0, i.jsxs)(a.W, {
        "data-menu-migrated": !0,
        navId: g,
        onClose: n,
        "aria-label": _,
        onSelect: A,
        children: [
            (0, i.jsx)(s.rX, { children: (0, r.A)(t, p) }),
            f ? (0, i.jsx)(s.rX, { children: S }) : null,
            I ? C : (0, i.jsx)(s.rX, { children: E }),
        ],
    });
}
