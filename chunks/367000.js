function t(e, t, r, n) {
    return e.addEventListener || (t = "on" + t), (e.addEventListener || e.attachEvent).call(e, t, r, n), r;
}
(e.exports = t),
    (e.exports.on = t),
    (e.exports.off = function (e, t, r, n) {
        return e.removeEventListener || (t = "on" + t), (e.removeEventListener || e.detachEvent).call(e, t, r, n), r;
    });
