n.d(t, { Z: () => a });
var r = n(257502),
    i = n(749280),
    o = n(456100);
function a(e) {
    let { enabled: t } = o.c.useExperiment({ location: e }, { autoTrackExposure: !0 }),
        { Component: n, events: a, play: s } = (0, i.w)(),
        { Component: l, events: c, play: u } = (0, r._)();
    return t
        ? {
              events: c,
              play: u,
              Component: l,
          }
        : {
              events: a,
              play: s,
              Component: n,
          };
}
