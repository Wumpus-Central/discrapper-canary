n.d(e, { J: () => r, v: () => l }),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162),
    n(508300);
var s = n(284009),
    i = n.n(s);
function a(t) {
    if (null != t)
        return btoa(String.fromCharCode(...new Uint8Array(t)))
            .replace(/\+/g, "-")
            .replace(/\//g, "_")
            .replace(/=/g, "");
}
async function r(t, e) {
    var n;
    let s,
        r = JSON.parse(t),
        l = PublicKeyCredential.parseRequestOptionsFromJSON(r.publicKey),
        c = { ...r, publicKey: l, signal: e };
    return (
        (s = (n = await navigator.credentials.get(c)).response),
        i()(s instanceof AuthenticatorAssertionResponse, "WebAuthn: Cannot parse attestation response for assertion"),
        JSON.stringify({
            authenticatorAttachment: n.authenticatorAttachment,
            clientExtensionResults: n.getClientExtensionResults(),
            id: n.id,
            rawId: a(n.rawId),
            response: {
                authenticatorData: a(s.authenticatorData),
                clientDataJSON: a(s.clientDataJSON),
                signature: a(s.signature),
                userHandle: a(s.userHandle),
            },
            type: n.type,
        })
    );
}
async function l(t, e) {
    var n;
    let s,
        r = JSON.parse(t),
        l = PublicKeyCredential.parseCreationOptionsFromJSON(r.publicKey),
        c = { ...r, publicKey: l, signal: e };
    return (
        (s = (n = await navigator.credentials.create(c)).response),
        i()(s instanceof AuthenticatorAttestationResponse, "WebAuthn: Cannot parse assertion response for attestation"),
        JSON.stringify({
            authenticatorAttachment: n.authenticatorAttachment,
            clientExtensionResults: n.getClientExtensionResults(),
            id: n.id,
            rawId: a(n.rawId),
            response: {
                attestationObject: a(s.attestationObject),
                authenticatorData: a(s.getAuthenticatorData()),
                clientDataJSON: a(s.clientDataJSON),
                publicKey: a(s.getPublicKey()),
                publicKeyAlgorithm: s.getPublicKeyAlgorithm(),
                transports: s.getTransports(),
            },
            type: n.type,
        })
    );
}
