var r = n(35768),
    i = n(771378),
    o = n(778247),
    a = n(780177),
    s = n(585754),
    l = n(957578).Buffer;
function c(e) {
    'object' != typeof e || l.isBuffer(e) || ((t = e.passphrase), (e = e.key)), 'string' == typeof e && (e = l.from(e));
    var t,
        n,
        i,
        a = o(e, t),
        s = a.tag,
        c = a.data;
    switch (s) {
        case 'CERTIFICATE':
            i = r.certificate.decode(c, 'der').tbsCertificate.subjectPublicKeyInfo;
        case 'PUBLIC KEY':
            switch ((i || (i = r.PublicKey.decode(c, 'der')), (n = i.algorithm.algorithm.join('.')))) {
                case '1.2.840.113549.1.1.1':
                    return r.RSAPublicKey.decode(i.subjectPublicKey.data, 'der');
                case '1.2.840.10045.2.1':
                    return (
                        (i.subjectPrivateKey = i.subjectPublicKey),
                        {
                            type: 'ec',
                            data: i
                        }
                    );
                case '1.2.840.10040.4.1':
                    return (
                        (i.algorithm.params.pub_key = r.DSAparam.decode(i.subjectPublicKey.data, 'der')),
                        {
                            type: 'dsa',
                            data: i.algorithm.params
                        }
                    );
                default:
                    throw Error('unknown key id ' + n);
            }
        case 'ENCRYPTED PRIVATE KEY':
            c = u((c = r.EncryptedPrivateKey.decode(c, 'der')), t);
        case 'PRIVATE KEY':
            switch ((n = (i = r.PrivateKey.decode(c, 'der')).algorithm.algorithm.join('.'))) {
                case '1.2.840.113549.1.1.1':
                    return r.RSAPrivateKey.decode(i.subjectPrivateKey, 'der');
                case '1.2.840.10045.2.1':
                    return {
                        curve: i.algorithm.curve,
                        privateKey: r.ECPrivateKey.decode(i.subjectPrivateKey, 'der').privateKey
                    };
                case '1.2.840.10040.4.1':
                    return (
                        (i.algorithm.params.priv_key = r.DSAparam.decode(i.subjectPrivateKey, 'der')),
                        {
                            type: 'dsa',
                            params: i.algorithm.params
                        }
                    );
                default:
                    throw Error('unknown key id ' + n);
            }
        case 'RSA PUBLIC KEY':
            return r.RSAPublicKey.decode(c, 'der');
        case 'RSA PRIVATE KEY':
            return r.RSAPrivateKey.decode(c, 'der');
        case 'DSA PRIVATE KEY':
            return {
                type: 'dsa',
                params: r.DSAPrivateKey.decode(c, 'der')
            };
        case 'EC PRIVATE KEY':
            return {
                curve: (c = r.ECPrivateKey.decode(c, 'der')).parameters.value,
                privateKey: c.privateKey
            };
        default:
            throw Error('unknown key type ' + s);
    }
}
function u(e, t) {
    var n = e.algorithm.decrypt.kde.kdeparams.salt,
        r = parseInt(e.algorithm.decrypt.kde.kdeparams.iters.toString(), 10),
        o = i[e.algorithm.decrypt.cipher.algo.join('.')],
        c = e.algorithm.decrypt.cipher.iv,
        u = e.subjectPrivateKey,
        d = parseInt(o.split('-')[1], 10) / 8,
        f = s.pbkdf2Sync(t, n, r, d, 'sha1'),
        p = a.createDecipheriv(o, f, c),
        _ = [];
    return _.push(p.update(u)), _.push(p.final()), l.concat(_);
}
(e.exports = c), (c.signature = r.signature);
