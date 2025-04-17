n.d(t, { Z: () => c });
var r = n(442837),
    i = n(846027),
    l = n(314897),
    o = n(131951),
    a = n(981631),
    u = n(65154);
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.Yn.DEFAULT,
        n = (0, r.e7)([l.default], () => l.default.getId()),
        c = (0, r.e7)([o.Z], () => o.Z.supports(u.AN.DISABLE_VIDEO)),
        s = (0, r.e7)([o.Z], () => o.Z.isLocalVideoDisabled(n, t), [n, t]);
    return [
        (null == e || e === n) && c,
        s,
        (e) => {
            let r = e ? a.ZUi.DISABLED : a.ZUi.MANUAL_ENABLED;
            i.Z.setDisableLocalVideo(n, r, t);
        }
    ];
}
