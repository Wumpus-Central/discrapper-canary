var i = n(35768),
    r = n(771378),
    a = n(778247),
    s = n(780177),
    o = n(585754),
    l = n(957578).Buffer;
function u(e) {
    'object' != typeof e || l.isBuffer(e) || ((t = e.passphrase), (e = e.key)), 'string' == typeof e && (e = l.from(e));
    var t,
        n,
        r,
        s = a(e, t),
        o = s.tag,
        u = s.data;
    switch (o) {
        case 'CERTIFICATE':
            r = i.certificate.decode(u, 'der').tbsCertificate.subjectPublicKeyInfo;
        case 'PUBLIC KEY':
            switch ((r || (r = i.PublicKey.decode(u, 'der')), (n = r.algorithm.algorithm.join('.')))) {
                case '1.2.840.113549.1.1.1':
                    return i.RSAPublicKey.decode(r.subjectPublicKey.data, 'der');
                case '1.2.840.10045.2.1':
                    return (
                        (r.subjectPrivateKey = r.subjectPublicKey),
                        {
                            type: 'ec',
                            data: r
                        }
                    );
                case '1.2.840.10040.4.1':
                    return (
                        (r.algorithm.params.pub_key = i.DSAparam.decode(r.subjectPublicKey.data, 'der')),
                        {
                            type: 'dsa',
                            data: r.algorithm.params
                        }
                    );
                default:
                    throw Error('unknown key id ' + n);
            }
        case 'ENCRYPTED PRIVATE KEY':
            u = c((u = i.EncryptedPrivateKey.decode(u, 'der')), t);
        case 'PRIVATE KEY':
            switch ((n = (r = i.PrivateKey.decode(u, 'der')).algorithm.algorithm.join('.'))) {
                case '1.2.840.113549.1.1.1':
                    return i.RSAPrivateKey.decode(r.subjectPrivateKey, 'der');
                case '1.2.840.10045.2.1':
                    return {
                        curve: r.algorithm.curve,
                        privateKey: i.ECPrivateKey.decode(r.subjectPrivateKey, 'der').privateKey
                    };
                case '1.2.840.10040.4.1':
                    return (
                        (r.algorithm.params.priv_key = i.DSAparam.decode(r.subjectPrivateKey, 'der')),
                        {
                            type: 'dsa',
                            params: r.algorithm.params
                        }
                    );
                default:
                    throw Error('unknown key id ' + n);
            }
        case 'RSA PUBLIC KEY':
            return i.RSAPublicKey.decode(u, 'der');
        case 'RSA PRIVATE KEY':
            return i.RSAPrivateKey.decode(u, 'der');
        case 'DSA PRIVATE KEY':
            return {
                type: 'dsa',
                params: i.DSAPrivateKey.decode(u, 'der')
            };
        case 'EC PRIVATE KEY':
            return {
                curve: (u = i.ECPrivateKey.decode(u, 'der')).parameters.value,
                privateKey: u.privateKey
            };
        default:
            throw Error('unknown key type ' + o);
    }
}
function c(e, t) {
    var n = e.algorithm.decrypt.kde.kdeparams.salt,
        i = parseInt(e.algorithm.decrypt.kde.kdeparams.iters.toString(), 10),
        a = r[e.algorithm.decrypt.cipher.algo.join('.')],
        u = e.algorithm.decrypt.cipher.iv,
        c = e.subjectPrivateKey,
        d = parseInt(a.split('-')[1], 10) / 8,
        f = o.pbkdf2Sync(t, n, i, d, 'sha1'),
        _ = s.createDecipheriv(a, f, u),
        p = [];
    return p.push(_.update(c)), p.push(_.final()), l.concat(p);
}
(e.exports = u), (u.signature = i.signature);
