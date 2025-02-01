var t = '\uD800-\uDFFF',
    n = '[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]',
    i = '\uD83C[\uDFFB-\uDFFF]',
    s = '[^' + t + ']',
    l = '(?:\uD83C[\uDDE6-\uDDFF]){2}',
    r = '[\uD800-\uDBFF][\uDC00-\uDFFF]',
    o = '(?:' + n + '|' + i + ')?',
    a = '[\\ufe0e\\ufe0f]?',
    d = '(?:\\u200d(?:' + [s, l, r].join('|') + ')' + a + o + ')*',
    c = RegExp(i + '(?=' + i + ')|' + ('(?:' + [s + n + '?', n, l, r, '[' + t + ']'].join('|')) + ')' + (a + o + d), 'g');
e.exports = function (e) {
    return e.match(c) || [];
};
