var e = n(981994),
    o = n(424353),
    i = n(971428),
    u = function (t) {
        return i(t) ? t : void 0;
    };
t.exports = function (t, r) {
    return arguments.length < 2 ? u(e[t]) || u(o[t]) : (e[t] && e[t][r]) || (o[t] && o[t][r]);
};
