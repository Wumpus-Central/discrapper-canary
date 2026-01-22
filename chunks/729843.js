n.d(t, {
    A: () => g,
});
var i = n(387755),
    r = n(684013),
    s = n(956793),
    l = n(571694),
    o = n(47167),
    a = n(471024),
    c = n(621436),
    d = n(994500),
    u = n(287809),
    h = n(684748),
    p = n(652215),
    f = n(672396),
    b = n(985018);

function g(e) {
    let t = (0, o.m1)(e, u.default, d.A),
        n = b.intl.string(b.t.ssrVzG),
        g = (0, l.Y)(e),
        y = (0, c.A)(e),
        { trackView: A, trackClick: m } = (0, h.Y)(f.KS.IncomingCall, {
            notif_type: f.KS.IncomingCall,
            notif_user_id: y,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
        });
    return {
        icon: g,
        title: t,
        body: n,
        hint: (e) => (0, a.sI)(e, (0, h.J)(), b.t.Odi54y),
        confirmText: b.intl.string(b.t["0D/6Rz"]),
        cancelText: b.intl.string(b.t.BVN4pL),
        onNotificationShow: () => {
            A();
        },
        onConfirmClick: () => {
            if (p.kvI.CALLABLE.has(e.type)) r.A.callPrivateChannel(e.id);
            else {
                if (e.type !== p.rbe.GUILD_VOICE) return;
                s.default.selectVoiceChannel(e.id);
            }
            m("join"),
                r.A.track(p.HAw.VOICE_CHANNEL_SELECTED, {
                    location: "Overlay Notificaiton",
                    guild_id: e.guild_id,
                    channel_id: e.id,
                    video_enabled: !1,
                });
        },
        onCancelClick: () => {
            i.A.stopRinging(e.id), m("decline");
        },
        onDismissClick: () => {
            m("dismiss");
        },
    };
}
