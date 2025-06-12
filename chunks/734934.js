n.d(t, {
    oW: () => p,
    p: () => f
});
var r = n(381499),
    i = n(668781),
    a = n(246133),
    o = n(695346),
    s = n(675478),
    l = n(885110),
    c = n(626135),
    u = n(468788),
    d = n(981631),
    _ = n(388032);
function f() {
    let e = o.QZ.useSetting(),
        t = o.fv.useSetting();
    return e && ('0' === t || new Date(Number(t)).getTime() - new Date().getTime() > 0);
}
function p(e, t) {
    let n = o.QZ.getSetting();
    s.hW.updateAsync(
        'notifications',
        (n) => {
            (n.quietMode = r.D5.create({ value: e })), (n.focusModeExpiresAtMs = e && null != t ? ''.concat(Date.now() + t) : '0');
        },
        s.fy.INFREQUENT_USER_ACTION
    ),
        c.default.track(d.rMx.NOTIFICATION_SETTINGS_UPDATED, {
            update_type: u.I.ACCOUNT,
            quiet_mode_enabled: e,
            quiet_mode_enabled_old: n
        }),
        l.Z.getStatus() === d.Skl.DND &&
            e &&
            null == t &&
            i.Z.show({
                title: _.intl.string(_.t['B+cbLS']),
                body: _.intl.string(_.t.CYVgLC),
                cancelText: _.intl.string(_.t.f3Pet7),
                confirmText: _.intl.string(_.t.BddRzc),
                onConfirm: () => {
                    (0, a.Z)({ nextStatus: d.Skl.ONLINE });
                }
            });
}
