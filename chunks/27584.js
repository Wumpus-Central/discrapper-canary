r.d(t, { Z: () => u });
var n = r(442837),
    o = r(846027),
    i = r(314897),
    l = r(131951),
    c = r(981631),
    a = r(65154);
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Yn.DEFAULT,
        r = (0, n.e7)([i.default], () => i.default.getId()),
        u = (0, n.e7)([l.Z], () => l.Z.supports(a.AN.DISABLE_VIDEO)),
        s = (0, n.e7)([l.Z], () => l.Z.isLocalVideoDisabled(r, t), [r, t]);
    return [
        (null == e || e === r) && u,
        s,
        (e) => {
            let n = e ? c.ZUi.DISABLED : c.ZUi.MANUAL_ENABLED;
            o.Z.setDisableLocalVideo(r, n, t);
        },
    ];
}
