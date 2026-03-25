"use strict";
n.d(t, { KA: () => l, n7: () => r, u: () => a }),
    n(508300),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162);
var i = n(427157),
    s = n(323737);
async function r(e, t) {
    let n = (t = await s.A.decryptEncodedCiphertext(e, t)).match(/^(\d+):(\d{1,4}):([a-zA-Z0-9_]+):(.*)$/);
    if (null == n) throw Error("Invalid encoded user record.");
    let [, r, l, a, o] = n;
    return new i.A({ id: r, discriminator: l, avatar: "0" === a ? null : a, username: o });
}
function l(e) {
    return btoa(String.fromCharCode(...new Uint8Array(e)))
        .replace(/\//g, "_")
        .replace(/\+/g, "-")
        .replace(/={1,2}$/, "");
}
function a(e) {
    return Uint8Array.from(atob(e), (e) => e.charCodeAt(0));
}
