n.d(t, { Z: () => f });
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
    m = n(388032);
function f(e) {
    let t = (0, r.F6)(e, u.default, c.Z),
        n = m.intl.string(m.t.ssrVzM),
        f = (0, a.x)(e),
        v = (0, d.Z)(e),
        { trackView: Z, trackClick: x } = (0, h.R)(g.n0.IncomingCall, {
            notif_type: g.n0.IncomingCall,
            notif_user_id: v,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type
        });
    return {
        icon: f,
        title: t,
        body: n,
        hint: (e) => (0, o.QR)(e, (0, h.P)(), m.t['Odi54+']),
        confirmText: m.intl.string(m.t['0D/6R0']),
        cancelText: m.intl.string(m.t.BVN4pK),
        onNotificationShow: () => {
            Z();
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
