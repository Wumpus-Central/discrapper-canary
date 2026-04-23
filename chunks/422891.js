n.d(t, { h: () => r });
var i = n(253932),
    s = n(954571),
    l = n(406535),
    a = n(652215);
function r(e) {
    i.NR.updateSetting(e),
        s.default.track(a.HAw.NOTIFICATION_SETTINGS_UPDATED, {
            update_type: l.Y.ACCOUNT,
            friend_online_notifications: e,
        });
}
