n.d(t, { A7: () => c, O7: () => u, bq: () => o });
var r = n(64700),
    s = n(172218),
    i = n(311907),
    l = n(475743),
    a = n(531685);
let o = 2;
function u() {
    let [e, t] = r.useState(!1),
        n = e !== (0, l.A)(e);
    return { visible: e, visibleChanged: n, targetRef: (0, s.K)((e) => t(e), 0.6) };
}
function c() {
    let e = (0, i.bG)([a.A], () => a.A.isFocused()),
        t = e !== (0, l.A)(e);
    return { focused: e, focusedChanged: t };
}
