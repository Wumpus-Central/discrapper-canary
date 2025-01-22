var i = r(974802),
    a = r(668530),
    o = r(735471),
    s = function (e) {
        return o(e) ? e : void 0;
    };
e.exports = function (e, n) {
    return arguments.length < 2 ? s(i[e]) || s(a[e]) : (i[e] && i[e][n]) || (a[e] && a[e][n]);
};
