let i;
n.d(t, { Ay: () => M, bK: () => E, cK: () => S });
var l = n(31728),
    r = n(272355),
    s = n(869146),
    a = n(734057),
    o = n(186111),
    u = n(334463),
    d = n(763827),
    c = n(309010),
    h = n(967198),
    f = n(977997),
    g = n(646865),
    C = n(933958),
    A = n(969151),
    p = n(594007),
    m = n(227042),
    I = n(652215);
function E(e) {
    let t = e ?? i;
    null != t && u.A.isOpen(t) && l.jD(t);
}
function S(e) {
    let t = e ?? i;
    null != t && u.A.isOpen(t) && l.WU(t);
}
function _() {
    let e = C.Ay.getConnectedActivityLocation(),
        t = null != e ? C.Ay.getSelfEmbeddedActivityForLocation(e) : null,
        n = (0, A.H)(e),
        r = a.A.getChannel(n);
    if (null == t || null == r || !0 === t.renderInFramePool) {
        let e;
        return void (null != (e = i) && u.A.isOpen(e) && (l.VN(e), (i = null)));
    }
    {
        let e = (0, p.A)(t.location.id, t.applicationId);
        return (
            !((0, g.f)() || u.A.isOpen(e)) &&
            (null != i && l.VN(i), l.ho(e, I.o1q.ACTIVITY, { channel: r }), void (i = e))
        );
    }
}
function N() {
    return (0, m.A)({ LayerStore: o.A, PopoutWindowStore: s.A }) ? E() : S();
}
class T extends r.A {
    _initialize() {
        (c.Ay.addChangeListener(_),
            h.A.addChangeListener(_),
            d.A.addChangeListener(_),
            f.A.addChangeListener(_),
            s.A.addChangeListener(_),
            C.Ay.addChangeListener(_),
            o.A.addChangeListener(N));
    }
    _terminate() {
        (c.Ay.removeChangeListener(_),
            h.A.removeChangeListener(_),
            d.A.removeChangeListener(_),
            f.A.removeChangeListener(_),
            s.A.removeChangeListener(_),
            C.Ay.removeChangeListener(_),
            o.A.removeChangeListener(N));
    }
}
let M = new T();
