var t = "\uD800-\uDFFF",
    u = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
    r = "\uD83C[\uDFFB-\uDFFF]",
    n = "[^" + t + "]",
    f = "(?:\uD83C[\uDDE6-\uDDFF]){2}",
    o = "[\uD800-\uDBFF][\uDC00-\uDFFF]",
    i = "(?:" + u + "|" + r + ")?",
    s = "[\\ufe0e\\ufe0f]?",
    a = "(?:\\u200d(?:" + [n, f, o].join("|") + ")" + s + i + ")*",
    d = RegExp(
        r + "(?=" + r + ")|" + ("(?:" + [n + u + "?", u, f, o, "[" + t + "]"].join("|")) + ")" + (s + i + a),
        "g",
    );
e.exports = function (e) {
    return e.match(d) || [];
};
