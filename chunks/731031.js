(n.d(t, { E: () => m }), n(388685));
var r = n(358221),
    i = n(569545),
    a = n(199902),
    o = n(959457),
    s = n(70956),
    l = n(557457),
    c = n(458725),
    u = n(442741),
    d = n(150457),
    _ = n(981631);
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
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            }));
    }
    return e;
}
let h = 20 * s.Z.Millis.SECOND,
    m = {
        getActiveErrors: () => {
            let e = a.Z.getCurrentUserActiveStream();
            if (null == e || e.state === _.jm8.PAUSED || 0 === a.Z.getViewerIds(e).length) return null;
            let t = (0, i.V9)(e),
                n = o.Z.getRTCConnection(t);
            if (null == n) return null;
            let s = n.getMediaEngineConnectionId();
            if (null == s) return null;
            let f = o.Z.getLastNonZeroRemoteVideoSinkWantsTime(t);
            if (
                (null != f && performance.now() - f < h) ||
                Object.entries(n.getRemoteVideoSinkWants()).every((e) => {
                    let [t, n] = e;
                    return 'any' === t || 0 === n;
                })
            )
                return null;
            let m = r.Z.getParticipant(e.channelId, (0, i.V9)(e));
            if (null == m) return null;
            let g = (0, d.hj)(s, e.ownerId);
            if (null == g) return null;
            let E = (0, l.Wc)(m);
            return null == E ? null : g.short.frameRate < (0, d.dj)(E.maxFrameRate) || g.long.frameRate < (0, d.dj)(E.maxFrameRate) ? [p({ type: c.u.STREAM_SEND_LOW_FPS }, (0, u.rT)((0, i.V9)(e)))] : null;
        },
        makeErrorContextKey: (e) => ''.concat(e.streamKey, ':').concat(e.mediaSessionId)
    };
