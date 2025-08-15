n.d(t, { Z: () => d });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(287734),
    a = n(19780),
    o = n(626135),
    s = n(915863),
    c = n(981631),
    u = n(388032);
function d(e) {
    let { className: t, color: n, look: d, hangStatusChannel: p, onAction: f } = e,
        m = (0, i.e7)([a.Z], () => a.Z.getChannelId() === p.id);
    return (0, r.jsx)(
        s.Z,
        {
            className: t,
            disabled: m,
            onClick: () => {
                null == f || f(),
                    l.default.selectVoiceChannel(p.id),
                    o.default.track(c.rMx.HANG_STATUS_CTA_CLICKED, {
                        source: "UserProfilePopout",
                        guild_id: p.guild_id,
                        channel_id: p.id,
                    });
            },
            color: n,
            look: d,
            fullWidth: !0,
            children: u.intl.string(u.t["9C444u"]),
        },
        "join-hang",
    );
}
