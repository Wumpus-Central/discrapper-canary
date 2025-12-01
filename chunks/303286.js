n.d(t, { Z: () => m });
var i = n(26151),
    r = n(13245),
    l = n(287734),
    a = n(43267),
    o = n(933557),
    s = n(699516),
    u = n(594174),
    c = n(614554),
    d = n(620954),
    h = n(987650),
    p = n(981631),
    f = n(388032);
function m(e) {
    let t = (0, o.F6)(e, u.default, s.Z),
        n = f.intl.string(f.t.ssrVzG),
        m = (0, a.x)(e),
        g = (0, c.Z)(e),
        { trackView: y, trackClick: O } = (0, d.Rg)(h.n0.IncomingCall, {
            notif_type: h.n0.IncomingCall,
            notif_user_id: g,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
        });
    return {
        icon: m,
        title: t,
        body: n,
        confirmText: f.intl.string(f.t["0D/6Rz"]),
        cancelText: f.intl.string(f.t.BVN4pL),
        onNotificationShow: () => {
            y();
        },
        onConfirmClick: (t, n) => {
            if ((O("join"), p.TPd.CALLABLE.has(e.type))) i.Z.call(e.id, !1, !1);
            else {
                if (e.type !== p.d4z.GUILD_VOICE) return;
                l.default.selectVoiceChannel(e.id);
            }
            r.Z.updateNotificationStatus(n),
                r.Z.track(p.rMx.VOICE_CHANNEL_SELECTED, {
                    location: "Overlay Notificaiton",
                    guild_id: e.guild_id,
                    channel_id: e.id,
                    video_enabled: !1,
                });
        },
        onCancelClick: () => {
            O("decline"), i.Z.stopRinging(e.id);
        },
        onDismissClick: () => {
            O("dismiss");
        },
    };
}
