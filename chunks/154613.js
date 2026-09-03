var n = r(741623),
    i = r(227106),
    o = r(732937);
e.exports = function (e, t) {
    if (!i(e)) throw new n("Assertion failed: `O` must be an Object");
    if (!o(t)) throw new n("Assertion failed: `P` must be a Property Key");
    return t in e;
};
