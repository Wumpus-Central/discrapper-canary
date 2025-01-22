var n = '\uD800-\uDFFF',
    r = '[' + n + ']',
    i = '[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]',
    a = '\uD83C[\uDFFB-\uDFFF]',
    o = '[^' + n + ']',
    s = '(?:\uD83C[\uDDE6-\uDDFF]){2}',
    l = '[\uD800-\uDBFF][\uDC00-\uDFFF]',
    u = '(?:' + i + '|' + a + ')?',
    c = '[\\ufe0e\\ufe0f]?',
    d = '(?:\\u200d(?:' + [o, s, l].join('|') + ')' + c + u + ')*',
    f = c + u + d,
    p = RegExp(a + '(?=' + a + ')|' + ('(?:' + [o + i + '?', i, s, l, r].join('|') + ')') + f, 'g');
function h(e) {
    return e.match(p) || [];
}
e.exports = h;
