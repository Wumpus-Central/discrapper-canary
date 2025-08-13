var t = "\uD800-\uDFFF",
    f = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
    n = "\uD83C[\uDFFB-\uDFFF]",
    r = "[^" + t + "]",
    e = "(?:\uD83C[\uDDE6-\uDDFF]){2}",
    o = "[\uD800-\uDBFF][\uDC00-\uDFFF]",
    i = "(?:" + f + "|" + n + ")?",
    c = "[\\ufe0e\\ufe0f]?",
    a = "(?:\\u200d(?:" + [r, e, o].join("|") + ")" + c + i + ")*",
    d = RegExp(
        n + "(?=" + n + ")|" + ("(?:" + [r + f + "?", f, e, o, "[" + t + "]"].join("|")) + ")" + (c + i + a),
        "g",
    );
u.exports = function (u) {
    return u.match(d) || [];
};
