n.d(t, { Z: () => c });
var r = n(442837),
    i = n(846027),
    o = n(314897),
    a = n(131951),
    s = n(981631),
    l = n(65154);
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Yn.DEFAULT,
        n = (0, r.e7)([o.default], () => o.default.getId()),
        c = (0, r.e7)([a.Z], () => a.Z.supports(l.AN.DISABLE_VIDEO)),
        u = (0, r.e7)([a.Z], () => a.Z.isLocalVideoDisabled(n, t), [n, t]),
        d = (e) => {
            let r = e ? s.ZUi.DISABLED : s.ZUi.MANUAL_ENABLED;
            i.Z.setDisableLocalVideo(n, r, t);
        };
    return [(null == e || e === n) && c, u, d];
}
