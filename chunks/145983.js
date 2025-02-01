var i = n(447479),
    s = n(658141),
    l = n(401427),
    r = RegExp("['\u2019]", 'g');
e.exports = function (e) {
    return function (t) {
        return i(l(s(t).replace(r, '')), e, '');
    };
};
