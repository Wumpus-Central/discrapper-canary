n.d(t, {
    O: () => o,
});
var r = n(253932),
    i = n(954571),
    a = n(652215),
    s = n(406535);

function o(e) {
    r.oz.updateSetting(e),
        i.default.track(a.HAw.NOTIFICATION_SETTINGS_UPDATED, {
            update_type: s.Y.ACCOUNT,
            friend_anniversary_notifications: e,
        });
}
