var t = '\uD800-\uDFFF',
    n = '[' + t + ']',
    i = '[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]',
    r = '\uD83C[\uDFFB-\uDFFF]',
    a = '[^' + t + ']',
    s = '(?:\uD83C[\uDDE6-\uDDFF]){2}',
    o = '[\uD800-\uDBFF][\uDC00-\uDFFF]',
    l = '(?:' + i + '|' + r + ')?',
    u = '[\\ufe0e\\ufe0f]?',
    c = '(?:\\u200d(?:' + [a, s, o].join('|') + ')' + u + l + ')*',
    d = u + l + c,
    f = RegExp(r + '(?=' + r + ')|' + ('(?:' + [a + i + '?', i, s, o, n].join('|')) + ')' + d, 'g');
function _(e) {
    return e.match(f) || [];
}
e.exports = _;
