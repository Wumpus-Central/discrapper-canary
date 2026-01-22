let r;
n.d(t, {
    Ay: () => N,
    bK: () => v,
    cK: () => S,
});
var i = n(73153),
    a = n(31728),
    s = n(272355),
    o = n(869146),
    l = n(734057),
    c = n(186111),
    u = n(334463),
    d = n(383501),
    f = n(309010),
    p = n(967198),
    _ = n(977997),
    h = n(646865),
    m = n(933958),
    g = n(969151),
    E = n(594007),
    b = n(227042),
    y = n(652215);

function O(e, t) {
    if ((0, h.f)() || u.A.isOpen(t)) return !1;
    if (null != r) {
        let e = r;
        i.h.wait(() => a.VN(e));
    }
    i.h.wait(() =>
        a.ho(t, y.o1q.ACTIVITY, {
            channel: e,
        }),
    ),
        (r = t);
}

function A() {
    let e = r;
    null != e && u.A.isOpen(e) && (i.h.wait(() => a.VN(e)), (r = null));
}

function v(e) {
    let t = null != e ? e : r;
    null != t && u.A.isOpen(t) && i.h.wait(() => a.jD(t));
}

function S(e) {
    let t = null != e ? e : r;
    null != t && u.A.isOpen(t) && i.h.wait(() => a.WU(t));
}

function I() {
    let e = m.Ay.getConnectedActivityLocation(),
        t = null != e ? m.Ay.getSelfEmbeddedActivityForLocation(e) : null,
        n = (0, g.H)(e),
        r = l.A.getChannel(n);
    return null == t || null == r ? A() : O(r, (0, E.A)(t.location.id, t.applicationId));
}

function T() {
    return (0, b.A)({
        LayerStore: c.A,
        PopoutWindowStore: o.A,
    })
        ? v()
        : S();
}
class C extends s.A {
    _initialize() {
        f.A.addChangeListener(I),
            p.A.addChangeListener(I),
            d.A.addChangeListener(I),
            _.A.addChangeListener(I),
            o.A.addChangeListener(I),
            m.Ay.addChangeListener(I),
            c.A.addChangeListener(T);
    }
    _terminate() {
        f.A.removeChangeListener(I),
            p.A.removeChangeListener(I),
            d.A.removeChangeListener(I),
            _.A.removeChangeListener(I),
            o.A.removeChangeListener(I),
            m.Ay.removeChangeListener(I),
            c.A.removeChangeListener(T);
    }
}
let N = new C();
