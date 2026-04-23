"use strict";
n.d(t, { A: () => o }), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162), n(508300);
var i = n(284009),
    s = n.n(i),
    r = n(442767);
async function l(e) {
    let t = await window.crypto.subtle.digest({ name: "SHA-256" }, e);
    return (0, r.KA)(t);
}
function a(e, t) {
    return (
        s()(null != e.privateKey, "private key cannot be null"),
        window.crypto.subtle.decrypt({ name: "RSA-OAEP", hash: "SHA-256" }, e.privateKey, t)
    );
}
let o = new (class {
    generateRsaKeyPair() {
        return window.crypto.subtle.generateKey(
            { name: "RSA-OAEP", modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: "SHA-256" },
            !0,
            ["decrypt"],
        );
    }
    async serializePublicKey(e) {
        return (
            s()(null != e.publicKey, "public key cannot be null"),
            btoa(String.fromCharCode(...new Uint8Array(await window.crypto.subtle.exportKey("spki", e.publicKey))))
        );
    }
    async publicKeyFingerprint(e) {
        return (
            s()(null != e.publicKey, "public key cannot be null"),
            l(await window.crypto.subtle.exportKey("spki", e.publicKey))
        );
    }
    async decryptEncodedCiphertext(e, t) {
        let n = new TextDecoder(),
            i = await a(e, (0, r.u)(t));
        return n.decode(i);
    }
    async decryptNonce(e, t) {
        let n = await a(e, (0, r.u)(t));
        return (0, r.KA)(n);
    }
    release() {}
})();
