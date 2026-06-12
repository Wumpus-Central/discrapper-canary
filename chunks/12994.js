(e.exports = function (e) {
    var t = Object(e),
        n = [];
    for (var i in t) n.unshift(i);
    return function e() {
        for (; n.length; ) if ((i = n.pop()) in t) return (e.value = i), (e.done = !1), e;
        return (e.done = !0), e;
    };
}),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports);
