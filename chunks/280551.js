r.d(n, {
    s: function () {
        return o;
    }
});
var i = r(998502);
function a(e, n) {
    var r, a;
    return null === (a = i.ZP.getDiscordUtils()) || void 0 === a ? void 0 : null === (r = a.createDateFormatter) || void 0 === r ? void 0 : r.call(a, e, n);
}
let o = null != window.DiscordNative ? a : void 0;
