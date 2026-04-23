let i;
n.d(t, { A: () => O });
var r = n(73153),
    a = n(31728),
    l = n(272355),
    s = n(933958),
    o = n(313961),
    d = n(652896),
    u = n(869146),
    c = n(616356),
    A = n(734057),
    h = n(186111),
    _ = n(430452),
    E = n(334463),
    p = n(383501),
    m = n(309010),
    g = n(967198),
    I = n(977997),
    C = n(652215),
    f = n(731854);
function T() {
    let e = i;
    if (null == e || !E.A.isOpen(e)) return !1;
    r.h.wait(() => a.VN(e)), p.A.getRTCConnection()?.setPipOpen(!1), (i = null);
}
function S() {
    let e = p.A.getChannelId(),
        t = i === e;
    if (
        (function () {
            let e = p.A.getChannelId(),
                t = m.A.getChannelId();
            if (!_.Ay.supports(f.O5.VIDEO) || u.A.getWindowOpen(C.MLl.CHANNEL_CALL_POPOUT)) return !0;
            let n = null != e && c.A.getAllActiveStreams().some((t) => !o.A.isParticipantPoppedOut(e, (0, d._z)(t)));
            if (
                !(
                    (null != e &&
                        Object.values(I.A.getVideoVoiceStatesForChannel(e)).some((t) => {
                            let { userId: n } = t;
                            return !_.Ay.isLocalVideoDisabled(n) && !o.A.isParticipantPoppedOut(e, n);
                        })) ||
                    n
                )
            )
                return !0;
            let i = h.A.hasLayers();
            return !(i && h.A.getLayers().includes(C.zgK.RTC_DEBUG)) && (!!i || e === t);
        })()
    )
        return T();
    if ((t || T(), null == e)) return !1;
    let n = A.A.getChannel(e);
    return (
        !(null == n || E.A.isOpen(e)) &&
        (r.h.wait(() => a.ho(n.id, C.o1q.VIDEO, { channel: n })), p.A.getRTCConnection()?.setPipOpen(!0), void (i = e))
    );
}
class N extends l.A {
    _initialize() {
        m.A.addChangeListener(S),
            g.A.addChangeListener(S),
            p.A.addChangeListener(S),
            I.A.addChangeListener(S),
            h.A.addChangeListener(S),
            c.A.addChangeListener(S),
            u.A.addChangeListener(S),
            _.Ay.addChangeListener(S),
            s.Ay.addChangeListener(S),
            o.A.addChangeListener(S);
    }
    _terminate() {
        m.A.removeChangeListener(S),
            g.A.removeChangeListener(S),
            p.A.removeChangeListener(S),
            I.A.removeChangeListener(S),
            h.A.removeChangeListener(S),
            c.A.removeChangeListener(S),
            u.A.removeChangeListener(S),
            _.Ay.removeChangeListener(S),
            s.Ay.removeChangeListener(S),
            o.A.removeChangeListener(S);
    }
}
let O = new N();
