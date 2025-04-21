let r;
n.d(t, {
    RI: () => S,
    ZP: () => R,
    jy: () => T
});
var i = n(252258),
    a = n(570140),
    o = n(519938),
    s = n(317770),
    l = n(928518),
    c = n(592125),
    u = n(819640),
    d = n(366050),
    f = n(19780),
    _ = n(944486),
    p = n(914010),
    h = n(979651),
    m = n(636449),
    g = n(317381),
    E = n(16609),
    b = n(719296),
    y = n(958185),
    v = n(981631);
function O(e, t) {
    if ((0, m.R)() || d.Z.isOpen(t)) return !1;
    if (null != r) {
        let e = r;
        a.Z.wait(() => o.xv(e));
    }
    a.Z.wait(() => o.bA(t, v.NYg.EMBED_IFRAME, { channel: e })), (r = t);
}
function I() {
    let e = r;
    null != e && d.Z.isOpen(e) && (a.Z.wait(() => o.xv(e)), (r = null));
}
function S(e) {
    let t = null != e ? e : r;
    null != t && d.Z.isOpen(t) && a.Z.wait(() => o.Cp(t));
}
function T(e) {
    let t = null != e ? e : r;
    null != t && d.Z.isOpen(t) && a.Z.wait(() => o.$Z(t));
}
function A() {
    let e = g.ZP.getConnectedActivityLocation(),
        t = (null == e ? void 0 : e.kind) === i.E.CONTEXTLESS,
        n = null != e ? g.ZP.getSelfEmbeddedActivityForLocation(e) : null,
        r = (0, E.pY)(e),
        a = c.Z.getChannel(r);
    return null != n && (t || null != a) ? O(a, (0, b.Z)(n.location.id, n.applicationId)) : I();
}
function N() {
    return (0, y.Z)({
        LayerStore: u.Z,
        PopoutWindowStore: l.Z
    })
        ? S()
        : T();
}
class C extends s.Z {
    _initialize() {
        _.Z.addChangeListener(A), p.Z.addChangeListener(A), f.Z.addChangeListener(A), h.Z.addChangeListener(A), l.Z.addChangeListener(A), g.ZP.addChangeListener(A), u.Z.addChangeListener(N);
    }
    _terminate() {
        _.Z.removeChangeListener(A), p.Z.removeChangeListener(A), f.Z.removeChangeListener(A), h.Z.removeChangeListener(A), l.Z.removeChangeListener(A), g.ZP.removeChangeListener(A), u.Z.removeChangeListener(N);
    }
}
let R = new C();
