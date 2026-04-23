t.d(n, { A: () => c });
var l = t(311907),
    i = t(827343),
    a = t(961350),
    s = t(430452),
    r = t(652215),
    o = t(731854);
function c(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.x.DEFAULT,
        t = (0, l.bG)([a.default], () => a.default.getId()),
        c = (0, l.bG)([s.Ay], () => s.Ay.supports(o.O5.DISABLE_VIDEO)),
        u = (0, l.bG)([s.Ay], () => s.Ay.isLocalVideoDisabled(t, n), [t, n]);
    return [
        (null == e || e === t) && c,
        u,
        (e) => {
            let l = e ? r.bb8.DISABLED : r.bb8.MANUAL_ENABLED;
            i.A.setDisableLocalVideo(t, l, n);
        },
    ];
}
