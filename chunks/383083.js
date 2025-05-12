var n = r(413135).Buffer,
    i = [255, 255, 26, 27, 28, 29, 30, 31, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255];
(t.encode = function (e) {
    n.isBuffer(e) || (e = new n(e));
    for (var t, r, i = 0, s = 0, o = 0, c = 0, a = new n(8 * ((r = Math.floor((t = e).length / 5)), t.length % 5 == 0 ? r : r + 1)); i < e.length; ) {
        var l = e[i];
        o > 3 ? ((c = ((c = l & (255 >> o)) << (o = (o + 5) % 8)) | ((i + 1 < e.length ? e[i + 1] : 0) >> (8 - o))), i++) : ((c = (l >> (8 - (o + 5))) & 31), 0 == (o = (o + 5) % 8) && i++), (a[s] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'.charCodeAt(c)), s++;
    }
    for (i = s; i < a.length; i++) a[i] = 61;
    return a;
}),
    (t.decode = function (e) {
        var t,
            r = 0,
            s = 0,
            o = 0;
        n.isBuffer(e) || (e = new n(e));
        for (var c = new n(Math.ceil((5 * e.length) / 8)), a = 0; a < e.length && 61 != e[a]; a++) {
            var l = e[a] - 48;
            if (l < i.length) (s = i[l]), r <= 3 ? (0 == (r = (r + 5) % 8) ? ((t |= s), (c[o] = t), o++, (t = 0)) : (t |= 255 & (s << (8 - r)))) : ((t |= 255 & (s >>> (r = (r + 5) % 8))), (c[o] = t), o++, (t = 255 & (s << (8 - r))));
            else throw Error('Invalid input - it is not base32 encoded string');
        }
        return c.slice(0, o);
    });
