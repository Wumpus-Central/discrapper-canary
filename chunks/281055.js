n.d(t, {
    Yy: () => u,
    xU: () => c,
    zw: () => a
}),
    n(47120);
var r = n(192379),
    l = n(442837),
    i = n(434650),
    s = n(110924),
    o = n(451478);
let a = 2;
function u() {
    let [e, t] = r.useState(!1),
        n = e !== (0, s.Z)(e);
    return {
        visible: e,
        visibleChanged: n,
        targetRef: (0, i.O)((e) => t(e), 0.6)
    };
}
function c() {
    let e = (0, l.e7)([o.Z], () => o.Z.isFocused()),
        t = e !== (0, s.Z)(e);
    return {
        focused: e,
        focusedChanged: t
    };
}
