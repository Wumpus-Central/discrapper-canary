n.d(t, { Z: () => c });
var r = n(442837),
    l = n(846027),
    i = n(314897),
    o = n(131951),
    a = n(981631),
    u = n(65154);
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.Yn.DEFAULT,
        n = (0, r.e7)([i.default], () => i.default.getId()),
        c = (0, r.e7)([o.Z], () => o.Z.supports(u.AN.DISABLE_VIDEO)),
        d = (0, r.e7)([o.Z], () => o.Z.isLocalVideoDisabled(n, t), [n, t]);
    return [
        (null == e || e === n) && c,
        d,
        (e) => {
            let r = e ? a.ZUi.DISABLED : a.ZUi.MANUAL_ENABLED;
            l.Z.setDisableLocalVideo(n, r, t);
        }
    ];
}
