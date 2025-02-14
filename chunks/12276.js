var t = '\uD800-\uDFFF',
    n = '[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]',
    i = '\uD83C[\uDFFB-\uDFFF]',
    r = '[^' + t + ']',
    a = '(?:\uD83C[\uDDE6-\uDDFF]){2}',
    o = '[\uD800-\uDBFF][\uDC00-\uDFFF]',
    s = '(?:' + n + '|' + i + ')?',
    d = '[\\ufe0e\\ufe0f]?',
    c = '(?:\\u200d(?:' + [r, a, o].join('|') + ')' + d + s + ')*',
    l = RegExp(i + '(?=' + i + ')|' + ('(?:' + [r + n + '?', n, a, o, '[' + t + ']'].join('|')) + ')' + (d + s + c), 'g');
e.exports = function (e) {
    return e.match(l) || [];
};
