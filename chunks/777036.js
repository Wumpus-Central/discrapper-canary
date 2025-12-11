n.d(t, { Z: () => m });
var i = n(26151),
    r = n(13245),
    a = n(287734),
    l = n(43267),
    o = n(933557),
    s = n(699516),
    c = n(594174),
    u = n(614554),
    d = n(620954),
    f = n(987650),
    h = n(981631),
    p = n(388032);
function m(e) {
    let t = (0, o.F6)(e, c.default, s.Z),
        n = p.intl.string(p.t.ssrVzG),
        m = (0, l.x)(e),
        g = (0, u.Z)(e),
        { trackView: b, trackClick: y } = (0, d.Rg)(f.n0.IncomingCall, {
            notif_type: f.n0.IncomingCall,
            notif_user_id: g,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
        });
    return {
        icon: m,
        title: t,
        body: n,
        confirmText: p.intl.string(p.t["0D/6Rz"]),
        cancelText: p.intl.string(p.t.BVN4pL),
        onNotificationShow: () => {
            b();
        },
        onConfirmClick: (t, n) => {
            if ((y("join"), h.TPd.CALLABLE.has(e.type))) i.Z.call(e.id, !1, !1);
            else {
                if (e.type !== h.d4z.GUILD_VOICE) return;
                a.default.selectVoiceChannel(e.id);
            }
            r.Z.updateNotificationStatus(n),
                r.Z.track(h.rMx.VOICE_CHANNEL_SELECTED, {
                    location: "Overlay Notificaiton",
                    guild_id: e.guild_id,
                    channel_id: e.id,
                    video_enabled: !1,
                });
        },
        onCancelClick: () => {
            y("decline"), i.Z.stopRinging(e.id);
        },
        onDismissClick: () => {
            y("dismiss");
        },
    };
}
