var r = '\uD800-\uDFFF',
    e = '\\u2700-\\u27bf',
    u = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    n = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    o = '\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    f = "['\u2019]",
    i = '[' + o + ']',
    a = '[' + u + ']',
    s = '[^' + r + o + '\\d+' + e + u + n + ']',
    d = '(?:\uD83C[\uDDE6-\uDDFF]){2}',
    c = '[\uD800-\uDBFF][\uDC00-\uDFFF]',
    x = '[' + n + ']',
    h = '(?:' + a + '|' + s + ')',
    l = '(?:' + x + '|' + s + ')',
    p = '(?:' + f + '(?:d|ll|m|re|s|t|ve))?',
    v = '(?:' + f + '(?:D|LL|M|RE|S|T|VE))?',
    A = '(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\uD83C[\uDFFB-\uDFFF])?',
    g = '[\\ufe0e\\ufe0f]?',
    E = '(?:\\u200d(?:' + ['[^' + r + ']', d, c].join('|') + ')' + g + A + ')*',
    C = '(?:' + ['[' + e + ']', d, c].join('|') + ')' + (g + A + E),
    y = RegExp([x + '?' + a + '+' + p + '(?=' + [i, x, '$'].join('|') + ')', l + '+' + v + '(?=' + [i, x + h, '$'].join('|') + ')', x + '?' + h + '+' + p, x + '+' + v, '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])', '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])', '\\d+', C].join('|'), 'g');
t.exports = function (t) {
    return t.match(y) || [];
};
