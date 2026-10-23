n.d(t, { _: () => l });
var i = n(952818),
    r = n(233741),
    a = n(950869),
    s = n(37595);
function l() {
    let e = (0, s.V)(i.Ay, r.A);
    return (
        !(null != e && a.A.isOverlayEnabled && r.A.isOverlayV3EnabledForPID(e.pid) && r.A.getTargetPID() === e.pid) ||
        r.A.isFocused(e.pid)
    );
}
