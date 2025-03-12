let r;
n.d(t, {
    RI: () => I,
    ZP: () => C,
    jy: () => S
});
var i = n(115911),
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
    E = n(719296),
    v = n(958185),
    b = n(981631);
function y(e, t, n) {
    if ((0, m.R)({ isContextless: t.location.kind === i.X.CONTEXTLESS }) || d.Z.isOpen(n)) return !1;
    if (null != r) {
        let e = r;
        o.Z.wait(() => a.xv(e));
    }
    o.Z.wait(() => a.bA(n, b.NYg.EMBED_IFRAME, { channel: e })), (r = n);
}
function O() {
    let e = r;
    null != e && d.Z.isOpen(e) && (o.Z.wait(() => a.xv(e)), (r = null));
}
function I(e) {
    let t = null != e ? e : r;
    null != t && d.Z.isOpen(t) && o.Z.wait(() => a.Cp(t));
}
function S(e) {
    let t = null != e ? e : r;
    null != t && d.Z.isOpen(t) && o.Z.wait(() => a.$Z(t));
}
function T() {
    let e = g.ZP.getConnectedActivityChannelId(),
        t = g.ZP.getSelfEmbeddedActivityForChannel(null != e ? e : b.lds),
        n = c.Z.getChannel(e);
    if (null == e || null == n || null == t) return O();
    {
        let e = (0, E.Z)(t.location.id, t.applicationId);
        return y(n, t, e);
    }
}
function N() {
    return (0, v.Z)({
        LayerStore: u.Z,
        PopoutWindowStore: l.Z
    })
        ? I()
        : S();
}
class A extends s.Z {
    _initialize() {
        _.Z.addChangeListener(T), p.Z.addChangeListener(T), f.Z.addChangeListener(T), h.Z.addChangeListener(T), l.Z.addChangeListener(T), g.ZP.addChangeListener(T), u.Z.addChangeListener(N);
    }
    _terminate() {
        _.Z.removeChangeListener(T), p.Z.removeChangeListener(T), f.Z.removeChangeListener(T), h.Z.removeChangeListener(T), l.Z.removeChangeListener(T), g.ZP.removeChangeListener(T), u.Z.removeChangeListener(N);
    }
}
let C = new A();
