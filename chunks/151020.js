var e = n(691244);
t.exports = function (t, r, n) {
    for (var o in r) n && n.unsafe && t[o] ? (t[o] = r[o]) : e(t, o, r[o], n);
    return t;
};
