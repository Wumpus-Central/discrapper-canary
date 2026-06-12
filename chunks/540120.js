t.exports = function (t, n, o) {
    if ("function" != typeof t) throw TypeError("Expected a function");
    return setTimeout(function () {
        t.apply(void 0, o);
    }, n);
};
