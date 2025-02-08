function i(e) {
    let t = '=='.slice(0, (4 - (e.length % 4)) % 4),
        n = atob(e.replace(/-/g, '+').replace(/_/g, '/') + t),
        i = new ArrayBuffer(n.length),
        r = new Uint8Array(i);
    for (let e = 0; e < n.length; e++) r[e] = n.charCodeAt(e);
    return i;
}
function r(e) {
    let t = new Uint8Array(e),
        n = '';
    for (let e of t) n += String.fromCharCode(e);
    return btoa(n).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}
n.d(t, {
    U2: () => f,
    wz: () => p
});
var a = 'copy',
    l = 'convert';
function o(e, t, n) {
    if (t === a) return n;
    if (t === l) return e(n);
    if (t instanceof Array) return n.map((n) => o(e, t[0], n));
    if (t instanceof Object) {
        let i = {};
        for (let [r, a] of Object.entries(t)) {
            if (a.derive) {
                let e = a.derive(n);
                void 0 !== e && (n[r] = e);
            }
            if (!(r in n)) {
                if (a.required) throw Error(`Missing key: ${r}`);
                continue;
            }
            if (null == n[r]) {
                i[r] = null;
                continue;
            }
            i[r] = o(e, a.schema, n[r]);
        }
        return i;
    }
}
function s(e, t) {
    return {
        required: !0,
        schema: e,
        derive: t
    };
}
function c(e) {
    return {
        required: !0,
        schema: e
    };
}
function d(e) {
    return {
        required: !1,
        schema: e
    };
}
var u = {
        type: c(a),
        id: c(l),
        transports: d(a)
    },
    h = {
        appid: d(a),
        appidExclude: d(a),
        credProps: d(a)
    },
    _ = {
        appid: d(a),
        appidExclude: d(a),
        credProps: d(a)
    };
c({
    rp: c(a),
    user: c({
        id: c(l),
        name: c(a),
        displayName: c(a)
    }),
    challenge: c(l),
    pubKeyCredParams: c(a),
    timeout: d(a),
    excludeCredentials: d([u]),
    authenticatorSelection: d(a),
    attestation: d(a),
    extensions: d(h)
}),
    d(a),
    c(a),
    c(a),
    c(l),
    d(a),
    c({
        clientDataJSON: c(l),
        attestationObject: c(l),
        transports: s(a, (e) => {
            var t;
            return (null == (t = e.getTransports) ? void 0 : t.call(e)) || [];
        })
    }),
    s(_, (e) => e.getClientExtensionResults());
var g = {
        mediation: d(a),
        publicKey: c({
            challenge: c(l),
            timeout: d(a),
            rpId: d(a),
            allowCredentials: d([u]),
            userVerification: d(a),
            extensions: d(h)
        }),
        signal: d(a)
    },
    m = {
        type: c(a),
        id: c(a),
        rawId: c(l),
        authenticatorAttachment: d(a),
        response: c({
            clientDataJSON: c(l),
            authenticatorData: c(l),
            signature: c(l),
            userHandle: c(l)
        }),
        clientExtensionResults: s(_, (e) => e.getClientExtensionResults())
    };
function p(e) {
    return o(i, g, e);
}
async function f(e) {
    let t = await navigator.credentials.get(e);
    return (t.toJSON = () => o(r, m, t)), t;
}
