t.d(n, { Z: () => d });
var i = t(442837),
    l = t(846027),
    a = t(314897),
    r = t(131951),
    o = t(981631),
    u = t(65154);
function d(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.Yn.DEFAULT,
        t = (0, i.e7)([a.default], () => a.default.getId()),
        d = (0, i.e7)([r.Z], () => r.Z.supports(u.AN.DISABLE_VIDEO)),
        s = (0, i.e7)([r.Z], () => r.Z.isLocalVideoDisabled(t, n), [t, n]);
    return [
        (null == e || e === t) && d,
        s,
        (e) => {
            let i = e ? o.ZUi.DISABLED : o.ZUi.MANUAL_ENABLED;
            l.Z.setDisableLocalVideo(t, i, n);
        }
    ];
}
