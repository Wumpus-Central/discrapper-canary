n.d(t, {
    A: () => p,
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    a = n(995102),
    s = n(288104),
    o = n(661504),
    c = n(507238),
    u = n(769591),
    d = n(95701),
    f = n(71393);

function p(e) {
    let { channel: t, closePopout: n, onSelect: p, navId: h, label: b, location: g, includeGuildMute: m } = e,
        A = (0, s.b)(t),
        y = (0, o.A0)(t),
        O = (0, l.bG)([f.A], () => f.A.getGuild(t.guild_id)),
        j = (0, c.A)(O),
        v = (0, u.os)("ChannelNotificationSettingsPopoutMenu") && d.B4.has(t.type);
    return (0, r.jsxs)(i.W1t, {
        navId: h,
        onClose: n,
        "aria-label": b,
        onSelect: p,
        children: [
            (0, r.jsx)(i.rXV, {
                children: (0, a.Ay)(t, g),
            }),
            m
                ? (0, r.jsx)(i.rXV, {
                      children: j,
                  })
                : null,
            v
                ? y
                : (0, r.jsx)(i.rXV, {
                      children: A,
                  }),
        ],
    });
}
