n.d(t, {
    FW: () => _,
    Pk: () => s,
    Rq: () => m,
    W_: () => a,
    dK: () => o,
    qd: () => g
}),
    n(518263),
    n(970173),
    n(520712),
    n(268111),
    n(941497),
    n(32026),
    n(480839),
    n(744285),
    n(492257),
    n(873817),
    n(642549),
    n(47120),
    n(757143),
    n(863942),
    n(411104);
var i = n(512722),
    r = n.n(i),
    l = n(598077);
function a() {
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
    return r()(null != e.publicKey, 'public key cannot be null'), btoa(String.fromCharCode(...new Uint8Array(await window.crypto.subtle.exportKey('spki', e.publicKey))));
}
async function s(e) {
    return r()(null != e.publicKey, 'public key cannot be null'), u(await window.crypto.subtle.exportKey('spki', e.publicKey));
}
function c(e) {
    return btoa(String.fromCharCode(...new Uint8Array(e)))
        .replace(/\//g, '_')
        .replace(/\+/g, '-')
        .replace(/={1,2}$/, '');
}
function d(e) {
    return Uint8Array.from(atob(e), (e) => e.charCodeAt(0));
}
async function u(e) {
    return c(await window.crypto.subtle.digest({ name: 'SHA-256' }, e));
}
function h(e, t) {
    return (
        r()(null != e.privateKey, 'private key cannot be null'),
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
async function _(e, t) {
    let n = new TextDecoder(),
        i = await h(e, d(t));
    return n.decode(i);
}
async function g(e, t) {
    return c(await h(e, d(t)));
}
async function m(e, t) {
    let n = (t = await _(e, t)).match(/^(\d+):(\d{1,4}):([a-zA-Z0-9_]+):(.*)$/);
    if (null == n) throw Error('Invalid encoded user record.');
    let [, i, r, a, o] = n;
    return new l.Z({
        id: i,
        discriminator: r,
        avatar: '0' === a ? null : a,
        username: o
    });
}
