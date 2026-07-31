"use strict";
n.d(t, { A7: () => c, O7: () => d, bq: () => o });
var i = n(582128),
    r = n(172218),
    a = n(17928),
    s = n(475743),
    l = n(531685);
let o = 2;
function d() {
    let [e, t] = i.useState(!1),
        n = (0, s.Ay)(e),
        a = null !== n && e !== n;
    return { visible: e, visibleChanged: a, targetRef: (0, r.K)((e) => t(e), 0.6) };
}
function c() {
    let e = (0, a.bG)([l.A], () => l.A.isFocused()),
        t = (0, s.Ay)(e),
        n = null !== t && e !== t;
    return { focused: e, focusedChanged: n };
}
