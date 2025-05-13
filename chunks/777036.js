n.d(t, { Z: () => m });
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
    h = n(981631),
    f = n(388032);
function m(e) {
    let t = (0, a.F6)(e, c.default, s.Z),
        n = f.intl.string(f.t.ssrVzM),
        m = (0, l.x)(e),
        g = (0, u.Z)(e),
        { trackView: y, trackClick: O } = (0, d.R)(p.n0.IncomingCall, {
            notif_type: p.n0.IncomingCall,
            notif_user_id: g,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type
        });
    return {
        icon: m,
        title: t,
        body: n,
        confirmText: f.intl.string(f.t['0D/6R0']),
        cancelText: f.intl.string(f.t.BVN4pK),
        onNotificationShow: () => {
            y();
        },
        onConfirmClick: (t, n) => {
            if ((O('join'), h.TPd.CALLABLE.has(e.type))) i.Z.call(e.id, !1, !1);
            else {
                if (e.type !== h.d4z.GUILD_VOICE) return;
                o.default.selectVoiceChannel(e.id);
            }
            r.Z.updateNotificationStatus(n),
                r.Z.track(h.rMx.VOICE_CHANNEL_SELECTED, {
                    location: 'Overlay Notificaiton',
                    guild_id: e.guild_id,
                    channel_id: e.id,
                    video_enabled: !1
                });
        },
        onCancelClick: () => {
            O('decline'), i.Z.stopRinging(e.id);
        },
        onDismissClick: () => {
            O('dismiss');
        }
    };
}
