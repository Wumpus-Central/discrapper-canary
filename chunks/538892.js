var t = '\uD800-\uDFFF',
    n = '[' + t + ']',
    r = '[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]',
    i = '\uD83C[\uDFFB-\uDFFF]',
    o = '[^' + t + ']',
    a = '(?:\uD83C[\uDDE6-\uDDFF]){2}',
    s = '[\uD800-\uDBFF][\uDC00-\uDFFF]',
    l = '(?:' + r + '|' + i + ')?',
    c = '[\\ufe0e\\ufe0f]?',
    u = '(?:\\u200d(?:' + [o, a, s].join('|') + ')' + c + l + ')*',
    d = c + l + u,
    f = RegExp(i + '(?=' + i + ')|' + ('(?:' + [o + r + '?', r, a, s, n].join('|')) + ')' + d, 'g');
e.exports = function (e) {
    return e.match(f) || [];
};
