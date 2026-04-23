i.d(e, { A: () => p });
var n = i(387755),
    l = i(684013),
    a = i(956793),
    r = i(571694),
    s = i(47167),
    o = i(994500),
    u = i(287809),
    c = i(621436),
    d = i(581730),
    A = i(672396),
    f = i(652215),
    y = i(985018);
function p(t) {
    let e = (0, s.m1)(t, u.default, o.A),
        i = y.intl.string(y.t.ssrVzG),
        p = (0, r.Y)(t),
        m = (0, c.A)(t),
        { trackView: I, trackClick: g } = (0, d.Y9)(A.KS.IncomingCall, {
            notif_type: A.KS.IncomingCall,
            notif_user_id: m,
            guild_id: t.guild_id,
            channel_id: t.id,
            channel_type: t.type,
        });
    return {
        icon: p,
        title: e,
        body: i,
        confirmText: y.intl.string(y.t["0D/6Rz"]),
        cancelText: y.intl.string(y.t.BVN4pL),
        onNotificationShow: () => {
            I();
        },
        onConfirmClick: (e, i) => {
            if ((g("join"), f.kvI.CALLABLE.has(t.type))) n.A.call(t.id, !1, !1);
            else {
                if (t.type !== f.rbe.GUILD_VOICE) return;
                a.default.selectVoiceChannel(t.id);
            }
            l.A.updateNotificationStatus(i),
                l.A.track(f.HAw.VOICE_CHANNEL_SELECTED, {
                    location: "Overlay Notificaiton",
                    guild_id: t.guild_id,
                    channel_id: t.id,
                    video_enabled: !1,
                });
        },
        onCancelClick: () => {
            g("decline"), n.A.stopRinging(t.id);
        },
        onDismissClick: () => {
            g("dismiss");
        },
    };
}
