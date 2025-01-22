let i;
r.d(n, {
    RI: function () {
        return T;
    },
    jy: function () {
        return S;
    }
});
var a = r(570140),
    o = r(519938),
    s = r(317770),
    l = r(928518),
    u = r(592125),
    c = r(819640),
    d = r(366050),
    f = r(19780),
    p = r(944486),
    h = r(914010),
    _ = r(979651),
    m = r(636449),
    g = r(317381),
    E = r(719296),
    v = r(958185),
    y = r(981631);
function b(e, n) {
    if ((0, m.R)() || d.Z.isOpen(n)) return !1;
    if (null != i) {
        let e = i;
        a.Z.wait(() => o.xv(e));
    }
    a.Z.wait(() => o.bA(n, y.NYg.EMBED_IFRAME, { channel: e })), (i = n);
}
function I() {
    let e = i;
    null != e && d.Z.isOpen(e) && (a.Z.wait(() => o.xv(e)), (i = null));
}
function T(e) {
    let n = null != e ? e : i;
    null != n && d.Z.isOpen(n) && a.Z.wait(() => o.Cp(n));
}
function S(e) {
    let n = null != e ? e : i;
    null != n && d.Z.isOpen(n) && a.Z.wait(() => o.$Z(n));
}
function A() {
    let e = g.ZP.getConnectedActivityChannelId(),
        n = g.ZP.getSelfEmbeddedActivityForChannel(null != e ? e : y.lds),
        r = u.Z.getChannel(e);
    return null == e || null == r || null == n ? I() : b(r, (0, E.Z)(n.location.id, n.applicationId));
}
function C() {
    return (0, v.Z)({
        LayerStore: c.Z,
        PopoutWindowStore: l.Z
    })
        ? T()
        : S();
}
class N extends s.Z {
    _initialize() {
        p.Z.addChangeListener(A), h.Z.addChangeListener(A), f.Z.addChangeListener(A), _.Z.addChangeListener(A), l.Z.addChangeListener(A), g.ZP.addChangeListener(A), c.Z.addChangeListener(C);
    }
    _terminate() {
        p.Z.removeChangeListener(A), h.Z.removeChangeListener(A), f.Z.removeChangeListener(A), _.Z.removeChangeListener(A), l.Z.removeChangeListener(A), g.ZP.removeChangeListener(A), c.Z.removeChangeListener(C);
    }
}
n.ZP = new N();
