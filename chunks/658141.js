var n = f(851707),
    r = f(263604),
    e = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
    o = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
u.exports = function (u) {
    return (u = r(u)) && u.replace(e, n).replace(o, "");
};
