n.d(t, { Z: () => m });
var i = n(26151),
    r = n(13245),
    s = n(287734),
    o = n(43267),
    a = n(933557),
    l = n(593481),
    c = n(614554),
    d = n(699516),
    u = n(594174),
    h = n(312839),
    p = n(981631),
    f = n(987650),
    g = n(388032);
function m(e) {
    let t = (0, a.F6)(e, u.default, d.Z),
        n = g.NW.string(g.t.ssrVzM),
        m = (0, o.x)(e),
        y = (0, c.Z)(e),
        { trackView: v, trackClick: _ } = (0, h.R)(f.n0.IncomingCall, {
            notif_type: f.n0.IncomingCall,
            notif_user_id: y,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type
        });
    return {
        icon: m,
        title: t,
        body: n,
        hint: (e) => (0, l.QR)(e, (0, h.P)(), g.t['Odi54+']),
        confirmText: g.NW.string(g.t['0D/6R0']),
        cancelText: g.NW.string(g.t.BVN4pK),
        onNotificationShow: () => {
            v();
        },
        onConfirmClick: () => {
            if (p.TPd.CALLABLE.has(e.type)) r.Z.callPrivateChannel(e.id);
            else {
                if (e.type !== p.d4z.GUILD_VOICE) return;
                s.default.selectVoiceChannel(e.id);
            }
            _('join'),
                r.Z.track(p.rMx.VOICE_CHANNEL_SELECTED, {
                    location: 'Overlay Notificaiton',
                    guild_id: e.guild_id,
                    channel_id: e.id,
                    video_enabled: !1
                });
        },
        onCancelClick: () => {
            i.Z.stopRinging(e.id), _('decline');
        },
        onDismissClick: () => {
            _('dismiss');
        }
    };
}
