n.d(t, { Z: () => u });
var r = n(442837),
    i = n(846027),
    o = n(314897),
    l = n(131951),
    c = n(981631),
    a = n(65154);
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Yn.DEFAULT,
        n = (0, r.e7)([o.default], () => o.default.getId()),
        u = (0, r.e7)([l.Z], () => l.Z.supports(a.AN.DISABLE_VIDEO)),
        s = (0, r.e7)([l.Z], () => l.Z.isLocalVideoDisabled(n, t), [n, t]);
    return [
        (null == e || e === n) && u,
        s,
        (e) => {
            let r = e ? c.ZUi.DISABLED : c.ZUi.MANUAL_ENABLED;
            i.Z.setDisableLocalVideo(n, r, t);
        }
    ];
}
