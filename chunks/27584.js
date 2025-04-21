n.d(t, { Z: () => d });
var i = n(442837),
    r = n(846027),
    l = n(314897),
    a = n(131951),
    o = n(981631),
    u = n(65154);
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.Yn.DEFAULT,
        n = (0, i.e7)([l.default], () => l.default.getId()),
        d = (0, i.e7)([a.Z], () => a.Z.supports(u.AN.DISABLE_VIDEO)),
        s = (0, i.e7)([a.Z], () => a.Z.isLocalVideoDisabled(n, t), [n, t]);
    return [
        (null == e || e === n) && d,
        s,
        (e) => {
            let i = e ? o.ZUi.DISABLED : o.ZUi.MANUAL_ENABLED;
            r.Z.setDisableLocalVideo(n, i, t);
        }
    ];
}
