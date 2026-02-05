n.d(t, { p: () => a });
var i = n(659051),
    l = n(652215);
function a(e, t, n, a) {
    return !t.hasAnyAfter(
        e,
        (e) => null != e.activity && e.application?.id === n && e.activity.type === l.xL.JOIN && !(0, i.A)(a, e, n),
        25,
    );
}
