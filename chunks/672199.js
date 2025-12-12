n.d(t, { Z: () => g });
var i = n(13245),
    r = n(45114),
    l = n(580991),
    a = n(562224),
    o = n(361291),
    s = n(624864),
    c = n(610394),
    u = n(620954),
    d = n(987650),
    f = n(981631),
    h = n(37113),
    p = n(388032),
    m = n(486014);
function g(e, t, n, g) {
    if (s.Z.isNotificationDisabled(d.n0.RequestToStream)) return null;
    let b = t.username,
        y = p.intl.format(m.default.jTbTAF, {
            username: "",
            game: n.name,
        }),
        O = t.getAvatarURL(e.guild_id, 80),
        { trackView: v, trackClick: E } = (0, u.Rg)(d.n0.RequestToStream, {
            notif_type: d.n0.RequestToStream,
            notif_user_id: t.id,
            activity_type: f.mFx.STREAM_REQUEST,
            activity_name: g.name,
        });
    return {
        icon: O,
        title: b,
        body: y,
        confirmText: p.intl.string(m.default.UGbmBp),
        cancelText: p.intl.string(p.t["tpXzJ+"]),
        onNotificationShow: () => {
            v();
        },
        onConfirmClick: (e, t) => {
            let n = o.Z.getState().preset;
            if (n === h.ApplicationStreamPresets.PRESET_DOCUMENTS) {
                let { allowAutoQuality: e } = (0, l.IK)({ location: "requestToStreamNotification" });
                n = e ? h.ApplicationStreamPresets.PRESET_AUTO : h.ApplicationStreamPresets.PRESET_VIDEO;
            }
            (0, a.Z)(c.Z.getTargetPID(), { preset: n }), E("request-to-stream"), i.Z.updateNotificationStatus(t);
        },
        onCancelClick: (t, n) => {
            (0, r.ack)(
                e.id,
                {
                    section: f.jXE.OVERLAY,
                    object: f.qAy.ACK_DECLINE_REQUEST_TO_STREAM,
                    objectType: f.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                },
                !0,
                !0,
            ),
                i.Z.updateNotificationStatus(n),
                E("decline");
        },
        onDismissClick: () => {
            E("dismiss");
        },
    };
}
