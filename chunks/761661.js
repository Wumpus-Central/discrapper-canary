n.d(t, { CZ: () => c, Qp: () => u, XG: () => h, dh: () => d, f4: () => o });
var i = n(812729),
    s = n.n(i),
    r = n(839214),
    l = n(652896);
let a = (0, r.D)(() => ({ streams: {} }));
function o(e) {
    let t = (0, l._z)(e),
        n = a.useState((e) => e.streams, s());
    return n[t]?.zoom ?? 100;
}
function d(e) {
    return o(e) / 100;
}
function u(e, t) {
    let n = (0, l._z)(e);
    a.setState(
        (e) => ({ ...e, streams: { ...e.streams, [n]: { zoom: t, fitOverride: e.streams[n]?.fitOverride } } }),
        !0,
    );
}
function c(e, t) {
    let n = (0, l._z)(e);
    a.setState((e) => ({ ...e, streams: { ...e.streams, [n]: { zoom: e.streams[n]?.zoom, fitOverride: t } } }));
}
function h(e) {
    let t = (0, l._z)(e),
        n = a.useState((e) => e.streams, s());
    return n[t]?.fitOverride;
}
