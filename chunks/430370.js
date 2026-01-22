function n(e) {
    let t = "==".slice(0, (4 - (e.length % 4)) % 4),
        r = atob(e.replace(/-/g, "+").replace(/_/g, "/") + t),
        n = new ArrayBuffer(r.length),
        s = new Uint8Array(n);
    for (let e = 0; e < r.length; e++) s[e] = r.charCodeAt(e);
    return n;
}

function s(e) {
    let t = new Uint8Array(e),
        r = "";
    for (let e of t) r += String.fromCharCode(e);
    return btoa(r).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
r.d(t, {
    Jt: () => g,
    d5: () => m,
});
var i = "copy",
    a = "convert";

function l(e, t, r) {
    if (t === i) return r;
    if (t === a) return e(r);
    if (t instanceof Array) return r.map((r) => l(e, t[0], r));
    if (t instanceof Object) {
        let n = {};
        for (let [s, i] of Object.entries(t)) {
            if (i.derive) {
                let e = i.derive(r);
                void 0 !== e && (r[s] = e);
            }
            if (!(s in r)) {
                if (i.required) throw Error(`Missing key: ${s}`);
                continue;
            }
            if (null == r[s]) {
                n[s] = null;
                continue;
            }
            n[s] = l(e, i.schema, r[s]);
        }
        return n;
    }
}

function o(e, t) {
    return {
        required: !0,
        schema: e,
        derive: t,
    };
}

function c(e) {
    return {
        required: !0,
        schema: e,
    };
}

function u(e) {
    return {
        required: !1,
        schema: e,
    };
}
var d = {
        type: c(i),
        id: c(a),
        transports: u(i),
    },
    h = {
        appid: u(i),
        appidExclude: u(i),
        credProps: u(i),
    },
    p = {
        appid: u(i),
        appidExclude: u(i),
        credProps: u(i),
    };
c({
    rp: c(i),
    user: c({
        id: c(a),
        name: c(i),
        displayName: c(i),
    }),
    challenge: c(a),
    pubKeyCredParams: c(i),
    timeout: u(i),
    excludeCredentials: u([d]),
    authenticatorSelection: u(i),
    attestation: u(i),
    extensions: u(h),
}),
    u(i),
    c(i),
    c(i),
    c(a),
    u(i),
    c({
        clientDataJSON: c(a),
        attestationObject: c(a),
        transports: o(i, (e) => {
            var t;
            return (null == (t = e.getTransports) ? void 0 : t.call(e)) || [];
        }),
    }),
    o(p, (e) => e.getClientExtensionResults());
var f = {
        mediation: u(i),
        publicKey: c({
            challenge: c(a),
            timeout: u(i),
            rpId: u(i),
            allowCredentials: u([d]),
            userVerification: u(i),
            extensions: u(h),
        }),
        signal: u(i),
    },
    y = {
        type: c(i),
        id: c(i),
        rawId: c(a),
        authenticatorAttachment: u(i),
        response: c({
            clientDataJSON: c(a),
            authenticatorData: c(a),
            signature: c(a),
            userHandle: c(a),
        }),
        clientExtensionResults: o(p, (e) => e.getClientExtensionResults()),
    };

function m(e) {
    return l(n, f, e);
}
async function g(e) {
    let t = await navigator.credentials.get(e);
    return (t.toJSON = () => l(s, y, t)), t;
}
