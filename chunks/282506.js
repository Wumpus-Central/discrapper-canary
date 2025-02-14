let i;
n.d(t, { Z: () => T });
var l = n(570140),
    r = n(519938),
    a = n(317770),
    s = n(317381),
    o = n(928518),
    d = n(199902),
    c = n(592125),
    u = n(819640),
    h = n(131951),
    m = n(366050),
    p = n(19780),
    g = n(944486),
    _ = n(914010),
    f = n(979651),
    E = n(981631),
    I = n(65154);
function C() {
    var e;
    let t = i;
    if (null == t || !m.Z.isOpen(t)) return !1;
    l.Z.wait(() => r.xv(t)), null === (e = p.Z.getRTCConnection()) || void 0 === e || e.setPipOpen(!1), (i = null);
}
function N() {
    let e = p.Z.getChannelId(),
        t = i === e;
    return !(function () {
        let e = p.Z.getChannelId(),
            t = g.Z.getChannelId();
        if (!h.Z.supports(I.AN.VIDEO) || o.Z.getWindowOpen(E.KJ3.CHANNEL_CALL_POPOUT)) return !0;
        let n = d.Z.getAllActiveStreams().length > 0;
        if (
            !(
                (null != e &&
                    Object.values(f.Z.getVideoVoiceStatesForChannel(e)).some((e) => {
                        let { userId: t } = e;
                        return !h.Z.isLocalVideoDisabled(t);
                    })) ||
                n
            )
        )
            return !0;
        let i = u.Z.hasLayers();
        return !(i && u.Z.getLayers().includes(E.S9g.RTC_DEBUG)) && (!!i || e === t);
    })()
        ? (t || C(),
          null != e &&
              (function (e) {
                  var t;
                  let n = c.Z.getChannel(e);
                  if (null == n || m.Z.isOpen(e)) return !1;
                  l.Z.wait(() => r.bA(n.id, E.NYg.VIDEO, { channel: n })), null === (t = p.Z.getRTCConnection()) || void 0 === t || t.setPipOpen(!0), (i = e);
              })(e))
        : C();
}
class v extends a.Z {
    _initialize() {
        g.Z.addChangeListener(N), _.Z.addChangeListener(N), p.Z.addChangeListener(N), f.Z.addChangeListener(N), u.Z.addChangeListener(N), d.Z.addChangeListener(N), o.Z.addChangeListener(N), h.Z.addChangeListener(N), s.ZP.addChangeListener(N);
    }
    _terminate() {
        g.Z.removeChangeListener(N), _.Z.removeChangeListener(N), p.Z.removeChangeListener(N), f.Z.removeChangeListener(N), u.Z.removeChangeListener(N), d.Z.removeChangeListener(N), o.Z.removeChangeListener(N), h.Z.removeChangeListener(N), s.ZP.removeChangeListener(N);
    }
}
let T = new v();
