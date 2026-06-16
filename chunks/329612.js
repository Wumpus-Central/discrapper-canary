var r = e(557431),
    t = e(914549),
    n = e(251710),
    o = RegExp("['\u2019]", "g");
u.exports = function (u) {
    return function (f) {
        return r(n(t(f).replace(o, "")), u, "");
    };
};
