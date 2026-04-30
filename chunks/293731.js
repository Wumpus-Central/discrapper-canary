a.d(e, { J: () => s, v: () => o }),
    a(393431),
    a(532706),
    a(42231),
    a(232424),
    a(949626),
    a(767709),
    a(65162),
    a(508300);
var n = a(284009),
    i = a.n(n);
function r(t) {
    if (null != t)
        return btoa(String.fromCharCode(...new Uint8Array(t)))
            .replace(/\+/g, "-")
            .replace(/\//g, "_")
            .replace(/=/g, "");
}
async function s(t, e) {
    var a;
    let n,
        s = JSON.parse(t),
        o = PublicKeyCredential.parseRequestOptionsFromJSON(s.publicKey),
        c = { ...s, publicKey: o, signal: e };
    return (
        (n = (a = await navigator.credentials.get(c)).response),
        i()(n instanceof AuthenticatorAssertionResponse, "WebAuthn: Cannot parse attestation response for assertion"),
        JSON.stringify({
            authenticatorAttachment: a.authenticatorAttachment,
            clientExtensionResults: a.getClientExtensionResults(),
            id: a.id,
            rawId: r(a.rawId),
            response: {
                authenticatorData: r(n.authenticatorData),
                clientDataJSON: r(n.clientDataJSON),
                signature: r(n.signature),
                userHandle: r(n.userHandle),
            },
            type: a.type,
        })
    );
}
async function o(t, e) {
    var a;
    let n,
        s = JSON.parse(t),
        o = PublicKeyCredential.parseCreationOptionsFromJSON(s.publicKey),
        c = { ...s, publicKey: o, signal: e };
    return (
        (n = (a = await navigator.credentials.create(c)).response),
        i()(n instanceof AuthenticatorAttestationResponse, "WebAuthn: Cannot parse assertion response for attestation"),
        JSON.stringify({
            authenticatorAttachment: a.authenticatorAttachment,
            clientExtensionResults: a.getClientExtensionResults(),
            id: a.id,
            rawId: r(a.rawId),
            response: {
                attestationObject: r(n.attestationObject),
                authenticatorData: r(n.getAuthenticatorData()),
                clientDataJSON: r(n.clientDataJSON),
                publicKey: r(n.getPublicKey()),
                publicKeyAlgorithm: n.getPublicKeyAlgorithm(),
                transports: n.getTransports(),
            },
            type: a.type,
        })
    );
}
