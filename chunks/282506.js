let r;
n.d(t, { Z: () => I });
var i = n(570140),
    l = n(523238),
    a = n(317770),
    o = n(317381),
    s = n(928518),
    c = n(199902),
    u = n(592125),
    d = n(819640),
    p = n(131951),
    f = n(366050),
    h = n(19780),
    g = n(944486),
    m = n(914010),
    b = n(979651),
    _ = n(981631),
    O = n(65154);
function E() {
    var e;
    let t = r;
    if (null == t || !f.Z.isOpen(t)) return !1;
    i.Z.wait(() => l.xv(t)), null == (e = h.Z.getRTCConnection()) || e.setPipOpen(!1), (r = null);
}
function v() {
    var e;
    let t = h.Z.getChannelId(),
        n = r === t;
    if (
        (function () {
            let e = h.Z.getChannelId(),
                t = g.Z.getChannelId();
            if (!p.Z.supports(O.AN.VIDEO) || s.Z.getWindowOpen(_.KJ3.CHANNEL_CALL_POPOUT)) return !0;
            let n = c.Z.getAllActiveStreams().length > 0;
            if (
                !(
                    (null != e &&
                        Object.values(b.Z.getVideoVoiceStatesForChannel(e)).some((e) => {
                            let { userId: t } = e;
                            return !p.Z.isLocalVideoDisabled(t);
                        })) ||
                    n
                )
            )
                return !0;
            let r = d.Z.hasLayers();
            return !(r && d.Z.getLayers().includes(_.S9g.RTC_DEBUG)) && (!!r || e === t);
        })()
    )
        return E();
    if ((n || E(), null == t)) return !1;
    let a = u.Z.getChannel(t);
    return (
        !(null == a || f.Z.isOpen(t)) &&
        (i.Z.wait(() => l.bA(a.id, _.NYg.VIDEO, { channel: a })),
        null == (e = h.Z.getRTCConnection()) || e.setPipOpen(!0),
        void (r = t))
    );
}
class y extends a.Z {
    _initialize() {
        g.Z.addChangeListener(v),
            m.Z.addChangeListener(v),
            h.Z.addChangeListener(v),
            b.Z.addChangeListener(v),
            d.Z.addChangeListener(v),
            c.Z.addChangeListener(v),
            s.Z.addChangeListener(v),
            p.Z.addChangeListener(v),
            o.ZP.addChangeListener(v);
    }
    _terminate() {
        g.Z.removeChangeListener(v),
            m.Z.removeChangeListener(v),
            h.Z.removeChangeListener(v),
            b.Z.removeChangeListener(v),
            d.Z.removeChangeListener(v),
            c.Z.removeChangeListener(v),
            s.Z.removeChangeListener(v),
            p.Z.removeChangeListener(v),
            o.ZP.removeChangeListener(v);
    }
}
let I = new y();
