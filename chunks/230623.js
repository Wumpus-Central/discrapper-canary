let r;
n.d(t, { ZP: () => I });
var i = n(570140),
    l = n(519938),
    a = n(317770),
    o = n(522474),
    s = n(592125),
    c = n(819640),
    u = n(366050),
    d = n(19780),
    p = n(944486),
    f = n(914010),
    g = n(979651),
    h = n(805422),
    m = n(981631);
function b(e) {
    return "haven:".concat(e);
}
function _() {
    let e = r;
    if (null == e) return !1;
    let t = b(e);
    if (!u.Z.isOpen(t)) return !1;
    let n = u.Z.pipHavenWindow;
    if (null == n || n.id !== t) return (r = null), !1;
    i.Z.wait(() => l.xv(t)), (r = null);
}
function E() {
    return c.Z.hasLayers();
}
function O() {
    let e = d.Z.getChannelId(),
        t = null != e ? s.Z.getChannel(e) : null;
    if (
        (function () {
            let e = d.Z.getChannelId(),
                t = p.Z.getChannelId();
            return !!(null == e || !h.Z.isUserConnected(e) || e === t || o.Z.getWindowOpen(m.KJ3.CHANNEL_CALL_POPOUT));
        })()
    )
        return _();
    if (null != t && h.Z.isUserConnected(t.id)) {
        if (r !== t.id) {
            let e = b(t.id);
            if (u.Z.isOpen(e)) return !1;
            if (null != r) {
                let e = r;
                i.Z.wait(() => l.xv(e));
            }
            return (
                i.Z.wait(() => {
                    l.bA(e, m.NYg.HAVEN, { channel: t }), E() && l.Cp(e);
                }),
                (r = t.id),
                !0
            );
        }
        return !1;
    }
    return _();
}
function v() {
    if (E()) {
        let e = r;
        if (null == e) return;
        let t = b(e);
        u.Z.isOpen(t) && i.Z.wait(() => l.Cp(t));
        return;
    }
    let e = r;
    if (null == e) return;
    let t = b(e);
    u.Z.isOpen(t) && i.Z.wait(() => l.$Z(t));
}
class y extends a.Z {
    _initialize() {
        p.Z.addChangeListener(O),
            f.Z.addChangeListener(O),
            d.Z.addChangeListener(O),
            g.Z.addChangeListener(O),
            c.Z.addChangeListener(v),
            h.Z.addChangeListener(O),
            o.Z.addChangeListener(O);
    }
    _terminate() {
        p.Z.removeChangeListener(O),
            f.Z.removeChangeListener(O),
            d.Z.removeChangeListener(O),
            g.Z.removeChangeListener(O),
            c.Z.removeChangeListener(v),
            h.Z.removeChangeListener(O),
            o.Z.removeChangeListener(O);
    }
}
let I = new y();
