var i = r(691244);
e.exports = function (e, n, r) {
    for (var a in n) r && r.unsafe && e[a] ? (e[a] = n[a]) : i(e, a, n[a], r);
    return e;
};
