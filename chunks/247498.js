var r = n(578805),
    i = TypeError,
    o = n(126417);
e.exports = function (e) {
    var t = r(e);
    if (!t) throw new i('non-iterable value provided');
    return arguments.length > 1 ? o(t, arguments[1]) : o(t);
};
