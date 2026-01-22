var r = n(906046),
    i = n(486335),
    a = r("RegExp.prototype.exec"),
    s = n(741623);
e.exports = function (e) {
    if (!i(e)) throw new s("`regex` must be a RegExp");
    return function (t) {
        return null !== a(e, t);
    };
};
