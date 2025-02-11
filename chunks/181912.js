n.d(t, { Z: () => m });
var i = n(26151),
    s = n(13245),
    l = n(287734),
    a = n(43267),
    r = n(933557),
    o = n(593481),
    d = n(614554),
    c = n(699516),
    u = n(594174),
    h = n(312839),
    p = n(981631),
    g = n(987650),
    f = n(388032);
function m(e) {
    let t = (0, r.F6)(e, u.default, c.Z),
        n = f.intl.string(f.t.ssrVzM),
        m = (0, a.x)(e),
        _ = (0, d.Z)(e),
        { trackView: v, trackClick: x } = (0, h.R)(g.n0.IncomingCall, {
            notif_type: g.n0.IncomingCall,
            notif_user_id: _,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type
        });
    return {
        icon: m,
        title: t,
        body: n,
        hint: (e) => (0, o.QR)(e, (0, h.P)(), f.t['Odi54+']),
        confirmText: f.intl.string(f.t['0D/6R0']),
        cancelText: f.intl.string(f.t.BVN4pK),
        onNotificationShow: () => {
            v();
        },
        onConfirmClick: () => {
            if (p.TPd.CALLABLE.has(e.type)) s.Z.callPrivateChannel(e.id);
            else {
                if (e.type !== p.d4z.GUILD_VOICE) return;
                l.default.selectVoiceChannel(e.id);
            }
            x('join'),
                s.Z.track(p.rMx.VOICE_CHANNEL_SELECTED, {
                    location: 'Overlay Notificaiton',
                    guild_id: e.guild_id,
                    channel_id: e.id,
                    video_enabled: !1
                });
        },
        onCancelClick: () => {
            i.Z.stopRinging(e.id), x('decline');
        },
        onDismissClick: () => {
            x('dismiss');
        }
    };
}
