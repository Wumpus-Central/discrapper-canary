var r = u(447479),
    n = u(658141),
    f = u(401427),
    o = RegExp("['\u2019]", "g");
e.exports = function (e) {
    return function (t) {
        return r(f(n(t).replace(o, "")), e, "");
    };
};
