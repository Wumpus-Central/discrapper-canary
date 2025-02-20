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
    let { stream: t, channelId: n, location: g } = e,
        b = (0, u.J)({
            channelId: n,
            location: g
        }),
        p = (0, i.e7)([d.Z], () => null != d.Z.getActiveStreamForApplicationStream(t)),
        h = (0, a.V9)(t),
        j = (0, s.t)(h),
        m = l.useCallback(() => {
            c.Z.openSecureFramesStreamVerification(h, n);
        }, [n, h]);
    return b && p && !j
        ? (0, r.jsx)(o.sNh, {
              id: 'secure-frames-stream-verification',
              label: f.NW.string(f.t.tjbJbW),
              action: m
          })
        : null;
}
