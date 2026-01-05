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
    h = n(981631),
    p = n(37113),
    f = n(388032),
    m = n(486014);
function g(e, t, n, g) {
    if (s.Z.isNotificationDisabled(d.n0.RequestToStream)) return null;
    let O = t.username,
        y = f.intl.format(m.default.jTbTAF, {
            username: "",
            game: n.name,
        }),
        E = t.getAvatarURL(e.guild_id, 80),
        { trackView: v, trackClick: b } = (0, c.Rg)(d.n0.RequestToStream, {
            notif_type: d.n0.RequestToStream,
            notif_user_id: t.id,
            activity_type: h.mFx.STREAM_REQUEST,
            activity_name: g.name,
        });
    return {
        icon: E,
        title: O,
        body: y,
        confirmText: f.intl.string(m.default.UGbmBp),
        cancelText: f.intl.string(f.t["tpXzJ+"]),
        onNotificationShow: () => {
            v();
        },
        onConfirmClick: (e, t) => {
            let n = a.Z.getState().preset;
            if (n === p.tI.PRESET_DOCUMENTS) {
                let { allowAutoQuality: e } = (0, l.IK)({ location: "requestToStreamNotification" });
                n = e ? p.tI.PRESET_AUTO : p.tI.PRESET_VIDEO;
            }
            (0, o.Z)(u.Z.getTargetPID(), { preset: n }), b("request-to-stream"), i.Z.updateNotificationStatus(t);
        },
        onCancelClick: (t, n) => {
            (0, r.ack)(
                e.id,
                {
                    section: h.jXE.OVERLAY,
                    object: h.qAy.ACK_DECLINE_REQUEST_TO_STREAM,
                    objectType: h.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                },
                !0,
                !0,
            ),
                i.Z.updateNotificationStatus(n),
                b("decline");
        },
        onDismissClick: () => {
            b("dismiss");
        },
    };
}
