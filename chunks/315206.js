"use strict";
let r;
n.d(t, { Ay: () => C, bK: () => T, cK: () => S });
var i = n(73153),
    s = n(31728),
    a = n(272355),
    o = n(869146),
    l = n(734057),
    u = n(186111),
    c = n(334463),
    d = n(383501),
    _ = n(309010),
    f = n(967198),
    p = n(977997),
    h = n(646865),
    E = n(933958),
    m = n(969151),
    g = n(594007),
    A = n(227042),
    I = n(652215);
function T(e) {
    let t = e ?? r;
    null != t && c.A.isOpen(t) && i.h.wait(() => s.jD(t));
}
function S(e) {
    let t = e ?? r;
    null != t && c.A.isOpen(t) && i.h.wait(() => s.WU(t));
}
function y() {
    let e = E.Ay.getConnectedActivityLocation(),
        t = null != e ? E.Ay.getSelfEmbeddedActivityForLocation(e) : null,
        n = (0, m.H)(e),
        a = l.A.getChannel(n);
    if (null == t || null == a) {
        let e;
        return void (null != (e = r) && c.A.isOpen(e) && (i.h.wait(() => s.VN(e)), (r = null)));
    }
    {
        let e = (0, g.A)(t.location.id, t.applicationId);
        if ((0, h.f)() || c.A.isOpen(e)) return !1;
        if (null != r) {
            let e = r;
            i.h.wait(() => s.VN(e));
        }
        return i.h.wait(() => s.ho(e, I.o1q.ACTIVITY, { channel: a })), void (r = e);
    }
}
function N() {
    return (0, A.A)({ LayerStore: u.A, PopoutWindowStore: o.A }) ? T() : S();
}
class v extends a.A {
    _initialize() {
        _.A.addChangeListener(y),
            f.A.addChangeListener(y),
            d.A.addChangeListener(y),
            p.A.addChangeListener(y),
            o.A.addChangeListener(y),
            E.Ay.addChangeListener(y),
            u.A.addChangeListener(N);
    }
    _terminate() {
        _.A.removeChangeListener(y),
            f.A.removeChangeListener(y),
            d.A.removeChangeListener(y),
            p.A.removeChangeListener(y),
            o.A.removeChangeListener(y),
            E.Ay.removeChangeListener(y),
            u.A.removeChangeListener(N);
    }
}
let C = new v();
