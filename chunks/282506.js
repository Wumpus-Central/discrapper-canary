let r;
n.d(t, { Z: () => S });
var i = n(570140),
    l = n(519938),
    a = n(317770),
    s = n(317381),
    o = n(358221),
    c = n(569545),
    u = n(928518),
    d = n(199902),
    p = n(592125),
    f = n(819640),
    m = n(131951),
    h = n(366050),
    g = n(19780),
    _ = n(944486),
    b = n(914010),
    E = n(979651),
    O = n(981631),
    I = n(65154);
function y() {
    var e;
    let t = r;
    if (null == t || !h.Z.isOpen(t)) return !1;
    i.Z.wait(() => l.xv(t)), null == (e = g.Z.getRTCConnection()) || e.setPipOpen(!1), (r = null);
}
function v() {
    var e;
    let t = g.Z.getChannelId(),
        n = r === t;
    if (
        (function () {
            let e = g.Z.getChannelId(),
                t = _.Z.getChannelId();
            if (!m.Z.supports(I.AN.VIDEO) || u.Z.getWindowOpen(O.KJ3.CHANNEL_CALL_POPOUT)) return !0;
            let n = null != e && d.Z.getAllActiveStreams().some((t) => !o.Z.isParticipantPoppedOut(e, (0, c.V9)(t)));
            if (
                !(
                    (null != e &&
                        Object.values(E.Z.getVideoVoiceStatesForChannel(e)).some((t) => {
                            let { userId: n } = t;
                            return !m.Z.isLocalVideoDisabled(n) && !o.Z.isParticipantPoppedOut(e, n);
                        })) ||
                    n
                )
            )
                return !0;
            let r = f.Z.hasLayers();
            return !(r && f.Z.getLayers().includes(O.S9g.RTC_DEBUG)) && (!!r || e === t);
        })()
    )
        return y();
    if ((n || y(), null == t)) return !1;
    let a = p.Z.getChannel(t);
    return (
        !(null == a || h.Z.isOpen(t)) &&
        (i.Z.wait(() => l.bA(a.id, O.NYg.VIDEO, { channel: a })),
        null == (e = g.Z.getRTCConnection()) || e.setPipOpen(!0),
        void (r = t))
    );
}
class C extends a.Z {
    _initialize() {
        _.Z.addChangeListener(v),
            b.Z.addChangeListener(v),
            g.Z.addChangeListener(v),
            E.Z.addChangeListener(v),
            f.Z.addChangeListener(v),
            d.Z.addChangeListener(v),
            u.Z.addChangeListener(v),
            m.Z.addChangeListener(v),
            s.ZP.addChangeListener(v),
            o.Z.addChangeListener(v);
    }
    _terminate() {
        _.Z.removeChangeListener(v),
            b.Z.removeChangeListener(v),
            g.Z.removeChangeListener(v),
            E.Z.removeChangeListener(v),
            f.Z.removeChangeListener(v),
            d.Z.removeChangeListener(v),
            u.Z.removeChangeListener(v),
            m.Z.removeChangeListener(v),
            s.ZP.removeChangeListener(v),
            o.Z.removeChangeListener(v);
    }
}
let S = new C();
