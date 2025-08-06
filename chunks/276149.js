n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(287734),
    a = n(19780),
    s = n(626135),
    l = n(915863),
    c = n(981631),
    u = n(388032);
function d(e) {
    let { className: t, color: n, look: d, hangStatusChannel: f, onAction: _ } = e,
        p = (0, i.e7)([a.Z], () => a.Z.getChannelId() === f.id),
        h = () => {
            (null == _ || _(),
                o.default.selectVoiceChannel(f.id),
                s.default.track(c.rMx.HANG_STATUS_CTA_CLICKED, {
                    source: 'UserProfilePopout',
                    guild_id: f.guild_id,
                    channel_id: f.id
                }));
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
            children: u.intl.string(u.t['9C444u'])
        },
        'join-hang'
    );
}
