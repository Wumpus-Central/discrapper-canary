(e.exports = function (e) {
    var t = Object(e),
        r = [];
    for (var n in t) r.unshift(n);
    return function e() {
        for (; r.length; ) if ((n = r.pop()) in t) return (e.value = n), (e.done = !1), e;
        return (e.done = !0), e;
    };
}),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports);
