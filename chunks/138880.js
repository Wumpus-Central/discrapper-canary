(e.exports = function (e) {
    var t = Object(e),
        n = [];
    for (var r in t) n.unshift(r);
    return function e() {
        for (; n.length; ) if ((r = n.pop()) in t) return (e.value = r), (e.done = !1), e;
        return (e.done = !0), e;
    };
}),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports);
