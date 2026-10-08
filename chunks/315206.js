let i;
n.d(t, { Ay: () => v, bK: () => S, cK: () => _ });
var l = n(73153),
    r = n(31728),
    s = n(272355),
    a = n(869146),
    o = n(734057),
    u = n(186111),
    d = n(334463),
    c = n(763827),
    h = n(309010),
    f = n(967198),
    g = n(977997),
    C = n(646865),
    A = n(933958),
    p = n(969151),
    m = n(594007),
    I = n(227042),
    E = n(652215);
function S(e) {
    let t = e ?? i;
    null != t && d.A.isOpen(t) && l.h.wait(() => r.jD(t));
}
function _(e) {
    let t = e ?? i;
    null != t && d.A.isOpen(t) && l.h.wait(() => r.WU(t));
}
function N() {
    let e = A.Ay.getConnectedActivityLocation(),
        t = null != e ? A.Ay.getSelfEmbeddedActivityForLocation(e) : null,
        n = (0, p.H)(e),
        s = o.A.getChannel(n);
    if (null == t || null == s || !0 === t.renderInFramePool) {
        let e;
        return void (null != (e = i) && d.A.isOpen(e) && (l.h.wait(() => r.VN(e)), (i = null)));
    }
    {
        let e = (0, m.A)(t.location.id, t.applicationId);
        if ((0, C.f)() || d.A.isOpen(e)) return !1;
        if (null != i) {
            let e = i;
            l.h.wait(() => r.VN(e));
        }
        return (l.h.wait(() => r.ho(e, E.o1q.ACTIVITY, { channel: s })), void (i = e));
    }
}
function T() {
    return (0, I.A)({ LayerStore: u.A, PopoutWindowStore: a.A }) ? S() : _();
}
class M extends s.A {
    _initialize() {
        (h.Ay.addChangeListener(N),
            f.A.addChangeListener(N),
            c.A.addChangeListener(N),
            g.A.addChangeListener(N),
            a.A.addChangeListener(N),
            A.Ay.addChangeListener(N),
            u.A.addChangeListener(T));
    }
    _terminate() {
        (h.Ay.removeChangeListener(N),
            f.A.removeChangeListener(N),
            c.A.removeChangeListener(N),
            g.A.removeChangeListener(N),
            a.A.removeChangeListener(N),
            A.Ay.removeChangeListener(N),
            u.A.removeChangeListener(T));
    }
}
let v = new M();
