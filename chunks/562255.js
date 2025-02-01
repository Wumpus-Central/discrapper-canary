function t(e, t, n, i) {
    return e.addEventListener || (t = 'on' + t), (e.addEventListener || e.attachEvent).call(e, t, n, i), n;
}
function n(e, t, n, i) {
    return e.removeEventListener || (t = 'on' + t), (e.removeEventListener || e.detachEvent).call(e, t, n, i), n;
}
(e.exports = t), (e.exports.on = t), (e.exports.off = n);
