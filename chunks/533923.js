i.d(e, { A: () => I });
var n = i(684013),
    l = i(334738),
    a = i(258585),
    r = i(72432),
    s = i(929921),
    o = i(616356),
    u = i(592598),
    c = i(395011),
    d = i(581730),
    A = i(672396),
    f = i(652215),
    y = i(753070),
    p = i(985018),
    m = i(783198);
function I(t, e, i, I) {
    if (u.A.isNotificationDisabled(A.KS.RequestToStream) || null != o.A.getCurrentUserActiveStream()) return null;
    let g = e.username,
        E = p.intl.format(m.default.jTbTAF, { username: "", game: i.name }),
        N = e.getAvatarURL(t.guild_id, 80),
        { trackView: _, trackClick: T } = (0, d.Y9)(A.KS.RequestToStream, {
            notif_type: A.KS.RequestToStream,
            notif_user_id: e.id,
            activity_type: f.xL.STREAM_REQUEST,
            activity_name: I.name,
        });
    return {
        icon: N,
        title: g,
        body: E,
        confirmText: p.intl.string(m.default.UGbmBp),
        cancelText: p.intl.string(p.t["tpXzJ+"]),
        onNotificationShow: () => {
            _();
        },
        onConfirmClick: (t, e) => {
            let i = s.A.getState().preset;
            if (i === y.jQ.PRESET_DOCUMENTS) {
                let { allowAutoQuality: t } = (0, a.eO)({ location: "requestToStreamNotification" });
                i = t ? y.jQ.PRESET_AUTO : y.jQ.PRESET_VIDEO;
            }
            (0, r.A)(c.A.getTargetPID(), { preset: i }), T("request-to-stream"), n.A.updateNotificationStatus(e);
        },
        onCancelClick: (e, i) => {
            (0, l.ack)(
                t.id,
                {
                    section: f.JJy.OVERLAY,
                    object: f.ZSU.ACK_DECLINE_REQUEST_TO_STREAM,
                    objectType: f.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                },
                !0,
                !0,
            ),
                n.A.updateNotificationStatus(i),
                T("decline");
        },
        onDismissClick: () => {
            T("dismiss");
        },
    };
}
