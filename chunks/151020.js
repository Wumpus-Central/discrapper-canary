var i = n(691244);
e.exports = function (e, t, n) {
    for (var r in t) n && n.unsafe && e[r] ? (e[r] = t[r]) : i(e, r, t[r], n);
    return e;
};
