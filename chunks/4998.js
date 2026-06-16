var f = "\\ud800-\\udfff",
    e = "\\u2700-\\u27bf",
    r = "a-z\\xdf-\\xf6\\xf8-\\xff",
    t = "A-Z\\xc0-\\xd6\\xd8-\\xde",
    n =
        "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
    o = "['\u2019]",
    d = "[" + n + "]",
    x = "[" + r + "]",
    a = "[^" + f + n + "\\d+" + e + r + t + "]",
    i = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    c = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    s = "[" + t + "]",
    p = "(?:" + x + "|" + a + ")",
    v = "(?:" + s + "|" + a + ")",
    l = "(?:" + o + "(?:d|ll|m|re|s|t|ve))?",
    A = "(?:" + o + "(?:D|LL|M|RE|S|T|VE))?",
    g = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",
    h = "[\\ufe0e\\ufe0f]?",
    b = "(?:\\u200d(?:" + ["[^" + f + "]", i, c].join("|") + ")" + h + g + ")*",
    E = "(?:" + ["[" + e + "]", i, c].join("|") + ")" + (h + g + b),
    U = RegExp(
        [
            s + "?" + x + "+" + l + "(?=" + [d, s, "$"].join("|") + ")",
            v + "+" + A + "(?=" + [d, s + p, "$"].join("|") + ")",
            s + "?" + p + "+" + l,
            s + "+" + A,
            "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])|\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])|\\d+",
            E,
        ].join("|"),
        "g",
    );
u.exports = function (u) {
    return u.match(U) || [];
};
