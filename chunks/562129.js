n.d(t, { Z: () => o });
var r = n(257502),
    i = n(749280),
    a = n(456100);
function o(e) {
    let { enabled: t } = a.c.useExperiment({ location: e }, { autoTrackExposure: !0 }),
        { Component: n, events: o, play: s } = (0, i.w)(),
        { Component: l, events: c, play: u } = (0, r._)();
    return t
        ? {
              events: c,
              play: u,
              Component: l,
          }
        : {
              events: o,
              play: s,
              Component: n,
          };
}
