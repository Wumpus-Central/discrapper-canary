function t(e, t) {
    if (null == e) return {};
    var n = {};
    for (var i in e)
        if ({}.hasOwnProperty.call(e, i)) {
            if (t.includes(i)) continue;
            n[i] = e[i];
        }
    return n;
}
(e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
