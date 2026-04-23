"use strict";
n.d(t, { A: () => _ });
var i = n(387755),
    s = n(684013),
    l = n(956793),
    a = n(571694),
    r = n(47167),
    o = n(471024),
    d = n(621436),
    c = n(994500),
    u = n(287809),
    h = n(684748),
    p = n(652215),
    A = n(672396),
    f = n(985018);
function _(e) {
    let t = (0, r.m1)(e, u.default, c.A),
        n = f.intl.string(f.t.ssrVzG),
        _ = (0, a.Y)(e),
        g = (0, d.A)(e),
        { trackView: m, trackClick: E } = (0, h.Y)(A.KS.IncomingCall, {
            notif_type: A.KS.IncomingCall,
            notif_user_id: g,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
        });
    return {
        icon: _,
        title: t,
        body: n,
        hint: (e) => (0, o.sI)(e, (0, h.J)(), f.t.Odi54y),
        confirmText: f.intl.string(f.t["0D/6Rz"]),
        cancelText: f.intl.string(f.t.BVN4pL),
        onNotificationShow: () => {
            m();
        },
        onConfirmClick: () => {
            if (p.kvI.CALLABLE.has(e.type)) s.A.callPrivateChannel(e.id);
            else {
                if (e.type !== p.rbe.GUILD_VOICE) return;
                l.default.selectVoiceChannel(e.id);
            }
            E("join"),
                s.A.track(p.HAw.VOICE_CHANNEL_SELECTED, {
                    location: "Overlay Notificaiton",
                    guild_id: e.guild_id,
                    channel_id: e.id,
                    video_enabled: !1,
                });
        },
        onCancelClick: () => {
            i.A.stopRinging(e.id), E("decline");
        },
        onDismissClick: () => {
            E("dismiss");
        },
    };
}
