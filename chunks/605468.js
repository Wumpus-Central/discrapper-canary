var r = n(741623),
    i = n(315646),
    a = n(227106),
    s = n(732937);
e.exports = function (e, t) {
    if (!a(e)) throw new r("Assertion failed: Type(O) is not Object");
    if (!s(t)) throw new r("Assertion failed: P is not a Property Key, got " + i(t));
    return e[t];
};
