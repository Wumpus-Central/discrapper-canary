n.d(t, {
    l: () => o,
});
var r = n(253932),
    i = n(954571),
    a = n(652215),
    s = n(406535);

function o(e) {
    r.JV.updateSetting(e),
        i.default.track(a.HAw.NOTIFICATION_SETTINGS_UPDATED, {
            update_type: s.Y.ACCOUNT,
            game_update_notifications: e,
        });
}
