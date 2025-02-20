let r;
n.d(t, {
    RI: () => O,
    ZP: () => A,
    jy: () => S
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
    p = n(914010),
    _ = n(979651),
    h = n(636449),
    m = n(317381),
    g = n(719296),
    E = n(958185),
    v = n(981631);
function b(e, t) {
    if ((0, h.R)() || u.Z.isOpen(t)) return !1;
    if (null != r) {
        let e = r;
        i.Z.wait(() => o.xv(e));
    }
    i.Z.wait(() => o.bA(t, v.NYg.EMBED_IFRAME, { channel: e })), (r = t);
}
function y() {
    let e = r;
    null != e && u.Z.isOpen(e) && (i.Z.wait(() => o.xv(e)), (r = null));
}
function O(e) {
    let t = null != e ? e : r;
    null != t && u.Z.isOpen(t) && i.Z.wait(() => o.Cp(t));
}
function S(e) {
    let t = null != e ? e : r;
    null != t && u.Z.isOpen(t) && i.Z.wait(() => o.$Z(t));
}
function I() {
    let e = m.ZP.getConnectedActivityChannelId(),
        t = m.ZP.getSelfEmbeddedActivityForChannel(null != e ? e : v.lds),
        n = l.Z.getChannel(e);
    return null == e || null == n || null == t ? y() : b(n, (0, g.Z)(t.location.id, t.applicationId));
}
function T() {
    return (0, E.Z)({
        LayerStore: c.Z,
        PopoutWindowStore: s.Z
    })
        ? O()
        : S();
}
class N extends a.Z {
    _initialize() {
        f.Z.addChangeListener(I), p.Z.addChangeListener(I), d.Z.addChangeListener(I), _.Z.addChangeListener(I), s.Z.addChangeListener(I), m.ZP.addChangeListener(I), c.Z.addChangeListener(T);
    }
    _terminate() {
        f.Z.removeChangeListener(I), p.Z.removeChangeListener(I), d.Z.removeChangeListener(I), _.Z.removeChangeListener(I), s.Z.removeChangeListener(I), m.ZP.removeChangeListener(I), c.Z.removeChangeListener(T);
    }
}
let A = new N();
