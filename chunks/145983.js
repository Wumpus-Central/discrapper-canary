var n = f(447479),
    r = f(658141),
    e = f(401427),
    o = RegExp("['\u2019]", "g");
u.exports = function (u) {
    return function (t) {
        return n(e(r(t).replace(o, "")), u, "");
    };
};
