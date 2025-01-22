var i = r(413135).Buffer;
e.exports = function (e, n) {
    for (var r = Math.min(e.length, n.length), a = new i(r), o = 0; o < r; ++o) a[o] = e[o] ^ n[o];
    return a;
};
