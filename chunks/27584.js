n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(442837),
    l = n(846027),
    r = n(314897),
    a = n(131951),
    s = n(981631),
    o = n(65154);
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Yn.DEFAULT,
        n = (0, i.e7)([r.default], () => r.default.getId()),
        c = (0, i.e7)([a.Z], () => a.Z.supports(o.AN.DISABLE_VIDEO) && a.Z.isVideoEnabled()),
        d = (0, i.e7)([a.Z], () => a.Z.isLocalVideoDisabled(n, t), [n, t]),
        u = null == e || e === n;
    return [
        u && (c || d),
        d,
        (e) => {
            let i = e ? s.ZUi.DISABLED : s.ZUi.MANUAL_ENABLED;
            l.Z.setDisableLocalVideo(n, i, t);
        }
    ];
}
