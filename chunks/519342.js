var t = "\uD800-\uDFFF",
    u = "\\u2700-\\u27bf",
    r = "a-z\\xdf-\\xf6\\xf8-\\xff",
    n = "A-Z\\xc0-\\xd6\\xd8-\\xde",
    f =
        "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
    o = "['\u2019]",
    i = "[" + f + "]",
    s = "[" + r + "]",
    a = "[^" + t + f + "\\d+" + u + r + n + "]",
    d = "(?:\uD83C[\uDDE6-\uDDFF]){2}",
    c = "[\uD800-\uDBFF][\uDC00-\uDFFF]",
    x = "[" + n + "]",
    l = "(?:" + s + "|" + a + ")",
    p = "(?:" + x + "|" + a + ")",
    h = "(?:" + o + "(?:d|ll|m|re|s|t|ve))?",
    v = "(?:" + o + "(?:D|LL|M|RE|S|T|VE))?",
    E = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\uD83C[\uDFFB-\uDFFF])?",
    g = "[\\ufe0e\\ufe0f]?",
    A = "(?:\\u200d(?:" + ["[^" + t + "]", d, c].join("|") + ")" + g + E + ")*",
    b = "(?:" + ["[" + u + "]", d, c].join("|") + ")" + (g + E + A),
    y = RegExp(
        [
            x + "?" + s + "+" + h + "(?=" + [i, x, "$"].join("|") + ")",
            p + "+" + v + "(?=" + [i, x + l, "$"].join("|") + ")",
            x + "?" + l + "+" + h,
            x + "+" + v,
            "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])|\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])|\\d+",
            b,
        ].join("|"),
        "g",
    );
e.exports = function (e) {
    return e.match(y) || [];
};
