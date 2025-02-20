var r = n(957578).Buffer,
    i = n(294415),
    o = n(530917),
    a = n(136924).ec,
    s = n(28704),
    l = n(223428),
    c = n(733345);
function u(e, t, n, i, a) {
    var s = l(t);
    if (s.curve) {
        if ('ecdsa' !== i && 'ecdsa/rsa' !== i) throw Error('wrong private key type');
        return d(e, s);
    }
    if ('dsa' === s.type) {
        if ('dsa' !== i) throw Error('wrong private key type');
        return f(e, s, n);
    }
    if ('rsa' !== i && 'ecdsa/rsa' !== i) throw Error('wrong private key type');
    e = r.concat([a, e]);
    for (var c = s.modulus.byteLength(), u = [0, 1]; e.length + u.length + 1 < c; ) u.push(255);
    u.push(0);
    for (var p = -1; ++p < e.length; ) u.push(e[p]);
    return o(u, s);
}
function d(e, t) {
    var n = c[t.curve.join('.')];
    if (!n) throw Error('unknown curve ' + t.curve.join('.'));
    var i = new a(n).keyFromPrivate(t.privateKey).sign(e);
    return r.from(i.toDER());
}
function f(e, t, n) {
    for (var r, i = t.params.priv_key, o = t.params.p, a = t.params.q, l = t.params.g, c = new s(0), u = h(e, a).mod(a), d = !1, f = _(i, a, e, n); !1 === d; )
        (c = E(l, (r = g(a, f, n)), o, a)),
            0 ===
                (d = r
                    .invm(a)
                    .imul(u.add(i.mul(c)))
                    .mod(a)).cmpn(0) && ((d = !1), (c = new s(0)));
    return p(c, d);
}
function p(e, t) {
    (e = e.toArray()), (t = t.toArray()), 128 & e[0] && (e = [0].concat(e)), 128 & t[0] && (t = [0].concat(t));
    var n = [48, e.length + t.length + 4, 2, e.length];
    return (n = n.concat(e, [2, t.length], t)), r.from(n);
}
function _(e, t, n, o) {
    if ((e = r.from(e.toArray())).length < t.byteLength()) {
        var a = r.alloc(t.byteLength() - e.length);
        e = r.concat([a, e]);
    }
    var s = n.length,
        l = m(n, t),
        c = r.alloc(s);
    c.fill(1);
    var u = r.alloc(s);
    return (
        (u = i(o, u)
            .update(c)
            .update(r.from([0]))
            .update(e)
            .update(l)
            .digest()),
        (c = i(o, u).update(c).digest()),
        (u = i(o, u)
            .update(c)
            .update(r.from([1]))
            .update(e)
            .update(l)
            .digest()),
        (c = i(o, u).update(c).digest()),
        {
            k: u,
            v: c
        }
    );
}
function h(e, t) {
    var n = new s(e),
        r = (e.length << 3) - t.bitLength();
    return r > 0 && n.ishrn(r), n;
}
function m(e, t) {
    e = (e = h(e, t)).mod(t);
    var n = r.from(e.toArray());
    if (n.length < t.byteLength()) {
        var i = r.alloc(t.byteLength() - n.length);
        n = r.concat([i, n]);
    }
    return n;
}
function g(e, t, n) {
    var o, a;
    do {
        for (o = r.alloc(0); 8 * o.length < e.bitLength(); ) (t.v = i(n, t.k).update(t.v).digest()), (o = r.concat([o, t.v]));
        (a = h(o, e)),
            (t.k = i(n, t.k)
                .update(t.v)
                .update(r.from([0]))
                .digest()),
            (t.v = i(n, t.k).update(t.v).digest());
    } while (-1 !== a.cmp(e));
    return a;
}
function E(e, t, n, r) {
    return e.toRed(s.mont(n)).redPow(t).fromRed().mod(r);
}
(e.exports = u), (e.exports.getKey = _), (e.exports.makeKey = g);
