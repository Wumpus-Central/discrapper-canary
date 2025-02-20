n.d(t, { Z: () => o });
var r = n(695346),
    i = n(687158);
function o(e, t) {
    if ('undefined' == typeof Image) return;
    let n = (0, i.Of)(e.user.id, t);
    if (null == n) return;
    let o = r.QK.getSetting(),
        a = n.getBannerURL({
            canAnimate: o,
            size: 480
        });
    null != a && (new Image().src = a);
}
