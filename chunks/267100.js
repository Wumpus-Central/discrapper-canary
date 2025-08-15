var e = Object.prototype.hasOwnProperty;
t.exports = function (t, r, n) {
    if (!t) return null;
    var i = {};
    for (var o in t) e.call(t, o) && (i[o] = r.call(n, t[o], o, t));
    return i;
};
