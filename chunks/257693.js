var r = n(413135).Buffer;
e.exports = function (e, t) {
    for (var n = Math.min(e.length, t.length), i = new r(n), o = 0; o < n; ++o) i[o] = e[o] ^ t[o];
    return i;
};
