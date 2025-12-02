var t = "\uD800-\uDFFF",
    n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
    r = "\uD83C[\uDFFB-\uDFFF]",
    i = "[^" + t + "]",
    l = "(?:\uD83C[\uDDE6-\uDDFF]){2}",
    a = "[\uD800-\uDBFF][\uDC00-\uDFFF]",
    s = "(?:" + n + "|" + r + ")?",
    o = "[\\ufe0e\\ufe0f]?",
    c = "(?:\\u200d(?:" + [i, l, a].join("|") + ")" + o + s + ")*",
    d = RegExp(
        r + "(?=" + r + ")|" + ("(?:" + [i + n + "?", n, l, a, "[" + t + "]"].join("|")) + ")" + (o + s + c),
        "g",
    );
e.exports = function (e) {
    return e.match(d) || [];
};
