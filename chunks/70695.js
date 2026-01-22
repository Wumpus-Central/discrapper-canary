n.d(t, { U: () => m });
var r = n(313961),
    i = n(652896),
    a = n(616356),
    s = n(162605),
    o = n(927813),
    l = n(650338),
    c = n(487329),
    u = n(601900),
    d = n(548370),
    f = n(652215);
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
let h = 20 * o.A.Millis.SECOND,
    m = {
        getActiveErrors: () => {
            let e = a.A.getCurrentUserActiveStream();
            if (null == e || e.state === f.XYD.PAUSED || 0 === a.A.getViewerIds(e).length) return null;
            let t = (0, i._z)(e),
                n = s.A.getRTCConnection(t);
            if (null == n) return null;
            let o = n.getMediaEngineConnectionId();
            if (null == o) return null;
            let p = s.A.getLastNonZeroRemoteVideoSinkWantsTime(t);
            if ((null != p && performance.now() - p < h) || !n.hasActiveRemoteWants()) return null;
            let m = r.A.getParticipant(e.channelId, (0, i._z)(e));
            if (null == m) return null;
            let g = (0, d.xA)(o, e.ownerId);
            if (null == g) return null;
            let E = (0, l.wz)(m);
            return null == E
                ? null
                : g.short.frameRate < (0, d.s1)(E.maxFrameRate) || g.long.frameRate < (0, d.s1)(E.maxFrameRate)
                  ? [_({ type: c.iy.STREAM_SEND_LOW_FPS }, (0, u.id)((0, i._z)(e)))]
                  : null;
        },
        makeErrorContextKey: (e) => "".concat(e.streamKey, ":").concat(e.mediaSessionId),
    };
