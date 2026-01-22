n.d(t, { A: () => m });
var i = n(387755),
    r = n(684013),
    l = n(956793),
    a = n(571694),
    o = n(47167),
    s = n(994500),
    c = n(287809),
    u = n(621436),
    d = n(581730),
    p = n(672396),
    h = n(652215),
    f = n(985018);
function m(e) {
    let t = (0, o.m1)(e, c.default, s.A),
        n = f.intl.string(f.t.ssrVzG),
        m = (0, a.Y)(e),
        g = (0, u.A)(e),
        { trackView: y, trackClick: A } = (0, d.Y9)(p.KS.IncomingCall, {
            notif_type: p.KS.IncomingCall,
            notif_user_id: g,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
        });
    return {
        icon: m,
        title: t,
        body: n,
        confirmText: f.intl.string(f.t["0D/6Rz"]),
        cancelText: f.intl.string(f.t.BVN4pL),
        onNotificationShow: () => {
            y();
        },
        onConfirmClick: (t, n) => {
            if ((A("join"), h.kvI.CALLABLE.has(e.type))) i.A.call(e.id, !1, !1);
            else {
                if (e.type !== h.rbe.GUILD_VOICE) return;
                l.default.selectVoiceChannel(e.id);
            }
            r.A.updateNotificationStatus(n),
                r.A.track(h.HAw.VOICE_CHANNEL_SELECTED, {
                    location: "Overlay Notificaiton",
                    guild_id: e.guild_id,
                    channel_id: e.id,
                    video_enabled: !1,
                });
        },
        onCancelClick: () => {
            A("decline"), i.A.stopRinging(e.id);
        },
        onDismissClick: () => {
            A("dismiss");
        },
    };
}
