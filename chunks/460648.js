function r(e) {
    let t = "==".slice(0, (4 - (e.length % 4)) % 4),
        n = atob(e.replace(/-/g, "+").replace(/_/g, "/") + t),
        r = new ArrayBuffer(n.length),
        i = new Uint8Array(r);
    for (let e = 0; e < n.length; e++) i[e] = n.charCodeAt(e);
    return r;
}
function i(e) {
    let t = new Uint8Array(e),
        n = "";
    for (let e of t) n += String.fromCharCode(e);
    return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
n.d(t, {
    Jt: () => v,
    vt: () => y,
});
var a = "copy",
    s = "convert";
function o(e, t, n) {
    if (t === a) return n;
    if (t === s) return e(n);
    if (t instanceof Array) return n.map((n) => o(e, t[0], n));
    if (t instanceof Object) {
        let r = {};
        for (let [i, a] of Object.entries(t)) {
            if (a.derive) {
                let e = a.derive(n);
                void 0 !== e && (n[i] = e);
            }
            if (!(i in n)) {
                if (a.required) throw Error(`Missing key: ${i}`);
                continue;
            }
            if (null == n[i]) {
                r[i] = null;
                continue;
            }
            r[i] = o(e, a.schema, n[i]);
        }
        return r;
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
        type: c(a),
        id: c(s),
        transports: u(a),
    },
    f = {
        appid: u(a),
        appidExclude: u(a),
        credProps: u(a),
    },
    p = {
        appid: u(a),
        appidExclude: u(a),
        credProps: u(a),
    },
    _ = {
        publicKey: c({
            rp: c(a),
            user: c({
                id: c(s),
                name: c(a),
                displayName: c(a),
            }),
            challenge: c(s),
            pubKeyCredParams: c(a),
            timeout: u(a),
            excludeCredentials: u([d]),
            authenticatorSelection: u(a),
            attestation: u(a),
            extensions: u(f),
        }),
        signal: u(a),
    },
    h = {
        type: c(a),
        id: c(a),
        rawId: c(s),
        authenticatorAttachment: u(a),
        response: c({
            clientDataJSON: c(s),
            attestationObject: c(s),
            transports: l(a, (e) => {
                var t;
                return (null == (t = e.getTransports) ? void 0 : t.call(e)) || [];
            }),
        }),
        clientExtensionResults: l(p, (e) => e.getClientExtensionResults()),
    },
    m = {
        mediation: u(a),
        publicKey: c({
            challenge: c(s),
            timeout: u(a),
            rpId: u(a),
            allowCredentials: u([d]),
            userVerification: u(a),
            extensions: u(f),
        }),
        signal: u(a),
    },
    g = {
        type: c(a),
        id: c(a),
        rawId: c(s),
        authenticatorAttachment: u(a),
        response: c({
            clientDataJSON: c(s),
            authenticatorData: c(s),
            signature: c(s),
            userHandle: c(s),
        }),
        clientExtensionResults: l(p, (e) => e.getClientExtensionResults()),
    };
function E(e) {
    return o(r, _, e);
}
function b(e) {
    return o(i, h, e);
}
async function y(e) {
    return b(await navigator.credentials.create(E(e)));
}
function O(e) {
    return o(r, m, e);
}
function A(e) {
    return o(i, g, e);
}
async function v(e) {
    return A(await navigator.credentials.get(O(e)));
}
