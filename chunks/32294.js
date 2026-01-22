let r;
n.d(t, { A: () => S });
var i = n(73153),
    l = n(31728),
    a = n(272355),
    s = n(933958),
    o = n(313961),
    c = n(652896),
    u = n(869146),
    d = n(616356),
    p = n(734057),
    f = n(186111),
    h = n(430452),
    A = n(334463),
    g = n(383501),
    m = n(309010),
    b = n(967198),
    _ = n(977997),
    E = n(652215),
    O = n(731854);
function y() {
    var e;
    let t = r;
    if (null == t || !A.A.isOpen(t)) return !1;
    i.h.wait(() => l.VN(t)), null == (e = g.A.getRTCConnection()) || e.setPipOpen(!1), (r = null);
}
function I() {
    var e;
    let t = g.A.getChannelId(),
        n = r === t;
    if (
        (function () {
            let e = g.A.getChannelId(),
                t = m.A.getChannelId();
            if (!h.A.supports(O.O5.VIDEO) || u.A.getWindowOpen(E.MLl.CHANNEL_CALL_POPOUT)) return !0;
            let n = null != e && d.A.getAllActiveStreams().some((t) => !o.A.isParticipantPoppedOut(e, (0, c._z)(t)));
            if (
                !(
                    (null != e &&
                        Object.values(_.A.getVideoVoiceStatesForChannel(e)).some((t) => {
                            let { userId: n } = t;
                            return !h.A.isLocalVideoDisabled(n) && !o.A.isParticipantPoppedOut(e, n);
                        })) ||
                    n
                )
            )
                return !0;
            let r = f.A.hasLayers();
            return !(r && f.A.getLayers().includes(E.zgK.RTC_DEBUG)) && (!!r || e === t);
        })()
    )
        return y();
    if ((n || y(), null == t)) return !1;
    let a = p.A.getChannel(t);
    return (
        !(null == a || A.A.isOpen(t)) &&
        (i.h.wait(() => l.ho(a.id, E.o1q.VIDEO, { channel: a })),
        null == (e = g.A.getRTCConnection()) || e.setPipOpen(!0),
        void (r = t))
    );
}
class v extends a.A {
    _initialize() {
        m.A.addChangeListener(I),
            b.A.addChangeListener(I),
            g.A.addChangeListener(I),
            _.A.addChangeListener(I),
            f.A.addChangeListener(I),
            d.A.addChangeListener(I),
            u.A.addChangeListener(I),
            h.A.addChangeListener(I),
            s.Ay.addChangeListener(I),
            o.A.addChangeListener(I);
    }
    _terminate() {
        m.A.removeChangeListener(I),
            b.A.removeChangeListener(I),
            g.A.removeChangeListener(I),
            _.A.removeChangeListener(I),
            f.A.removeChangeListener(I),
            d.A.removeChangeListener(I),
            u.A.removeChangeListener(I),
            h.A.removeChangeListener(I),
            s.Ay.removeChangeListener(I),
            o.A.removeChangeListener(I);
    }
}
let S = new v();
