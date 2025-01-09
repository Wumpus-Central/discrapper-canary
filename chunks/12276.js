var t = '\uD800-\uDFFF',
    n = '[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]',
    i = '\uD83C[\uDFFB-\uDFFF]',
    r = '[^' + t + ']',
    l = '(?:\uD83C[\uDDE6-\uDDFF]){2}',
    s = '[\uD800-\uDBFF][\uDC00-\uDFFF]',
    a = '(?:' + n + '|' + i + ')?',
    o = '[\\ufe0e\\ufe0f]?',
    c = '(?:\\u200d(?:' + [r, l, s].join('|') + ')' + o + a + ')*',
    d = RegExp(i + '(?=' + i + ')|' + ('(?:' + [r + n + '?', n, l, s, '[' + t + ']'].join('|') + ')') + (o + a + c), 'g');
e.exports = function (e) {
    return e.match(d) || [];
};
