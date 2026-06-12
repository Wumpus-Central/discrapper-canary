var t = "\\ud800-\\udfff",
    n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
    i = "\\ud83c[\\udffb-\\udfff]",
    r = "[^" + t + "]",
    s = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    a = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    o = "(?:" + n + "|" + i + ")?",
    l = "[\\ufe0e\\ufe0f]?",
    u = "(?:\\u200d(?:" + [r, s, a].join("|") + ")" + l + o + ")*",
    c = RegExp(
        i + "(?=" + i + ")|" + ("(?:" + [r + n + "?", n, s, a, "[" + t + "]"].join("|")) + ")" + (l + o + u),
        "g",
    );
e.exports = function (e) {
    return e.match(c) || [];
};
