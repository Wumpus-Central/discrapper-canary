t.d(n, { Z: () => s });
var r = t(442837),
    i = t(846027),
    l = t(314897),
    o = t(131951),
    a = t(981631),
    c = t(65154);
function s(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Yn.DEFAULT,
        t = (0, r.e7)([l.default], () => l.default.getId()),
        s = (0, r.e7)([o.Z], () => o.Z.supports(c.AN.DISABLE_VIDEO)),
        u = (0, r.e7)([o.Z], () => o.Z.isLocalVideoDisabled(t, n), [t, n]);
    return [
        (null == e || e === t) && s,
        u,
        (e) => {
            let r = e ? a.ZUi.DISABLED : a.ZUi.MANUAL_ENABLED;
            i.Z.setDisableLocalVideo(t, r, n);
        }
    ];
}
