var r = n(587779),
    i = n(876666),
    s = n(974915),
    l = n(790318);
e.exports = function (e, t) {
    if (null == e) return {};
    var n = r(l(e), function (e) {
        return [e];
    });
    return (
        (t = i(t)),
        s(e, n, function (e, n) {
            return t(e, n[0]);
        })
    );
};
