var n = e(452162),
    o = e(308227),
    s = e(309270),
    i = function (t) {
        return s(t) ? t : void 0;
    };
t.exports = function (t, r) {
    return arguments.length < 2 ? i(n[t]) || i(o[t]) : (n[t] && n[t][r]) || (o[t] && o[t][r]);
};
