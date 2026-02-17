"use strict";
n.d(t, { A7: () => d, O7: () => c, bq: () => l });
var r = n(64700),
    i = n(172218),
    a = n(311907),
    s = n(475743),
    o = n(531685);
let l = 2,
    u = 0.6;
function c() {
    let [e, t] = r.useState(!1),
        n = e,
        a = (0, s.A)(n),
        o = null !== a && n !== a;
    return { visible: n, visibleChanged: o, targetRef: (0, i.K)((e) => t(e), u) };
}
function d() {
    let e = (0, a.bG)([o.A], () => o.A.isFocused()),
        t = (0, s.A)(e),
        n = null !== t && e !== t;
    return { focused: e, focusedChanged: n };
}
