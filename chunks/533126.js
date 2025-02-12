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
var l = 'copy',
    a = 'convert';
function o(e, t, n) {
    if (t === l) return n;
    if (t === a) return e(n);
    if (t instanceof Array) return n.map((n) => o(e, t[0], n));
    if (t instanceof Object) {
        let i = {};
        for (let [r, l] of Object.entries(t)) {
            if (l.derive) {
                let e = l.derive(n);
                void 0 !== e && (n[r] = e);
            }
            if (!(r in n)) {
                if (l.required) throw Error(`Missing key: ${r}`);
                continue;
            }
            if (null == n[r]) {
                i[r] = null;
                continue;
            }
            i[r] = o(e, l.schema, n[r]);
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
        type: c(l),
        id: c(a),
        transports: d(l)
    },
    h = {
        appid: d(l),
        appidExclude: d(l),
        credProps: d(l)
    },
    _ = {
        appid: d(l),
        appidExclude: d(l),
        credProps: d(l)
    };
c({
    rp: c(l),
    user: c({
        id: c(a),
        name: c(l),
        displayName: c(l)
    }),
    challenge: c(a),
    pubKeyCredParams: c(l),
    timeout: d(l),
    excludeCredentials: d([u]),
    authenticatorSelection: d(l),
    attestation: d(l),
    extensions: d(h)
}),
    d(l),
    c(l),
    c(l),
    c(a),
    d(l),
    c({
        clientDataJSON: c(a),
        attestationObject: c(a),
        transports: s(l, (e) => {
            var t;
            return (null == (t = e.getTransports) ? void 0 : t.call(e)) || [];
        })
    }),
    s(_, (e) => e.getClientExtensionResults());
var g = {
        mediation: d(l),
        publicKey: c({
            challenge: c(a),
            timeout: d(l),
            rpId: d(l),
            allowCredentials: d([u]),
            userVerification: d(l),
            extensions: d(h)
        }),
        signal: d(l)
    },
    m = {
        type: c(l),
        id: c(l),
        rawId: c(a),
        authenticatorAttachment: d(l),
        response: c({
            clientDataJSON: c(a),
            authenticatorData: c(a),
            signature: c(a),
            userHandle: c(a)
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
