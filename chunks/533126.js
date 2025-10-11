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
    U2: () => y,
    wz: () => g,
});
var i = "copy",
    a = "convert";
function o(e, t, r) {
    if (t === i) return r;
    if (t === a) return e(r);
    if (t instanceof Array) return r.map((r) => o(e, t[0], r));
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
            n[s] = o(e, i.schema, r[s]);
        }
        return n;
    }
}
function l(e, t) {
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
        transports: l(i, (e) => {
            var t;
            return (null == (t = e.getTransports) ? void 0 : t.call(e)) || [];
        }),
    }),
    l(p, (e) => e.getClientExtensionResults());
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
    m = {
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
        clientExtensionResults: l(p, (e) => e.getClientExtensionResults()),
    };
function g(e) {
    return o(n, f, e);
}
async function y(e) {
    let t = await navigator.credentials.get(e);
    return (t.toJSON = () => o(s, m, t)), t;
}
