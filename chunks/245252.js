var r = n(81021),
    i = n(160171),
    o = r('%Promise.resolve%', !0),
    a = o && i(o);
e.exports = function (e, t) {
    if (!a) throw SyntaxError('This environment does not support Promises.');
    return a(e, t);
};
