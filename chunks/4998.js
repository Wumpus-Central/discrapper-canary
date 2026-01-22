var t = "\\ud800-\\udfff",
    n = "\\u2700-\\u27bf",
    r = "a-z\\xdf-\\xf6\\xf8-\\xff",
    i = "A-Z\\xc0-\\xd6\\xd8-\\xde",
    l =
        "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
    s = "['\u2019]",
    a = "[" + l + "]",
    c = "[" + r + "]",
    o = "[^" + t + l + "\\d+" + n + r + i + "]",
    d = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    u = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    f = "[" + i + "]",
    g = "(?:" + c + "|" + o + ")",
    b = "(?:" + f + "|" + o + ")",
    m = "(?:" + s + "(?:d|ll|m|re|s|t|ve))?",
    p = "(?:" + s + "(?:D|LL|M|RE|S|T|VE))?",
    x = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",
    h = "[\\ufe0e\\ufe0f]?",
    j = "(?:\\u200d(?:" + ["[^" + t + "]", d, u].join("|") + ")" + h + x + ")*",
    O = "(?:" + ["[" + n + "]", d, u].join("|") + ")" + (h + x + j),
    y = RegExp(
        [
            f + "?" + c + "+" + m + "(?=" + [a, f, "$"].join("|") + ")",
            b + "+" + p + "(?=" + [a, f + g, "$"].join("|") + ")",
            f + "?" + g + "+" + m,
            f + "+" + p,
            "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])|\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])|\\d+",
            O,
        ].join("|"),
        "g",
    );
e.exports = function (e) {
    return e.match(y) || [];
};
