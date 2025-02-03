var i = n(447479),
    r = n(658141),
    l = n(401427),
    s = RegExp("['\u2019]", 'g');
e.exports = function (e) {
    return function (t) {
        return i(l(r(t).replace(s, '')), e, '');
    };
};
