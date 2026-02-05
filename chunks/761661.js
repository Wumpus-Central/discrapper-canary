n.d(t, { CZ: () => c, Qp: () => u, XG: () => h, dh: () => d, f4: () => o });
var i = n(812729),
    l = n.n(i),
    a = n(839214),
    s = n(652896);
let r = (0, a.D)(() => ({ streams: {} }));
function o(e) {
    let t = (0, s._z)(e),
        n = r.useState((e) => e.streams, l());
    return n[t]?.zoom ?? 100;
}
function d(e) {
    return o(e) / 100;
}
function u(e, t) {
    let n = (0, s._z)(e);
    r.setState(
        (e) => ({ ...e, streams: { ...e.streams, [n]: { zoom: t, fitOverride: e.streams[n]?.fitOverride } } }),
        !0,
    );
}
function c(e, t) {
    let n = (0, s._z)(e);
    r.setState((e) => ({ ...e, streams: { ...e.streams, [n]: { zoom: e.streams[n]?.zoom, fitOverride: t } } }));
}
function h(e) {
    let t = (0, s._z)(e),
        n = r.useState((e) => e.streams, l());
    return n[t]?.fitOverride;
}
