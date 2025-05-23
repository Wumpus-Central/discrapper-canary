var r = n(447479),
    i = n(658141),
    l = n(401427),
    s = RegExp("['\u2019]", 'g');
e.exports = function (e) {
    return function (t) {
        return r(l(i(t).replace(s, '')), e, '');
    };
};
