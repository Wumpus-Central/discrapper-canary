let r;
n.d(t, {
    RI: () => S,
    ZP: () => N,
    jy: () => I,
});
var i = n(570140),
    a = n(519938),
    o = n(317770),
    s = n(928518),
    l = n(592125),
    c = n(819640),
    u = n(366050),
    d = n(19780),
    f = n(944486),
    p = n(914010),
    _ = n(979651),
    m = n(636449),
    h = n(317381),
    g = n(16609),
    E = n(719296),
    b = n(958185),
    y = n(981631);
function O(e, t) {
    if ((0, m.R)() || u.Z.isOpen(t)) return !1;
    if (null != r) {
        let e = r;
        i.Z.wait(() => a.xv(e));
    }
    i.Z.wait(() => a.bA(t, y.NYg.ACTIVITY, { channel: e })), (r = t);
}
function v() {
    let e = r;
    null != e && u.Z.isOpen(e) && (i.Z.wait(() => a.xv(e)), (r = null));
}
function S(e) {
    let t = null != e ? e : r;
    null != t && u.Z.isOpen(t) && i.Z.wait(() => a.Cp(t));
}
function I(e) {
    let t = null != e ? e : r;
    null != t && u.Z.isOpen(t) && i.Z.wait(() => a.$Z(t));
}
function T() {
    let e = h.ZP.getConnectedActivityLocation(),
        t = null != e ? h.ZP.getSelfEmbeddedActivityForLocation(e) : null,
        n = (0, g.p)(e),
        r = l.Z.getChannel(n);
    return null == t || null == r ? v() : O(r, (0, E.Z)(t.location.id, t.applicationId));
}
function C() {
    return (0, b.Z)({
        LayerStore: c.Z,
        PopoutWindowStore: s.Z,
    })
        ? S()
        : I();
}
class A extends o.Z {
    _initialize() {
        f.Z.addChangeListener(T),
            p.Z.addChangeListener(T),
            d.Z.addChangeListener(T),
            _.Z.addChangeListener(T),
            s.Z.addChangeListener(T),
            h.ZP.addChangeListener(T),
            c.Z.addChangeListener(C);
    }
    _terminate() {
        f.Z.removeChangeListener(T),
            p.Z.removeChangeListener(T),
            d.Z.removeChangeListener(T),
            _.Z.removeChangeListener(T),
            s.Z.removeChangeListener(T),
            h.ZP.removeChangeListener(T),
            c.Z.removeChangeListener(C);
    }
}
let N = new A();
