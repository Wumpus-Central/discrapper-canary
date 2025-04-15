function r(e) {
    let t = '=='.slice(0, (4 - (e.length % 4)) % 4),
        n = atob(e.replace(/-/g, '+').replace(/_/g, '/') + t),
        r = new ArrayBuffer(n.length),
        i = new Uint8Array(r);
    for (let e = 0; e < n.length; e++) i[e] = n.charCodeAt(e);
    return r;
}
function i(e) {
    let t = new Uint8Array(e),
        n = '';
    for (let e of t) n += String.fromCharCode(e);
    return btoa(n).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}
n.d(t, {
    U2: () => _,
    wz: () => m
});
var s = 'copy',
    l = 'convert';
function o(e, t, n) {
    if (t === s) return n;
    if (t === l) return e(n);
    if (t instanceof Array) return n.map((n) => o(e, t[0], n));
    if (t instanceof Object) {
        let r = {};
        for (let [i, s] of Object.entries(t)) {
            if (s.derive) {
                let e = s.derive(n);
                void 0 !== e && (n[i] = e);
            }
            if (!(i in n)) {
                if (s.required) throw Error(`Missing key: ${i}`);
                continue;
            }
            if (null == n[i]) {
                r[i] = null;
                continue;
            }
            r[i] = o(e, s.schema, n[i]);
        }
        return r;
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
function u(e) {
    return {
        required: !1,
        schema: e
    };
}
var d = {
        type: c(s),
        id: c(l),
        transports: u(s)
    },
    h = {
        appid: u(s),
        appidExclude: u(s),
        credProps: u(s)
    },
    p = {
        appid: u(s),
        appidExclude: u(s),
        credProps: u(s)
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
    timeout: u(s),
    excludeCredentials: u([d]),
    authenticatorSelection: u(s),
    attestation: u(s),
    extensions: u(h)
}),
    u(s),
    c(s),
    c(s),
    c(l),
    u(s),
    c({
        clientDataJSON: c(l),
        attestationObject: c(l),
        transports: a(s, (e) => {
            var t;
            return (null == (t = e.getTransports) ? void 0 : t.call(e)) || [];
        })
    }),
    a(p, (e) => e.getClientExtensionResults());
var g = {
        mediation: u(s),
        publicKey: c({
            challenge: c(l),
            timeout: u(s),
            rpId: u(s),
            allowCredentials: u([d]),
            userVerification: u(s),
            extensions: u(h)
        }),
        signal: u(s)
    },
    f = {
        type: c(s),
        id: c(s),
        rawId: c(l),
        authenticatorAttachment: u(s),
        response: c({
            clientDataJSON: c(l),
            authenticatorData: c(l),
            signature: c(l),
            userHandle: c(l)
        }),
        clientExtensionResults: a(p, (e) => e.getClientExtensionResults())
    };
function m(e) {
    return o(r, g, e);
}
async function _(e) {
    let t = await navigator.credentials.get(e);
    return (t.toJSON = () => o(i, f, t)), t;
}
