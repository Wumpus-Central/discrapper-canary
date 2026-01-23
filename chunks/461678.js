n.d(t, {
    A: () => h,
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    s = n(995102),
    a = n(288104),
    o = n(661504),
    c = n(507238),
    u = n(769591),
    d = n(95701),
    p = n(71393);

function h(e) {
    let { channel: t, closePopout: n, onSelect: h, navId: f, label: g, location: m, includeGuildMute: b } = e,
        A = (0, a.b)(t),
        y = (0, o.A0)(t),
        _ = (0, l.bG)([p.A], () => p.A.getGuild(t.guild_id)),
        O = (0, c.A)(_),
        j = (0, u.os)("ChannelNotificationSettingsPopoutMenu") && d.B4.has(t.type);
    return (0, r.jsxs)(i.W1t, {
        "data-menu-migration-ready": !0,
        navId: f,
        onClose: n,
        "aria-label": g,
        onSelect: h,
        children: [
            (0, r.jsx)(i.rXV, {
                children: (0, s.Ay)(t, m),
            }),
            b
                ? (0, r.jsx)(i.rXV, {
                      children: O,
                  })
                : null,
            j
                ? y
                : (0, r.jsx)(i.rXV, {
                      children: A,
                  }),
        ],
    });
}
