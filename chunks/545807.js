"use strict";
n.d(t, { A: () => c, b: () => u });
var r = n(311907),
    i = n(415109),
    s = n(57220),
    a = n(869146),
    o = n(392164),
    l = n(652215);
function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.A,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, i.Y)();
    return e.getWindow(o.f) ?? (t ? e.getWindow(l.MLl.ACTIVITY_POPOUT) : void 0) ?? window;
}
function c() {
    let e = (0, s.V)();
    return (0, r.bG)([a.A], () => u(a.A, e));
}
