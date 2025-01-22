(n.randomBytes = n.rng = n.pseudoRandomBytes = n.prng = r(706178)), (n.createHash = n.Hash = r(108381)), (n.createHmac = n.Hmac = r(294415));
var i = ['sha1', 'sha224', 'sha256', 'sha384', 'sha512', 'md5', 'rmd160'].concat(Object.keys(r(518401)));
n.getHashes = function () {
    return i;
};
var a = r(585754);
(n.pbkdf2 = a.pbkdf2), (n.pbkdf2Sync = a.pbkdf2Sync);
var o = r(768730);
(n.Cipher = o.Cipher), (n.createCipher = o.createCipher), (n.Cipheriv = o.Cipheriv), (n.createCipheriv = o.createCipheriv), (n.Decipher = o.Decipher), (n.createDecipher = o.createDecipher), (n.Decipheriv = o.Decipheriv), (n.createDecipheriv = o.createDecipheriv), (n.getCiphers = o.getCiphers), (n.listCiphers = o.listCiphers);
var s = r(985493);
(n.DiffieHellmanGroup = s.DiffieHellmanGroup), (n.createDiffieHellmanGroup = s.createDiffieHellmanGroup), (n.getDiffieHellman = s.getDiffieHellman), (n.createDiffieHellman = s.createDiffieHellman), (n.DiffieHellman = s.DiffieHellman);
var l = r(552718);
(n.createSign = l.createSign), (n.Sign = l.Sign), (n.createVerify = l.createVerify), (n.Verify = l.Verify), (n.createECDH = r(398833));
var u = r(197909);
(n.publicEncrypt = u.publicEncrypt), (n.privateEncrypt = u.privateEncrypt), (n.publicDecrypt = u.publicDecrypt), (n.privateDecrypt = u.privateDecrypt);
var c = r(107083);
(n.randomFill = c.randomFill),
    (n.randomFillSync = c.randomFillSync),
    (n.createCredentials = function () {
        throw Error('sorry, createCredentials is not implemented yet\nwe accept pull requests\nhttps://github.com/crypto-browserify/crypto-browserify');
    }),
    (n.constants = {
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
