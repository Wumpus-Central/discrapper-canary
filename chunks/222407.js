e.d(i, { I: () => p, i: () => u });
var n = e(73153),
    T = e(93465),
    I = e(870373),
    _ = e(592598),
    d = e(652215);
function p(t, i) {
    let e = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return (
        t === T.M.GAME_ACTIVITY && e && (0, I.g)(d.HAw.OVERLAY_GAME_INVITE_SETTINGS_UPDATED, { muted: i }),
        n.h.dispatch({ type: "OVERLAY_SET_NOTIFICATION_DISABLED_SETTING", setting: t, disabled: i, shouldTrack: e })
    );
}
function u(t, i) {
    let e = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        n = _.A.getDisabledSettingByNotificationType(t);
    if (null != n) return p(n, i, e);
}
