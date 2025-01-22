var i = r(242474),
    a = r(780177),
    o = r(737372),
    s = r(109426),
    l = r(245413);
function u(e, n) {
    if (o[(e = e.toLowerCase())]) (r = o[e].key), (i = o[e].iv);
    else if (s[e]) (r = 8 * s[e].key), (i = s[e].iv);
    else throw TypeError('invalid suite type');
    var r,
        i,
        a = l(n, !1, r, i);
    return d(e, a.key, a.iv);
}
function c(e, n) {
    if (o[(e = e.toLowerCase())]) (r = o[e].key), (i = o[e].iv);
    else if (s[e]) (r = 8 * s[e].key), (i = s[e].iv);
    else throw TypeError('invalid suite type');
    var r,
        i,
        a = l(n, !1, r, i);
    return f(e, a.key, a.iv);
}
function d(e, n, r) {
    if (o[(e = e.toLowerCase())]) return a.createCipheriv(e, n, r);
    if (s[e])
        return new i({
            key: n,
            iv: r,
            mode: e
        });
    throw TypeError('invalid suite type');
}
function f(e, n, r) {
    if (o[(e = e.toLowerCase())]) return a.createDecipheriv(e, n, r);
    if (s[e])
        return new i({
            key: n,
            iv: r,
            mode: e,
            decrypt: !0
        });
    throw TypeError('invalid suite type');
}
function p() {
    return Object.keys(s).concat(a.getCiphers());
}
(n.createCipher = n.Cipher = u), (n.createCipheriv = n.Cipheriv = d), (n.createDecipher = n.Decipher = c), (n.createDecipheriv = n.Decipheriv = f), (n.listCiphers = n.getCiphers = p);
