var r = n(242474),
    i = n(780177),
    o = n(737372),
    a = n(109426),
    s = n(245413);
function l(e, t) {
    if (o[(e = e.toLowerCase())]) (n = o[e].key), (r = o[e].iv);
    else if (a[e]) (n = 8 * a[e].key), (r = a[e].iv);
    else throw TypeError('invalid suite type');
    var n,
        r,
        i = s(t, !1, n, r);
    return u(e, i.key, i.iv);
}
function c(e, t) {
    if (o[(e = e.toLowerCase())]) (n = o[e].key), (r = o[e].iv);
    else if (a[e]) (n = 8 * a[e].key), (r = a[e].iv);
    else throw TypeError('invalid suite type');
    var n,
        r,
        i = s(t, !1, n, r);
    return d(e, i.key, i.iv);
}
function u(e, t, n) {
    if (o[(e = e.toLowerCase())]) return i.createCipheriv(e, t, n);
    if (a[e])
        return new r({
            key: t,
            iv: n,
            mode: e
        });
    throw TypeError('invalid suite type');
}
function d(e, t, n) {
    if (o[(e = e.toLowerCase())]) return i.createDecipheriv(e, t, n);
    if (a[e])
        return new r({
            key: t,
            iv: n,
            mode: e,
            decrypt: !0
        });
    throw TypeError('invalid suite type');
}
function f() {
    return Object.keys(a).concat(i.getCiphers());
}
(t.createCipher = t.Cipher = l), (t.createCipheriv = t.Cipheriv = u), (t.createDecipher = t.Decipher = c), (t.createDecipheriv = t.Decipheriv = d), (t.listCiphers = t.getCiphers = f);
