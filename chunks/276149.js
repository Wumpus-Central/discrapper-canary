n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(287734),
    a = n(19780),
    o = n(626135),
    s = n(915863),
    c = n(981631),
    u = n(388032);
function d(e) {
    let { className: t, color: n, look: d, hangStatusChannel: f, onAction: p } = e,
        m = (0, i.e7)([a.Z], () => a.Z.getChannelId() === f.id);
    return (0, r.jsx)(
        s.Z,
        {
            className: t,
            disabled: m,
            onClick: () => {
                (null == p || p(),
                    l.default.selectVoiceChannel(f.id),
                    o.default.track(c.rMx.HANG_STATUS_CTA_CLICKED, {
                        source: 'UserProfilePopout',
                        guild_id: f.guild_id,
                        channel_id: f.id
                    }));
            },
            color: n,
            look: d,
            fullWidth: !0,
            children: u.intl.string(u.t['9C444u'])
        },
        'join-hang'
    );
}
