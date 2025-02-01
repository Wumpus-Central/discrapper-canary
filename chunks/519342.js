var t = '\uD800-\uDFFF',
    n = '\\u2700-\\u27bf',
    i = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    s = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    l = '\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    r = "['\u2019]",
    o = '[' + l + ']',
    a = '[' + i + ']',
    d = '[^' + t + l + '\\d+' + n + i + s + ']',
    c = '(?:\uD83C[\uDDE6-\uDDFF]){2}',
    u = '[\uD800-\uDBFF][\uDC00-\uDFFF]',
    h = '[' + s + ']',
    p = '(?:' + a + '|' + d + ')',
    g = '(?:' + h + '|' + d + ')',
    f = '(?:' + r + '(?:d|ll|m|re|s|t|ve))?',
    m = '(?:' + r + '(?:D|LL|M|RE|S|T|VE))?',
    x = '(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\uD83C[\uDFFB-\uDFFF])?',
    v = '[\\ufe0e\\ufe0f]?',
    Z = '(?:\\u200d(?:' + ['[^' + t + ']', c, u].join('|') + ')' + v + x + ')*',
    S = '(?:' + ['[' + n + ']', c, u].join('|') + ')' + (v + x + Z),
    E = RegExp([h + '?' + a + '+' + f + '(?=' + [o, h, '$'].join('|') + ')', g + '+' + m + '(?=' + [o, h + p, '$'].join('|') + ')', h + '?' + p + '+' + f, h + '+' + m, '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])', '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])', '\\d+', S].join('|'), 'g');
e.exports = function (e) {
    return e.match(E) || [];
};
