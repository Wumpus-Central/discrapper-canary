var i = n(413135).Buffer;
e.exports = function (e, t) {
    for (var n = Math.min(e.length, t.length), r = new i(n), a = 0; a < n; ++a) r[a] = e[a] ^ t[a];
    return r;
};
