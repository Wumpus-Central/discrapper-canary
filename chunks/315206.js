"use strict";
let i;
n.d(t, { Ay: () => O, bK: () => g, cK: () => S });
var r = n(228366),
    a = n(31728),
    s = n(272355),
    l = n(869146),
    o = n(734057),
    d = n(186111),
    c = n(334463),
    u = n(763827),
    _ = n(309010),
    E = n(967198),
    A = n(977997),
    h = n(646865),
    I = n(933958),
    f = n(969151),
    p = n(594007),
    T = n(227042),
    m = n(652215);
function g(e) {
    let t = e ?? i;
    null != t && c.A.isOpen(t) && r.h.wait(() => a.jD(t));
}
function S(e) {
    let t = e ?? i;
    null != t && c.A.isOpen(t) && r.h.wait(() => a.WU(t));
}
function N() {
    let e = I.Ay.getConnectedActivityLocation(),
        t = null != e ? I.Ay.getSelfEmbeddedActivityForLocation(e) : null,
        n = (0, f.H)(e),
        s = o.A.getChannel(n);
    if (null == t || null == s) {
        let e;
        return void (null != (e = i) && c.A.isOpen(e) && (r.h.wait(() => a.VN(e)), (i = null)));
    }
    {
        let e = (0, p.A)(t.location.id, t.applicationId);
        if ((0, h.f)() || c.A.isOpen(e)) return !1;
        if (null != i) {
            let e = i;
            r.h.wait(() => a.VN(e));
        }
        return r.h.wait(() => a.ho(e, m.o1q.ACTIVITY, { channel: s })), void (i = e);
    }
}
function C() {
    return (0, T.A)({ LayerStore: d.A, PopoutWindowStore: l.A }) ? g() : S();
}
class R extends s.A {
    _initialize() {
        _.Ay.addChangeListener(N),
            E.A.addChangeListener(N),
            u.A.addChangeListener(N),
            A.A.addChangeListener(N),
            l.A.addChangeListener(N),
            I.Ay.addChangeListener(N),
            d.A.addChangeListener(C);
    }
    _terminate() {
        _.Ay.removeChangeListener(N),
            E.A.removeChangeListener(N),
            u.A.removeChangeListener(N),
            A.A.removeChangeListener(N),
            l.A.removeChangeListener(N),
            I.Ay.removeChangeListener(N),
            d.A.removeChangeListener(C);
    }
}
let O = new R();
