n.d(t, { A7: () => c, O7: () => o, bq: () => u });
var r = n(64700),
    l = n(172218),
    a = n(17928),
    i = n(475743),
    s = n(531685);
let u = 2;
function o() {
    let [e, t] = r.useState(!1),
        n = (0, i.A)(e),
        a = null !== n && e !== n;
    return { visible: e, visibleChanged: a, targetRef: (0, l.K)((e) => t(e), 0.6) };
}
function c() {
    let e = (0, a.bG)([s.A], () => s.A.isFocused()),
        t = (0, i.A)(e),
        n = null !== t && e !== t;
    return { focused: e, focusedChanged: n };
}
