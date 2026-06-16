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
    h = n(967198),
    f = n(977997),
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
function y() {
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
function C() {
    return (0, A.A)({ LayerStore: u.A, PopoutWindowStore: o.A }) ? T() : S();
}
class N extends a.A {
    _initialize() {
        _.A.addChangeListener(y),
            h.A.addChangeListener(y),
            d.A.addChangeListener(y),
            f.A.addChangeListener(y),
            o.A.addChangeListener(y),
            E.Ay.addChangeListener(y),
            u.A.addChangeListener(C);
    }
    _terminate() {
        _.A.removeChangeListener(y),
            h.A.removeChangeListener(y),
            d.A.removeChangeListener(y),
            f.A.removeChangeListener(y),
            o.A.removeChangeListener(y),
            E.Ay.removeChangeListener(y),
            u.A.removeChangeListener(C);
    }
}
let v = new N();
