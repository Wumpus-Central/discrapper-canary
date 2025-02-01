let i;
n.d(t, {
    RI: () => T,
    ZP: () => C,
    jy: () => b
});
var r = n(570140),
    a = n(519938),
    s = n(317770),
    o = n(928518),
    l = n(592125),
    u = n(819640),
    c = n(366050),
    d = n(19780),
    f = n(944486),
    _ = n(914010),
    p = n(979651),
    h = n(636449),
    m = n(317381),
    g = n(719296),
    E = n(958185),
    v = n(981631);
function y(e, t) {
    if ((0, h.R)() || c.Z.isOpen(t)) return !1;
    if (null != i) {
        let e = i;
        r.Z.wait(() => a.xv(e));
    }
    r.Z.wait(() => a.bA(t, v.NYg.EMBED_IFRAME, { channel: e })), (i = t);
}
function I() {
    let e = i;
    null != e && c.Z.isOpen(e) && (r.Z.wait(() => a.xv(e)), (i = null));
}
function T(e) {
    let t = null != e ? e : i;
    null != t && c.Z.isOpen(t) && r.Z.wait(() => a.Cp(t));
}
function b(e) {
    let t = null != e ? e : i;
    null != t && c.Z.isOpen(t) && r.Z.wait(() => a.$Z(t));
}
function S() {
    let e = m.ZP.getConnectedActivityChannelId(),
        t = m.ZP.getSelfEmbeddedActivityForChannel(null != e ? e : v.lds),
        n = l.Z.getChannel(e);
    return null == e || null == n || null == t ? I() : y(n, (0, g.Z)(t.location.id, t.applicationId));
}
function A() {
    return (0, E.Z)({
        LayerStore: u.Z,
        PopoutWindowStore: o.Z
    })
        ? T()
        : b();
}
class N extends s.Z {
    _initialize() {
        f.Z.addChangeListener(S), _.Z.addChangeListener(S), d.Z.addChangeListener(S), p.Z.addChangeListener(S), o.Z.addChangeListener(S), m.ZP.addChangeListener(S), u.Z.addChangeListener(A);
    }
    _terminate() {
        f.Z.removeChangeListener(S), _.Z.removeChangeListener(S), d.Z.removeChangeListener(S), p.Z.removeChangeListener(S), o.Z.removeChangeListener(S), m.ZP.removeChangeListener(S), u.Z.removeChangeListener(A);
    }
}
let C = new N();
