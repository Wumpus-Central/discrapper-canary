var r = n(691244);
e.exports = function (e, t, n) {
    for (var i in t) n && n.unsafe && e[i] ? (e[i] = t[i]) : r(e, i, t[i], n);
    return e;
};
