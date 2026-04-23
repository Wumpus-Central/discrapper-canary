n.d(t, { l: () => r });
var i = n(253932),
    s = n(954571),
    l = n(406535),
    a = n(652215);
function r(e) {
    i.zS.updateSetting(e),
        s.default.track(a.HAw.NOTIFICATION_SETTINGS_UPDATED, {
            update_type: l.Y.ACCOUNT,
            upcoming_server_event_notifications: e,
        });
}
