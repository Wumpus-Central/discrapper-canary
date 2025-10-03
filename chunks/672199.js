n.d(t, { Z: () => f });
var i = n(13245),
    r = n(45114),
    l = n(562224),
    o = n(145597),
    a = n(624864),
    s = n(620954),
    u = n(987650),
    c = n(981631),
    d = n(37113),
    h = n(388032),
    p = n(658805);
function f(e, t, n, f) {
    if (a.Z.isNotificationDisabled(u.n0.RequestToStream)) return null;
    let m = t.username,
        g = h.intl.format(p.default.jTbTAA, {
            username: "",
            game: n.name,
        }),
        y = t.getAvatarURL(e.guild_id, 80),
        { trackView: O, trackClick: v } = (0, s.R)(u.n0.RequestToStream, {
            notif_type: u.n0.RequestToStream,
            notif_user_id: t.id,
            activity_type: c.mFx.STREAM_REQUEST,
            activity_name: f.name,
        });
    return {
        icon: y,
        title: m,
        body: g,
        confirmText: h.intl.string(p.default.UGbmBg),
        cancelText: h.intl.string(h.t.tpXzJy),
        onNotificationShow: () => {
            O();
        },
        onConfirmClick: (e, t) => {
            (0, l.Z)((0, o.getPID)(), { preset: d.tI.PRESET_VIDEO }),
                v("request-to-stream"),
                i.Z.updateNotificationStatus(t);
        },
        onCancelClick: (t, n) => {
            (0, r.In)(
                e.id,
                {
                    section: c.jXE.OVERLAY,
                    object: c.qAy.ACK_DECLINE_REQUEST_TO_STREAM,
                    objectType: c.Qqv.ACK_SEMI_AUTOMATIC,
                },
                !0,
                !0,
            ),
                i.Z.updateNotificationStatus(n),
                v("decline");
        },
        onDismissClick: () => {
            v("dismiss");
        },
    };
}
