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
var l = 'copy',
    o = 'convert';
function a(e, t, n) {
    if (t === l) return n;
    if (t === o) return e(n);
    if (t instanceof Array) return n.map((n) => a(e, t[0], n));
    if (t instanceof Object) {
        let r = {};
        for (let [i, l] of Object.entries(t)) {
            if (l.derive) {
                let e = l.derive(n);
                void 0 !== e && (n[i] = e);
            }
            if (!(i in n)) {
                if (l.required) throw Error(`Missing key: ${i}`);
                continue;
            }
            if (null == n[i]) {
                r[i] = null;
                continue;
            }
            r[i] = a(e, l.schema, n[i]);
        }
        return r;
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
function u(e) {
    return {
        required: !1,
        schema: e
    };
}
var d = {
        type: c(l),
        id: c(o),
        transports: u(l)
    },
    h = {
        appid: u(l),
        appidExclude: u(l),
        credProps: u(l)
    },
    g = {
        appid: u(l),
        appidExclude: u(l),
        credProps: u(l)
    };
c({
    rp: c(l),
    user: c({
        id: c(o),
        name: c(l),
        displayName: c(l)
    }),
    challenge: c(o),
    pubKeyCredParams: c(l),
    timeout: u(l),
    excludeCredentials: u([d]),
    authenticatorSelection: u(l),
    attestation: u(l),
    extensions: u(h)
}),
    u(l),
    c(l),
    c(l),
    c(o),
    u(l),
    c({
        clientDataJSON: c(o),
        attestationObject: c(o),
        transports: s(l, (e) => {
            var t;
            return (null == (t = e.getTransports) ? void 0 : t.call(e)) || [];
        })
    }),
    s(g, (e) => e.getClientExtensionResults());
var p = {
        mediation: u(l),
        publicKey: c({
            challenge: c(o),
            timeout: u(l),
            rpId: u(l),
            allowCredentials: u([d]),
            userVerification: u(l),
            extensions: u(h)
        }),
        signal: u(l)
    },
    m = {
        type: c(l),
        id: c(l),
        rawId: c(o),
        authenticatorAttachment: u(l),
        response: c({
            clientDataJSON: c(o),
            authenticatorData: c(o),
            signature: c(o),
            userHandle: c(o)
        }),
        clientExtensionResults: s(g, (e) => e.getClientExtensionResults())
    };
function f(e) {
    return a(r, p, e);
}
async function _(e) {
    let t = await navigator.credentials.get(e);
    return (t.toJSON = () => a(i, m, t)), t;
}
