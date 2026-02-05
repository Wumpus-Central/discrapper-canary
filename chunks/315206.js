"use strict";
let r;
n.d(t, { Ay: () => R, bK: () => S, cK: () => v });
var i = n(73153),
    a = n(31728),
    s = n(272355),
    o = n(869146),
    l = n(734057),
    u = n(186111),
    c = n(334463),
    d = n(383501),
    _ = n(309010),
    f = n(967198),
    p = n(977997),
    h = n(646865),
    m = n(933958),
    g = n(969151),
    E = n(594007),
    A = n(227042),
    I = n(652215);
function T(e, t) {
    if ((0, h.f)() || c.A.isOpen(t)) return !1;
    if (null != r) {
        let e = r;
        i.h.wait(() => a.VN(e));
    }
    i.h.wait(() => a.ho(t, I.o1q.ACTIVITY, { channel: e })), (r = t);
}
function y() {
    let e = r;
    null != e && c.A.isOpen(e) && (i.h.wait(() => a.VN(e)), (r = null));
}
function S(e) {
    let t = e ?? r;
    null != t && c.A.isOpen(t) && i.h.wait(() => a.jD(t));
}
function v(e) {
    let t = e ?? r;
    null != t && c.A.isOpen(t) && i.h.wait(() => a.WU(t));
}
function C() {
    let e = m.Ay.getConnectedActivityLocation(),
        t = null != e ? m.Ay.getSelfEmbeddedActivityForLocation(e) : null,
        n = (0, g.H)(e),
        r = l.A.getChannel(n);
    return null == t || null == r ? y() : T(r, (0, E.A)(t.location.id, t.applicationId));
}
function b() {
    return (0, A.A)({ LayerStore: u.A, PopoutWindowStore: o.A }) ? S() : v();
}
class N extends s.A {
    _initialize() {
        _.A.addChangeListener(C),
            f.A.addChangeListener(C),
            d.A.addChangeListener(C),
            p.A.addChangeListener(C),
            o.A.addChangeListener(C),
            m.Ay.addChangeListener(C),
            u.A.addChangeListener(b);
    }
    _terminate() {
        _.A.removeChangeListener(C),
            f.A.removeChangeListener(C),
            d.A.removeChangeListener(C),
            p.A.removeChangeListener(C),
            o.A.removeChangeListener(C),
            m.Ay.removeChangeListener(C),
            u.A.removeChangeListener(b);
    }
}
let R = new N();
