n.d(t, {
    I: () => i,
    T: () => r
});
var l = n(673125);
function i(e, t, n, l, i) {
    e.save(), e.beginPath(), (e.fillStyle = l), e.arc(t, n, Math.round(20 * window.devicePixelRatio) / 2 + i, 0, 2 * Math.PI), e.fill(), e.restore();
}
function r(e, t, n, i) {
    e.save();
    let r = l.Z.getAvatarImage(i);
    if (null == r) return;
    let a = 20 * window.devicePixelRatio;
    e.beginPath(), e.arc(t, n, a / 2, 0, 2 * Math.PI), e.clip(), e.drawImage(r, t - a / 2, n - a / 2, a, a), e.restore();
}
