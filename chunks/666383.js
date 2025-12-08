n.d(t, { $: () => s });
var r = n(695346),
    i = n(626135),
    a = n(981631),
    o = n(468788);
function s(e) {
    r.vc.updateSetting(e),
        i.default.track(a.rMx.NOTIFICATION_SETTINGS_UPDATED, {
            update_type: o.I.ACCOUNT,
            friend_anniversary_notifications: e,
        });
}
