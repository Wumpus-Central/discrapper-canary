var i = r(81021),
    a = r(160171),
    o = i('%Promise.resolve%', !0),
    s = o && a(o);
e.exports = function (e, n) {
    if (!s) throw SyntaxError('This environment does not support Promises.');
    return s(e, n);
};
