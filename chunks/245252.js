var i = n(81021),
    r = n(160171),
    a = i('%Promise.resolve%', !0),
    s = a && r(a);
e.exports = function (e, t) {
    if (!s) throw SyntaxError('This environment does not support Promises.');
    return s(e, t);
};
