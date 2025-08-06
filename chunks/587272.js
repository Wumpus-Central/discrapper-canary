function r(e) {
    return "type" in e && "image" === e.type && "string" == typeof e.src;
}
function i(e) {
    return "type" in e && "video" === e.type && "string" == typeof e.src;
}
function o(e) {
    return "type" in e && "lottie" === e.type && "function" == typeof e.lottie;
}
function a(e) {
    return "type" in e && "rive" === e.type && "object" == typeof e.rive;
}
function s(e) {
    return "type" in e && "dynamic" === e.type && "number" == typeof e.component;
}
n.d(t, {
    Am: () => o,
    Mf: () => s,
    Or: () => r,
    Wv: () => i,
    ko: () => a,
}),
    n(73800);
