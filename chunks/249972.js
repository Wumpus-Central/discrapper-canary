"use strict";
n.d(t, { A: () => o });
var i = n(311907),
    s = n(929921),
    l = n(650338),
    r = n(166764),
    a = n(753070);
function o() {
    let { resolution: e, fps: t } = (0, i.cf)([s.A], () => s.A.getState());
    if (!(0, r.w)(e, t)) return `${(0, a.zr)(e)} ${(0, l.Bs)(t)}`;
}
