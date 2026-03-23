n.d(t, { CZ: () => c, Qp: () => u, XG: () => h, dh: () => d, f4: () => o });
var i = n(812729),
    s = n.n(i),
    l = n(839214),
    r = n(652896);
let a = (0, l.D)(() => ({ streams: {} }));
function o(e) {
    let t = (0, r._z)(e),
        n = a.useState((e) => e.streams, s());
    return n[t]?.zoom ?? 100;
}
function d(e) {
    return o(e) / 100;
}
function u(e, t) {
    let n = (0, r._z)(e);
    a.setState(
        (e) => ({ ...e, streams: { ...e.streams, [n]: { zoom: t, fitOverride: e.streams[n]?.fitOverride } } }),
        !0,
    );
}
function c(e, t) {
    let n = (0, r._z)(e);
    a.setState((e) => ({ ...e, streams: { ...e.streams, [n]: { zoom: e.streams[n]?.zoom, fitOverride: t } } }));
}
function h(e) {
    let t = (0, r._z)(e),
        n = a.useState((e) => e.streams, s());
    return n[t]?.fitOverride;
}
