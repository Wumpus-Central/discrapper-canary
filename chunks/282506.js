let r;
n.d(t, { Z: () => y });
var i = n(570140),
    l = n(519938),
    o = n(317770),
    a = n(317381),
    s = n(928518),
    c = n(199902),
    u = n(592125),
    d = n(819640),
    p = n(131951),
    h = n(366050),
    f = n(19780),
    g = n(944486),
    m = n(914010),
    b = n(979651),
    _ = n(981631),
    E = n(65154);
function O() {
    var e;
    let t = r;
    if (null == t || !h.Z.isOpen(t)) return !1;
    i.Z.wait(() => l.xv(t)), null === (e = f.Z.getRTCConnection()) || void 0 === e || e.setPipOpen(!1), (r = null);
}
function N() {
    let e = f.Z.getChannelId(),
        t = r === e;
    return !(function () {
        let e = f.Z.getChannelId(),
            t = g.Z.getChannelId();
        if (!p.Z.supports(E.AN.VIDEO) || s.Z.getWindowOpen(_.KJ3.CHANNEL_CALL_POPOUT)) return !0;
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
        ? (t || O(),
          null != e &&
              (function (e) {
                  var t;
                  let n = u.Z.getChannel(e);
                  if (null == n || h.Z.isOpen(e)) return !1;
                  i.Z.wait(() => l.bA(n.id, _.NYg.VIDEO, { channel: n })), null === (t = f.Z.getRTCConnection()) || void 0 === t || t.setPipOpen(!0), (r = e);
              })(e))
        : O();
}
class v extends o.Z {
    _initialize() {
        g.Z.addChangeListener(N), m.Z.addChangeListener(N), f.Z.addChangeListener(N), b.Z.addChangeListener(N), d.Z.addChangeListener(N), c.Z.addChangeListener(N), s.Z.addChangeListener(N), p.Z.addChangeListener(N), a.ZP.addChangeListener(N);
    }
    _terminate() {
        g.Z.removeChangeListener(N), m.Z.removeChangeListener(N), f.Z.removeChangeListener(N), b.Z.removeChangeListener(N), d.Z.removeChangeListener(N), c.Z.removeChangeListener(N), s.Z.removeChangeListener(N), p.Z.removeChangeListener(N), a.ZP.removeChangeListener(N);
    }
}
let y = new v();
