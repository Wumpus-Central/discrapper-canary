n.d(t, {
    k: () => o,
});
var r = n(253932),
    i = n(954571),
    a = n(406535),
    s = n(652215);

function o(e) {
    r.Qr.updateSetting(e),
        i.default.track(s.HAw.NOTIFICATION_SETTINGS_UPDATED, {
            update_type: a.Y.ACCOUNT,
            server_trending_notifications: e,
        });
}
