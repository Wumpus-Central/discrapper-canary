n.d(t, { Z: () => a });
var r = n(257502),
    i = n(749280),
    l = n(456100);
function a(e) {
    let { enabled: t } = l.c.useExperiment({ location: e }, { autoTrackExposure: !0 }),
        { Component: n, events: a, play: o } = (0, i.w)(),
        { Component: s, events: c, play: u } = (0, r._)();
    return t
        ? {
              events: c,
              play: u,
              Component: s
          }
        : {
              events: a,
              play: o,
              Component: n
          };
}
