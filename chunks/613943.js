l.d(t, { A: () => s }), l(321073), l(896048);
var r = l(554146),
    n = l(379848),
    i = l(553103);
function s(e) {
    let { shouldShow: t, notificationConfig: l } = (0, i.A)(e, "GuildPowerupNotificationContainer"),
        s = [];
    t && null != l && s.push(r.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION);
    let [o, a] = (0, n.ww)(s, e);
    return {
        shouldShow: null != o && o === r.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION,
        notificationConfig: l,
        markAsDismissed: a,
    };
}
