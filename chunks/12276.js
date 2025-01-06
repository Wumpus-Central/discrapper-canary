var t = '\uD800-\uDFFF',
    n = '[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]',
    i = '\uD83C[\uDFFB-\uDFFF]',
    s = '[^' + t + ']',
    r = '(?:\uD83C[\uDDE6-\uDDFF]){2}',
    a = '[\uD800-\uDBFF][\uDC00-\uDFFF]',
    o = '(?:' + n + '|' + i + ')?',
    l = '[\\ufe0e\\ufe0f]?',
    d = '(?:\\u200d(?:' + [s, r, a].join('|') + ')' + l + o + ')*',
    c = RegExp(i + '(?=' + i + ')|' + ('(?:' + [s + n + '?', n, r, a, '[' + t + ']'].join('|') + ')') + (l + o + d), 'g');
e.exports = function (e) {
    return e.match(c) || [];
};
