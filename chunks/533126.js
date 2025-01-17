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
    U2: function () {
        return x;
    },
    wz: function () {
        return p;
    }
});
var s = 'copy',
    l = 'convert';
function o(e, t, n) {
    if (t === s) return n;
    if (t === l) return e(n);
    if (t instanceof Array) return n.map((n) => o(e, t[0], n));
    if (t instanceof Object) {
        let i = {};
        for (let [r, s] of Object.entries(t)) {
            if (s.derive) {
                let e = s.derive(n);
                void 0 !== e && (n[r] = e);
            }
            if (!(r in n)) {
                if (s.required) throw Error(`Missing key: ${r}`);
                continue;
            }
            if (null == n[r]) {
                i[r] = null;
                continue;
            }
            i[r] = o(e, s.schema, n[r]);
        }
        return i;
    }
}
function a(e, t) {
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
        type: c(s),
        id: c(l),
        transports: d(s)
    },
    h = {
        appid: d(s),
        appidExclude: d(s),
        credProps: d(s)
    },
    f = {
        appid: d(s),
        appidExclude: d(s),
        credProps: d(s)
    };
c({
    rp: c(s),
    user: c({
        id: c(l),
        name: c(s),
        displayName: c(s)
    }),
    challenge: c(l),
    pubKeyCredParams: c(s),
    timeout: d(s),
    excludeCredentials: d([u]),
    authenticatorSelection: d(s),
    attestation: d(s),
    extensions: d(h)
}),
    d(s),
    c(s),
    c(s),
    c(l),
    d(s),
    c({
        clientDataJSON: c(l),
        attestationObject: c(l),
        transports: a(s, (e) => {
            var t;
            return (null == (t = e.getTransports) ? void 0 : t.call(e)) || [];
        })
    }),
    a(f, (e) => e.getClientExtensionResults());
var g = {
        mediation: d(s),
        publicKey: c({
            challenge: c(l),
            timeout: d(s),
            rpId: d(s),
            allowCredentials: d([u]),
            userVerification: d(s),
            extensions: d(h)
        }),
        signal: d(s)
    },
    m = {
        type: c(s),
        id: c(s),
        rawId: c(l),
        authenticatorAttachment: d(s),
        response: c({
            clientDataJSON: c(l),
            authenticatorData: c(l),
            signature: c(l),
            userHandle: c(l)
        }),
        clientExtensionResults: a(f, (e) => e.getClientExtensionResults())
    };
function p(e) {
    return o(i, g, e);
}
async function x(e) {
    let t = await navigator.credentials.get(e);
    return (t.toJSON = () => o(r, m, t)), t;
}
