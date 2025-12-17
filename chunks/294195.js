var r = n(886985),
    i = n(256098),
    s = n(555256),
    a = n(993106);
e.exports = function (e, t) {
    if (null == e) return {};
    var n = r(a(e), function (e) {
        return [e];
    });
    return (
        (t = i(t)),
        s(e, n, function (e, n) {
            return t(e, n[0]);
        })
    );
};
