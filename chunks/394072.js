n.d(t, { LK: () => o, SE: () => l, tO: () => s }), n(323874), n(14289), n(35956);
var i = n(723702),
    r = n(206885);
let a = !1;
function s() {
    if (__OVERLAY__) return;
    let e = new URLSearchParams(window.location.search).get("overlay_v3");
    ("1" !== e && "windowed" !== e) || (i.isPlatformEmbedded && (a = !0));
}
function l() {
    return a;
}
function o() {
    return r.e || a;
}
