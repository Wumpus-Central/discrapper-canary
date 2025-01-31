t.d(n, { G: () => h });
var l = t(200651),
    i = t(192379),
    r = t(442837),
    a = t(481060),
    o = t(569545),
    s = t(352954),
    c = t(277642),
    u = t(441894),
    d = t(199902),
    g = t(388032);
function h(e) {
    let { stream: n, channelId: t, location: h } = e,
        f = (0, u.J)({
            channelId: t,
            location: h
        }),
        Z = (0, r.e7)([d.Z], () => null != d.Z.getActiveStreamForApplicationStream(n)),
        I = (0, o.V9)(n),
        m = (0, c.t)(I),
        S = i.useCallback(() => {
            s.Z.openSecureFramesStreamVerification(I, t);
        }, [t, I]);
    return f && Z && !m
        ? (0, l.jsx)(a.sNh, {
              id: 'secure-frames-stream-verification',
              label: g.intl.string(g.t.tjbJbW),
              action: S
          })
        : null;
}
