var r = n(974802),
    i = n(668530),
    o = n(735471),
    a = function (e) {
        return o(e) ? e : void 0;
    };
e.exports = function (e, t) {
    return arguments.length < 2 ? a(r[e]) || a(i[e]) : (r[e] && r[e][t]) || (i[e] && i[e][t]);
};
