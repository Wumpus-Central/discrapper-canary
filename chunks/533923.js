n.d(t, { A: () => p });
var i = n(684013),
    l = n(334738),
    a = n(258585),
    s = n(72432),
    r = n(929921),
    o = n(592598),
    d = n(395011),
    u = n(581730),
    c = n(672396),
    h = n(652215),
    A = n(753070),
    m = n(985018),
    g = n(55705);
function p(e, t, n, p) {
    if (o.A.isNotificationDisabled(c.KS.RequestToStream)) return null;
    let f = t.username,
        _ = m.intl.format(g.default.jTbTAF, { username: "", game: n.name }),
        E = t.getAvatarURL(e.guild_id, 80),
        { trackView: x, trackClick: S } = (0, u.Y9)(c.KS.RequestToStream, {
            notif_type: c.KS.RequestToStream,
            notif_user_id: t.id,
            activity_type: h.xL.STREAM_REQUEST,
            activity_name: p.name,
        });
    return {
        icon: E,
        title: f,
        body: _,
        confirmText: m.intl.string(g.default.UGbmBp),
        cancelText: m.intl.string(m.t["tpXzJ+"]),
        onNotificationShow: () => {
            x();
        },
        onConfirmClick: (e, t) => {
            let n = r.A.getState().preset;
            if (n === A.jQ.PRESET_DOCUMENTS) {
                let { allowAutoQuality: e } = (0, a.eO)({ location: "requestToStreamNotification" });
                n = e ? A.jQ.PRESET_AUTO : A.jQ.PRESET_VIDEO;
            }
            (0, s.A)(d.A.getTargetPID(), { preset: n }), S("request-to-stream"), i.A.updateNotificationStatus(t);
        },
        onCancelClick: (t, n) => {
            (0, l.ack)(
                e.id,
                {
                    section: h.JJy.OVERLAY,
                    object: h.ZSU.ACK_DECLINE_REQUEST_TO_STREAM,
                    objectType: h.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                },
                !0,
                !0,
            ),
                i.A.updateNotificationStatus(n),
                S("decline");
        },
        onDismissClick: () => {
            S("dismiss");
        },
    };
}
