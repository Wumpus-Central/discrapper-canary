function t(e, t, n, r) {
    return e.addEventListener || (t = "on" + t), (e.addEventListener || e.attachEvent).call(e, t, n, r), n;
}
(e.exports = t),
    (e.exports.on = t),
    (e.exports.off = function (e, t, n, r) {
        return e.removeEventListener || (t = "on" + t), (e.removeEventListener || e.detachEvent).call(e, t, n, r), n;
    });
