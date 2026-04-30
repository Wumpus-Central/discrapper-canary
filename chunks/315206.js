let i;
n.d(t, { Ay: () => g, bK: () => p, cK: () => m });
var a = n(228366),
    r = n(31728),
    s = n(272355),
    l = n(869146),
    o = n(734057),
    d = n(186111),
    c = n(334463),
    _ = n(763827),
    E = n(309010),
    u = n(967198),
    A = n(977997),
    I = n(646865),
    T = n(933958),
    h = n(969151),
    S = n(594007),
    N = n(227042),
    f = n(652215);
function p(e) {
    let t = e ?? i;
    null != t && c.A.isOpen(t) && a.h.wait(() => r.jD(t));
}
function m(e) {
    let t = e ?? i;
    null != t && c.A.isOpen(t) && a.h.wait(() => r.WU(t));
}
function O() {
    let e = T.Ay.getConnectedActivityLocation(),
        t = null != e ? T.Ay.getSelfEmbeddedActivityForLocation(e) : null,
        n = (0, h.H)(e),
        s = o.A.getChannel(n);
    if (null == t || null == s) {
        let e;
        return void (null != (e = i) && c.A.isOpen(e) && (a.h.wait(() => r.VN(e)), (i = null)));
    }
    {
        let e = (0, S.A)(t.location.id, t.applicationId);
        if ((0, I.f)() || c.A.isOpen(e)) return !1;
        if (null != i) {
            let e = i;
            a.h.wait(() => r.VN(e));
        }
        return a.h.wait(() => r.ho(e, f.o1q.ACTIVITY, { channel: s })), void (i = e);
    }
}
function C() {
    return (0, N.A)({ LayerStore: d.A, PopoutWindowStore: l.A }) ? p() : m();
}
class R extends s.A {
    _initialize() {
        E.A.addChangeListener(O),
            u.A.addChangeListener(O),
            _.A.addChangeListener(O),
            A.A.addChangeListener(O),
            l.A.addChangeListener(O),
            T.Ay.addChangeListener(O),
            d.A.addChangeListener(C);
    }
    _terminate() {
        E.A.removeChangeListener(O),
            u.A.removeChangeListener(O),
            _.A.removeChangeListener(O),
            A.A.removeChangeListener(O),
            l.A.removeChangeListener(O),
            T.Ay.removeChangeListener(O),
            d.A.removeChangeListener(C);
    }
}
let g = new R();
