n.d(t, {
    FW: () => g,
    Pk: () => s,
    Rq: () => f,
    W_: () => a,
    dK: () => l,
    qd: () => h
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
    n(610885),
    n(126298),
    n(866573),
    n(642549),
    n(787622),
    n(47120),
    n(757143),
    n(301563),
    n(863942),
    n(411104);
var r = n(512722),
    i = n.n(r),
    o = n(598077);
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
async function l(e) {
    return i()(null != e.publicKey, 'public key cannot be null'), btoa(String.fromCharCode(...new Uint8Array(await window.crypto.subtle.exportKey('spki', e.publicKey))));
}
async function s(e) {
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
function p(e, t) {
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
async function g(e, t) {
    let n = new TextDecoder(),
        r = await p(e, u(t));
    return n.decode(r);
}
async function h(e, t) {
    return c(await p(e, u(t)));
}
async function f(e, t) {
    let n = (t = await g(e, t)).match(/^(\d+):(\d{1,4}):([a-zA-Z0-9_]+):(.*)$/);
    if (null == n) throw Error('Invalid encoded user record.');
    let [, r, i, a, l] = n;
    return new o.Z({
        id: r,
        discriminator: i,
        avatar: '0' === a ? null : a,
        username: l
    });
}
