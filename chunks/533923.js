"use strict";
n.d(t, { A: () => E });
var r = n(684013),
    i = n(334738),
    s = n(258585),
    a = n(72432),
    o = n(929921),
    l = n(616356),
    u = n(592598),
    c = n(395011),
    d = n(581730),
    _ = n(672396),
    f = n(652215),
    p = n(753070),
    h = n(985018),
    m = n(55705);
function E(e, t, n, E) {
    if (u.A.isNotificationDisabled(_.KS.RequestToStream) || null != l.A.getCurrentUserActiveStream()) return null;
    let g = t.username,
        A = h.intl.format(m.default.jTbTAF, { username: "", game: n.name }),
        I = t.getAvatarURL(e.guild_id, 80),
        { trackView: T, trackClick: S } = (0, d.Y9)(_.KS.RequestToStream, {
            notif_type: _.KS.RequestToStream,
            notif_user_id: t.id,
            activity_type: f.xL.STREAM_REQUEST,
            activity_name: E.name,
        });
    return {
        icon: I,
        title: g,
        body: A,
        confirmText: h.intl.string(m.default.UGbmBp),
        cancelText: h.intl.string(h.t["tpXzJ+"]),
        onNotificationShow: () => {
            T();
        },
        onConfirmClick: (e, t) => {
            let n = o.A.getState().preset;
            if (n === p.jQ.PRESET_DOCUMENTS) {
                let { allowAutoQuality: e } = (0, s.eO)({ location: "requestToStreamNotification" });
                n = e ? p.jQ.PRESET_AUTO : p.jQ.PRESET_VIDEO;
            }
            (0, a.A)(c.A.getTargetPID(), { preset: n }), S("request-to-stream"), r.A.updateNotificationStatus(t);
        },
        onCancelClick: (t, n) => {
            (0, i.ack)(
                e.id,
                {
                    section: f.JJy.OVERLAY,
                    object: f.ZSU.ACK_DECLINE_REQUEST_TO_STREAM,
                    objectType: f.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                },
                !0,
                !0,
            ),
                r.A.updateNotificationStatus(n),
                S("decline");
        },
        onDismissClick: () => {
            S("dismiss");
        },
    };
}
