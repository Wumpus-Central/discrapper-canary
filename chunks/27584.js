n.d(t, { Z: () => u });
var i = n(442837),
    r = n(846027),
    a = n(314897),
    s = n(131951),
    o = n(981631),
    l = n(65154);
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Yn.DEFAULT,
        n = (0, i.e7)([a.default], () => a.default.getId()),
        u = (0, i.e7)([s.Z], () => s.Z.supports(l.AN.DISABLE_VIDEO) && s.Z.isVideoEnabled()),
        c = (0, i.e7)([s.Z], () => s.Z.isLocalVideoDisabled(n, t), [n, t]),
        d = (e) => {
            let i = e ? o.ZUi.DISABLED : o.ZUi.MANUAL_ENABLED;
            r.Z.setDisableLocalVideo(n, i, t);
        };
    return [(null == e || e === n) && (u || c), c, d];
}
