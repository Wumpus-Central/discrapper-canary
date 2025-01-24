i.d(e, {
    Z: function () {
        return E;
    }
});
var n = i(26151),
    l = i(13245),
    o = i(43267),
    r = i(933557),
    s = i(699516),
    a = i(594174),
    u = i(620954),
    d = i(987650),
    c = i(981631),
    h = i(388032);
function E(t) {
    let e = (0, r.F6)(t, a.default, s.Z),
        i = h.intl.string(h.t.ssrVzM),
        E = (0, o.x)(t),
        { trackView: p, trackClick: f } = (0, u.R)(d.n0.IncomingCall, {
            notif_type: d.n0.IncomingCall,
            notif_user_id: 1 === t.recipients.length ? t.recipients[0] : null,
            guild_id: t.guild_id,
            channel_id: t.id,
            channel_type: t.type
        });
    return {
        icon: E,
        title: e,
        body: i,
        confirmText: h.intl.string(h.t['0D/6R0']),
        cancelText: h.intl.string(h.t.BVN4pK),
        onNotificationShow: () => {
            p();
        },
        onConfirmClick: (e, i) => {
            f('join'),
                n.Z.call(t.id, !1, !1),
                l.Z.updateNotificationStatus(i),
                l.Z.track(c.rMx.VOICE_CHANNEL_SELECTED, {
                    location: 'Overlay Notificaiton',
                    guild_id: null,
                    channel_id: t.id,
                    video_enabled: !1
                });
        },
        onCancelClick: () => {
            f('decline'), n.Z.stopRinging(t.id);
        },
        onDismissClick: () => {
            f('dismiss');
        }
    };
}
