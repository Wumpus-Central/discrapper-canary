var r = '\uD800-\uDFFF',
    e = '[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]',
    u = '\uD83C[\uDFFB-\uDFFF]',
    n = '[^' + r + ']',
    o = '(?:\uD83C[\uDDE6-\uDDFF]){2}',
    f = '[\uD800-\uDBFF][\uDC00-\uDFFF]',
    i = '(?:' + e + '|' + u + ')?',
    a = '[\\ufe0e\\ufe0f]?',
    s = '(?:\\u200d(?:' + [n, o, f].join('|') + ')' + a + i + ')*',
    d = RegExp(u + '(?=' + u + ')|' + ('(?:' + [n + e + '?', e, o, f, '[' + r + ']'].join('|')) + ')' + (a + i + s), 'g');
t.exports = function (t) {
    return t.match(d) || [];
};
