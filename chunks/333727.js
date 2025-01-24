i.d(e, {
    Z: function () {
        return h;
    }
});
var n = i(278323),
    l = i(13245),
    o = i(45114),
    r = i(237997),
    s = i(145597),
    a = i(620954),
    u = i(987650),
    d = i(981631),
    c = i(388032);
function h(t, e, i, h) {
    let E = e.username,
        p = c.intl.format(c.t.VDODnp, {
            username: '',
            game: i.name
        }),
        f = e.getAvatarURL(t.guild_id, 80),
        { trackView: S, trackClick: _ } = (0, a.R)(u.n0.ActivityInvite, {
            notif_type: u.n0.ActivityInvite,
            notif_user_id: e.id,
            activity_type: d.mFx.JOIN_REQUEST,
            activity_name: h.name
        });
    return {
        icon: f,
        title: E,
        body: p,
        confirmText: c.intl.string(c.t['fgP/wc']),
        cancelText: c.intl.string(c.t.tpXzJy),
        onNotificationShow: () => {
            S();
        },
        onConfirmClick: (e, i) => {
            n.Z.sendActivityInvite({
                channelId: t.id,
                type: d.mFx.JOIN,
                activity: h,
                location: r.Z.isLocked((0, s.QF)()) ? d.Sbl.LOCKED_OVERLAY : d.Sbl.UNLOCKED_OVERLAY
            }),
                _('join'),
                l.Z.updateNotificationStatus(i);
        },
        onCancelClick: (e, i) => {
            (0, o.In)(t.id, !0, !0), l.Z.updateNotificationStatus(i), _('decline');
        },
        onDismissClick: () => {
            _('dismiss');
        }
    };
}
