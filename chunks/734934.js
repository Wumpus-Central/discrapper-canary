r.d(n, {
    oW: function () {
        return _;
    },
    p: function () {
        return h;
    }
});
var i = r(381499),
    a = r(668781),
    o = r(246133),
    s = r(695346),
    l = r(675478),
    u = r(885110),
    c = r(626135),
    d = r(468788),
    f = r(981631),
    p = r(388032);
function h() {
    let e = s.QZ.useSetting(),
        n = s.fv.useSetting();
    return e && ('0' === n || new Date(Number(n)).getTime() - new Date().getTime() > 0);
}
function _(e, n) {
    let r = s.QZ.getSetting();
    l.hW.updateAsync(
        'notifications',
        (r) => {
            (r.quietMode = i.D5.create({ value: e })), (r.focusModeExpiresAtMs = e && null != n ? ''.concat(Date.now() + n) : '0');
        },
        l.fy.INFREQUENT_USER_ACTION
    ),
        c.default.track(f.rMx.NOTIFICATION_SETTINGS_UPDATED, {
            update_type: d.I.ACCOUNT,
            quiet_mode_enabled: e,
            quiet_mode_enabled_old: r
        }),
        u.Z.getStatus() === f.Skl.DND &&
            e &&
            null == n &&
            a.Z.show({
                title: p.intl.string(p.t['B+cbLS']),
                body: p.intl.string(p.t.CYVgLC),
                cancelText: p.intl.string(p.t.f3Pet7),
                confirmText: p.intl.string(p.t.BddRzc),
                onConfirm: () => {
                    (0, o.Z)(f.Skl.ONLINE);
                }
            });
}
