"use strict";
let i;
n.d(t, { Ay: () => v, bK: () => T, cK: () => S });
var r = n(228366),
    s = n(31728),
    a = n(272355),
    o = n(869146),
    l = n(734057),
    u = n(186111),
    c = n(334463),
    d = n(763827),
    _ = n(309010),
    f = n(967198),
    h = n(977997),
    p = n(646865),
    E = n(933958),
    m = n(969151),
    g = n(594007),
    A = n(227042),
    I = n(652215);
function T(e) {
    let t = e ?? i;
    null != t && c.A.isOpen(t) && r.h.wait(() => s.jD(t));
}
function S(e) {
    let t = e ?? i;
    null != t && c.A.isOpen(t) && r.h.wait(() => s.WU(t));
}
function N() {
    let e = E.Ay.getConnectedActivityLocation(),
        t = null != e ? E.Ay.getSelfEmbeddedActivityForLocation(e) : null,
        n = (0, m.H)(e),
        a = l.A.getChannel(n);
    if (null == t || null == a) {
        let e;
        return void (null != (e = i) && c.A.isOpen(e) && (r.h.wait(() => s.VN(e)), (i = null)));
    }
    {
        let e = (0, g.A)(t.location.id, t.applicationId);
        if ((0, p.f)() || c.A.isOpen(e)) return !1;
        if (null != i) {
            let e = i;
            r.h.wait(() => s.VN(e));
        }
        return r.h.wait(() => s.ho(e, I.o1q.ACTIVITY, { channel: a })), void (i = e);
    }
}
function y() {
    return (0, A.A)({ LayerStore: u.A, PopoutWindowStore: o.A }) ? T() : S();
}
class C extends a.A {
    _initialize() {
        _.A.addChangeListener(N),
            f.A.addChangeListener(N),
            d.A.addChangeListener(N),
            h.A.addChangeListener(N),
            o.A.addChangeListener(N),
            E.Ay.addChangeListener(N),
            u.A.addChangeListener(y);
    }
    _terminate() {
        _.A.removeChangeListener(N),
            f.A.removeChangeListener(N),
            d.A.removeChangeListener(N),
            h.A.removeChangeListener(N),
            o.A.removeChangeListener(N),
            E.Ay.removeChangeListener(N),
            u.A.removeChangeListener(y);
    }
}
let v = new C();
