i.d(e, { A: () => A });
var n = i(308368),
    l = i(684013),
    a = i(334738),
    r = i(592598),
    s = i(481484),
    o = i(581730),
    u = i(672396),
    c = i(652215),
    d = i(985018);
function A(t, e, i, A) {
    if (r.A.isNotificationDisabled(u.KS.ActivityInvite)) return null;
    let f = e.username,
        y = d.intl.format(d.t.VDODnv, { username: "", game: i.name }),
        p = e.getAvatarURL(t.guild_id, 80),
        { trackView: m, trackClick: I } = (0, o.Y9)(u.KS.ActivityInvite, {
            notif_type: u.KS.ActivityInvite,
            notif_user_id: e.id,
            activity_type: c.xL.JOIN_REQUEST,
            activity_name: A.name,
        });
    return {
        icon: p,
        title: f,
        body: y,
        confirmText: d.intl.string(d.t["fgP/wX"]),
        cancelText: d.intl.string(d.t["tpXzJ+"]),
        onNotificationShow: () => {
            m();
        },
        onConfirmClick: (e, i) => {
            n.A.sendActivityInvite({
                channelId: t.id,
                type: c.xL.JOIN,
                activity: A,
                location: (0, s.y)() ? c.ThZ.LOCKED_OVERLAY : c.ThZ.UNLOCKED_OVERLAY,
            }),
                I("join"),
                l.A.updateNotificationStatus(i);
        },
        onCancelClick: (e, i) => {
            (0, a.ack)(
                t.id,
                {
                    section: c.JJy.OVERLAY,
                    object: c.ZSU.ACK_DECLINE_REQUEST_TO_JOIN,
                    objectType: c.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                },
                !0,
                !0,
            ),
                l.A.updateNotificationStatus(i),
                I("decline");
        },
        onDismissClick: () => {
            I("dismiss");
        },
    };
}
