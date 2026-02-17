n.d(t, { A: () => f });
var i = n(684013),
    l = n(334738),
    a = n(258585),
    s = n(72432),
    r = n(929921),
    o = n(616356),
    d = n(592598),
    u = n(395011),
    c = n(581730),
    h = n(672396),
    A = n(652215),
    m = n(753070),
    p = n(985018),
    g = n(426127);
function f(e, t, n, f) {
    if (d.A.isNotificationDisabled(h.KS.RequestToStream) || null != o.A.getCurrentUserActiveStream()) return null;
    let _ = t.username,
        E = p.intl.format(g.default.jTbTAF, { username: "", game: n.name }),
        x = t.getAvatarURL(e.guild_id, 80),
        { trackView: S, trackClick: I } = (0, c.Y9)(h.KS.RequestToStream, {
            notif_type: h.KS.RequestToStream,
            notif_user_id: t.id,
            activity_type: A.xL.STREAM_REQUEST,
            activity_name: f.name,
        });
    return {
        icon: x,
        title: _,
        body: E,
        confirmText: p.intl.string(g.default.UGbmBp),
        cancelText: p.intl.string(p.t["tpXzJ+"]),
        onNotificationShow: () => {
            S();
        },
        onConfirmClick: (e, t) => {
            let n = r.A.getState().preset;
            if (n === m.jQ.PRESET_DOCUMENTS) {
                let { allowAutoQuality: e } = (0, a.eO)({ location: "requestToStreamNotification" });
                n = e ? m.jQ.PRESET_AUTO : m.jQ.PRESET_VIDEO;
            }
            (0, s.A)(u.A.getTargetPID(), { preset: n }), I("request-to-stream"), i.A.updateNotificationStatus(t);
        },
        onCancelClick: (t, n) => {
            (0, l.ack)(
                e.id,
                {
                    section: A.JJy.OVERLAY,
                    object: A.ZSU.ACK_DECLINE_REQUEST_TO_STREAM,
                    objectType: A.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                },
                !0,
                !0,
            ),
                i.A.updateNotificationStatus(n),
                I("decline");
        },
        onDismissClick: () => {
            I("dismiss");
        },
    };
}
