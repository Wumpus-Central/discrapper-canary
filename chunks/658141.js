var i = n(851707),
    s = n(263604),
    r = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
    a = RegExp('[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]', 'g');
e.exports = function (e) {
    return (e = s(e)) && e.replace(r, i).replace(a, '');
};
