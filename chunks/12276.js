var t = '\uD800-\uDFFF',
    n = '[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]',
    i = '\uD83C[\uDFFB-\uDFFF]',
    r = '[^' + t + ']',
    s = '(?:\uD83C[\uDDE6-\uDDFF]){2}',
    o = '[\uD800-\uDBFF][\uDC00-\uDFFF]',
    l = '(?:' + n + '|' + i + ')?',
    a = '[\\ufe0e\\ufe0f]?',
    c = '(?:\\u200d(?:' + [r, s, o].join('|') + ')' + a + l + ')*',
    u = RegExp(i + '(?=' + i + ')|' + ('(?:' + [r + n + '?', n, s, o, '[' + t + ']'].join('|')) + ')' + (a + l + c), 'g');
e.exports = function (e) {
    return e.match(u) || [];
};
