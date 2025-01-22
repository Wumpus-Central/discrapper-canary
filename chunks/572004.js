r.d(n, {
    JG: function () {
        return u;
    },
    wS: function () {
        return l;
    }
});
var i = r(411104);
var a = r(852229),
    o = r(358085),
    s = r(998502);
let l = (() => {
    if (o.isPlatformEmbedded) return null != s.ZP.copy;
    try {
        return document.queryCommandEnabled('copy') || document.queryCommandSupported('copy');
    } catch (e) {
        return !1;
    }
})();
function u(e) {
    return !!l && (o.isPlatformEmbedded ? (s.ZP.copy(e), !0) : a.J(e));
}
