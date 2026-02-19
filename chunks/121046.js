"use strict";
n.d(t, { A: () => c });
var i = n(311907),
    s = n(827343),
    l = n(961350),
    r = n(430452),
    a = n(652215),
    o = n(731854);
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.x.DEFAULT,
        n = (0, i.bG)([l.default], () => l.default.getId()),
        c = (0, i.bG)([r.Ay], () => r.Ay.supports(o.O5.DISABLE_VIDEO)),
        d = (0, i.bG)([r.Ay], () => r.Ay.isLocalVideoDisabled(n, t), [n, t]);
    return [
        (null == e || e === n) && c,
        d,
        (e) => {
            let i = e ? a.bb8.DISABLED : a.bb8.MANUAL_ENABLED;
            s.A.setDisableLocalVideo(n, i, t);
        },
    ];
}
