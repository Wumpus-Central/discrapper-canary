var t = '\uD800-\uDFFF',
    n = '\\u2700-\\u27bf',
    i = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    s = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    r = '\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    a = "['\u2019]",
    o = '[' + r + ']',
    l = '[' + i + ']',
    d = '[^' + t + r + '\\d+' + n + i + s + ']',
    c = '(?:\uD83C[\uDDE6-\uDDFF]){2}',
    u = '[\uD800-\uDBFF][\uDC00-\uDFFF]',
    h = '[' + s + ']',
    p = '(?:' + l + '|' + d + ')',
    f = '(?:' + h + '|' + d + ')',
    g = '(?:' + a + '(?:d|ll|m|re|s|t|ve))?',
    m = '(?:' + a + '(?:D|LL|M|RE|S|T|VE))?',
    v = '(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\uD83C[\uDFFB-\uDFFF])?',
    x = '[\\ufe0e\\ufe0f]?',
    _ = '(?:\\u200d(?:' + ['[^' + t + ']', c, u].join('|') + ')' + x + v + ')*',
    S = '(?:' + ['[' + n + ']', c, u].join('|') + ')' + (x + v + _),
    Z = RegExp([h + '?' + l + '+' + g + '(?=' + [o, h, '$'].join('|') + ')', f + '+' + m + '(?=' + [o, h + p, '$'].join('|') + ')', h + '?' + p + '+' + g, h + '+' + m, '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])', '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])', '\\d+', S].join('|'), 'g');
e.exports = function (e) {
    return e.match(Z) || [];
};
