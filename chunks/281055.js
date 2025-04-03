n.d(t, {
    Yy: () => c,
    xU: () => u,
    zw: () => s
}),
    n(47120);
var r = n(192379),
    l = n(442837),
    o = n(434650),
    i = n(110924),
    a = n(451478);
let s = 2;
function c() {
    let [e, t] = r.useState(!1),
        n = e !== (0, i.Z)(e);
    return {
        visible: e,
        visibleChanged: n,
        targetRef: (0, o.O)((e) => t(e), 0.6)
    };
}
function u() {
    let e = (0, l.e7)([a.Z], () => a.Z.isFocused()),
        t = e !== (0, i.Z)(e);
    return {
        focused: e,
        focusedChanged: t
    };
}
