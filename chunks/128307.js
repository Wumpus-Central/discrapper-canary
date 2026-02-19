"use strict";
n.d(t, { A: () => _ });
var r = n(308368),
    i = n(684013),
    s = n(334738),
    a = n(592598),
    o = n(481484),
    l = n(581730),
    u = n(672396),
    c = n(652215),
    d = n(985018);
function _(e, t, n, _) {
    if (a.A.isNotificationDisabled(u.KS.ActivityInvite)) return null;
    let f = t.username,
        p = d.intl.format(d.t.VDODnv, { username: "", game: n.name }),
        h = t.getAvatarURL(e.guild_id, 80),
        { trackView: m, trackClick: E } = (0, l.Y9)(u.KS.ActivityInvite, {
            notif_type: u.KS.ActivityInvite,
            notif_user_id: t.id,
            activity_type: c.xL.JOIN_REQUEST,
            activity_name: _.name,
        });
    return {
        icon: h,
        title: f,
        body: p,
        confirmText: d.intl.string(d.t["fgP/wX"]),
        cancelText: d.intl.string(d.t["tpXzJ+"]),
        onNotificationShow: () => {
            m();
        },
        onConfirmClick: (t, n) => {
            r.A.sendActivityInvite({
                channelId: e.id,
                type: c.xL.JOIN,
                activity: _,
                location: (0, o.y)() ? c.ThZ.LOCKED_OVERLAY : c.ThZ.UNLOCKED_OVERLAY,
            }),
                E("join"),
                i.A.updateNotificationStatus(n);
        },
        onCancelClick: (t, n) => {
            (0, s.ack)(
                e.id,
                {
                    section: c.JJy.OVERLAY,
                    object: c.ZSU.ACK_DECLINE_REQUEST_TO_JOIN,
                    objectType: c.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                },
                !0,
                !0,
            ),
                i.A.updateNotificationStatus(n),
                E("decline");
        },
        onDismissClick: () => {
            E("dismiss");
        },
    };
}
