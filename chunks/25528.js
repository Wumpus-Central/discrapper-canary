"use strict";
n.d(t, { Ay: () => E, F9: () => u, nn: () => _ });
var i = n(64700),
    r = n(17928),
    a = n(778383),
    s = n(280450),
    l = n(290863),
    o = n(461213),
    d = n(652215);
let c = new Set([d.yTV.XBOX, d.yTV.PS4, d.yTV.PS5]);
function u(e) {
    return (0, a.A)(e) && !c.has(e?.platform ?? "");
}
function _(e, t) {
    return (s.default.getId() === e ? o.A.getActivities() : l.A.getActivities(e, t)).filter(u);
}
function E(e, t) {
    let n = (0, r.bG)([o.A, l.A, s.default], () =>
        s.default.getId() === e ? o.A.getActivities() : l.A.getActivities(e, t),
    );
    return i.useMemo(() => n.filter(u), [n]);
}
