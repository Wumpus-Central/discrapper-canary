n.d(t, {
    Yy: () => c,
    xU: () => u,
    zw: () => s,
}),
    n(388685);
var r = n(647438),
    o = n(442837),
    l = n(434650),
    a = n(110924),
    i = n(451478);
let s = 2;
function c() {
    let [e, t] = r.useState(!1),
        n = e !== (0, a.Z)(e);
    return {
        visible: e,
        visibleChanged: n,
        targetRef: (0, l.O)((e) => t(e), 0.6),
    };
}
function u() {
    let e = (0, o.e7)([i.Z], () => i.Z.isFocused()),
        t = e !== (0, a.Z)(e);
    return {
        focused: e,
        focusedChanged: t,
    };
}
