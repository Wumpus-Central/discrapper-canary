"use strict";
n.d(t, { CZ: () => d, Qp: () => c, XG: () => _, dh: () => u, f4: () => l });
var r = n(812729),
    i = n.n(r),
    s = n(839214),
    a = n(652896);
let o = (0, s.D)(() => ({ streams: {} }));
function l(e) {
    let t = (0, a._z)(e),
        n = o.useState((e) => e.streams, i());
    return n[t]?.zoom ?? 100;
}
function u(e) {
    return l(e) / 100;
}
function c(e, t) {
    let n = (0, a._z)(e);
    o.setState(
        (e) => ({ ...e, streams: { ...e.streams, [n]: { zoom: t, fitOverride: e.streams[n]?.fitOverride } } }),
        !0,
    );
}
function d(e, t) {
    let n = (0, a._z)(e);
    o.setState((e) => ({ ...e, streams: { ...e.streams, [n]: { zoom: e.streams[n]?.zoom, fitOverride: t } } }));
}
function _(e) {
    let t = (0, a._z)(e),
        n = o.useState((e) => e.streams, i());
    return n[t]?.fitOverride;
}
