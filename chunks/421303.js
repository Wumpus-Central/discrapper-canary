var r = n(447479),
    i = n(658141),
    s = n(401427),
    a = RegExp("['\u2019]", 'g');
e.exports = function (e) {
    return function (t) {
        return r(s(i(t).replace(a, '')), e, '');
    };
};
