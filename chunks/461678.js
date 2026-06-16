n.d(i, { A: () => A });
var t = n(627968);
n(64700);
var a = n(17928),
    r = n(980707),
    s = n(477782),
    d = n(995102),
    l = n(288104),
    c = n(661504),
    u = n(507238),
    h = n(769591),
    o = n(95701),
    p = n(71393);
function A(e) {
    let { channel: i, closePopout: n, onSelect: A, navId: b, label: g, location: j, includeGuildMute: k } = e,
        x = (0, l.b)(i),
        C = (0, c.A0)(i),
        v = (0, a.bG)([p.A], () => p.A.getGuild(i.guild_id)),
        X = (0, u.A)(v),
        _ = (0, h.os)("ChannelNotificationSettingsPopoutMenu") && o.B4.has(i.type);
    return (0, t.jsxs)(r.W, {
        "data-menu-migrated": !0,
        navId: b,
        onClose: n,
        "aria-label": g,
        onSelect: A,
        children: [
            (0, t.jsx)(s.rX, { children: (0, d.A)(i, j) }),
            k ? (0, t.jsx)(s.rX, { children: X }) : null,
            _ ? C : (0, t.jsx)(s.rX, { children: x }),
        ],
    });
}
