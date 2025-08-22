n.d(t, { G: () => b });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    o = n(481060),
    a = n(569545),
    c = n(352954),
    s = n(277642),
    u = n(441894),
    d = n(199902),
    f = n(388032);
function b(e) {
    let { stream: t, channelId: n } = e,
        b = (0, u.J)({ channelId: n }),
        p = (0, l.e7)([d.Z], () => null != d.Z.getActiveStreamForApplicationStream(t)),
        g = (0, a.V9)(t),
        O = (0, s.t)(g),
        h = i.useCallback(() => {
            c.Z.openSecureFramesStreamVerification(g, n);
        }, [n, g]);
    return b && p && !O
        ? (0, r.jsx)(o.sNh, {
              id: "secure-frames-stream-verification",
              label: f.intl.string(f.t.tjbJbW),
              action: h,
          })
        : null;
}
