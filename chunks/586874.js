var t = "\\ud800-\\udfff",
    n = "[" + t + "]",
    r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
    i = "\\ud83c[\\udffb-\\udfff]",
    a = "[^" + t + "]",
    s = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    o = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    l = "(?:" + r + "|" + i + ")?",
    c = "[\\ufe0e\\ufe0f]?",
    u = "(?:\\u200d(?:" + [a, s, o].join("|") + ")" + c + l + ")*",
    d = c + l + u,
    f = RegExp(i + "(?=" + i + ")|" + ("(?:" + [a + r + "?", r, s, o, n].join("|")) + ")" + d, "g");
e.exports = function (e) {
    return e.match(f) || [];
};
