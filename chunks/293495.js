n.d(t, { Ay: () => g, YY: () => h });
var i = n(73153),
    r = n(31728),
    a = n(272355),
    l = n(227042),
    s = n(869146),
    o = n(186111),
    d = n(334463),
    c = n(91242),
    u = n(652215);
let A = null;
function h(e) {
    return `framepip:${e.applicationId}`;
}
function _() {
    let e = c.A.getConnectedFrame();
    if (null == e) {
        let e;
        return void (null != (e = A) && d.A.isOpen(e) && (i.h.wait(() => r.VN(e)), (A = null)));
    }
    var t = h(e);
    if (d.A.isOpen(t)) return !1;
    if (null != A) {
        let e = A;
        i.h.wait(() => r.VN(e));
    }
    return i.h.wait(() => r.ho(t, u.o1q.FRAME, {})), void (A = t);
}
function m() {
    let e;
    if ((0, l.A)({ LayerStore: o.A, PopoutWindowStore: s.A })) {
        let e;
        return void (null != (e = void 0 ?? A) && d.A.isOpen(e) && i.h.wait(() => r.jD(e)));
    }
    null != (e = void 0 ?? A) && d.A.isOpen(e) && i.h.wait(() => r.WU(e));
}
class p extends a.A {
    _initialize() {
        c.A.addChangeListener(_), o.A.addChangeListener(m);
    }
    _terminate() {
        c.A.removeChangeListener(_), o.A.removeChangeListener(m);
    }
}
let g = new p();
