n.d(t, { G: () => b });
var r = n(54381),
    l = n(473749),
    i = n(442837),
    o = n(481060),
    u = n(569545),
    a = n(352954),
    c = n(277642),
    s = n(441894),
    d = n(199902),
    f = n(388032);
function b(e) {
    let { stream: t, channelId: n } = e,
        b = (0, s.J)({ channelId: n }),
        p = (0, i.e7)([d.Z], () => null != d.Z.getActiveStreamForApplicationStream(t)),
        O = (0, u.V9)(t),
        g = (0, c.t)(O),
        I = l.useCallback(() => {
            a.Z.openSecureFramesStreamVerification(O, n);
        }, [n, O]);
    return b && p && !g
        ? (0, r.jsx)(o.sNh, {
              id: "secure-frames-stream-verification",
              label: f.intl.string(f.t.tjbJbf),
              action: I,
          })
        : null;
}
