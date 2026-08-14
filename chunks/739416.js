n.d(t, { A7: () => c, O7: () => o, bq: () => s });
var r = n(582128),
    l = n(172218),
    a = n(17928),
    i = n(475743),
    u = n(531685);
let s = 2;
function o() {
    let [e, t] = r.useState(!1),
        n = (0, i.Ay)(e),
        a = null !== n && e !== n;
    return { visible: e, visibleChanged: a, targetRef: (0, l.K)((e) => t(e), 0.6) };
}
function c() {
    let e = (0, a.bG)([u.A], () => u.A.isFocused()),
        t = (0, i.Ay)(e),
        n = null !== t && e !== t;
    return { focused: e, focusedChanged: n };
}
