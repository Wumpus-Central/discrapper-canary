"use strict";
n.d(t, { Ay: () => h, F9: () => u, nn: () => E }), n(938796);
var i = n(64700),
    r = n(665260),
    s = n(17928),
    a = n(495544),
    o = n(290863),
    l = n(461213),
    d = n(652215);
let _ = new Set([d.yTV.XBOX, d.yTV.PS4, d.yTV.PS5]);
function u(e) {
    return (
        null != e &&
        null != e.application_id &&
        e.type === d.$pd.PLAYING &&
        !(0, r.Lt)(e.flags ?? 0, d.jUm.EMBEDDED) &&
        !_.has(e.platform ?? "")
    );
}
function c(e) {
    return e.filter((e) => u(e));
}
function E(e, t) {
    return c(a.default.getId() === e ? l.A.getActivities() : o.A.getActivities(e, t));
}
function h(e, t) {
    let n = (0, s.bG)([l.A, o.A, a.default], () =>
        a.default.getId() === e ? l.A.getActivities() : o.A.getActivities(e, t),
    );
    return i.useMemo(() => c(n), [n]);
}
