var r = n(413135).Buffer,
    i = [255, 255, 26, 27, 28, 29, 30, 31, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255];
(t.encode = function (e) {
    r.isBuffer(e) || (e = new r(e));
    for (var t, n, i = 0, o = 0, a = 0, c = 0, u = new r(8 * ((n = Math.floor((t = e).length / 5)), t.length % 5 == 0 ? n : n + 1)); i < e.length; ) {
        var s = e[i];
        a > 3 ? ((c = ((c = s & (255 >> a)) << (a = (a + 5) % 8)) | ((i + 1 < e.length ? e[i + 1] : 0) >> (8 - a))), i++) : ((c = (s >> (8 - (a + 5))) & 31), 0 == (a = (a + 5) % 8) && i++), (u[o] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'.charCodeAt(c)), o++;
    }
    for (i = o; i < u.length; i++) u[i] = 61;
    return u;
}),
    (t.decode = function (e) {
        var t,
            n = 0,
            o = 0,
            a = 0;
        r.isBuffer(e) || (e = new r(e));
        for (var c = new r(Math.ceil((5 * e.length) / 8)), u = 0; u < e.length && 61 != e[u]; u++) {
            var s = e[u] - 48;
            if (s < i.length) (o = i[s]), n <= 3 ? (0 == (n = (n + 5) % 8) ? ((t |= o), (c[a] = t), a++, (t = 0)) : (t |= 255 & (o << (8 - n)))) : ((t |= 255 & (o >>> (n = (n + 5) % 8))), (c[a] = t), a++, (t = 255 & (o << (8 - n))));
            else throw Error('Invalid input - it is not base32 encoded string');
        }
        return c.slice(0, a);
    });
