var r = u(851707),
    n = u(263604),
    f = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
    o = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
e.exports = function (e) {
    return (e = n(e)) && e.replace(f, r).replace(o, "");
};
