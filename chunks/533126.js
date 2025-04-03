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
var o = 'copy',
    a = 'convert';
function l(e, t, n) {
    if (t === o) return n;
    if (t === a) return e(n);
    if (t instanceof Array) return n.map((n) => l(e, t[0], n));
    if (t instanceof Object) {
        let r = {};
        for (let [i, o] of Object.entries(t)) {
            if (o.derive) {
                let e = o.derive(n);
                void 0 !== e && (n[i] = e);
            }
            if (!(i in n)) {
                if (o.required) throw Error(`Missing key: ${i}`);
                continue;
            }
            if (null == n[i]) {
                r[i] = null;
                continue;
            }
            r[i] = l(e, o.schema, n[i]);
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
        type: c(o),
        id: c(a),
        transports: u(o)
    },
    p = {
        appid: u(o),
        appidExclude: u(o),
        credProps: u(o)
    },
    g = {
        appid: u(o),
        appidExclude: u(o),
        credProps: u(o)
    };
c({
    rp: c(o),
    user: c({
        id: c(a),
        name: c(o),
        displayName: c(o)
    }),
    challenge: c(a),
    pubKeyCredParams: c(o),
    timeout: u(o),
    excludeCredentials: u([d]),
    authenticatorSelection: u(o),
    attestation: u(o),
    extensions: u(p)
}),
    u(o),
    c(o),
    c(o),
    c(a),
    u(o),
    c({
        clientDataJSON: c(a),
        attestationObject: c(a),
        transports: s(o, (e) => {
            var t;
            return (null == (t = e.getTransports) ? void 0 : t.call(e)) || [];
        })
    }),
    s(g, (e) => e.getClientExtensionResults());
var h = {
        mediation: u(o),
        publicKey: c({
            challenge: c(a),
            timeout: u(o),
            rpId: u(o),
            allowCredentials: u([d]),
            userVerification: u(o),
            extensions: u(p)
        }),
        signal: u(o)
    },
    f = {
        type: c(o),
        id: c(o),
        rawId: c(a),
        authenticatorAttachment: u(o),
        response: c({
            clientDataJSON: c(a),
            authenticatorData: c(a),
            signature: c(a),
            userHandle: c(a)
        }),
        clientExtensionResults: s(g, (e) => e.getClientExtensionResults())
    };
function m(e) {
    return l(r, h, e);
}
async function _(e) {
    let t = await navigator.credentials.get(e);
    return (t.toJSON = () => l(i, f, t)), t;
}
