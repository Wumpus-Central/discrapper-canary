var r = n(675879),
    a = Error,
    o = r("".replace),
    i = String(new a("zxcasd").stack),
    s = /\n\s*at [^:]*:[^\n]*/,
    l = s.test(i);
e.exports = function (e, t) {
    if (l && "string" == typeof e && !a.prepareStackTrace) for (; t--; ) e = o(e, s, "");
    return e;
};
