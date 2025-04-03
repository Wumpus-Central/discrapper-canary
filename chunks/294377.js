var e = n(974802),
    o = n(668530),
    i = n(735471),
    u = function (t) {
        return i(t) ? t : void 0;
    };
t.exports = function (t, r) {
    return arguments.length < 2 ? u(e[t]) || u(o[t]) : (e[t] && e[t][r]) || (o[t] && o[t][r]);
};
