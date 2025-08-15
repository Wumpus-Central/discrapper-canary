n.d(t, {
    Am: () => s,
    MW: () => u,
    Mf: () => c,
    Or: () => i,
    Wv: () => o,
    ko: () => l,
}),
    n(35282),
    n(73800);
let r = ["gif", "webp", "png", "apng"];
function i(e) {
    return "type" in e && "image" === e.type && "string" == typeof e.src;
}
function a(e) {
    if (!i(e) || null == e.src) return !1;
    let t = e.src.toLowerCase().split(".").pop();
    return null != t && r.includes(t);
}
function o(e) {
    return "type" in e && "video" === e.type && "string" == typeof e.src;
}
function s(e) {
    return "type" in e && "lottie" === e.type && "function" == typeof e.lottie;
}
function l(e) {
    return "type" in e && "rive" === e.type && "function" == typeof e.rive;
}
function c(e) {
    return "type" in e && "dynamic" === e.type && "number" == typeof e.component;
}
function u(e) {
    return null != e && (a(e) || o(e) || s(e) || l(e));
}
