n.d(i, { A: () => b });
var t = n(477900);
n(582128);
var a = n(17928),
    r = n(980707),
    s = n(477782),
    d = n(995102),
    l = n(288104),
    c = n(661504),
    h = n(507238),
    u = n(769591),
    o = n(95701),
    p = n(71393);
function b(e) {
    let { channel: i, closePopout: n, onSelect: b, navId: A, label: g, location: j, includeGuildMute: k } = e,
        x = (0, l.b)(i),
        C = (0, c.h)(i),
        v = (0, a.bG)([p.A], () => p.A.getGuild(i.guild_id)),
        X = (0, h.A)(v),
        _ = (0, u.os)("ChannelNotificationSettingsPopoutMenu") && o.B4.has(i.type);
    return (0, t.jsxs)(r.W, {
        "data-menu-migrated": !0,
        navId: A,
        onClose: n,
        "aria-label": g,
        onSelect: b,
        children: [
            (0, t.jsx)(s.rX, { children: (0, d.A)(i, j) }),
            k ? (0, t.jsx)(s.rX, { children: X }) : null,
            _ ? C : (0, t.jsx)(s.rX, { children: x }),
        ],
    });
}
