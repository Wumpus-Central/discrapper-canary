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
    wz: () => f
});
var s = 'copy',
    o = 'convert';
function l(e, t, n) {
    if (t === s) return n;
    if (t === o) return e(n);
    if (t instanceof Array) return n.map((n) => l(e, t[0], n));
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
            r[i] = l(e, s.schema, n[i]);
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
        id: c(o),
        transports: u(s)
    },
    h = {
        appid: u(s),
        appidExclude: u(s),
        credProps: u(s)
    },
    g = {
        appid: u(s),
        appidExclude: u(s),
        credProps: u(s)
    };
c({
    rp: c(s),
    user: c({
        id: c(o),
        name: c(s),
        displayName: c(s)
    }),
    challenge: c(o),
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
    c(o),
    u(s),
    c({
        clientDataJSON: c(o),
        attestationObject: c(o),
        transports: a(s, (e) => {
            var t;
            return (null == (t = e.getTransports) ? void 0 : t.call(e)) || [];
        })
    }),
    a(g, (e) => e.getClientExtensionResults());
var p = {
        mediation: u(s),
        publicKey: c({
            challenge: c(o),
            timeout: u(s),
            rpId: u(s),
            allowCredentials: u([d]),
            userVerification: u(s),
            extensions: u(h)
        }),
        signal: u(s)
    },
    m = {
        type: c(s),
        id: c(s),
        rawId: c(o),
        authenticatorAttachment: u(s),
        response: c({
            clientDataJSON: c(o),
            authenticatorData: c(o),
            signature: c(o),
            userHandle: c(o)
        }),
        clientExtensionResults: a(g, (e) => e.getClientExtensionResults())
    };
function f(e) {
    return l(r, p, e);
}
async function _(e) {
    let t = await navigator.credentials.get(e);
    return (t.toJSON = () => l(i, m, t)), t;
}
