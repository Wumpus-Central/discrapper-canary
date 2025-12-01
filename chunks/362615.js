n.d(t, { c: () => m }), n(539854);
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
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
let m = {
    getActiveErrors: () =>
        (0, d.LN)()
            ? a.Z.getAllActiveStreams().reduce((e, t) => {
                  var n;
                  let a = null == (n = s.Z.getRTCConnection((0, i.V9)(t))) ? void 0 : n.getMediaEngineConnectionId();
                  if (null == a || t.ownerId === o.default.getId() || t.state === f.jm8.PAUSED) return e;
                  let p = (0, d.hj)(a, t.ownerId);
                  if (null == p) return e;
                  let m = r.Z.getParticipant(t.channelId, (0, i.V9)(t));
                  if (null == m) return e;
                  let h = (0, l.Wc)(m);
                  return (
                      null == h ||
                          ((p.short.frameRate < (0, d.dj)(h.maxFrameRate) ||
                              p.long.frameRate < (0, d.dj)(h.maxFrameRate)) &&
                              e.push(_({ type: c.u.STREAM_VIEW_LOW_FPS }, (0, u.rT)((0, i.V9)(t))))),
                      e
                  );
              }, [])
            : null,
    makeErrorContextKey: (e) => "".concat(e.streamKey, ":").concat(e.mediaSessionId),
};
