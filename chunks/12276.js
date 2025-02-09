var t = '\uD800-\uDFFF',
    n = '[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]',
    i = '\uD83C[\uDFFB-\uDFFF]',
    o = '[^' + t + ']',
    r = '(?:\uD83C[\uDDE6-\uDDFF]){2}',
    a = '[\uD800-\uDBFF][\uDC00-\uDFFF]',
    c = '(?:' + n + '|' + i + ')?',
    s = '[\\ufe0e\\ufe0f]?',
    l = '(?:\\u200d(?:' + [o, r, a].join('|') + ')' + s + c + ')*',
    d = RegExp(i + '(?=' + i + ')|' + ('(?:' + [o + n + '?', n, r, a, '[' + t + ']'].join('|')) + ')' + (s + c + l), 'g');
e.exports = function (e) {
    return e.match(d) || [];
};
