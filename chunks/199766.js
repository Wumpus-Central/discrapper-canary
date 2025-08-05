n.d(t, {
    I: () => a,
    T: () => o
});
var r = n(673125);
let i = 20;
function a(e, t, n, r, a) {
    (e.save(), e.beginPath(), (e.fillStyle = r), e.arc(t, n, Math.round(i * window.devicePixelRatio) / 2 + a, 0, 2 * Math.PI), e.fill(), e.restore());
}
function o(e, t, n, a) {
    e.save();
    let o = r.Z.getAvatarImage(a);
    if (null == o) return;
    let s = i * window.devicePixelRatio;
    (e.beginPath(), e.arc(t, n, s / 2, 0, 2 * Math.PI), e.clip(), e.drawImage(o, t - s / 2, n - s / 2, s, s), e.restore());
}
