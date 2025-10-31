n.d(t, {
    ZP: () => _,
    ro: () => f,
});
var r = n(570140),
    i = n(519938),
    l = n(317770),
    a = n(958185),
    s = n(928518),
    o = n(819640),
    c = n(366050),
    u = n(591472),
    d = n(981631);
let p = null;
function f(e) {
    return "framepip:".concat(e.applicationId);
}
function m() {
    let e = u.Z.getConnectedFrame();
    if (null == e) {
        let e = p;
        null != e && c.Z.isOpen(e) && (r.Z.wait(() => i.xv(e)), (p = null));
        return;
    }
    var t = f(e);
    if (c.Z.isOpen(t)) return !1;
    if (null != p) {
        let e = p;
        r.Z.wait(() => i.xv(e));
    }
    return r.Z.wait(() => i.bA(t, d.NYg.FRAME, {})), void (p = t);
}
function h() {
    if (
        (0, a.Z)({
            LayerStore: o.Z,
            PopoutWindowStore: s.Z,
        })
    ) {
        let e = p;
        null != e && c.Z.isOpen(e) && r.Z.wait(() => i.Cp(e));
        return;
    }
    let e = p;
    null != e && c.Z.isOpen(e) && r.Z.wait(() => i.$Z(e));
}
class g extends l.Z {
    _initialize() {
        u.Z.addChangeListener(m), o.Z.addChangeListener(h);
    }
    _terminate() {
        u.Z.removeChangeListener(m), o.Z.removeChangeListener(h);
    }
}
let _ = new g();
