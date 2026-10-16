n.d(t, { Ay: () => p, YY: () => f });
var i = n(31728),
    l = n(272355),
    r = n(227042),
    s = n(869146),
    a = n(186111),
    o = n(334463),
    u = n(91242),
    d = n(165610),
    c = n(652215);
let h = null;
function f(e) {
    return `framepip:${e.applicationId}`;
}
function g() {
    let e,
        t = u.A.getMainFrame();
    if ((0, d.x1)(t)) {
        var n = f(t);
        return !o.A.isOpen(n) && (null != h && i.VN(h), i.ho(n, c.o1q.FRAME, {}), void (h = n));
    }
    null != (e = h) && o.A.isOpen(e) && (i.VN(e), (h = null));
}
function C() {
    let e;
    if ((0, r.A)({ LayerStore: a.A, PopoutWindowStore: s.A })) {
        let e;
        return void (null != (e = void 0 ?? h) && o.A.isOpen(e) && i.jD(e));
    }
    null != (e = void 0 ?? h) && o.A.isOpen(e) && i.WU(e);
}
class A extends l.A {
    _initialize() {
        (u.A.addChangeListener(g), a.A.addChangeListener(C));
    }
    _terminate() {
        (u.A.removeChangeListener(g), a.A.removeChangeListener(C));
    }
}
let p = new A();
