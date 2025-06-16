n.d(t, { E: () => p });
var r = n(358221),
    i = n(569545),
    a = n(199902),
    o = n(959457),
    s = n(557457),
    l = n(458725),
    c = n(442741),
    u = n(150457),
    d = n(981631);
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
    getActiveErrors: () => {
        var e;
        let t = a.Z.getCurrentUserActiveStream();
        if (null == t || t.state === d.jm8.PAUSED || 0 === a.Z.getViewerIds(t).length) return null;
        let n = null == (e = o.Z.getRTCConnection((0, i.V9)(t))) ? void 0 : e.getMediaEngineConnectionId();
        if (null == n) return null;
        let f = r.Z.getParticipant(t.channelId, (0, i.V9)(t));
        if (null == f) return null;
        let p = (0, u.hj)(n, t.ownerId);
        if (null == p) return null;
        let h = (0, s.Wc)(f);
        return null == h ? null : p.short.frameRate < (0, u.dj)(h.maxFrameRate) || p.long.frameRate < (0, u.dj)(h.maxFrameRate) ? [_({ type: l.u.STREAM_SEND_LOW_FPS }, (0, c.rT)((0, i.V9)(t)))] : null;
    },
    makeErrorContextKey: (e) => ''.concat(e.streamKey, ':').concat(e.mediaSessionId)
};
