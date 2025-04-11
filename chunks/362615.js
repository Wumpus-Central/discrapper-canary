n.d(t, { c: () => p }), n(539854);
var r = n(358221),
    i = n(569545),
    o = n(199902),
    a = n(314897),
    s = n(959457),
    l = n(557457),
    c = n(458725),
    u = n(442741),
    d = n(150457);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
let p = {
    getActiveErrors: () =>
        (0, d.LN)()
            ? o.Z.getAllActiveStreams().reduce((e, t) => {
                  var n;
                  let o = null == (n = s.Z.getRTCConnection((0, i.V9)(t))) ? void 0 : n.getMediaEngineConnectionId();
                  if (null == o || t.ownerId === a.default.getId()) return e;
                  let f = (0, d.hj)(o, t.ownerId);
                  if (null == f) return e;
                  let p = r.Z.getParticipant(t.channelId, (0, i.V9)(t));
                  if (null == p) return e;
                  let h = (0, l.Wc)(p);
                  return null == h || ((f.short.frameRate < (0, d.dj)(h.maxFrameRate) || f.long.frameRate < (0, d.dj)(h.maxFrameRate)) && e.push(_({ type: c.u.STREAM_VIEW_LOW_FPS }, (0, u.rT)((0, i.V9)(t))))), e;
              }, [])
            : null,
    makeErrorContextKey: (e) => ''.concat(e.streamKey, ':').concat(e.mediaSessionId)
};
