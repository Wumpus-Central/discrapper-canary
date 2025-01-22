var i = r(35768),
    a = r(771378),
    o = r(778247),
    s = r(780177),
    l = r(585754),
    u = r(957578).Buffer;
function c(e) {
    'object' == typeof e && !u.isBuffer(e) && ((n = e.passphrase), (e = e.key)), 'string' == typeof e && (e = u.from(e));
    var n,
        r,
        a,
        s = o(e, n),
        l = s.tag,
        c = s.data;
    switch (l) {
        case 'CERTIFICATE':
            a = i.certificate.decode(c, 'der').tbsCertificate.subjectPublicKeyInfo;
        case 'PUBLIC KEY':
            switch ((!a && (a = i.PublicKey.decode(c, 'der')), (r = a.algorithm.algorithm.join('.')))) {
                case '1.2.840.113549.1.1.1':
                    return i.RSAPublicKey.decode(a.subjectPublicKey.data, 'der');
                case '1.2.840.10045.2.1':
                    return (
                        (a.subjectPrivateKey = a.subjectPublicKey),
                        {
                            type: 'ec',
                            data: a
                        }
                    );
                case '1.2.840.10040.4.1':
                    return (
                        (a.algorithm.params.pub_key = i.DSAparam.decode(a.subjectPublicKey.data, 'der')),
                        {
                            type: 'dsa',
                            data: a.algorithm.params
                        }
                    );
                default:
                    throw Error('unknown key id ' + r);
            }
        case 'ENCRYPTED PRIVATE KEY':
            c = d((c = i.EncryptedPrivateKey.decode(c, 'der')), n);
        case 'PRIVATE KEY':
            switch ((r = (a = i.PrivateKey.decode(c, 'der')).algorithm.algorithm.join('.'))) {
                case '1.2.840.113549.1.1.1':
                    return i.RSAPrivateKey.decode(a.subjectPrivateKey, 'der');
                case '1.2.840.10045.2.1':
                    return {
                        curve: a.algorithm.curve,
                        privateKey: i.ECPrivateKey.decode(a.subjectPrivateKey, 'der').privateKey
                    };
                case '1.2.840.10040.4.1':
                    return (
                        (a.algorithm.params.priv_key = i.DSAparam.decode(a.subjectPrivateKey, 'der')),
                        {
                            type: 'dsa',
                            params: a.algorithm.params
                        }
                    );
                default:
                    throw Error('unknown key id ' + r);
            }
        case 'RSA PUBLIC KEY':
            return i.RSAPublicKey.decode(c, 'der');
        case 'RSA PRIVATE KEY':
            return i.RSAPrivateKey.decode(c, 'der');
        case 'DSA PRIVATE KEY':
            return {
                type: 'dsa',
                params: i.DSAPrivateKey.decode(c, 'der')
            };
        case 'EC PRIVATE KEY':
            return {
                curve: (c = i.ECPrivateKey.decode(c, 'der')).parameters.value,
                privateKey: c.privateKey
            };
        default:
            throw Error('unknown key type ' + l);
    }
}
function d(e, n) {
    var r = e.algorithm.decrypt.kde.kdeparams.salt,
        i = parseInt(e.algorithm.decrypt.kde.kdeparams.iters.toString(), 10),
        o = a[e.algorithm.decrypt.cipher.algo.join('.')],
        c = e.algorithm.decrypt.cipher.iv,
        d = e.subjectPrivateKey,
        f = parseInt(o.split('-')[1], 10) / 8,
        p = l.pbkdf2Sync(n, r, i, f, 'sha1'),
        h = s.createDecipheriv(o, p, c),
        _ = [];
    return _.push(h.update(d)), _.push(h.final()), u.concat(_);
}
(e.exports = c), (c.signature = i.signature);
