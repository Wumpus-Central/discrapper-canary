n.d(t, { Z: () => b });
var i = n(26151),
    r = n(13245),
    a = n(287734),
    s = n(43267),
    o = n(933557),
    l = n(593481),
    c = n(614554),
    d = n(699516),
    u = n(594174),
    f = n(312839),
    h = n(981631),
    p = n(987650),
    g = n(388032);
function b(e) {
    let t = (0, o.F6)(e, u.default, d.Z),
        n = g.intl.string(g.t.ssrVzG),
        b = (0, s.x)(e),
        m = (0, c.Z)(e),
        { trackView: y, trackClick: v } = (0, f.R)(p.n0.IncomingCall, {
            notif_type: p.n0.IncomingCall,
            notif_user_id: m,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
        });
    return {
        icon: b,
        title: t,
        body: n,
        hint: (e) => (0, l.QR)(e, (0, f.P)(), g.t.Odi54y),
        confirmText: g.intl.string(g.t["0D/6Rz"]),
        cancelText: g.intl.string(g.t.BVN4pL),
        onNotificationShow: () => {
            y();
        },
        onConfirmClick: () => {
            if (h.TPd.CALLABLE.has(e.type)) r.Z.callPrivateChannel(e.id);
            else {
                if (e.type !== h.d4z.GUILD_VOICE) return;
                a.default.selectVoiceChannel(e.id);
            }
            v("join"),
                r.Z.track(h.rMx.VOICE_CHANNEL_SELECTED, {
                    location: "Overlay Notificaiton",
                    guild_id: e.guild_id,
                    channel_id: e.id,
                    video_enabled: !1,
                });
        },
        onCancelClick: () => {
            i.Z.stopRinging(e.id), v("decline");
        },
        onDismissClick: () => {
            v("dismiss");
        },
    };
}
