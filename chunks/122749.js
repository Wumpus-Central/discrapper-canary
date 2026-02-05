n.d(t, { A: () => g });
var i = n(387755),
    l = n(684013),
    a = n(956793),
    s = n(571694),
    r = n(47167),
    o = n(994500),
    d = n(287809),
    u = n(621436),
    c = n(581730),
    h = n(672396),
    A = n(652215),
    m = n(985018);
function g(e) {
    let t = (0, r.m1)(e, d.default, o.A),
        n = m.intl.string(m.t.ssrVzG),
        g = (0, s.Y)(e),
        p = (0, u.A)(e),
        { trackView: f, trackClick: _ } = (0, c.Y9)(h.KS.IncomingCall, {
            notif_type: h.KS.IncomingCall,
            notif_user_id: p,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
        });
    return {
        icon: g,
        title: t,
        body: n,
        confirmText: m.intl.string(m.t["0D/6Rz"]),
        cancelText: m.intl.string(m.t.BVN4pL),
        onNotificationShow: () => {
            f();
        },
        onConfirmClick: (t, n) => {
            if ((_("join"), A.kvI.CALLABLE.has(e.type))) i.A.call(e.id, !1, !1);
            else {
                if (e.type !== A.rbe.GUILD_VOICE) return;
                a.default.selectVoiceChannel(e.id);
            }
            l.A.updateNotificationStatus(n),
                l.A.track(A.HAw.VOICE_CHANNEL_SELECTED, {
                    location: "Overlay Notificaiton",
                    guild_id: e.guild_id,
                    channel_id: e.id,
                    video_enabled: !1,
                });
        },
        onCancelClick: () => {
            _("decline"), i.A.stopRinging(e.id);
        },
        onDismissClick: () => {
            _("dismiss");
        },
    };
}
