var i = n(242474),
    r = n(780177),
    a = n(737372),
    s = n(109426),
    o = n(245413);
function l(e, t) {
    if (a[(e = e.toLowerCase())]) (n = a[e].key), (i = a[e].iv);
    else if (s[e]) (n = 8 * s[e].key), (i = s[e].iv);
    else throw TypeError('invalid suite type');
    var n,
        i,
        r = o(t, !1, n, i);
    return c(e, r.key, r.iv);
}
function u(e, t) {
    if (a[(e = e.toLowerCase())]) (n = a[e].key), (i = a[e].iv);
    else if (s[e]) (n = 8 * s[e].key), (i = s[e].iv);
    else throw TypeError('invalid suite type');
    var n,
        i,
        r = o(t, !1, n, i);
    return d(e, r.key, r.iv);
}
function c(e, t, n) {
    if (a[(e = e.toLowerCase())]) return r.createCipheriv(e, t, n);
    if (s[e])
        return new i({
            key: t,
            iv: n,
            mode: e
        });
    throw TypeError('invalid suite type');
}
function d(e, t, n) {
    if (a[(e = e.toLowerCase())]) return r.createDecipheriv(e, t, n);
    if (s[e])
        return new i({
            key: t,
            iv: n,
            mode: e,
            decrypt: !0
        });
    throw TypeError('invalid suite type');
}
function f() {
    return Object.keys(s).concat(r.getCiphers());
}
(t.createCipher = t.Cipher = l), (t.createCipheriv = t.Cipheriv = c), (t.createDecipher = t.Decipher = u), (t.createDecipheriv = t.Decipheriv = d), (t.listCiphers = t.getCiphers = f);
