n.d(t, { c: () => h }), n(539854);
var r = n(358221),
    i = n(569545),
    a = n(199902),
    o = n(314897),
    s = n(959457),
    l = n(557457),
    c = n(458725),
    u = n(442741),
    d = n(150457),
    f = n(981631);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
let h = {
    getActiveErrors: () =>
        (0, d.LN)()
            ? a.Z.getAllActiveStreams().reduce((e, t) => {
                  var n;
                  let a = null == (n = s.Z.getRTCConnection((0, i.V9)(t))) ? void 0 : n.getMediaEngineConnectionId();
                  if (null == a || t.ownerId === o.default.getId() || t.state === f.jm8.PAUSED) return e;
                  let _ = (0, d.hj)(a, t.ownerId);
                  if (null == _) return e;
                  let h = r.Z.getParticipant(t.channelId, (0, i.V9)(t));
                  if (null == h) return e;
                  let m = (0, l.Wc)(h);
                  return null == m || ((_.short.frameRate < (0, d.dj)(m.maxFrameRate) || _.long.frameRate < (0, d.dj)(m.maxFrameRate)) && e.push(p({ type: c.u.STREAM_VIEW_LOW_FPS }, (0, u.rT)((0, i.V9)(t))))), e;
              }, [])
            : null,
    makeErrorContextKey: (e) => ''.concat(e.streamKey, ':').concat(e.mediaSessionId)
};
