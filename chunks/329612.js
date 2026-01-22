var r = n(557431),
    i = n(914549),
    l = n(696472),
    s = RegExp("['\u2019]", "g");
e.exports = function (e) {
    return function (t) {
        return r(l(i(t).replace(s, "")), e, "");
    };
};
