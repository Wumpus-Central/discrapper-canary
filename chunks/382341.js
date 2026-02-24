"use strict";
n.d(t, { A: () => c }), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162), n(508300);
var r = n(574381),
    i = n(464477);
let s = window.PublicKeyCredential;
function a(e) {
    let t = JSON.parse(e),
        n = t?.publicKey?.allowCredentials;
    return Array.isArray(n) ? n.map((e) => e.id) : [];
}
function o(e) {
    let t = new Uint8Array(16),
        n = new DataView(t.buffer);
    return (
        n.setUint32(0, 0x30f303fb),
        n.setUint16(4, 35878),
        n.setUint16(6, 20307),
        n.setBigUint64(8, BigInt(e)),
        btoa(String.fromCharCode(...t))
            .replace(/\+/g, "-")
            .replace(/\//g, "_")
            .replace(/=/g, "")
    );
}
async function l(e) {
    if (!i.d4 || !(0, r.HZ)()) return !1;
    let t = await PublicKeyCredential.getClientCapabilities?.();
    return void 0 !== t && t[e];
}
class u {
    static async signalAllAcceptedCredentials(e, t) {
        (await l("signalAllAcceptedCredentials")) &&
            (await s.signalAllAcceptedCredentials({
                rpId: window.GLOBAL_ENV.WEBAUTHN_ORIGIN,
                userId: o(t),
                allAcceptedCredentialIds: a(e),
            }));
    }
    static async signalCurrentUserDetails(e) {
        (await l("signalCurrentUserDetails")) &&
            (await s.signalCurrentUserDetails({
                rpId: window.GLOBAL_ENV.WEBAUTHN_ORIGIN,
                userId: o(e.id),
                name: e.username,
                displayName: e.global_name ?? e.username,
            }));
    }
    static async signalUnknownCredential(e) {
        (await l("signalUnknownCredential")) &&
            (await s.signalUnknownCredential({
                rpId: window.GLOBAL_ENV.WEBAUTHN_ORIGIN,
                credentialId: "string" == typeof e ? JSON.parse(e).id : e.id,
            }));
    }
}
let c = u;
