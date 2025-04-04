n.d(t, {
    oW: () => p,
    p: () => _
});
var r = n(381499),
    i = n(668781),
    o = n(246133),
    a = n(695346),
    s = n(675478),
    l = n(885110),
    c = n(626135),
    u = n(468788),
    d = n(981631),
    f = n(388032);
function _() {
    let e = a.QZ.useSetting(),
        t = a.fv.useSetting();
    return e && ('0' === t || new Date(Number(t)).getTime() - new Date().getTime() > 0);
}
function p(e, t) {
    let n = a.QZ.getSetting();
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
                title: f.NW.string(f.t['B+cbLS']),
                body: f.NW.string(f.t.CYVgLC),
                cancelText: f.NW.string(f.t.f3Pet7),
                confirmText: f.NW.string(f.t.BddRzc),
                onConfirm: () => {
                    (0, o.Z)({ nextStatus: d.Skl.ONLINE });
                }
            });
}
