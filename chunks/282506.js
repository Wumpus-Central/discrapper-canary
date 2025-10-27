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
    h = n(131951),
    m = n(366050),
    g = n(19780),
    _ = n(944486),
    b = n(914010),
    E = n(979651),
    O = n(981631),
    I = n(65154);
function v() {
    var e;
    let t = r;
    if (null == t || !m.Z.isOpen(t)) return !1;
    i.Z.wait(() => l.xv(t)), null == (e = g.Z.getRTCConnection()) || e.setPipOpen(!1), (r = null);
}
function y() {
    var e;
    let t = g.Z.getChannelId(),
        n = r === t;
    if (
        (function () {
            let e = g.Z.getChannelId(),
                t = _.Z.getChannelId();
            if (!h.Z.supports(I.AN.VIDEO) || u.Z.getWindowOpen(O.KJ3.CHANNEL_CALL_POPOUT)) return !0;
            let n = null != e && d.Z.getAllActiveStreams().some((t) => !o.Z.isParticipantPoppedOut(e, (0, c.V9)(t)));
            if (
                !(
                    (null != e &&
                        Object.values(E.Z.getVideoVoiceStatesForChannel(e)).some((t) => {
                            let { userId: n } = t;
                            return !h.Z.isLocalVideoDisabled(n) && !o.Z.isParticipantPoppedOut(e, n);
                        })) ||
                    n
                )
            )
                return !0;
            let r = f.Z.hasLayers();
            return !(r && f.Z.getLayers().includes(O.S9g.RTC_DEBUG)) && (!!r || e === t);
        })()
    )
        return v();
    if ((n || v(), null == t)) return !1;
    let a = p.Z.getChannel(t);
    return (
        !(null == a || m.Z.isOpen(t)) &&
        (i.Z.wait(() => l.bA(a.id, O.NYg.VIDEO, { channel: a })),
        null == (e = g.Z.getRTCConnection()) || e.setPipOpen(!0),
        void (r = t))
    );
}
class C extends a.Z {
    _initialize() {
        _.Z.addChangeListener(y),
            b.Z.addChangeListener(y),
            g.Z.addChangeListener(y),
            E.Z.addChangeListener(y),
            f.Z.addChangeListener(y),
            d.Z.addChangeListener(y),
            u.Z.addChangeListener(y),
            h.Z.addChangeListener(y),
            s.ZP.addChangeListener(y),
            o.Z.addChangeListener(y);
    }
    _terminate() {
        _.Z.removeChangeListener(y),
            b.Z.removeChangeListener(y),
            g.Z.removeChangeListener(y),
            E.Z.removeChangeListener(y),
            f.Z.removeChangeListener(y),
            d.Z.removeChangeListener(y),
            u.Z.removeChangeListener(y),
            h.Z.removeChangeListener(y),
            s.ZP.removeChangeListener(y),
            o.Z.removeChangeListener(y);
    }
}
let S = new C();
