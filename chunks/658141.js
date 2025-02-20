var r = n(851707),
    i = n(263604),
    s = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
    a = RegExp('[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]', 'g');
e.exports = function (e) {
    return (e = i(e)) && e.replace(s, r).replace(a, '');
};
