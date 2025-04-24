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
var l = 'copy',
    s = 'convert';
function o(e, t, n) {
    if (t === l) return n;
    if (t === s) return e(n);
    if (t instanceof Array) return n.map((n) => o(e, t[0], n));
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
            r[i] = o(e, l.schema, n[i]);
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
        type: c(l),
        id: c(s),
        transports: u(l)
    },
    h = {
        appid: u(l),
        appidExclude: u(l),
        credProps: u(l)
    },
    p = {
        appid: u(l),
        appidExclude: u(l),
        credProps: u(l)
    };
c({
    rp: c(l),
    user: c({
        id: c(s),
        name: c(l),
        displayName: c(l)
    }),
    challenge: c(s),
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
    c(s),
    u(l),
    c({
        clientDataJSON: c(s),
        attestationObject: c(s),
        transports: a(l, (e) => {
            var t;
            return (null == (t = e.getTransports) ? void 0 : t.call(e)) || [];
        })
    }),
    a(p, (e) => e.getClientExtensionResults());
var g = {
        mediation: u(l),
        publicKey: c({
            challenge: c(s),
            timeout: u(l),
            rpId: u(l),
            allowCredentials: u([d]),
            userVerification: u(l),
            extensions: u(h)
        }),
        signal: u(l)
    },
    f = {
        type: c(l),
        id: c(l),
        rawId: c(s),
        authenticatorAttachment: u(l),
        response: c({
            clientDataJSON: c(s),
            authenticatorData: c(s),
            signature: c(s),
            userHandle: c(s)
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
