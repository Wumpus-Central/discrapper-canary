(t.randomBytes = t.rng = t.pseudoRandomBytes = t.prng = n(706178)), (t.createHash = t.Hash = n(108381)), (t.createHmac = t.Hmac = n(294415));
var i = ['sha1', 'sha224', 'sha256', 'sha384', 'sha512', 'md5', 'rmd160'].concat(Object.keys(n(518401)));
t.getHashes = function () {
    return i;
};
var r = n(585754);
(t.pbkdf2 = r.pbkdf2), (t.pbkdf2Sync = r.pbkdf2Sync);
var a = n(768730);
(t.Cipher = a.Cipher), (t.createCipher = a.createCipher), (t.Cipheriv = a.Cipheriv), (t.createCipheriv = a.createCipheriv), (t.Decipher = a.Decipher), (t.createDecipher = a.createDecipher), (t.Decipheriv = a.Decipheriv), (t.createDecipheriv = a.createDecipheriv), (t.getCiphers = a.getCiphers), (t.listCiphers = a.listCiphers);
var s = n(985493);
(t.DiffieHellmanGroup = s.DiffieHellmanGroup), (t.createDiffieHellmanGroup = s.createDiffieHellmanGroup), (t.getDiffieHellman = s.getDiffieHellman), (t.createDiffieHellman = s.createDiffieHellman), (t.DiffieHellman = s.DiffieHellman);
var o = n(552718);
(t.createSign = o.createSign), (t.Sign = o.Sign), (t.createVerify = o.createVerify), (t.Verify = o.Verify), (t.createECDH = n(398833));
var l = n(197909);
(t.publicEncrypt = l.publicEncrypt), (t.privateEncrypt = l.privateEncrypt), (t.publicDecrypt = l.publicDecrypt), (t.privateDecrypt = l.privateDecrypt);
var u = n(107083);
(t.randomFill = u.randomFill),
    (t.randomFillSync = u.randomFillSync),
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
