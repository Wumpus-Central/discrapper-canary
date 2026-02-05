i.d(e, { h: () => a });
var n = i(253932),
    l = i(954571),
    s = i(406535),
    r = i(652215);
function a(t) {
    n.NR.updateSetting(t),
        l.default.track(r.HAw.NOTIFICATION_SETTINGS_UPDATED, {
            update_type: s.Y.ACCOUNT,
            friend_online_notifications: t,
        });
}
