var r = n(605905),
    i = n(779882),
    o = n(580495),
    a = RegExp("['\u2019]", 'g');
e.exports = function (e) {
    return function (t) {
        return r(o(i(t).replace(a, '')), e, '');
    };
};
