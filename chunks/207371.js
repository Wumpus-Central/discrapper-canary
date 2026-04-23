"use strict";
n.d(t, { e: () => c, x: () => u });
var r = n(64700),
    i = n(735991),
    s = n(20015),
    a = n(216238),
    o = n(652215);
function l(e, t) {
    return (
        null != e &&
        !!(function (e) {
            if (!(0, i.$B)(e)) return !1;
            let t = (0, s.n)(e, o.gfo.EMBEDDED),
                n = (0, s.n)(e, o.gfo.CONTEXTLESS_ACTIVITY);
            return t && n;
        })(e)
    );
}
function u(e) {
    return l(e, (0, a.oj)("canLaunchFrame"));
}
function c(e) {
    let t = (0, a.$N)("canLaunchFrame");
    return r.useMemo(() => l(e, t), [e, t]);
}
