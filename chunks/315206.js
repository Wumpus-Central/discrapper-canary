let i;
n.d(t, { Ay: () => D, bK: () => f, cK: () => C });
var r = n(228366),
    a = n(31728),
    s = n(272355),
    _ = n(869146),
    l = n(734057),
    o = n(186111),
    E = n(334463),
    d = n(763827),
    c = n(309010),
    u = n(967198),
    I = n(977997),
    A = n(646865),
    T = n(933958),
    S = n(969151),
    N = n(594007),
    O = n(227042),
    R = n(652215);
function f(e) {
    let t = e ?? i;
    null != t && E.A.isOpen(t) && r.h.wait(() => a.jD(t));
}
function C(e) {
    let t = e ?? i;
    null != t && E.A.isOpen(t) && r.h.wait(() => a.WU(t));
}
function p() {
    let e = T.Ay.getConnectedActivityLocation(),
        t = null != e ? T.Ay.getSelfEmbeddedActivityForLocation(e) : null,
        n = (0, S.H)(e),
        s = l.A.getChannel(n);
    if (null == t || null == s) {
        let e;
        return void (null != (e = i) && E.A.isOpen(e) && (r.h.wait(() => a.VN(e)), (i = null)));
    }
    {
        let e = (0, N.A)(t.location.id, t.applicationId);
        if ((0, A.f)() || E.A.isOpen(e)) return !1;
        if (null != i) {
            let e = i;
            r.h.wait(() => a.VN(e));
        }
        return r.h.wait(() => a.ho(e, R.o1q.ACTIVITY, { channel: s })), void (i = e);
    }
}
function m() {
    return (0, O.A)({ LayerStore: o.A, PopoutWindowStore: _.A }) ? f() : C();
}
class L extends s.A {
    _initialize() {
        c.A.addChangeListener(p),
            u.A.addChangeListener(p),
            d.A.addChangeListener(p),
            I.A.addChangeListener(p),
            _.A.addChangeListener(p),
            T.Ay.addChangeListener(p),
            o.A.addChangeListener(m);
    }
    _terminate() {
        c.A.removeChangeListener(p),
            u.A.removeChangeListener(p),
            d.A.removeChangeListener(p),
            I.A.removeChangeListener(p),
            _.A.removeChangeListener(p),
            T.Ay.removeChangeListener(p),
            o.A.removeChangeListener(m);
    }
}
let D = new L();
