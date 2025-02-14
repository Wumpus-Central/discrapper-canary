var i = n(447479),
    r = n(658141),
    a = n(401427),
    o = RegExp("['\u2019]", 'g');
e.exports = function (e) {
    return function (t) {
        return i(a(r(t).replace(o, '')), e, '');
    };
};
