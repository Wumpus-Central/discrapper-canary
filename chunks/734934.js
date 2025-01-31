n.d(t, {
    oW: () => p,
    p: () => _
});
var i = n(381499),
    r = n(668781),
    a = n(246133),
    s = n(695346),
    o = n(675478),
    l = n(885110),
    u = n(626135),
    c = n(468788),
    d = n(981631),
    f = n(388032);
function _() {
    let e = s.QZ.useSetting(),
        t = s.fv.useSetting();
    return e && ('0' === t || new Date(Number(t)).getTime() - new Date().getTime() > 0);
}
function p(e, t) {
    let n = s.QZ.getSetting();
    o.hW.updateAsync(
        'notifications',
        (n) => {
            (n.quietMode = i.D5.create({ value: e })), (n.focusModeExpiresAtMs = e && null != t ? ''.concat(Date.now() + t) : '0');
        },
        o.fy.INFREQUENT_USER_ACTION
    ),
        u.default.track(d.rMx.NOTIFICATION_SETTINGS_UPDATED, {
            update_type: c.I.ACCOUNT,
            quiet_mode_enabled: e,
            quiet_mode_enabled_old: n
        }),
        l.Z.getStatus() === d.Skl.DND &&
            e &&
            null == t &&
            r.Z.show({
                title: f.intl.string(f.t['B+cbLS']),
                body: f.intl.string(f.t.CYVgLC),
                cancelText: f.intl.string(f.t.f3Pet7),
                confirmText: f.intl.string(f.t.BddRzc),
                onConfirm: () => {
                    (0, a.Z)(d.Skl.ONLINE);
                }
            });
}
