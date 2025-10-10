n.d(t, { G: () => b });
var r = n(951288),
    l = n(647438),
    i = n(442837),
    o = n(481060),
    a = n(569545),
    c = n(352954),
    u = n(277642),
    s = n(441894),
    d = n(199902),
    f = n(388032);
function b(e) {
    let { stream: t, channelId: n } = e,
        b = (0, s.J)({ channelId: n }),
        p = (0, i.e7)([d.Z], () => null != d.Z.getActiveStreamForApplicationStream(t)),
        g = (0, a.V9)(t),
        O = (0, u.t)(g),
        I = l.useCallback(() => {
            c.Z.openSecureFramesStreamVerification(g, n);
        }, [n, g]);
    return b && p && !O
        ? (0, r.jsx)(o.sNh, {
              id: "secure-frames-stream-verification",
              label: f.intl.string(f.t.tjbJbW),
              action: I,
          })
        : null;
}
