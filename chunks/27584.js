t.d(e, {
    Z: function () {
        return u;
    }
});
var i = t(442837),
    r = t(846027),
    l = t(314897),
    a = t(131951),
    o = t(981631),
    d = t(65154);
function u(n) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.Yn.DEFAULT,
        t = (0, i.e7)([l.default], () => l.default.getId()),
        u = (0, i.e7)([a.Z], () => a.Z.supports(d.AN.DISABLE_VIDEO) && a.Z.isVideoEnabled()),
        s = (0, i.e7)([a.Z], () => a.Z.isLocalVideoDisabled(t, e), [t, e]),
        c = null == n || n === t;
    return [
        c && (u || s),
        s,
        (n) => {
            let i = n ? o.ZUi.DISABLED : o.ZUi.MANUAL_ENABLED;
            r.Z.setDisableLocalVideo(t, i, e);
        }
    ];
}
