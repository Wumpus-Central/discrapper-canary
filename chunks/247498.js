var i = r(578805),
    a = TypeError,
    o = r(126417);
e.exports = function (e) {
    var n = i(e);
    if (!n) throw new a('non-iterable value provided');
    return arguments.length > 1 ? o(n, arguments[1]) : o(n);
};
