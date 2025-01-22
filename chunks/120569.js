r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(695346),
    a = r(687158);
function o(e, n) {
    if ('undefined' == typeof Image) return;
    let r = (0, a.Of)(e.user.id, n);
    if (null == r) return;
    let o = i.QK.getSetting(),
        s = r.getBannerURL({
            canAnimate: o,
            size: 480
        });
    if (null != s) new Image().src = s;
}
