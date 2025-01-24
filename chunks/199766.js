n.d(t, {
    I: function () {
        return l;
    },
    T: function () {
        return r;
    }
});
var i = n(673125);
function l(e, t, n, i, l) {
    e.save(), e.beginPath(), (e.fillStyle = i), e.arc(t, n, Math.round(20 * window.devicePixelRatio) / 2 + l, 0, 2 * Math.PI), e.fill(), e.restore();
}
function r(e, t, n, l) {
    e.save();
    let r = i.Z.getAvatarImage(l);
    if (null == r) return;
    let a = 20 * window.devicePixelRatio;
    e.beginPath(), e.arc(t, n, a / 2, 0, 2 * Math.PI), e.clip(), e.drawImage(r, t - a / 2, n - a / 2, a, a), e.restore();
}
