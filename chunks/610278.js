n.d(t, {
    ZP: () => b,
    ro: () => h
});
var r = n(570140),
    i = n(519938),
    l = n(317770),
    a = n(958185),
    o = n(928518),
    s = n(819640),
    c = n(366050),
    u = n(591472),
    d = n(981631);
let p = null;
function h(e) {
    return 'framepip:'.concat(e.applicationId);
}
function f() {
    let e = u.Z.getConnectedFrame();
    if (null == e) {
        let e = p;
        null != e && c.Z.isOpen(e) && (r.Z.wait(() => i.xv(e)), (p = null));
        return;
    }
    var t = h(e);
    if (c.Z.isOpen(t)) return !1;
    if (null != p) {
        let e = p;
        r.Z.wait(() => i.xv(e));
    }
    return (r.Z.wait(() => i.bA(t, d.NYg.FRAME, {})), void (p = t));
}
function g() {
    if (
        (0, a.Z)({
            LayerStore: s.Z,
            PopoutWindowStore: o.Z
        })
    ) {
        let e = p;
        null != e && c.Z.isOpen(e) && r.Z.wait(() => i.Cp(e));
        return;
    }
    let e = p;
    null != e && c.Z.isOpen(e) && r.Z.wait(() => i.$Z(e));
}
class m extends l.Z {
    _initialize() {
        (u.Z.addChangeListener(f), s.Z.addChangeListener(g));
    }
    _terminate() {
        (u.Z.removeChangeListener(f), s.Z.removeChangeListener(g));
    }
}
let b = new m();
