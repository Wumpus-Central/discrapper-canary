n.d(t, { Z: () => d });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(287734),
    o = n(19780),
    s = n(626135),
    l = n(915863),
    c = n(981631),
    u = n(388032);
function d(e) {
    let { className: t, color: n, look: d, hangStatusChannel: f, onAction: _ } = e,
        p = (0, i.e7)([o.Z], () => o.Z.getChannelId() === f.id),
        h = () => {
            null == _ || _(),
                a.default.selectVoiceChannel(f.id),
                s.default.track(c.rMx.HANG_STATUS_CTA_CLICKED, {
                    source: "UserProfilePopout",
                    guild_id: f.guild_id,
                    channel_id: f.id,
                });
        };
    return (0, r.jsx)(
        l.Z,
        {
            className: t,
            disabled: p,
            onClick: h,
            color: n,
            look: d,
            fullWidth: !0,
            children: u.intl.string(u.t["9C444u"]),
        },
        "join-hang",
    );
}
