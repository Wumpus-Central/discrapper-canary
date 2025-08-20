n.d(t, { Z: () => c });
var r = n(442837),
    i = n(846027),
    l = n(314897),
    a = n(131951),
    o = n(981631),
    s = n(65154);
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.Yn.DEFAULT,
        n = (0, r.e7)([l.default], () => l.default.getId()),
        c = (0, r.e7)([a.Z], () => a.Z.supports(s.AN.DISABLE_VIDEO)),
        u = (0, r.e7)([a.Z], () => a.Z.isLocalVideoDisabled(n, t), [n, t]);
    return [
        (null == e || e === n) && c,
        u,
        (e) => {
            let r = e ? o.ZUi.DISABLED : o.ZUi.MANUAL_ENABLED;
            i.Z.setDisableLocalVideo(n, r, t);
        },
    ];
}
