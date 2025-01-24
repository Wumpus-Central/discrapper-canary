e.d(t, {
    Z: function () {
        return d;
    }
});
var r = e(442837),
    i = e(846027),
    u = e(314897),
    l = e(131951),
    a = e(981631),
    o = e(65154);
function d(n) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Yn.DEFAULT,
        e = (0, r.e7)([u.default], () => u.default.getId()),
        d = (0, r.e7)([l.Z], () => l.Z.supports(o.AN.DISABLE_VIDEO) && l.Z.isVideoEnabled()),
        c = (0, r.e7)([l.Z], () => l.Z.isLocalVideoDisabled(e, t), [e, t]),
        s = null == n || n === e;
    return [
        s && (d || c),
        c,
        (n) => {
            let r = n ? a.ZUi.DISABLED : a.ZUi.MANUAL_ENABLED;
            i.Z.setDisableLocalVideo(e, r, t);
        }
    ];
}
