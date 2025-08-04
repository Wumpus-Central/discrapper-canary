n.d(t, { Z: () => f });
var i = n(13245),
    r = n(45114),
    o = n(562224),
    l = n(145597),
    a = n(620954),
    s = n(987650),
    c = n(981631),
    u = n(37113),
    d = n(388032),
    p = n(704483);
function f(e, t, n, f) {
    let h = t.username,
        m = d.intl.format(p.default.jTbTAA, {
            username: '',
            game: n.name
        }),
        g = t.getAvatarURL(e.guild_id, 80),
        { trackView: y, trackClick: O } = (0, a.R)(s.n0.RequestToStream, {
            notif_type: s.n0.RequestToStream,
            notif_user_id: t.id,
            activity_type: c.mFx.STREAM_REQUEST,
            activity_name: f.name
        });
    return {
        icon: g,
        title: h,
        body: m,
        confirmText: d.intl.string(d.t['fgP/wc']),
        cancelText: d.intl.string(d.t.tpXzJy),
        onNotificationShow: () => {
            y();
        },
        onConfirmClick: (e, t) => {
            ((0, o.Z)((0, l.getPID)(), { preset: u.tI.PRESET_VIDEO }), O('request-to-stream'), i.Z.updateNotificationStatus(t));
        },
        onCancelClick: (t, n) => {
            ((0, r.In)(
                e.id,
                {
                    section: c.jXE.OVERLAY,
                    object: c.qAy.ACK_DECLINE_REQUEST_TO_STREAM,
                    objectType: c.Qqv.ACK_SEMI_AUTOMATIC
                },
                !0,
                !0
            ),
                i.Z.updateNotificationStatus(n),
                O('decline'));
        },
        onDismissClick: () => {
            O('dismiss');
        }
    };
}
