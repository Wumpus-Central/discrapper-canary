var n = r(906046),
    i = r(486335),
    o = n("RegExp.prototype.exec"),
    a = r(741623);
e.exports = function (e) {
    if (!i(e)) throw new a("`regex` must be a RegExp");
    return function (t) {
        return null !== o(e, t);
    };
};
