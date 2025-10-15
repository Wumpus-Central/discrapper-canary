n.d(t, { Z: () => p });
var i = n(278323),
    r = n(13245),
    l = n(45114),
    o = n(237997),
    a = n(145597),
    s = n(624864),
    u = n(620954),
    c = n(987650),
    d = n(981631),
    h = n(388032);
function p(e, t, n, p) {
    if (s.Z.isNotificationDisabled(c.n0.ActivityInvite)) return null;
    let f = t.username,
        m = h.intl.format(h.t.VDODnp, {
            username: "",
            game: n.name,
        }),
        g = t.getAvatarURL(e.guild_id, 80),
        { trackView: y, trackClick: O } = (0, u.R)(c.n0.ActivityInvite, {
            notif_type: c.n0.ActivityInvite,
            notif_user_id: t.id,
            activity_type: d.mFx.JOIN_REQUEST,
            activity_name: p.name,
        });
    return {
        icon: g,
        title: f,
        body: m,
        confirmText: h.intl.string(h.t["fgP/wc"]),
        cancelText: h.intl.string(h.t.tpXzJy),
        onNotificationShow: () => {
            y();
        },
        onConfirmClick: (t, n) => {
            i.Z.sendActivityInvite({
                channelId: e.id,
                type: d.mFx.JOIN,
                activity: p,
                location: o.default.isLocked((0, a.getPID)()) ? d.Sbl.LOCKED_OVERLAY : d.Sbl.UNLOCKED_OVERLAY,
            }),
                O("join"),
                r.Z.updateNotificationStatus(n);
        },
        onCancelClick: (t, n) => {
            (0, l.In)(
                e.id,
                {
                    section: d.jXE.OVERLAY,
                    object: d.qAy.ACK_DECLINE_REQUEST_TO_JOIN,
                    objectType: d.Qqv.ACK_SEMI_AUTOMATIC,
                },
                !0,
                !0,
            ),
                r.Z.updateNotificationStatus(n),
                O("decline");
        },
        onDismissClick: () => {
            O("dismiss");
        },
    };
}
