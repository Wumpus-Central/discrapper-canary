"use strict";
n.d(t, { e: () => d, x: () => c });
var r = n(64700),
    i = n(735991),
    a = n(20015),
    s = n(216238),
    o = n(652215);
function l(e) {
    if (!(0, i.$B)(e)) return !1;
    let t = (0, a.n)(e, o.gfo.EMBEDDED),
        n = (0, a.n)(e, o.gfo.CONTEXTLESS_ACTIVITY);
    return t && n;
}
function u(e, t) {
    return null != e && !!l(e);
}
function c(e) {
    return u(e, (0, s.oj)("canLaunchFrame"));
}
function d(e) {
    let t = (0, s.$N)("canLaunchFrame");
    return r.useMemo(() => u(e, t), [e, t]);
}
