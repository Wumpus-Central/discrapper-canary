function n(e, n) {
    if (null == e) return {};
    var r = {};
    for (var i in e)
        if ({}.hasOwnProperty.call(e, i)) {
            if (n.includes(i)) continue;
            r[i] = e[i];
        }
    return r;
}
(e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports);
