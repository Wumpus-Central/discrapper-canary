n.d(t, {
    JG: () => o,
    wS: () => s
}),
    n(411104);
var i = n(852229),
    r = n(358085),
    a = n(998502);
let s = (() => {
    if (r.isPlatformEmbedded) return null != a.ZP.copy;
    try {
        return document.queryCommandEnabled('copy') || document.queryCommandSupported('copy');
    } catch (e) {
        return !1;
    }
})();
function o(e) {
    return !!s && (r.isPlatformEmbedded ? (a.ZP.copy(e), !0) : i.J(e));
}
