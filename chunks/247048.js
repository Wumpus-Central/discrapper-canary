n.d(t, { Z: () => l }), n(539854), n(388685);
var r = n(704215),
    i = n(243778),
    o = n(839637);
function l(e) {
    let { shouldShow: t, notificationConfig: n } = (0, o.Z)(e, "GuildPowerupNotificationContainer"),
        l = [];
    t && null != n && l.push(r.z.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION);
    let [a, s] = (0, i.ZT)(l, e);
    return {
        shouldShow: null != a && a === r.z.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION,
        notificationConfig: n,
        markAsDismissed: s,
    };
}
