"use strict";
n.d(t, { A7: () => d, O7: () => c, bq: () => l });
var r = n(64700),
    i = n(172218),
    s = n(311907),
    a = n(475743),
    o = n(531685);
let l = 2,
    u = 0.6;
function c() {
    let [e, t] = r.useState(!1),
        n = e,
        s = (0, a.A)(n),
        o = null !== s && n !== s;
    return { visible: n, visibleChanged: o, targetRef: (0, i.K)((e) => t(e), u) };
}
function d() {
    let e = (0, s.bG)([o.A], () => o.A.isFocused()),
        t = (0, a.A)(e),
        n = null !== t && e !== t;
    return { focused: e, focusedChanged: n };
}
