t.exports = function (t, e) {
    return function (a) {
        return t(e(a));
    };
};
