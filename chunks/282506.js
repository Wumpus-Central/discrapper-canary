let i;
n.d(t, { Z: () => T });
var l = n(570140),
    r = n(519938),
    a = n(317770),
    s = n(317381),
    o = n(928518),
    c = n(199902),
    d = n(592125),
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
function v() {
    let e = p.Z.getChannelId(),
        t = i === e;
    return !(function () {
        let e = p.Z.getChannelId(),
            t = g.Z.getChannelId();
        if (!h.Z.supports(I.AN.VIDEO) || o.Z.getWindowOpen(E.KJ3.CHANNEL_CALL_POPOUT)) return !0;
        let n = c.Z.getAllActiveStreams().length > 0;
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
                  let n = d.Z.getChannel(e);
                  if (null == n || m.Z.isOpen(e)) return !1;
                  l.Z.wait(() => r.bA(n.id, E.NYg.VIDEO, { channel: n })), null === (t = p.Z.getRTCConnection()) || void 0 === t || t.setPipOpen(!0), (i = e);
              })(e))
        : C();
}
class N extends a.Z {
    _initialize() {
        g.Z.addChangeListener(v), _.Z.addChangeListener(v), p.Z.addChangeListener(v), f.Z.addChangeListener(v), u.Z.addChangeListener(v), c.Z.addChangeListener(v), o.Z.addChangeListener(v), h.Z.addChangeListener(v), s.ZP.addChangeListener(v);
    }
    _terminate() {
        g.Z.removeChangeListener(v), _.Z.removeChangeListener(v), p.Z.removeChangeListener(v), f.Z.removeChangeListener(v), u.Z.removeChangeListener(v), c.Z.removeChangeListener(v), o.Z.removeChangeListener(v), h.Z.removeChangeListener(v), s.ZP.removeChangeListener(v);
    }
}
let T = new N();
