n.d(t, { A: () => c });
var i = n(311907),
    l = n(827343),
    s = n(961350),
    a = n(430452),
    r = n(652215),
    o = n(731854);
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.x.DEFAULT,
        n = (0, i.bG)([s.default], () => s.default.getId()),
        c = (0, i.bG)([a.Ay], () => a.Ay.supports(o.O5.DISABLE_VIDEO)),
        d = (0, i.bG)([a.Ay], () => a.Ay.isLocalVideoDisabled(n, t), [n, t]);
    return [
        (null == e || e === n) && c,
        d,
        (e) => {
            let i = e ? r.bb8.DISABLED : r.bb8.MANUAL_ENABLED;
            l.A.setDisableLocalVideo(n, i, t);
        },
    ];
}
