var t = Object.prototype.hasOwnProperty;
e.exports = function (e, n, r) {
    if (!e) return null;
    var i = {};
    for (var o in e) t.call(e, o) && (i[o] = n.call(r, e[o], o, e));
    return i;
};
