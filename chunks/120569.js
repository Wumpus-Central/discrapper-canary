n.d(t, { Z: () => a });
var i = n(695346),
    r = n(687158);
function a(e, t) {
    if ('undefined' == typeof Image) return;
    let n = (0, r.Of)(e.user.id, t);
    if (null == n) return;
    let a = i.QK.getSetting(),
        s = n.getBannerURL({
            canAnimate: a,
            size: 480
        });
    null != s && (new Image().src = s);
}
