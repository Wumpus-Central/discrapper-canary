var i = n(578805),
    r = TypeError,
    a = n(126417);
e.exports = function (e) {
    var t = i(e);
    if (!t) throw new r('non-iterable value provided');
    return arguments.length > 1 ? a(t, arguments[1]) : a(t);
};
