"use strict";
n.d(t, { J: () => l, v: () => a }),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162),
    n(508300);
var i = n(284009),
    s = n.n(i);
function r(e) {
    if (null != e)
        return btoa(String.fromCharCode(...new Uint8Array(e)))
            .replace(/\+/g, "-")
            .replace(/\//g, "_")
            .replace(/=/g, "");
}
async function l(e, t) {
    var n;
    let i,
        l = JSON.parse(e),
        a = PublicKeyCredential.parseRequestOptionsFromJSON(l.publicKey),
        o = { ...l, publicKey: a, signal: t };
    return (
        (i = (n = await navigator.credentials.get(o)).response),
        s()(i instanceof AuthenticatorAssertionResponse, "WebAuthn: Cannot parse attestation response for assertion"),
        JSON.stringify({
            authenticatorAttachment: n.authenticatorAttachment,
            clientExtensionResults: n.getClientExtensionResults(),
            id: n.id,
            rawId: r(n.rawId),
            response: {
                authenticatorData: r(i.authenticatorData),
                clientDataJSON: r(i.clientDataJSON),
                signature: r(i.signature),
                userHandle: r(i.userHandle),
            },
            type: n.type,
        })
    );
}
async function a(e, t) {
    var n;
    let i,
        l = JSON.parse(e),
        a = PublicKeyCredential.parseCreationOptionsFromJSON(l.publicKey),
        o = { ...l, publicKey: a, signal: t };
    return (
        (i = (n = await navigator.credentials.create(o)).response),
        s()(i instanceof AuthenticatorAttestationResponse, "WebAuthn: Cannot parse assertion response for attestation"),
        JSON.stringify({
            authenticatorAttachment: n.authenticatorAttachment,
            clientExtensionResults: n.getClientExtensionResults(),
            id: n.id,
            rawId: r(n.rawId),
            response: {
                attestationObject: r(i.attestationObject),
                authenticatorData: r(i.getAuthenticatorData()),
                clientDataJSON: r(i.clientDataJSON),
                publicKey: r(i.getPublicKey()),
                publicKeyAlgorithm: i.getPublicKeyAlgorithm(),
                transports: i.getTransports(),
            },
            type: n.type,
        })
    );
}
