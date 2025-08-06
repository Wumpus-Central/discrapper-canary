let r;
n.d(t, {
    RI: () => I,
    ZP: () => C,
    jy: () => T,
});
var i = n(570140),
    o = n(519938),
    a = n(317770),
    s = n(928518),
    l = n(592125),
    c = n(819640),
    u = n(366050),
    d = n(19780),
    f = n(944486),
    _ = n(914010),
    p = n(979651),
    h = n(636449),
    m = n(317381),
    g = n(16609),
    E = n(719296),
    b = n(958185),
    y = n(981631);
function O(e, t) {
    if ((0, h.R)() || u.Z.isOpen(t)) return !1;
    if (null != r) {
        let e = r;
        i.Z.wait(() => o.xv(e));
    }
    i.Z.wait(() => o.bA(t, y.NYg.ACTIVITY, { channel: e })), (r = t);
}
function v() {
    let e = r;
    null != e && u.Z.isOpen(e) && (i.Z.wait(() => o.xv(e)), (r = null));
}
function I(e) {
    let t = null != e ? e : r;
    null != t && u.Z.isOpen(t) && i.Z.wait(() => o.Cp(t));
}
function T(e) {
    let t = null != e ? e : r;
    null != t && u.Z.isOpen(t) && i.Z.wait(() => o.$Z(t));
}
function S() {
    let e = m.ZP.getConnectedActivityLocation(),
        t = null != e ? m.ZP.getSelfEmbeddedActivityForLocation(e) : null,
        n = (0, g.p)(e),
        r = l.Z.getChannel(n);
    return null == t || null == r ? v() : O(r, (0, E.Z)(t.location.id, t.applicationId));
}
function A() {
    return (0, b.Z)({
        LayerStore: c.Z,
        PopoutWindowStore: s.Z,
    })
        ? I()
        : T();
}
class N extends a.Z {
    _initialize() {
        f.Z.addChangeListener(S),
            _.Z.addChangeListener(S),
            d.Z.addChangeListener(S),
            p.Z.addChangeListener(S),
            s.Z.addChangeListener(S),
            m.ZP.addChangeListener(S),
            c.Z.addChangeListener(A);
    }
    _terminate() {
        f.Z.removeChangeListener(S),
            _.Z.removeChangeListener(S),
            d.Z.removeChangeListener(S),
            p.Z.removeChangeListener(S),
            s.Z.removeChangeListener(S),
            m.ZP.removeChangeListener(S),
            c.Z.removeChangeListener(A);
    }
}
let C = new N();
