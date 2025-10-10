n.d(t, { Z: () => a });
var i = n(257502),
    r = n(749280),
    l = n(456100);
function a(e) {
    let { enabled: t } = l.c.useExperiment({ location: e }, { autoTrackExposure: !0 }),
        { Component: n, events: a, play: o } = (0, r.w)(),
        { Component: s, events: c, play: u } = (0, i._)();
    return t
        ? {
              events: c,
              play: u,
              Component: s,
          }
        : {
              events: a,
              play: o,
              Component: n,
          };
}
