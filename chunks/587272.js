function r(e) {
    return 'type' in e && 'image' === e.type && 'string' == typeof e.src;
}
function i(e) {
    return 'type' in e && 'video' === e.type && 'string' == typeof e.src;
}
function a(e) {
    return 'type' in e && 'lottie' === e.type && 'function' == typeof e.lottie;
}
function o(e) {
    return 'type' in e && 'rive' === e.type && 'object' == typeof e.rive;
}
function s(e) {
    return 'type' in e && 'dynamic' === e.type && 'number' == typeof e.component;
}
(n.d(t, {
    Am: () => a,
    Mf: () => s,
    Or: () => r,
    Wv: () => i,
    ko: () => o
}),
    n(73800));
