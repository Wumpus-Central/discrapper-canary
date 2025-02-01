var i = n(974802),
    r = n(668530),
    a = n(735471),
    s = function (e) {
        return a(e) ? e : void 0;
    };
e.exports = function (e, t) {
    return arguments.length < 2 ? s(i[e]) || s(r[e]) : (i[e] && i[e][t]) || (r[e] && r[e][t]);
};
