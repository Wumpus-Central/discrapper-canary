(t.randomBytes = t.rng = t.pseudoRandomBytes = t.prng = n(706178)), (t.createHash = t.Hash = n(108381)), (t.createHmac = t.Hmac = n(294415));
var r = ['sha1', 'sha224', 'sha256', 'sha384', 'sha512', 'md5', 'rmd160'].concat(Object.keys(n(518401)));
t.getHashes = function () {
    return r;
};
var i = n(585754);
(t.pbkdf2 = i.pbkdf2), (t.pbkdf2Sync = i.pbkdf2Sync);
var o = n(768730);
(t.Cipher = o.Cipher), (t.createCipher = o.createCipher), (t.Cipheriv = o.Cipheriv), (t.createCipheriv = o.createCipheriv), (t.Decipher = o.Decipher), (t.createDecipher = o.createDecipher), (t.Decipheriv = o.Decipheriv), (t.createDecipheriv = o.createDecipheriv), (t.getCiphers = o.getCiphers), (t.listCiphers = o.listCiphers);
var a = n(985493);
(t.DiffieHellmanGroup = a.DiffieHellmanGroup), (t.createDiffieHellmanGroup = a.createDiffieHellmanGroup), (t.getDiffieHellman = a.getDiffieHellman), (t.createDiffieHellman = a.createDiffieHellman), (t.DiffieHellman = a.DiffieHellman);
var s = n(552718);
(t.createSign = s.createSign), (t.Sign = s.Sign), (t.createVerify = s.createVerify), (t.Verify = s.Verify), (t.createECDH = n(398833));
var l = n(197909);
(t.publicEncrypt = l.publicEncrypt), (t.privateEncrypt = l.privateEncrypt), (t.publicDecrypt = l.publicDecrypt), (t.privateDecrypt = l.privateDecrypt);
var c = n(107083);
(t.randomFill = c.randomFill),
    (t.randomFillSync = c.randomFillSync),
    (t.createCredentials = function () {
        throw Error('sorry, createCredentials is not implemented yet\nwe accept pull requests\nhttps://github.com/crypto-browserify/crypto-browserify');
    }),
    (t.constants = {
        DH_CHECK_P_NOT_SAFE_PRIME: 2,
        DH_CHECK_P_NOT_PRIME: 1,
        DH_UNABLE_TO_CHECK_GENERATOR: 4,
        DH_NOT_SUITABLE_GENERATOR: 8,
        NPN_ENABLED: 1,
        ALPN_ENABLED: 1,
        RSA_PKCS1_PADDING: 1,
        RSA_SSLV23_PADDING: 2,
        RSA_NO_PADDING: 3,
        RSA_PKCS1_OAEP_PADDING: 4,
        RSA_X931_PADDING: 5,
        RSA_PKCS1_PSS_PADDING: 6,
        POINT_CONVERSION_COMPRESSED: 2,
        POINT_CONVERSION_UNCOMPRESSED: 4,
        POINT_CONVERSION_HYBRID: 6
    });
