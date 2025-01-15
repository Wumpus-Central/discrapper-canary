n.d(t, {
    I: function () {
        return l;
    },
    T: function () {
        return a;
    }
});
var i = n(673125);
function l(e, t, n, i, l) {
    e.save(), e.beginPath(), (e.fillStyle = i), e.arc(t, n, Math.round(20 * window.devicePixelRatio) / 2 + l, 0, 2 * Math.PI), e.fill(), e.restore();
}
function a(e, t, n, l) {
    e.save();
    let a = i.Z.getAvatarImage(l);
    if (null == a) return;
    let r = 20 * window.devicePixelRatio;
    e.beginPath(), e.arc(t, n, r / 2, 0, 2 * Math.PI), e.clip(), e.drawImage(a, t - r / 2, n - r / 2, r, r), e.restore();
}
