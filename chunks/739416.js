n.d(t, { A7: () => c, O7: () => s, bq: () => o });
var r = n(582128),
    l = n(172218),
    i = n(17928),
    a = n(475743),
    u = n(531685);
let o = 2;
function s() {
    let [e, t] = r.useState(!1),
        n = (0, a.Ay)(e),
        i = null !== n && e !== n;
    return { visible: e, visibleChanged: i, targetRef: (0, l.K)((e) => t(e), 0.6) };
}
function c() {
    let e = (0, i.bG)([u.A], () => u.A.isFocused()),
        t = (0, a.Ay)(e),
        n = null !== t && e !== t;
    return { focused: e, focusedChanged: n };
}
