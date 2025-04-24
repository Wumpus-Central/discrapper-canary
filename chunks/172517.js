n.d(t, {
    FW: () => p,
    Pk: () => a,
    Rq: () => f,
    W_: () => s,
    dK: () => o,
    qd: () => g
}),
    n(410992),
    n(227481),
    n(730884),
    n(20464),
    n(341884),
    n(364341),
    n(629680),
    n(505025),
    n(918970),
    n(121784),
    n(644351),
    n(146733),
    n(853839),
    n(570086),
    n(479048),
    n(388685),
    n(704826),
    n(35282),
    n(608445),
    n(415506);
var r = n(512722),
    i = n.n(r),
    l = n(598077);
function s() {
    return window.crypto.subtle.generateKey(
        {
            name: 'RSA-OAEP',
            modulusLength: 2048,
            publicExponent: new Uint8Array([1, 0, 1]),
            hash: 'SHA-256'
        },
        !0,
        ['decrypt']
    );
}
async function o(e) {
    return i()(null != e.publicKey, 'public key cannot be null'), btoa(String.fromCharCode(...new Uint8Array(await window.crypto.subtle.exportKey('spki', e.publicKey))));
}
async function a(e) {
    return i()(null != e.publicKey, 'public key cannot be null'), d(await window.crypto.subtle.exportKey('spki', e.publicKey));
}
function c(e) {
    return btoa(String.fromCharCode(...new Uint8Array(e)))
        .replace(/\//g, '_')
        .replace(/\+/g, '-')
        .replace(/={1,2}$/, '');
}
function u(e) {
    return Uint8Array.from(atob(e), (e) => e.charCodeAt(0));
}
async function d(e) {
    return c(await window.crypto.subtle.digest({ name: 'SHA-256' }, e));
}
function h(e, t) {
    return (
        i()(null != e.privateKey, 'private key cannot be null'),
        window.crypto.subtle.decrypt(
            {
                name: 'RSA-OAEP',
                hash: 'SHA-256'
            },
            e.privateKey,
            t
        )
    );
}
async function p(e, t) {
    let n = new TextDecoder(),
        r = await h(e, u(t));
    return n.decode(r);
}
async function g(e, t) {
    return c(await h(e, u(t)));
}
async function f(e, t) {
    let n = (t = await p(e, t)).match(/^(\d+):(\d{1,4}):([a-zA-Z0-9_]+):(.*)$/);
    if (null == n) throw Error('Invalid encoded user record.');
    let [, r, i, s, o] = n;
    return new l.Z({
        id: r,
        discriminator: i,
        avatar: '0' === s ? null : s,
        username: o
    });
}
