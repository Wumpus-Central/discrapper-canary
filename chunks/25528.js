"use strict";
n.d(t, { A: () => f, n: () => _ }), n(938796);
var r = n(64700),
    i = n(665260),
    a = n(311907),
    s = n(961350),
    o = n(290863),
    l = n(461213),
    u = n(652215);
let c = new Set([u.yTV.XBOX, u.yTV.PS4, u.yTV.PS5]);
function d(e) {
    return e.filter(
        (e) =>
            null != e.application_id &&
            e.type === u.$pd.PLAYING &&
            !(0, i.Lt)(e.flags ?? 0, u.jUm.EMBEDDED) &&
            !c.has(e.platform ?? ""),
    );
}
function _(e, t) {
    return d(s.default.getId() === e ? l.A.getActivities() : o.A.getActivities(e, t));
}
function f(e, t) {
    let n = (0, a.bG)([l.A, o.A, s.default], () =>
        s.default.getId() === e ? l.A.getActivities() : o.A.getActivities(e, t),
    );
    return r.useMemo(() => d(n), [n]);
}
