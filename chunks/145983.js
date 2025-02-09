var i = n(447479),
    o = n(658141),
    r = n(401427),
    a = RegExp("['\u2019]", 'g');
e.exports = function (e) {
    return function (t) {
        return i(r(o(t).replace(a, '')), e, '');
    };
};
