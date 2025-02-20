n.d(t, { Z: () => g });
var i = n(26151),
    r = n(13245),
    o = n(287734),
    l = n(43267),
    a = n(933557),
    s = n(699516),
    c = n(594174),
    u = n(614554),
    d = n(620954),
    p = n(987650),
    f = n(981631),
    h = n(388032);
function g(e) {
    let t = (0, a.F6)(e, c.default, s.Z),
        n = h.NW.string(h.t.ssrVzM),
        g = (0, l.x)(e),
        _ = (0, u.Z)(e),
        { trackView: m, trackClick: v } = (0, d.R)(p.n0.IncomingCall, {
            notif_type: p.n0.IncomingCall,
            notif_user_id: _,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type
        });
    return {
        icon: g,
        title: t,
        body: n,
        confirmText: h.NW.string(h.t['0D/6R0']),
        cancelText: h.NW.string(h.t.BVN4pK),
        onNotificationShow: () => {
            m();
        },
        onConfirmClick: (t, n) => {
            if ((v('join'), f.TPd.CALLABLE.has(e.type))) i.Z.call(e.id, !1, !1);
            else {
                if (e.type !== f.d4z.GUILD_VOICE) return;
                o.default.selectVoiceChannel(e.id);
            }
            r.Z.updateNotificationStatus(n),
                r.Z.track(f.rMx.VOICE_CHANNEL_SELECTED, {
                    location: 'Overlay Notificaiton',
                    guild_id: e.guild_id,
                    channel_id: e.id,
                    video_enabled: !1
                });
        },
        onCancelClick: () => {
            v('decline'), i.Z.stopRinging(e.id);
        },
        onDismissClick: () => {
            v('dismiss');
        }
    };
}
