var t = "Expected a function";
e.exports = function (e, n, r) {
    if ("function" != typeof e) throw TypeError(t);
    return setTimeout(function () {
        e.apply(void 0, r);
    }, n);
};
