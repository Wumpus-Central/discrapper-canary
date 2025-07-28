var u = e(447479),
    n = e(658141),
    o = e(401427),
    f = RegExp("['\u2019]", 'g');
t.exports = function (t) {
    return function (r) {
        return u(o(n(r).replace(f, '')), t, '');
    };
};
