n.d(t, { G: () => p });
var r = n(54381),
    l = n(473749),
    i = n(442837),
    o = n(481060),
    a = n(569545),
    c = n(352954),
    s = n(277642),
    u = n(441894),
    d = n(199902),
    f = n(388032);
function p(e) {
    let { stream: t, channelId: n } = e,
        p = (0, u.J)({ channelId: n }),
        g = (0, i.e7)([d.Z], () => null != d.Z.getActiveStreamForApplicationStream(t)),
        b = (0, a.V9)(t),
        h = (0, s.t)(b),
        j = l.useCallback(() => {
            c.Z.openSecureFramesStreamVerification(b, n);
        }, [n, b]);
    return p && g && !h
        ? (0, r.jsx)(o.sNh, {
              id: "secure-frames-stream-verification",
              label: f.intl.string(f.t.tjbJbf),
              action: j,
          })
        : null;
}
