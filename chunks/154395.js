n.d(t, {
    A7: () => u,
    O7: () => c,
    bq: () => a,
}),
    n(896048);
var r = n(64700),
    l = n(172218),
    o = n(311907),
    i = n(475743),
    s = n(531685);
let a = 2;
function c() {
    let [e, t] = r.useState(!1),
        n = e !== (0, i.A)(e);
    return {
        visible: e,
        visibleChanged: n,
        targetRef: (0, l.K)((e) => t(e), 0.6),
    };
}
function u() {
    let e = (0, o.bG)([s.A], () => s.A.isFocused()),
        t = e !== (0, i.A)(e);
    return {
        focused: e,
        focusedChanged: t,
    };
}
