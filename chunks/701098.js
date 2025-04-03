n.d(t, { G: () => g });
var r = n(200651),
    l = n(192379),
    i = n(442837),
    o = n(481060),
    a = n(569545),
    c = n(352954),
    s = n(277642),
    u = n(441894),
    d = n(199902),
    f = n(388032);
function g(e) {
    let { stream: t, channelId: n } = e,
        g = (0, u.J)({ channelId: n }),
        b = (0, i.e7)([d.Z], () => null != d.Z.getActiveStreamForApplicationStream(t)),
        p = (0, a.V9)(t),
        h = (0, s.t)(p),
        j = l.useCallback(() => {
            c.Z.openSecureFramesStreamVerification(p, n);
        }, [n, p]);
    return g && b && !h
        ? (0, r.jsx)(o.sNh, {
              id: 'secure-frames-stream-verification',
              label: f.NW.string(f.t.tjbJbW),
              action: j
          })
        : null;
}
