var s = i(413135).Buffer,
    n = [255, 255, 26, 27, 28, 29, 30, 31, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255];
(t.encode = function (e) {
    s.isBuffer(e) || (e = new s(e));
    for (var t, i, n = 0, r = 0, a = 0, c = 0, l = new s(8 * ((i = Math.floor((t = e).length / 5)), t.length % 5 == 0 ? i : i + 1)); n < e.length; ) {
        var o = e[n];
        a > 3 ? ((c = ((c = o & (255 >> a)) << (a = (a + 5) % 8)) | ((n + 1 < e.length ? e[n + 1] : 0) >> (8 - a))), n++) : ((c = (o >> (8 - (a + 5))) & 31), 0 == (a = (a + 5) % 8) && n++), (l[r] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'.charCodeAt(c)), r++;
    }
    for (n = r; n < l.length; n++) l[n] = 61;
    return l;
}),
    (t.decode = function (e) {
        var t,
            i = 0,
            r = 0,
            a = 0;
        s.isBuffer(e) || (e = new s(e));
        for (var c = new s(Math.ceil((5 * e.length) / 8)), l = 0; l < e.length && 61 != e[l]; l++) {
            var o = e[l] - 48;
            if (o < n.length) (r = n[o]), i <= 3 ? (0 == (i = (i + 5) % 8) ? ((t |= r), (c[a] = t), a++, (t = 0)) : (t |= 255 & (r << (8 - i)))) : ((t |= 255 & (r >>> (i = (i + 5) % 8))), (c[a] = t), a++, (t = 255 & (r << (8 - i))));
            else throw Error('Invalid input - it is not base32 encoded string');
        }
        return c.slice(0, a);
    });
