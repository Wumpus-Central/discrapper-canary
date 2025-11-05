n.d(t, { Z: () => g });
var i = n(13245),
    r = n(45114),
    l = n(580991),
    o = n(562224),
    a = n(361291),
    s = n(624864),
    u = n(610394),
    c = n(620954),
    d = n(987650),
    p = n(981631),
    h = n(37113),
    f = n(388032),
    m = n(978967);
function g(e, t, n, g) {
    if (s.Z.isNotificationDisabled(d.n0.RequestToStream)) return null;
    let y = t.username,
        O = f.intl.format(m.default.jTbTAF, {
            username: "",
            game: n.name,
        }),
        E = t.getAvatarURL(e.guild_id, 80),
        { trackView: v, trackClick: S } = (0, c.R)(d.n0.RequestToStream, {
            notif_type: d.n0.RequestToStream,
            notif_user_id: t.id,
            activity_type: p.mFx.STREAM_REQUEST,
            activity_name: g.name,
        });
    return {
        icon: E,
        title: y,
        body: O,
        confirmText: f.intl.string(m.default.UGbmBp),
        cancelText: f.intl.string(f.t["tpXzJ+"]),
        onNotificationShow: () => {
            v();
        },
        onConfirmClick: (e, t) => {
            let n = a.Z.getState().preset;
            if (n === h.ApplicationStreamPresets.PRESET_DOCUMENTS) {
                let { allowAutoQuality: e } = (0, l.IK)({ location: "requestToStreamNotification" });
                n = e ? h.ApplicationStreamPresets.PRESET_AUTO : h.ApplicationStreamPresets.PRESET_VIDEO;
            }
            (0, o.Z)(u.Z.getTargetPID(), { preset: n }), S("request-to-stream"), i.Z.updateNotificationStatus(t);
        },
        onCancelClick: (t, n) => {
            (0, r.ack)(
                e.id,
                {
                    section: p.jXE.OVERLAY,
                    object: p.qAy.ACK_DECLINE_REQUEST_TO_STREAM,
                    objectType: p.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                },
                !0,
                !0,
            ),
                i.Z.updateNotificationStatus(n),
                S("decline");
        },
        onDismissClick: () => {
            S("dismiss");
        },
    };
}
