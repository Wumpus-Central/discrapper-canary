n.d(t, { A: () => g });
var i = n(684013),
    r = n(334738),
    l = n(258585),
    a = n(72432),
    o = n(929921),
    s = n(592598),
    c = n(395011),
    u = n(581730),
    d = n(672396),
    p = n(652215),
    h = n(753070),
    f = n(985018),
    m = n(426127);
function g(e, t, n, g) {
    if (s.A.isNotificationDisabled(d.KS.RequestToStream)) return null;
    let y = t.username,
        A = f.intl.format(m.default.jTbTAF, {
            username: "",
            game: n.name,
        }),
        O = t.getAvatarURL(e.guild_id, 80),
        { trackView: E, trackClick: v } = (0, u.Y9)(d.KS.RequestToStream, {
            notif_type: d.KS.RequestToStream,
            notif_user_id: t.id,
            activity_type: p.xL.STREAM_REQUEST,
            activity_name: g.name,
        });
    return {
        icon: O,
        title: y,
        body: A,
        confirmText: f.intl.string(m.default.UGbmBp),
        cancelText: f.intl.string(f.t["tpXzJ+"]),
        onNotificationShow: () => {
            E();
        },
        onConfirmClick: (e, t) => {
            let n = o.A.getState().preset;
            if (n === h.jQ.PRESET_DOCUMENTS) {
                let { allowAutoQuality: e } = (0, l.eO)({ location: "requestToStreamNotification" });
                n = e ? h.jQ.PRESET_AUTO : h.jQ.PRESET_VIDEO;
            }
            (0, a.A)(c.A.getTargetPID(), { preset: n }), v("request-to-stream"), i.A.updateNotificationStatus(t);
        },
        onCancelClick: (t, n) => {
            (0, r.ack)(
                e.id,
                {
                    section: p.JJy.OVERLAY,
                    object: p.ZSU.ACK_DECLINE_REQUEST_TO_STREAM,
                    objectType: p.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                },
                !0,
                !0,
            ),
                i.A.updateNotificationStatus(n),
                v("decline");
        },
        onDismissClick: () => {
            v("dismiss");
        },
    };
}
