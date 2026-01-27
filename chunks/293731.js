n.d(t, {
    J: () => o,
    v: () => c,
}),
    n(927092),
    n(212978),
    n(201528),
    n(393431),
    n(752391),
    n(532706),
    n(42231),
    n(232424),
    n(757074),
    n(949626),
    n(767709),
    n(65162),
    n(896048),
    n(801460),
    n(508300),
    n(650828),
    n(747238),
    n(812715),
    n(457529);
var r = n(284009),
    i = n.n(r);

function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function a(e) {
    if (null != e)
        return btoa(String.fromCharCode(...new Uint8Array(e)))
            .replace(/\+/g, "-")
            .replace(/\//g, "_")
            .replace(/=/g, "");
}
async function o(e, t) {
    var n;
    let r,
        o = JSON.parse(e),
        c = PublicKeyCredential.parseRequestOptionsFromJSON(o.publicKey),
        u = l(s({}, o), {
            publicKey: c,
            signal: t,
        });
    return (
        (r = (n = await navigator.credentials.get(u)).response),
        i()(r instanceof AuthenticatorAssertionResponse, "WebAuthn: Cannot parse attestation response for assertion"),
        JSON.stringify({
            authenticatorAttachment: n.authenticatorAttachment,
            clientExtensionResults: n.getClientExtensionResults(),
            id: n.id,
            rawId: a(n.rawId),
            response: {
                authenticatorData: a(r.authenticatorData),
                clientDataJSON: a(r.clientDataJSON),
                signature: a(r.signature),
                userHandle: a(r.userHandle),
            },
            type: n.type,
        })
    );
}
async function c(e, t) {
    var n;
    let r,
        o = JSON.parse(e),
        c = PublicKeyCredential.parseCreationOptionsFromJSON(o.publicKey),
        u = l(s({}, o), {
            publicKey: c,
            signal: t,
        });
    return (
        (r = (n = await navigator.credentials.create(u)).response),
        i()(r instanceof AuthenticatorAttestationResponse, "WebAuthn: Cannot parse assertion response for attestation"),
        JSON.stringify({
            authenticatorAttachment: n.authenticatorAttachment,
            clientExtensionResults: n.getClientExtensionResults(),
            id: n.id,
            rawId: a(n.rawId),
            response: {
                attestationObject: a(r.attestationObject),
                authenticatorData: a(r.getAuthenticatorData()),
                clientDataJSON: a(r.clientDataJSON),
                publicKey: a(r.getPublicKey()),
                publicKeyAlgorithm: r.getPublicKeyAlgorithm(),
                transports: r.getTransports(),
            },
            type: n.type,
        })
    );
}
