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
    g = n(131951),
    h = n(366050),
    m = n(19780),
    _ = n(944486),
    b = n(914010),
    E = n(979651),
    O = n(981631),
    v = n(65154);
function y() {
    var e;
    let t = r;
    if (null == t || !h.Z.isOpen(t)) return !1;
    i.Z.wait(() => l.xv(t)), null == (e = m.Z.getRTCConnection()) || e.setPipOpen(!1), (r = null);
}
function I() {
    var e;
    let t = m.Z.getChannelId(),
        n = r === t;
    if (
        (function () {
            let e = m.Z.getChannelId(),
                t = _.Z.getChannelId();
            if (!g.Z.supports(v.AN.VIDEO) || u.Z.getWindowOpen(O.KJ3.CHANNEL_CALL_POPOUT)) return !0;
            let n = null != e && d.Z.getAllActiveStreams().some((t) => !o.Z.isParticipantPoppedOut(e, (0, c.V9)(t)));
            if (
                !(
                    (null != e &&
                        Object.values(E.Z.getVideoVoiceStatesForChannel(e)).some((t) => {
                            let { userId: n } = t;
                            return !g.Z.isLocalVideoDisabled(n) && !o.Z.isParticipantPoppedOut(e, n);
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
        null == (e = m.Z.getRTCConnection()) || e.setPipOpen(!0),
        void (r = t))
    );
}
class C extends a.Z {
    _initialize() {
        _.Z.addChangeListener(I),
            b.Z.addChangeListener(I),
            m.Z.addChangeListener(I),
            E.Z.addChangeListener(I),
            f.Z.addChangeListener(I),
            d.Z.addChangeListener(I),
            u.Z.addChangeListener(I),
            g.Z.addChangeListener(I),
            s.ZP.addChangeListener(I),
            o.Z.addChangeListener(I);
    }
    _terminate() {
        _.Z.removeChangeListener(I),
            b.Z.removeChangeListener(I),
            m.Z.removeChangeListener(I),
            E.Z.removeChangeListener(I),
            f.Z.removeChangeListener(I),
            d.Z.removeChangeListener(I),
            u.Z.removeChangeListener(I),
            g.Z.removeChangeListener(I),
            s.ZP.removeChangeListener(I),
            o.Z.removeChangeListener(I);
    }
}
let S = new C();
