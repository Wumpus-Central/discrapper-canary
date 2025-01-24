let i;
var r = n(570140),
    l = n(519938),
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
    f = n(914010),
    _ = n(979651),
    E = n(981631),
    I = n(65154);
function C() {
    var e;
    let t = i;
    if (null == t || !m.Z.isOpen(t)) return !1;
    r.Z.wait(() => l.xv(t)), null === (e = p.Z.getRTCConnection()) || void 0 === e || e.setPipOpen(!1), (i = null);
}
function v() {
    let e = p.Z.getChannelId(),
        t = i === e;
    return (function () {
        let e = p.Z.getChannelId(),
            t = g.Z.getChannelId();
        if (!h.Z.supports(I.AN.VIDEO) || o.Z.getWindowOpen(E.KJ3.CHANNEL_CALL_POPOUT)) return !0;
        let n = c.Z.getAllActiveStreams().length > 0,
            i =
                null != e &&
                Object.values(_.Z.getVideoVoiceStatesForChannel(e)).some((e) => {
                    let { userId: t } = e;
                    return !h.Z.isLocalVideoDisabled(t);
                });
        if (!(i || n)) return !0;
        let r = u.Z.hasLayers();
        return !(r && u.Z.getLayers().includes(E.S9g.RTC_DEBUG)) && (!!r || e === t || !1);
    })()
        ? C()
        : (!t && C(),
          null != e &&
              (function (e) {
                  var t;
                  let n = d.Z.getChannel(e);
                  if (null == n || m.Z.isOpen(e)) return !1;
                  r.Z.wait(() => l.bA(n.id, E.NYg.VIDEO, { channel: n })), null === (t = p.Z.getRTCConnection()) || void 0 === t || t.setPipOpen(!0), (i = e);
              })(e));
}
class N extends a.Z {
    _initialize() {
        g.Z.addChangeListener(v), f.Z.addChangeListener(v), p.Z.addChangeListener(v), _.Z.addChangeListener(v), u.Z.addChangeListener(v), c.Z.addChangeListener(v), o.Z.addChangeListener(v), h.Z.addChangeListener(v), s.ZP.addChangeListener(v);
    }
    _terminate() {
        g.Z.removeChangeListener(v), f.Z.removeChangeListener(v), p.Z.removeChangeListener(v), _.Z.removeChangeListener(v), u.Z.removeChangeListener(v), c.Z.removeChangeListener(v), o.Z.removeChangeListener(v), h.Z.removeChangeListener(v), s.ZP.removeChangeListener(v);
    }
}
t.Z = new N();
