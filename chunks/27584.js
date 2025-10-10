n.d(t, { Z: () => s });
var r = n(442837),
    l = n(846027),
    i = n(314897),
    o = n(131951),
    c = n(981631),
    a = n(65154);
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Yn.DEFAULT,
        n = (0, r.e7)([i.default], () => i.default.getId()),
        s = (0, r.e7)([o.Z], () => o.Z.supports(a.AN.DISABLE_VIDEO)),
        u = (0, r.e7)([o.Z], () => o.Z.isLocalVideoDisabled(n, t), [n, t]);
    return [
        (null == e || e === n) && s,
        u,
        (e) => {
            let r = e ? c.ZUi.DISABLED : c.ZUi.MANUAL_ENABLED;
            l.Z.setDisableLocalVideo(n, r, t);
        },
    ];
}
