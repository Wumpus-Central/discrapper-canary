var u = e(851707),
    n = e(263604),
    o = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
    f = RegExp('[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]', 'g');
t.exports = function (t) {
    return (t = n(t)) && t.replace(o, u).replace(f, '');
};
