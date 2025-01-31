t.d(n, { Z: () => u });
var i = t(442837),
    l = t(846027),
    a = t(314897),
    r = t(131951),
    d = t(981631),
    o = t(65154);
function u(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Yn.DEFAULT,
        t = (0, i.e7)([a.default], () => a.default.getId()),
        u = (0, i.e7)([r.Z], () => r.Z.supports(o.AN.DISABLE_VIDEO) && r.Z.isVideoEnabled()),
        s = (0, i.e7)([r.Z], () => r.Z.isLocalVideoDisabled(t, n), [t, n]);
    return [
        (null == e || e === t) && (u || s),
        s,
        (e) => {
            let i = e ? d.ZUi.DISABLED : d.ZUi.MANUAL_ENABLED;
            l.Z.setDisableLocalVideo(t, i, n);
        }
    ];
}
