var t = "\\ud800-\\udfff",
    n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
    r = "\\ud83c[\\udffb-\\udfff]",
    i = "[^" + t + "]",
    s = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    a = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    o = "(?:" + n + "|" + r + ")?",
    l = "[\\ufe0e\\ufe0f]?",
    u = "(?:\\u200d(?:" + [i, s, a].join("|") + ")" + l + o + ")*",
    d = RegExp(
        r + "(?=" + r + ")|" + ("(?:" + [i + n + "?", n, s, a, "[" + t + "]"].join("|")) + ")" + (l + o + u),
        "g",
    );
e.exports = function (e) {
    return e.match(d) || [];
};
