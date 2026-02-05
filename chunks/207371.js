"use strict";
n.d(t, { e: () => d, x: () => c }), n(938796);
var r = n(64700),
    i = n(665260),
    a = n(735991),
    s = n(216238),
    o = n(652215);
function l(e) {
    if (!(0, a.$B)(e)) return !1;
    let t = e.flags ?? 0,
        n = (0, i.Lt)(t, o.gfo.EMBEDDED),
        r = (0, i.Lt)(t, o.gfo.CONTEXTLESS_ACTIVITY);
    return n && r;
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
