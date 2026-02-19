"use strict";
n.d(t, { A: () => h });
var r = n(387755),
    i = n(684013),
    s = n(956793),
    a = n(571694),
    o = n(47167),
    l = n(994500),
    u = n(287809),
    c = n(621436),
    d = n(581730),
    _ = n(672396),
    f = n(652215),
    p = n(985018);
function h(e) {
    let t = (0, o.m1)(e, u.default, l.A),
        n = p.intl.string(p.t.ssrVzG),
        h = (0, a.Y)(e),
        m = (0, c.A)(e),
        { trackView: E, trackClick: g } = (0, d.Y9)(_.KS.IncomingCall, {
            notif_type: _.KS.IncomingCall,
            notif_user_id: m,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
        });
    return {
        icon: h,
        title: t,
        body: n,
        confirmText: p.intl.string(p.t["0D/6Rz"]),
        cancelText: p.intl.string(p.t.BVN4pL),
        onNotificationShow: () => {
            E();
        },
        onConfirmClick: (t, n) => {
            if ((g("join"), f.kvI.CALLABLE.has(e.type))) r.A.call(e.id, !1, !1);
            else {
                if (e.type !== f.rbe.GUILD_VOICE) return;
                s.default.selectVoiceChannel(e.id);
            }
            i.A.updateNotificationStatus(n),
                i.A.track(f.HAw.VOICE_CHANNEL_SELECTED, {
                    location: "Overlay Notificaiton",
                    guild_id: e.guild_id,
                    channel_id: e.id,
                    video_enabled: !1,
                });
        },
        onCancelClick: () => {
            g("decline"), r.A.stopRinging(e.id);
        },
        onDismissClick: () => {
            g("dismiss");
        },
    };
}
