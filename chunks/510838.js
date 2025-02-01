var i = n(957578).Buffer,
    r = n(294415),
    a = n(530917),
    s = n(136924).ec,
    o = n(28704),
    l = n(223428),
    u = n(733345);
function c(e, t, n, r, s) {
    var o = l(t);
    if (o.curve) {
        if ('ecdsa' !== r && 'ecdsa/rsa' !== r) throw Error('wrong private key type');
        return d(e, o);
    }
    if ('dsa' === o.type) {
        if ('dsa' !== r) throw Error('wrong private key type');
        return f(e, o, n);
    }
    if ('rsa' !== r && 'ecdsa/rsa' !== r) throw Error('wrong private key type');
    e = i.concat([s, e]);
    for (var u = o.modulus.byteLength(), c = [0, 1]; e.length + c.length + 1 < u; ) c.push(255);
    c.push(0);
    for (var _ = -1; ++_ < e.length; ) c.push(e[_]);
    return a(c, o);
}
function d(e, t) {
    var n = u[t.curve.join('.')];
    if (!n) throw Error('unknown curve ' + t.curve.join('.'));
    var r = new s(n).keyFromPrivate(t.privateKey).sign(e);
    return i.from(r.toDER());
}
function f(e, t, n) {
    for (var i, r = t.params.priv_key, a = t.params.p, s = t.params.q, l = t.params.g, u = new o(0), c = h(e, s).mod(s), d = !1, f = p(r, s, e, n); !1 === d; )
        (u = E(l, (i = g(s, f, n)), a, s)),
            0 ===
                (d = i
                    .invm(s)
                    .imul(c.add(r.mul(u)))
                    .mod(s)).cmpn(0) && ((d = !1), (u = new o(0)));
    return _(u, d);
}
function _(e, t) {
    (e = e.toArray()), (t = t.toArray()), 128 & e[0] && (e = [0].concat(e)), 128 & t[0] && (t = [0].concat(t));
    var n = [48, e.length + t.length + 4, 2, e.length];
    return (n = n.concat(e, [2, t.length], t)), i.from(n);
}
function p(e, t, n, a) {
    if ((e = i.from(e.toArray())).length < t.byteLength()) {
        var s = i.alloc(t.byteLength() - e.length);
        e = i.concat([s, e]);
    }
    var o = n.length,
        l = m(n, t),
        u = i.alloc(o);
    u.fill(1);
    var c = i.alloc(o);
    return (
        (c = r(a, c)
            .update(u)
            .update(i.from([0]))
            .update(e)
            .update(l)
            .digest()),
        (u = r(a, c).update(u).digest()),
        (c = r(a, c)
            .update(u)
            .update(i.from([1]))
            .update(e)
            .update(l)
            .digest()),
        (u = r(a, c).update(u).digest()),
        {
            k: c,
            v: u
        }
    );
}
function h(e, t) {
    var n = new o(e),
        i = (e.length << 3) - t.bitLength();
    return i > 0 && n.ishrn(i), n;
}
function m(e, t) {
    e = (e = h(e, t)).mod(t);
    var n = i.from(e.toArray());
    if (n.length < t.byteLength()) {
        var r = i.alloc(t.byteLength() - n.length);
        n = i.concat([r, n]);
    }
    return n;
}
function g(e, t, n) {
    var a, s;
    do {
        for (a = i.alloc(0); 8 * a.length < e.bitLength(); ) (t.v = r(n, t.k).update(t.v).digest()), (a = i.concat([a, t.v]));
        (s = h(a, e)),
            (t.k = r(n, t.k)
                .update(t.v)
                .update(i.from([0]))
                .digest()),
            (t.v = r(n, t.k).update(t.v).digest());
    } while (-1 !== s.cmp(e));
    return s;
}
function E(e, t, n, i) {
    return e.toRed(o.mont(n)).redPow(t).fromRed().mod(i);
}
(e.exports = c), (e.exports.getKey = p), (e.exports.makeKey = g);
