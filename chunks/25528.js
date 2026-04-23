"use strict";
n.d(t, { Ay: () => p, F9: () => d, nn: () => f }), n(938796);
var r = n(64700),
    i = n(665260),
    s = n(311907),
    a = n(961350),
    o = n(290863),
    l = n(461213),
    u = n(652215);
let c = new Set([u.yTV.XBOX, u.yTV.PS4, u.yTV.PS5]);
function d(e) {
    return (
        null != e &&
        null != e.application_id &&
        e.type === u.$pd.PLAYING &&
        !(0, i.Lt)(e.flags ?? 0, u.jUm.EMBEDDED) &&
        !c.has(e.platform ?? "")
    );
}
function _(e) {
    return e.filter((e) => d(e));
}
function f(e, t) {
    return _(a.default.getId() === e ? l.A.getActivities() : o.A.getActivities(e, t));
}
function p(e, t) {
    let n = (0, s.bG)([l.A, o.A, a.default], () =>
        a.default.getId() === e ? l.A.getActivities() : o.A.getActivities(e, t),
    );
    return r.useMemo(() => _(n), [n]);
}
