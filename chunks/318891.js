let r;
n.d(t, {
    RI: () => S,
    ZP: () => R,
    jy: () => T
});
var i = n(252258),
    o = n(570140),
    a = n(519938),
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
function O(e, t, n) {
    if ((0, m.R)({ isContextless: t.location.kind === i.E.CONTEXTLESS }) || d.Z.isOpen(n)) return !1;
    if (null != r) {
        let e = r;
        o.Z.wait(() => a.xv(e));
    }
    o.Z.wait(() => a.bA(n, v.NYg.EMBED_IFRAME, { channel: e })), (r = n);
}
function I() {
    let e = r;
    null != e && d.Z.isOpen(e) && (o.Z.wait(() => a.xv(e)), (r = null));
}
function S(e) {
    let t = null != e ? e : r;
    null != t && d.Z.isOpen(t) && o.Z.wait(() => a.Cp(t));
}
function T(e) {
    let t = null != e ? e : r;
    null != t && d.Z.isOpen(t) && o.Z.wait(() => a.$Z(t));
}
function N() {
    let e = g.ZP.getConnectedActivityLocation(),
        t = null != e ? g.ZP.getSelfEmbeddedActivityForLocation(e) : null,
        n = (0, E.pY)(e),
        r = c.Z.getChannel(n);
    if (null == t || null == r) return I();
    {
        let e = (0, b.Z)(t.location.id, t.applicationId);
        return O(r, t, e);
    }
}
function A() {
    return (0, y.Z)({
        LayerStore: u.Z,
        PopoutWindowStore: l.Z
    })
        ? S()
        : T();
}
class C extends s.Z {
    _initialize() {
        _.Z.addChangeListener(N), p.Z.addChangeListener(N), f.ZP.addChangeListener(N), h.Z.addChangeListener(N), l.Z.addChangeListener(N), g.ZP.addChangeListener(N), u.Z.addChangeListener(A);
    }
    _terminate() {
        _.Z.removeChangeListener(N), p.Z.removeChangeListener(N), f.ZP.removeChangeListener(N), h.Z.removeChangeListener(N), l.Z.removeChangeListener(N), g.ZP.removeChangeListener(N), u.Z.removeChangeListener(A);
    }
}
let R = new C();
