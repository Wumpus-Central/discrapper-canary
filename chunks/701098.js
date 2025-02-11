t.d(n, { G: () => h });
var l = t(200651),
    i = t(192379),
    r = t(442837),
    a = t(481060),
    o = t(569545),
    s = t(352954),
    d = t(277642),
    c = t(441894),
    u = t(199902),
    g = t(388032);
function h(e) {
    let { stream: n, channelId: t, location: h } = e,
        f = (0, c.J)({
            channelId: t,
            location: h
        }),
        Z = (0, r.e7)([u.Z], () => null != u.Z.getActiveStreamForApplicationStream(n)),
        m = (0, o.V9)(n),
        x = (0, d.t)(m),
        I = i.useCallback(() => {
            s.Z.openSecureFramesStreamVerification(m, t);
        }, [t, m]);
    return f && Z && !x
        ? (0, l.jsx)(a.sNh, {
              id: 'secure-frames-stream-verification',
              label: g.intl.string(g.t.tjbJbW),
              action: I
          })
        : null;
}
