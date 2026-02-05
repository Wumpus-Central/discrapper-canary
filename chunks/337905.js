"use strict";
n.d(t, { Fs: () => o, Jn: () => a, S4: () => _, T8: () => l, lU: () => p, n7: () => g }),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162),
    n(508300);
var i = n(284009),
    s = n.n(i),
    r = n(427157);
function l() {
    return window.crypto.subtle.generateKey(
        { name: "RSA-OAEP", modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: "SHA-256" },
        !0,
        ["decrypt"],
    );
}
async function a(e) {
    return (
        s()(null != e.publicKey, "public key cannot be null"),
        btoa(String.fromCharCode(...new Uint8Array(await window.crypto.subtle.exportKey("spki", e.publicKey))))
    );
}
async function o(e) {
    return (
        s()(null != e.publicKey, "public key cannot be null"),
        u(await window.crypto.subtle.exportKey("spki", e.publicKey))
    );
}
function c(e) {
    return btoa(String.fromCharCode(...new Uint8Array(e)))
        .replace(/\//g, "_")
        .replace(/\+/g, "-")
        .replace(/={1,2}$/, "");
}
function d(e) {
    return Uint8Array.from(atob(e), (e) => e.charCodeAt(0));
}
async function u(e) {
    return c(await window.crypto.subtle.digest({ name: "SHA-256" }, e));
}
function h(e, t) {
    return (
        s()(null != e.privateKey, "private key cannot be null"),
        window.crypto.subtle.decrypt({ name: "RSA-OAEP", hash: "SHA-256" }, e.privateKey, t)
    );
}
async function _(e, t) {
    let n = new TextDecoder(),
        i = await h(e, d(t));
    return n.decode(i);
}
async function p(e, t) {
    return c(await h(e, d(t)));
}
async function g(e, t) {
    let n = (t = await _(e, t)).match(/^(\d+):(\d{1,4}):([a-zA-Z0-9_]+):(.*)$/);
    if (null == n) throw Error("Invalid encoded user record.");
    let [, i, s, l, a] = n;
    return new r.A({ id: i, discriminator: s, avatar: "0" === l ? null : l, username: a });
}
