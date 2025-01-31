i.d(e, { Z: () => S });
var n = i(26151),
    l = i(13245),
    s = i(287734),
    o = i(43267),
    r = i(933557),
    a = i(699516),
    d = i(594174),
    u = i(614554),
    c = i(620954),
    h = i(987650),
    E = i(981631),
    p = i(388032);
function S(t) {
    let e = (0, r.F6)(t, d.default, a.Z),
        i = p.intl.string(p.t.ssrVzM),
        S = (0, o.x)(t),
        f = (0, u.Z)(t),
        { trackView: g, trackClick: _ } = (0, c.R)(h.n0.IncomingCall, {
            notif_type: h.n0.IncomingCall,
            notif_user_id: f,
            guild_id: t.guild_id,
            channel_id: t.id,
            channel_type: t.type
        });
    return {
        icon: S,
        title: e,
        body: i,
        confirmText: p.intl.string(p.t['0D/6R0']),
        cancelText: p.intl.string(p.t.BVN4pK),
        onNotificationShow: () => {
            g();
        },
        onConfirmClick: (e, i) => {
            if ((_('join'), E.TPd.CALLABLE.has(t.type))) n.Z.call(t.id, !1, !1);
            else {
                if (t.type !== E.d4z.GUILD_VOICE) return;
                s.default.selectVoiceChannel(t.id);
            }
            l.Z.updateNotificationStatus(i),
                l.Z.track(E.rMx.VOICE_CHANNEL_SELECTED, {
                    location: 'Overlay Notificaiton',
                    guild_id: t.guild_id,
                    channel_id: t.id,
                    video_enabled: !1
                });
        },
        onCancelClick: () => {
            _('decline'), n.Z.stopRinging(t.id);
        },
        onDismissClick: () => {
            _('dismiss');
        }
    };
}
