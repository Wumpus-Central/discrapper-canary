n.d(t, {
    Ay: () => m,
    YY: () => f,
});
var r = n(73153),
    i = n(31728),
    l = n(272355),
    a = n(227042),
    s = n(869146),
    o = n(186111),
    c = n(334463),
    u = n(91242),
    d = n(652215);
let p = null;
function f(e) {
    return "framepip:".concat(e.applicationId);
}
function h() {
    let e = u.A.getConnectedFrame();
    if (null == e) {
        let e;
        return void (null != (e = p) && c.A.isOpen(e) && (r.h.wait(() => i.VN(e)), (p = null)));
    }
    var t = f(e);
    if (c.A.isOpen(t)) return !1;
    if (null != p) {
        let e = p;
        r.h.wait(() => i.VN(e));
    }
    return r.h.wait(() => i.ho(t, d.o1q.FRAME, {})), void (p = t);
}
function A() {
    let e;
    if (
        (0, a.A)({
            LayerStore: o.A,
            PopoutWindowStore: s.A,
        })
    ) {
        let e;
        return void (null != (e = p) && c.A.isOpen(e) && r.h.wait(() => i.jD(e)));
    }
    null != (e = p) && c.A.isOpen(e) && r.h.wait(() => i.WU(e));
}
class g extends l.A {
    _initialize() {
        u.A.addChangeListener(h), o.A.addChangeListener(A);
    }
    _terminate() {
        u.A.removeChangeListener(h), o.A.removeChangeListener(A);
    }
}
let m = new g();
