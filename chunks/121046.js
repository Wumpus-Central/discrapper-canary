n.d(t, {
    A: () => s,
});
var r = n(311907),
    l = n(827343),
    i = n(961350),
    o = n(430452),
    a = n(652215),
    c = n(731854);

function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.x.DEFAULT,
        n = (0, r.bG)([i.default], () => i.default.getId()),
        s = (0, r.bG)([o.A], () => o.A.supports(c.O5.DISABLE_VIDEO)),
        d = (0, r.bG)([o.A], () => o.A.isLocalVideoDisabled(n, t), [n, t]);
    return [
        (null == e || e === n) && s,
        d,
        (e) => {
            let r = e ? a.bb8.DISABLED : a.bb8.MANUAL_ENABLED;
            l.A.setDisableLocalVideo(n, r, t);
        },
    ];
}
