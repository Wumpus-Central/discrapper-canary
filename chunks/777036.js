n.d(t, { Z: () => f });
var i = n(26151),
    r = n(13245),
    o = n(287734),
    l = n(43267),
    a = n(933557),
    s = n(699516),
    d = n(594174),
    c = n(614554),
    u = n(620954),
    h = n(987650),
    _ = n(981631),
    p = n(388032);
function f(e) {
    let t = (0, a.F6)(e, d.default, s.Z),
        n = p.intl.string(p.t.ssrVzM),
        f = (0, l.x)(e),
        g = (0, c.Z)(e),
        { trackView: m, trackClick: v } = (0, u.R)(h.n0.IncomingCall, {
            notif_type: h.n0.IncomingCall,
            notif_user_id: g,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type
        });
    return {
        icon: f,
        title: t,
        body: n,
        confirmText: p.intl.string(p.t['0D/6R0']),
        cancelText: p.intl.string(p.t.BVN4pK),
        onNotificationShow: () => {
            m();
        },
        onConfirmClick: (t, n) => {
            if ((v('join'), _.TPd.CALLABLE.has(e.type))) i.Z.call(e.id, !1, !1);
            else {
                if (e.type !== _.d4z.GUILD_VOICE) return;
                o.default.selectVoiceChannel(e.id);
            }
            r.Z.updateNotificationStatus(n),
                r.Z.track(_.rMx.VOICE_CHANNEL_SELECTED, {
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
